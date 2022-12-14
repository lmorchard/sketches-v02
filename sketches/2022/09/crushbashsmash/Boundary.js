import { defineComponent, Types } from "bitecs";
import { BaseEntityProxy } from "../../../../lib/core/entities.js";
import { Collidable } from "../../../../lib/Collisions.js";
import { Bounce } from "../../../../lib/Bouncer.js";
import { Position, Velocity } from "../../../../lib/PositionMotion.js";
import { AreaCapsule } from "../../../../lib/PositionIndex.js";
import { SpriteOptions, BaseSprite } from "../../../../lib/core/sprites.js";
import { Obstacle } from "../../../../lib/Steering.js";
import { Health } from "../../../../lib/Health.js";
import { ExplosionEntity } from "../../../../lib/Explosion.js";
import { Expiration, Tombstone } from "../../../../lib/Expiration.js";

export const Boundary = defineComponent({
  width: Types.f32,
  height: Types.f32,
});

export class BoundaryEntity extends BaseEntityProxy {
  static components = {
    Boundary,
    Position,
    Velocity,
    SpriteOptions,
    Collidable,
    AreaCapsule,
    Obstacle,
    Bounce,
  };

  static defaults = {
    Boundary: {
      width: 40,
      height: 400,
    },
    SpriteOptions: {
      scaleX: 1.0,
      scaleY: 1.0,
      lineWidth: 2.0,
      color: 0xffffff,
    },
    Velocity: { x: 0, y: 0 },
    Obstacle: { groups: [1], radius: 40 },
    Collidable: { group: 1 },
    AreaCapsule: { radius: 40, length: 400 },
    Bounce: { mass: 1000000, restitution: 0.9, immobile: 1 },
  };
}

export class BoundarySprite extends BaseSprite {
  draw(world, entity) {
    super.draw(world, entity);

    const { g } = this;
    const {
      Boundary: { width, height },
    } = entity;

    g.moveTo(0, 0 - height / 4);
    g.lineTo(0, height / 4);

    g.moveTo(0 - width / 4, 0);
    g.lineTo(width / 4, 0);

    g.drawRoundedRect(0 - width / 2, 0 - height / 2, width, height, 8);
  }
}
