import { pipe, hasComponent, defineQuery } from "bitecs";
import { Pane } from "tweakpane";
import * as World from "../../../lib/core/world.js";
import * as Stats from "../../../lib/core/stats.js";
import { autoSizedRenderer, gridRenderer } from "../../../lib/viewport/pixi.js";
import {
  Position,
  Velocity,
  movementSystem,
} from "../../../lib/positionMotion.js";
import { spritesRenderer } from "../../../lib/core/sprites.js";
import { hslToRgb } from "../../../lib/utils/hslToRgb.js";
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
import { AvoidScreenBounds } from "../../../lib/ScreenBounds.js";
import { SteeringBoid, Obstacle, steeringBoidsSystem } from "./SteeringBoid.js";
import { AsteroidEntity, AsteroidSprite } from "../../../lib/Asteroid.js";
import {
  positionIndexService,
  positionIndexSystem,
} from "../../../lib/PositionIndex.js";
import {
  collisionService,
  collisionSystem,
  Collidable,
} from "../../../lib/Collisions.js";

import "../../../index.css";

const NUM_WANDERERS = 0; // 10;
const NUM_ASTEROIDS = 10;
const MAX_BOIDS = 50;

/*
TODO:
- abstract world.stage from autoSizedRenderer behind a symbol and a service
- start adding debug draw to collision avoidance?
- create a time service for accessing world-stored timers?
*/

async function main() {
  const world = World.init();
  const stats = Stats.init();

  const pane = new Pane();
  const paneRoot = pane.addFolder({ title: document.title, expanded: true });
  world.addToPane(paneRoot);

  const spawnerOptions = {
    entityQuery: defineQuery([Expiration, SteeringBoid]),
    spawnEntity: spawnBoid,
    maxEntities: MAX_BOIDS,
    maxPerFrame: 20,
    spawnDelay: 0.25,
  };

  const steeringBoidsOptions = {};

  const onExpiration = (eid) => {
    if (hasComponent(world, Tombstone, eid)) return;
    spawnTombstoneForBoid(world, eid);
  };

  const wanderers = [];
  for (let idx = 0; idx < NUM_WANDERERS; idx++) {
    wanderers.push(spawnWanderer(world));
  }

  const asteroids = [];
  [375, 275, 175].forEach((spawnDistance) => {
    let angle = 0;
    //const spawnDistance = 175;
    const angleStep = (Math.PI * 2) / NUM_ASTEROIDS;
    for (let idx = 0; idx < NUM_ASTEROIDS; idx++) {
      angle += angleStep * (1.0 + (-0.25 + 0.5 * Math.random()));
      const x = spawnDistance * Math.cos(angle);
      const y = spawnDistance * Math.sin(angle);
      asteroids.push(spawnAsteroid(world, x, y));
    }
  });

  world.run(
    pipe(
      spawnerSystem(spawnerOptions),
      steeringBoidsSystem(steeringBoidsOptions),
      explosionsUpdateSystem(),
      wandererSystem(),
      headingAndSpeedSystem(),
      movementSystem(),
      positionIndexSystem(),
      collisionSystem(),
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

  Object.assign(window, {
    world,
    positionIndexService,
    collisionService,
    Collidable,
  });
  console.log("READY.");
}

const tweakPaneUpdateSystem = ({ pane }) => {
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
  const x = 800 * Math.cos(angle);
  const y = 800 * Math.sin(angle);

  return BoidEntity.spawn(world)
    .add({ Expiration, SteeringBoid, AvoidScreenBounds, Collidable })
    .set({
      Collidable: {
        group: 1,
        radius: 50,
      },
      SteeringBoid: {
        maxSpeed: 200,
        acceleration: 2,
        braking: 2,

        seekForce: 10,
        seekX: 0,
        seekY: 0,

        fleeForce: 0,
        fleeX: 0,
        fleeY: 0,

        wanderForce: 5,
        wanderDistance: 20,
        wanderRadius: 10,

        avoidObstaclesForce: 15,
        avoidObstaclesGroups: [1],
        avoidObstaclesRange: 100,

        avoidBorderForce: 50,
        originX: 0,
        originY: 0,
        marginX: 75,
        marginY: 75,
      },
      Velocity: { x: 50, y: 0 },
      Position: { x: x, y: y, r: 0 },
      Expiration: { timeToLive: Math.random() * 15.0 },
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
  return AsteroidEntity.spawn(world)
    .add({ Obstacle })
    .set({
      Position: { x, y },
      Velocity: { r: Math.PI * (-0.5 + 1.0 * Math.random()) },
      SpriteOptions: { scaleX: 0.5, scaleY: 0.5, lineWidth: 2.0 },
      Obstacle: { groups: [1], radius: 50 },
    });
};

main().catch(console.error);
