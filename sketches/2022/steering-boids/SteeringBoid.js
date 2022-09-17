import { Position, Velocity } from "../../../lib/positionMotion";
import { defineQuery, defineComponent, Types } from "bitecs";
import { GenericComponentProxy, setEid } from "../../../lib/core/entities.js";
import { Vector2D } from "../../../lib/utils/vector.js";
import { Vector2DComponentProxy } from "../../../lib/utils/VectorComponentProxy.js";

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
  let deltaSec;

  const nullVector = new Vector2D(0, 0);
  const otherVector = new Vector2D();
  const forceVector = new Vector2D();

  const main = (world) => {
    deltaSec = world.time.deltaSec;
    for (const eid of steeringBoidsQuery(world)) {
      setEid(eid, steeringBoid, position, velocity);

      const speed = velocity.length();
      forceVector.copy(nullVector).add(
        seek(steeringBoid),
        flee(steeringBoid),
        // arrive
        wander(steeringBoid),
        // pursuit
        // evade
        // movement manager
        // collision avoidance
        avoidBorder(steeringBoid, world)
      );
      velocity.add(forceVector).truncate(speed);

      velocity.add(maintainMaxSpeed(steeringBoid));
    }

    return world;
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
