import { defineComponent, Types } from "bitecs";
import { BaseEntityProxy } from "../../../../lib/core/entities.js";
import { Collidable } from "../../../../lib/Collisions.js";
import { Bounce } from "../../../../lib/Bouncer.js";
import { Position, Velocity } from "../../../../lib/positionMotion.js";
import { SpriteOptions, BaseSprite } from "../../../../lib/core/sprites.js";
import { Obstacle } from "../../../../lib/Steering.js";

export const Ball = defineComponent({
  radius: Types.f32,
});

export class BallEntity extends BaseEntityProxy {
  static components = {
    Ball,
    Position,
    Velocity,
    SpriteOptions,
    Collidable,
    Obstacle,
    Bounce,
  };

  static defaults = {
    Ball: {
      radius: 10,
    },
    SpriteOptions: {
      scaleX: 1.0,
      scaleY: 1.0,
      lineWidth: 2.0,
      color: 0xffffff,
    },
    Velocity: { x: 0, y: 0 },
    Obstacle: { groups: [1], radius: 10, },
    Collidable: { group: 1, radius: 10 },
    Bounce: { mass: 100 },
  };
}

export class BallSprite extends BaseSprite {
  draw(world, entity) {
    super.draw(world, entity);

    const { g } = this;
    const {
      Ball: { radius },
    } = entity;

    g.moveTo(0, 0 - radius / 4);
    g.lineTo(0, radius / 4);

    g.moveTo(0 - radius / 4, 0);
    g.lineTo(radius / 4, 0);

    g.drawCircle(0, 0, radius);
  }
}
