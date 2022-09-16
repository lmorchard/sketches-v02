import { pipe, hasComponent, defineQuery } from "bitecs";
import { Pane } from "tweakpane";
import * as World from "../../../lib/world.js";
import * as Stats from "../../../lib/stats.js";
import { autoSizedRenderer, gridRenderer } from "../../../lib/viewport/pixi.js";
import {
  Position,
  Velocity,
  movementSystem,
} from "../../../lib/positionMotion.js";
import { spritesRenderer } from "../../../lib/sprites.js";
import { hslToRgb } from "../../../lib/hslToRgb.js";
import { BoidEntity, BoidSprite } from "../../../lib/Boid.js";
import { headingAndSpeedSystem } from "../../../lib/HeadingAndSpeed.js";
import { Wanderer, wandererSystem } from "../../../lib/Wanderer.js";
import { HeadingAndSpeed } from "../../../lib/HeadingAndSpeed.js";
import { spawnerSystem } from "../../../lib/Spawner.js";
import {
  Expiration,
  expirationSystem,
  Tombstone,
} from "../../../lib/Expiration.js";
import {
  ExplosionEntity,
  ExplosionSprite,
  explosionsUpdateSystem,
} from "../../../lib/Explosion.js";
import {
  AvoidScreenBounds,
  screenBoundsSystem,
} from "../../../lib/ScreenBounds.js";
import { SteeringBoid, steeringBoidsSystem } from "./SteeringBoid.js";
import { AsteroidEntity, AsteroidSprite } from "../../../lib/Asteroid.js";

import "../../../index.css";

const NUM_WANDERERS = 10;
const NUM_ASTEROIDS = 12;
const MAX_BOIDS = 10;

async function main() {
  const world = World.init();
  const stats = Stats.init();
  const pane = new Pane();

  const spawnerOptions = {
    entityQuery: defineQuery([Expiration, SteeringBoid]),
    spawnEntity: spawnBoid,
    maxEntities: MAX_BOIDS,
    maxPerFrame: 20,
    spawnDelay: 0.25,
  };

  const steeringBoidsOptions = {};

  const screenBoundsOptions = {
    marginX: 100,
    marginY: 100,
    originTurnFactor: 25.0,
  };

  const onExpiration = (eid) => {
    if (hasComponent(world, Tombstone, eid)) return;
    spawnTombstoneForBoid(world, eid);
  };

  const wanderers = [];
  for (let idx = 0; idx < NUM_WANDERERS; idx++) {
    wanderers.push(spawnWanderer(world));
  }

  const asteroids = [];
  let angle = 0;
  const angleStep = (Math.PI * 2) / NUM_ASTEROIDS;
  for (let idx = 0; idx < NUM_ASTEROIDS; idx++) {
    angle += angleStep * (1.0 + (-0.25 + (0.5 * Math.random())));
    const x = 300 * Math.cos(angle);
    const y = 300 * Math.sin(angle);
    asteroids.push(spawnAsteroid(world, x, y));
  }

  world.run(
    pipe(
      spawnerSystem(spawnerOptions),
      steeringBoidsSystem(steeringBoidsOptions),
      explosionsUpdateSystem(),
      screenBoundsSystem(screenBoundsOptions),
      wandererSystem(),
      headingAndSpeedSystem(),
      movementSystem(),
      expirationSystem(onExpiration),
      tweakPaneUpdateSystem({ pane })
    ),
    pipe(
      autoSizedRenderer(),
      spritesRenderer([
        [BoidEntity, BoidSprite],
        [ExplosionEntity, ExplosionSprite],
        [AsteroidEntity, AsteroidSprite],
      ]),
      gridRenderer()
    ),
    stats
  );

  console.log("READY.");
}

const tweakPaneUpdateSystem = ({ pane }) => {
  const f = pane.addFolder({ title: document.title, expanded: true });

  return (world) => {
    pane.refresh();
    return world;
  };
};

const spawnWanderer = (world) => {
  return BoidEntity.spawn(world)
    .add({ HeadingAndSpeed, Wanderer })
    .set({
      Position: {
        x: -200 + Math.random() * 400,
        y: -200 + Math.random() * 400,
        r: 0,
      },
      SpriteOptions: {
        scaleX: 0.25,
        scaleY: 0.25,
        lineWidth: 4.0,
        color: hslToRgb(Math.random(), 1.0, 0.5),
      },
      HeadingAndSpeed: {
        heading: Math.PI * 2 * Math.random(),
        speed: 50 + 200 * Math.random(),
      },
      Wanderer: { originX: 0, originY: 0, maxDistance: 500 },
    });
};

const spawnBoid = (world) => {
  const angle = Math.PI * 2 * Math.random();
  const x = 600 * Math.cos(angle);
  const y = 600 * Math.sin(angle);

  return BoidEntity.spawn(world)
    .add({ Expiration, SteeringBoid, AvoidScreenBounds })
    .set({
      SteeringBoid: {
        maxSpeed: 300,
        acceleration: 10,
        braking: 10,
        seekFactor: 10,
        seekX: -200 + Math.random() * 400,
        seekY: -200 + Math.random() * 400,
      },
      Velocity: { x: 100, y: 0 },
      Position: { x: x, y: y, r: 0 },
      Expiration: { timeToLive: Math.random() * 30.0 },
      SpriteOptions: {
        scaleX: 0.125,
        scaleY: 0.125,
        lineWidth: 10.0,
        color: hslToRgb(Math.random(), 1.0, 0.5),
      },
    });
};

const spawnTombstoneForBoid = (world, eid) => {
  return ExplosionEntity.spawn(world)
    .add({ Expiration, Tombstone })
    .set({
      Position: { x: Position.x[eid], y: Position.y[eid], r: 0 },
      Expiration: { timeToLive: 1.0 },
      Velocity: { x: Velocity.x[eid] / 3, y: Velocity.y[eid] / 3, r: 0 },
      SpriteOptions: { scaleX: 0.5, scaleY: 0.5, lineWidth: 2.0 },
    });
};

const spawnAsteroid = (world, x, y) => {
  return AsteroidEntity.spawn(world, {
    Position: { x, y },
    Velocity: { r: Math.PI * ( -0.5 + 1.0 * Math.random()) }
  });
}

main().catch(console.error);
