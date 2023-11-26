const { Controller, Scene } = ScrollMagic

const scenes = $('.timeline-target').map((el, i) => {
  const target = $(el)
  const triggerElement = '#' + target.attr('id')
  const triggerHook = (1 - $(triggerElement).bounding().height / innerHeight) / 2
  return [
    new Scene({
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
        const odd = i % 2 * -1

        $('.fixed-img').css('opacity', 0.3 * attrVal(e.progress, 2, 0.75, true))
        target.css('opacity', 0.3 + 0.7 * attrVal(e.progress, 1.5, 0, true))
        target.children().css('filter', `blur(${3 - 3 * attrVal(e.progress, 1.6, 0.5, true)}px)`)
        if (innerWidth >= 992){

          target.find('.timeline-item').css('transform', `scale(${0.8 + 0.2 * attrVal(e.progress, 1.5, 0, true)})`)
          target.find('.timeline-client').css('transform', `translateY(${10 - 10 * attrVal(e.progress, 3, 1.8, true)}px)`).css('opacity', attrVal(e.progress, 4, 1.8, true))
          const avatar = attrVal(e.progress, 2, 0.7, true)
          target.find('.timeline-avatar')
            .css('opacity', attrVal(e.progress, 4, 0.4))
            .css('transform', `translateX(${20 - 20 * odd * avatar}px) scale(${1.1 - 0.1 * avatar})`)
            .find('img')
            .css('filter', `brightness(${50 - 49 * avatar})`)
        }
      }).addIndicators({ name: 'target' + i, indent: 300 * (i % 2) })
    // new Scene({
    //   offset: 100,
    //   triggerElement
    // }).setClassToggle(triggerElement, 'active').addIndicators({ name: 'target', indent: 100 })
    // new Scene({
    //   triggerElement,
    //   duration: 700,
    //   triggerHook
    // }).setPin(triggerElement, { pushFollowers: false })
    //   .setClassToggle($(triggerElement).find('.timeline-item'), 'active').addIndicators({ name: 'pin' }),
    // new Scene({
    //   triggerElement,
    //   offset: 100,
    //   duration: 400,
    //   triggerHook
    // })
    //   .setClassToggle($(triggerElement).children(), 'active').addIndicators({ name: 'blur' }),
    // new Scene({
    //   triggerElement,
    //   offset: 200,
    //   duration: 300,
    //   triggerHook
    // }).on('enter', function () {
    //   $(triggerElement).find('.timeline-client,.timeline-avatar').addClass('active')
    // }).on('leave', function () {
    //   $(triggerElement).find('.timeline-client').removeClass('active')
    // }).addIndicators({ name: 'client avatar' }),
    // new Scene({
    //   triggerElement,
    //   offset: 300,
    //   duration: 300,
    //   triggerHook
    // })
    //   .setClassToggle($(triggerElement).find('img'), 'active').addIndicators({ name: 'bright' })
  ]
})
if (scenes.length) {
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

  new Controller().addScene(scenes)
}
