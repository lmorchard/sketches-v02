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
    const { lineWidth, color } = entity.SpriteOptions;

    g.clear();
    g.lineStyle(lineWidth, color, 1);
  }

  update(world, entity) {
    const { g } = this;

    g.x = entity.Position.x;
    g.y = entity.Position.y;
    g.rotation = entity.Position.r;
    g.scale.x = entity.SpriteOptions.scaleX;
    g.scale.y = entity.SpriteOptions.scaleY;
  }
}

export function updateSprites(world, g, spriteUpdates) {
  for (let [
    Entity,
    Sprite,
    query = Entity.query,
    spriteMapName = Sprite.name,
  ] of spriteUpdates) {
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
