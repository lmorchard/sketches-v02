import { pipe, hasComponent, defineQuery, removeEntity } from "bitecs";
import { Pane } from "tweakpane";
import * as World from "../../../../lib/core/world.js";
import * as Stats from "../../../../lib/core/stats.js";
import {
  autoSizedRenderer,
  gridRenderer,
} from "../../../../lib/viewport/pixi.js";
import { movementSystem } from "../../../../lib/positionMotion.js";
import { spritesRenderer } from "../../../../lib/core/sprites.js";
import { entityUpdater } from "../../../../lib/core/entities.js";
import { spawnerSystem } from "../../../../lib/Spawner.js";
import {
  ExplosionEntity,
  ExplosionSprite,
  explosionsUpdateSystem,
} from "../../../../lib/Explosion.js";
import {
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

import { rngIntRange } from "../../../../lib/utils/utils.js";
import { BrickEntity, BrickSprite } from "./Brick.js";
import { BallEntity, BallSprite } from "./Ball.js";

import "../../../../index.css";

/*
TODO:

- [ ] tweak collision system to support rectangles
- [ ] add a health + heal + hurt system
- [ ] bounce boundaries for side and top walls
- [ ] expiration boundary for bottom wall
*/

async function main() {
  const world = World.init();
  const stats = Stats.init();

  world.debug = true;

  const pane = new Pane();
  const paneRoot = pane.addFolder({ title: document.title, expanded: true });
  world.addToPane(paneRoot);

  spawnBricks(world);

  world.run(
    pipe(
      entityUpdater([[BrickEntity], [BallEntity]]),
      spawnerSystem({
        entityQuery: BallEntity.query,
        spawnEntity: spawnBall,
        maxEntities: 50,
        maxPerFrame: 1,
        spawnDelay: 0,
      }),
      ballOutOfBoundsSystem(),
      explosionsUpdateSystem(),
      positionIndexSystem(),
      collisionSystem(),
      steeringSystem(),
      bounceSystem({
        separationFactor: 1.0,
      }),
      movementSystem(),
      tweakPaneUpdateSystem({ pane })
    ),
    pipe(
      autoSizedRenderer(),
      spritesRenderer([
        [BrickEntity, BrickSprite],
        [BallEntity, BallSprite],
      ]),
      gridRenderer(),

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

function spawnBall(world, startX = -400, maxX = 400, startY = 500) {
  const x = rngIntRange(Math.random, startX, maxX);
  const y = startY;

  const ball = BallEntity.spawn(world, {
    Ball: { radius: 10 },
    Position: { x, y },
    Velocity: { x: 0, y: rngIntRange(Math.random, -50, -200) },
  });
}

function spawnBricks(
  world,
  startX = -500,
  maxX = 600,
  startY = -400,
  maxY = 0,
  brickWidth = 75,
  brickHeight = 25,
  margin = 40
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
        Collidable: { radius: brickHeight },
      });
      bricks.push(brick);
    }
  }
  return bricks;
}

main().catch(console.error);
