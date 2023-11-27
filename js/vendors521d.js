(self["webpackChunk"] = self["webpackChunk"] || []).push([[216],{

/***/ 3390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $),
/* harmony export */   Cb: () => (/* binding */ height),
/* harmony export */   IV: () => (/* binding */ removeClass),
/* harmony export */   Lj: () => (/* binding */ attr),
/* harmony export */   Lr: () => (/* binding */ bounding),
/* harmony export */   P0: () => (/* binding */ val),
/* harmony export */   S6: () => (/* binding */ each),
/* harmony export */   SM: () => (/* binding */ scrollTop),
/* harmony export */   bf: () => (/* binding */ width),
/* harmony export */   cn: () => (/* binding */ addClass),
/* harmony export */   eG: () => (/* binding */ nextAll),
/* harmony export */   iv: () => (/* binding */ css),
/* harmony export */   lp: () => (/* binding */ next),
/* harmony export */   mp: () => (/* binding */ prev),
/* harmony export */   og: () => (/* binding */ toggleClass),
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   pI: () => (/* binding */ children),
/* harmony export */   pv: () => (/* binding */ hasClass),
/* harmony export */   qm: () => (/* binding */ parent),
/* harmony export */   sE: () => (/* binding */ find),
/* harmony export */   u7: () => (/* binding */ txt),
/* harmony export */   vg: () => (/* binding */ prop)
/* harmony export */ });
/* unused harmony exports ready, one, off, trigger, prevAll, siblings, nth, parents, scrollLeft, dropdown, collapse, remove */
const ready = ['ready', function (cb) {
  const isReady = this.some(e => e.readyState !== null && e.readyState !== 'loading');
  if (isReady) {
    cb();
  } else {
    this.one('DOMContentLoaded', cb);
  }
  return this;
}];
const on = ['on', function (event, cbOrSelector, cbOrCapture, capture) {
  const events = event.split(' ');
  events.forEach(evt => {
    this.forEach(el => {
      if (typeof cbOrSelector === 'function') {
        el.addEventListener(evt, cbOrSelector, cbOrCapture);
      } else {
        el.addEventListener(evt, e => {
          if (e.target.matches(cbOrSelector)) {
            cbOrCapture(e);
          }
        }, capture);
      }
    });
  });
  return this;
}];
const one = ['one', function (event, cbOrSelector, cbOrCapture, capture) {
  this.on(event, cbOrSelector, {
    once: true
  });
  return this;
}];
const off = ['off', function (event, cbOrSelector, cb) {
  if (typeof cbOrSelector === 'function') {
    this.forEach(e => e.removeEventListener(event, cbOrSelector));
  } else {
    this.forEach(el => {
      el.removeEventListener(event, e => {
        if (e.target.matches(cbOrSelector)) {
          cb(e);
        }
      });
    });
  }
  return this;
}];
const trigger = ['trigger', function (evt) {
  this.forEach(e => {
    if (typeof evt === 'string' && typeof e[evt] === 'function') {
      e[evt]();
      return;
    }
    e.dispatchEvent(new Event(evt));
  });
  return this;
}];
const removeClass = ['removeClass', function (classNames) {
  this.changeClass('remove', classNames);
  return this;
}];
const addClass = ['addClass', function (classNames) {
  this.changeClass('add', classNames);
  return this;
}];
const toggleClass = ['toggleClass', function (className, force) {
  return this.map(el => {
    el.classList.toggle(className, force);
    return el;
  });
}];
const hasClass = ['hasClass', function (className) {
  return this[0].classList.contains(className);
}];
const next = ['next', function () {
  return this.map(e => e.nextElementSibling).filter(e => e);
}];
const nextAll = ['nextAll', function (selector, el) {
  if (selector === undefined) selector = '';
  if (el === undefined) el = $();
  if (this.length) {
    return this.next().nextAll(selector, el.concat(this.next()));
  }
  if (selector) {
    return this.filterEl(el, selector);
  }
  return this.noReapted(el);
}];
const prev = ['prev', function () {
  return this.map(e => e.previousElementSibling).filter(e => e);
}];
const prevAll = ['prevAll', function (selector, el) {
  if (selector === undefined) selector = '';
  if (el === undefined) el = $();
  if (this.length) {
    return this.prev().prevAll(selector, el.concat(this.prev()));
  }
  if (selector) {
    return this.filterEl(el, selector);
  }
  return this.noReapted(el);
}];
const siblings = ['siblings', function () {
  return this.flatMap(e => $(e).parent().children().filter(child => e !== child));
}];
const children = ['children', function (selector) {
  return this.flatMap(e => {
    const children = $(e.children);
    if (selector) {
      return children.filterEl(children, selector);
    }
    return children;
  });
}];
const nth = ['nth', function (n) {
  if (n > -1) {
    return $(this[n]);
  }
  if (n < 0) {
    return $(this[this.length - n]);
  }
  return this.map(e => this.parent().children().indexOf(e));
}];
const find = ['find', function (selector, el) {
  if (selector === undefined) selector = '';
  if (el === undefined) el = $();
  if (this.length) {
    const eachChildren = this.children();
    this.merge(el, eachChildren);
    return this.children().find(selector, el);
  }
  if (selector) {
    return this.filterEl(el, selector);
  }
  return this.noReapted(el);
}];
const parent = ['parent', function () {
  return this.map(e => e.parentElement).filter(e => {
    return e !== document && e;
  });
}];
const parents = ['parents', function (selector, el) {
  if (selector === undefined) selector = '';
  if (el === undefined) el = $();
  if (this.length) {
    const eachParent = this.parent();
    this.merge(el, eachParent);
    return this.parent().parents(selector, el);
  }
  if (selector) {
    return this.filterEl(el, selector);
  }
  return this.noReapted(el);
}];
const css = ['css', function (styles, value) {
  if (!styles) return;
  const camelProp = styles.replace(/(-[a-z])/, g => g.replace('-', '').toUpperCase());
  this.forEach(e => e.style[camelProp] = value);
  return this;
}];
const txt = ['txt', function (text) {
  if (text !== undefined) {
    return this.map((e, i) => {
      e.textContent = typeof text === 'function' ? text(e.textContent, i) : text;
      return e;
    });
  }
  return this.map(e => e.textContent).join('');
}];
const val = ['val', function (value) {
  if (value !== undefined) {
    return this.map((e, i) => {
      e.value = typeof value === 'function' ? value(e.value, i) : value;
      return e;
    });
  }
  if (this.length) return this[0].value;
}];
const attr = ['attr', function (attribute, value) {
  if (!attribute) return;
  if (value !== undefined) {
    return this.map(e => {
      e.setAttribute(attribute, value);
      return e;
    });
  }
  if (this.length) {
    return this[0].getAttribute(attribute);
  }
}];
const prop = ['prop', function (property, value) {
  if (value !== undefined) {
    return this.map(e => {
      e[property] = value;
      return e;
    });
  }
  if (this.length) {
    return this[0][property];
  }
}];
const each = ['each', function (cb) {
  this.forEach(cb);
  return this;
}];
const height = ['height', function (value) {
  let val = 0;
  this.forEach(el => {
    if (el === window) {
      val = innerHeight;
    }
    if ([1, 9].includes(el.nodeType)) {
      val = el.clientHeight;
    }
    return el;
  });
  if (value === undefined) {
    return val;
  }
}];
const width = ['width', function (value) {
  let val = 0;
  this.forEach(el => {
    if (el === window) {
      val = innerWidth;
    }
    if ([1, 9].includes(el.nodeType)) {
      val = el.clientWidth;
    }
    return el;
  });
  if (value === undefined) {
    return val;
  }
}];
const bounding = ['bounding', function (prop) {
  const bound = this[0].getBoundingClientRect();
  if (prop) {
    return bound[prop];
  }
  return bound;
}];
const scrollTop = ['scrollTop', function (value) {
  let win;
  const _this = this[0];
  if (_this.window === _this) {
    win = _this;
  }
  if (_this.nodeType === 9) {
    win = _this.defaultView;
  }
  if (value === undefined) {
    return win ? win.pageYOffset : _this.scrollTop;
  }
  if (win) {
    win.scrollTo(win.pageXOffset, value);
  } else {
    _this.scrollTop = value;
  }
  return this;
}];
const scrollLeft = ['scrollLeft', function (value) {
  let win;
  const _this = this[0];
  if (_this.window === el) {
    win = el;
  }
  if (_this.nodeType === 9) {
    win = _this.defaultView;
  }
  if (value === undefined) {
    return win ? win.pageXOffset : _this.scrollLeft;
  }
  if (win) {
    win.scrollTo(value, win.pageYOffset);
  } else {
    _this.scrollLeft = value;
  }
  return this;
}];
const dropdown = ['dropdown', function (action) {
  this.forEach(el => {
    Dropdown.getOrCreateInstance(el)[action]();
  });
  return this;
}];
const collapse = ['collapse', function (action) {
  this.forEach(el => {
    Collapse.getOrCreateInstance(el)[action]();
  });
  return this;
}];
const remove = ['remove', function () {
  this.forEach(el => {
    el.remove();
  });
  return this;
}];
$.bootstrap = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }
  plugins.forEach(plugin => {
    this.bootstrap[plugin.name] = plugin;
    $.ElementCollection.prototype[plugin.NAME] = function (action) {
      this.forEach(el => {
        plugin.getOrCreateInstance(el)[action]();
      });
      return this;
    };
  });
};
// removeAttr (attribute) {
//   if (!attribute) return
//   this[0].removeAttribute(attribute)
//   return this[0]
// }
// removeProp (property) {
//   this[0].removeAttribute(property)
//   return this[0]
// }

function $(param) {
  if (!param) return new $.ElementCollection(); // undefined
  if (typeof param === 'string' || param instanceof String) {
    return new $.ElementCollection(...document.querySelectorAll(param));
  }
  if ([Window, Document, HTMLElement].some(prototype => param instanceof prototype)) {
    return new $.ElementCollection(param); // windows document
  }

  if (Array.isArray(param) || typeof param === 'object') {
    // array-like
    return new $.ElementCollection(...param);
  }
}
$.use = function () {
  $.ElementCollection = class extends Array {
    filterEl(el, matchEl) {
      return el.filter((item, pos, self) => $(matchEl).includes(item) && self.indexOf(item) === pos);
    }
    noReapted(el) {
      return el.filter((item, pos, self) => self.indexOf(item) === pos);
    }
    merge(arr1, arr2) {
      Array.prototype.push.apply(arr1, arr2);
    }
    changeClass(action, className) {
      const isFunc = typeof className === 'function';
      this.forEach((e, i) => {
        const result = isFunc ? className(e, i) : className;
        if (typeof result === 'string' || result instanceof String) {
          e.classList[action](result);
        }
        if (Array.isArray(result)) {
          e.classList[action](...result);
        }
      });
    }
  };
  for (var _len2 = arguments.length, methods = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    methods[_key2] = arguments[_key2];
  }
  methods.forEach(_ref => {
    let [method, func] = _ref;
    $.ElementCollection.prototype[method] = func;
  });
};

// $.each = function (iterator, cb) {
//   let index = 0
//   for (const [key, val] of Object.entries(iterator)) {
//     cb(val, key, index, iterator)
//     index++
//   }
// }

// $.map = function (iterator, cb) {
//   let index = -1
//   const cache = []
//   for (const [key, val] of Object.entries(iterator)) {
//     index++
//     cache.push(cb(val, key, index, iterator))
//   }
//   return cache
// }

// $.get = async function ({ url, data = {}, success = () => {}, dataType }) {
//   const queryStr = Object.entries(data).map(([key, value]) => key + '=' + value).join('&')
//   let res = await fetch(url + '?' + queryStr, {
//     method: 'GET',
//     headers: {
//       'Content-Type': dataType
//     }
//   })
//   res = await res.json()
//   success(res)
// }

/***/ }),

/***/ 8234:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _$_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3390);
// import '../demo.pug'


_$_js__WEBPACK_IMPORTED_MODULE_0__.$.use(_$_js__WEBPACK_IMPORTED_MODULE_0__.on, _$_js__WEBPACK_IMPORTED_MODULE_0__/* .parent */ .qm, _$_js__WEBPACK_IMPORTED_MODULE_0__/* .next */ .lp, _$_js__WEBPACK_IMPORTED_MODULE_0__/* .nextAll */ .eG, _$_js__WEBPACK_IMPORTED_MODULE_0__/* .each */ .S6, _$_js__WEBPACK_IMPORTED_MODULE_0__/* .prev */ .mp, _$_js__WEBPACK_IMPORTED_MODULE_0__/* .prop */ .vg, _$_js__WEBPACK_IMPORTED_MODULE_0__/* .txt */ .u7, _$_js__WEBPACK_IMPORTED_MODULE_0__/* .val */ .P0);
const cusWidth = (0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)('#customize-width');
const cusHeight = (0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)('#customize-height');
const cusSelect = (0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)('#select-device');
const hr = (0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)('#horizontal');
const vr = (0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)('#vertical');
const browsers = {};
let cacheSize = [];
(0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)('.table').on('click', function (e) {
  const {
    dataset: {
      action,
      bp,
      width,
      height
    },
    href
  } = e.target;
  if (!action) return;
  if (action !== 'rotate') e.preventDefault();
  const actions = {
    copy() {
      navigator.clipboard.writeText(href);
    },
    open() {
      const top = (screen.height - height) / 2;
      const left = (screen.width - width) / 2;
      const config = "width=".concat(width, ",height=").concat(height);
      browsers[bp] = open(href, bp, config);
    },
    close() {
      if (!browsers[bp]) return;
      browsers[bp] = browsers[bp].close();
    },
    rotate() {
      if (cusSelect.val() === 'customize*customize') return;
      const [min, max] = cusSelect.val().split('*').sort((a, b) => +a - +b);
      const {
        value: checkedVal
      } = e.target;
      cusWidth.val(checkedVal === 'h' ? max : min);
      cusHeight.val(checkedVal === 'v' ? max : min);
    },
    selectSize() {
      const [min, max] = e.target.value.split('*').sort((a, b) => +a - +b);
      cusWidth.prop('disabled', min !== 'customize');
      cusHeight.prop('disabled', max !== 'customize');
      if (min === 'customize') {
        if (cacheSize.length) {
          cusWidth.val(cacheSize[0]);
          cusHeight.val(cacheSize[1]);
          return;
        }
        cusWidth.val('');
        cusHeight.val('');
        return;
      }
      cusWidth.val(hr.prop('checked') ? max : min);
      cusHeight.val(vr.prop('checked') ? max : min);
    },
    openAll() {
      (0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)(e.target).parent().nextAll().filter(el => el.classList.contains('css-all-device')).each(td => {
        td.children[0].dispatchEvent(new Event('click'));
      });
    },
    closeAll() {
      _$_js__WEBPACK_IMPORTED_MODULE_0__.$.each(browsers, browser => browser.close());
    },
    customize() {
      if (browsers[bp]) {
        browsers[bp].close();
      }
      const inputVal = [cusWidth.val(), cusHeight.val()];
      if (inputVal.every(val => !+val)) {
        alert('請填入裝置尺寸');
        return;
      }
      if (cusSelect.val().includes('customize')) {
        cacheSize = inputVal;
      }
      const [min, max] = inputVal.sort((a, b) => +a - +b);
      const width = vr.prop('checked') ? min : max;
      const height = hr.prop('checked') ? min : max;
      const config = "width=".concat(width, ",height=").concat(height);
      browsers[bp] = open(href, bp, config);
    }
  };
  actions[action]();
}, true);
(0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)('#download').on('click', function (e) {
  // e.preventDefault()
  const seo = {
    demo: {
      title: 'Sitemap',
      desc: 'Sitemap'
    },
    layout: {
      title: '請套入title資料',
      desc: '請套入description資料'
    }
  };
  (0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)('[name=pageTitle]').each(title => {
    const [lang, page] = title.id.split('-');
    if (!seo[lang]) {
      seo[lang] = {};
    }
    seo[lang][page] = {
      title: (0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)(title).prev().txt()
    };
    if (title.value) {
      seo[lang][page].title = title.value;
    }
  });
  (0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)('[name=pageDescription]').each(desc => {
    const [lang, page] = desc.id.split('-');
    if (desc.value) {
      seo[lang][page].desc = desc.value;
    }
  });
  let seoStr = "- const officialDomain = '".concat((0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)('#officialurl').val(), "'\n");
  seoStr += "-\n  const seo = {".concat(_$_js__WEBPACK_IMPORTED_MODULE_0__.$.map(seo, (head, lang) => {
    if (['layout', 'demo'].includes(lang)) {
      return "\n    ".concat(lang, ": {").concat(_$_js__WEBPACK_IMPORTED_MODULE_0__.$.map(head, (text, meta) => "\n      ".concat(meta, ": '").concat(text, "'")).join(','), "\n    }");
    }
    return "\n    ".concat(lang, ": {").concat(_$_js__WEBPACK_IMPORTED_MODULE_0__.$.map(seo[lang], (head, basename) => "\n      ".concat(basename, ": {").concat(_$_js__WEBPACK_IMPORTED_MODULE_0__.$.map(head, (text, meta) => "\n        ".concat(meta, ": '").concat(text, "'")).join(','), "\n      }")), "\n    }");
  }).join(','), "\n  }");
  console.log(seoStr);
  localStorage.setItem('seo', JSON.stringify(seo));
  this.href = "data:txt/plain;charset=utf-8,".concat(encodeURIComponent(seoStr));
});
const seo = JSON.parse(localStorage.getItem('seo'));
if (seo) {
  _$_js__WEBPACK_IMPORTED_MODULE_0__.$.each(seo, (head, basename) => {
    _$_js__WEBPACK_IMPORTED_MODULE_0__.$.each(head, (text, meta) => {
      (0,_$_js__WEBPACK_IMPORTED_MODULE_0__.$)("#".concat(meta, "-").concat(basename)).val(text);
    });
  });
}

/***/ }),

/***/ 9378:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./img/spriteSVG/fb.svg
var fb = __webpack_require__(4107);
// EXTERNAL MODULE: ./img/spriteSVG/line.svg
var line = __webpack_require__(1817);
// EXTERNAL MODULE: ./img/spriteSVG/linkedin.svg
var linkedin = __webpack_require__(644);
;// CONCATENATED MODULE: ./img/spriteSVG/index.js




// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
var toPropertyKey = __webpack_require__(7543);
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = (0,toPropertyKey/* default */.Z)(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./js/Vec.js
class Vec {
  constructor() {
    let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.x = x;
    this.y = y;
  }
  addVectors(v1, v2) {
    this.x = v1.x + v2.x;
    this.y = v1.y + v2.y;
    return this;
  }

  // sum (vec) {
  //   return new Vec(this.x + vec.x, this.y + vec.y)
  // }

  sub(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }
  mul(num) {
    return new Vec(this.x * num, this.y * num);
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  normalize() {
    const len = this.distance(new Vec(0, 0));
    return new Vec(this.x / len, this.y / len);
  }
  distance(vec) {
    return Math.sqrt(Math.pow(this.x - vec.x, 2) + Math.pow(this.y - vec.y, 2));
  }
  clone() {
    return new Vec(this.x, this.y);
  }
}
;// CONCATENATED MODULE: ./js/Particle.js


class Ease {
  constructor(dur) {
    let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.time = 0;
    this.dur = dur;
    this.delay = delay;
  }
  reset(dur) {
    let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.time = 0;
    this.delay = delay;
    if (dur) {
      this.dur = dur;
    }
  }
  update(tick) {
    tick -= this.delay;
    if (tick <= 0) return 0;
    const x = tick / this.dur;
    // const c1 = 1.70158
    // const c3 = c1 + 1
    // this.time = x >= 1 ? 1 : c3 * x * x ** 3 - c1 * x ** 3

    this.time = x >= 1 ? 1 : x < 0.5 ? (1 - Math.sqrt(1 - (2 * x) ** 2)) / 2 : (Math.sqrt(1 - (-2 * x + 2) ** 2) + 1) / 2;
  }
}
class Particle {
  // constructor (init, final) {
  //   this.init = init
  //   this.final = final
  //   this.current = this.init.clone()
  // }
  constructor(init, final, ease) {
    this.ease = ease;
    this.init = init;
    // const midDistance = init.distance(final) / 2
    this.center = new Vec().addVectors(init, final).mul(0.5); // this.circleCenter(init, final, midDistance)
    this.initTheta = this.theta(init);
    const finalTheta = this.theta(final);
    this.delTheta = this.initTheta - finalTheta;
    if (Math.abs(this.delTheta) > Math.PI) {
      this.delTheta += Math.PI * 2;
    }
    this.delTheta += (Math.random() * 2 | 0 ? 0 : -2) * Math.PI;
    this.circleRadius = this.center.distance(init);
  }
  theta(position) {
    const normalize = position.sub(this.center).normalize();
    return Math.atan2(normalize.y, normalize.x);
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

  update() {
    this.currentTheta = this.initTheta - this.delTheta * this.ease.time;
    Particle.position.set(Math.cos(this.currentTheta) * this.circleRadius, Math.sin(this.currentTheta) * this.circleRadius).addVectors(this.center, Particle.position);
    return this;
  }

  // update ({ time }) {
  //   this.current.set(this.init.sum(this.final.sub(this.init).mul(time)))
  //   return this
  // }
}
_defineProperty(Particle, "position", new Vec());
class Circle extends Particle {
  draw(c) {
    const {
      x,
      y
    } = Particle.position;
    // c.moveTo(x, y)
    c.arc(x, y, Circle.r, 0, 2 * Math.PI);
    return this;
  }
}
_defineProperty(Circle, "r", 4.5);
class Rectangle extends Particle {
  draw(c) {
    const {
      x,
      y
    } = Particle.position;
    c.rect(x, y, this.size, this.size);
    return this;
  }
}
Rectangle.prototype.size = 5.5 * 2;
// EXTERNAL MODULE: ../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js
var ScrollMagic = __webpack_require__(3412);
// EXTERNAL MODULE: ./js/$.js
var $ = __webpack_require__(3390);
;// CONCATENATED MODULE: ./js/reviews.js


$.$.use($.on, $/* css */.iv, $/* children */.pI, $/* attr */.Lj, $/* height */.Cb, $/* find */.sE);
function attrVal(progress, dur) {
  let {
    xoffset = 0,
    yoffset = 0,
    freq = 1,
    rev = true
  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let val = progress;
  if (rev) {
    val = Math.sin((val * freq - xoffset) * Math.PI);
  }
  val = val * dur - yoffset;
  if (val > 1) return 1;
  if (val < 0) return 0;
  return Math.floor(val * 100) / 100;
}
const scenes = (0,$.$)('.timeline-target').map((el, i) => {
  const target = (0,$.$)(el);
  const triggerElement = '#' + target.attr('id');
  const triggerHook = (1 - (0,$.$)(triggerElement).height() / innerHeight) / 2;
  return new ScrollMagic.Scene({
    triggerElement,
    triggerHook,
    duration: (innerWidth >= 992 ? 100 : 50) * 16
  }).setPin(triggerElement, {
    pushFollowers: false
  }).on('enter', function () {
    if (innerWidth >= 992) {
      console.log(target.find('img').attr('src'));
      (0,$.$)('.fixed-img').css('backgroundImage', "url(".concat(target.find('img').attr('src'), ")")).css('backgroundPosition', (i % 2 ? 'left' : 'right') + ' 130px bottom');
    }
  }).on('progress', function (_ref) {
    let {
      progress: prog
    } = _ref;
    const odd = innerWidth < 992 ? 1 : i % 2 * 2 - 1;
    (0,$.$)('.fixed-img').css('opacity', 0.3 * attrVal(prog, 1.1, {
      xoffset: 0.5,
      freq: 1.5
    }));
    target.css('opacity', 0.2 + 0.8 * attrVal(prog, 3));
    target.children().css('filter', "blur(".concat(5 - 5 * attrVal(prog, 2, {
      xoffset: 0.25,
      freq: 1.5
    }), "px)"));
    if (innerWidth >= 992) {
      target.find('.timeline-item').css('transform', "scale(".concat(0.8 + 0.2 * attrVal(prog, 2, {
        xoffset: 0.25,
        yoffset: 0.2,
        freq: 1.5
      }), ")"));
      target.find('.timeline-client').css('opacity', attrVal(prog, 1.1)).css('transform', "translateY(".concat(10 - 10 * attrVal(prog, 1.1, {
        xoffset: 0.1,
        freq: 1.2
      }), "px)"));
      const avatar = attrVal(prog, 3, {
        yoffset: 0.75,
        rev: false
      });
      target.find('.timeline-avatar').css('opacity', attrVal(prog, 3, {
        rev: false
      })).css('transform', "translateX(".concat(20 - 20 * odd * avatar, "px) scale(").concat(1.1 - 0.1 * avatar, ")")).find('img').css('filter', "brightness(".concat(50 - 49 * attrVal(prog, 2, {
        xoffset: 0.4,
        freq: 1.8
      }), ")"));
    }
  });
});
if (scenes.length) {
  new ScrollMagic.Controller().addScene(scenes);
}
// EXTERNAL MODULE: ../node_modules/bs5/js/src/carousel.js + 1 modules
var carousel = __webpack_require__(8719);
// EXTERNAL MODULE: ../node_modules/bs5/js/src/collapse.js
var collapse = __webpack_require__(8838);
// EXTERNAL MODULE: ../node_modules/bs5/js/src/dropdown.js
var dropdown = __webpack_require__(9826);
// EXTERNAL MODULE: ../node_modules/lodash-es/debounce.js
var debounce = __webpack_require__(4829);
// EXTERNAL MODULE: ../node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(369);
;// CONCATENATED MODULE: ../node_modules/lodash-es/throttle.js



/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,isObject/* default */.Z)(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,debounce/* default */.Z)(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ const lodash_es_throttle = (throttle);

;// CONCATENATED MODULE: ./js/script.js
/* injectImportScript */









// eslint-disable-line

// eslint-disable-line

$.$.use($.on, $/* scrollTop */.SM, $/* toggleClass */.og, $/* width */.bf, $/* height */.Cb, $/* next */.lp, $/* attr */.Lj, $/* prop */.vg, $/* txt */.u7, $/* addClass */.cn, $/* hasClass */.pv, $/* removeClass */.IV, $/* css */.iv, $/* children */.pI, $/* parent */.qm, $/* bounding */.Lr, $/* find */.sE);
$.$.bootstrap(collapse/* default */.Z, dropdown/* default */.Z);
// window.$ = $
// window.Ease = Ease
(0,$.$)(window).on('scroll', lodash_es_throttle(function () {
  (0,$.$)('body').toggleClass('slide-down', (0,$.$)(this).scrollTop() > (0,$.$)(this).height() * 0.8);
  if ((0,$.$)('#mobile-menu').hasClass('show')) {
    (0,$.$)('#mobile-menu').collapse('hide');
  }
  if (qrcode) {
    qrcode((0,$.$)('canvas').bounding('top') - (0,$.$)(this).height() | 0);
  }
  animations(this);
}, 300, {
  trailing: true
}));
(0,$.$)('#mobile-menu').on('show.bs.collapse', function (e) {
  (0,$.$)('body').addClass('navbar-show');
}).on('hide.bs.collapse', function (e) {
  (0,$.$)('body').removeClass('navbar-show');
});
(0,$.$)('#contact-form').on('submit', function (e) {
  e.preventDefault();
  const form = (0,$.$)(this);
  form.addClass('was-validated');
  if (!form[0].checkValidity()) {
    return;
  }
  const newline = '%0D%0A';
  const mail = 'master.builder.tw@gmail.com';
  const formData = Object.fromEntries(new FormData(form[0]));
  const inputName = ['know', 'name', 'address', 'tel', 'mail', 'msg'];
  const href = {
    mailto: 'mailto:' + mail + '?',
    subject: 'subject=我想諮詢有關' + formData.subject,
    body: inputName.reduce(function (str, name) {
      const inputId = (0,$.$)("[name=".concat(name, "]")).attr('id');
      const label = (0,$.$)("[for=".concat(inputId, "]")).txt().replace('*', '') + '： ';
      if (formData[name]) {
        str += label + (name === 'message' ? newline + '%20'.repeat(9) : ' ') + formData[name];
        str += name === 'message' ? newline : '';
        str += newline.repeat(2);
      }
      return str;
    }, '&body=')
  };
  const downloadBtn = document.createElement('a');
  downloadBtn.href = Object.values(href).join('');
  downloadBtn.click();
  location = form.attr('action');
});
const animations = function () {
  const els = (0,$.$)('.ani-fade-enter');
  const groups = (0,$.$)('.ani-group-enter');
  (0,$.$)('.ani-group-enter').forEach(el => {
    const {
      stagger
    } = el.dataset;
    if (stagger) {
      (0,$.$)(el).find('.ani').forEach((el, i) => {
        stagger * i && (0,$.$)(el).css('transition-delay', (stagger * i).toFixed(2) + 's');
      });
    }
  });
  (0,$.$)('.ani-fade-enter, .ani-group-enter .ani').forEach(el => {
    for (const [prop, val] of Object.entries(el.dataset)) {
      (0,$.$)(el).css('transition-' + prop, val + 's');
    }
  });
  return function (win) {
    els.forEach(el => {
      if (el.getBoundingClientRect().top < (0,$.$)(win).height() * 0.6) {
        (0,$.$)(el).addClass('fade-enter-active');
        els.splice(els.indexOf(el), 1);
      }
    });
    groups.forEach(el => {
      if (el.getBoundingClientRect().top < (0,$.$)(win).height() * 0.6) {
        (0,$.$)(el).addClass('ani-group-enter-active');
        els.splice(els.indexOf(el), 1);
      }
    });
  };
}();
function run(cb, _ref) {
  let {
    fps = 30,
    dur = Infinity
  } = _ref;
  return new Promise((resolve, reject) => {
    const interval = 1000 / fps;
    let then = Date.now();
    let startTime = null;
    function update(timestamp) {
      const now = Date.now();
      const delta = now - then;
      let tick = 0;
      if (startTime === null) {
        startTime = timestamp;
      }
      if (delta > interval) {
        then = now - delta % interval;
        tick = timestamp - startTime;
        cb(tick);
      }
      frame = requestAnimationFrame(update);
      if (startTime !== null && dur < tick) {
        cancelAnimationFrame(frame);
        resolve(frame);
      }
    }
    let frame = requestAnimationFrame(update);
  });
}
let qrcode = function () {
  const canvas = (0,$.$)('#qrcode');
  if (innerWidth < 992 || canvas.length === 0) return null;
  canvas.prop('height', (0,$.$)('#qrcode').parent().height()).prop('width', (0,$.$)('#qrcode').parent().width());
  const c = canvas[0].getContext('2d');
  const paths = {
    m: 'M6.9,31c0.5,0,0.7-0.2,0.7-0.7V13l7.1,11.6c0.2,0.3,0.4,0.5,0.8,0.5h3.9c0.4,0,0.6-0.2,0.8-0.5l7.1-11.9v17.6c0,0.5,0.2,0.7,0.7,0.7h6.2c0.5,0,0.7-0.2,0.7-0.7V0.7c0-0.5-0.2-0.7-0.7-0.7h-6.7c-0.3,0-0.6,0.2-0.8,0.5L17.6,16L8.3,0.5C8.1,0.2,7.9,0,7.5,0H0.7C0.2,0,0,0.2,0,0.7v29.6C0,30.8,0.2,31,0.7,31H6.9z',
    b: 'M53.7,31c4.4,0,7.7-0.8,9.7-2.4c2-1.6,3-3.8,3-6.7c0-1.7-0.5-3.2-1.5-4.5c-1-1.3-2.5-2.2-4.4-2.7c1.4-0.6,2.5-1.5,3.3-2.6c0.7-1.1,1.1-2.4,1.1-3.9c0-1.6-0.4-3-1.1-4.2c-0.7-1.2-1.9-2.2-3.5-2.9c-1.6-0.7-3.7-1-6.4-1H42.3c-0.5,0-0.7,0.2-0.7,0.7v29.6c0,0.5,0.2,0.7,0.7,0.7H53.7z M56.1,7.1c0.7,0.5,1,1.2,1,2.3s-0.3,1.8-1,2.3c-0.7,0.5-1.5,0.7-2.5,0.7h-4.3v-6h4.3,C54.6,6.3,55.4,6.6,56.1,7.1z M57.1,18.9c0.7,0.5,1.1,1.4,1.1,2.4c0,1.1-0.4,1.9-1.1,2.5c-0.7,0.5-1.8,0.8-3,0.8h-4.8v-6.5h4.8,C55.4,18.1,56.4,18.4,57.1,18.9z',
    c: 'M89.5,29.8c1.9-0.8,3.5-2,4.7-3.4c1.3-1.5,2.2-3.1,2.8-5c0.1-0.3-0.1-0.6-0.5-0.7L90.3,19c-0.4-0.1-0.6,0-0.8,0.4,C89,20.9,88.2,22,87,22.6c-1.1,0.7-2.4,1-3.9,1c-2.1,0-3.9-0.7-5.2-2.2s-2-3.4-2-5.9s0.7-4.5,2-5.9c1.3-1.5,3.1-2.2,5.3-2.2,c2.6,0,4.5,1,5.7,3.1c0.2,0.4,0.5,0.5,0.8,0.3l6.2-1.7c0.5-0.1,0.6-0.4,0.4-0.8c-1.1-2.7-2.7-4.7-4.9-6.2c-2.2-1.5-5-2.2-8.2-2.2,c-2.2,0-4.2,0.4-6,1.1s-3.4,1.8-4.8,3.2s-2.4,3-3.2,4.9c-0.8,1.9-1.1,4-1.1,6.3c0,3.1,0.6,5.8,1.9,8.1s3,4.1,5.3,5.4,c2.3,1.3,4.9,2,7.9,2C85.5,31,87.6,30.6,89.5,29.8z'
  };
  const color = 'hsl(145,94.1%,40.2%)';
  c.textAlign = 'center';
  c.font = '16px 微軟正黑體';
  c.fillStyle = color;

  // eslint-disable-line
  let mbc = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10, 1, 11, 1, 12, 1, 13, 2, 1, 2, 2, 2, 3, 2, 4, 3, 3, 3, 4, 3, 5, 4, 4, 4, 5, 4, 6, 5, 4, 5, 5, 5, 6, 6, 3, 6, 4, 6, 5, 7, 1, 7, 2, 7, 3, 7, 4, 8, 0, 8, 1, 8, 2, 8, 3, 8, 4, 8, 5, 8, 6, 8, 7, 8, 8, 8, 9, 8, 10, 8, 11, 8, 12, 8, 13, 9, 0, 9, 1, 9, 2, 9, 3, 9, 4, 9, 5, 9, 6, 9, 7, 9, 8, 9, 9, 9, 10, 9, 11, 9, 12, 9, 13, 11, 0, 11, 1, 11, 2, 11, 3, 11, 4, 11, 5, 11, 6, 11, 7, 11, 8, 11, 9, 11, 10, 11, 11, 11, 12, 11, 13, 12, 0, 12, 1, 12, 2, 12, 3, 12, 4, 12, 5, 12, 6, 12, 7, 12, 8, 12, 9, 12, 10, 12, 11, 12, 12, 12, 13, 13, 0, 13, 1, 13, 6, 13, 7, 13, 12, 13, 13, 14, 0, 14, 1, 14, 6, 14, 7, 14, 12, 14, 13, 15, 0, 15, 1, 15, 6, 15, 7, 15, 12, 15, 13, 16, 0, 16, 1, 16, 6, 16, 7, 16, 12, 16, 13, 17, 0, 17, 1, 17, 2, 17, 3, 17, 4, 17, 5, 17, 6, 17, 7, 17, 8, 17, 9, 17, 10, 17, 11, 17, 12, 17, 13, 18, 1, 18, 2, 18, 3, 18, 4, 18, 5, 18, 6, 18, 7, 18, 8, 18, 9, 18, 10, 18, 11, 18, 12, 19, 2, 19, 3, 19, 4, 19, 5, 19, 8, 19, 9, 19, 10, 19, 11, 21, 1, 21, 2, 21, 3, 21, 4, 21, 5, 21, 6, 21, 7, 21, 8, 21, 9, 21, 10, 21, 11, 21, 12, 22, 0, 22, 1, 22, 2, 22, 3, 22, 4, 22, 5, 22, 6, 22, 7, 22, 8, 22, 9, 22, 10, 22, 11, 22, 12, 22, 13, 23, 0, 23, 1, 23, 12, 23, 13, 24, 0, 24, 1, 24, 12, 24, 13, 25, 0, 25, 1, 25, 12, 25, 13, 26, 0, 26, 1, 26, 12, 26, 13, 27, 0, 27, 1, 27, 12, 27, 13, 28, 0, 28, 1, 28, 2, 28, 11, 28, 12, 28, 13, 29, 1, 29, 2, 29, 11, 29, 12].map(p => p * 11 + Circle.r);
  // eslint-disable-line
  let circle = [6, 14, 5, 14, 24, 14, 1, 14, 0, 14, 28, 14, 8, 13, 8, 15, 20, 15, 7, 13, 21, 15, 22, 13, 5, 15, 23, 15, 24, 13, 3, 13, 3, 15, 25, 15, 2, 13, 26, 13, 1, 13, 1, 15, 27, 13, 27, 15, 0, 13, 0, 15, 28, 13, 8, 16, 20, 12, 20, 16, 7, 12, 21, 16, 6, 12, 6, 16, 22, 16, 5, 12, 23, 12, 4, 12, 4, 16, 24, 16, 3, 16, 2, 16, 26, 12, 27, 16, 28, 12, 28, 16, 14, 11, 13, 11, 13, 17, 12, 11, 12, 17, 11, 11, 17, 11, 10, 17, 18, 17, 19, 17, 8, 11, 8, 17, 7, 11, 21, 11, 5, 17, 23, 17, 24, 11, 24, 17, 25, 11, 25, 17, 2, 11, 26, 17, 1, 11, 1, 17, 27, 11, 0, 11, 0, 17, 28, 11, 28, 17, 14, 10, 14, 18, 13, 18, 15, 18, 12, 10, 12, 18, 11, 10, 17, 18, 10, 10, 10, 18, 18, 10, 18, 18, 9, 18, 19, 18, 20, 10, 7, 10, 21, 10, 6, 10, 6, 18, 5, 10, 5, 18, 23, 10, 23, 18, 4, 18, 3, 18, 25, 18, 2, 10, 26, 10, 28, 10, 28, 18, 14, 9, 14, 19, 13, 19, 15, 19, 12, 9, 12, 19, 16, 9, 16, 19, 11, 9, 17, 9, 17, 19, 10, 9, 18, 19, 9, 19, 19, 9, 19, 19, 20, 9, 20, 19, 5, 19, 23, 19, 4, 9, 24, 9, 24, 19, 3, 9, 3, 19, 25, 9, 25, 19, 2, 9, 1, 9, 27, 9, 27, 19, 0, 9, 28, 9, 14, 8, 14, 20, 13, 8, 13, 20, 15, 8, 16, 8, 16, 20, 17, 20, 10, 20, 18, 8, 8, 8, 20, 20, 7, 20, 21, 8, 21, 20, 6, 8, 6, 20, 22, 20, 23, 8, 23, 20, 4, 8, 24, 8, 24, 20, 25, 20, 2, 20, 26, 8, 1, 8, 1, 20, 27, 20, 0, 20, 14, 7, 14, 21, 13, 21, 15, 7, 12, 21, 16, 7, 16, 21, 11, 21, 17, 7, 10, 7, 18, 7, 18, 21, 9, 21, 19, 21, 8, 21, 20, 21, 24, 21, 26, 21, 14, 6, 13, 22, 15, 22, 12, 6, 16, 6, 11, 22, 17, 22, 10, 6, 10, 22, 18, 6, 19, 22, 8, 6, 20, 6, 20, 22, 22, 22, 24, 22, 28, 22, 14, 5, 14, 23, 15, 5, 12, 5, 12, 23, 11, 5, 17, 23, 10, 5, 10, 23, 18, 5, 18, 23, 19, 5, 19, 23, 8, 5, 20, 23, 24, 23, 25, 23, 15, 24, 11, 4, 10, 24, 18, 4, 18, 24, 9, 24, 19, 24, 8, 4, 8, 24, 20, 24, 21, 24, 22, 24, 23, 24, 24, 24, 27, 24, 14, 3, 15, 3, 12, 3, 16, 3, 16, 25, 11, 3, 10, 3, 10, 25, 9, 3, 19, 3, 23, 25, 25, 25, 27, 25, 14, 2, 14, 26, 13, 2, 12, 26, 16, 26, 17, 2, 17, 26, 10, 2, 18, 26, 9, 2, 19, 2, 19, 26, 8, 2, 20, 2, 20, 26, 21, 26, 26, 26, 27, 26, 28, 26, 14, 1, 13, 1, 13, 27, 15, 1, 12, 1, 16, 1, 17, 1, 17, 27, 10, 1, 18, 27, 9, 1, 9, 27, 19, 27, 8, 27, 20, 1, 21, 27, 22, 27, 23, 27, 25, 27, 27, 27, 28, 27, 13, 0, 13, 28, 15, 0, 15, 28, 12, 28, 16, 0, 17, 0, 17, 28, 10, 28, 18, 0, 18, 28, 9, 0, 19, 0, 19, 28, 20, 28, 21, 28, 24, 28, 25, 28, 27, 28].map(p => p * 11 + Circle.r);
  let rect = [];
  for (let i = 0, arr = [0, 0, 0, 22, 22, 0]; i < arr.length; i += 2) {
    for (let x = 0, y = 0; x < 7 && y < 7; y < 6 ? y++ : x++ < 7 && (y = 0)) {
      if ([0, 6].includes(x) || [0, 6].includes(y)) {
        rect.push((arr[i] + x) * 11 - (x ? 1 : 0), (arr[i + 1] + y) * 11 - (y ? 1 : 0));
      }
    }
  }
  for (let i = 0, arr = [22, 22, 22, 264, 264, 22]; i < arr.length; i += 2) {
    for (let x = 0, y = 0; x < 3 && y < 3; y < 2 ? y++ : x++ < 2 && (y = 0)) {
      rect.push(arr[i] + x * 11 - (x ? 1 : 0), arr[i + 1] + y * 11 - (y ? 1 : 0));
    }
  }
  const offset = {
    x: (canvas.width() - 317) / 2,
    y: 0
  };
  const easeTimes = Array.from({
    length: 20
  }, (v, k) => new Ease(6000 - k * 100, k * 100)).filter((el, i, arr) => arr.map(time => time.dur).indexOf(el.dur) === i);
  /**
   *  const qrcodeSize = 317
   *  const mbcW = 328
   *  const mbcH = 152
   * */
  const circleInitPosRand = Math.random() * mbc.length | 0;
  const rectGap = 13;
  const rectRows = 3;
  const rectCols = rect.length / 2 / rectRows;
  const particles = circle.map((p, i, a) => {
    const easeTime = easeTimes[i % easeTimes.length];
    if (i % 2) {
      const j = (i - 1) / 2;
      const rectX = j % rectCols * rectGap + (canvas.width() - rectCols * rectGap) / 2;
      const rectY = ((j / rectCols | 0) - rectRows) * rectGap + canvas.height();
      return rect[i - 1] > -1 && new Rectangle(new Vec(rectX, rectY), new Vec(rect[i - 1] + offset.x, rect[i] + offset.y), easeTime);
    }
    let mbcRand = (circleInitPosRand + i) % mbc.length;
    mbcRand += mbcRand % 2;
    return new Circle(new Vec(mbc[mbcRand] + (canvas.width() - 328) / 2, mbc[mbcRand + 1] + canvas.height() - (rectRows + 1) * rectGap - 152), new Vec(p + offset.x, a[i + 1] + offset.y), easeTime);
  }).filter(p => p);
  circle = null;
  rect = null;
  mbc = null;
  const randColor = Math.random() * 360 | 0;
  const initColor = 145 + (180 - randColor);
  const gridWidth = canvas.width() / 6;
  const xlSize = innerWidth >= 1360;
  return async function (closeDistance) {
    const maxDur = easeTimes[0].dur + easeTimes[0].delay;
    const globalEase = new Ease(maxDur);
    if (closeDistance + canvas.height() < 0) {
      qrcode = null;
      await run(tick => {
        easeTimes.forEach(t => t.update(tick));
        globalEase.update(tick);
        c.fillStyle = 'rgba(255,255,255,' + globalEase.time + ')';
        if (xlSize) {
          c.fillRect(gridWidth - 4, 0, gridWidth * 5 + 4, canvas.height());
          c.fillStyle = 'rgba(0,0,0,0.2)';
        }
        c.fillRect(0, 0, xlSize ? gridWidth - 4 : canvas.width(), canvas.height());
        for (const particle of particles) {
          c.beginPath();
          particle.update().draw(c);
          c.fillStyle = 'hsl(' + (initColor + (particle.delTheta / Math.PI * 180 + randColor) * particle.ease.time) % 360 + ',94.1%,40.2%)';
          c.fill();
        }
      }, {
        fps: 20,
        dur: maxDur + 100
      });
      c.clearRect(0, 0, canvas.width(), canvas.height());
      for (const particle of particles) {
        c.beginPath();
        particle.update().draw(c);
        c.fill();
      }
      // draw text
      globalEase.reset(1000);
      await run(tick => {
        globalEase.update(tick);
        c.clearRect(0, 317 + 9, canvas.width(), canvas.height() - 317);
        c.globalAlpha = globalEase.time < 0 ? 0 : globalEase.time;
        c.save();
        c.translate((canvas.width() - 97) / 2, (317 - 31) / 2);
        for (const letter of Object.values(paths)) {
          const path = new Path2D(letter);
          c.fill(path);
        }
        c.restore();
        c.fillText(canvas[0].dataset.text, canvas.width() / 2, 317 + 16 * 3);
      }, {
        fps: 15,
        dur: 1200
      });
      return;
    }
    if (closeDistance < 100) {
      c.save();
      c.translate(0, -closeDistance - canvas.height());
      c.fillStyle = 'rgba(255,255,255,0.75)';
      if (xlSize) {
        c.fillRect(gridWidth - 4, 0, gridWidth * 5 + 4, canvas.height());
        c.fillStyle = 'rgba(0,0,0,0.75)';
      }
      c.fillRect(0, 0, xlSize ? gridWidth - 4 : canvas.width(), canvas.height());
      c.fillStyle = 'hsl(' + initColor + ',94.1%,40.2%)';
      for (const particle of particles) {
        c.beginPath();
        particle.update().draw(c);
        c.fill();
      }
      c.restore();
    }
  };
}();

// const scenes = $('.timeline-target').map((el, i) => {
//   const triggerElement = '#' + $(el).attr('id')
//   const triggerHook = (1 - $(triggerElement).bounding().height / innerHeight) / 2
//   return [
//     new Scene({
//       offset: 100,
//       triggerElement
//     }).setClassToggle(triggerElement, 'active'), /* .addIndicators({ name: 'target', indent: 100 }) */
//     new Scene({
//       triggerElement,
//       duration: 700,
//       triggerHook
//     }).setPin(triggerElement, { pushFollowers: false })
//       .setClassToggle($(triggerElement).find('.timeline-item'), 'active'), /* .addIndicators({ name: 'pin' }) */
//     new Scene({
//       triggerElement,
//       offset: 100,
//       duration: 400,
//       triggerHook
//     })
//       .setClassToggle($(triggerElement).children(), 'active'), /* .addIndicators({ name: 'blur' }) */
//     new Scene({
//       triggerElement,
//       offset: 200,
//       duration: 300,
//       triggerHook
//     }).on('enter', function () {
//       $(triggerElement).find('.timeline-client,.timeline-avatar').addClass('active')
//     }).on('leave', function () {
//       $(triggerElement).find('.timeline-client').removeClass('active')
//     }), /* .addIndicators({ name: 'client avatar' }) */
//     new Scene({
//       triggerElement,
//       offset: 300,
//       duration: 300,
//       triggerHook
//     })
//       .setClassToggle($(triggerElement).find('img'), 'active')
//       /* .addIndicators({ name: 'bright' }) */]
// })
// if (scenes.length) {
//   new Controller().addScene(scenes)
// }
// function attrVal (progress, dur, offset = 0, reverse) {
//   let val = progress
//   if (reverse) {
//     val = Math.sin(val * Math.PI)
//   }
//   val = val * dur - offset
//   if (val > 1) return 1
//   if (val < 0) return 0
//   return Math.floor(val * 100) / 100
// }
// const scenes = $('.timeline-target').map((el, i) => {
//   const target = $(el)
//   const triggerElement = '#' + target.attr('id')
//   const triggerHook = (1 - $(triggerElement).bounding().height / innerHeight) / 2
//   return new Scene({
//     triggerElement,
//     triggerHook,
//     duration: $(triggerElement).height() + 400
//   })
//     .setPin(triggerElement, { pushFollowers: false }).on('enter', function () {
//       if (innerWidth < 992) return
//       $('.fixed-img')
//         .css('backgroundImage', `url(${target.find('img').attr('src')})`)
//         .css('backgroundPosition', (i % 2 ? 'left' : 'right') + ' 200px bottom')
//     })
//     .on('progress', function (e) {
//       const odd = innerWidth < 992 ? 1 : i % 2 * 2 - 1

//       $('.fixed-img').css('opacity', 0.3 * attrVal(e.progress, 2, 0.75, true))
//       target.css('opacity', 0.3 + 0.7 * attrVal(e.progress, 1.5, 0, true))
//       target.children().css('filter', `blur(${3 - 3 * attrVal(e.progress, 1.6, 0.5, true)}px)`)
//       if (innerWidth >= 992) {
//         target.find('.timeline-item')
//           .css('transform', `scale(${0.8 + 0.2 * attrVal(e.progress, 1.5, 0, true)})`)
//         target.find('.timeline-client')
//           .css('transform', `translateY(${10 - 10 * attrVal(e.progress, 3, 1.8, true)}px)`).css('opacity', attrVal(e.progress, 4, 1.8, true))
//         const avatar = attrVal(e.progress, 2, 0.7, true)
//         target.find('.timeline-avatar')
//           .css('opacity', attrVal(e.progress, 4, 0.4))
//           .css('transform', `translateX(${20 - 20 * odd * avatar}px) scale(${1.1 - 0.1 * avatar})`)
//           .find('img')
//           .css('filter', `brightness(${50 - 49 * avatar})`)
//       }
//     })
// })
// if (scenes.length) {
//   new Controller().addScene(scenes)
// }

/***/ }),

/***/ 3412:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(this, function () {
	"use strict";

	var ScrollMagic = function () {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.8";

	// TODO: temporary workaround for chrome's scroll jitter bug
	if (typeof (window) !== 'undefined') {
		window.addEventListener("mousewheel", void(0));
	}

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
	 * The main class that is needed once per scroll container.
	 *
	 * @class
	 *
	 * @example
	 * // basic initialization
	 * var controller = new ScrollMagic.Controller();
	 *
	 * // passing options
	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
	 *
	 * @param {object} [options] - An object containing one or more options for the controller.
	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
											 ** `0` => silent
											 ** `1` => errors
											 ** `2` => errors, warnings
											 ** `3` => errors, warnings, debuginfo
	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
	 																										 This interval polls these parameters to fire the necessary events.  
	 																										 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
	 *
	 */
	ScrollMagic.Controller = function (options) {
		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */
		var
			NAMESPACE = 'ScrollMagic.Controller',
			SCROLL_DIRECTION_FORWARD = 'FORWARD',
			SCROLL_DIRECTION_REVERSE = 'REVERSE',
			SCROLL_DIRECTION_PAUSED = 'PAUSED',
			DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */
		var
			Controller = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_sceneObjects = [],
			_updateScenesOnNextCycle = false, // can be boolean (true => all scenes) or an array of scenes to be updated
			_scrollPos = 0,
			_scrollDirection = SCROLL_DIRECTION_PAUSED,
			_isDocument = true,
			_viewPortSize = 0,
			_enabled = true,
			_updateTimeout,
			_refreshTimeout;

		/*
		 * ----------------------------------------------------------------
		 * private functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Internal constructor function of the ScrollMagic Controller
		 * @private
		 */
		var construct = function () {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			var ri = parseInt(_options.refreshInterval, 10);
			_options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
		 * Schedule the next execution of the refresh function
		 * @private
		 */
		var scheduleRefresh = function () {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
		 * @private
		 */
		var getScrollPos = function () {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
		 * Returns the current viewport Size (width vor horizontal, height for vertical)
		 * @private
		 */
		var getViewportSize = function () {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
		 * Make available publicly for pinned mousewheel workaround.
		 * @private
		 */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
		 * Handle updates in cycles instead of on scroll (performance)
		 * @private
		 */
		var updateScenes = function () {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) { // scroll position changed?
					_scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
		 * Initializes rAF callback
		 * @private
		 */
		var debounceUpdate = function () {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
		 * Handles Container changes
		 * @private
		 */
		var onChange = function (e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function () {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) { // stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) { // refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
		 * Send a debug message to the console.
		 * provided publicly with _log for plugins
		 * @private
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
		 * Sort scenes in ascending order of their start offset.
		 * @private
		 *
		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
		 * @return {array} The sorted array of Scenes.
		 */
		var sortScenes = function (ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
		 * ----------------------------------------------------------------
		 * public functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Add one ore more scene(s) to the controller.  
		 * This is the equivalent to `Scene.addTo(controller)`.
		 * @public
		 * @example
		 * // with a previously defined scene
		 * controller.addScene(scene);
		 *
		 * // with a newly created scene.
		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
		 *
		 * // adding multiple scenes
		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
		 *
		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
		 * @return {Controller} Parent object for chaining.
		 */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () { // resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
		 * Remove one ore more scene(s) from the controller.  
		 * This is the equivalent to `Scene.remove()`.
		 * @public
		 * @example
		 * // remove a scene from the controller
		 * controller.removeScene(scene);
		 *
		 * // remove multiple scenes from the controller
		 * controller.removeScene([scene, scene2, scene3]);
		 *
		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
	 * Update one ore more scene(s) according to the scroll position of the container.  
	 * This is the equivalent to `Scene.update()`.  
	 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
	 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
	 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
	 * @public
	 * @example
	 * // update a specific scene on next cycle
 	 * controller.updateScene(scene);
 	 *
	 * // update a specific scene immediately
	 * controller.updateScene(scene, true);
 	 *
	 * // update multiple scenes scene on next cycle
	 * controller.updateScene([scene1, scene2, scene3]);
	 *
	 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
	 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
	 										  This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
	 * @return {Controller} Parent object for chaining.
	 */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
		 * See `Controller.updateScene()` for more information about what this means.  
		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
		 * The only application for this method is when ScrollMagic fails to detect these events.  
		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
		 * @public
		 * @example
		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
		 * controller.update();
		 *
		 * // update the controller immediately
		 * controller.update(true);
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
		 * @return {Controller} Parent object for chaining.
		 */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
		 * @public
		 *
		 * @since 1.1.0
		 * @example
		 * // scroll to an offset of 100
		 * controller.scrollTo(100);
		 *
		 * // scroll to a DOM element
		 * controller.scrollTo("#anchor");
		 *
		 * // scroll to the beginning of a scene
		 * var scene = new ScrollMagic.Scene({offset: 200});
		 * controller.scrollTo(scene);
		 *
		 * // define a new scroll position modification function (jQuery animate instead of jump)
		 * controller.scrollTo(function (newScrollPos) {
		 *	$("html, body").animate({scrollTop: newScrollPos});
		 * });
		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
		 *
		 * // define a new scroll function with an additional parameter
		 * controller.scrollTo(function (newScrollPos, message) {
		 *  console.log(message);
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter to the defined custom function
		 * controller.scrollTo(100, "my message");
		 *
		 * // define a new scroll function with an additional parameter containing multiple variables
		 * controller.scrollTo(function (newScrollPos, options) {
		 *  someGlobalVar = options.a + options.b;
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter containing multiple options
		 * controller.scrollTo(100, {a: 1, b: 2});
		 *
		 * // define a new scroll function with a callback supplied as an additional parameter
		 * controller.scrollTo(function (newScrollPos, callback) {
		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
		 * });
		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
		 * controller.scrollTo(100, function() {
		 *	console.log("scroll has finished.");
		 * });
		 *
		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
		 * 1. `number` -> The container will scroll to this new scroll offset.
		 * 2. `string` or `object` -> Can be a selector or a DOM object.  
		 *  The container will scroll to the position of this element.
		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
		 * 4. `function` -> This function will be used for future scroll position modifications.  
		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
		 *  It may also optionally receive an optional additional parameter (see below)  
		 *  _**NOTE:**  
		 *  All other options will still work as expected, using the new function to scroll._
		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) { // excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
				if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) { // assign new scroll function
				setScrollPos = scrollTarget;
			} else { // scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var
						param = _options.vertical ? "top" : "left", // which param is of interest ?
						containerOffset = _util.get.offset(_options.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
						elementOffset = _util.get.offset(elem);

					if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
		 * **Get** the current scrollPosition or **Set** a new method to calculate it.  
		 * -> **GET**:
		 * When used as a getter this function will return the current scroll position.  
		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
		 *
		 * -> **SET**:
		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
		 *
		 * To change the current scroll position please use `Controller.scrollTo()`.
		 * @public
		 *
		 * @example
		 * // get the current scroll Position
		 * var scrollPos = controller.scrollPos();
		 *
		 * // set a new scroll position calculation method
		 * controller.scrollPos(function () {
		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
		 * });
		 *
		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
		 */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) { // get
				return getScrollPos.call(Controller);
			} else { // set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
		 * **Get** all infos or one in particular about the controller.
		 * @public
		 * @example
		 * // returns the current scroll position (number)
		 * var scrollPos = controller.info("scrollPos");
		 *
		 * // returns all infos as an object
		 * var infos = controller.info();
		 *
		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
		 							 Valid options are:
		 							 ** `"size"` => the current viewport size of the container
		 							 ** `"vertical"` => true if vertical scrolling, otherwise false
		 							 ** `"scrollPos"` => the current scroll position
		 							 ** `"scrollDirection"` => the last known direction of the scroll
		 							 ** `"container"` => the container element
		 							 ** `"isDocument"` => true if container element is the document.
		 * @returns {(mixed|object)} The requested info(s).
		 */
		this.info = function (about) {
			var values = {
				size: _viewPortSize, // contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) { // get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
		 * **Get** or **Set** the current loglevel option value.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var loglevel = controller.loglevel();
		 *
		 * // set a new value
		 * controller.loglevel(3);
		 *
		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
		 */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) { // get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) { // set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
		 * **Get** or **Set** the current enabled state of the controller.  
		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var enabled = controller.enabled();
		 *
		 * // disable the controller
		 * controller.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
		 * Destroy the Controller, all Scenes and everything.
		 * @public
		 *
		 * @example
		 * // without resetting the scenes
		 * controller = controller.destroy();
		 *
		 * // with scene reset
		 * controller = controller.destroy(true);
		 *
		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};


	/**
	 * A Scene defines where the controller should react and how.
	 *
	 * @class
	 *
	 * @example
	 * // create a standard scene and add it to a controller
	 * new ScrollMagic.Scene()
	 *		.addTo(controller);
	 *
	 * // create a scene with custom options and assign a handler to it.
	 * var scene = new ScrollMagic.Scene({
	 * 		duration: 100,
	 *		offset: 200,
	 *		triggerHook: "onEnter",
	 *		reverse: false
	 * });
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
	 							   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
	 							   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
	 * @param {(number|string|function)} [options.duration=0] - The duration of the scene. 
	 					Please see `Scene.duration()` for details.
	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
	 															  Can also be defined using a string:
	 															  ** `"onEnter"` => `1`
	 															  ** `"onCenter"` => `0.5`
	 															  ** `"onLeave"` => `0`
	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 										  ** `0` => silent
	 										  ** `1` => errors
	 										  ** `2` => errors, warnings
	 										  ** `3` => errors, warnings, debuginfo
	 * 
	 */
	ScrollMagic.Scene = function (options) {

		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */

		var
			NAMESPACE = 'ScrollMagic.Scene',
			SCENE_STATE_BEFORE = 'BEFORE',
			SCENE_STATE_DURING = 'DURING',
			SCENE_STATE_AFTER = 'AFTER',
			DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */

		var
			Scene = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_state = SCENE_STATE_BEFORE,
			_progress = 0,
			_scrollOffset = {
				start: 0,
				end: 0
			}, // reflects the controllers's scroll position for the start and end of the scene respectively
			_triggerPos = 0,
			_enabled = true,
			_durationUpdateMethod,
			_controller;

		/**
		 * Internal constructor function of the ScrollMagic Scene
		 * @private
		 */
		var construct = function () {
			for (var key in _options) { // check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

		/*
		 * ----------------------------------------------------------------
		 * Event Management
		 * ----------------------------------------------------------------
		 */

		var _listeners = {};
		/**
		 * Scene start event.  
		 * Fires whenever the scroll position its the starting point of the scene.  
		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#start
		 *
		 * @example
		 * scene.on("start", function (event) {
		 * 	console.log("Hit start point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene end event.  
		 * Fires whenever the scroll position its the ending point of the scene.  
		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#end
		 *
		 * @example
		 * scene.on("end", function (event) {
		 * 	console.log("Hit end point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene enter event.  
		 * Fires whenever the scene enters the "DURING" state.  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#enter
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 * 	console.log("Scene entered.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene - always `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene leave event.  
		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#leave
		 *
		 * @example
		 * scene.on("leave", function (event) {
		 * 	console.log("Scene left.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene update event.  
		 * Fires whenever the scene is updated (but not necessarily changes the progress).
		 *
		 * @event ScrollMagic.Scene#update
		 *
		 * @example
		 * scene.on("update", function (event) {
		 * 	console.log("Scene updated.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
		 * @property {number} event.scrollPos - The current scroll position of the container
		 */
		/**
		 * Scene progress event.  
		 * Fires whenever the progress of the scene changes.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#progress
		 *
		 * @example
		 * scene.on("progress", function (event) {
		 * 	console.log("Scene progress changed to " + event.progress);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene change event.  
		 * Fires whenvever a property of the scene is changed.
		 *
		 * @event ScrollMagic.Scene#change
		 *
		 * @example
		 * scene.on("change", function (event) {
		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.what - Indicates what value has been changed
		 * @property {mixed} event.newval - The new value of the changed property
		 */
		/**
		 * Scene shift event.  
		 * Fires whenvever the start or end **scroll offset** of the scene change.
		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
		 *
		 * @event ScrollMagic.Scene#shift
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("shift", function (event) {
		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.reason - Indicates why the scene has shifted
		 */
		/**
		 * Scene destroy event.  
		 * Fires whenvever the scene is destroyed.
		 * This can be used to tidy up custom behaviour used in events.
		 *
		 * @event ScrollMagic.Scene#destroy
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 *        // add custom action
		 *        $("#my-elem").left("200");
		 *      })
		 *      .on("destroy", function (event) {
		 *        // reset my element to start position
		 *        if (event.reset) {
		 *          $("#my-elem").left("0");
		 *        }
		 *      });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
		 */
		/**
		 * Scene add event.  
		 * Fires when the scene is added to a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#add
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("add", function (event) {
		 * 	console.log('Scene was added to a new controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.controller - The controller object the scene was added to.
		 */
		/**
		 * Scene remove event.  
		 * Fires when the scene is removed from a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#remove
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("remove", function (event) {
		 * 	console.log('Scene was removed from its controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 */

		/**
		 * Add one ore more event listener.  
		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
		 * @method ScrollMagic.Scene#on
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update progress start end enter leave", callback);
		 *
		 * @param {string} names - The name or names of the event the callback should be attached to.
		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var
						nameparts = fullname.split('.'),
						eventname = nameparts[0],
						namespace = nameparts[1];
					if (eventname != "*") { // disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
		 * Remove one or more event listener.
		 * @method ScrollMagic.Scene#off
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update", callback);
		 * // remove listeners
		 * scene.off("change update", callback);
		 *
		 * @param {string} names - The name or names of the event that should be removed.
		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var
					nameparts = fullname.split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1] || '',
					removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var
						list = _listeners[remove] || [],
						i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
		 * Trigger an event.
		 * @method ScrollMagic.Scene#trigger
		 *
		 * @example
		 * this.trigger("change");
		 *
		 * @param {string} name - The name of the event that should be triggered.
		 * @param {object} [vars] - An object containing info that should be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.trigger = function (name, vars) {
			if (name) {
				var
					nameparts = name.trim().split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1],
					listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene
			.on("change.internal", function (e) {
				if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
					if (e.what === "triggerElement") {
						updateTriggerElementPosition();
					} else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
						Scene.update();
					}
				}
			})
			.on("shift.internal", function (e) {
				updateScrollOffset();
				Scene.update(); // update scene to reflect new position
			});

		/**
		 * Send a debug message to the console.
		 * @private
		 * but provided publicly with _log for plugins
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
		 * Add the scene to a controller.  
		 * This is the equivalent to `Controller.addScene(scene)`.
		 * @method ScrollMagic.Scene#addTo
		 *
		 * @example
		 * // add a scene to a ScrollMagic Controller
		 * scene.addTo(controller);
		 *
		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) { // was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
		 * **Get** or **Set** the current enabled state of the scene.  
		 * This can be used to disable this scene without removing or destroying it.
		 * @method ScrollMagic.Scene#enabled
		 *
		 * @example
		 * // get the current value
		 * var enabled = scene.enabled();
		 *
		 * // disable the scene
		 * scene.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
		 * Remove the scene from the controller.  
		 * This is the equivalent to `Controller.removeScene(scene)`.
		 * The scene will not be updated anymore until you readd it to a controller.
		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
		 * @method ScrollMagic.Scene#remove
		 * @example
		 * // remove the scene from its controller
		 * scene.remove();
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
		 * Destroy the scene and everything.
		 * @method ScrollMagic.Scene#destroy
		 * @example
		 * // destroy the scene without resetting the pin and tween to their initial positions
		 * scene = scene.destroy();
		 *
		 * // destroy the scene and reset the pin and tween
		 * scene = scene.destroy(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};


		/**
		 * Updates the Scene to reflect the current state.  
		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @method ScrollMagic.Scene#update
		 * @example
		 * // update the scene on next tick
		 * scene.update();
		 *
		 * // update the scene immediately
		 * scene.update(true);
		 *
		 * @fires Scene.update
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
		 * @returns {Scene} Parent object for chaining.
		 */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var
							scrollPos = _controller.info("scrollPos"),
							newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
		 * Updates dynamic scene variables like the trigger element position or the duration.
		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
		 * 
		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
		 *
		 * @method ScrollMagic.Scene#refresh
		 * @since 1.1.0
		 * @example
		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
		 * 
		 * // change the position of the trigger
		 * $("#trigger").css("top", 500);
		 * // immediately let the scene know of this change
		 * scene.refresh();
		 *
		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
		 * @fires {@link Scene.change}, if the duration changed
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
		 * **Get** or **Set** the scene's progress.  
		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
		 * The order in which the events are fired depends on the duration of the scene:
		 *  1. Scenes with `duration == 0`:  
		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
		 *  When the trigger position of the scene is passed the events are always fired in this order:  
		 *  `enter`, `start`, `progress` when scrolling forward  
		 *  and  
		 *  `progress`, `start`, `leave` when scrolling in reverse
		 *  2. Scenes with `duration > 0`:  
		 *  Scenes with a set duration have a defined start and end point.  
		 *  When scrolling past the start position of the scene it will fire these events in this order:  
		 *  `enter`, `start`, `progress`  
		 *  When continuing to scroll and passing the end point it will fire these events:  
		 *  `progress`, `end`, `leave`  
		 *  When reversing through the end point these events are fired:  
		 *  `enter`, `end`, `progress`  
		 *  And when continuing to scroll past the start position in reverse it will fire:  
		 *  `progress`, `start`, `leave`  
		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
		 * 
		 * In short:  
		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
		 * `start` and `end` will always trigger at their respective position.
		 * 
		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
		 * 
		 * @method ScrollMagic.Scene#progress
		 * @example
		 * // get the current scene progress
		 * var progress = scene.progress();
		 *
		 * // set new scene progress
		 * scene.progress(0.3);
		 *
		 * @fires {@link Scene.enter}, when used as setter
		 * @fires {@link Scene.start}, when used as setter
		 * @fires {@link Scene.progress}, when used as setter
		 * @fires {@link Scene.end}, when used as setter
		 * @fires {@link Scene.leave}, when used as setter
		 *
		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
		 * @returns {number} `get` -  Current scene progress.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */
		this.progress = function (progress) {
			if (!arguments.length) { // get
				return _progress;
			} else { // set
				var
					doUpdate = false,
					oldState = _state,
					scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
					reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var
						eventVars = {
							progress: _progress,
							state: _state,
							scrollDirection: scrollDirection
						},
						stateChanged = _state != oldState;

					var trigger = function (eventName) { // tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) { // enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) { // leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};


		/**
		 * Update the start and end scrollOffset of the container.
		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
		 * Is called, when:
		 *   - Scene event "change" is called with: offset, triggerHook, duration 
		 *   - scroll container event "resize" is called
		 *   - the position of the triggerElement changes
		 *   - the controller changes -> addTo()
		 * @private
		 */
		var updateScrollOffset = function () {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
		 * Updates the duration if set to a dynamic function.
		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.change}, if the duration changed
		 * @fires {@link Scene.shift}, if the duration changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateDuration = function (suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
		 * Updates the position of the triggerElement, if present.
		 * This method is called ...
		 *  - ... when the triggerElement is changed
		 *  - ... when the scene is added to a (new) controller
		 *  - ... in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.shift}, if the position changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateTriggerElementPosition = function (suppressEvents) {
			var
				elementPos = 0,
				telem = _options.triggerElement;
			if (_controller && (telem || _triggerPos > 0)) { // either an element exists or was removed and the triggerPos is still > 0
				if (telem) { // there currently a triggerElement set
					if (telem.parentNode) { // check if element is still attached to DOM
						var
							controllerInfo = _controller.info(),
							containerOffset = _util.get.offset(controllerInfo.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
							param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?

						// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
						while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
							telem = telem.parentNode;
						}

						var elementOffset = _util.get.offset(telem);

						if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
							containerOffset[param] -= _controller.scrollPos();
						}

						elementPos = elementOffset[param] - containerOffset[param];

					} else { // there was an element, but it was removed from DOM
						log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
						Scene.triggerElement(undefined); // unset, so a change event is triggered
					}
				}

				var changed = elementPos != _triggerPos;
				_triggerPos = elementPos;
				if (changed && !suppressEvents) {
					Scene.trigger("shift", {
						reason: "triggerElementPosition"
					});
				}
			}
		};

		/**
		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
		 * @private
		 */
		var onContainerResize = function (e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};


		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function (val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function () {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod.call(Scene));
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
		 * Checks the validity of a specific or all options and reset to default if neccessary.
		 * @private
		 */
		var validateOption = function (check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) { // there is a validation method for this option
					try { // validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) { // validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
		 * Helper used by the setter/getters for scene options
		 * @private
		 */
		var changeOption = function (varname, newval) {
			var
				changed = false,
				oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function (optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) { // get
						return _options[optionName];
					} else {
						if (optionName === "duration") { // new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) { // set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
		 * **Get** or **Set** the duration option value.
		 *
		 * As a **setter** it accepts three types of parameters:
		 * 1. `number`: Sets the duration of the scene to exactly this amount of pixels.  
		 *   This means the scene will last for exactly this amount of pixels scrolled. Sub-Pixels are also valid.
		 *   A value of `0` means that the scene is 'open end' and no end will be triggered. Pins will never unpin and animations will play independently of scroll progress.
		 * 2. `string`: Always updates the duration relative to parent scroll container.  
		 *   For example `"100%"` will keep the duration always exactly at the inner height of the scroll container.
		 *   When scrolling vertically the width is used for reference respectively.
		 * 3. `function`: The supplied function will be called to return the scene duration.
		 *   This is useful in setups where the duration depends on other elements who might change size. By supplying a function you can return a value instead of updating potentially multiple scene durations.  
		 *   The scene can be referenced inside the callback using `this`.
		 *   _**WARNING:** This is an easy way to kill performance, as the callback will be executed every time `Scene.refresh()` is called, which happens a lot. The interval is defined by the controller (see ScrollMagic.Controller option `refreshInterval`).  
		 *   It's recomended to avoid calculations within the function and use cached variables as return values.  
		 *   This counts double if you use the same function for multiple scenes._
		 *
		 * @method ScrollMagic.Scene#duration
		 * @example
		 * // get the current duration value
		 * var duration = scene.duration();
		 *
		 * // set a new duration
		 * scene.duration(300);
		 *
		 * // set duration responsively to container size
		 * scene.duration("100%");
		 *
		 * // use a function to randomize the duration for some reason.
		 * var durationValueCache;
		 * function durationCallback () {
		 *   return durationValueCache;
		 * }
		 * function updateDuration () {
		 *   durationValueCache = Math.random() * 100;
		 * }
		 * updateDuration(); // set to initial value
		 * scene.duration(durationCallback); // set duration callback
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string|function)} [newDuration] - The new duration setting for the scene.
		 * @returns {number} `get` -  Current scene duration.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the offset option value.
		 * @method ScrollMagic.Scene#offset
		 * @example
		 * // get the current offset
		 * var offset = scene.offset();
		 *
		 * // set a new offset
		 * scene.offset(100);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {number} [newOffset] - The new offset of the scene.
		 * @returns {number} `get` -  Current scene offset.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerElement option value.
		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
		 * @method ScrollMagic.Scene#triggerElement
		 * @example
		 * // get the current triggerElement
		 * var triggerElement = scene.triggerElement();
		 *
		 * // set a new triggerElement using a selector
		 * scene.triggerElement("#trigger");
		 * // set a new triggerElement using a DOM object
		 * scene.triggerElement(document.getElementById("trigger"));
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
		 * @returns {(string|object)} `get` -  Current triggerElement.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerHook option value.
		 * @method ScrollMagic.Scene#triggerHook
		 * @example
		 * // get the current triggerHook value
		 * var triggerHook = scene.triggerHook();
		 *
		 * // set a new triggerHook using a string
		 * scene.triggerHook("onLeave");
		 * // set a new triggerHook using a number
		 * scene.triggerHook(0.7);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the reverse option value.
		 * @method ScrollMagic.Scene#reverse
		 * @example
		 * // get the current reverse option
		 * var reverse = scene.reverse();
		 *
		 * // set new reverse option
		 * scene.reverse(false);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
		 * @returns {boolean} `get` -  Current reverse option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the loglevel option value.
		 * @method ScrollMagic.Scene#loglevel
		 * @example
		 * // get the current loglevel
		 * var loglevel = scene.loglevel();
		 *
		 * // set new loglevel
		 * scene.loglevel(3);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
		 * @returns {number} `get` -  Current loglevel.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** the associated controller.
		 * @method ScrollMagic.Scene#controller
		 * @example
		 * // get the controller of a scene
		 * var controller = scene.controller();
		 *
		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
		 */
		this.controller = function () {
			return _controller;
		};

		/**
		 * **Get** the current state.
		 * @method ScrollMagic.Scene#state
		 * @example
		 * // get the current state
		 * var state = scene.state();
		 *
		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
		 */
		this.state = function () {
			return _state;
		};

		/**
		 * **Get** the current scroll offset for the start of the scene.  
		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
		 * @method ScrollMagic.Scene#scrollOffset
		 * @example
		 * // get the current scroll offset for the start and end of the scene.
		 * var start = scene.scrollOffset();
		 * var end = scene.scrollOffset() + scene.duration();
		 * console.log("the scene starts at", start, "and ends at", end);
		 *
		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
		 */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
		 * **Get** the trigger position of the scene (including the value of the `offset` option).  
		 * @method ScrollMagic.Scene#triggerPosition
		 * @example
		 * // get the scene's trigger position
		 * var triggerPosition = scene.triggerPosition();
		 *
		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
		 */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};


		var
			_pin,
			_pinOptions;

		Scene
			.on("shift.internal", function (e) {
				var durationChanged = e.reason === "duration";
				if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
					// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
					updatePinState();
				}
				if (durationChanged) {
					updatePinDimensions();
				}
			})
			.on("progress.internal", function (e) {
				updatePinState();
			})
			.on("add.internal", function (e) {
				updatePinDimensions();
			})
			.on("destroy.internal", function (e) {
				Scene.removePin(e.reset);
			});
		/**
		 * Update the pin state.
		 * @private
		 */
		var updatePinState = function (forceUnpin) {
			if (_pin && _controller) {
				var
					containerInfo = _controller.info(),
					pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins

				if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var
						fixedPos = _util.get.offset(_pinOptions.spacer, true), // get viewport position of spacer
						scrollDistance = _options.reverse || _options.duration === 0 ?
						containerInfo.scrollPos - _scrollOffset.start // quicker
						:
						Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress

					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var
						newCSS = {
							position: _pinOptions.inFlow ? "relative" : "absolute",
							top: 0,
							left: 0
						},
						change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) { // only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
		 * Update the pin spacer and/or element size.
		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
		 * @private
		 */
		var updatePinDimensions = function () {
			if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
				var
					after = (_state === SCENE_STATE_AFTER),
					before = (_state === SCENE_STATE_BEFORE),
					during = (_state === SCENE_STATE_DURING),
					vertical = _controller.info("vertical"),
					pinTarget = _pinOptions.spacer.firstChild, // usually the pined element but can also be another spacer (cascaded pins)
					marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
					css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
		 * Updates the Pin state (in certain scenarios)
		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
		 * So this function is called on resize and scroll of the document.
		 * @private
		 */
		var updatePinInContainer = function () {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
		 * Updates the Pin spacer size state (in certain scenarios)
		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
		 * So this function is called on resize of the container.
		 * @private
		 */
		var updateRelativePinSpacer = function () {
			if (_controller && _pin && // well, duh
				_state === SCENE_STATE_DURING && // element in pinned state?
				( // is width or height relatively sized, but not in relation to body? then we need to recalc.
					((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) ||
					(_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))
				)
			) {
				updatePinDimensions();
			}
		};

		/**
		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
		 * @private
		 */
		var onMousewheelOverPin = function (e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
		 * Pin an element for the duration of the scene.
		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
		 * Make sure only one pin is applied to an element at the same time.
		 * An element can be pinned multiple times, but only successively.
		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
		 * @method ScrollMagic.Scene#setPin
		 * @example
		 * // pin element and push all following elements down by the amount of the pin duration.
		 * scene.setPin("#pin");
		 *
		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
		 * scene.setPin("#pin", {pushFollowers: false});
		 *
		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
		 * @param {object} [settings] - settings for the pin
		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
		 												   Ignored, when duration is `0`.
		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setPin = function (element, settings) {
			var
				defaultSettings = {
					pushFollowers: true,
					spacerClass: "scrollmagic-pin-spacer"
				};
			var pushFollowersActivelySet = settings && settings.hasOwnProperty('pushFollowers');
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) { // preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}

			}
			_pin = element;

			var
				parentDisplay = _pin.parentNode.style.display,
				boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var
				inFlow = _util.css(_pin, "position") != "absolute",
				pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
				sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.

			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && pushFollowersActivelySet && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var
				spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
				spacerCSS = _util.extend(pinCSS, {
					position: inFlow ? "relative" : "absolute",
					boxSizing: "content-box",
					mozBoxSizing: "content-box",
					webkitBoxSizing: "content-box"
				});

			if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow, // stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var
					pinInlineCSS = _pin.style,
					copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
		 * Remove the pin from the scene.
		 * @method ScrollMagic.Scene#removePin
		 * @example
		 * // remove the pin from the scene without resetting it (the spacer is not removed)
		 * scene.removePin();
		 *
		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
		 * scene.removePin(true);
		 *
		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) { // if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
						var
							style = _pinOptions.spacer.style,
							values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
							margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};


		var
			_cssClasses,
			_cssClassElems = [];

		Scene
			.on("destroy.internal", function (e) {
				Scene.removeClassToggle(e.reset);
			});
		/**
		 * Define a css class modification while the scene is active.  
		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
		 * @method ScrollMagic.Scene#setClassToggle
		 * @example
		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
		 * scene.setClassToggle("#my-elem", "myclass");
		 *
		 * // add multiple classes to multiple elements defined by the selector '.classChange'
		 * scene.setClassToggle(".classChange", "class1 class2 class3");
		 *
		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
		 * Remove the class binding from the scene.
		 * @method ScrollMagic.Scene#removeClassToggle
		 * @example
		 * // remove class binding from the scene without reset
		 * scene.removeClassToggle();
		 *
		 * // remove class binding and remove the changes it caused
		 * scene.removeClassToggle(true);
		 *
		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function (val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function (val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem && elem.parentNode) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function (val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function (val) {
				return !!val; // force boolean
			},
			loglevel: function (val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		}, // holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"], // list of options that trigger a `shift` event
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 * TODO: DOC (private for dev)
	 */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};



	/**
	 * TODO: DOCS (private for dev)
	 * @class
	 * @private
	 */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

	/*
	 * TODO: DOCS (private for dev)
	 */

	var _util = ScrollMagic._util = (function (window) {
		var U = {},
			i;

		/**
		 * ------------------------------
		 * internal helpers
		 * ------------------------------
		 */

		// parse float and fall back to 0.
		var floatval = function (number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function (elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function (which, elem, outer, includeMargin) {
			elem = (elem === document) ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function (str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
		 * ------------------------------
		 * external helpers
		 * ------------------------------
		 */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var
			lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function (callback) {
				var
					currTime = new Date().getTime(),
					timeToCall = Math.max(0, 16 - (currTime - lastTime)),
					id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function (id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var
			loglevels = ["error", "warn", "log"],
			console = window.console || {};

		console.log = console.log || function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
				time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
				method = loglevels[loglevel - 1],
				args = Array.prototype.splice.call(arguments, 1),
				func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
		 * ------------------------------
		 * type testing
		 * ------------------------------
		 */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
		};
		_type.DomElement = function (o) {
			return (
				typeof HTMLElement === "object" || typeof HTMLElement === "function" ? o instanceof HTMLElement || o instanceof SVGElement : //DOM2
				o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
			);
		};

		/**
		 * ------------------------------
		 * DOM Element info
		 * ------------------------------
		 */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) { // invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector) || selector instanceof NodeList) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) { // check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) { // clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
		 * ------------------------------
		 * DOM Element manipulation
		 * ------------------------------
		 */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.add(classname);
				else
					elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.remove(classname);
				else
					elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var
					obj = {},
					style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {}));


	ScrollMagic.Scene.prototype.addIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}

	return ScrollMagic;
}));

/***/ }),

/***/ 4868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _toPrimitive)
/* harmony export */ });
if (514 == __webpack_require__.j) {
	/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3940);
}

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ 7543:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _toPropertyKey)
/* harmony export */ });
if (514 == __webpack_require__.j) {
	/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3940);
}
if (514 == __webpack_require__.j) {
	/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4868);
}


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ 3940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ 9000:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4350);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (Symbol) : null));


/***/ }),

/***/ 4468:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9000);
if (514 == __webpack_require__.j) {
	/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5171);
}
if (514 == __webpack_require__.j) {
	/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3869);
}




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? (0,_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value)
    : (0,_objectToString_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (baseGetTag) : null));


/***/ }),

/***/ 2219:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (514 == __webpack_require__.j) {
	/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4691);
}


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, (0,_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (baseTrim) : null));


/***/ }),

/***/ 5171:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9000);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (getRawTag) : null));


/***/ }),

/***/ 3869:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (objectToString) : null));


/***/ }),

/***/ 4350:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ _root)
});

;// CONCATENATED MODULE: ../node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const _freeGlobal = (freeGlobal);

;// CONCATENATED MODULE: ../node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

/* harmony default export */ const _root = (root);


/***/ }),

/***/ 4691:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (trimmedEndIndex) : null));


/***/ }),

/***/ 4829:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (514 == __webpack_require__.j) {
	/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(369);
}
if (514 == __webpack_require__.j) {
	/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4402);
}
if (514 == __webpack_require__.j) {
	/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3548);
}




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = (0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(wait) || 0;
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax((0,_toNumber_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge((0,_now_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
  }

  function debounced() {
    var time = (0,_now_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (debounce) : null));


/***/ }),

/***/ 369:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (isObject) : null));


/***/ }),

/***/ 8742:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (isObjectLike) : null));


/***/ }),

/***/ 4878:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (514 == __webpack_require__.j) {
	/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4468);
}
if (514 == __webpack_require__.j) {
	/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8742);
}



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (isSymbol) : null));


/***/ }),

/***/ 4402:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (514 == __webpack_require__.j) {
	/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4350);
}


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Date.now();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (now) : null));


/***/ }),

/***/ 3548:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
if (514 == __webpack_require__.j) {
	/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2219);
}
if (514 == __webpack_require__.j) {
	/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(369);
}
if (514 == __webpack_require__.j) {
	/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4878);
}




/** Used as references for various `Number` constants. */
var NAN = (/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (0 / 0) : null);

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = (/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (parseInt) : null);

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value)) {
    return NAN;
  }
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,_isObject_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = (0,_baseTrim_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((/* runtime-dependent pure expression or super */ 514 == __webpack_require__.j ? (toNumber) : null));


/***/ })

}]);