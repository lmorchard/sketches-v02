import { defineComponent, Types } from "bitecs";
import { updateEntities, BaseEntityProxy } from "./core/entities.js";
import { SpriteOptions, BaseSprite } from "./core/sprites.js";
import { Position, Velocity } from "./positionMotion";
import { rngIntRange } from "./utils/utils.js";

const MIN_RADII = 7;
const MAX_RADII = 25;
const MIN_RADIUS = 30;
const MAX_RADIUS = 50;

export const AsteroidLines = defineComponent({
  numRadii: Types.ui8,
  maxRadius: Types.f32,
  minRadius: Types.f32,
  radii: [Types.f32, MAX_RADII],
});

export class AsteroidEntity extends BaseEntityProxy {
  static components = {
    Position,
    Velocity,
    SpriteOptions,
    AsteroidLines,
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
    let { 
      AsteroidLines: {
        numRadii = rngIntRange(Math.random, MIN_RADII, MAX_RADII),
        minRadius = MIN_RADIUS,
        maxRadius = MAX_RADIUS,
        radii = [],
      } = {}
    } = props;

    if (radii.length === 0) {
      for (let idx = 0; idx < numRadii; idx++) {
        radii.push(rngIntRange(Math.random, minRadius, maxRadius));
      }  
    }

    return super.spawn(world, {
      AsteroidLines: { numRadii, minRadius, maxRadius, radii },
      ...props
    });
  }
}

export class AsteroidSprite extends BaseSprite {
  draw(world, entity) {
    const { g } = this;

    super.draw(world, entity);

    const { radii } = entity.AsteroidLines;
    const angleStep = (Math.PI * 2) / radii.length;
    let angle = 0;
    const points = [];
    for (let idx = 0; idx < radii.length; idx++) {
      angle += angleStep;
      const dx = Math.cos(angle);
      const dy = Math.sin(angle);

      points.push(radii[idx] * dx, radii[idx] * dy);
    }

    g.moveTo(0, 0);
    g.drawPolygon(...points);
  }
}

export const asteroidsUpdateSystem = (options) => (world) =>
  updateEntities(world, [[AsteroidEntity]]);

export const asteroidsRenderer = () =>
  spritesRenderer([AsteroidEntity, AsteroidSprite]);
