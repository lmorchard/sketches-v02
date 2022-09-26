export class Point2D {
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

  distanceToSquared(other) {
    return Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2);
  }

  distanceTo(other) {
    return Math.sqrt(this.distanceToSquared(other));
  }

  rotate(angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const xnew = this.x * cos - this.y * sin;
    const ynew = this.x * sin + this.y * cos;

    this.x = xnew;
    this.y = ynew;

    return this;
  }
}

export class Vector2D extends Point2D {
  dot(other) {
    return this.x * other.x + this.y * other.y;
  }

  cross(other) {
    return this.x * other.y - this.y * other.x;
  }

  lengthSquared() {
    return this.dot(this);
  }

  length() {
    return Math.sqrt(this.lengthSquared());
  }

  magnitude() {
    return this.length();
  }

  angle() {
    return Math.atan2(this.y, this.x);
  }

  angleTo(other) {
    return Math.atan2(other.y - this.y, other.x - this.x);
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
