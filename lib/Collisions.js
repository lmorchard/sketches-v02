import { defineComponent, defineQuery, hasComponent, Types } from "bitecs";
import { WorldService } from "./core/world.js";
import { Position } from "./PositionMotion.js";
import { Vector2DComponentProxy } from "./utils/VectorComponentProxy.js";
import {
  BaseEntityProxy,
  GenericComponentProxy,
  setEid,
} from "./core/entities.js";
import { AreaEntity, positionIndexService } from "./PositionIndex.js";
import { Vector2D, Point2D, Line2D } from "./utils/vector.js";

export const Collidable = defineComponent({
  group: Types.f32,
});

export class CollisionEntity extends AreaEntity {
  static components = {
    ...AreaEntity.components,
    Collidable,
  };

  static componentProxyClasses = {
    ...AreaEntity.componentProxyClasses,
  };

  static aabb = {};
  static otherAabb = {};

  findCollisionWith(otherEntity, rv = {}) {
    const aabb = this.findAABB(this.constructor.aabb);
    const otherAabb = otherEntity.findAABB(this.constructor.otherAabb);

    if (!this.detectAABBOverlap(aabb, otherAabb)) return;

    if (this.AreaRectangle.hasComponent()) {
      if (otherEntity.AreaRectangle.hasComponent()) {
        return true;
      }
      // TODO vs AreaCircle, AreaCapsule, vs point
    } else if (this.AreaCapsule.hasComponent()) {
      if (otherEntity.AreaCapsule.hasComponent()) {
        return this.findCapsuleVsCapsuleCollsionWith(otherEntity, rv);
      }
      // TODO vs AreaCircle, AreaRectangle, vs point
    } else if (this.AreaCircle.hasComponent()) {
      if (otherEntity.AreaCircle.hasComponent()) {
        return this.findCircleVsCircleCollisionWith(otherEntity, rv);
      }
    }
    // TODO point
  }

  detectAABBOverlap(aabb, otherAabb) {
    const { x, y, width, height } = aabb;
    const {
      x: otherX,
      y: otherY,
      width: otherWidth,
      height: otherHeight,
    } = otherAabb;
    return (
      x < otherX + otherWidth &&
      x + width > otherX &&
      y < otherY + otherHeight &&
      y + height > otherY
    );
  }

  findCircleVsCircleCollisionWith(otherEntity, rv = {}) {
    const {
      capsuleLine,
      otherCapsuleLine,
      nearestCapsulePoints,
      capsuleCollisionNormal,
      capsuleCollisionPoint,
    } = this.constructor;
    const {
      Position: position,
      AreaCircle: { radius },
    } = this;
    const {
      Position: otherPosition,
      AreaCircle: { radius: otherRadius },
    } = otherEntity;

    const minDistanceSquared = Math.pow(radius + otherRadius, 2);
    const withinRadius =
      position.distanceToSquared(otherPosition) < minDistanceSquared;
    if (!withinRadius) return;

    capsuleCollisionNormal.clone(position).subtract(otherPosition).normalize();

    rv.separation = position.distanceTo(otherPosition);
    rv.collisionNormal = { ...capsuleCollisionNormal };
    rv.collisionCenter = { ...position };
    rv.otherCollisionCenter = { ...otherPosition };
    rv.edge = {
      ...capsuleCollisionPoint
        .copy(capsuleCollisionNormal)
        .scaleBy(-radius)
        .add(position),
    };
    rv.otherEdge = {
      ...capsuleCollisionPoint
        .copy(capsuleCollisionNormal)
        .scaleBy(otherRadius)
        .add(otherPosition),
    };

    return rv;
  }

  static capsuleLine = new Line2D();
  static otherCapsuleLine = new Line2D();
  static nearestCapsulePoints = new Line2D();
  static capsuleCollisionNormal = new Vector2D();
  static capsuleCollisionPoint = new Vector2D();

  findCapsuleVsCapsuleCollsionWith(otherEntity, rv = {}) {
    const {
      capsuleLine,
      otherCapsuleLine,
      nearestCapsulePoints,
      capsuleCollisionNormal,
      capsuleCollisionPoint,
    } = this.constructor;
    const { radius } = this.AreaCapsule;
    const { radius: otherRadius } = otherEntity.AreaCapsule;

    this.findLineForCapsule(capsuleLine);
    otherEntity.findLineForCapsule(otherCapsuleLine);
    capsuleLine.findClosestPointsBetweenLines(
      otherCapsuleLine,
      nearestCapsulePoints
    );

    // console.log(this.eid, otherEntity.eid, capsuleLine, otherCapsuleLine, nearestCapsulePoints);

    const separationSq = nearestCapsulePoints.lengthSquared();
    if (separationSq > Math.pow(radius + otherRadius, 2)) return;

    capsuleCollisionNormal
      .clone(nearestCapsulePoints.p0)
      .subtract(nearestCapsulePoints.p1)
      .normalize();

    rv.separation = Math.sqrt(separationSq);
    rv.collisionNormal = { ...capsuleCollisionNormal };
    rv.collisionCenter = { ...nearestCapsulePoints.p0 };
    rv.otherCollisionCenter = { ...nearestCapsulePoints.p1 };
    rv.edge = {
      ...capsuleCollisionPoint
        .copy(capsuleCollisionNormal)
        .scaleBy(-radius)
        .add(nearestCapsulePoints.p0),
    };
    rv.otherEdge = {
      ...capsuleCollisionPoint
        .copy(capsuleCollisionNormal)
        .scaleBy(otherRadius)
        .add(nearestCapsulePoints.p1),
    };

    return rv;
  }

  findLineForCapsule(line = new Line2D()) {
    const { r } = this.Position;
    const { radius, length } = this.AreaCapsule;

    const hlength = length / 2 - radius;

    line.p0.set(0, 0 - hlength).rotate(r);
    line.p0.add(this.Position);
    line.p1.set(0, hlength).rotate(r);
    line.p1.add(this.Position);

    return line;
  }
}

export class CollisionService extends WorldService {
  static storeKey = Symbol("collisions");
  static attributes = [
    "pairs",
    "collisions",
    "previousPairs",
    "previousCollisions",
  ];

  initStore() {
    return {
      pairs: new Map(),
      previousPairs: new Map(),
      collisions: new Map(),
      previousCollisions: new Map(),
    };
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
    for (const [pair, metadata] of this.pairs.entries()) {
      yield [...pair.split(":"), metadata];
    }
  }

  getPair(eid1, eid2) {
    return this.pairs(this.pairKey(eid1, eid2));
  }

  get(eid1) {
    return this.collisions.get(eid1);
  }

  add(eid1, eid2, metadata = {}) {
    const key = this.pairKey(eid1, eid2);

    const pairs = this.pairs;
    if (pairs.has(key)) return;
    pairs.set(key, metadata);

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
  const entity = new CollisionEntity();
  const otherEntity = new CollisionEntity();

  const aabb = {};

  return (world) => {
    positionIndexService.using(world);
    collisionService.using(world).clear();

    for (const eid of collisionQuery(world)) {
      entity.using(eid, world);

      const otherEids = positionIndexService
        .findByEntity(eid)
        .filter(
          (otherEid) =>
            hasComponent(world, Collidable, otherEid) &&
            !collisionService.hasPair(eid, otherEid)
        );

      for (const otherEid of otherEids) {
        otherEntity.using(otherEid, world);
        const collisionResult = entity.findCollisionWith(otherEntity);
        if (collisionResult) {
          collisionService.add(eid, otherEid, collisionResult);
        }
      }
    }
    return world;
  };
};

export const collisionDebugRenderer = (options = {}) => {
  const entity = new CollisionEntity();
  const otherEntity = new CollisionEntity();

  return (world) => {
    if (!world || !world.debug) return world;

    const g = world.debugGraphics;

    collisionService.using(world);

    for (const [eid, otherEid, collisionData] of collisionService.allPairs()) {
      entity.using(eid, world);
      otherEntity.using(otherEid, world);

      const alpha = collisionService.stillHasPair(eid, otherEid) ? 0.5 : 1.0;
      g.lineStyle(2.0, 0xff2222, alpha);

      const {
        separationSq,
        collisionNormal,
        collisionCenter,
        otherCollisionCenter,
        edge,
        otherEdge,
      } = collisionData;

      g.drawCircle(edge.x, edge.y, 2);
      g.drawCircle(otherEdge.x, otherEdge.y, 2);
      g.drawCircle(collisionCenter.x, collisionCenter.y, 2);
      g.drawCircle(otherCollisionCenter.x, otherCollisionCenter.y, 2);

      g.moveTo(collisionCenter.x, collisionCenter.y);
      g.lineTo(otherCollisionCenter.x, otherCollisionCenter.y);
    }

    return world;
  };
};
