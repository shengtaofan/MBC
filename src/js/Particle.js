import Vec from './Vec.js'
export class Ease {
  constructor (dur, delay = 0) {
    this.time = 0
    this.dur = dur
    this.delay = delay
  }

  reset (dur, delay = 0) {
    this.time = 0
    this.delay = delay
    if (dur) {
      this.dur = dur
    }
  }

  update (tick) {
    tick -= this.delay
    if (tick <= 0) return 0
    const x = tick / this.dur
    // const c1 = 1.70158
    // const c3 = c1 + 1
    // this.time = x >= 1 ? 1 : c3 * x * x ** 3 - c1 * x ** 3

    this.time = x >= 1
      ? 1
      : x < 0.5
        ? (1 - Math.sqrt(1 - (2 * x) ** 2)) / 2
        : (Math.sqrt(1 - (-2 * x + 2) ** 2) + 1) / 2
  }
}
export default class Particle {
  static position = new Vec()
  // constructor (init, final) {
  //   this.init = init
  //   this.final = final
  //   this.current = this.init.clone()
  // }

  constructor (init, final, ease) {
    this.ease = ease
    this.init = init
    // const midDistance = init.distance(final) / 2
    this.center = new Vec().addVectors(init, final).mul(0.5) // this.circleCenter(init, final, midDistance)
    this.initTheta = this.theta(init)
    const finalTheta = this.theta(final)
    this.delTheta = this.initTheta - finalTheta
    if (Math.abs(this.delTheta) > Math.PI) {
      this.delTheta += Math.PI * 2
    }
    this.delTheta += ((Math.random() * 2 | 0) ? 0 : -2) * Math.PI
    this.circleRadius = this.center.distance(init)
  }

  theta (position) {
    const normalize = position.sub(this.center).normalize()
    return Math.atan2(normalize.y, normalize.x)
  }

  // circleCenter ({ x: x1, y: y1 }, { x: x2, y: y2 }, r) {
  //   const c1 = (x2 ** 2 - x1 ** 2 + y2 ** 2 - y1 ** 2) / (2 * (x2 - x1))
  //   const c2 = (y2 - y1) / (x2 - x1)
  //   const A = c2 ** 2 + 1
  //   const B = 2 * x1 * c2 - 2 * c1 * c2 - 2 * y1
  //   const C = x1 ** 2 - 2 * x1 * c1 + c1 ** 2 - r ** 2
  //   const y = (-B + Math.sqrt(B ** 2 - 4 * A * C)) / (2 * A)
  //   const x = c1 - c2 * y
  //   return new Vec(x, y)
  // }

  update () {
    this.currentTheta = this.initTheta - this.delTheta * this.ease.time
    Particle.position
      .set(
        Math.cos(this.currentTheta) * this.circleRadius,
        Math.sin(this.currentTheta) * this.circleRadius
      )
      .addVectors(this.center, Particle.position)
    return this
  }

  // update ({ time }) {
  //   this.current.set(this.init.sum(this.final.sub(this.init).mul(time)))
  //   return this
  // }
}
export class Circle extends Particle {
  static r = 4.5
  draw (c) {
    const { x, y } = Particle.position
    // c.moveTo(x, y)
    c.arc(x, y, Circle.r, 0, 2 * Math.PI)
    return this
  }
}

export class Rectangle extends Particle {
  draw (c) {
    const { x, y } = Particle.position
    c.rect(x, y, this.size, this.size)
    return this
  }
}
Rectangle.prototype.size = 5.5 * 2
