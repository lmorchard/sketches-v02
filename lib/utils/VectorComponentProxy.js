import { Vector2D } from "./vector.js";
import { defineComponentProperty } from "../core/entities.js";

export class Vector2DComponentProxy extends Vector2D {
  constructor(component, eid, nameX = "x", nameY = "y") {
    super();
    defineComponentProperty(this, this, component, nameX, "x");
    defineComponentProperty(this, this, component, nameY, "y");
    this.using(eid);
  }
  using(eid) {
    this.eid = eid;
    return this;
  }
}
