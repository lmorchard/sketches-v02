import { Position, Velocity } from "../../../lib/positionMotion";
import { defineQuery, defineComponent, Types } from "bitecs";
import { GenericComponentProxy, setEid } from "../../../lib/ecsUtils.js";
import { distanceSq } from "../../../lib/utils.js";
import * as Quadtree from "@timohausmann/quadtree-ts";

export const SteeringBoid = defineComponent({
  // mass: Types.f32,

  maxSpeed: Types.f32,
  acceleration: Types.f32,
  braking: Types.f32,
  seekFactor: Types.f32,
  seekX: Types.f32,
  seekY: Types.f32,
});

export const steeringBoidsQuery = defineQuery([
  SteeringBoid,
  Position,
  Velocity,
]);

export const steeringBoidsSystem = (options = {}) => {
  const steeringBoid = new GenericComponentProxy(SteeringBoid);
  const position = new GenericComponentProxy(Position);
  const velocity = new GenericComponentProxy(Velocity);
  let deltaSec;
  let debug;

  const seek = () => {
    const { x, y } = position;
    const { seekFactor, seekX, seekY } = steeringBoid;
    if (seekFactor == 0) return;

    const heading = Math.atan2(seekY - y, seekX - x);
    velocity.x += seekFactor * Math.cos(heading);
    velocity.y += seekFactor * Math.sin(heading);
  };

  const manageSpeed = () => {
    const { x: dx, y: dy } = velocity;
    const { maxSpeed, acceleration, braking } = steeringBoid;

    if (acceleration === 0 && braking === 0) return;

    const speed2 = Math.pow(dx, 2) + Math.pow(dy, 2);
    const maxSpeed2 = Math.pow(maxSpeed, 2);
    if (speed2 === maxSpeed2) return;

    const throttle = Math.abs(speed2 - maxSpeed2) / maxSpeed2;
    let change = (speed2 < maxSpeed2 ? acceleration : 0 - braking) * throttle;

    const heading = Math.atan2(dy, dx);
    velocity.x += change * Math.cos(heading);
    velocity.y += change * Math.sin(heading);
  };

  return (world) => {
    deltaSec = world.time.deltaSec;
    for (const eid of steeringBoidsQuery(world)) {
      setEid(eid, steeringBoid, position, velocity);

      seek();

      // flee
      // arrive
      // wander
      // pursuit
      // evade
      // movement manager
      // collision avoidance

      manageSpeed();
    }

    return world;
  };
};
