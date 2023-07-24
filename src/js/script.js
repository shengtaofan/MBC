import '../index.pug'
/* injectImportScript */
import '../img/spriteSVG/spriteSVG.js'
import '../sass/bootstrap-base.scss'
import '../sass/bootstrap-utilities.scss'
import '../sass/style.scss'

import 'bs5/js/src/carousel'
import Collapse from 'bs5/js/src/collapse'
import Dropdown from 'bs5/js/src/dropdown'
import { throttle } from 'lodash-es'
import { $, on, scrollTop, toggleClass, height, next, prev } from './$.js'
$.use(on, scrollTop, toggleClass, height, next, prev)
$.bootstrap(Collapse, Dropdown)

$(window).on('scroll', throttle(function () {
  $('body').toggleClass('slide-down', $(this).scrollTop() > $(this).height() * 0.8)

  // $('.fixed-right').toggleClass('show', scrollY > wH / 3)

  $('#navbar-dropdown').dropdown('hide')
  $('#mobile-menu').collapse('hide')
}, 500, { trailing: true }))

$('#navbar-dropdown').on('mouseenter', function (e) {
  $(this).dropdown('show')
}).next().on('mouseleave', function (e) {
  $(this).prev().dropdown('hide')
})
