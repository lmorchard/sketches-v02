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
import {
  bounceSystem,
  bounceDebugRenderer,
  Bounce,
} from "../../../../lib/Bouncer.js";
import {
  replaySystem,
  replayTweakPane,
} from "../../../../lib/Replay.js";
import { Position, Velocity } from "../../../../lib/PositionMotion.js";
import { Point2D, Vector2D } from "../../../../lib/utils/vector.js";
import { Vector2DComponentProxy } from "../../../../lib/utils/VectorComponentProxy.js";

import "../../../../index.css";

async function main() {
  const world = World.init();
  const stats = Stats.init();

  world.debug = true;

  const replayOptions = {
    historyPeriod: 0,
    maxHistory: 60 * 10,
    updateDelta: 1000 / 60,
  };

  const pane = new Pane();
  const paneRoot = pane.addFolder({ title: document.title, expanded: true });
  world.addToPane(paneRoot);
  replayTweakPane(paneRoot, world, replayOptions);

  CapsuleDemoEntity.spawn(world, {
    Position: { x: -150, y: 0, r: Math.PI / 4 },
    Velocity: { r: Math.PI * 0.125 },
    Collidable: { radius: 50, length: 500 },
    SpriteOptions: { color: 0xff3333 },
  });

  CapsuleDemoEntity.spawn(world, {
    Position: { x: 150, y: 0, r: 0 },
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
      bounceSystem({ separationFactor: 7.0 }),
      replaySystem(replayOptions),
      tweakPaneUpdateSystem({ pane }),
    ),
    pipe(
      autoSizedRenderer(),
      spritesRenderer([[CapsuleDemoEntity, CapsuleDemoSprite]]),
      gridRenderer()
    ),
    stats,
    pipe(
      capsuleDemoDebugRenderer(),
      positionIndexDebugRenderer(),
      collisionDebugRenderer(),
      bounceDebugRenderer()
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
    Bounce,
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

main().catch(console.error);
