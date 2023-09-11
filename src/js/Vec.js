export default class Vec {
  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  addVectors (v1, v2) {
    this.x = v1.x + v2.x
    this.y = v1.y + v2.y
    return this
  }

  // sum (vec) {
  //   return new Vec(this.x + vec.x, this.y + vec.y)
  // }

  sub (vec) {
    return new Vec(this.x - vec.x, this.y - vec.y)
  }

  mul (num) {
    return new Vec(this.x * num, this.y * num)
  }

  set (x, y) {
    this.x = x
    this.y = y
    return this
  }

  normalize () {
    const len = this.distance(new Vec(0, 0))
    return new Vec(this.x / len, this.y / len)
  }

  distance (vec) {
    return Math.sqrt(Math.pow(this.x - vec.x, 2) + Math.pow(this.y - vec.y, 2))
  }

  clone () {
    return new Vec(this.x, this.y)
  }
}
