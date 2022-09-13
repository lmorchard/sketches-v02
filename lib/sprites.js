import { defineComponent, Types } from "bitecs";
import { SmoothGraphics as Graphics } from "@pixi/graphics-smooth";

export const SpriteOptions = defineComponent({
  scaleX: Types.f32,
  scaleY: Types.f32,
  lineWidth: Types.f32,
  color: Types.ui32,
});

export class BaseSprite {
  constructor(world, entity) {
    this.g = new Graphics();
    this.draw(world, entity);
  }

  root() {
    return this.g;
  }

  draw(world, entity) {
    const { g } = this;
    const { SpriteOptions } = entity;
    const { lineWidth, color } = SpriteOptions;

    g.clear();
    g.lineStyle(lineWidth, color, 1);
  }

  update(world, entity) {
    const { g } = this;
    const { Position, SpriteOptions } = entity;
    const { scaleX, scaleY } = SpriteOptions;

    g.x = Position.x;
    g.y = Position.y;
    g.rotation = Position.r;
    g.scale.x = scaleX;
    g.scale.y = scaleY;
  }
}

export function updateSprites(world, g, spriteUpdates) {
  for (const [query, Entity, Sprite, spriteMapName] of spriteUpdates) {
    if (!world[spriteMapName]) {
      world[spriteMapName] = new Map();
    }
    const spriteMap = world[spriteMapName];
    const eids = query(world);
    const entity = new Entity();
    for (const eid of eids) {
      entity.eid = eid;
      if (!spriteMap.has(eid)) {
        const sprite = new Sprite(world, entity);
        g.addChild(sprite.root());
        spriteMap.set(eid, sprite);
      }
      spriteMap.get(eid).update(world, entity, eids);
    }
    for (const eid of spriteMap.keys()) {
      if (!eids.includes(eid)) {
        g.removeChild(spriteMap.get(eid).root());
        spriteMap.delete(eid);
      }
    }
  }
  return world;
}

export const spritesRenderer = (spriteUpdates = []) => {
  const init = (world) => {
    const { stage } = world;
    world.gSprites = new Graphics();
    stage.addChild(world.gSprites);
  };
  return (world) => {
    if (!world.gSprites) init(world);
    updateSprites(world, world.gSprites, spriteUpdates);
    return world;
  };
};
