import { Position, Velocity } from "../../../lib/positionMotion.js";
import { defineQuery, defineComponent, Types } from "bitecs";
import { GenericComponentProxy, setEid } from "../../../lib/core/entities.js";
import { distanceSq } from "../../../lib/utils/utils.js";
import * as Quadtree from "@timohausmann/quadtree-ts";

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

  let boidsQuadTree;
  const updateBoidsQuadTree = (world) => {
    let xMin = null;
    let xMax = null;
    let yMin = null;
    let yMax = null;
    const points = [];
    for (const eid of flockingBoidsQuery(world)) {
      const x = Position.x[eid];
      const y = Position.y[eid];
      if (xMin === null || x < xMin) xMin = x;
      if (xMax === null || x > xMax) xMax = x;
      if (yMin === null || y < yMin) yMin = y;
      if (yMax === null || y > yMax) yMax = y;

      points.push([x, y, eid]);
    }
    boidsQuadTree = new Quadtree.Quadtree({
      width: xMax - xMin,
      height: yMax - yMin,
      x: xMin,
      y: yMin,
      maxObjects: 10,
      maxLevels: 4,
    });
    points.forEach(([x, y, eid]) => {
      boidsQuadTree.insert(
        new Quadtree.Rectangle({
          x,
          y,
          width: 1,
          height: 1,
          data: eid,
        })
      );
    });

    return boidsQuadTree;
  };

  // TODO: this is brute force and naive, a quadtree would be nice
  const findNearbyBoids = (
    world,
    subjectEid,
    visualRange,
    flockGroup,
    limit = 7
  ) => {
    return (
      boidsQuadTree
        // Query the quadtree with other boids roughly within range
        .retrieve(
          new Quadtree.Rectangle({
            x: Position.x[subjectEid] - visualRange / 2,
            y: Position.y[subjectEid] - visualRange / 2,
            width: visualRange,
            height: visualRange,
          })
        )
        // Filter for the current flock group
        .filter(({ data: eid }) => flockGroup === FlockingBoid.flockGroup[eid])
        // Find distance to all the other boids
        .map(({ data: eid }) => [
          eid,
          distanceSq(
            Position.x[subjectEid],
            Position.y[subjectEid],
            Position.x[eid],
            Position.y[eid]
          ),
        ])
        // Sort by distance
        .sort(
          ([aEid, aDistanceSq], [bEid, bDistanceSq]) =>
            aDistanceSq - bDistanceSq
        )
        .map(([otherEid]) => otherEid)
        .slice(0, limit)
    );
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

  return (world) => {
    const {
      visualRange,
      visualEntityLimit,
      centeringFactor,
      avoidFactor,
      avoidMinDistance,
      matchingFactor,
    } = options;

    updateBoidsQuadTree(world);

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
};
