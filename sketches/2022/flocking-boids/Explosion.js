import { defineQuery, defineComponent, Types } from "bitecs";
import { updateEntities, BaseEntityProxy } from "../../../lib/ecsUtils.js";
import {
  updateSprites,
  SpriteOptions,
  BaseSprite,
} from "../../../lib/sprites.js";
import { Position, Velocity } from "../../../lib/positionMotion";
import { rngIntRange } from "../../../lib/utils.js";
import { transition } from "../../../lib/transitions.js";
import easings from "../../../lib/easings.js";

export const MIN_EXPLOSION_LINES = 10;
export const MAX_EXPLOSION_LINES = 25;

export const ExplosionLines = defineComponent({
  numLines: Types.ui8,
  timeElapsed: Types.f32,
  angles: [Types.f32, MAX_EXPLOSION_LINES],
  lineDurations: [Types.f32, MAX_EXPLOSION_LINES],
  lineLengths: [Types.f32, MAX_EXPLOSION_LINES],
  lineStarts: [Types.f32, MAX_EXPLOSION_LINES],
  lineEnds: [Types.f32, MAX_EXPLOSION_LINES],
});

export class ExplosionEntity extends BaseEntityProxy {
  static components = {
    Position,
    Velocity,
    SpriteOptions,
    ExplosionLines,
  };

  static defaults = {
    SpriteOptions: {
      scaleX: 1.0,
      scaleY: 1.0,
      lineWidth: 1.0,
      color: 0xffffff,
    },
  };

  static spawn(world, props = {}) {
    const numLines = rngIntRange(
      Math.random,
      MIN_EXPLOSION_LINES,
      MAX_EXPLOSION_LINES
    );
    const angles = [];
    const lineDurations = [];
    const lineElapseds = [];
    const lineLengths = [];
    const lineStarts = [];
    const lineEnds = [];

    for (let idx = 0; idx < numLines; idx++) {
      angles[idx] = Math.random() * (Math.PI * 2);
      lineDurations[idx] = 0.5 + 0.5 * Math.random();
      lineElapseds[idx] = 0;
      lineLengths[idx] = 10 + 40 * Math.random();
      lineStarts[idx] = 10 * Math.random();
      lineEnds[idx] = 5 + 30 * Math.random();
    }

    return super.spawn(world, {
      ExplosionLines: {
        numLines,
        timeElapsed: 0,
        angles,
        lineDurations,
        lineElapseds,
        lineLengths,
        lineStarts,
        lineEnds,
      },
      ...props,
    });
  }

  update(world) {
    const { deltaSec } = world.time;
    const { ExplosionLines } = this;

    ExplosionLines.timeElapsed += deltaSec;
  }
}

export class ExplosionSprite extends BaseSprite {
  draw(world, entity) {
    const { g } = this;

    super.draw(world, entity);

    const { ExplosionLines, SpriteOptions } = entity;
    const { lineWidth, color } = SpriteOptions;
    const {
      numLines,
      angles,
      timeElapsed,
      lineDurations,
      lineLengths,
      lineStarts,
      lineEnds,
    } = ExplosionLines;

    for (let idx = 0; idx < numLines; idx++) {
      const dx = Math.cos(angles[idx]);
      const dy = Math.sin(angles[idx]);

      const duration = lineDurations[idx];
      const elapsed = Math.min(duration, timeElapsed);
      const lineStart = transition(
        lineStarts[idx],
        lineEnds[idx],
        duration,
        elapsed,
        easings.easeOutQuart
      );
      const lineEnd = lineStart + lineLengths[idx];
      const alpha = transition(
        1.0,
        0.0,
        duration,
        elapsed,
        easings.easeOutQuart
      );

      const x0 = dx * lineStart;
      const y0 = dy * lineStart;
      const x1 = dx * lineEnd;
      const y1 = dy * lineEnd;

      g.lineStyle(lineWidth, color, alpha);

      g.moveTo(x0, y0);
      g.lineTo(x1, y1);
    }
  }

  update(world, entity) {
    this.draw(world, entity);
    super.update(world, entity);
  }
}

export const explosionsQuery = defineQuery([
  Position,
  Velocity,
  SpriteOptions,
  ExplosionLines,
]);

export const explosionsUpdateSystem = (options) => (world) =>
  updateEntities(world, [[explosionsQuery, ExplosionEntity]]);

export const explosionsRenderer = () => spritesRenderer([
  [explosionsQuery, ExplosionEntity, ExplosionSprite, "explosionSprites"],
]);
