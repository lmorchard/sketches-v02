import { hasComponent, defineComponent, defineQuery, Types } from "bitecs";
import { Position } from "./PositionMotion.js";

export const Health = defineComponent({
  max: Types.f32,
  initial: Types.f32,
  current: Types.f32,
});

export const WORLD_HEALTH = Symbol("health");
export const EVENT_HURT = Symbol("hurt");
export const EVENT_HEAL = Symbol("heal");
export const EVENT_FACTORS = {
  [EVENT_HURT]: -1,
  [EVENT_HEAL]: 1,
};

export class HealthService {
  using(world) {
    this.world = world;
    return this;
  }

  get _store() {
    if (!this.world[WORLD_HEALTH]) {
      this.world[WORLD_HEALTH] = {
        pending: new Map(),
      };
    }
    return this.world[WORLD_HEALTH];
  }

  get pending() {
    return this._store.pending;
  }

  clear() {
    this.pending.clear();
    return this;
  }

  queue(eid, event, amount) {
    // TODO: allow supplying context of event (e.g. hurt / heal type to match against resistances, etc)
    if (!this.pending.has(eid)) {
      this.pending.set(eid, []);
    }
    this.pending.get(eid).push([event, amount]);
    return this;
  }

  hurt(eid, amount) {
    return this.queue(eid, EVENT_HURT, amount);
  }

  heal(eid, amount) {
    return this.queue(eid, EVENT_HEAL, amount);
  }

  resolve(eid) {
    const pending = this.pending.get(eid) || [];
    return pending.reduce(
      (acc, [event, amount]) => acc + amount * (EVENT_FACTORS[event] || 0),
      0
    );
  }
}

export const healthService = new HealthService();

export const healthQuery = defineQuery([Health]);

export const healthSystem = (options = {}) => {
  return (world) => {
    healthService.using(world);
    for (const eid of healthQuery(world)) {
      // TODO: allow event recipient to modify resolution (e.g. armor, dmg reduction, etc)
      Health.current[eid] += healthService.resolve(eid);
    }
    healthService.clear();
    return world;
  };
};

export const healthDebugRenderer = (options = {}) => {

  return (world) => {
    if (!world || !world.debug) return;

    healthService.using(world);

    const g = world.debugGraphics;
    g.lineStyle(10.0, 0x00ff33, 0.25);

    for (const eid of healthQuery(world)) {
      if (!hasComponent(world, Position, eid)) continue;
      const x = Position.x[eid];
      const y = Position.y[eid];
      const current = Health.current[eid];
      const max = Health.max[eid];
      g.moveTo(x - 20, y);
      g.lineTo(x - 20 + 40 * (current / max), y);
    }

    return world;
  }
}