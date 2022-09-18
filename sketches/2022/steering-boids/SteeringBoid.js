import { Position, Velocity } from "../../../lib/positionMotion";
import { defineQuery, defineComponent, hasComponent, Types } from "bitecs";
import { GenericComponentProxy, setEid } from "../../../lib/core/entities.js";
import { Vector2D } from "../../../lib/utils/vector.js";
import { Vector2DComponentProxy } from "../../../lib/utils/VectorComponentProxy.js";
import { positionIndexService } from "../../../lib/PositionIndex.js";

const MAX_OBSTACLE_GROUPS = 4;
export const Obstacle = defineComponent({
  radius: Types.f32,
  groups: [Types.ui8, MAX_OBSTACLE_GROUPS],
});

export const SteeringBoid = defineComponent({
  // mass: Types.f32,

  maxSpeed: Types.f32,
  acceleration: Types.f32,
  braking: Types.f32,

  seekForce: Types.f32,
  seekX: Types.f32,
  seekY: Types.f32,

  fleeForce: Types.f32,
  fleeX: Types.f32,
  fleeY: Types.f32,

  wanderForce: Types.f32,
  wanderDistance: Types.f32,
  wanderRadius: Types.f32,
  wanderAngle: Types.f32,

  avoidObstaclesForce: Types.f32,
  avoidObstaclesGroups: [Types.ui8, MAX_OBSTACLE_GROUPS],
  avoidObstaclesRange: Types.f32,
  avoidObstaclesViewAngle: Types.f32,

  avoidBorderForce: Types.f32,
  originX: Types.f32,
  originY: Types.f32,
  marginX: Types.f32,
  marginY: Types.f32,
});

export const steeringBoidsQuery = defineQuery([
  SteeringBoid,
  Position,
  Velocity,
]);

export const steeringBoidsSystem = (options = {}) => {
  const steeringBoid = new GenericComponentProxy(SteeringBoid);
  const position = new Vector2DComponentProxy(Position);
  const velocity = new Vector2DComponentProxy(Velocity);
  const otherPosition = new Vector2DComponentProxy(Position);
  const otherObstacle = new GenericComponentProxy(Obstacle);

  const nullVector = new Vector2D(0, 0);
  const otherVector = new Vector2D();
  const forceVector = new Vector2D();

  const main = (world) => {
    for (const eid of steeringBoidsQuery(world)) {
      setEid(eid, steeringBoid, position, velocity);

      velocity.add(maintainMaxSpeed(steeringBoid));

      // Accumulate all the steering behavior forces
      forceVector.copy(nullVector).add(
        seek(steeringBoid, world, eid),
        flee(steeringBoid, world, eid),
        // arrive
        wander(steeringBoid, world, eid),
        // pursuit
        // evade
        // movement manager
        // collision avoidance
        avoidObstacles(steeringBoid, world, eid),
        avoidBorder(steeringBoid, world, eid)
      );

      // Add the steering force to the velocity but maintain previous speed
      const speed = velocity.length();
      velocity.add(forceVector).truncate(speed);
    }

    return world;
  };

  const seekVector = new Vector2D();
  const seek = ({ seekForce, seekX, seekY }) => {
    if (!seekForce) return nullVector;
    return seekVector
      .copy(otherVector.set(seekX, seekY))
      .subtract(position)
      .truncate(seekForce);
  };

  const fleeVector = new Vector2D();
  const flee = ({ fleeForce, fleeX, fleeY }) => {
    if (!fleeForce) return nullVector;
    return fleeVector
      .copy(otherVector.set(fleeX, fleeY))
      .subtract(position)
      .truncate(fleeForce)
      .multiplyScalar(-1);
  };

  const wanderDisplacement = new Vector2D();
  const wanderVector = new Vector2D();
  const wander = ({
    wanderForce,
    wanderDistance,
    wanderRadius,
    wanderAngle,
  }) => {
    if (!wanderForce) return nullVector;
    steeringBoid.wanderAngle += Math.PI * (Math.random() * 0.25 - 0.125);
    wanderDisplacement.set(0, -1).scaleBy(wanderRadius).rotate(wanderAngle);
    return wanderVector
      .clone(velocity)
      .normalize()
      .scaleBy(wanderDistance)
      .add(wanderDisplacement)
      .truncate(wanderForce);
  };

  const avoidObstaclesVector = new Vector2D();
  const avoidObstaclesPushVector = new Vector2D();
  const avoidObstacles = (
    { avoidObstaclesForce, avoidObstaclesRadius, avoidObstaclesRange },
    world,
    eid
  ) => {
    if (!avoidObstaclesForce) return nullVector;

    const nearbyEids = findNearbyObstacles(
      world,
      eid,
      position,
      velocity,
      steeringBoid,
      otherObstacle,
      otherPosition
    );

    avoidObstaclesVector.copy(nullVector);
    for (const otherEid of nearbyEids) {
      setEid(otherEid, otherPosition, otherObstacle);

      const distanceTo =
        position.distanceTo(otherPosition) -
        otherObstacle.radius -
        avoidObstaclesRadius;
      const distanceFactor = distanceTo == 0 ? 1 / distanceTo : 1;

      avoidObstaclesPushVector
        .copy(position)
        .subtract(otherPosition)
        .normalize()
        .scaleBy(avoidObstaclesForce)
        .scaleBy(distanceFactor);

      avoidObstaclesVector.add(avoidObstaclesPushVector);
    }
    avoidObstaclesVector.truncate(avoidObstaclesForce);
    return avoidObstaclesVector;
  };

  const avoidBorderVector = new Vector2D();
  const avoidBorder = (
    {
      originX = 0,
      originY = 0,
      marginX = 200,
      marginY = 200,
      avoidBorderForce = 7.0,
    },
    world
  ) => {
    if (!avoidBorderForce) return nullVector;

    const {
      renderer: { width, height },
    } = world;
    const hwidth = (width - marginX) / 2;
    const hheight = (height - marginY) / 2;
    const { x, y } = position;

    if (
      x > originX - hwidth &&
      x < originX + hwidth &&
      y > originY - hheight &&
      y < originY + hheight
    )
      return nullVector;

    return avoidBorderVector
      .copy(otherVector.set(originX, originY))
      .subtract(position)
      .truncate(avoidBorderForce);
  };

  const maintainMaxSpeedVector = new Vector2D();
  const maintainMaxSpeed = ({ maxSpeed, acceleration, braking }) => {
    if (acceleration === 0 && braking === 0) return nullVector;

    const speed2 = velocity.lengthSquared();
    const maxSpeed2 = maxSpeed * maxSpeed;
    if (speed2 === maxSpeed2) return nullVector;

    const shouldBrake = speed2 > maxSpeed2;
    const throttled = Math.min(
      Math.abs(maxSpeed2 - speed2),
      shouldBrake ? braking : acceleration
    );
    const change = shouldBrake ? -throttled : throttled;

    return maintainMaxSpeedVector
      .clone(velocity)
      .normalize()
      .multiplyScalar(change);
  };

  return main;
};

function findNearbyObstacles(
  world,
  eid,
  position,
  velocity,
  steeringBoid,
  otherObstacle,
  otherPosition,
) {
  const heading = velocity.angle();

  return positionIndexService
    .using(world)
    .findNearestToEntity(eid, steeringBoid.avoidObstaclesRange)
    .filter((otherEid) => {
      // Skip if this entity isn't an obstacle.
      if (!hasComponent(world, Obstacle, otherEid)) return false;
      setEid(otherEid, otherPosition, otherObstacle);

      // Skip if this obstacle doesn't match any groups we're avoiding
      if (
        steeringBoid.avoidObstaclesGroups.filter((group) =>
          otherObstacle.groups.includes(group)
        ).length === 0
      )
        return false;

      // Skip if this obstacle is outside our view angle
      // TODO: is this actually a decent way to work out this angle?
      const obstacleHeading = position.angleTo(otherPosition);
      const angleToHeading = Math.abs(heading - obstacleHeading);
      return angleToHeading < steeringBoid.avoidObstaclesViewAngle;
    });
}

export const steeringBoidsDebugRendererSystem = (options = {}) => {
  const steeringBoid = new GenericComponentProxy(SteeringBoid);
  const position = new Vector2DComponentProxy(Position);
  const velocity = new Vector2DComponentProxy(Velocity);
  const otherPosition = new Vector2DComponentProxy(Position);
  const otherObstacle = new GenericComponentProxy(Obstacle);
  const otherVelocity = new Vector2DComponentProxy(Velocity);

  return (world) => {
    if (!world || !world.debug) return world;
    const g = world.debugGraphics;

    for (const eid of steeringBoidsQuery(world)) {
      setEid(eid, steeringBoid, position, velocity);

      // Debug obstacle avoidance
      const nearbyEids = findNearbyObstacles(
        world,
        eid,
        position,
        velocity,
        steeringBoid,
        otherObstacle,
        otherPosition
      );
      for (const otherEid of nearbyEids) {
        setEid(otherEid, otherPosition, otherObstacle, otherVelocity);
        g.lineStyle(2.0, 0xff22ff, 0.5);

        g.moveTo(position.x, position.y);
        g.lineTo(otherPosition.x, otherPosition.y);
      }
    }

    return world;
  };
};
