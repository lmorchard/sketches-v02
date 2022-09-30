import { pipe, hasComponent, defineQuery, removeEntity } from "bitecs";
import { Pane } from "tweakpane";
import * as World from "../../../../lib/core/world.js";
import * as Stats from "../../../../lib/core/stats.js";
import {
  autoSizedRenderer,
  gridRenderer,
} from "../../../../lib/viewport/pixi.js";
import { movementSystem } from "../../../../lib/PositionMotion.js";
import { spritesRenderer } from "../../../../lib/core/sprites.js";
import { entityUpdater } from "../../../../lib/core/entities.js";
import { spawnerSystem } from "../../../../lib/Spawner.js";
import {
  ExplosionEntity,
  ExplosionSprite,
  explosionsUpdateSystem,
} from "../../../../lib/Explosion.js";
import {
  Expiration,
  expirationSystem,
  Tombstone,
} from "../../../../lib/Expiration.js";
import {
  steeringSystem,
  steeringBoidsDebugRenderer,
} from "../../../../lib/Steering.js";
import { AsteroidEntity, AsteroidSprite } from "../../../../lib/Asteroid.js";
import {
  positionIndexService,
  positionIndexSystem,
  positionIndexDebugRenderer,
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
import {
  Health,
  healthService,
  healthSystem,
  healthDebugRenderer,
} from "../../../../lib/Health.js";

import { rngIntRange } from "../../../../lib/utils/utils.js";
import { BrickEntity, BrickSprite } from "./Brick.js";
import { BallEntity, BallSprite } from "./Ball.js";
import { BoundaryEntity, BoundarySprite } from "./Boundary.js";

import "../../../../index.css";

/*
TODO:

- [x] tweak collision system to support rectangles
- [x] add a health + heal + hurt system
- [ ] bounce boundaries for side and top walls
- [ ] expiration boundary for bottom wall
- [ ] add health-based changes to bricks - e.g. cracks
*/

async function main() {
  const world = World.init();
  const stats = Stats.init();

  world.debug = true;

  const pane = new Pane();
  const paneRoot = pane.addFolder({ title: document.title, expanded: true });
  world.addToPane(paneRoot);

  spawnBoundaries(world);
  spawnBricks(world);

  world.run(
    pipe(
      healthSystem(),
      spawnerSystem({
        entityQuery: BallEntity.query,
        spawnEntity: spawnBall,
        maxEntities: 10,
        maxPerFrame: 1,
        spawnDelay: 0,
      }),
      entityUpdater([[BrickEntity], [BallEntity], [BoundaryEntity]]),
      ballOutOfBoundsSystem(),
      explosionsUpdateSystem(),
      positionIndexSystem(),
      movementSystem(),
      expirationSystem(),
      collisionSystem(),
      steeringSystem(),
      bounceSystem({ separationFactor: 0.2 }),
      tweakPaneUpdateSystem({ pane })
    ),
    pipe(
      autoSizedRenderer(),
      spritesRenderer([
        [BrickEntity, BrickSprite],
        [BallEntity, BallSprite],
        [BoundaryEntity, BoundarySprite],
        [ExplosionEntity, ExplosionSprite],
      ]),
      gridRenderer(),
      healthDebugRenderer(),
      positionIndexDebugRenderer(),
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

const ballOutOfBoundsSystem = (options = {}) => {
  const ball = new BallEntity();
  return (world) => {
    const { marginX = 100, marginY = 100 } = options;
    const {
      renderer: { width, height },
    } = world;
    for (const eid of BallEntity.query(world)) {
      ball.using(eid, world);
      const { x, y } = ball.Position;
      const hwidth = (width + marginX) / 2;
      const hheight = (height + marginY) / 2;
      if (x < -hwidth || x > hwidth || y < -hheight || y > hheight) {
        ball.remove();
      }
    }
    return world;
  };
};

const tweakPaneUpdateSystem = ({ pane }) => {
  return (world) => {
    pane.refresh();
    return world;
  };
};

function spawnBoundaries(world) {
  BoundaryEntity.spawn(world, {
    Position: { x: -600, y: 0 },
    Boundary: { width: 40, height: 800 },
    Collidable: { length: 800, radius: 20 },
  });
  BoundaryEntity.spawn(world, {
    Position: { x: 600, y: 0 },
    Boundary: { width: 40, height: 800 },
    Collidable: { length: 800, radius: 20 },
  });
  BoundaryEntity.spawn(world, {
    Position: { x: 0, y: -450, r: Math.PI / 2 },
    Boundary: { width: 40, height: 1250 },
    Collidable: { length: 1250, radius: 20 },
  });
}

function spawnBall(
  world,
  { ballSize = 10, startX = -400, maxX = 400, startY = 500 } = {}
) {
  const x = rngIntRange(Math.random, startX, maxX);
  const y = startY;

  const ball = BallEntity.spawn(world, {
    Position: { x, y },
    Velocity: { x: 0, y: rngIntRange(Math.random, -50, -200) },
    Ball: { radius: ballSize },
    MaintainSpeed: { maxSpeed: rngIntRange(Math.random, 100, 500) },
    Collidable: { length: ballSize * 2, radius: ballSize },
  });
}

function spawnBricks(
  world,
  startX = -500,
  maxX = 700,
  startY = -350,
  maxY = 0,
  brickWidth = 75,
  brickHeight = 25,
  margin = 50
) {
  const xCount = Math.floor((maxX - startX) / (brickWidth + margin));
  const yCount = Math.floor((maxY - startY) / (brickHeight + margin));
  const bricks = [];
  for (let x = 0; x < xCount; x++) {
    for (let y = 0; y < yCount; y++) {
      const xPosition = startX + x * (brickWidth + margin);
      const yPosition = startY + y * (brickHeight + margin);
      const brick = BrickEntity.spawn(world, {
        Brick: { width: brickWidth, height: brickHeight },
        Position: { x: xPosition, y: yPosition },
        Obstacle: { radius: brickHeight },
        Collidable: { length: brickHeight, radius: brickWidth / 2 },
      });
      bricks.push(brick);
    }
  }
  return bricks;
}

main().catch(console.error);
