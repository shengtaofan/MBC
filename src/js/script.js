/* injectImportScript */
import '../sass/index.js'
import '../img/spriteSVG/index.js'
import { Controller, Scene } from 'scrollmagic'
import { Ease, Circle, Rectangle } from './Particle.js'

import Vec from './Vec.js'
import 'bs5/js/src/carousel'
import Collapse from 'bs5/js/src/collapse'
import Dropdown from 'bs5/js/src/dropdown'
import { throttle } from 'lodash-es'
// eslint-disable-line
import { $, on, scrollTop, toggleClass, width, height, next, attr, prop, txt, addClass, hasClass, removeClass, css, children, parent, bounding, find } from './$.js'
// eslint-disable-line

$.use(on, scrollTop, toggleClass, width, height, next, attr, prop, txt, addClass, hasClass, removeClass, css, children, parent, bounding, find)
$.bootstrap(Collapse, Dropdown)
// window.$ = $
// window.Ease = Ease
$(window).on('scroll', throttle(function () {
  $('body').toggleClass(
    'slide-down',
    $(this).scrollTop() > $(this).height() * 0.8
  )

  if ($('#mobile-menu').hasClass('show')) {
    $('#mobile-menu').collapse('hide')
  }
  if (qrcode) {
    qrcode(($('canvas').bounding('top') - $(this).height()) | 0)
  }
  animations(this)
}, 300, { trailing: true }))

$('#mobile-menu')
  .on('show.bs.collapse', function (e) {
    $('body').addClass('navbar-show')
  })
  .on('hide.bs.collapse', function (e) {
    $('body').removeClass('navbar-show')
  })

$('#contact-form').on('submit', function (e) {
  e.preventDefault()
  const form = $(this)
  form.addClass('was-validated')

  if (!form[0].checkValidity()) {
    return
  }

  const newline = '%0D%0A'
  const mail = 'master.builder.tw@gmail.com'
  const formData = Object.fromEntries(new FormData(form[0]))
  const inputName = ['know', 'name', 'address', 'tel', 'mail', 'msg']
  const href = {
    mailto: 'mailto:' + mail + '?',
    subject: 'subject=我想諮詢有關' + formData.subject,
    body: inputName.reduce(function (str, name) {
      const inputId = $(`[name=${name}]`).attr('id')
      const label = $(`[for=${inputId}]`).txt().replace('*', '') + '： '

      if (formData[name]) {
        str +=
          label +
          (name === 'message' ? newline + '%20'.repeat(9) : ' ') +
          formData[name]

        str += name === 'message' ? newline : ''
        str += newline.repeat(2)
      }
      return str
    }, '&body=')
  }

  const downloadBtn = document.createElement('a')
  downloadBtn.href = Object.values(href).join('')
  downloadBtn.click()
  location = form.attr('action')
})

const animations = (function () {
  const els = $('.ani-fade-enter')
  const groups = $('.ani-group-enter')
  $('.ani-group-enter').forEach(el => {
    const { stagger } = el.dataset
    if (stagger) {
      $(el)
        .find('.ani')
        .forEach((el, i) => {
          stagger * i &&
            $(el).css('transition-delay', (stagger * i).toFixed(2) + 's')
        })
    }
  })
  $('.ani-fade-enter, .ani-group-enter .ani').forEach(el => {
    for (const [prop, val] of Object.entries(el.dataset)) {
      $(el).css('transition-' + prop, val + 's')
    }
  })
  return function (win) {
    els.forEach(el => {
      if (el.getBoundingClientRect().top < $(win).height() * 0.6) {
        $(el).addClass('fade-enter-active')
        els.splice(els.indexOf(el), 1)
      }
    })
    groups.forEach(el => {
      if (el.getBoundingClientRect().top < $(win).height() * 0.6) {
        $(el).addClass('ani-group-enter-active')
        els.splice(els.indexOf(el), 1)
      }
    })
  }
})()
function run (cb, { fps = 30, dur = Infinity }) {
  return new Promise((resolve, reject) => {
    const interval = 1000 / fps
    let then = Date.now()
    let startTime = null
    function update (timestamp) {
      const now = Date.now()
      const delta = now - then
      let tick = 0
      if (startTime === null) {
        startTime = timestamp
      }
      if (delta > interval) {
        then = now - (delta % interval)
        tick = timestamp - startTime
        cb(tick)
      }
      frame = requestAnimationFrame(update)
      if (startTime !== null && dur < tick) {
        cancelAnimationFrame(frame)
        resolve(frame)
      }
    }
    let frame = requestAnimationFrame(update)
  })
}
let qrcode = (function () {
  const canvas = $('#qrcode')
  if (innerWidth < 992 || canvas.length === 0) return null

  canvas
    .prop('height', $('#qrcode').parent().height())
    .prop('width', $('#qrcode').parent().width())

  const c = canvas[0].getContext('2d')

  const paths = {
    m: 'M6.9,31c0.5,0,0.7-0.2,0.7-0.7V13l7.1,11.6c0.2,0.3,0.4,0.5,0.8,0.5h3.9c0.4,0,0.6-0.2,0.8-0.5l7.1-11.9v17.6c0,0.5,0.2,0.7,0.7,0.7h6.2c0.5,0,0.7-0.2,0.7-0.7V0.7c0-0.5-0.2-0.7-0.7-0.7h-6.7c-0.3,0-0.6,0.2-0.8,0.5L17.6,16L8.3,0.5C8.1,0.2,7.9,0,7.5,0H0.7C0.2,0,0,0.2,0,0.7v29.6C0,30.8,0.2,31,0.7,31H6.9z',
    b: 'M53.7,31c4.4,0,7.7-0.8,9.7-2.4c2-1.6,3-3.8,3-6.7c0-1.7-0.5-3.2-1.5-4.5c-1-1.3-2.5-2.2-4.4-2.7c1.4-0.6,2.5-1.5,3.3-2.6c0.7-1.1,1.1-2.4,1.1-3.9c0-1.6-0.4-3-1.1-4.2c-0.7-1.2-1.9-2.2-3.5-2.9c-1.6-0.7-3.7-1-6.4-1H42.3c-0.5,0-0.7,0.2-0.7,0.7v29.6c0,0.5,0.2,0.7,0.7,0.7H53.7z M56.1,7.1c0.7,0.5,1,1.2,1,2.3s-0.3,1.8-1,2.3c-0.7,0.5-1.5,0.7-2.5,0.7h-4.3v-6h4.3,C54.6,6.3,55.4,6.6,56.1,7.1z M57.1,18.9c0.7,0.5,1.1,1.4,1.1,2.4c0,1.1-0.4,1.9-1.1,2.5c-0.7,0.5-1.8,0.8-3,0.8h-4.8v-6.5h4.8,C55.4,18.1,56.4,18.4,57.1,18.9z',
    c: 'M89.5,29.8c1.9-0.8,3.5-2,4.7-3.4c1.3-1.5,2.2-3.1,2.8-5c0.1-0.3-0.1-0.6-0.5-0.7L90.3,19c-0.4-0.1-0.6,0-0.8,0.4,C89,20.9,88.2,22,87,22.6c-1.1,0.7-2.4,1-3.9,1c-2.1,0-3.9-0.7-5.2-2.2s-2-3.4-2-5.9s0.7-4.5,2-5.9c1.3-1.5,3.1-2.2,5.3-2.2,c2.6,0,4.5,1,5.7,3.1c0.2,0.4,0.5,0.5,0.8,0.3l6.2-1.7c0.5-0.1,0.6-0.4,0.4-0.8c-1.1-2.7-2.7-4.7-4.9-6.2c-2.2-1.5-5-2.2-8.2-2.2,c-2.2,0-4.2,0.4-6,1.1s-3.4,1.8-4.8,3.2s-2.4,3-3.2,4.9c-0.8,1.9-1.1,4-1.1,6.3c0,3.1,0.6,5.8,1.9,8.1s3,4.1,5.3,5.4,c2.3,1.3,4.9,2,7.9,2C85.5,31,87.6,30.6,89.5,29.8z'
  }
  const color = 'hsl(145,94.1%,40.2%)'
  c.textAlign = 'center'
  c.font = '16px 微軟正黑體'
  c.fillStyle = color

  // eslint-disable-line
  let mbc = [
    0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0, 10, 0, 11, 0, 12, 0, 13, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9, 1, 10, 1, 11, 1, 12, 1, 13, 2, 1, 2, 2, 2, 3, 2, 4, 3, 3, 3, 4, 3, 5, 4, 4, 4, 5, 4, 6, 5, 4, 5, 5, 5, 6, 6, 3, 6, 4, 6, 5, 7, 1, 7, 2, 7, 3, 7, 4, 8, 0, 8, 1, 8, 2, 8, 3, 8, 4, 8, 5, 8, 6, 8, 7, 8, 8, 8, 9, 8, 10, 8, 11, 8, 12, 8, 13, 9, 0, 9, 1, 9, 2, 9, 3, 9, 4, 9, 5, 9, 6, 9, 7, 9, 8, 9, 9, 9, 10, 9, 11, 9, 12, 9, 13, 11, 0, 11, 1, 11, 2, 11, 3, 11, 4, 11, 5, 11, 6, 11, 7, 11, 8, 11, 9, 11, 10, 11, 11, 11, 12, 11, 13, 12, 0, 12, 1, 12, 2, 12, 3, 12, 4, 12, 5, 12, 6, 12, 7, 12, 8, 12, 9, 12, 10, 12, 11, 12, 12, 12, 13, 13, 0, 13, 1, 13, 6, 13, 7, 13, 12, 13, 13, 14, 0, 14, 1, 14, 6, 14, 7, 14, 12, 14, 13, 15, 0, 15, 1, 15, 6, 15, 7, 15, 12, 15, 13, 16, 0, 16, 1, 16, 6, 16, 7, 16, 12, 16, 13, 17, 0, 17, 1, 17, 2, 17, 3, 17, 4, 17, 5, 17, 6, 17, 7, 17, 8, 17, 9, 17, 10, 17, 11, 17, 12, 17, 13, 18, 1, 18, 2, 18, 3, 18, 4, 18, 5, 18, 6, 18, 7, 18, 8, 18, 9, 18, 10, 18, 11, 18, 12, 19, 2, 19, 3, 19, 4, 19, 5, 19, 8, 19, 9, 19, 10, 19, 11, 21, 1, 21, 2, 21, 3, 21, 4, 21, 5, 21, 6, 21, 7, 21, 8, 21, 9, 21, 10, 21, 11, 21, 12, 22, 0, 22, 1, 22, 2, 22, 3, 22, 4, 22, 5, 22, 6, 22, 7, 22, 8, 22, 9, 22, 10, 22, 11, 22, 12, 22, 13, 23, 0, 23, 1, 23, 12, 23, 13, 24, 0, 24, 1, 24, 12, 24, 13, 25, 0, 25, 1, 25, 12, 25, 13, 26, 0, 26, 1, 26, 12, 26, 13, 27, 0, 27, 1, 27, 12, 27, 13, 28, 0, 28, 1, 28, 2, 28, 11, 28, 12, 28, 13, 29, 1, 29, 2, 29, 11, 29, 12
  ].map(p => p * 11 + Circle.r)
  // eslint-disable-line
  let circle = [
    6, 14, 5, 14, 24, 14, 1, 14, 0, 14, 28, 14, 8, 13, 8, 15, 20, 15, 7, 13, 21, 15, 22, 13, 5, 15, 23, 15, 24, 13, 3, 13, 3, 15, 25, 15, 2, 13, 26, 13, 1, 13, 1, 15, 27, 13, 27, 15, 0, 13, 0, 15, 28, 13, 8, 16, 20, 12, 20, 16, 7, 12, 21, 16, 6, 12, 6, 16, 22, 16, 5, 12, 23, 12, 4, 12, 4, 16, 24, 16, 3, 16, 2, 16, 26, 12, 27, 16, 28, 12, 28, 16, 14, 11, 13, 11, 13, 17, 12, 11, 12, 17, 11, 11, 17, 11, 10, 17, 18, 17, 19, 17, 8, 11, 8, 17, 7, 11, 21, 11, 5, 17, 23, 17, 24, 11, 24, 17, 25, 11, 25, 17, 2, 11, 26, 17, 1, 11, 1, 17, 27, 11, 0, 11, 0, 17, 28, 11, 28, 17, 14, 10, 14, 18, 13, 18, 15, 18, 12, 10, 12, 18, 11, 10, 17, 18, 10, 10, 10, 18, 18, 10, 18, 18, 9, 18, 19, 18, 20, 10, 7, 10, 21, 10, 6, 10, 6, 18, 5, 10, 5, 18, 23, 10, 23, 18, 4, 18, 3, 18, 25, 18, 2, 10, 26, 10, 28, 10, 28, 18, 14, 9, 14, 19, 13, 19, 15, 19, 12, 9, 12, 19, 16, 9, 16, 19, 11, 9, 17, 9, 17, 19, 10, 9, 18, 19, 9, 19, 19, 9, 19, 19, 20, 9, 20, 19, 5, 19, 23, 19, 4, 9, 24, 9, 24, 19, 3, 9, 3, 19, 25, 9, 25, 19, 2, 9, 1, 9, 27, 9, 27, 19, 0, 9, 28, 9, 14, 8, 14, 20, 13, 8, 13, 20, 15, 8, 16, 8, 16, 20, 17, 20, 10, 20, 18, 8, 8, 8, 20, 20, 7, 20, 21, 8, 21, 20, 6, 8, 6, 20, 22, 20, 23, 8, 23, 20, 4, 8, 24, 8, 24, 20, 25, 20, 2, 20, 26, 8, 1, 8, 1, 20, 27, 20, 0, 20, 14, 7, 14, 21, 13, 21, 15, 7, 12, 21, 16, 7, 16, 21, 11, 21, 17, 7, 10, 7, 18, 7, 18, 21, 9, 21, 19, 21, 8, 21, 20, 21, 24, 21, 26, 21, 14, 6, 13, 22, 15, 22, 12, 6, 16, 6, 11, 22, 17, 22, 10, 6, 10, 22, 18, 6, 19, 22, 8, 6, 20, 6, 20, 22, 22, 22, 24, 22, 28, 22, 14, 5, 14, 23, 15, 5, 12, 5, 12, 23, 11, 5, 17, 23, 10, 5, 10, 23, 18, 5, 18, 23, 19, 5, 19, 23, 8, 5, 20, 23, 24, 23, 25, 23, 15, 24, 11, 4, 10, 24, 18, 4, 18, 24, 9, 24, 19, 24, 8, 4, 8, 24, 20, 24, 21, 24, 22, 24, 23, 24, 24, 24, 27, 24, 14, 3, 15, 3, 12, 3, 16, 3, 16, 25, 11, 3, 10, 3, 10, 25, 9, 3, 19, 3, 23, 25, 25, 25, 27, 25, 14, 2, 14, 26, 13, 2, 12, 26, 16, 26, 17, 2, 17, 26, 10, 2, 18, 26, 9, 2, 19, 2, 19, 26, 8, 2, 20, 2, 20, 26, 21, 26, 26, 26, 27, 26, 28, 26, 14, 1, 13, 1, 13, 27, 15, 1, 12, 1, 16, 1, 17, 1, 17, 27, 10, 1, 18, 27, 9, 1, 9, 27, 19, 27, 8, 27, 20, 1, 21, 27, 22, 27, 23, 27, 25, 27, 27, 27, 28, 27, 13, 0, 13, 28, 15, 0, 15, 28, 12, 28, 16, 0, 17, 0, 17, 28, 10, 28, 18, 0, 18, 28, 9, 0, 19, 0, 19, 28, 20, 28, 21, 28, 24, 28, 25, 28, 27, 28
  ].map(p => p * 11 + Circle.r)

  let rect = []

  for (let i = 0, arr = [0, 0, 0, 22, 22, 0]; i < arr.length; i += 2) {
    for (let x = 0, y = 0; x < 7 && y < 7; y < 6 ? y++ : x++ < 7 && (y = 0)) {
      if ([0, 6].includes(x) || [0, 6].includes(y)) {
        rect.push((arr[i] + x) * 11 - (x ? 1 : 0), (arr[i + 1] + y) * 11 - (y ? 1 : 0))
      }
    }
  }

  for (let i = 0, arr = [22, 22, 22, 264, 264, 22]; i < arr.length; i += 2) {
    for (let x = 0, y = 0; x < 3 && y < 3; y < 2 ? y++ : x++ < 2 && (y = 0)) {
      rect.push(arr[i] + x * 11 - (x ? 1 : 0), arr[i + 1] + y * 11 - (y ? 1 : 0))
    }
  }
  const offset = {
    x: (canvas.width() - 317) / 2,
    y: 0
  }
  const easeTimes = Array.from({ length: 20 }, (v, k) => new Ease(6000 - k * 100, k * 100)).filter((el, i, arr) => arr.map(time => time.dur).indexOf(el.dur) === i)
  /**
   *  const qrcodeSize = 317
   *  const mbcW = 328
   *  const mbcH = 152
   * */
  const circleInitPosRand = Math.random() * mbc.length | 0
  const rectGap = 13
  const rectRows = 3
  const rectCols = rect.length / 2 / rectRows
  const particles = circle.map((p, i, a) => {
    const easeTime = easeTimes[i % easeTimes.length]

    if (i % 2) {
      const j = (i - 1) / 2
      const rectX = (j % rectCols) * rectGap + (canvas.width() - rectCols * rectGap) / 2
      const rectY = (((j / rectCols) | 0) - rectRows) * rectGap + canvas.height()
      return rect[i - 1] > -1 && new Rectangle(new Vec(rectX, rectY), new Vec(rect[i - 1] + offset.x, rect[i] + offset.y), easeTime)
    }
    let mbcRand = (circleInitPosRand + i) % (mbc.length)
    mbcRand += mbcRand % 2
    return new Circle(new Vec(
      mbc[mbcRand] + (canvas.width() - 328) / 2,
      mbc[mbcRand + 1] + canvas.height() - (rectRows + 1) * rectGap - 152
    ), new Vec(p + offset.x, a[i + 1] + offset.y), easeTime)
  })
    .filter(p => p)
  circle = null
  rect = null
  mbc = null
  const randColor = Math.random() * 360 | 0
  const initColor = 145 + (180 - randColor)
  const gridWidth = canvas.width() / 6
  const xlSize = innerWidth >= 1360
  return async function (closeDistance) {
    const maxDur = easeTimes[0].dur + easeTimes[0].delay
    const globalEase = new Ease(maxDur)
    if (closeDistance + canvas.height() < 0) {
      qrcode = null
      await run(
        tick => {
          easeTimes.forEach(t => t.update(tick))
          globalEase.update(tick)
          c.fillStyle = 'rgba(255,255,255,' + globalEase.time + ')'
          if (xlSize) {
            c.fillRect(gridWidth - 4, 0, gridWidth * 5 + 4, canvas.height())
            c.fillStyle = 'rgba(0,0,0,0.2)'
          }
          c.fillRect(0, 0, xlSize ? gridWidth - 4 : canvas.width(), canvas.height())

          for (const particle of particles) {
            c.beginPath()
            particle.update().draw(c)
            c.fillStyle = 'hsl(' + ((initColor + (particle.delTheta / Math.PI * 180 + randColor) * particle.ease.time) % 360) + ',94.1%,40.2%)'
            c.fill()
          }
        },
        { fps: 20, dur: maxDur + 100 }
      )
      c.clearRect(0, 0, canvas.width(), canvas.height())
      for (const particle of particles) {
        c.beginPath()
        particle.update().draw(c)
        c.fill()
      }
      // draw text
      globalEase.reset(1000)
      await run(
        tick => {
          globalEase.update(tick)
          c.clearRect(0, 317 + 9, canvas.width(), canvas.height() - 317)

          c.globalAlpha = globalEase.time < 0 ? 0 : globalEase.time
          c.save()
          c.translate((canvas.width() - 97) / 2, (317 - 31) / 2)
          for (const letter of Object.values(paths)) {
            const path = new Path2D(letter)
            c.fill(path)
          }
          c.restore()
          c.fillText(canvas[0].dataset.text, canvas.width() / 2, 317 + 16 * 3)
        },
        { fps: 15, dur: 1200 }
      )
      return
    }
    if (closeDistance < 100) {
      c.save()
      c.translate(0, -closeDistance - canvas.height())
      c.fillStyle = 'rgba(255,255,255,0.75)'
      if (xlSize) {
        c.fillRect(gridWidth - 4, 0, gridWidth * 5 + 4, canvas.height())
        c.fillStyle = 'rgba(0,0,0,0.75)'
      }
      c.fillRect(0, 0, xlSize ? gridWidth - 4 : canvas.width(), canvas.height())

      c.fillStyle = 'hsl(' + initColor + ',94.1%,40.2%)'
      for (const particle of particles) {
        c.beginPath()
        particle.update().draw(c)
        c.fill()
      }
      c.restore()
    }
  }
})()

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
function attrVal (progress, dur, offset = 0, reverse) {
  let val = progress
  if (reverse) {
    val = Math.sin(val * Math.PI)
  }
  val = val * dur - offset
  if (val > 1) return 1
  if (val < 0) return 0
  return Math.floor(val * 100) / 100
}
const scenes = $('.timeline-target').map((el, i) => {
  const target = $(el)
  const triggerElement = '#' + target.attr('id')
  const triggerHook = (1 - $(triggerElement).bounding().height / innerHeight) / 2
  return new Scene({
    triggerElement,
    triggerHook,
    duration: $(triggerElement).height() + 400
  })
    .setPin(triggerElement, { pushFollowers: false }).on('enter', function () {
      if (innerWidth < 992) return
      $('.fixed-img')
        .css('backgroundImage', `url(${target.find('img').attr('src')})`)
        .css('backgroundPosition', (i % 2 ? 'left' : 'right') + ' 200px bottom')
    })
    .on('progress', function (e) {
      const odd = innerWidth < 992 ? 1 : i % 2 * 2 - 1

      $('.fixed-img').css('opacity', 0.3 * attrVal(e.progress, 2, 0.75, true))
      target.css('opacity', 0.3 + 0.7 * attrVal(e.progress, 1.5, 0, true))
      target.children().css('filter', `blur(${3 - 3 * attrVal(e.progress, 1.6, 0.5, true)}px)`)
      if (innerWidth >= 992) {
        target.find('.timeline-item')
        .css('transform', `scale(${0.8 + 0.2 * attrVal(e.progress, 1.5, 0, true)})`)
        target.find('.timeline-client')
        .css('transform', `translateY(${10 - 10 * attrVal(e.progress, 3, 1.8, true)}px)`).css('opacity', attrVal(e.progress, 4, 1.8, true))
        const avatar = attrVal(e.progress, 2, 0.7, true)
        target.find('.timeline-avatar')
          .css('opacity', attrVal(e.progress, 4, 0.4))
          .css('transform', `translateX(${20 - 20 * odd * avatar}px) scale(${1.1 - 0.1 * avatar})`)
          .find('img')
          .css('filter', `brightness(${50 - 49 * avatar})`)
      }
    })
})
if (scenes.length) {
  new Controller().addScene(scenes)
}
