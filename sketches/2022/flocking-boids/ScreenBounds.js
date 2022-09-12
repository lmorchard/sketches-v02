import { Position, Velocity } from "../../../lib/positionMotion";
import { defineQuery } from "bitecs";
import { GenericComponentProxy, setEid } from "../../../lib/ecsUtils.js";

export const screenBoundsQuery = defineQuery([Position, Velocity]);

export const screenBoundsSystem = (options = {}) => {
  const position = new GenericComponentProxy(Position);
  const velocity = new GenericComponentProxy(Velocity);

  return (world) => {
    const {
      originX = 0,
      originY = 0,
      marginX = 200,
      marginY = 200,
      originTurnFactor = 7.0,
    } = options;
    const {renderer: { width, height }} = world;
    const hwidth = (width - marginX) / 2;
    const hheight = (height - marginY) / 2;

    for (const eid of screenBoundsQuery(world)) {
      setEid(eid, position, velocity);
      const { x, y } = position;

      if (
        x > originX - hwidth &&
        x < originX + hwidth &&
        y > originY - hheight &&
        y < originY + hheight
      )
        continue;
    
      const originHeading = Math.atan2(originY - y, originX - x);
      velocity.x += originTurnFactor * Math.cos(originHeading);
      velocity.y += originTurnFactor * Math.sin(originHeading);
    }
    return world;
  };
};
