import { defineQuery, defineComponent, Types } from "bitecs";
import { GenericComponentProxy } from "../../../lib/ecsUtils.js";
import { Position, Velocity } from "../../../lib/positionMotion";
import { transition } from "../../../lib/transitions.js";
import easings from "../../../lib/easings.js";

import { HeadingAndSpeed } from "./HeadingAndSpeed.js";

export const Wanderer = defineComponent({
  idleDelay: Types.f32,
  turnActive: Types.ui8,
  turnStart: Types.f32,
  turnEnd: Types.f32,
  turnDuration: Types.f32,
  turnElapsed: Types.f32,
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
      const { heading } = headingAndSpeed;

      // Execute the current turn, if it's active
      if (wanderer.turnActive) {
        wanderer.turnElapsed += deltaSec;
        if (wanderer.turnElapsed >= wanderer.turnDuration) {
          wanderer.turnActive = false;
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
      if (x < -400 || x > 400 || y < -400 || y > 400) {
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
        // Otherwise, wait through idle delay and then kick off a new turn and following idle delay
        wanderer.idleDelay -= deltaSec;
        if (wanderer.idleDelay <= 0) {
          Object.assign(wanderer, {
            idleDelay: Math.random() * 2,
            turnActive: true,
            turnDuration: Math.random() * 3,
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