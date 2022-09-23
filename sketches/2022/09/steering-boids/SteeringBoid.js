import { Position, Velocity } from "../../../../lib/positionMotion";
import { defineQuery, defineComponent, hasComponent, Types } from "bitecs";
import {
  BaseEntityProxy,
  GenericComponentProxy,
  setEid,
} from "../../../../lib/core/entities.js";
import { Vector2D } from "../../../../lib/utils/vector.js";
import { Vector2DComponentProxy } from "../../../../lib/utils/VectorComponentProxy.js";
import { positionIndexService } from "../../../../lib/PositionIndex.js";

const MAX_OBSTACLE_GROUPS = 4;
export const Obstacle = defineComponent({
  radius: Types.f32,
  groups: [Types.ui8, MAX_OBSTACLE_GROUPS],
});

export const Steering = defineComponent();

export const MaintainSpeed = defineComponent({
  maxSpeed: Types.f32,
  acceleration: Types.f32,
  braking: Types.f32,
});

export const Seek = defineComponent({
  force: Types.f32,
  x: Types.f32,
  y: Types.f32,
});

export const Flee = defineComponent({
  force: Types.f32,
  x: Types.f32,
  y: Types.f32,
});

export const Wander = defineComponent({
  force: Types.f32,
  distance: Types.f32,
  radius: Types.f32,
  angle: Types.f32,
});

export const AvoidObstacles = defineComponent({
  force: Types.f32,
  groups: [Types.ui8, MAX_OBSTACLE_GROUPS],
  range: Types.f32,
  viewAngle: Types.f32,
});

export const AvoidBorder = defineComponent({
  force: Types.f32,
  originX: Types.f32,
  originY: Types.f32,
  marginX: Types.f32,
  marginY: Types.f32,
});

export class SteeringEntity extends BaseEntityProxy {
  static components = {
    Position,
    Velocity,
    Steering,
    MaintainSpeed,
    Seek,
    Flee,
    Wander,
    AvoidObstacles,
    AvoidBorder,
  };
  static componentProxyClasses = {
    Position: Vector2DComponentProxy,
    Velocity: Vector2DComponentProxy,
  };
}

export const steeringQuery = defineQuery([Steering, Position, Velocity]);

export const steeringSystem = (options = {}) => {
  const steeringEntity = new SteeringEntity();

  const nullVector = new Vector2D(0, 0);
  const otherVector = new Vector2D();
  const forceVector = new Vector2D();

  const main = (world) => {
    for (const eid of steeringQuery(world)) {
      steeringEntity.using(eid, world);

      const {
        Velocity: velocity,
        Position: position,
        MaintainSpeed: maintainSpeed,
      } = steeringEntity;

      if (maintainSpeed.hasComponent()) {
        velocity.add(applyMaintainSpeed(steeringEntity));
      }

      // Accumulate all the steering behavior forces
      forceVector.copy(nullVector).add(
        applySeek(),
        applyFlee(),
        // arrive
        applyWander(),
        // pursuit
        // evade
        applyAvoidObstacles(),
        applyAvoidBorder()
      );

      // Add the steering force to the velocity but maintain previous speed
      const speed = velocity.length();
      velocity.add(forceVector).truncate(speed);

      // Face in the direction of the "intended" vector
      // TODO: This is really abrupt - find a way to smooth it?
      // position.r = Math.atan2(forceVector.y, forceVector.x);
      position.r = Math.atan2(velocity.y, velocity.x);
    }

    return world;
  };

  const seekVector = new Vector2D();
  const applySeek = () => {
    if (!steeringEntity.Seek.hasComponent()) return;
    const {
      Seek: { force, x, y },
      Position: position,
    } = steeringEntity;
    return seekVector
      .copy(otherVector.set(x, y))
      .subtract(position)
      .truncate(force);
  };

  const fleeVector = new Vector2D();
  const applyFlee = () => {
    if (!steeringEntity.Flee.hasComponent()) return;
    const {
      Flee: { force, x, y },
      Position: position,
    } = steeringEntity;
    return fleeVector
      .copy(otherVector.set(x, y))
      .subtract(position)
      .truncate(force)
      .multiplyScalar(-1);
  };

  const wanderDisplacement = new Vector2D();
  const wanderVector = new Vector2D();
  const applyWander = () => {
    if (!steeringEntity.Wander.hasComponent()) return;
    steeringEntity.Wander.angle += Math.PI * (Math.random() * 0.25 - 0.125);
    const {
      Wander: { force, distance, radius, angle },
      Velocity: velocity,
    } = steeringEntity;
    wanderDisplacement.set(0, -1).scaleBy(radius).rotate(angle);
    return wanderVector
      .clone(velocity)
      .normalize()
      .scaleBy(distance)
      .add(wanderDisplacement)
      .truncate(force);
  };

  const otherPosition = new Vector2DComponentProxy(Position);
  const otherObstacle = new GenericComponentProxy(Obstacle);
  const avoidObstaclesVector = new Vector2D();
  const avoidObstaclesPushVector = new Vector2D();
  const applyAvoidObstacles = () => {
    if (!steeringEntity.AvoidObstacles.hasComponent()) return;
    const {
      AvoidObstacles: { force, radius },
      AvoidObstacles: avoidObstacles,
      Position: position,
      Velocity: velocity,
      world,
      eid,
    } = steeringEntity;

    const nearbyEids = findNearbyObstacles(
      world,
      eid,
      position,
      velocity,
      avoidObstacles,
      otherObstacle,
      otherPosition
    );

    avoidObstaclesVector.copy(nullVector);
    for (const otherEid of nearbyEids) {
      setEid(otherEid, otherPosition, otherObstacle);

      const distanceTo =
        position.distanceTo(otherPosition) - otherObstacle.radius - radius;
      const distanceFactor = distanceTo == 0 ? 1 / Math.pow(distanceTo, 2) : 1;

      avoidObstaclesPushVector
        .copy(position)
        .subtract(otherPosition)
        .normalize()
        .scaleBy(force)
        .scaleBy(distanceFactor);

      avoidObstaclesVector.add(avoidObstaclesPushVector);
    }
    avoidObstaclesVector.truncate(force);
    return avoidObstaclesVector;
  };

  const avoidBorderVector = new Vector2D();
  const applyAvoidBorder = () => {
    if (!steeringEntity.AvoidBorder.hasComponent()) return;
    const {
      Position: position,
      AvoidBorder: {
        originX = 0,
        originY = 0,
        marginX = 200,
        marginY = 200,
        force = 7.0,
      },
      world: {
        renderer: { width, height },
      },
      eid,
    } = steeringEntity;

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
      .truncate(force);
  };

  const maintainMaxSpeedVector = new Vector2D();
  const applyMaintainSpeed = () => {
    if (!steeringEntity.MaintainSpeed.hasComponent()) return;

    const {
      MaintainSpeed: { maxSpeed, acceleration, braking },
      Velocity: velocity,
    } = steeringEntity;

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
  avoidObstacles,
  otherObstacle,
  otherPosition
) {
  const heading = velocity.angle();

  return positionIndexService
    .using(world)
    .findNearestToEntity(eid, avoidObstacles.range)
    .filter((otherEid) => {
      // Skip if this entity isn't an obstacle.
      if (!hasComponent(world, Obstacle, otherEid)) return false;
      setEid(otherEid, otherPosition, otherObstacle);

      // Skip if this obstacle doesn't match any groups we're avoiding
      if (
        avoidObstacles.groups.filter((group) =>
          otherObstacle.groups.includes(group)
        ).length === 0
      )
        return false;

      // Skip if this obstacle is outside our view angle
      // TODO: is this actually a decent way to work out this angle?
      const obstacleHeading = position.angleTo(otherPosition);
      const angleToHeading = Math.abs(heading - obstacleHeading);
      return angleToHeading < avoidObstacles.viewAngle;
    });
}

export const steeringBoidsDebugRenderer = (options = {}) => {
  const avoidObstacles = new GenericComponentProxy(AvoidObstacles);
  const position = new Vector2DComponentProxy(Position);
  const velocity = new Vector2DComponentProxy(Velocity);
  const otherPosition = new Vector2DComponentProxy(Position);
  const otherObstacle = new GenericComponentProxy(Obstacle);
  const otherVelocity = new Vector2DComponentProxy(Velocity);

  return (world) => {
    if (!world || !world.debug) return world;
    const g = world.debugGraphics;

    for (const eid of steeringQuery(world)) {
      setEid(eid, avoidObstacles, position, velocity);

      // Debug obstacle avoidance
      const nearbyEids = findNearbyObstacles(
        world,
        eid,
        position,
        velocity,
        avoidObstacles,
        otherObstacle,
        otherPosition
      );
      for (const otherEid of nearbyEids) {
        setEid(otherEid, otherPosition, otherObstacle, otherVelocity);
        g.lineStyle(2.0, 0xff22ff, 0.25);

        g.moveTo(position.x, position.y);
        g.lineTo(otherPosition.x, otherPosition.y);
      }
    }

    return world;
  };
};
