import {
  pipe,
  defineQuery,
  defineComponent,
  Types,
  addComponent,
} from "bitecs";
import * as World from "../../../lib/world.js";
import { SmoothGraphics as Graphics } from "@pixi/graphics-smooth";
import {
  updateEntities,
  updateSprites,
  BaseEntityProxy,
  GenericComponentProxy,
} from "../../../lib/ecsUtils.js";
import { autoSizedRenderer, gridRenderer } from "../../../lib/viewport/pixi.js";
import {
  Position,
  Velocity,
  movementSystem,
} from "../../../lib/positionMotion";
import { Pane } from "tweakpane";
import * as Stats from "../../../lib/stats.js";
import { transition, lerp } from "../../../lib/transitions.js";
import easings from "../../../lib/easings.js";

import "../../../index.css";

async function main() {
  const stats = Stats.init();
  const world = World.init();

  const renderOptions = {};

  const { pane, paneUpdateSystem } = setupTwiddles({ world });

  world.run(
    pipe(
      boidsUpdateSystem,
      wandererSystem(),
      headingAndSpeedSystem,
      movementSystem,
      paneUpdateSystem
    ),
    pipe(
      autoSizedRenderer(renderOptions),
      boidsRenderer(renderOptions),
      gridRenderer()
    ),
    stats
  );

  const wanderingBoid = BoidEntity.spawn(world, {
    Position: { x: 0, y: 0, r: 0 },
    HeadingAndSpeed: { heading: Math.PI / 10, speed: 200 },
  });
  addComponent(world, Wanderer, wanderingBoid.eid);

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

export const HeadingAndSpeed = defineComponent({
  heading: Types.f32,
  speed: Types.f32,
});

export const headingAndSpeedQuery = defineQuery([
  HeadingAndSpeed,
  Position,
  Velocity,
]);

export const headingAndSpeedSystem = (world) => {
  for (const eid of headingAndSpeedQuery(world)) {
    const speed = HeadingAndSpeed.speed[eid];
    const heading = HeadingAndSpeed.heading[eid];
    Velocity.x[eid] = speed * Math.cos(heading);
    Velocity.y[eid] = speed * Math.sin(heading);
    Position.r[eid] = Math.atan2(Velocity.y[eid], Velocity.x[eid]);
  }
  return world;
};

export const Wanderer = defineComponent({
  idleDelay: Types.f32,
  turnActive: Types.ui8,
  turnStart: Types.f32,
  turnEnd: Types.f32,
  turnDuration: Types.f32,
  turnElapsed: Types.f32,
});

export const wandererQuery = defineQuery([
  Wanderer,
  HeadingAndSpeed,
  Position,
  Velocity,
]);

export const wandererSystem = (options) => {
  const wanderer = new GenericComponentProxy(Wanderer);
  const position = new GenericComponentProxy(Position);
  const headingAndSpeed = new GenericComponentProxy(HeadingAndSpeed);

  return (world) => {
    const { deltaSec } = world.time;

    for (const eid of wandererQuery(world)) {
      position.eid = eid;
      wanderer.eid = eid;
      headingAndSpeed.eid = eid;

      const { x, y } = position;
      const { heading } = headingAndSpeed;

      // Execute the current turn, if it's active
      if (wanderer.turnActive) {
        wanderer.turnElapsed += deltaSec;
        if (wanderer.turnElapsed >= wanderer.turnDuration) {
          wanderer.turnActive = false;
        }
        const { turnStart, turnEnd, turnDuration, turnElapsed } = wanderer;
        headingAndSpeed.heading = transition(
          turnStart,
          turnEnd,
          turnDuration,
          turnElapsed,
          easings.easeInOutCubic
        );
        continue;
      }

      // If we're out of bounds, turn back toward origin
      if (x < -400 || x > 400 || y < -400 || y > 400) {
        const originHeading = Math.atan2(0 - y, 0 - x);
        if (Math.abs(originHeading - heading) > Math.PI / 4) {
          Object.assign(wanderer, {
            idleDelay: 0,
            turnActive: true,
            turnDuration: 1,
            turnElapsed: 0,
            turnStart: heading,
            turnEnd: originHeading,
          });
        }
        continue;
      }

      if (!wanderer.turnActive) {
        // Otherwise, wait through idle delay and then kick off a new turn and following idle delay
        wanderer.idleDelay -= deltaSec;
        if (wanderer.idleDelay <= 0) {
          Object.assign(wanderer, {
            idleDelay: Math.random() * 2,
            turnActive: true,
            turnDuration: Math.random() * 3,
            turnElapsed: 0,
            turnStart: heading,
            turnEnd: Math.PI * 2 * Math.random(),
          });
          continue;
        }
      }
    }
    return world;
  };
};

export const BoidSpriteOptions = defineComponent({
  scaleX: Types.f32,
  scaleY: Types.f32,
  lineWidth: Types.f32,
  color: Types.ui32,
  faceVelocity: Types.i8,
});

export class BoidEntity extends BaseEntityProxy {
  static components = {
    Position,
    Velocity,
    HeadingAndSpeed,
    BoidSpriteOptions,
  };

  static defaults = {
    BoidSpriteOptions: {
      scaleX: 0.5,
      scaleY: 0.5,
      lineWidth: 2.0,
      color: 0x33ff33,
      faceVelocity: 1,
    },
  };

  update(world) {}
}

export class BoidSprite {
  constructor(world, boidEntity, options = {}) {
    this.options = { ...this.constructor.defaultOptions, ...options };
    this.g = new Graphics();
    this.draw(world, boidEntity);
  }

  root() {
    return this.g;
  }

  draw(world, boidEntity) {
    const { g } = this;
    const { BoidSpriteOptions } = boidEntity;
    const { lineWidth, color } = BoidSpriteOptions;

    g.clear();
    g.lineStyle(lineWidth, color, 1);
    g.moveTo(50, 0);
    g.lineTo(-50, -40);
    g.lineTo(-25, 0);
    g.lineTo(-50, 40);
    g.lineTo(50, 0);
  }

  update(world, boidEntity) {
    const { g } = this;
    const { Position, Velocity, BoidSpriteOptions } = boidEntity;
    const { scaleX, scaleY, faceVelocity } = BoidSpriteOptions;
    g.x = Position.x;
    g.y = Position.y;
    g.rotation = Position.r;
    g.scale.x = scaleX;
    g.scale.y = scaleY;
  }
}

export const boidsQuery = defineQuery([Position, Velocity]);

const boidsUpdateSystem = (world) => {
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
