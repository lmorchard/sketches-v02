import { Velocity } from "../../../lib/positionMotion";
import { defineQuery, defineComponent, Types } from "bitecs";
import { GenericComponentProxy, setEid } from "../../../lib/ecsUtils.js";

export const SeekSpeed = defineComponent({
  acceleration: Types.f32,
  targetSpeed: Types.f32,
});

export const seekSpeedQuery = defineQuery([Velocity, SeekSpeed]);

export const seekSpeedSystem = (options) => {
  const velocity = new GenericComponentProxy(Velocity);
  const seekSpeed = new GenericComponentProxy(SeekSpeed);

  return (world) => {
    for (const eid of seekSpeedQuery(world)) {
      setEid(eid, seekSpeed, velocity);
      const { acceleration, targetSpeed } = seekSpeed;
      const { x: dx, y: dy } = velocity;

      const currSpeed2 = Math.pow(dx, 2) + Math.pow(dy, 2);
      if (currSpeed2 >= Math.pow(targetSpeed, 2)) continue;

      const heading = Math.atan2(velocity.y, velocity.x);
      velocity.x += acceleration * Math.cos(heading);
      velocity.y += acceleration * Math.sin(heading);
    }
    return world;
  };
};
