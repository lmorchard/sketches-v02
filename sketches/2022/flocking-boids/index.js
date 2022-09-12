import { pipe, hasComponent } from "bitecs";
import * as World from "../../../lib/world.js";
import * as Stats from "../../../lib/stats.js";
import { Pane } from "tweakpane";
import { autoSizedRenderer, gridRenderer } from "../../../lib/viewport/pixi.js";
import { movementSystem } from "../../../lib/positionMotion";
import { hslToRgb } from "../../../lib/hslToRgb";
import { BoidEntity, BoidSpriteOptions, boidsRenderer } from "./Boid.js";
import { SeekSpeed, seekSpeedSystem } from "./SeekSpeed.js";
import { FlockingBoid, flockingBoidsSystem } from "./FlockingBoid.js";
import { Expiration, expirationSystem, Tombstone } from "./Expiration";
import { Position, Velocity } from "../../../lib/positionMotion";
import { screenBoundsSystem } from "./ScreenBounds.js";

import "../../../index.css";

const NUM_WANDERERS = 200;

async function main() {
  const world = World.init();
  const stats = Stats.init();
  const pane = new Pane();

  world.run(
    pipe(
      flockingBoidsSystem(),
      seekSpeedSystem(),
      screenBoundsSystem(),
      movementSystem(),
      expirationSystem({
        onRemove: (eid) => {
          if (hasComponent(world, Tombstone, eid)) return;
          spawnTombstoneForBoid(world, eid);
          spawnBoid(world);
        },
      }),
      tweakPaneUpdateSystem({ pane })
    ),
    pipe(autoSizedRenderer(), boidsRenderer(), gridRenderer()),
    stats
  );

  for (let idx = 0; idx < NUM_WANDERERS; idx++) {
    spawnBoid(world);
  }

  console.log("READY.");
}

const spawnBoid = (world) => {
  const angle = Math.PI * 2 * Math.random();
  const x = 1000 * Math.cos(angle);
  const y = 1000 * Math.sin(angle);

  const boid = BoidEntity.spawn(world, {
    Position: { x: x, y: y, r: 0 },
    Velocity: {
      x: -300 + Math.random() * 600,
      y: -300 + Math.random() * 600,
      r: 0,
    },
    BoidSpriteOptions: {
      scaleX: 0.125,
      scaleY: 0.125,
      lineWidth: 10.0,
      color: hslToRgb(Math.random(), 1.0, 0.5),
      faceHeading: 1,
    },
  });
  boid.addComponents(world, { Expiration, SeekSpeed, FlockingBoid });
  boid.Expiration.timeToLive = Math.random() * 30.0;
  Object.assign(boid.SeekSpeed, {
    acceleration: 1.0,
    targetSpeed: 200,
  });
  Object.assign(boid.FlockingBoid, {
    flockGroup: 1,
    visualRange: 25,
    visualEntityLimit: 7,
    centeringFactor: 0.005,
    avoidFactor: 0.05,
    avoidMinDistance: 20,
    matchingFactor: 0.05,
  });
};

const spawnTombstoneForBoid = (world, eid) => {
  const boid = BoidEntity.spawn(world, {
    Position: {
      x: Position.x[eid],
      y: Position.y[eid],
      r: 0,
    },
    Velocity: {
      x: Velocity.x[eid],
      y: Velocity.y[eid],
      r: Math.PI * 10,
    },
    BoidSpriteOptions: {
      scaleX: 0.125,
      scaleY: 0.125,
      lineWidth: 8.0,
      faceHeading: 0,
      color: BoidSpriteOptions.color[eid],
    },
  });
  boid.addComponents(world, { Expiration, Tombstone });
  boid.Expiration.timeToLive = 0.5;
};

const tweakPaneUpdateSystem = ({ pane }) => {
  const f = pane.addFolder({ title: document.title, expanded: true });
  return (world) => {
    pane.refresh();
    return world;
  };
};

main().catch(console.error);
