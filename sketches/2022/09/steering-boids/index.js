import { pipe, hasComponent, defineQuery, removeEntity } from "bitecs";
import { Pane } from "tweakpane";
import * as World from "../../../../lib/core/world.js";
import * as Stats from "../../../../lib/core/stats.js";
import { autoSizedRenderer, gridRenderer } from "../../../../lib/viewport/pixi.js";
import {
  Position,
  Velocity,
  movementSystem,
} from "../../../../lib/PositionMotion.js";
import { spritesRenderer } from "../../../../lib/core/sprites.js";
import { hslToRgb } from "../../../../lib/utils/hslToRgb.js";
import { BoidEntity, BoidSprite } from "../../../../lib/Boid.js";
import { Wanderer, wandererSystem } from "../../../../lib/Wanderer.js";
import { HeadingAndSpeed } from "../../../../lib/HeadingAndSpeed.js";
import { spawnerSystem } from "../../../../lib/Spawner.js";
import {
  Expiration,
  expirationSystem,
  Tombstone,
} from "../../../../lib/Expiration.js";
import {
  ExplosionEntity,
  ExplosionSprite,
  explosionsUpdateSystem,
} from "../../../../lib/Explosion.js";
import {
  Steering,
  MaintainSpeed,
  Seek,
  Flee,
  Wander,
  AvoidObstacles,
  AvoidBorder,
  Obstacle,
  steeringSystem,
  steeringBoidsDebugRenderer,
} from "../../../../lib/Steering.js";
import { AsteroidEntity, AsteroidSprite } from "../../../../lib/Asteroid.js";
import {
  positionIndexService,
  positionIndexSystem,
} from "../../../../lib/PositionIndex.js";
import {
  collisionService,
  collisionSystem,
  collisionDebugRenderer,
  Collidable,
} from "../../../../lib/Collisions.js";
import {
  Bounce,
  bounceSystem,
  bounceDebugRenderer,
} from "../../../../lib/Bouncer.js";
import { GoalPosition, goalPositionSystem } from "../../../../lib/GoalPosition.js";

import "../../../../index.css";

/*
TODO:
- [ ] add entity pursuit steering
- [ ] add entity evade steering
*/

const NUM_WANDERERS = 0; // 10;
const NUM_ASTEROIDS_PER_RING = 10;
const MAX_BOIDS = 50;

async function main() {
  const world = World.init();
  const stats = Stats.init();

  // world.debug = true;

  const pane = new Pane();
  const paneRoot = pane.addFolder({ title: document.title, expanded: true });
  world.addToPane(paneRoot);

  const spawnerOptions = {
    entityQuery: defineQuery([Expiration, Steering]),
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

  const onGoalPositionMet = (world, eid) => {
    spawnTombstoneForBoid(world, eid);
    removeEntity(world, eid);
  };

  const wanderers = [];
  for (let idx = 0; idx < NUM_WANDERERS; idx++) {
    wanderers.push(spawnWanderer(world));
  }

  const asteroids = [];
  [/*425, */ 375, 275, 175].forEach((spawnDistance) => {
    let angle = 0;
    const angleStep = (Math.PI * 2) / NUM_ASTEROIDS_PER_RING;
    for (let idx = 0; idx < NUM_ASTEROIDS_PER_RING; idx++) {
      angle += angleStep * (1.0 + (-0.25 + 0.5 * Math.random()));
      const x = spawnDistance * Math.cos(angle);
      const y = spawnDistance * Math.sin(angle);
      asteroids.push(spawnAsteroid(world, x, y));
    }
  });

  spawnTarget(world, 0, 0);

  world.run(
    pipe(
      spawnerSystem(spawnerOptions),
      explosionsUpdateSystem(),
      positionIndexSystem(),
      collisionSystem(),
      steeringSystem(steeringBoidsOptions),
      bounceSystem(),
      movementSystem(),
      expirationSystem(onExpiration),
      goalPositionSystem(onGoalPositionMet),
      tweakPaneUpdateSystem({ pane })
    ),
    pipe(
      autoSizedRenderer(),
      gridRenderer(),
      spritesRenderer([
        [BoidEntity, BoidSprite],
        [ExplosionEntity, ExplosionSprite],
        [AsteroidEntity, AsteroidSprite],
      ]),
      collisionDebugRenderer(),
      steeringBoidsDebugRenderer(),
      bounceDebugRenderer()
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
  const color = hslToRgb(Math.random(), 1.0, 0.5);

  return BoidEntity.spawn(world)
    .add({
      Expiration,
      Steering,
      MaintainSpeed,
      Seek,
      Flee,
      Wander,
      AvoidObstacles,
      AvoidBorder,
      Obstacle,
      Collidable,
      Bounce,
      GoalPosition,
    })
    .set({
      MaintainSpeed: { maxSpeed: 200, acceleration: 10, braking: 10 },
      Seek: { force: 10, x: 0, y: 0 },
      Flee: { force: 0, x: 0, y: 0 },
      Wander: { force: 5, distance: 10, radius: 10 },
      AvoidObstacles: {
        force: 20,
        range: 75,
        radius: 10,
        groups: [1],
        viewAngle: 1.5,
      },
      AvoidBorder: {
        force: 50,
        originX: 0,
        originY: 0,
        marginX: 75,
        marginY: 75,
      },
      Position: { x: x, y: y, r: 0 },
      GoalPosition: { x: 0, y: 0, threshold: 50 },
      Velocity: { x: 50, y: 0 },
      SpriteOptions: { scaleX: 0.125, scaleY: 0.125, lineWidth: 15.0, color },
      Expiration: { timeToLive: 5 + Math.random() * 20.0 },
      Obstacle: { groups: [1], radius: 10 },
      Collidable: { group: 1, radius: 10 },
      Bounce: { mass: 10 },
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
    .add({ Obstacle, Collidable, Bounce })
    .set({
      Position: { x, y },
      Velocity: { r: Math.PI * (-0.5 + 1.0 * Math.random()) },
      SpriteOptions: { scaleX: 0.5, scaleY: 0.5, lineWidth: 3.0 },
      Obstacle: { groups: [1], radius: 25 },
      Collidable: { group: 1, radius: 25 },
      Bounce: { mass: 1000 },
    });
};

const spawnTarget = (world, x, y) => {
  return BoidEntity.spawn(world)
    .add({ Obstacle, Collidable, Bounce })
    .set({
      Position: { x: 0, y: 0, r: -Math.PI / 2 },
      Velocity: { x: 0, y: 0 },
      SpriteOptions: {
        scaleX: 0.5,
        scaleY: 0.5,
        lineWidth: 3.0,
        color: 0x33ff33,
      },
      Obstacle: { groups: [1], radius: 25 },
      Collidable: { group: 1, radius: 25 },
      Bounce: { mass: 100000 },
    });
};

main().catch(console.error);