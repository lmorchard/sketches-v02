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

export class Line2D {
  constructor(p0, p1) {
    this.p0 = new Vector2D();
    this.p1 = new Vector2D();
    if (typeof p0 !== "undefined" && typeof p1 !== "undefined") {
      this.set(p0, p1);
    }
  }

  set(p0, p1) {
    this.p0.copy(p0);
    this.p1.copy(p1);
  }

  setCoords(p0x, p0y, p1x, p1y) {
    this.p0.set(p0x, p0y);
    this.p1.copy(p1x, p1y);
  }

  lengthSquared() {
    return this.p0.distanceToSquared(this.p1);
  }

  length() {
    return this.p0.distanceTo(this.p1);
  }

  intersects(other) {
    let s1_x, s1_y, s2_x, s2_y;
    s1_x = this.p1.x - this.p0.x;
    s1_y = this.p1.y - this.p0.y;
    s2_x = other.p1.x - other.p0.x;
    s2_y = other.p1.y - other.p0.y;

    let s, t;
    s =
      (-s1_y * (this.p0.x - other.p0.x) + s1_x * (this.p0.y - other.p0.y)) /
      (-s2_x * s1_y + s1_x * s2_y);
    t =
      (s2_x * (this.p0.y - other.p0.y) - s2_y * (this.p0.x - other.p0.x)) /
      (-s2_x * s1_y + s1_x * s2_y);

    return s >= 0 && s <= 1 && t >= 0 && t <= 1;
  }

  /*
  function findLineIntersectionPoint(a0, a1, b0, b1, c0) {
    // http://paulbourke.net/geometry/pointlineplane/#i2l
  
    const { x: x1, y: y1 } = a0;
    const { x: x2, y: y2 } = a1;
    const { x: x3, y: y3 } = b0;
    const { x: x4, y: y4 } = b1;
  
    const ud = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    const uan = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    const ubn = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
  
    // coincident
    if (uan === 0 && ubn === 0 && ud === 0) return false;
  
    // parallel
    if (ud === 0) return false;
  
    const ua = uan / ud;
    const ub = ubn / ud;
  
    // segments do not intersect
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return false;
  
    c0.set(x1 + ua * (x2 - x1), y1 + ua * (y2 - y1));
  
    return true;
  }
  
const findClosestPointsBetweenLines = (() => {
  const v = new Vector2D();

  return (a0, a1, b0, b1, rvA, rvB) => {
    // https://wickedengine.net/2020/04/26/capsule-collision-detection/
    const d0 = v.copy(b0).subtract(a0).lengthSquared();
    const d1 = v.copy(b1).subtract(a0).lengthSquared();
    const d2 = v.copy(b0).subtract(a1).lengthSquared();
    const d3 = v.copy(b1).subtract(a1).lengthSquared();

    const bestA = d2 < d0 || d2 < d1 || d3 < d0 || d3 < d1 ? a1 : a0;

    findClosestPointOnLineSegment(bestA, b0, b1, rvB);
    findClosestPointOnLineSegment(rvB, a0, a1, rvA);
  };
})();

const findClosestPointOnLineSegment = (() => {
  const fromAtoB = new Vector2D();
  const fromAtoP = new Vector2D();

  return (p, a, b, rv) => {
    // https://jsfiddle.net/soulwire/UA6H5/
    fromAtoB.set(b.x - a.x, b.y - a.y);
    fromAtoP.set(p.x - a.x, p.y - a.y);

    const len = fromAtoB.lengthSquared();
    const dot = fromAtoP.dot(fromAtoB);
    const t = Math.min(1, Math.max(0, dot / len));

    return rv.set(a.x + fromAtoB.x * t, a.y + fromAtoB.y * t);
  };
})();

  */
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
