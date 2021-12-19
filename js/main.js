const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.categories__button--next',
    prevEl: '.categories__button--prev',
  },
});

// var menuButton = document.querySelector(".navbar-button")
// menuButton.addEventListener('click', function () {
//   console.log('Клик по кнопке меню')
//   document.querySelector(".navbar__nav")
//   .classList.toggle('navbar__nav--visible');
// })