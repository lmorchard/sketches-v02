import { defineQuery, defineComponent, hasComponent, Types } from "bitecs";
import { Position } from "./PositionMotion.js";
import { distanceSq } from "./utils/utils.js";
import * as Quadtree from "@timohausmann/quadtree-ts";
import { Collidable } from "./Collisions.js";
import { Point2D, Vector2D } from "./utils/vector.js";

export const WORLD_QUADTREE = Symbol("positionIndexQuadtree");

export const PositionArea = defineComponent({
  width: Types.f32,
  height: Types.f32,
});

export class PositionIndexService {
  constructor(world) {
    this.world = world;
    this.findRect = new Quadtree.Rectangle({});
  }

  using(world) {
    this.world = world;
    return this;
  }

  get quadtree() {
    return this.world[WORLD_QUADTREE];
  }

  set quadtree(quadtree) {
    this.world[WORLD_QUADTREE] = quadtree;
    return quadtree;
  }

  findByRectangle(x, y, width, height) {
    if (!this.quadtree) return [];

    this.findRect.x = x;
    this.findRect.y = y;
    this.findRect.width = width;
    this.findRect.height = height;
    return this.quadtree.retrieve(this.findRect).map((rect) => rect.data);
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
    const { x, y, width, height } = findCollidableAABB(world, eid);
    return this.findByRectangle(
      x - range,
      y - range,
      width + range,
      height + range
    )
      .filter((otherEid) => otherEid !== eid)
      .slice(0, limit);
  }
}

export const positionIndexService = new PositionIndexService();

export const positionIndexQuery = defineQuery([Position]);

export const positionIndexSystem = (options = {}) => {
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
      const { x, y, width, height } = findCollidableAABB(world, eid);
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
      quadtree.insert(
        new Quadtree.Rectangle({ x, y, width, height, data: eid })
      );
    }

    positionIndexService.using(world).quadtree = quadtree;

    return world;
  };
};

export const positionIndexDebugRenderer = (options = {}) => {
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
      const { x, y, width, height } = findCollidableAABB(world, eid);
      g.drawRect(x, y, width, height);
    }

    return world;
  };
};

export const findCollidableAABB = (() => {
  const rv = { x: 0, y: 0, width: 0, height: 0 };

  return (world, eid) => {
    let width = 1;
    let height = 1;

    const x = Position.x[eid];
    const y = Position.y[eid];
    const r = Position.r[eid];

    if (hasComponent(world, PositionArea, eid)) {
      return findRectAABB(
        x,
        y,
        PositionArea.width[eid],
        PositionArea.height[eid],
        rv
      );
    } else if (hasComponent(world, Collidable, eid)) {
      const length = Collidable.length[eid];
      const radius = Collidable.radius[eid];
      const boxWidth = Collidable.boxWidth[eid];
      const boxHeight = Collidable.boxHeight[eid];

      if (length && radius) {
        return findCapsuleAABB(x, y, r, radius, length, rv);
      } else if (boxWidth && boxHeight) {
        return findRectAABB(
          x,
          y,
          Collidable.boxWidth[eid],
          Collidable.boxHeight[eid],
          rv
        );
      } else if (radius) {
        return findCircleAABB(x, y, radius, rv);
      }
    }

    rv.x = x - width / 2;
    rv.y = y - height / 2;
    rv.width = width;
    rv.height = height;

    return rv;
  };
})();

export const findCapsuleAABB = (() => {
  const ptl = new Point2D();
  const ptr = new Point2D();
  const pbl = new Point2D();
  const pbr = new Point2D();

  let hlength = 0;

  return (x, y, r, radius, length, rv) => {
    hlength = length / 2;

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
  };
})();

export const findRectAABB = (x, y, width, height, rv) => {
  rv.x = x - width / 2;
  rv.y = y - height / 2;
  rv.width = width;
  rv.height = height;
  return rv;
};

export const findCircleAABB = (x, y, radius, rv) => {
  rv.x = x - radius;
  rv.y = y - radius;
  rv.width = radius * 2;
  rv.height = radius * 2;
  return rv;
};
