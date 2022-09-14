export const spawnerSystem = (options = {}) => {
  let spawnDelayRemaining = 0;

  return (world) => {
    const {
      entityQuery,
      spawnEntity,
      maxEntities = 100,
      maxPerFrame = 1,
      spawnDelay = 0,
    } = options;
   
    const { deltaSec } = world.time;
    spawnDelayRemaining -= deltaSec;
    if (spawnDelayRemaining > 0) {
      return world;
    }
    spawnDelayRemaining = spawnDelay;
    const count = entityQuery(world).length;
    const toSpawn = Math.min(maxPerFrame, maxEntities - count);
    for (let idx = 0; idx < toSpawn; idx++) {
      spawnEntity(world);
    }
    return world;
  };
};
