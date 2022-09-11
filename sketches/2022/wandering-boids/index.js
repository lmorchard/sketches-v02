import { pipe, addComponent } from "bitecs";
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
  const stats = Stats.init();
  const world = World.init();

  const renderOptions = {};

  const { pane, paneUpdateSystem } = setupTwiddles({ world });

  world.run(
    pipe(
      boidsUpdateSystem(),
      wandererSystem(),
      headingAndSpeedSystem(),
      movementSystem,
      paneUpdateSystem
    ),
    pipe(
      autoSizedRenderer(renderOptions),
      boidsRenderer(renderOptions),
      gridRenderer()
    ),
    stats
  );

  const wanderingBoid = BoidEntity.spawn(world, {
    Position: { x: 0, y: 0, r: 0 },
    HeadingAndSpeed: { heading: 0, speed: 200 },
  });
  addComponent(world, Wanderer, wanderingBoid.eid);

  console.log("READY.");
}

function setupTwiddles({ title = document.title, expanded = false, world }) {
  const pane = new Pane();

  const f = pane.addFolder({ title, expanded });

  return {
    pane,
    paneUpdateSystem: (world) => {
      pane.refresh();
      return world;
    },
  };
}

main().catch(console.error);
