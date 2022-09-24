import { defineComponent, defineQuery, hasComponent, Types } from "bitecs";
import { Position } from "./PositionMotion.js";
import { Vector2DComponentProxy } from "./utils/VectorComponentProxy.js";
import { GenericComponentProxy, setEid } from "./core/entities.js";
import { positionIndexService } from "./PositionIndex.js";

export const WORLD_COLLISIONS = Symbol("collisions");

export const Collidable = defineComponent({
  group: Types.f32,
  radius: Types.f32,
  boxWidth: Types.f32,
  boxHeight: Types.f32,
});

export class CollisionService {
  constructor(world) {
    this.world = world;
  }

  using(world) {
    this.world = world;
    return this;
  }

  get _store() {
    if (!this.world[WORLD_COLLISIONS]) {
      this.world[WORLD_COLLISIONS] = {
        pairs: new Set(),
        previousPairs: new Set(),
        collisions: new Map(),
        previousCollisions: new Map(),
      };
    }
    return this.world[WORLD_COLLISIONS];
  }

  get pairs() {
    return this._store.pairs;
  }

  get collisions() {
    return this._store.collisions;
  }

  get previousPairs() {
    return this._store.previousPairs;
  }

  get previousCollisions() {
    return this._store.previousCollisions;
  }

  clear() {
    const previousPairs = this._store.pairs;
    const previousCollisions = this._store.collisions;
    this._store.pairs = this._store.previousPairs;
    this._store.collisions = this._store.previousCollisions;
    this._store.previousPairs = previousPairs;
    this._store.previousCollisions = previousCollisions;
    this._store.pairs.clear();
    this._store.collisions.clear();
  }

  pairKey(eid1, eid2) {
    return [eid1, eid2].sort().join(":");
  }

  hasPair(eid1, eid2) {
    return this.pairs.has(this.pairKey(eid1, eid2));
  }

  stillHasPair(eid1, eid2) {
    return this.previousPairs.has(this.pairKey(eid1, eid2));
  }

  *allPairs() {
    for (const pair of this.pairs) {
      yield pair.split(":");
    }
  }

  get(eid1) {
    return this.collisions.get(eid1);
  }

  add(eid1, eid2) {
    const key = this.pairKey(eid1, eid2);

    const pairs = this.pairs;
    if (pairs.has(key)) return;
    pairs.add(key);

    const collisions = this.collisions;

    if (!collisions.has(eid1)) {
      collisions.set(eid1, new Set());
    }
    collisions.get(eid1).add(eid2);

    if (!collisions.has(eid2)) {
      collisions.set(eid2, new Set());
    }
    collisions.get(eid2).add(eid1);
  }
}

export const collisionService = new CollisionService();

export const collisionQuery = defineQuery([Position, Collidable]);

export const collisionSystem = (options = {}) => {
  const position = new Vector2DComponentProxy(Position);
  const collidable = new GenericComponentProxy(Collidable);
  const otherPosition = new Vector2DComponentProxy(Position);
  const otherCollidable = new GenericComponentProxy(Collidable);

  return (world) => {
    positionIndexService.using(world);
    collisionService.using(world).clear();

    for (const eid of collisionQuery(world)) {
      setEid(eid, position, collidable);

      const otherEids = positionIndexService
        .findNearestToEntity(eid, collidable.radius * 2)
        .filter(
          (otherEid) =>
            hasComponent(world, Collidable, otherEid) &&
            Collidable.group[eid] === Collidable.group[otherEid]
        );

      for (const otherEid of otherEids) {
        if (otherEid == eid || collisionService.hasPair(eid, otherEid))
          continue;
        setEid(otherEid, otherPosition, otherCollidable);
        if (inCollision(position, collidable, otherPosition, otherCollidable)) {
          collisionService.add(eid, otherEid);
        }
      }
    }
    return world;
  };
};

function inCollision(position, collidable, otherPosition, otherCollidable) {
  const { radius, boxWidth, boxHeight } = collidable;
  const {
    radius: otherRadius,
    boxWidth: otherBoxWidth,
    boxHeight: otherBoxHeight,
  } = otherCollidable;

  if (boxWidth && boxHeight && otherBoxWidth && otherBoxHeight) {
    const { x, y } = position;
    const { x: otherX, y: otherY } = otherPosition;

    const left = x - boxWidth / 2;
    const right = left + boxWidth;
    const top = y - boxHeight / 2;
    const bottom = top + boxHeight;

    const otherLeft = otherX - otherBoxWidth / 2;
    const otherRight = otherLeft + otherBoxWidth;
    const otherTop = otherY - otherBoxHeight / 2;
    const otherBottom = otherTop + otherBoxHeight;

    return (
      left < otherRight &&
      right > otherLeft &&
      top < otherBottom &&
      bottom > otherTop
    );
  } else {
    // TODO: handle other shape vs shape collisions
    // this is just circle vs circle
    const minDistanceSquared = Math.pow(radius + otherRadius, 2);
    const withinRadius =
      position.distanceToSquared(otherPosition) < minDistanceSquared;
    return withinRadius;
  }

  return false;
}

export const WORLD_COLLISIONS_DEBUG_STAGE = Symbol("collisionsDebugStage");

export const collisionDebugRenderer = (options = {}) => {
  const position = new Vector2DComponentProxy(Position);
  const collidable = new GenericComponentProxy(Collidable);
  const otherPosition = new Vector2DComponentProxy(Position);
  const otherCollidable = new GenericComponentProxy(Collidable);

  return (world) => {
    if (!world || !world.debug) return world;
    const g = world.debugGraphics;

    collisionService.using(world);

    for (const [eid, otherEid] of collisionService.allPairs()) {
      setEid(eid, position, collidable);
      setEid(otherEid, otherPosition, otherCollidable);

      const alpha = collisionService.stillHasPair(eid, otherEid) ? 0.5 : 1.0;
      g.lineStyle(2.0, 0xff2222, alpha);

      const { radius, boxWidth, boxHeight } = collidable;
      const { x, y } = position;
      const {
        radius: otherRadius,
        boxWidth: otherBoxWidth,
        boxHeight: otherBoxHeight,
      } = otherCollidable;
      const { x: otherX, y: otherY } = otherPosition;

      g.moveTo(x, y);
      g.lineTo(otherX, otherY);

      if (boxWidth && boxHeight && otherBoxWidth && otherBoxHeight) {
        const { x, y } = position;
        const { x: otherX, y: otherY } = otherPosition;

        const left = x - boxWidth / 2;
        const top = y - boxHeight / 2;

        const otherLeft = otherX - otherBoxWidth / 2;
        const otherTop = otherY - otherBoxHeight / 2;

        g.drawRect(left, top, boxWidth, boxHeight);
        g.drawRect(otherLeft, otherTop, otherBoxWidth, otherBoxHeight);
      } else {
        g.drawCircle(x, y, radius);
        g.drawCircle(otherX, otherY, otherRadius);
      }
    }

    return world;
  };
};
