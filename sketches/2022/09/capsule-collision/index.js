import {
  pipe,
  hasComponent,
  defineQuery,
  defineComponent,
  removeEntity,
  Types,
} from "bitecs";
import { Pane } from "tweakpane";
import * as World from "../../../../lib/core/world.js";
import * as Stats from "../../../../lib/core/stats.js";
import {
  autoSizedRenderer,
  gridRenderer,
} from "../../../../lib/viewport/pixi.js";
import { movementSystem } from "../../../../lib/PositionMotion.js";
import {
  BaseSprite,
  spritesRenderer,
  SpriteOptions,
} from "../../../../lib/core/sprites.js";
import {
  BaseEntityProxy,
  entityUpdater,
} from "../../../../lib/core/entities.js";
import {
  positionIndexService,
  positionIndexSystem,
  positionIndexDebugRenderer,
} from "../../../../lib/PositionIndex.js";
import {
  collisionService,
  collisionSystem,
  collisionDebugRenderer,
  Collidable,
} from "../../../../lib/Collisions.js";
import { Position, Velocity } from "../../../../lib/PositionMotion.js";
import { Point2D, Vector2D } from "../../../../lib/utils/vector.js";
import { Vector2DComponentProxy } from "../../../../lib/utils/VectorComponentProxy.js";

import "../../../../index.css";

async function main() {
  const world = World.init();
  const stats = Stats.init();

  world.debug = true;

  const pane = new Pane();
  const paneRoot = pane.addFolder({ title: document.title, expanded: true });
  world.addToPane(paneRoot);

  CapsuleDemoEntity.spawn(world, {
    Position: { x: -200, y: 0, r: Math.PI / 4 },
    Velocity: { r: Math.PI * 0.125 },
    Collidable: { radius: 50, length: 500 },
    SpriteOptions: { color: 0xff3333 },
  });

  CapsuleDemoEntity.spawn(world, {
    Position: { x: 200, y: 0, r: 0 },
    Velocity: { r: 0 - Math.PI * 0.125 },
    Collidable: { radius: 50, length: 500 },
    SpriteOptions: { color: 0x3333ff },
  });

  world.run(
    pipe(
      entityUpdater([[CapsuleDemoEntity]]),
      positionIndexSystem(),
      movementSystem(),
      collisionSystem(),
      // bounceSystem({ separationFactor: 7.0 }),
      tweakPaneUpdateSystem({ pane })
    ),
    pipe(
      autoSizedRenderer(),
      spritesRenderer([[CapsuleDemoEntity, CapsuleDemoSprite]]),
      gridRenderer(),
    ),
    stats,
    pipe(
      capsuleDemoDebugRenderer(),
      positionIndexDebugRenderer(),
      collisionDebugRenderer(),
      // bounceDebugRenderer()
    )
  );

  Object.assign(window, {
    world,
    positionIndexService,
    collisionService,
    Collidable,
  });
  console.log("READY.");
}

const tweakPaneUpdateSystem = ({ pane }) => {
  return (world) => {
    pane.refresh();
    return world;
  };
};

export class CapsuleDemoEntity extends BaseEntityProxy {
  static components = {
    Position,
    Velocity,
    SpriteOptions,
    Collidable,
  };

  static componentProxyClasses = {
    Position: Vector2DComponentProxy,
    Velocity: Vector2DComponentProxy,
  };

  static defaults = {
    SpriteOptions: {
      scaleX: 1.0,
      scaleY: 1.0,
      lineWidth: 2.0,
      color: 0xffffff,
    },
    Velocity: { x: 0, y: 0 },
  };

  update() {}
}

export class CapsuleDemoSprite extends BaseSprite {
  draw(world, entity) {
    super.draw(world, entity);

    const { g } = this;
    const {
      Collidable: { radius, length },
    } = entity;

    const lineLength = length / 2 - radius;

    g.moveTo(0 - radius / 2, 0).lineTo(radius / 2, 0);
    g.moveTo(0, 0 - lineLength).lineTo(0, lineLength);
    g.moveTo(0 - radius, 0 - lineLength).lineTo(0 - radius, lineLength);
    g.moveTo(radius, 0 - lineLength).lineTo(radius, lineLength);
    g.drawCircle(0, 0 - lineLength, radius);
    g.drawCircle(0, lineLength, radius);
  }
}

export const capsuleDemoDebugRenderer = (options = {}) => {
  const capsuleEntity = new CapsuleDemoEntity();
  const otherCapsuleEntity = new CapsuleDemoEntity();
  const seen = new Set();
  const a0 = new Vector2D();
  const a1 = new Vector2D();
  const b0 = new Vector2D();
  const b1 = new Vector2D();
  const c0 = new Vector2D();
  const p0 = new Point2D();
  const rv = new Point2D();
  const rvA = new Point2D();
  const rvB = new Point2D();

  const seenKey = (eid, otherEid) => [eid, otherEid].sort().join(":");

  return (world) => {
    if (!world || !world.debug) return;
    const g = world.debugGraphics;

    seen.clear();
    for (const eid of CapsuleDemoEntity.query(world)) {
      for (const otherEid of CapsuleDemoEntity.query(world)) {
        if (eid == otherEid) continue;

        const key = seenKey(eid, otherEid);
        if (seen.has(key)) continue;
        seen.add(key);

        capsuleEntity.using(eid, world);
        otherCapsuleEntity.using(otherEid, world);

        g.lineStyle(4.0, 0x33ff33, 0.25);

        findLineForEntity(capsuleEntity, a0, a1);
        g.moveTo(a0.x, a0.y).lineTo(a1.x, a1.y);

        findLineForEntity(otherCapsuleEntity, b0, b1);
        g.moveTo(b0.x, b0.y).lineTo(b1.x, b1.y);

        /*
        if (findLineIntersectionPoint(a0, a1, b0, b1, c0)) {
          g.drawCircle(c0.x, c0.y, 10);
        }

        g.lineStyle(4.0, 0x33ffff, 0.5);

        p0.set(0, -400);
        g.drawCircle(p0.x, p0.y, 10);

        findClosestPointOnLineSegment(p0, a0, a1, rv);
        g.moveTo(p0.x, p0.y).lineTo(rv.x, rv.y);
        g.drawCircle(rv.x, rv.y, capsuleEntity.CollidableCapsule.radius);

        findClosestPointOnLineSegment(p0, b0, b1, rv);
        g.moveTo(p0.x, p0.y).lineTo(rv.x, rv.y);
        g.drawCircle(rv.x, rv.y, otherCapsuleEntity.CollidableCapsule.radius);
        */

        findClosestPointsBetweenLines(a0, a1, b0, b1, rvA, rvB);

        g.lineStyle(4.0, 0xff33ff, 0.5);
        g.moveTo(rvA.x, rvA.y).lineTo(rvB.x, rvB.y);
        g.drawCircle(rvA.x, rvA.y, capsuleEntity.Collidable.radius);
        g.drawCircle(rvB.x, rvB.y, otherCapsuleEntity.Collidable.radius);
      }
    }

    return world;
  };

  function findLineForEntity(entity, p0, p1) {
    const {
      Position: position,
      Position: { r },
      Collidable: { radius, length },
    } = entity;

    const hlength = length / 2 - radius;
    p0.set(0, 0 - hlength).rotate(r);
    p0.add(position);
    p1.set(0, hlength).rotate(r);
    p1.add(position);
  }
};

const findClosestPointsBetweenLines = (() => {
  const v = new Vector2D();

  return (a0, a1, b0, b1, rvA, rvB) => {
    // https://wickedengine.net/2020/04/26/capsule-collision-detection/
    const d0 = v.copy(b0).subtract(a0).lengthSquared();
    const d1 = v.copy(b1).subtract(a0).lengthSquared();
    const d2 = v.copy(b0).subtract(a1).lengthSquared();
    const d3 = v.copy(b1).subtract(a1).lengthSquared();

    const bestA = d2 < d0 || d2 < d1 || d3 < d0 || d3 < d1 ? a1 : a0;

    findClosestPointOnLineSegment(bestA, b0, b1, rvB);
    findClosestPointOnLineSegment(rvB, a0, a1, rvA);
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

function lineIntersects(a0, a1, b0, b1) {
  let s1_x, s1_y, s2_x, s2_y;
  s1_x = a1.x - a0.x;
  s1_y = a1.y - a0.y;
  s2_x = b1.x - b0.x;
  s2_y = b1.y - b0.y;

  let s, t;
  s =
    (-s1_y * (a0.x - b0.x) + s1_x * (a0.y - b0.y)) /
    (-s2_x * s1_y + s1_x * s2_y);
  t =
    (s2_x * (a0.y - b0.y) - s2_y * (a0.x - b0.x)) /
    (-s2_x * s1_y + s1_x * s2_y);

  return s >= 0 && s <= 1 && t >= 0 && t <= 1;
}

function findLineIntersectionPoint(a0, a1, b0, b1, c0) {
  // http://paulbourke.net/geometry/pointlineplane/#i2l

  const { x: x1, y: y1 } = a0;
  const { x: x2, y: y2 } = a1;
  const { x: x3, y: y3 } = b0;
  const { x: x4, y: y4 } = b1;

  const ud = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
  const uan = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
  const ubn = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);

  // coincident
  if (uan === 0 && ubn === 0 && ud === 0) return false;

  // parallel
  if (ud === 0) return false;

  const ua = uan / ud;
  const ub = ubn / ud;

  // segments do not intersect
  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return false;

  c0.set(x1 + ua * (x2 - x1), y1 + ua * (y2 - y1));

  return true;
}

main().catch(console.error);
