const swiper = new Swiper('.swiper', {
slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

