import { Vector2D } from "./vector.js";
import { defineComponentProperties } from "../core/entities.js";

export class Vector2DComponentProxy extends Vector2D {
  constructor(component, parent) {
    super();
    this.parent = parent || this;
    defineComponentProperties(this.parent, this, component);
  }
  using(eid, world) {
    this.parent.eid = eid;
    this.parent.world = world;
    return this;
  }
}
