import { defineQuery, defineComponent, Types } from "bitecs";
import { Position, Velocity } from "./positionMotion";
import { GenericComponentProxy } from "./ecsUtils.js";

export const HeadingAndSpeed = defineComponent({
  heading: Types.f32,
  speed: Types.f32,
});

export const headingAndSpeedQuery = defineQuery([
  HeadingAndSpeed,
  Position,
  Velocity,
]);

export const headingAndSpeedSystem = (options) => {
  const headingAndSpeed = new GenericComponentProxy(HeadingAndSpeed);
  const position = new GenericComponentProxy(Position);
  const velocity = new GenericComponentProxy(Velocity);

  return (world) => {
    for (const eid of headingAndSpeedQuery(world)) {
      headingAndSpeed.eid = eid;
      position.eid = eid;
      velocity.eid = eid;

      const { speed, heading } = headingAndSpeed;

      velocity.x = speed * Math.cos(heading);
      velocity.y = speed * Math.sin(heading);
    }
    return world;
  };
};
