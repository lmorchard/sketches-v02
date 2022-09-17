export class Vector2D {
  constructor(x, y) {
    if (typeof x !== "undefined" && typeof y !== "undefined") {
      this.set(x, y);
    }
  }

  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  copy(other) {
    this.x = other.x;
    this.y = other.y;
    return this;
  }

  clone(other) {
    return this.copy(other);
  }

  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }

  length() {
    return Math.sqrt(this.lengthSquared());
  }

  distanceToSquared(other) {
    return Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2);
  }

  distanceTo(other) {
    return Math.sqrt(this.distanceToSquared(other));
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  angleTo(other) {
    return Math.atan2(other.y - this.y, other.x - this.x);
  }

  rotate(angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    this.x = this.x * cos - this.y * sin;
    this.y = this.x * sin + this.y * cos;
    return this;
  }

  add(...others) {
    others.forEach((other) => {
      if (other) {
        this.x += other.x;
        this.y += other.y;
      }
    });
    return this;
  }

  subtract(...others) {
    others.forEach((other) => {
      if (other) {
        this.x -= other.x;
        this.y -= other.y;
      }
    });
    return this;
  }

  multiplyScalar(factor) {
    this.x *= factor;
    this.y *= factor;
    return this;
  }

  scaleBy(factor) {
    return this.multiplyScalar(factor);
  }

  divideScalar(factor) {
    this.x /= factor;
    this.y /= factor;
    return this;
  }

  normalize() {
    return this.divideScalar(this.length());
  }

  unit() {
    return this.normalize();
  }

  truncate(max) {
    if (this.length() > max) {
      this.normalize().multiplyScalar(max);
    }
    return this;
  }
}
