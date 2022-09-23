import { Vector2D } from "./vector.js";
import { ComponentProxyMixin } from "../core/entities.js";

export class Vector2DComponentProxy extends ComponentProxyMixin(Vector2D) {
  constructor(component, parent) {
    super();
    this.defineComponentProperties(component, parent);
  }
}
