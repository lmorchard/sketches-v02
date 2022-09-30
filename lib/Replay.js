import {
  defineComponent,
  Types,
  defineSerializer,
  defineDeserializer,
} from "bitecs";

export const WORLD_HISTORY = Symbol("worldHistory");

export class ReplayService {
  constructor() {
  }

  using(world, options = {}) {
    const oldWorld = this.world;
    this.world = world;
    this.options = options;
    if (oldWorld !== world && world) {
      this.serializer = defineSerializer(world);
      this.deserializer = defineDeserializer(world);
    }
    return this;
  }

  get _store() {
    if (!this.world[WORLD_HISTORY]) {
      this.world[WORLD_HISTORY] = {
        history: [],
        isScrubbing: false,
        scrub: 0,
      };
    }
    return this.world[WORLD_HISTORY];
  }

  get history() {
    return this._store.history;
  }

  get isScrubbing() {
    return this._store.isScrubbing;
  }

  set isScrubbing(value) {
    this._store.isScrubbing = value;
  }

  get scrub() {
    return this._store.scrub;
  }

  set scrub(index) {
    const maxScrub = this.history.length - 1;
    if (index > maxScrub) return;

    this._store.scrub = index;
    if (index === maxScrub) return;
  
    this.world.stop(true);
    this.scrubTo(index);
  }

  captureSnapshot() {
    const { maxHistory = 60 } = this.options;

    if (this.scrub !== this.history.length - 1) {
      // If we're scrubbed into history, we need to clear out the future
      this.history.splice(this.scrub + 1);
    }

    // Capture the current state of the world
    const snapshot = this.serializer(this.world);
    this.history.push(snapshot);

    // Trim history
    while (this.history.length > maxHistory) {
      this.history.shift();
    }

    // Update the current scrub position
    this.scrub = this.history.length - 1;
  }

  scrubTo(index) {
    const { updateDelta = 1000 / 60 } = this.options;

    // Refrain from capturing snapshots in replaySystem while scrubbing
    this.isScrubbing = true;

    const snapshot = this.history[index];
    if (snapshot) {
      // Kind of a hack, but apply the state and run one tick of update and draw
      this.deserializer(this.world, snapshot);
      this.world.updateOnce(updateDelta);
      this.world.drawOnce(0);
    }
    
    // Resume capturing snapshots in replaySystem
    this.isScrubbing = false;
  }
}

export const replayService = new ReplayService();
window.replayService = replayService;

export const replaySystem = (options = {}) => {
  let historyDelay = 0;

  return (world) => {
    replayService.using(world, options);

    if (replayService.isScrubbing) return world;

    const { historyPeriod = 10 } = options;
    if (historyDelay > 0) {
      historyDelay--;
      return world;
    }
    historyDelay = historyPeriod;

    replayService.captureSnapshot();

    return world;
  };
};

export const replayTweakPane = (pane, world, options = {}) => {
  const service = new ReplayService().using(world, options);
  const f = pane.addFolder({ title: "replay", expanded: true });
  f.addInput(service, "scrub", {
    min: 0,
    max: service.options.maxHistory - 1,
    step: 1,
  });
};
