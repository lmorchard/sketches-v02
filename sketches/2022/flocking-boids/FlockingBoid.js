
import { Position, Velocity } from "../../../lib/positionMotion";
import { defineQuery, defineComponent, Types } from "bitecs";
import { GenericComponentProxy, setEid } from "../../../lib/ecsUtils.js";
import { distanceSq } from "../../../lib/utils.js";

export const FlockingBoid = defineComponent({
  flockGroup: Types.ui32,
  visualRange: Types.f32,
  visualEntityLimit: Types.ui8,
  centeringFactor: Types.f32,
  avoidFactor: Types.f32,
  avoidMinDistance: Types.f32,
  matchingFactor: Types.f32,
  originX: Types.f32,
  originY: Types.f32,
  originTurnFactor: Types.f32,
  maxOriginDistance: Types.f32,
});

export const flockingBoidsQuery = defineQuery([
  Position,
  Velocity,
  FlockingBoid,
]);

export const flockingBoidsSystem = (options) => {
  const flockingBoid = new GenericComponentProxy(FlockingBoid);
  const position = new GenericComponentProxy(Position);
  const velocity = new GenericComponentProxy(Velocity);

  const otherFlockingBoid = new GenericComponentProxy(FlockingBoid);
  const otherPosition = new GenericComponentProxy(Position);
  const otherVelocity = new GenericComponentProxy(Velocity);

  // TODO: this is brute force and naive, a quadtree would be nice
  const findNearbyBoids = (
    world,
    subjectEid,
    visualRange,
    flockGroup,
    limit = 7
  ) => {
    const visualRangeSq = Math.pow(visualRange, 2);
    return flockingBoidsQuery(world)
      .filter((eid) => flockGroup === FlockingBoid.flockGroup[eid])
      .map((eid) => [
        eid,
        distanceSq(
          Position.x[subjectEid],
          Position.y[subjectEid],
          Position.x[eid],
          Position.y[eid]
        ),
      ])
      .filter(([otherEid, otherDistanceSq]) => otherDistanceSq < visualRangeSq)
      .sort(([aEid, aDistanceSq], [bEid, bDistanceSq]) => aDistanceSq - bDistanceSq)
      .slice(0, limit)
      .map(([otherEid]) => otherEid);
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

  const applyTurnFromBounds = () => {
    const { x, y } = position;
    const { originTurnFactor, originX, originY, maxOriginDistance } =
      flockingBoid;

    if (distanceSq(x, y, originX, originY) < Math.pow(maxOriginDistance, 2)) return;

    const originHeading = Math.atan2(originY - y, originX - x);
    velocity.x += originTurnFactor * Math.cos(originHeading);
    velocity.y += originTurnFactor * Math.sin(originHeading);
  };

  return (world) => {
    for (const eid of flockingBoidsQuery(world)) {
      setEid(eid, flockingBoid, position, velocity);

      const {
        flockGroup,
        visualRange,
        visualEntityLimit,
        centeringFactor,
        avoidFactor,
        avoidMinDistance,
        matchingFactor,
      } = flockingBoid;

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
      applyTurnFromBounds();
    }
    return world;
  };
};