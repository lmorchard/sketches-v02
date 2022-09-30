import { defineQuery, defineComponent, hasComponent, Types } from "bitecs";
import { Position, Velocity } from "./PositionMotion.js";
import { GenericComponentProxy, setEid } from "./core/entities.js";
import { Vector2D } from "./utils/vector.js";
import { Vector2DComponentProxy } from "./utils/VectorComponentProxy.js";
import { Collidable, collisionService } from "./Collisions.js";

export const Bounce = defineComponent({
  mass: Types.f32,
  restitution: Types.f32,
  immobile: Types.f32,
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

  const main = (world) => {
    collisionService.using(world);

    for (const [eid, otherEid, metadata] of collisionService.allPairs()) {
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

      if (!collisionService.stillHasPair(eid, otherEid)) {
        // Only resolve collision physics if they're newly in collision
        resolveCollision(options, metadata);
      }

      // Ensure "sticky" objects are forced apart.
      applySeparationForce(options, metadata);
    }

    return world;
  };

  const vnormal = new Vector2D();
  const u1 = new Vector2D();
  const u2 = new Vector2D();
  const v1 = new Vector2D();
  const v2 = new Vector2D();

  function resolveCollision(options = {}, metadata) {
    const { separation, normal, center, otherCenter, edge, otherEdge } =
      metadata;

    // Stash the original collision angle
    let angle;
    if (normal) {
      angle = vnormal.copy(normal).angle();
    } else {
      angle = 0 - position.angleTo(otherPosition);
    }

    // Rotate to zero angle to treat this as a 1D collision.
    u1.copy(velocity).rotate(angle);
    u2.copy(otherVelocity).rotate(angle);

    // https://en.wikipedia.org/wiki/Elastic_collision#One-dimensional_Newtonian
    const m1 = bounce.mass;
    const m2 = otherBounce.mass;
    const mT = m1 + m2;
    const mD1 = m1 - m2;
    const mD2 = m2 - m1;
    v1.set((mD1 / mT) * u1.x + ((2 * m2) / mT) * u2.x, u1.y);
    v2.set(((2 * m1) / mT) * u1.x + (mD2 / mT) * u2.x, u2.y);

    // Hackily apply restitution
    const restitution = bounce.restitution || 1.0;
    const otherRestitution = otherBounce.restitution || 1.0;
    const mutualRestitution = restitution * otherRestitution;
    v1.scaleBy(mutualRestitution);
    v2.scaleBy(mutualRestitution);

    // Rotate back to collision angle to get 2D velocities
    v1.rotate(-angle);
    v2.rotate(-angle);

    // Finally, apply the new velocities
    if (!bounce.immobile) velocity.copy(v1);
    if (!otherBounce.immobile) otherVelocity.copy(v2);
  }

  const separationVector = new Vector2D();
  const otherSeparationVector = new Vector2D();

  function applySeparationForce({ separationFactor = 5.0 } = {}, metadata) {
    separationVector.copy(position).subtract(otherPosition);
    const separationDistance = separationVector.magnitude();
    const separationGoal = collidable.radius + otherCollidable.radius;

    // If they're already separated, don't do anything.
    if (separationDistance >= separationGoal) return;

    // Try to apply a separation force between the objects, but apply it in
    // inverse proportion to respective mass.
    separationVector.normalize();
    otherSeparationVector.copy(separationVector);

    const totalMass = bounce.mass + otherBounce.mass;
    const totalForce = separationFactor * (separationGoal - separationDistance);

    velocity.add(
      separationVector.scaleBy(
        totalForce * ((totalMass - bounce.mass) / totalMass)
      )
    );

    otherVelocity.add(
      otherSeparationVector.scaleBy(
        -totalForce * ((totalMass - otherBounce.mass) / totalMass)
      )
    );
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
