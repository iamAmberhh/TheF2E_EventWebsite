const currentMonth = new Date().getMonth() + 1;
const currentDate = new Date().getDate();
const square = document.querySelectorAll(".square");
const squareTimeline = document.querySelectorAll(".timeline");
if (currentMonth == 12) {
  if (currentDate >= 1 && currentDate < 23) {
    square[4].classList.add("square-active");
    squareTimeline[3].classList.add("timeline-active");
    square[6].classList.add("square-active");
    squareTimeline[4].classList.add("timeline-active");
  } else if (currentDate >= 23) {
    square[5].classList.add("square-active");
    square[7].classList.add("square-active");
  }
}

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});


const newspaper = document.querySelector(".newpaper-3");

function displayNone() {
  newspaper.classList.add("d-none");
}



function openAnimation(){
  gsap.to(".newpaper-1", {
    y: -1000,
    duration: 3,
  });
  
  gsap.to(".newpaper-2", {
    x: -1000,
    y: 2000,
    duration: 5,
  });
  gsap.to(".newpaper-3", {
    x: 2000,
    y: 2000,
    duration: 5,
  });


  
  setTimeout("displayNone()", 1000);
}
gsap.registerPlugin(ScrollTrigger, TextPlugin);



gsap.to(".typing-1", {
  text: "羨慕別人的酷酷網頁動畫？",
  ease: "none",
  duration: 2,
  delay: 2,
  scrollTrigger: {
    trigger: ".typing-1",
    toggleActions: "play pause resume reset",
  },
});
gsap.to(".typing-2", {
  text: "滿足不了同事的許願？",
  ease: "none",
  duration: 2,
  delay: 5,
  scrollTrigger: {
    trigger: ".typing-2",
    toggleActions: "play pause resume reset",
  },
});
gsap.to(".typing-3", {
  text: "動畫技能樹太雜無從下手？",
  ease: "none",
  duration: 2,
  delay: 8,
  scrollTrigger: {
    trigger: ".typing-3",
    toggleActions: "play pause resume reset",
  },
});
gsap.fromTo(
  ".cursor",
  0,
  {
    visibility: "hidden",
  },
  {
    visibility: "visible",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.3,
  }
);
gsap.from(".mission", {
  x: -1500,
  y: -300,
  duration: 0.5,
  delay: 2,
});

const swiper = new Swiper(".swiper", {
  loop: false,
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});