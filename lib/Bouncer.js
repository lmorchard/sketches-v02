import { defineQuery, defineComponent, hasComponent, Types } from "bitecs";
import { Position, Velocity } from "./PositionMotion.js";
import { GenericComponentProxy, setEid } from "./core/entities.js";
import { Vector2D, Point2D } from "./utils/vector.js";
import { Vector2DComponentProxy } from "./utils/VectorComponentProxy.js";
import { Collidable, CollisionEntity, collisionService } from "./Collisions.js";

export const Bounce = defineComponent({
  mass: Types.f32,
  restitution: Types.f32,
  immobile: Types.f32,
});

export class BounceEntity extends CollisionEntity {
  static components = {
    ...CollisionEntity.components,
    Bounce,
    Velocity,
  };

  static componentProxyClasses = {
    ...CollisionEntity.componentProxyClasses,
    Velocity: Vector2DComponentProxy,
  };
}

export const bounceSystem = (options = {}) => {
  const entity = new BounceEntity();
  const otherEntity = new BounceEntity();

  const main = (world) => {
    collisionService.using(world);

    for (const [
      eid,
      otherEid,
      collisionResult,
    ] of collisionService.allPairs()) {
      entity.using(eid, world);
      otherEntity.using(otherEid, world);

      // Skip this pair unless they both have the Bounce component.
      if (!(entity.Bounce.hasComponent() && otherEntity.Bounce.hasComponent()))
        continue;

      if (!collisionService.stillHasPair(eid, otherEid)) {
        // Only resolve collision physics if they're newly in collision
        resolveCollision(options, collisionResult);
      }

      // Ensure "sticky" objects are forced apart.
      applySeparationForce(options, collisionResult);
    }

    return world;
  };

  const vnormal = new Vector2D();
  const u1 = new Vector2D();
  const u2 = new Vector2D();
  const v1 = new Vector2D();
  const v2 = new Vector2D();

  function resolveCollision(options = {}, collisionResult) {
    const { separation, collisionNormal, center, otherCenter, edge, otherEdge } =
      collisionResult;
    const { Position: position, Velocity: velocity, Bounce: bounce } = entity;
    const {
      Position: otherPosition,
      Velocity: otherVelocity,
      Bounce: otherBounce,
    } = otherEntity;

    // Stash the original collision angle
    let angle;
    if (collisionNormal) {
      angle = vnormal.copy(collisionNormal).angle();
    } else {
      angle = 0 - position.angleTo(otherPosition);
    }

    // Rotate to zero angle to treat this as a 1D collision.
    u1.copy(velocity).rotate(angle);
    u2.copy(otherVelocity).rotate(angle);

    // https://en.wikipedia.org/wiki/Elastic_collision#One-dimensional_Newtonian
    const m1 = bounce.mass || 1;
    const m2 = otherBounce.mass || 1;
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

  function applySeparationForce(
    { separationFactor = 5.0 } = {},
    collisionResult
  ) {
    //console.log(collisionResult);
    const { Position: position, Velocity: velocity, Bounce: bounce } = entity;
    const {
      Position: otherPosition,
      Velocity: otherVelocity,
      Bounce: otherBounce,
    } = otherEntity;

    const edge = new Point2D().copy(collisionResult.edge);
    const otherEdge = new Point2D().copy(collisionResult.otherEdge);

    separationVector.copy(position).subtract(otherPosition);
    const separationDistance = separationVector.magnitude();
    const separationGoal =
      position.distanceTo(edge) + otherPosition.distanceTo(otherEdge);

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
