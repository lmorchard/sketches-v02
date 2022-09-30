import { createWorld } from "bitecs";
import * as MainLoop from "mainloop.js";

export function init() {
  let pipeline;
  let viewport;
  let stats;
  let debugPipeline;

  const world = createWorld();

  const update = (delta) => {
    stats && stats.update.begin();

    const time = world.time;
    time.delta = delta;
    time.deltaSec = delta / 1000;
    time.elapsed += delta;
    pipeline(world);

    stats && stats.update.end();
  };

  const draw = (interpolationPercentage) => {
    stats && stats.draw.begin();
    if (typeof viewport === "function") {
      viewport(world, interpolationPercentage);
    } else if (typeof viewport === "object") {
      viewport.draw(world, interpolationPercentage);
    }
    if (debugPipeline && world.debug) {
      debugPipeline(world);
    }
    stats && stats.draw.end();
  };

  const end = (fps, panic) => {
    // TODO: handle pausing here?
    world.fps = fps;
    if (panic) {
      const discardedTime = Math.round(MainLoop.resetFrameDelta());
      console.log(`Rendering discarded ${discardedTime}ms`);
    }
  };

  const loop = MainLoop.setUpdate(update).setDraw(draw).setEnd(end);

  Object.assign(world, {
    debug: false,
    paused: false,
    fps: 0,
    time: { delta: 0, deltaSec: 0, elapsed: 0 },
    loop,

    updateOnce: update,
    drawOnce: draw,

    run(runPipeline, runViewport, runStats, runDebugPipeline) {
      pipeline = runPipeline;
      viewport = runViewport;
      stats = runStats;
      debugPipeline = runDebugPipeline;
      this.start();
    },

    start() {
      loop.start();
      this.paused = false;
    },

    stop(paused) {
      loop.stop();
      if (paused) this.paused = true;
    },

    addToPane(pane) {
      const f = pane.addFolder({ title: "world", expanded: true });
      f.addInput(world, "debug");
      f.addInput(world, "paused").on("change", (ev) => {
        if (ev.value === true && loop.isRunning()) {
          world.stop();
        } else if (ev.value === false && !loop.isRunning()) {
          world.start();
        }
      });
    },
  });

  return world;
}
