/* injectImportScript */
import '../img/spriteSVG/spriteSVG.js'
import '../sass/bootstrap-base.scss'
import '../sass/bootstrap-utilities.scss'
import '../sass/style.scss'

import 'bs5/js/src/carousel'
import Collapse from 'bs5/js/src/collapse'
import Dropdown from 'bs5/js/src/dropdown'
import { throttle } from 'lodash-es'
import { $, on, scrollTop, toggleClass, width, height, next, prev, attr, txt, addClass } from './$.js'
$.use(on, scrollTop, toggleClass, width, height, next, prev, attr, txt, addClass)
$.bootstrap(Collapse, Dropdown)

$(window).on('scroll', throttle(function () {
  $('body').toggleClass('slide-down', $(this).scrollTop() > $(this).height() * 0.8)

  // $('.fixed-right').toggleClass('show', scrollY > wH / 3)

  $('#navbar-dropdown').dropdown('hide')
  if ($(window).width() < 992) {
    $('#mobile-menu').collapse('hide')
  }
}, 500, { trailing: true }))

$('#navbar-dropdown').on('mouseenter', function (e) {
  $(this).dropdown('show')
}).next().on('mouseleave', function (e) {
  $(this).prev().dropdown('hide')
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
  console.log(formData)
  const href = {
    mailto: 'mailto:' + mail + '?',
    subject: 'subject=我想諮詢有關' + formData.subject,
    body: inputName.reduce(function (str, name) {
      const inputId = $(`[name=${name}]`).attr('id')
      const label = $(`[for=${inputId}]`).txt().replace('*', '') + '： '

      if (formData[name]) {
        str += label + (name === 'message' ? newline + '%20'.repeat(9) : ' ') + formData[name]

        str += name === 'message' ? newline : ''
        str += newline.repeat(2)
      }
      return str
    }, '&body=')
  }
  console.log(Object.values(href).join(''))
// const downloadBtn = document.createElement('a')
// downloadBtn.href = Object.values(href).join('')
// downloadBtn.click()
// location = form.attr('action')
})
