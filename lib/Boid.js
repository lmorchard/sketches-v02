import { defineComponent } from "bitecs";
import { updateEntities, BaseEntityProxy } from "./core/entities.js";
import { BaseSprite, SpriteOptions, spritesRenderer } from "./core/sprites.js";
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
    const { Position } = boidEntity;
    const { scaleX, scaleY } = boidEntity.SpriteOptions;

    g.x = Position.x;
    g.y = Position.y;
    g.rotation = Position.r;
    g.scale.x = scaleX;
    g.scale.y = scaleY;
  }
}

export const boidsUpdateSystem = (options) => (world) =>
  updateEntities(world, [[BoidEntity]]);

export const boidsRenderer = () => spritesRenderer([[BoidEntity, BoidSprite]]);
