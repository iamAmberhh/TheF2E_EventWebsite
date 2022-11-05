"use strict";

AOS.init();
gsap.registerPlugin(ScrollTrigger, Text);
var swiper = new Swiper('.swiper', {
  loop: false,
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  }
});
//# sourceMappingURL=all.js.map
