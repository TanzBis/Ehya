var swiper = new Swiper(".categories-slider", {
  loop: true,
  clickable: true,
  
  navigation: {
    nextEl: '.categories__button--prev',
    prevEl: '.categories__button--next',
  },
});
    

// var menuButton = document.querySelector(".navbar-button")
// menuButton.addEventListener('click', function () {
//   console.log('Клик по кнопке меню')
//   document.querySelector(".navbar__nav")
//   .classList.toggle('navbar__nav--visible');
// })