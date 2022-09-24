import { pipe } from "bitecs";
import * as World from "../../../../lib/core/world.js";
import * as Stats from "../../../../lib/core/stats.js";
import { Pane } from "tweakpane";
import { autoSizedRenderer, gridRenderer } from "../../../../lib/viewport/pixi.js";
import { movementSystem } from "../../../../lib/PositionMotion.js";
import { hslToRgb } from "../../../../lib/utils/hslToRgb";
import {
  BoidEntity,
  boidsUpdateSystem,
  boidsRenderer,
} from "../../../../lib/Boid.js";
import { headingAndSpeedSystem } from "../../../../lib/HeadingAndSpeed.js";
import { Wanderer, wandererSystem } from "../../../../lib/Wanderer.js";
import { HeadingAndSpeed } from "../../../../lib/HeadingAndSpeed.js";

import "../../../../index.css";

const NUM_WANDERERS = 100;

async function main() {
  const world = World.init();
  const stats = Stats.init();

  const pane = new Pane();
  const paneRoot = pane.addFolder({ title: document.title, expanded: true });
  world.addToPane(paneRoot);

  for (let idx = 0; idx < NUM_WANDERERS; idx++) {
    const boid = BoidEntity.spawn(world)
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
        Wanderer: {
          originX: 0,
          originY: 0,
          maxDistance: 500,
        },
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
  return (world) => {
    pane.refresh();
    return world;
  };
};

main().catch(console.error);
