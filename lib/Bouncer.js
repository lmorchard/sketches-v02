import { defineQuery, defineComponent, hasComponent, Types } from "bitecs";
import { Position, Velocity } from "./positionMotion.js";
import { GenericComponentProxy, setEid } from "./core/entities.js";
import { Vector2D } from "./utils/vector.js";
import { Vector2DComponentProxy } from "./utils/VectorComponentProxy.js";
import { Collidable, collisionService } from "./Collisions.js";

export const Bounce = defineComponent({
  mass: Types.f32,
});

export const bounceSystem = (options = {}) => {
  const bounce = new GenericComponentProxy(Bounce);
  const collidable = new GenericComponentProxy(Collidable);
  const position = new Vector2DComponentProxy(Position);
  const velocity = new Vector2DComponentProxy(Velocity);

  const otherBounce = new GenericComponentProxy(Bounce);
  const otherCollidable = new GenericComponentProxy(Collidable);
  const otherPosition = new Vector2DComponentProxy(Position);
  const otherVelocity = new Vector2DComponentProxy(Velocity);

  const separationVector = new Vector2D();

  const main = (world) => {
    const deltaSec = world.time.deltaSec;

    collisionService.using(world);

    for (const [eid, otherEid] of collisionService.allPairs()) {
      // Skip processing this pair unless they're newly in collision.
      if (collisionService.hadPair(eid, otherEid)) continue;

      // Skip this pair unless they both have the Bounce component.
      if (
        !(
          hasComponent(world, Bounce, eid) &&
          hasComponent(world, Bounce, otherEid)
        )
      )
        continue;

      setEid(eid, bounce, collidable, position, velocity);
      setEid(
        otherEid,
        otherBounce,
        otherCollidable,
        otherPosition,
        otherVelocity
      );

      resolveCollision();
    }

    return world;
  };

  const u1 = new Vector2D();
  const u2 = new Vector2D();
  const v1 = new Vector2D();
  const v2 = new Vector2D();

  function resolveCollision() {
    // Grab angle between the two colliding particles
    const angle = 0 - position.angleTo(otherPosition);

    // Store mass in var for better readability in collision equation
    const m1 = bounce.mass;
    const m2 = otherBounce.mass;

    // Velocity before equation
    u1.copy(velocity).rotate(angle);
    u2.copy(otherVelocity).rotate(angle);

    // https://en.wikipedia.org/wiki/Elastic_collision#One-dimensional_Newtonian
    v1.set(
      ((m1 - m2) / (m1 + m2)) * u1.x + ((2 * m2) / (m1 + m2)) * u2.x,
      u1.y
    );
    v2.set(
      ((2 * m1) / (m1 + m2)) * u1.x + ((m2 - m1) / (m1 + m2)) * u2.x,
      u2.y
    );

    v1.rotate(-angle);
    v2.rotate(-angle);

    // Swap particle velocities for realistic bounce effect
    velocity.copy(v1);
    otherVelocity.copy(v2);
  }

  return main;
};

export const bounceDebugRenderer = (options = {}) => {
  return (world) => {
    if (!world || !world.debug) return world;
    const g = world.debugGraphics;

    return world;
  };
};
