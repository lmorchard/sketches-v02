import { defineComponent, defineQuery, Types } from "bitecs";
import { Position } from "./PositionMotion.js";
import { GenericComponentProxy, setEid } from "./core/entities.js";

export const GoalPosition = defineComponent({
  x: Types.f32,
  y: Types.f32,
  threshold: Types.f32,
});

export const goalPositionQuery = defineQuery([GoalPosition, Position]);

export const goalPositionSystem = (onGoalMet = (world, eid) => {}) => {
  const position = new GenericComponentProxy(Position);
  const goalPosition = new GenericComponentProxy(GoalPosition);

  return (world) => {
    for (const eid of goalPositionQuery(world)) {
      setEid(eid, position, goalPosition);
      if (
        Math.abs(position.x - goalPosition.x) <= goalPosition.threshold &&
        Math.abs(position.y - goalPosition.y) <= goalPosition.threshold
      ) {
        onGoalMet(world, eid);
      }
    }
    return world;
  };
};
