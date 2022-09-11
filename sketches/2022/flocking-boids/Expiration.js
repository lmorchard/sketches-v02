import { defineQuery, defineComponent, Types, removeEntity } from "bitecs";

export const Tombstone = defineComponent();

export const Expiration = defineComponent({
  timeToLive: Types.f32,
});

export const expirationQuery = defineQuery([Expiration]);

export const expirationSystem = (options = { onRemove: eid => {} }) => {
  return (world) => {
    const { deltaSec } = world.time;  
    for (const eid of expirationQuery(world)) {
      Expiration.timeToLive[eid] -= deltaSec;
      if (Expiration.timeToLive[eid] <= 0) {
        options.onRemove(eid);
        removeEntity(world, eid);
      }
    }
    return world;
  };
};
