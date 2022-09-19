import { defineComponent, defineQuery, hasComponent, Types } from "bitecs";
import { Position } from "./positionMotion.js";
import { Vector2DComponentProxy } from "./utils/VectorComponentProxy.js";
import { GenericComponentProxy, setEid } from "./core/entities.js";
import { positionIndexService } from "./PositionIndex.js";

export const WORLD_COLLISIONS = Symbol("collisions");

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

  hadPair(eid1, eid2) {
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

export const Collidable = defineComponent({
  group: Types.f32,
  radius: Types.f32,
});

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
  // Collision is just based on circle overlap for now.
  // TODO: configurable shape-wise collision based on collidable options
  const minDistanceSquared = Math.pow(
    collidable.radius + otherCollidable.radius,
    2
  );
  return position.distanceToSquared(otherPosition) < minDistanceSquared;
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

      const alpha = collisionService.hadPair(eid, otherEid) ? 0.5 : 1.0;
      g.lineStyle(2.0, 0xff2222, alpha);

      g.moveTo(position.x, position.y);
      g.lineTo(otherPosition.x, otherPosition.y);
      g.drawCircle(position.x, position.y, collidable.radius);
      g.drawCircle(otherPosition.x, otherPosition.y, otherCollidable.radius);
    }

    return world;
  };
};
