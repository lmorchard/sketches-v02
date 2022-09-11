import { pipe, defineQuery, defineComponent, Types } from "bitecs";
import * as World from "../../../lib/world.js";
import { SmoothGraphics as Graphics } from "@pixi/graphics-smooth";
import {
  updateEntities,
  updateSprites,
  BaseEntityProxy,
} from "../../../lib/ecsUtils.js";
import { autoSizedRenderer, gridRenderer } from "../../../lib/viewport/pixi.js";
import {
  Position,
  Velocity,
  movementSystem,
  bouncerSystem,
} from "../../../lib/positionMotion";
import { Pane } from "tweakpane";
import * as Stats from "../../../lib/stats.js";

import "../../../index.css";

async function main() {
  const stats = Stats.init();
  const world = World.init();

  const renderOptions = {};

  const { pane, paneUpdateSystem } = setupTwiddles({ world });

  world.run(
    pipe(boidsUpdateSystem(), movementSystem, bouncerSystem, paneUpdateSystem),
    pipe(
      autoSizedRenderer(renderOptions),
      boidsRenderer(renderOptions),
      gridRenderer()
    ),
    stats
  );

  BoidEntity.spawn(world, {
    Position: { x: 0, y: 0, r: 0 },
    Velocity: { x: 350, y: 300, r: Math.PI },
  });

  console.log("READY.");
}

function setupTwiddles({ title = document.title, expanded = false, world }) {
  const pane = new Pane();

  const f = pane.addFolder({ title, expanded });

  return {
    pane,
    paneUpdateSystem: (world) => {
      pane.refresh();
      return world;
    },
  };
}

export const BoidSpriteOptions = defineComponent({
  scaleX: Types.f32,
  scaleY: Types.f32,
  lineWidth: Types.f32,
  color: Types.ui32,
});

export class BoidEntity extends BaseEntityProxy {
  static components = {
    Position,
    Velocity,
    BoidSpriteOptions,
  };

  static defaults = {
    BoidSpriteOptions: {
      scaleX: 1,
      scaleY: 1,
      lineWidth: 1.0,
      color: 0x33ff33,
    },
  };

  update(world) {}
}

export class BoidSprite {
  constructor(world, boidEntity, options = {}) {
    const { BoidSpriteOptions } = boidEntity;
    const { scaleX, scaleY, lineWidth, color } = BoidSpriteOptions;

    this.options = { ...this.constructor.defaultOptions, ...options };

    const g = new Graphics();

    g.lineStyle(lineWidth, color, 1);
    g.drawCircle(0, 0, 50);
    g.moveTo(0, -12.5);
    g.lineTo(0, 12.5);
    g.moveTo(-12.5, 0);
    g.lineTo(12.5, 0);

    Object.assign(this, { g });
  }

  root() {
    return this.g;
  }

  update(world, boidEntity) {
    const { g } = this;
    const { Position, BoidSpriteOptions } = boidEntity;
    const { scaleX, scaleY } = BoidSpriteOptions;
    g.x = Position.x;
    g.y = Position.y;
    g.rotation = Position.r;
    g.scale.x = scaleX;
    g.scale.y = scaleY;
  }
}

export const boidsQuery = defineQuery([Position, Velocity]);

const boidsUpdateSystem = (options) => (world) => {
  return updateEntities(world, [[boidsQuery, BoidEntity]]);
};

const boidsRendererInit = (world) => {
  const { stage } = world;
  world.gBoids = new Graphics();
  stage.addChild(world.gBoids);
};

const boidsRenderer = (options) => (world) => {
  if (!world.gBoids) {
    boidsRendererInit(world);
  }
  updateSprites(world, world.gBoids, [
    [boidsQuery, BoidEntity, BoidSprite, "boidSprites"],
  ]);
  return world;
};

main().catch(console.error);
