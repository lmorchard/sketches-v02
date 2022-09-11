import { pipe } from "bitecs";
import * as World from "../../../lib/world.js";
import * as Stats from "../../../lib/stats.js";
import { Pane } from "tweakpane";
import { autoSizedRenderer, gridRenderer } from "../../../lib/viewport/pixi.js";
import { movementSystem } from "../../../lib/positionMotion";
import { hslToRgb } from "../../../lib/hslToRgb";
import { BoidEntity, boidsUpdateSystem, boidsRenderer } from "./Boid.js";
import { headingAndSpeedSystem } from "./HeadingAndSpeed.js";
import { Wanderer, wandererSystem } from "./Wanderer.js";

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
      HeadingAndSpeed: {
        heading: Math.PI * 2 * Math.random(),
        speed: 50 + 200 * Math.random(),
      },
      BoidSpriteOptions: {
        scaleX: 0.25,
        scaleY: 0.25,
        lineWidth: 4.0,
        color: hslToRgb(Math.random(), 1.0, 0.5),
      },
    });
    boid.addComponents(world, { Wanderer });
    Object.assign(boid.Wanderer, {
      originX: 0,
      originY: 0,
      maxDistance: 500,
    });
  }

  world.run(
    pipe(
      boidsUpdateSystem(),
      wandererSystem(),
      headingAndSpeedSystem(),
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
