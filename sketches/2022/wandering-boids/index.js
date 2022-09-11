import { pipe } from "bitecs";
import * as World from "../../../lib/world.js";
import * as Stats from "../../../lib/stats.js";
import { Pane } from "tweakpane";
import { autoSizedRenderer, gridRenderer } from "../../../lib/viewport/pixi.js";
import { movementSystem } from "../../../lib/positionMotion";
import { BoidEntity, boidsUpdateSystem, boidsRenderer } from "./Boid.js";
import { headingAndSpeedSystem } from "./HeadingAndSpeed.js";
import { Wanderer, wandererSystem } from "./Wanderer.js";

import "../../../index.css";

async function main() {
  const world = World.init();
  const stats = Stats.init();
  const pane = new Pane();

  const wanderingBoid = BoidEntity.spawn(world, {
    Position: { x: 0, y: 0, r: 0 },
    HeadingAndSpeed: { heading: 0, speed: 200 },
  });
  wanderingBoid.addComponents(world, { Wanderer });
  Object.assign(wanderingBoid.Wanderer, {
    originX: 0,
    originY: 0,
    maxDistance: 500,
  });

  world.run(
    pipe(
      tweakPaneUpdateSystem({ pane, wanderingBoid }),
      boidsUpdateSystem(),
      wandererSystem(),
      headingAndSpeedSystem(),
      movementSystem()
    ),
    pipe(autoSizedRenderer(), boidsRenderer(), gridRenderer()),
    stats
  );

  console.log("READY.");
}

const tweakPaneUpdateSystem = ({ pane, wanderingBoid }) => {
  const f = pane.addFolder({ title: document.title, expanded: true });

  const fWanderer = f.addFolder({ title: "Wanderer", expanded: true });
  for (const name in wanderingBoid.Wanderer) {
    if (["originX", "originY", "maxDistance"].includes(name)) continue;
    fWanderer.addMonitor(wanderingBoid.Wanderer, name);
  }

  return (world) => {
    pane.refresh();
    return world;
  };
};

main().catch(console.error);
