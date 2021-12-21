var swiper = new Swiper(".categories-slider", {
  loop: false,
  clickable: true,
  
  navigation: {
    nextEl: '.categories__button--prev',
    prevEl: '.categories__button--next',
  },
});

var swiper = new Swiper(".unpublished-slider", {
  loop: false,
  clickable: true,
  
  navigation: {
    nextEl: '.unpublished__button--next',
    prevEl: '.unpublished__button--prev',
  },

  breakpoints: {
    1440: {
      spaceBetween: 0,
      slidesPerView: 5,
    },
    1200: {
        spaceBetween: 10,
        slidesPerView: 5,
    },
    992: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    767: {
      spaceBetween: 10,
      slidesPerView: 3,
    },
    576: {
      spaceBetween: 10,
      slidesPerView: 3,
    },
    480: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
  },
});
    


// var menuButton = document.querySelector(".navbar-button")
// menuButton.addEventListener('click', function () {
//   console.log('Клик по кнопке меню')
//   document.querySelector(".navbar__nav")
//   .classList.toggle('navbar__nav--visible');
// })