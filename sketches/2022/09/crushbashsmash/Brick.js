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
    AreaCapsule,
    Obstacle,
    Bounce,
    Health,
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
    Collidable: { group: 1 },
    AreaCapsule: { radius: 10, length: 40 },
    Bounce: { mass: 1000000, restitution: 0.9 },
    Health: { max: 100, current: 100 },
  };

  update() {    
    if (this.Health.current <= 0) {
      this.spawnTombstone();
      this.remove();
    }
  }

  spawnTombstone() {
    const { x, y } = this.Position;
    return ExplosionEntity.spawn(this.world)
      .add({ Expiration, Tombstone })
      .set({
        Position: { x, y, r: 0 },
        Expiration: { timeToLive: 0.5 },
        SpriteOptions: { scaleX: 1.0, scaleY: 1.0, lineWidth: 2.0 },
      });
  }
}

export class BrickSprite extends BaseSprite {
  draw(world, entity) {
    super.draw(world, entity);

    const { g } = this;
    const {
      Brick: { width, height },
    } = entity;

    g.moveTo(0 - height / 4, 0);
    g.lineTo(height / 4, 0);

    g.moveTo(0, 0 - width / 4);
    g.lineTo(0, width / 4);

    g.drawRoundedRect(0 - height / 2, 0 - width / 2, height, width, 8);

  }
}
