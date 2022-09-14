import { defineQuery, defineComponent, Types } from "bitecs";
import { updateEntities, BaseEntityProxy } from "./ecsUtils.js";
import { BaseSprite, SpriteOptions, spritesRenderer } from "./sprites.js";
import { Position, Velocity } from "./positionMotion.js";

export const BoidTag = defineComponent();

export class BoidEntity extends BaseEntityProxy {
  static components = {
    BoidTag,
    Position,
    Velocity,
    SpriteOptions,
  };

  static defaults = {
    SpriteOptions: {
      scaleX: 0.5,
      scaleY: 0.5,
      lineWidth: 2.0,
      color: 0x33ff33,
    },
  };

  update(world) {}
}

export class BoidSprite extends BaseSprite {
  draw(world, boidEntity) {
    const { g } = this;
    const { lineWidth, color } = boidEntity.SpriteOptions;

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
    const { Position, Velocity } = boidEntity;
    const { scaleX, scaleY } = boidEntity.SpriteOptions;

    g.x = Position.x;
    g.y = Position.y;
    g.rotation = Math.atan2(Velocity.y, Velocity.x);
    g.scale.x = scaleX;
    g.scale.y = scaleY;
  }
}

export const boidsQuery = BoidEntity.query;

export const boidsUpdateSystem = (options) => (world) =>
  updateEntities(world, [[boidsQuery, BoidEntity]]);

export const boidsRenderer = () =>
  spritesRenderer([[boidsQuery, BoidEntity, BoidSprite]]);
