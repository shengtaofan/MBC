export const ready = ['ready', function (cb) {
  const isReady = this.some(e => e.readyState !== null && e.readyState !== 'loading')
  if (isReady) {
    cb()
  } else {
    this.on('DOMContentLoaded', cb)
  }
  return this
}]

export const on = ['on', function (event, cbOrSelector, cbOrCapture, capture) {
  if (typeof cbOrSelector === 'function') {
    this.forEach(e => e.addEventListener(event, cbOrSelector, cbOrCapture))
  } else {
    this.forEach(el => {
      el.addEventListener(
        event,
        e => {
          console.log(this)
          if (e.target.matches(cbOrSelector)) {
            cbOrCapture(e)
          }
        },
        capture
      )
    })
  }
  return this
}]

export const one = ['one', function (event, cbOrSelector, cbOrCapture, capture) {
  this.on(event, cbOrSelector, cbOrCapture, { one: true })
}]

export const off = ['off', function (event, cbOrSelector, cb) {
  if (typeof cbOrSelector === 'function') {
    this.forEach(e => e.removeEventListener(event, cbOrSelector))
  } else {
    this.forEach(el => {
      el.removeEventListener(event, e => {
        if (e.target.matches(cbOrSelector)) {
          cb(e)
        }
      })
    })
  }
  return this
}]

export const removeClass = ['removeClass', function (classNames) {
  this.changeClass('remove', classNames)
  return this
}]

export const addClass = ['addClass', function (classNames) {
  this.changeClass('add', classNames)
  return this
}]

export const toggleClass = ['toggleClass', function (className, force) {
  return this.map(el => {
    el.classList.toggle(className, force)
    return el
  })
}]

export const hasClass = ['hasClass', function (className) {
  return this[0].classList.contains(className)
}]

export const next = ['next', function () {
  return this.map(e => e.nextElementSibling).filter(e => e)
}]

export const nextAll = ['nextAll', function (selector, el) {
  if (selector === undefined) selector = ''
  if (el === undefined) el = $()
  if (this.length) {
    return this.next().nextAll(selector, el.concat(this.next()))
  }
  if (selector) {
    return this.filterEl(el, selector)
  }

  return this.noReapted(el)
}]

export const prev = ['prev', function () {
  return this.map(e => e.previousElementSibling).filter(e => e)
}]

export const prevAll = ['prevAll', function (selector, el) {
  if (selector === undefined) selector = ''
  if (el === undefined) el = $()
  if (this.length) {
    return this.prev().prevAll(selector, el.concat(this.prev()))
  }
  if (selector) {
    return this.filterEl(el, selector)
  }
  return this.noReapted(el)
}]

export const filterEl = ['filterEl', function (el, matchEl) {
  return el.filter((item, pos, self) => $(matchEl).includes(item) && self.indexOf(item) === pos)
}]

export const siblings = ['siblings', function () {
  return this.map(e => e.parentNode.children).filter(e => e !== this)
}]

export const children = ['children', function () {
  return this.flatMap(e => $(e.children))
}]

export const parent = ['parent', function () {
  return this.map(e => e.parentElement).filter(e => {
    return e !== document && e
  })
}]

export const parents = ['parents', function (selector, el) {
  if (selector === undefined) selector = ''
  if (el === undefined) el = $()
  if (this.length) {
    const eachParent = this.parent()
    el = el.concat(eachParent)
    return this.parent().parents(selector, el)
  }
  if (selector) {
    return this.filterEl(el, selector)
  }
  return this.noReapted(el)
}]

export const css = ['css', function (styles, value) {
  if (!styles) return
  const camelProp = styles.replace(/(-[a-z])/, g => g.replace('-', '').toUpperCase())
  this.forEach(e => (e.style[camelProp] = value))
  return this
}]

export const txt = ['txt', function (text) {
  if (text !== undefined) {
    return this.map((e, i) => {
      e.textContent = typeof text === 'function' ? text(e.textContent, i) : text
      return e
    })
  }
  return this.map(e => e.textContent).join('')
}]

export const val = ['val', function (value) {
  if (value !== undefined) {
    return this.map((e, i) => {
      e.value = typeof value === 'function' ? value(e.value, i) : value
      return e
    })
  }
  if (this.length) return this[0].value
}]

export const attr = ['attr', function (attribute, value) {
  if (!attribute) return
  if (value !== undefined) {
    return this.map(e => {
      e.setAttribute(attribute, value)
      return e
    })
  }
  if (this.length) {
    return this[0].getAttribute(attribute)
  }
}]

export const prop = ['prop', function (property, value) {
  if (value !== undefined) {
    return this.map(e => {
      e[property] = value
      return e
    })
  }
  if (this.length) {
    return this[0][property]
  }
}]

export const each = ['each', function (cb) {
  this.forEach(cb)
  return this
}]
export const height = ['height', function (value) {
  let val = 0
  this.forEach(el => {
    if (el === window) {
      val = innerHeight
    }
    if (el.nodeType === 9) {
      val = el.clientHeight
    }
    return el
  })
  if (value === undefined) {
    return val
  }
}]

export const width = ['width', function (value) {
  let val = 0
  this.forEach(el => {
    if (el === window) {
      val = innerWidth
    }
    if (el.nodeType === 9) {
      val = el.clientWidth
    }
    return el
  })
  if (value === undefined) {
    return val
  }
}]

export const bounding = ['bounding', function (prop) {
  if (prop) {
    return this[0].getBoundingClientRect()[prop]
  }
  return this[0].getBoundingClientRect()
}]

export const scrollTop = ['scrollTop',
  function (value) {
    let win
    const _this = this[0]
    if (_this.window === _this) {
      win = _this
    }
    if (_this.nodeType === 9) {
      win = _this.defaultView
    }

    if (value === undefined) {
      return win ? win.pageYOffset : _this.scrollTop
    }

    if (win) {
      win.scrollTo(win.pageXOffset, value)
    } else {
      _this.scrollTop = value
    }
    return this
  }
]
export const scrollLeft = ['scrollLeft',
  function (value) {
    let win
    const _this = this[0]
    if (_this.window === el) {
      win = el
    }
    if (_this.nodeType === 9) {
      win = _this.defaultView
    }

    if (value === undefined) {
      return win ? win.pageXOffset : _this.scrollLeft
    }

    if (win) {
      win.scrollTo(value, win.pageYOffset)
    } else {
      _this.scrollLeft = value
    }
    return this
  }
]
export const dropdown = ['dropdown',
  function (action) {
    this.forEach(el => {
      Dropdown.getOrCreateInstance(el)[action]()
    })
    return this
  }
]
export const collapse = ['collapse',
  function (action) {
    this.forEach(el => {
      Collapse.getOrCreateInstance(el)[action]()
    })
    return this
  }
]
$.bootstrap = function (...plugins) {
  plugins.forEach(plugin => {
    $.ElementCollection.prototype[plugin.NAME] = function (action) {
      this.forEach(el => {
        plugin.getOrCreateInstance(el)[action]()
      })
      return this
    }
  })
}
// removeAttr (attribute) {
//   if (!attribute) return
//   this[0].removeAttribute(attribute)
//   return this[0]
// }
// removeProp (property) {
//   this[0].removeAttribute(property)
//   return this[0]
// }

export function $ (param) {
  if (!param) return new $.ElementCollection() // undefined
  if (typeof param === 'string' || param instanceof String) {
    return new $.ElementCollection(...document.querySelectorAll(param))
  }
  if (
    [Window, Document,
      HTMLElement].some(prototype => param instanceof prototype)
  ) {
    return new $.ElementCollection(param) // windows document
  }

  if (Array.isArray(param) || (typeof param === 'object')) {
    // array-like
    return new $.ElementCollection(...param)
  }
}

$.use = function (...methods) {
  $.ElementCollection = class extends Array {
    filterEl (el, matchEl) {
      return el.filter((item, pos, self) => $(matchEl).includes(item) && self.indexOf(item) === pos)
    }

    noReapted (el) {
      return el.filter((item, pos, self) => self.indexOf(item) === pos)
    }

    changeClass (action, className) {
      const isFunc = typeof className === 'function'
      this.forEach((e, i) => {
        const result = isFunc ? className(e, i) : className
        if (typeof result === 'string' || result instanceof String) {
          e.classList[action](result)
        }
        if (Array.isArray(result)) {
          e.classList[action](...result)
        }
      })
    }
  }

  methods.forEach(([method, func]) => {
    $.ElementCollection.prototype[method] = func
  })
}

$.each = function (iterator, cb) {
  let index = 0
  for (const [key, val] of Object.entries(iterator)) {
    cb(val, key, index, iterator)
    index++
  }
}

$.map = function (iterator, cb) {
  let index = -1
  const cache = []
  for (const [key, val] of Object.entries(iterator)) {
    index++
    cache.push(cb(val, key, index, iterator))
  }
  return cache
}
