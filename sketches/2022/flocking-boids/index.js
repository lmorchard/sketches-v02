import { pipe } from "bitecs";
import * as World from "../../../lib/world.js";
import * as Stats from "../../../lib/stats.js";
import { Pane } from "tweakpane";
import { autoSizedRenderer, gridRenderer } from "../../../lib/viewport/pixi.js";
import { movementSystem } from "../../../lib/positionMotion";
import { hslToRgb } from "../../../lib/hslToRgb";
import { BoidEntity, boidsRenderer } from "./Boid.js";
import { SeekSpeed, seekSpeedSystem } from "./SeekSpeed.js";
import { FlockingBoid, flockingBoidsSystem } from "./FlockingBoid.js";
import { Expiration, expirationSystem } from "./Expiration";

import "../../../index.css";

const NUM_WANDERERS = 100;

async function main() {
  const world = World.init();
  const stats = Stats.init();
  const pane = new Pane();

  for (let idx = 0; idx < NUM_WANDERERS; idx++) {
    spawnBoid(world);
  }

  world.run(
    pipe(
      flockingBoidsSystem(),
      seekSpeedSystem(),
      movementSystem(),
      expirationSystem({
        onRemove: () => spawnBoid(world),
      }),
      tweakPaneUpdateSystem({ pane /* wanderingBoid */ })
    ),
    pipe(autoSizedRenderer(), boidsRenderer(), gridRenderer()),
    stats
  );

  console.log("READY.");
}

const spawnBoid = (world) => {
  const boid = BoidEntity.spawn(world, {
    Position: {
      x: 0,
      y: 0,
      r: 0,
    },
    Velocity: {
      x: -300 + Math.random() * 600,
      y: -300 + Math.random() * 600,
      r: 0,
    },
    BoidSpriteOptions: {
      scaleX: 0.125,
      scaleY: 0.125,
      lineWidth: 8.0,
      color: hslToRgb(Math.random(), 1.0, 0.5),
    },
  });
  boid.addComponents(world, { Expiration, SeekSpeed, FlockingBoid });
  boid.Expiration.timeToLive = Math.random() * 20.0;
  Object.assign(boid.SeekSpeed, {
    acceleration: 1.0,
    targetSpeed: 500,
  });
  Object.assign(boid.FlockingBoid, {
    flockGroup: 1,
    visualRange: 75,
    visualEntityLimit: 7,
    centeringFactor: 0.005,
    avoidFactor: 0.05,
    avoidMinDistance: 15,
    matchingFactor: 0.05,
    originX: 0,
    originY: 0,
    originTurnFactor: 10.0,
    maxOriginDistance: 350,
  });
};

const tweakPaneUpdateSystem = ({ pane }) => {
  const f = pane.addFolder({ title: document.title, expanded: true });

  return (world) => {
    pane.refresh();
    return world;
  };
};

main().catch(console.error);
