import { defineQuery, defineComponent, hasComponent, Types } from "bitecs";
import { Position } from "./PositionMotion.js";
import { WorldService } from "./core/world.js";
import { BaseEntityProxy } from "./core/entities.js";
import { distanceSq } from "./utils/utils.js";
import * as Quadtree from "@timohausmann/quadtree-ts";
import { Point2D, Vector2D } from "./utils/vector.js";
import { Vector2DComponentProxy } from "./utils/VectorComponentProxy.js";

export const AreaRectangle = defineComponent({
  width: Types.f32,
  height: Types.f32,
});

export const AreaCapsule = defineComponent({
  radius: Types.f32,
  length: Types.f32,
});

export const AreaCircle = defineComponent({
  radius: Types.f32,
});

// TODO: AreaPolygon

export class AreaEntity extends BaseEntityProxy {
  static components = {
    Position,
    AreaRectangle,
    AreaCapsule,
    AreaCircle,
  };

  static componentProxyClasses = {
    Position: Vector2DComponentProxy,
  };

  findAABB(rv = {}) {
    if (this.AreaRectangle.hasComponent()) {
      return this.findRectangleAABB(rv);
    } else if (this.AreaCircle.hasComponent()) {
      return this.findCircleAABB(rv);
    } else if (this.AreaCapsule.hasComponent()) {
      return this.findCapsuleAABB(rv);
    }
    return this.findPointAABB(rv);
  }

  findPointAABB(rv = {}) {
    const { x, y } = this.Position;
    rv.x = x;
    rv.y = y;
    rv.width = 1;
    rv.height = 1;
    return rv;
  }

  findRectangleAABB(rv = {}) {
    const { x, y } = this.Position;
    const { width, height } = this.AreaRectangle;
    rv.x = x - width / 2;
    rv.y = y - height / 2;
    rv.width = width;
    rv.height = height;
    return rv;
  }

  findCircleAABB(rv = {}) {
    const { x, y } = this.Position;
    const { radius } = this.AreaCircle;
    rv.x = x - radius;
    rv.y = y - radius;
    rv.width = radius * 2;
    rv.height = radius * 2;
    return rv;
  }

  static ptl = new Point2D();
  static ptr = new Point2D();
  static pbl = new Point2D();
  static pbr = new Point2D();

  findCapsuleAABB(rv = {}) {
    const { ptl, ptr, pbl, pbr } = this.constructor;
    const { x, y, r } = this.Position;
    const { radius, length } = this.AreaCapsule;

    const hlength = length / 2;

    ptl.set(0 - radius, 0 - hlength).rotate(r);
    ptr.set(radius, 0 - hlength).rotate(r);
    pbl.set(0 - radius, hlength).rotate(r);
    pbr.set(radius, hlength).rotate(r);

    rv.x = Math.min(ptl.x, ptr.x, pbl.x, pbr.x);
    rv.width = Math.max(ptl.x, ptr.x, pbl.x, pbr.x) - rv.x;
    rv.y = Math.min(ptl.y, ptr.y, pbl.y, pbr.y);
    rv.height = Math.max(ptl.y, ptr.y, pbl.y, pbr.y) - rv.y;
    rv.x += x;
    rv.y += y;

    return rv;
  }
}

export class PositionIndexService extends WorldService {
  static storeKey = Symbol("positionIndexQuadtree");
  static attributes = ["quadtree"];

  static findRect = new Quadtree.Rectangle({});
  static areaEntity = new AreaEntity();

  findByRectangle(x, y, width, height) {
    if (!this.quadtree) return [];
    const { findRect } = this.constructor;

    findRect.x = x;
    findRect.y = y;
    findRect.width = width;
    findRect.height = height;
    return this.quadtree.retrieve(findRect).map((rect) => rect.data);
  }

  findNearest(x, y, range, limit) {
    const rangeSq = range * range;
    const nearest = this.findByRectangle(
      x - range / 2,
      y - range / 2,
      range,
      range
    )
      .map((eid) => [eid, distanceSq(x, y, Position.x[eid], Position.y[eid])])
      .filter(([eid, dSq]) => dSq <= rangeSq)
      .sort((a, b) => a[1] - b[1])
      .map(([eid]) => eid);

    return typeof limit === "undefined" ? nearest : nearest.slice(0, limit);
  }

  findNearestToEntity(eid, range, limit) {
    const x = Position.x[eid];
    const y = Position.y[eid];
    return this.findNearest(x, y, range, limit).filter(
      (otherEid) => otherEid !== eid
    );
  }

  findByEntity(eid) {
    const { findRect, areaEntity } = this.constructor;
    areaEntity.using(eid, this.world).findAABB(findRect);
    return this.quadtree
      .retrieve(findRect)
      .map((rect) => rect.data)
      .filter((otherEid) => otherEid !== eid);
  }
}

export const positionIndexService = new PositionIndexService();

export const positionIndexQuery = defineQuery([Position]);

export const positionIndexSystem = (options = {}) => {
  const areaEntity = new AreaEntity();
  const aabb = {};
  let xMin = 0;
  let xMax = 0;
  let yMin = 0;
  let yMax = 0;

  const points = [];

  return (world) => {
    const { maxObjects = 10, maxLevels = 4 } = options;

    xMin = 0;
    xMax = 0;
    yMin = 0;
    yMax = 0;
    points.length = 0;

    for (const eid of positionIndexQuery(world)) {
      const { x, y, width, height } = areaEntity
        .using(eid, world)
        .findAABB(aabb);
      if (!x || !y) continue;
      xMin = Math.min(xMin, x);
      yMin = Math.min(yMin, y);
      xMax = Math.max(xMax, x + width);
      yMax = Math.max(yMax, y + height);
      points.push([x, y, width, height, eid]);
    }

    const quadtree = new Quadtree.Quadtree({
      maxObjects,
      maxLevels,
      x: xMin,
      y: yMin,
      width: xMax - xMin,
      height: yMax - yMin,
    });

    for (const [x, y, width, height, eid] of points) {
      //console.log(x, y, width, height, eid);
      quadtree.insert(
        new Quadtree.Rectangle({ x, y, width, height, data: eid })
      );
    }

    positionIndexService.using(world).quadtree = quadtree;

    return world;
  };
};

export const positionIndexDebugRenderer = (options = {}) => {
  const areaEntity = new AreaEntity();
  const aabb = {};

  return (world) => {
    if (!world || !world.debug) return;
    const g = world.debugGraphics;

    g.lineStyle(4.0, 0xffff33, 0.25);
    const quadtree = positionIndexService.using(world).quadtree;
    window.quadtree = quadtree;
    if (quadtree) {
      const { x, y, width, height } = quadtree.bounds;
      g.drawRect(x, y, width, height);
    }

    g.lineStyle(2.0, 0xffff33, 0.5);
    for (const eid of positionIndexQuery(world)) {
      const { x, y, width, height } = areaEntity
        .using(eid, world)
        .findAABB(aabb);
      g.drawRect(x, y, width, height);
    }

    return world;
  };
};
