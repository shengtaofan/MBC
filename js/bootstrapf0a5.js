"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[672],{

/***/ 8655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ base_component)
});

;// CONCATENATED MODULE: ../node_modules/bs5/js/src/dom/data.js
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const elementMap = new Map()

/* harmony default export */ const data = ({
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map())
    }

    const instanceMap = elementMap.get(element)

    // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`)
      return
    }

    instanceMap.set(key, instance)
  },

  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null
    }

    return null
  },

  remove(element, key) {
    if (!elementMap.has(element)) {
      return
    }

    const instanceMap = elementMap.get(element)

    instanceMap.delete(key)

    // free up element references if there are no instances left for an element
    if (instanceMap.size === 0) {
      elementMap.delete(element)
    }
  }
});

// EXTERNAL MODULE: ../node_modules/bs5/js/src/dom/event-handler.js
var event_handler = __webpack_require__(9660);
// EXTERNAL MODULE: ../node_modules/bs5/js/src/util/config.js
var config = __webpack_require__(8998);
// EXTERNAL MODULE: ../node_modules/bs5/js/src/util/index.js
var util = __webpack_require__(1542);
;// CONCATENATED MODULE: ../node_modules/bs5/js/src/base-component.js
/**
 * --------------------------------------------------------------------------
 * Bootstrap base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * Constants
 */

const VERSION = '5.3.0'

/**
 * Class definition
 */

class BaseComponent extends config/* default */.Z {
  constructor(element, config) {
    super()

    element = (0,util/* getElement */.sb)(element)
    if (!element) {
      return
    }

    this._element = element
    this._config = this._getConfig(config)

    data.set(this._element, this.constructor.DATA_KEY, this)
  }

  // Public
  dispose() {
    data.remove(this._element, this.constructor.DATA_KEY)
    event_handler/* default */.Z.off(this._element, this.constructor.EVENT_KEY)

    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null
    }
  }

  _queueCallback(callback, element, isAnimated = true) {
    (0,util/* executeAfterTransition */.e0)(callback, element, isAnimated)
  }

  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element)
    config = this._configAfterMerge(config)
    this._typeCheckConfig(config)
    return config
  }

  // Static
  static getInstance(element) {
    return data.get((0,util/* getElement */.sb)(element), this.DATA_KEY)
  }

  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null)
  }

  static get VERSION() {
    return VERSION
  }

  static get DATA_KEY() {
    return `bs.${this.NAME}`
  }

  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`
  }

  static eventName(name) {
    return `${name}${this.EVENT_KEY}`
  }
}

/* harmony default export */ const base_component = (BaseComponent);


/***/ }),

/***/ 8719:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ../node_modules/bs5/js/src/base-component.js + 1 modules
var base_component = __webpack_require__(8655);
// EXTERNAL MODULE: ../node_modules/bs5/js/src/dom/event-handler.js
var event_handler = __webpack_require__(9660);
// EXTERNAL MODULE: ../node_modules/bs5/js/src/dom/manipulator.js
var manipulator = __webpack_require__(4089);
// EXTERNAL MODULE: ../node_modules/bs5/js/src/dom/selector-engine.js
var selector_engine = __webpack_require__(4879);
// EXTERNAL MODULE: ../node_modules/bs5/js/src/util/index.js
var util = __webpack_require__(1542);
// EXTERNAL MODULE: ../node_modules/bs5/js/src/util/config.js
var config = __webpack_require__(8998);
;// CONCATENATED MODULE: ../node_modules/bs5/js/src/util/swipe.js
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * Constants
 */

const NAME = 'swipe'
const EVENT_KEY = '.bs.swipe'
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY}`
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY}`
const EVENT_TOUCHEND = `touchend${EVENT_KEY}`
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY}`
const EVENT_POINTERUP = `pointerup${EVENT_KEY}`
const POINTER_TYPE_TOUCH = 'touch'
const POINTER_TYPE_PEN = 'pen'
const CLASS_NAME_POINTER_EVENT = 'pointer-event'
const SWIPE_THRESHOLD = 40

const Default = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}

const DefaultType = {
  endCallback: '(function|null)',
  leftCallback: '(function|null)',
  rightCallback: '(function|null)'
}

/**
 * Class definition
 */

class Swipe extends config/* default */.Z {
  constructor(element, config) {
    super()
    this._element = element

    if (!element || !Swipe.isSupported()) {
      return
    }

    this._config = this._getConfig(config)
    this._deltaX = 0
    this._supportPointerEvents = Boolean(window.PointerEvent)
    this._initEvents()
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  dispose() {
    event_handler/* default */.Z.off(this._element, EVENT_KEY)
  }

  // Private
  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX

      return
    }

    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX
    }
  }

  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX
    }

    this._handleSwipe()
    ;(0,util/* execute */.ht)(this._config.endCallback)
  }

  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ?
      0 :
      event.touches[0].clientX - this._deltaX
  }

  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX)

    if (absDeltaX <= SWIPE_THRESHOLD) {
      return
    }

    const direction = absDeltaX / this._deltaX

    this._deltaX = 0

    if (!direction) {
      return
    }

    (0,util/* execute */.ht)(direction > 0 ? this._config.rightCallback : this._config.leftCallback)
  }

  _initEvents() {
    if (this._supportPointerEvents) {
      event_handler/* default */.Z.on(this._element, EVENT_POINTERDOWN, event => this._start(event))
      event_handler/* default */.Z.on(this._element, EVENT_POINTERUP, event => this._end(event))

      this._element.classList.add(CLASS_NAME_POINTER_EVENT)
    } else {
      event_handler/* default */.Z.on(this._element, EVENT_TOUCHSTART, event => this._start(event))
      event_handler/* default */.Z.on(this._element, EVENT_TOUCHMOVE, event => this._move(event))
      event_handler/* default */.Z.on(this._element, EVENT_TOUCHEND, event => this._end(event))
    }
  }

  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)
  }

  // Static
  static isSupported() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
  }
}

/* harmony default export */ const swipe = (Swipe);

;// CONCATENATED MODULE: ../node_modules/bs5/js/src/carousel.js
/**
 * --------------------------------------------------------------------------
 * Bootstrap carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */








/**
 * Constants
 */

const carousel_NAME = 'carousel'
const DATA_KEY = 'bs.carousel'
const carousel_EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const ARROW_LEFT_KEY = 'ArrowLeft'
const ARROW_RIGHT_KEY = 'ArrowRight'
const TOUCHEVENT_COMPAT_WAIT = 500 // Time for mouse compat events to fire after touch

const ORDER_NEXT = 'next'
const ORDER_PREV = 'prev'
const DIRECTION_LEFT = 'left'
const DIRECTION_RIGHT = 'right'

const EVENT_SLIDE = `slide${carousel_EVENT_KEY}`
const EVENT_SLID = `slid${carousel_EVENT_KEY}`
const EVENT_KEYDOWN = `keydown${carousel_EVENT_KEY}`
const EVENT_MOUSEENTER = `mouseenter${carousel_EVENT_KEY}`
const EVENT_MOUSELEAVE = `mouseleave${carousel_EVENT_KEY}`
const EVENT_DRAG_START = `dragstart${carousel_EVENT_KEY}`
const EVENT_LOAD_DATA_API = `load${carousel_EVENT_KEY}${DATA_API_KEY}`
const EVENT_CLICK_DATA_API = `click${carousel_EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_CAROUSEL = 'carousel'
const CLASS_NAME_ACTIVE = 'active'
const CLASS_NAME_SLIDE = 'slide'
const CLASS_NAME_END = 'carousel-item-end'
const CLASS_NAME_START = 'carousel-item-start'
const CLASS_NAME_NEXT = 'carousel-item-next'
const CLASS_NAME_PREV = 'carousel-item-prev'

const SELECTOR_ACTIVE = '.active'
const SELECTOR_ITEM = '.carousel-item'
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM
const SELECTOR_ITEM_IMG = '.carousel-item img'
const SELECTOR_INDICATORS = '.carousel-indicators'
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]'
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]'

const KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY]: DIRECTION_LEFT
}

const carousel_Default = {
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  ride: false,
  touch: true,
  wrap: true
}

const carousel_DefaultType = {
  interval: '(number|boolean)', // TODO:v6 remove boolean support
  keyboard: 'boolean',
  pause: '(string|boolean)',
  ride: '(boolean|string)',
  touch: 'boolean',
  wrap: 'boolean'
}

/**
 * Class definition
 */

class Carousel extends base_component/* default */.Z {
  constructor(element, config) {
    super(element, config)

    this._interval = null
    this._activeElement = null
    this._isSliding = false
    this.touchTimeout = null
    this._swipeHelper = null

    this._indicatorsElement = selector_engine/* default */.Z.findOne(SELECTOR_INDICATORS, this._element)
    this._addEventListeners()

    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle()
    }
  }

  // Getters
  static get Default() {
    return carousel_Default
  }

  static get DefaultType() {
    return carousel_DefaultType
  }

  static get NAME() {
    return carousel_NAME
  }

  // Public
  next() {
    this._slide(ORDER_NEXT)
  }

  nextWhenVisible() {
    // FIXME TODO use `document.visibilityState`
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && (0,util/* isVisible */.pn)(this._element)) {
      this.next()
    }
  }

  prev() {
    this._slide(ORDER_PREV)
  }

  pause() {
    if (this._isSliding) {
      (0,util/* triggerTransitionEnd */.S3)(this._element)
    }

    this._clearInterval()
  }

  cycle() {
    this._clearInterval()
    this._updateInterval()

    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
  }

  _maybeEnableCycle() {
    if (!this._config.ride) {
      return
    }

    if (this._isSliding) {
      event_handler/* default */.Z.one(this._element, EVENT_SLID, () => this.cycle())
      return
    }

    this.cycle()
  }

  to(index) {
    console.log(index)
    const items = this._getItems()
    if (index > items.length - 1 || index < 0) {
      return
    }

    if (this._isSliding) {
      event_handler/* default */.Z.one(this._element, EVENT_SLID, () => this.to(index))
      return
    }

    const activeIndex = this._getItemIndex(this._getActive())
    if (activeIndex === index) {
      return
    }

    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV

    this._slide(order, items[index])
  }

  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose()
    }

    super.dispose()
  }

  // Private
  _configAfterMerge(config) {
    config.defaultInterval = config.interval
    return config
  }

  _addEventListeners() {
    if (this._config.keyboard) {
      event_handler/* default */.Z.on(this._element, EVENT_KEYDOWN, event => this._keydown(event))
    }

    if (this._config.pause === 'hover') {
      event_handler/* default */.Z.on(this._element, EVENT_MOUSEENTER, () => this.pause())
      event_handler/* default */.Z.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle())
    }

    if (this._config.touch && swipe.isSupported()) {
      this._addTouchEventListeners()
    }
  }

  _addTouchEventListeners() {
    for (const img of selector_engine/* default */.Z.find(SELECTOR_ITEM_IMG, this._element)) {
      event_handler/* default */.Z.on(img, EVENT_DRAG_START, event => event.preventDefault())
    }

    const endCallBack = () => {
      if (this._config.pause !== 'hover') {
        return
      }

      // If it's a touch-enabled device, mouseenter/leave are fired as
      // part of the mouse compatibility events on first tap - the carousel
      // would stop cycling until user tapped out of it;
      // here, we listen for touchend, explicitly pause the carousel
      // (as if it's the second time we tap on it, mouseenter compat event
      // is NOT fired) and after a timeout (to allow for mouse compatibility
      // events to fire) we explicitly restart cycling

      this.pause()
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout)
      }

      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval)
    }

    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    }

    this._swipeHelper = new swipe(this._element, swipeConfig)
  }

  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return
    }

    const direction = KEY_TO_DIRECTION[event.key]
    if (direction) {
      event.preventDefault()
      this._slide(this._directionToOrder(direction))
    }
  }

  _getItemIndex(element) {
    return this._getItems().indexOf(element)
  }

  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return
    }

    const activeIndicator = selector_engine/* default */.Z.findOne(SELECTOR_ACTIVE, this._indicatorsElement)

    activeIndicator.classList.remove(CLASS_NAME_ACTIVE)
    activeIndicator.removeAttribute('aria-current')

    const newActiveIndicator = selector_engine/* default */.Z.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement)

    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE)
      newActiveIndicator.setAttribute('aria-current', 'true')
    }
  }

  _updateInterval() {
    const element = this._activeElement || this._getActive()

    if (!element) {
      return
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10)

    this._config.interval = elementInterval || this._config.defaultInterval
  }

  _slide(order, element = null) {
    if (this._isSliding) {
      return
    }

    const activeElement = this._getActive()
    const isNext = order === ORDER_NEXT
    const nextElement = element || (0,util/* getNextActiveElement */.Fj)(this._getItems(), activeElement, isNext, this._config.wrap)

    if (nextElement === activeElement) {
      return
    }

    const nextElementIndex = this._getItemIndex(nextElement)

    const triggerEvent = eventName => {
      return event_handler/* default */.Z.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      })
    }

    const slideEvent = triggerEvent(EVENT_SLIDE)

    if (slideEvent.defaultPrevented) {
      return
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      // TODO: change tests that use empty divs to avoid this check
      return
    }

    const isCycling = Boolean(this._interval)
    this.pause()

    this._isSliding = true

    this._setActiveIndicatorElement(nextElementIndex)
    this._activeElement = nextElement

    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV

    nextElement.classList.add(orderClassName)

    ;(0,util/* reflow */.nq)(nextElement)

    activeElement.classList.add(directionalClassName)
    nextElement.classList.add(directionalClassName)

    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName)
      nextElement.classList.add(CLASS_NAME_ACTIVE)

      activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName)

      this._isSliding = false

      triggerEvent(EVENT_SLID)
    }

    this._queueCallback(completeCallBack, activeElement, this._isAnimated())

    if (isCycling) {
      this.cycle()
    }
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE)
  }

  _getActive() {
    return selector_engine/* default */.Z.findOne(SELECTOR_ACTIVE_ITEM, this._element)
  }

  _getItems() {
    return selector_engine/* default */.Z.find(SELECTOR_ITEM, this._element)
  }

  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval)
      this._interval = null
    }
  }

  _directionToOrder(direction) {
    if ((0,util/* isRTL */.dZ)()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT
    }

    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV
  }

  _orderToDirection(order) {
    if ((0,util/* isRTL */.dZ)()) {
      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT
    }

    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Carousel.getOrCreateInstance(this, config)

      if (typeof config === 'number') {
        data.to(config)
        return
      }

      if (typeof config === 'string') {
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config]()
      }
    })
  }
}

/**
 * Data API implementation
 */

event_handler/* default */.Z.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, function (event) {
  const target = selector_engine/* default */.Z.getElementFromSelector(this)

  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return
  }

  event.preventDefault()

  const carousel = Carousel.getOrCreateInstance(target)
  const slideIndex = this.getAttribute('data-bs-slide-to')

  if (slideIndex) {
    carousel.to(slideIndex)
    carousel._maybeEnableCycle()
    return
  }

  if (manipulator/* default */.Z.getDataAttribute(this, 'slide') === 'next') {
    carousel.next()
    carousel._maybeEnableCycle()
    return
  }

  carousel.prev()
  carousel._maybeEnableCycle()
})

event_handler/* default */.Z.on(window, EVENT_LOAD_DATA_API, () => {
  const carousels = selector_engine/* default */.Z.find(SELECTOR_DATA_RIDE)

  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel)
  }
})

/**
 * jQuery
 */

;(0,util/* defineJQueryPlugin */.pF)(Carousel)

/* harmony default export */ const carousel = ((/* unused pure expression or super */ null && (Carousel)));


/***/ }),

/***/ 8838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8655);
/* harmony import */ var _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9660);
/* harmony import */ var _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4879);
/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1542);
/**
 * --------------------------------------------------------------------------
 * Bootstrap collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * Constants
 */

const NAME = 'collapse'
const DATA_KEY = 'bs.collapse'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_COLLAPSE = 'collapse'
const CLASS_NAME_COLLAPSING = 'collapsing'
const CLASS_NAME_COLLAPSED = 'collapsed'
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal'

const WIDTH = 'width'
const HEIGHT = 'height'

const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing'
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]'

const Default = {
  parent: null,
  toggle: true
}

const DefaultType = {
  parent: '(null|element)',
  toggle: 'boolean'
}

/**
 * Class definition
 */

class Collapse extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor(element, config) {
    super(element, config)

    this._isTransitioning = false
    this._triggerArray = []

    const toggleList = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.find(SELECTOR_DATA_TOGGLE)

    for (const elem of toggleList) {
      const selector = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getSelectorFromElement(elem)
      const filterElement = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.find(selector)
        .filter(foundElement => foundElement === this._element)

      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem)
      }
    }

    this._initializeChildren()

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown())
    }

    if (this._config.toggle) {
      this.toggle()
    }
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  toggle() {
    if (this._isShown()) {
      this.hide()
    } else {
      this.show()
    }
  }

  show() {
    if (this._isTransitioning || this._isShown()) {
      return
    }

    let activeChildren = []

    // find active children
    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES)
        .filter(element => element !== this._element)
        .map(element => Collapse.getOrCreateInstance(element, { toggle: false }))
    }

    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return
    }

    const startEvent = _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.trigger(this._element, EVENT_SHOW)
    if (startEvent.defaultPrevented) {
      return
    }

    for (const activeInstance of activeChildren) {
      activeInstance.hide()
    }

    const dimension = this._getDimension()

    this._element.classList.remove(CLASS_NAME_COLLAPSE)
    this._element.classList.add(CLASS_NAME_COLLAPSING)

    this._element.style[dimension] = 0

    this._addAriaAndCollapsedClass(this._triggerArray, true)
    this._isTransitioning = true

    const complete = () => {
      this._isTransitioning = false

      this._element.classList.remove(CLASS_NAME_COLLAPSING)
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)

      this._element.style[dimension] = ''

      _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.trigger(this._element, EVENT_SHOWN)
    }

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1)
    const scrollSize = `scroll${capitalizedDimension}`

    this._queueCallback(complete, this._element, true)
    this._element.style[dimension] = `${this._element[scrollSize]}px`
  }

  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return
    }

    const startEvent = _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.trigger(this._element, EVENT_HIDE)
    if (startEvent.defaultPrevented) {
      return
    }

    const dimension = this._getDimension()

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`

    ;(0,_util_index_js__WEBPACK_IMPORTED_MODULE_3__/* .reflow */ .nq)(this._element)

    this._element.classList.add(CLASS_NAME_COLLAPSING)
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)

    for (const trigger of this._triggerArray) {
      const element = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getElementFromSelector(trigger)

      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false)
      }
    }

    this._isTransitioning = true

    const complete = () => {
      this._isTransitioning = false
      this._element.classList.remove(CLASS_NAME_COLLAPSING)
      this._element.classList.add(CLASS_NAME_COLLAPSE)
      _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.trigger(this._element, EVENT_HIDDEN)
    }

    this._element.style[dimension] = ''

    this._queueCallback(complete, this._element, true)
  }

  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW)
  }

  // Private
  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle) // Coerce string values
    config.parent = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_3__/* .getElement */ .sb)(config.parent)
    return config
  }

  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT
  }

  _initializeChildren() {
    if (!this._config.parent) {
      return
    }

    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE)

    for (const element of children) {
      const selected = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getElementFromSelector(element)

      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected))
      }
    }
  }

  _getFirstLevelChildren(selector) {
    const children = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent)
    // remove children if greater depth
    return _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.find(selector, this._config.parent).filter(element => !children.includes(element))
  }

  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return
    }

    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen)
      element.setAttribute('aria-expanded', isOpen)
    }
  }

  // Static
  static jQueryInterface(config) {
    const _config = {}
    if (typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false
    }

    return this.each(function () {
      const data = Collapse.getOrCreateInstance(this, _config)

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config]()
      }
    })
  }
}

/**
 * Data API implementation
 */

_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || (event.delegateTarget && event.delegateTarget.tagName === 'A')) {
    event.preventDefault()
  }

  for (const element of _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.getMultipleElementsFromSelector(this)) {
    Collapse.getOrCreateInstance(element, { toggle: false }).toggle()
  }
})

/**
 * jQuery
 */

;(0,_util_index_js__WEBPACK_IMPORTED_MODULE_3__/* .defineJQueryPlugin */ .pF)(Collapse)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapse);


/***/ }),

/***/ 9660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1542);
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * Constants
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/
const stripNameRegex = /\..*/
const stripUidRegex = /::\d+$/
const eventRegistry = {} // Events storage
let uidEvent = 1
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
}

const nativeEvents = new Set([
  'click',
  'dblclick',
  'mouseup',
  'mousedown',
  'contextmenu',
  'mousewheel',
  'DOMMouseScroll',
  'mouseover',
  'mouseout',
  'mousemove',
  'selectstart',
  'selectend',
  'keydown',
  'keypress',
  'keyup',
  'orientationchange',
  'touchstart',
  'touchmove',
  'touchend',
  'touchcancel',
  'pointerdown',
  'pointermove',
  'pointerup',
  'pointerleave',
  'pointercancel',
  'gesturestart',
  'gesturechange',
  'gestureend',
  'focus',
  'blur',
  'change',
  'reset',
  'select',
  'submit',
  'focusin',
  'focusout',
  'load',
  'unload',
  'beforeunload',
  'resize',
  'move',
  'DOMContentLoaded',
  'readystatechange',
  'error',
  'abort',
  'scroll'
])

/**
 * Private methods
 */

function makeEventUid(element, uid) {
  return (uid && `${uid}::${uidEvent++}`) || element.uidEvent || uidEvent++
}

function getElementEvents(element) {
  const uid = makeEventUid(element)

  element.uidEvent = uid
  eventRegistry[uid] = eventRegistry[uid] || {}

  return eventRegistry[uid]
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    hydrateObj(event, { delegateTarget: element })

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn)
    }

    return fn.apply(element, [event])
  }
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector)

    for (let { target } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue
        }

        hydrateObj(event, { delegateTarget: target })

        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn)
        }

        return fn.apply(target, [event])
      }
    }
  }
}

function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events)
    .find(event => event.callable === callable && event.delegationSelector === delegationSelector)
}

function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === 'string'
  // TODO: tooltip passes `false` instead of selector, so we need to check
  const callable = isDelegated ? delegationFunction : (handler || delegationFunction)
  let typeEvent = getTypeEvent(originalTypeEvent)

  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent
  }

  return [isDelegated, callable, typeEvent]
}

function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return
  }

  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction)

  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does
  if (originalTypeEvent in customEvents) {
    const wrapFunction = fn => {
      return function (event) {
        if (!event.relatedTarget || (event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget))) {
          return fn.call(this, event)
        }
      }
    }

    callable = wrapFunction(callable)
  }

  const events = getElementEvents(element)
  const handlers = events[typeEvent] || (events[typeEvent] = {})
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null)

  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff

    return
  }

  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''))
  const fn = isDelegated ?
    bootstrapDelegationHandler(element, handler, callable) :
    bootstrapHandler(element, callable)

  fn.delegationSelector = isDelegated ? handler : null
  fn.callable = callable
  fn.oneOff = oneOff
  fn.uidEvent = uid
  handlers[uid] = fn

  element.addEventListener(typeEvent, fn, isDelegated)
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = findHandler(events[typeEvent], handler, delegationSelector)

  if (!fn) {
    return
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector))
  delete events[typeEvent][fn.uidEvent]
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {}

  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector)
    }
  }
}

function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '')
  return customEvents[event] || event
}

const EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false)
  },

  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true)
  },

  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return
    }

    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction)
    const inNamespace = typeEvent !== originalTypeEvent
    const events = getElementEvents(element)
    const storeElementEvent = events[typeEvent] || {}
    const isNamespace = originalTypeEvent.startsWith('.')

    if (typeof callable !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!Object.keys(storeElementEvent).length) {
        return
      }

      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null)
      return
    }

    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1))
      }
    }

    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, '')

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector)
      }
    }
  },

  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null
    }

    const $ = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_0__/* .getjQuery */ .KF)()
    const typeEvent = getTypeEvent(event)
    const inNamespace = event !== typeEvent

    let jQueryEvent = null
    let bubbles = true
    let nativeDispatch = true
    let defaultPrevented = false

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args)

      $(element).trigger(jQueryEvent)
      bubbles = !jQueryEvent.isPropagationStopped()
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped()
      defaultPrevented = jQueryEvent.isDefaultPrevented()
    }

    const evt = hydrateObj(new Event(event, { bubbles, cancelable: true }), args)

    if (defaultPrevented) {
      evt.preventDefault()
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt)
    }

    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault()
    }

    return evt
  }
}

function hydrateObj(obj, meta = {}) {
  for (const [key, value] of Object.entries(meta)) {
    try {
      obj[key] = value
    } catch {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value
        }
      })
    }
  }

  return obj
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventHandler);


/***/ }),

/***/ 4089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(value) {
  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  if (value === Number(value).toString()) {
    return Number(value)
  }

  if (value === '' || value === 'null') {
    return null
  }

  if (typeof value !== 'string') {
    return value
  }

  try {
    return JSON.parse(decodeURIComponent(value))
  } catch {
    return value
  }
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`)
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value)
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`)
  },

  getDataAttributes(element) {
    if (!element) {
      return {}
    }

    const attributes = {}
    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'))

    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, '')
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length)
      attributes[pureKey] = normalizeData(element.dataset[key])
    }

    return attributes
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`))
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Manipulator);


/***/ }),

/***/ 4879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1542);
/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */



const getSelector = element => {
  let selector = element.getAttribute('data-bs-target')

  if (!selector || selector === '#') {
    let hrefAttribute = element.getAttribute('href')

    // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273
    if (!hrefAttribute || (!hrefAttribute.includes('#') && !hrefAttribute.startsWith('.'))) {
      return null
    }

    // Just in case some CMS puts out a full URL with the anchor appended
    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
      hrefAttribute = `#${hrefAttribute.split('#')[1]}`
    }

    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null
  }

  return (0,_util_index_js__WEBPACK_IMPORTED_MODULE_0__/* .parseSelector */ .rV)(selector)
}

const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector))
  },

  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector)
  },

  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector))
  },

  parents(element, selector) {
    const parents = []
    let ancestor = element.parentNode.closest(selector)

    while (ancestor) {
      parents.push(ancestor)
      ancestor = ancestor.parentNode.closest(selector)
    }

    return parents
  },

  prev(element, selector) {
    let previous = element.previousElementSibling

    while (previous) {
      if (previous.matches(selector)) {
        return [previous]
      }

      previous = previous.previousElementSibling
    }

    return []
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling

    while (next) {
      if (next.matches(selector)) {
        return [next]
      }

      next = next.nextElementSibling
    }

    return []
  },

  focusableChildren(element) {
    const focusables = [
      'a',
      'button',
      'input',
      'textarea',
      'select',
      'details',
      '[tabindex]',
      '[contenteditable="true"]'
    ].map(selector => `${selector}:not([tabindex^="-"])`).join(',')

    return this.find(focusables, element).filter(el => !(0,_util_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isDisabled */ .pK)(el) && (0,_util_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isVisible */ .pn)(el))
  },

  getSelectorFromElement(element) {
    const selector = getSelector(element)

    if (selector) {
      return SelectorEngine.findOne(selector) ? selector : null
    }

    return null
  },

  getElementFromSelector(element) {
    const selector = getSelector(element)

    return selector ? SelectorEngine.findOne(selector) : null
  },

  getMultipleElementsFromSelector(element) {
    const selector = getSelector(element)

    return selector ? SelectorEngine.find(selector) : []
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectorEngine);


/***/ }),

/***/ 9826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2923);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3781);
/* harmony import */ var _base_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8655);
/* harmony import */ var _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9660);
/* harmony import */ var _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4089);
/* harmony import */ var _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4879);
/* harmony import */ var _util_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1542);
/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */








/**
 * Constants
 */

const NAME = 'dropdown'
const DATA_KEY = 'bs.dropdown'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const ESCAPE_KEY = 'Escape'
const TAB_KEY = 'Tab'
const ARROW_UP_KEY = 'ArrowUp'
const ARROW_DOWN_KEY = 'ArrowDown'
const RIGHT_MOUSE_BUTTON = 2 // MouseEvent.button value for the secondary button, usually the right button

const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`
const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_DROPUP = 'dropup'
const CLASS_NAME_DROPEND = 'dropend'
const CLASS_NAME_DROPSTART = 'dropstart'
const CLASS_NAME_DROPUP_CENTER = 'dropup-center'
const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center'

const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`
const SELECTOR_MENU = '.dropdown-menu'
const SELECTOR_NAVBAR = '.navbar'
const SELECTOR_NAVBAR_NAV = '.navbar-nav'
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'

const PLACEMENT_TOP = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isRTL */ .dZ)() ? 'top-end' : 'top-start'
const PLACEMENT_TOPEND = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isRTL */ .dZ)() ? 'top-start' : 'top-end'
const PLACEMENT_BOTTOM = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isRTL */ .dZ)() ? 'bottom-end' : 'bottom-start'
const PLACEMENT_BOTTOMEND = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isRTL */ .dZ)() ? 'bottom-start' : 'bottom-end'
const PLACEMENT_RIGHT = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isRTL */ .dZ)() ? 'left-start' : 'right-start'
const PLACEMENT_LEFT = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isRTL */ .dZ)() ? 'right-start' : 'left-start'
const PLACEMENT_TOPCENTER = 'top'
const PLACEMENT_BOTTOMCENTER = 'bottom'

const Default = {
  autoClose: true,
  boundary: 'clippingParents',
  display: 'dynamic',
  offset: [0, 2],
  popperConfig: null,
  reference: 'toggle'
}

const DefaultType = {
  autoClose: '(boolean|string)',
  boundary: '(string|element)',
  display: 'string',
  offset: '(array|string|function)',
  popperConfig: '(null|object|function)',
  reference: '(string|element|object)'
}

/**
 * Class definition
 */

class Dropdown extends _base_component_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor(element, config) {
    super(element, config)

    this._popper = null
    this._parent = this._element.parentNode // dropdown wrapper
    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
    this._menu = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.next(this._element, SELECTOR_MENU)[0] ||
      _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.prev(this._element, SELECTOR_MENU)[0] ||
      _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.findOne(SELECTOR_MENU, this._parent)
    this._inNavbar = this._detectNavbar()
  }

  // Getters
  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  static get NAME() {
    return NAME
  }

  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show()
  }

  show() {
    if ((0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isDisabled */ .pK)(this._element) || this._isShown()) {
      return
    }

    const relatedTarget = {
      relatedTarget: this._element
    }

    const showEvent = _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.trigger(this._element, EVENT_SHOW, relatedTarget)

    if (showEvent.defaultPrevented) {
      return
    }

    this._createPopper()

    // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
    if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
      for (const element of [].concat(...document.body.children)) {
        _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.on(element, 'mouseover', _util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .noop */ .ZT)
      }
    }

    this._element.focus()
    this._element.setAttribute('aria-expanded', true)

    this._menu.classList.add(CLASS_NAME_SHOW)
    this._element.classList.add(CLASS_NAME_SHOW)
    _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.trigger(this._element, EVENT_SHOWN, relatedTarget)
  }

  hide() {
    if ((0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isDisabled */ .pK)(this._element) || !this._isShown()) {
      return
    }

    const relatedTarget = {
      relatedTarget: this._element
    }

    this._completeHide(relatedTarget)
  }

  dispose() {
    if (this._popper) {
      this._popper.destroy()
    }

    super.dispose()
  }

  update() {
    this._inNavbar = this._detectNavbar()
    if (this._popper) {
      this._popper.update()
    }
  }

  // Private
  _completeHide(relatedTarget) {
    const hideEvent = _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.trigger(this._element, EVENT_HIDE, relatedTarget)
    if (hideEvent.defaultPrevented) {
      return
    }

    // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support
    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.off(element, 'mouseover', _util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .noop */ .ZT)
      }
    }

    if (this._popper) {
      this._popper.destroy()
    }

    this._menu.classList.remove(CLASS_NAME_SHOW)
    this._element.classList.remove(CLASS_NAME_SHOW)
    this._element.setAttribute('aria-expanded', 'false')
    _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.removeDataAttribute(this._menu, 'popper')
    _dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.trigger(this._element, EVENT_HIDDEN, relatedTarget)
  }

  _getConfig(config) {
    config = super._getConfig(config)

    if (typeof config.reference === 'object' && !(0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isElement */ .kK)(config.reference) &&
      typeof config.reference.getBoundingClientRect !== 'function'
    ) {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`)
    }

    return config
  }

  _createPopper() {
    if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_5__ === 'undefined') {
      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)')
    }

    let referenceElement = this._element

    if (this._config.reference === 'parent') {
      referenceElement = this._parent
    } else if ((0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isElement */ .kK)(this._config.reference)) {
      referenceElement = (0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .getElement */ .sb)(this._config.reference)
    } else if (typeof this._config.reference === 'object') {
      referenceElement = this._config.reference
    }

    const popperConfig = this._getPopperConfig()
    this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_6__/* .createPopper */ .fi(referenceElement, this._menu, popperConfig)
  }

  _isShown() {
    return this._menu.classList.contains(CLASS_NAME_SHOW)
  }

  _getPlacement() {
    const parentDropdown = this._parent

    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
      return PLACEMENT_TOPCENTER
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
      return PLACEMENT_BOTTOMCENTER
    }

    // We need to trim the value because custom properties can also include spaces
    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end'

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP
    }

    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM
  }

  _detectNavbar() {
    return this._element.closest(SELECTOR_NAVBAR) !== null
  }

  _getOffset() {
    const { offset } = this._config

    if (typeof offset === 'string') {
      return offset.split(',').map(value => Number.parseInt(value, 10))
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element)
    }

    return offset
  }

  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      },
      {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    }

    // Disable Popper if we have a static display or Dropdown is in Navbar
    if (this._inNavbar || this._config.display === 'static') {
      _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.setDataAttribute(this._menu, 'popper', 'static') // TODO: v6 remove
      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }]
    }

    return {
      ...defaultBsPopperConfig,
      ...(0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .execute */ .ht)(this._config.popperConfig, [defaultBsPopperConfig])
    }
  }

  _selectMenuItem({ key, target }) {
    const items = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => (0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .isVisible */ .pn)(element))

    if (!items.length) {
      return
    }

    // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY
    (0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .getNextActiveElement */ .Fj)(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus()
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Dropdown.getOrCreateInstance(this, config)

      if (typeof config !== 'string') {
        return
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    })
  }

  static clearMenus(event) {
    if (event.button === RIGHT_MOUSE_BUTTON || (event.type === 'keyup' && event.key !== TAB_KEY)) {
      return
    }

    const openToggles = _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.find(SELECTOR_DATA_TOGGLE_SHOWN)

    for (const toggle of openToggles) {
      const context = Dropdown.getInstance(toggle)
      if (!context || context._config.autoClose === false) {
        continue
      }

      const composedPath = event.composedPath()
      const isMenuTarget = composedPath.includes(context._menu)
      if (
        composedPath.includes(context._element) ||
        (context._config.autoClose === 'inside' && !isMenuTarget) ||
        (context._config.autoClose === 'outside' && isMenuTarget)
      ) {
        continue
      }

      // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
      if (context._menu.contains(event.target) && ((event.type === 'keyup' && event.key === TAB_KEY) || /input|select|option|textarea|form/i.test(event.target.tagName))) {
        continue
      }

      const relatedTarget = { relatedTarget: context._element }

      if (event.type === 'click') {
        relatedTarget.clickEvent = event
      }

      context._completeHide(relatedTarget)
    }
  }

  static dataApiKeydownHandler(event) {
    // If not an UP | DOWN | ESCAPE key => not a dropdown command
    // If input/textarea && if key is other than ESCAPE => not a dropdown command

    const isInput = /input|textarea/i.test(event.target.tagName)
    const isEscapeEvent = event.key === ESCAPE_KEY
    const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)

    if (!isUpOrDownEvent && !isEscapeEvent) {
      return
    }

    if (isInput && !isEscapeEvent) {
      return
    }

    event.preventDefault()

    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ?
      this :
      (_dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.prev(this, SELECTOR_DATA_TOGGLE)[0] ||
        _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.next(this, SELECTOR_DATA_TOGGLE)[0] ||
        _dom_selector_engine_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode))

    const instance = Dropdown.getOrCreateInstance(getToggleButton)

    if (isUpOrDownEvent) {
      event.stopPropagation()
      instance.show()
      instance._selectMenuItem(event)
      return
    }

    if (instance._isShown()) { // else is escape and we check if it is shown
      event.stopPropagation()
      instance.hide()
      getToggleButton.focus()
    }
  }
}

/**
 * Data API implementation
 */

_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler)
_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler)
_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus)
_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus)
_dom_event_handler_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  event.preventDefault()
  Dropdown.getOrCreateInstance(this).toggle()
})

/**
 * jQuery
 */

;(0,_util_index_js__WEBPACK_IMPORTED_MODULE_4__/* .defineJQueryPlugin */ .pF)(Dropdown)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);


/***/ }),

/***/ 8998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4089);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1542);
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * Class definition
 */

class Config {
  // Getters
  static get Default() {
    return {}
  }

  static get DefaultType() {
    return {}
  }

  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!')
  }

  _getConfig(config) {
    config = this._mergeConfigObj(config)
    config = this._configAfterMerge(config)
    this._typeCheckConfig(config)
    return config
  }

  _configAfterMerge(config) {
    return config
  }

  _mergeConfigObj(config, element) {
    const jsonConfig = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isElement */ .kK)(element) ? _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getDataAttribute(element, 'config') : {} // try to parse

    return {
      ...this.constructor.Default,
      ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
      ...((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isElement */ .kK)(element) ? _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.getDataAttributes(element) : {}),
      ...(typeof config === 'object' ? config : {})
    }
  }

  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const [property, expectedTypes] of Object.entries(configTypes)) {
      const value = config[property]
      const valueType = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isElement */ .kK)(value) ? 'element' : (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .toType */ .Fy)(value)

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
        )
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);


/***/ }),

/***/ 1542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fj: () => (/* binding */ getNextActiveElement),
/* harmony export */   Fy: () => (/* binding */ toType),
/* harmony export */   KF: () => (/* binding */ getjQuery),
/* harmony export */   S3: () => (/* binding */ triggerTransitionEnd),
/* harmony export */   ZT: () => (/* binding */ noop),
/* harmony export */   dZ: () => (/* binding */ isRTL),
/* harmony export */   e0: () => (/* binding */ executeAfterTransition),
/* harmony export */   ht: () => (/* binding */ execute),
/* harmony export */   kK: () => (/* binding */ isElement),
/* harmony export */   nq: () => (/* binding */ reflow),
/* harmony export */   pF: () => (/* binding */ defineJQueryPlugin),
/* harmony export */   pK: () => (/* binding */ isDisabled),
/* harmony export */   pn: () => (/* binding */ isVisible),
/* harmony export */   rV: () => (/* binding */ parseSelector),
/* harmony export */   sb: () => (/* binding */ getElement)
/* harmony export */ });
/* unused harmony exports findShadowRoot, getTransitionDurationFromElement, getUID, onDOMContentLoaded */
/**
 * --------------------------------------------------------------------------
 * Bootstrap util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const MAX_UID = 1_000_000
const MILLISECONDS_MULTIPLIER = 1000
const TRANSITION_END = 'transitionend'

/**
 * Properly escape IDs selectors to handle weird IDs
 * @param {string} selector
 * @returns {string}
 */
const parseSelector = selector => {
  if (selector && window.CSS && window.CSS.escape) {
    // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
    selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`)
  }

  return selector
}

// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = object => {
  if (object === null || object === undefined) {
    return `${object}`
  }

  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase()
}

/**
 * Public Util API
 */

const getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID)
  } while (document.getElementById(prefix))

  return prefix
}

const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0
  }

  // Get transition-duration of the element
  let { transitionDuration, transitionDelay } = window.getComputedStyle(element)

  const floatTransitionDuration = Number.parseFloat(transitionDuration)
  const floatTransitionDelay = Number.parseFloat(transitionDelay)

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0]
  transitionDelay = transitionDelay.split(',')[0]

  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER
}

const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END))
}

const isElement = object => {
  if (!object || typeof object !== 'object') {
    return false
  }

  if (typeof object.jquery !== 'undefined') {
    object = object[0]
  }

  return typeof object.nodeType !== 'undefined'
}

const getElement = object => {
  // it's a jQuery object or a node element
  if (isElement(object)) {
    return object.jquery ? object[0] : object
  }

  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(parseSelector(object))
  }

  return null
}

const isVisible = element => {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false
  }

  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'
  // Handle `details` element as its content may falsie appear visible when it is closed
  const closedDetails = element.closest('details:not([open])')

  if (!closedDetails) {
    return elementIsVisible
  }

  if (closedDetails !== element) {
    const summary = element.closest('summary')
    if (summary && summary.parentNode !== closedDetails) {
      return false
    }

    if (summary === null) {
      return false
    }
  }

  return elementIsVisible
}

const isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true
  }

  if (element.classList.contains('disabled')) {
    return true
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false'
}

const findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null
  }

  // Can find the shadow root otherwise it'll return the document
  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode()
    return root instanceof ShadowRoot ? root : null
  }

  if (element instanceof ShadowRoot) {
    return element
  }

  // when we don't find a shadow root
  if (!element.parentNode) {
    return null
  }

  return findShadowRoot(element.parentNode)
}

const noop = () => {}

/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
const reflow = element => {
  element.offsetHeight // eslint-disable-line no-unused-expressions
}

const getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return window.jQuery
  }

  return null
}

const DOMContentLoadedCallbacks = []

const onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', () => {
        for (const callback of DOMContentLoadedCallbacks) {
          callback()
        }
      })
    }

    DOMContentLoadedCallbacks.push(callback)
  } else {
    callback()
  }
}

const isRTL = () => document.documentElement.dir === 'rtl'

const defineJQueryPlugin = plugin => {
  onDOMContentLoaded(() => {
    const $ = getjQuery()
    /* istanbul ignore if */
    if ($) {
      const name = plugin.NAME
      const JQUERY_NO_CONFLICT = $.fn[name]
      $.fn[name] = plugin.jQueryInterface
      $.fn[name].Constructor = plugin
      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT
        return plugin.jQueryInterface
      }
    }
  })
}

const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
  return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue
}

const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback)
    return
  }

  const durationPadding = 5
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding

  let called = false

  const handler = ({ target }) => {
    if (target !== transitionElement) {
      return
    }

    called = true
    transitionElement.removeEventListener(TRANSITION_END, handler)
    execute(callback)
  }

  transitionElement.addEventListener(TRANSITION_END, handler)
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement)
    }
  }, emulatedDuration)
}

/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */
const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length
  let index = list.indexOf(activeElement)

  // if the element does not exist in the list return an element
  // depending on the direction and if cycle is allowed
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0]
  }

  index += shouldGetNext ? 1 : -1

  if (isCycleAllowed) {
    index = (index + listLength) % listLength
  }

  return list[Math.max(0, Math.min(index, listLength - 1))]
}




/***/ })

}]);