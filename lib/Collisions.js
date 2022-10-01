import { defineComponent, defineQuery, hasComponent, Types } from "bitecs";
import { Position } from "./PositionMotion.js";
import { Vector2DComponentProxy } from "./utils/VectorComponentProxy.js";
import { GenericComponentProxy, setEid } from "./core/entities.js";
import { positionIndexService, findCollidableAABB } from "./PositionIndex.js";
import { Vector2D, Point2D, Line2D } from "./utils/vector.js";

export const WORLD_COLLISIONS = Symbol("collisions");

export const Collidable = defineComponent({
  group: Types.f32,
  radius: Types.f32,
  length: Types.f32,
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
        pairs: new Map(),
        previousPairs: new Map(),
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
  const position = new Vector2DComponentProxy(Position);
  const collidable = new GenericComponentProxy(Collidable);
  const otherPosition = new Vector2DComponentProxy(Position);
  const otherCollidable = new GenericComponentProxy(Collidable);

  return (world) => {
    positionIndexService.using(world);
    collisionService.using(world).clear();

    for (const eid of collisionQuery(world)) {
      setEid(eid, position, collidable);

      const { x, y, width, height } = findCollidableAABB(world, eid);
      const otherEids = positionIndexService
        .findByRectangle(x, y, width, height)
        .filter(
          (otherEid) =>
            otherEid !== eid &&
            hasComponent(world, Collidable, otherEid) &&
            Collidable.group[eid] === Collidable.group[otherEid]
        );

      for (const otherEid of otherEids) {
        if (otherEid == eid || collisionService.hasPair(eid, otherEid))
          continue;
        setEid(otherEid, otherPosition, otherCollidable);
        const metadata = inCollision(
          position,
          collidable,
          otherPosition,
          otherCollidable
        );
        if (metadata) {
          collisionService.add(eid, otherEid, metadata);
        }
      }
    }
    return world;
  };
};

function inCollision(position, collidable, otherPosition, otherCollidable) {
  const { radius, length, boxWidth, boxHeight } = collidable;
  const {
    radius: otherRadius,
    length: otherLength,
    boxWidth: otherBoxWidth,
    boxHeight: otherBoxHeight,
  } = otherCollidable;

  if (radius && length && otherRadius && otherLength) {
    return findCapsuleCollision(
      position,
      collidable,
      otherPosition,
      otherCollidable
    );
  } else if (boxWidth && boxHeight && otherBoxWidth && otherBoxHeight) {
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
}

const capsuleLine = new Line2D();
const capsuleNearestPoint = new Point2D();
const otherCapsuleLine = new Line2D();
const otherCapsuleNearestPoint = new Point2D();
const capsuleCollisionNormal = new Vector2D();
const capsuleCollisionPoint = new Vector2D();

function findCapsuleCollision(
  position,
  collidable,
  otherPosition,
  otherCollidable
) {
  const { radius } = collidable;
  const { radius: otherRadius } = otherCollidable;

  // TODO: find contact points between capsules, normal vector of collision, penetration depth
  // TODO: consider https://fotino.me/static/collision-demos/polygon-response.js
  findLineForCapsule(position, collidable, capsuleLine);
  findLineForCapsule(otherPosition, otherCollidable, otherCapsuleLine);
  findClosestPointsBetweenLines(
    capsuleLine,
    otherCapsuleLine,
    capsuleNearestPoint,
    otherCapsuleNearestPoint
  );

  capsuleCollisionNormal
    .clone(capsuleNearestPoint)
    .subtract(otherCapsuleNearestPoint)
    .normalize();

  const separation = capsuleNearestPoint.distanceTo(otherCapsuleNearestPoint);
  if (separation > radius + otherRadius) return;

  return {
    separation,
    normal: { ...capsuleCollisionNormal },
    center: { ...capsuleNearestPoint },
    otherCenter: { ...otherCapsuleNearestPoint },
    edge: {
      ...capsuleCollisionPoint
        .copy(capsuleCollisionNormal)
        .scaleBy(-radius)
        .add(capsuleNearestPoint),
    },
    otherEdge: {
      ...capsuleCollisionPoint
        .copy(capsuleCollisionNormal)
        .scaleBy(otherRadius)
        .add(otherCapsuleNearestPoint),
    },
  };
}

function findLineForCapsule(position, collidable, line) {
  const { r } = position;
  const { radius, length } = collidable;

  const hlength = length / 2 - radius;

  line.p0.set(0, 0 - hlength).rotate(r);
  line.p0.add(position);
  line.p1.set(0, hlength).rotate(r);
  line.p1.add(position);

  return line;
}

const findClosestPointsBetweenLines = (() => {
  const v = new Vector2D();

  return (a, b, rvA, rvB) => {
    // https://wickedengine.net/2020/04/26/capsule-collision-detection/
    const d0 = v.copy(b.p0).subtract(a.p0).lengthSquared();
    const d1 = v.copy(b.p1).subtract(a.p0).lengthSquared();
    const d2 = v.copy(b.p0).subtract(a.p1).lengthSquared();
    const d3 = v.copy(b.p1).subtract(a.p1).lengthSquared();

    const bestA = d2 < d0 || d2 < d1 || d3 < d0 || d3 < d1 ? a.p1 : a.p0;

    findClosestPointOnLineSegment(bestA, b.p0, b.p1, rvB);
    findClosestPointOnLineSegment(rvB, a.p0, a.p1, rvA);
  };
})();

const findClosestPointOnLineSegment = (() => {
  const fromAtoB = new Vector2D();
  const fromAtoP = new Vector2D();

  return (p, a, b, rv) => {
    // https://jsfiddle.net/soulwire/UA6H5/
    fromAtoB.set(b.x - a.x, b.y - a.y);
    fromAtoP.set(p.x - a.x, p.y - a.y);

    const len = fromAtoB.lengthSquared();
    const dot = fromAtoP.dot(fromAtoB);
    const t = Math.min(1, Math.max(0, dot / len));

    return rv.set(a.x + fromAtoB.x * t, a.y + fromAtoB.y * t);
  };
})();

export const collisionDebugRenderer = (options = {}) => {
  const position = new Vector2DComponentProxy(Position);
  const collidable = new GenericComponentProxy(Collidable);
  const otherPosition = new Vector2DComponentProxy(Position);
  const otherCollidable = new GenericComponentProxy(Collidable);

  return (world) => {
    if (!world || !world.debug) return world;

    const g = world.debugGraphics;

    collisionService.using(world);

    for (const [eid, otherEid, metadata] of collisionService.allPairs()) {
      setEid(eid, position, collidable);
      setEid(otherEid, otherPosition, otherCollidable);

      const alpha = collisionService.stillHasPair(eid, otherEid) ? 0.5 : 1.0;
      g.lineStyle(2.0, 0xff2222, alpha);

      const { radius, length, boxWidth, boxHeight } = collidable;
      const { x, y } = position;
      const {
        radius: otherRadius,
        length: otherLength,
        boxWidth: otherBoxWidth,
        boxHeight: otherBoxHeight,
      } = otherCollidable;
      const { x: otherX, y: otherY } = otherPosition;

      if (radius && length && otherRadius && otherLength) {
        g.drawCircle(metadata.edge.x, metadata.edge.y, 5);
        g.drawCircle(metadata.center.x, metadata.center.y, 5);
        g.drawCircle(metadata.otherEdge.x, metadata.otherEdge.y, 5);
        g.drawCircle(metadata.otherCenter.x, metadata.otherCenter.y, 5);
        g.moveTo(metadata.center.x, metadata.center.y);
        g.lineTo(metadata.otherCenter.x, metadata.otherCenter.y);
      } else if (boxWidth && boxHeight && otherBoxWidth && otherBoxHeight) {
        const { x, y } = position;
        const { x: otherX, y: otherY } = otherPosition;

        const left = x - boxWidth / 2;
        const top = y - boxHeight / 2;

        const otherLeft = otherX - otherBoxWidth / 2;
        const otherTop = otherY - otherBoxHeight / 2;

        g.moveTo(x, y);
        g.lineTo(otherX, otherY);
        g.drawRect(left, top, boxWidth, boxHeight);
        g.drawRect(otherLeft, otherTop, otherBoxWidth, otherBoxHeight);
      } else {
        g.moveTo(x, y);
        g.lineTo(otherX, otherY);
        g.drawCircle(x, y, radius);
        g.drawCircle(otherX, otherY, otherRadius);
      }
    }

    return world;
  };
};
