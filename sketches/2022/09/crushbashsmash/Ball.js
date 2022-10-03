import { defineComponent, hasComponent, Types } from "bitecs";
import { BaseEntityProxy } from "../../../../lib/core/entities.js";
import { Collidable, collisionService } from "../../../../lib/Collisions.js";
import { Bounce } from "../../../../lib/Bouncer.js";
import { Position, Velocity } from "../../../../lib/PositionMotion.js";
import { AreaCapsule } from "../../../../lib/PositionIndex.js";
import { SpriteOptions, BaseSprite } from "../../../../lib/core/sprites.js";
import { Steering, Obstacle, MaintainSpeed } from "../../../../lib/Steering.js";
import { Health, healthService } from "../../../../lib/Health.js";
import { Brick } from "./Brick.js";

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
    AreaCapsule,
    Steering,
    Obstacle,
    MaintainSpeed,
    Bounce,
    Health,
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
    Obstacle: { groups: [1], radius: 10 },
    MaintainSpeed: { maxSpeed: 300, acceleration: 50, braking: 50 },
    Collidable: { group: 1 },
    AreaCapsule: { radius: 10, length: 2 },
    Bounce: { mass: 100, restitution: 0.9 },
    Health: { max: 1000, current: 1000 },
  };

  update() {
    collisionService.using(this.world);
    healthService.using(this.world);

    const collisions = collisionService.get(this.eid);
    if (collisions) {
      for (const eid of collisions) {
        if (hasComponent(world, Brick, eid)) {
          healthService.hurt(eid, 25);
        }
      }  
    }
  }
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
