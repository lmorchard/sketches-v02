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

import "../../../index.css";

const NUM_WANDERERS = 100;

async function main() {
  const world = World.init();
  const stats = Stats.init();
  const pane = new Pane();

  for (let idx = 0; idx < NUM_WANDERERS; idx++) {
    const boid = BoidEntity.spawn(world, {
      Position: {
        x: -200 + Math.random() * 400,
        y: -200 + Math.random() * 400,
        r: 0,
      },
      Velocity: {
        x: -200 + Math.random() * 400,
        y: -200 + Math.random() * 400,
        r: 0,
      },
      BoidSpriteOptions: {
        scaleX: 0.125,
        scaleY: 0.125,
        lineWidth: 8.0,
        color: hslToRgb(Math.random(), 1.0, 0.5),
      },
    });
    boid.addComponents(world, { SeekSpeed, FlockingBoid });
    Object.assign(boid.SeekSpeed, {
      acceleration: 1.0,
      targetSpeed: 400,
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
      originTurnFactor: 12.0,
      maxOriginDistance: 400,
    });
  }

  world.run(
    pipe(
      flockingBoidsSystem(),
      seekSpeedSystem(),
      movementSystem(),
      tweakPaneUpdateSystem({ pane /* wanderingBoid */ })
    ),
    pipe(autoSizedRenderer(), boidsRenderer(), gridRenderer()),
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


main().catch(console.error);
