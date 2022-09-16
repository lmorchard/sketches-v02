import { Position, Velocity } from "../../../lib/positionMotion.js";
import { defineQuery, defineComponent, Types } from "bitecs";
import { GenericComponentProxy, setEid } from "../../../lib/core/entities.js";
import { distanceSq } from "../../../lib/utils/utils.js";
import { PositionIndexService } from "../../../lib/PositionIndex.js";

export const FlockingBoid = defineComponent({
  flockGroup: Types.ui32,
});

export const flockingBoidsQuery = defineQuery([
  Position,
  Velocity,
  FlockingBoid,
]);

export const flockingBoidsSystem = (options = {}) => {
  const flockingBoid = new GenericComponentProxy(FlockingBoid);
  const position = new GenericComponentProxy(Position);
  const velocity = new GenericComponentProxy(Velocity);

  const otherFlockingBoid = new GenericComponentProxy(FlockingBoid);
  const otherPosition = new GenericComponentProxy(Position);
  const otherVelocity = new GenericComponentProxy(Velocity);

  const positionIndexService = new PositionIndexService();

  const main = (world) => {
    const {
      visualRange,
      visualEntityLimit,
      centeringFactor,
      avoidFactor,
      avoidMinDistance,
      matchingFactor,
    } = options;

    for (const eid of flockingBoidsQuery(world)) {
      setEid(eid, flockingBoid, position, velocity);

      const { flockGroup } = flockingBoid;

      const nearbyEids = findNearbyBoids(
        world,
        eid,
        visualRange,
        flockGroup,
        visualEntityLimit
      );
      if (nearbyEids.length == 0) continue;

      applyCoherence(nearbyEids, centeringFactor);
      applySeparation(nearbyEids, avoidFactor, avoidMinDistance);
      applyAlignment(nearbyEids, matchingFactor);
    }
    return world;
  };

  const findNearbyBoids = (
    world,
    subjectEid,
    visualRange,
    flockGroup,
    limit = 7
  ) => {
    return positionIndexService
      .using(world)
      .findNearestToEntity(subjectEid, visualRange, limit)
      .filter((eid) => flockGroup === FlockingBoid.flockGroup[eid]);
  };

  const applyCoherence = (nearbyEids, centeringFactor) => {
    let centerX = 0;
    let centerY = 0;
    for (const otherEid of nearbyEids) {
      setEid(otherEid, otherFlockingBoid, otherPosition, otherVelocity);
      centerX += otherPosition.x;
      centerY += otherPosition.y;
    }
    centerX = centerX / nearbyEids.length;
    centerY = centerY / nearbyEids.length;
    velocity.x += (centerX - position.x) * centeringFactor;
    velocity.y += (centerY - position.y) * centeringFactor;
  };

  const applySeparation = (nearbyEids, avoidFactor, avoidMinDistance) => {
    const avoidMinDistanceSq = Math.pow(avoidMinDistance, 2);
    let moveX = 0;
    let moveY = 0;
    for (const otherEid of nearbyEids) {
      setEid(otherEid, otherFlockingBoid, otherPosition, otherVelocity);
      if (
        distanceSq(position.x, position.y, otherPosition.x, otherPosition.y) <
        avoidMinDistanceSq
      ) {
        moveX += position.x - otherPosition.x;
        moveY += position.y - otherPosition.y;
      }
    }
    velocity.x += moveX * avoidFactor;
    velocity.y += moveY * avoidFactor;
  };

  const applyAlignment = (nearbyEids, matchingFactor) => {
    let dx = 0;
    let dy = 0;
    for (const otherEid of nearbyEids) {
      setEid(otherEid, otherFlockingBoid, otherPosition, otherVelocity);
      dx += otherVelocity.x;
      dy += otherVelocity.y;
    }
    dx = dx / nearbyEids.length;
    dy = dy / nearbyEids.length;
    velocity.x += (dx - velocity.x) * matchingFactor;
    velocity.y += (dy - velocity.y) * matchingFactor;
  };

  return main;
};
