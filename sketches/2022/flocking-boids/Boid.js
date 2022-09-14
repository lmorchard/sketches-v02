import { defineQuery, defineComponent, Types } from "bitecs";
import { SmoothGraphics as Graphics } from "@pixi/graphics-smooth";
import { updateEntities, BaseEntityProxy } from "../../../lib/ecsUtils.js";
import { updateSprites, BaseSprite } from "../../../lib/sprites.js";
import { Position, Velocity } from "../../../lib/positionMotion";

export const BoidSpriteOptions = defineComponent({
  scaleX: Types.f32,
  scaleY: Types.f32,
  lineWidth: Types.f32,
  color: Types.ui32,
  faceHeading: Types.ui8,
});

export class BoidEntity extends BaseEntityProxy {
  static components = {
    Position,
    Velocity,
    BoidSpriteOptions,
  };

  static defaults = {
    BoidSpriteOptions: {
      scaleX: 0.5,
      scaleY: 0.5,
      lineWidth: 2.0,
      color: 0x33ff33,
    },
  };

  update(world) {}
}

export const boidsQuery = defineQuery([Position, Velocity, BoidSpriteOptions]);

export const boidsUpdateSystem = (options) => (world) =>
  updateEntities(world, [[boidsQuery, BoidEntity]]);

export class BoidSprite extends BaseSprite {

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
    const { scaleX, scaleY } = BoidSpriteOptions;

    g.x = Position.x;
    g.y = Position.y;
    g.rotation = Math.atan2(Velocity.y, Velocity.x);
    g.scale.x = scaleX;
    g.scale.y = scaleY;
  }
};

export const boidsRenderer = () => spritesRenderer([
  [boidsQuery, BoidEntity, BoidSprite, "boidSprites"],
]);
