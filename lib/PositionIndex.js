import { defineQuery, defineComponent, hasComponent, Types } from "bitecs";
import { Position } from "./PositionMotion.js";
import { distanceSq } from "./utils/utils.js";
import * as Quadtree from "@timohausmann/quadtree-ts";
import { Collidable } from "./Collisions.js";

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
    return this.findNearest(
      Position.x[eid],
      Position.y[eid],
      range,
      limit
    ).filter((otherEid) => otherEid !== eid);
  }
}

export const positionIndexService = new PositionIndexService();

export const positionIndexQuery = defineQuery([Position]);

export const positionIndexSystem = (options = {}) => {
  let xMin = null;
  let xMax = null;
  let yMin = null;
  let yMax = null;

  const points = [];

  return (world) => {
    const { maxObjects = 10, maxLevels = 4 } = options;

    points.length = 0;
    for (const eid of positionIndexQuery(world)) {
      let width = 1;
      let height = 1;

      if (hasComponent(world, PositionArea, eid)) {
        width = PositionArea.width[eid];
        height = PositionArea.height[eid];
      } if (hasComponent(world, Collidable, eid)) {
        if (Collidable.boxWidth[eid] && Collidable.boxHeight[eid]) {
          width = Collidable.boxWidth[eid];
          height = Collidable.boxHeight[eid];
        } else if (Collidable.radius[eid]) {
          width = Collidable.radius[eid];
          height = Collidable.radius[eid];
        }
      }

      const x = Position.x[eid];
      const y = Position.y[eid];

      if (xMin === null || x < xMin) xMin = x;
      if (xMax === null || x > xMax) xMax = x;
      if (yMin === null || y < yMin) yMin = y;
      if (yMax === null || y > yMax) yMax = y;

      points.push([eid, x, y, width, height]);
    }

    const quadtree = new Quadtree.Quadtree({
      maxObjects,
      maxLevels,
      width: xMax - xMin,
      height: yMax - yMin,
      x: xMin,
      y: yMin,
    });

    points.forEach(([eid, x, y, width, height]) => {
      quadtree.insert(
        new Quadtree.Rectangle({
          x,
          y,
          width,
          height,
          data: eid,
        })
      );
    });

    positionIndexService.using(world).quadtree = quadtree;

    return world;
  };
};
