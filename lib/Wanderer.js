import { defineQuery, defineComponent, Types } from "bitecs";
import { GenericComponentProxy } from "./ecsUtils.js";
import { Position, Velocity } from "./positionMotion";
import { transition } from "./transitions.js";
import easings from "./easings.js";
import { distance } from "./utils.js";

import { HeadingAndSpeed } from "./HeadingAndSpeed.js";

export const Wanderer = defineComponent({
  idleDelay: Types.f32,
  turnActive: Types.ui8,
  turnStart: Types.f32,
  turnEnd: Types.f32,
  turnDuration: Types.f32,
  turnElapsed: Types.f32,
  originX: Types.f32,
  originY: Types.f32,
  maxDistance: Types.f32,
});

export const wandererQuery = defineQuery([
  Wanderer,
  HeadingAndSpeed,
  Position,
  Velocity,
]);

export const wandererSystem = (options) => {
  const wanderer = new GenericComponentProxy(Wanderer);
  const position = new GenericComponentProxy(Position);
  const headingAndSpeed = new GenericComponentProxy(HeadingAndSpeed);

  return (world) => {
    const { deltaSec } = world.time;

    for (const eid of wandererQuery(world)) {
      position.eid = eid;
      wanderer.eid = eid;
      headingAndSpeed.eid = eid;

      const { x, y } = position;
      const { originX, originY, maxDistance } = wanderer;
      const { heading } = headingAndSpeed;

      // Execute the current turn, if it's active
      if (wanderer.turnActive) {
        wanderer.turnElapsed += deltaSec;
        if (wanderer.turnElapsed >= wanderer.turnDuration) {
          // Turn complete, schedule a new idle delay
          wanderer.turnActive = false;
          wanderer.idleDelay = Math.random() * 2;
        }
        const { turnStart, turnEnd, turnDuration, turnElapsed } = wanderer;
        headingAndSpeed.heading = transition(
          turnStart,
          turnEnd,
          turnDuration,
          turnElapsed,
          easings.easeInOutCubic
        );
        continue;
      }

      // If we're out of bounds, turn back toward origin
      if (distance(x, y, originX, originY) > maxDistance) {
        const originHeading = Math.atan2(0 - y, 0 - x);
        if (Math.abs(originHeading - heading) > Math.PI / 4) {
          Object.assign(wanderer, {
            idleDelay: 0,
            turnActive: true,
            turnDuration: 1,
            turnElapsed: 0,
            turnStart: heading,
            turnEnd: originHeading,
          });
        }
        continue;
      }

      if (!wanderer.turnActive) {
        // Otherwise, wait through idle delay and then kick off a new turn
        wanderer.idleDelay -= deltaSec;
        if (wanderer.idleDelay <= 0) {
          Object.assign(wanderer, {
            turnActive: true,
            turnDuration: 0.5 + Math.random() * 2.0,
            turnElapsed: 0,
            turnStart: heading,
            turnEnd: Math.PI * 2 * Math.random(),
          });
          continue;
        }
      }
    }
    return world;
  };
};
