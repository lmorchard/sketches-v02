import { pipe, hasComponent } from "bitecs";
import { Pane } from "tweakpane";
import * as World from "../../../lib/world.js";
import * as Stats from "../../../lib/stats.js";
import { autoSizedRenderer, gridRenderer } from "../../../lib/viewport/pixi.js";
import { hslToRgb } from "../../../lib/hslToRgb.js";
import {
  Position,
  Velocity,
  movementSystem,
} from "../../../lib/positionMotion.js";
import { spritesRenderer } from "../../../lib/sprites.js";
import { SeekSpeed, seekSpeedSystem } from "../../../lib/SeekSpeed.js";
import { FlockingBoid, flockingBoidsSystem } from "./FlockingBoid.js";
import {
  Expiration,
  expirationSystem,
  Tombstone,
} from "../../../lib/Expiration.js";
import { screenBoundsSystem } from "../../../lib/ScreenBounds.js";
import { spawnerSystem } from "../../../lib/Spawner.js";
import { BoidEntity, BoidSprite } from "../../../lib/Boid.js";
import {
  ExplosionEntity,
  ExplosionSprite,
  explosionsUpdateSystem,
} from "../../../lib/Explosion.js";

import "../../../index.css";

const MAX_BOIDS = 200;

async function main() {
  const world = World.init();
  const stats = Stats.init();

  const spawnerOptions = {
    entityQuery: BoidEntity.query,
    spawnEntity: spawnBoid,
    maxEntities: MAX_BOIDS,
    maxPerFrame: 20,
    spawnDelay: 0.25,
  };

  const flockingBoidsOptions = {
    visualRange: 30,
    visualEntityLimit: 7,
    centeringFactor: 0.005,
    avoidFactor: 0.05,
    avoidMinDistance: 20,
    matchingFactor: 0.05,
  };

  const { pane, rootFolder } = setupTweakPane({
    spawnerOptions,
    flockingBoidsOptions,
  });

  world.run(
    pipe(
      spawnerSystem(spawnerOptions),
      flockingBoidsSystem(flockingBoidsOptions),
      explosionsUpdateSystem(),
      seekSpeedSystem(),
      screenBoundsSystem(),
      movementSystem(),
      expirationSystem((eid) => {
        if (hasComponent(world, Tombstone, eid)) return;
        spawnTombstoneForBoid(world, eid);
      }),
      tweakPaneUpdateSystem(pane, rootFolder)
    ),
    pipe(
      autoSizedRenderer(),
      spritesRenderer([
        [BoidEntity, BoidSprite],
        [ExplosionEntity, ExplosionSprite],
      ]),
      gridRenderer()
    ),
    stats
  );

  console.log("READY.");
}

function setupTweakPane({ spawnerOptions, flockingBoidsOptions }) {
  const pane = new Pane();
  const rootFolder = pane.addFolder({ title: document.title, expanded: true });

  rootFolder.addInput(flockingBoidsOptions, "visualRange", {
    min: 5,
    max: 200,
    step: 1,
  });
  rootFolder.addInput(flockingBoidsOptions, "visualEntityLimit", {
    min: 3,
    max: 12,
    step: 1,
  });
  rootFolder.addInput(flockingBoidsOptions, "centeringFactor", {
    min: 0.001,
    max: 1.0,
    step: 0.001,
  });
  rootFolder.addInput(flockingBoidsOptions, "avoidFactor", {
    min: 0.01,
    max: 1.0,
    step: 0.01,
  });
  rootFolder.addInput(flockingBoidsOptions, "avoidMinDistance", {
    min: 5,
    max: 100,
    step: 1,
  });
  rootFolder.addInput(flockingBoidsOptions, "matchingFactor", {
    min: 0.01,
    max: 1.0,
    step: 0.01,
  });

  rootFolder.addInput(spawnerOptions, "maxEntities", { min: 10, max: 1000 });

  return { pane, rootFolder };
}

const tweakPaneUpdateSystem = (pane, rootFolder) => {
  const watch = {
    boidsCount: 0,
  };
  Object.keys(watch).forEach((name) => rootFolder.addMonitor(watch, name));

  return (world) => {
    watch.boidsCount = BoidEntity.query(world).length;
    pane.refresh();
    return world;
  };
};

const spawnBoid = (world) => {
  const angle = Math.PI * 2 * Math.random();
  const x = 1000 * Math.cos(angle);
  const y = 1000 * Math.sin(angle);

  return BoidEntity.spawn(world)
    .add({ Expiration, SeekSpeed, FlockingBoid })
    .set({
      Position: { x: x, y: y, r: 0 },
      Velocity: {
        x: -300 + Math.random() * 600,
        y: -300 + Math.random() * 600,
        r: 0,
      },
      SpriteOptions: {
        scaleX: 0.125,
        scaleY: 0.125,
        lineWidth: 10.0,
        color: hslToRgb(Math.random(), 1.0, 0.5),
        faceHeading: 1,
      },
      Expiration: { timeToLive: Math.random() * 30.0 },
      SeekSpeed: {
        acceleration: 1.0,
        targetSpeed: 200,
      },
      FlockingBoid: {
        flockGroup: 1,
      },
    });
};

const spawnTombstoneForBoid = (world, eid) =>
  ExplosionEntity.spawn(world)
    .add({ Expiration, Tombstone })
    .set({
      Position: {
        x: Position.x[eid],
        y: Position.y[eid],
        r: 0,
      },
      Velocity: {
        x: Velocity.x[eid] / 3,
        y: Velocity.y[eid] / 3,
        r: 0, // Math.PI * 10,
      },
      SpriteOptions: {
        scaleX: 0.5,
        scaleY: 0.5,
        lineWidth: 2.0,
        //color: BoidSpriteOptions.color[eid],
      },
      Expiration: { timeToLive: 1.0 },
    });

main().catch(console.error);
