import { defineComponent, Types } from "bitecs";
import { BaseEntityProxy } from "../../../../lib/core/entities.js";
import { Collidable } from "../../../../lib/Collisions.js";
import { Bounce } from "../../../../lib/Bouncer.js";
import { Position, Velocity } from "../../../../lib/PositionMotion.js";
import { SpriteOptions, BaseSprite } from "../../../../lib/core/sprites.js";
import { Obstacle } from "../../../../lib/Steering.js";

export const Brick = defineComponent({
  width: Types.f32,
  height: Types.f32,
});

export class BrickEntity extends BaseEntityProxy {
  static components = {
    Brick,
    Position,
    Velocity,
    SpriteOptions,
    Collidable,
    Obstacle,
    Bounce,
  };

  static defaults = {
    Brick: {
      width: 40,
      height: 10,
    },
    SpriteOptions: {
      scaleX: 1.0,
      scaleY: 1.0,
      lineWidth: 2.0,
      color: 0xffffff,
    },
    Velocity: { x: 0, y: 0 },
    Obstacle: { groups: [1], radius: 40 },
    Collidable: { group: 1, radius: 40 },
    Bounce: { mass: 1000000, restitution: 0.9 },
  };
}

export class BrickSprite extends BaseSprite {
  draw(world, entity) {
    super.draw(world, entity);

    const { g } = this;
    const {
      Brick: { width, height },
    } = entity;

    g.moveTo(0, 0 - height / 4);
    g.lineTo(0, height / 4);

    g.moveTo(0 - width / 4, 0);
    g.lineTo(width / 4, 0);

    g.drawRoundedRect(0 - width / 2, 0 - height / 2, width, height, 8);

  }
}
