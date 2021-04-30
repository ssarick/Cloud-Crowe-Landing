var initialScroll = window.pageYOffset;

window.onscroll = function () {
  var currentScroll = window.pageYOffset;
  var element = document.getElementById("nav");

  if (initialScroll > currentScroll) {
    element.classList.remove("nav-hide");
  } else {
    element.classList.add("nav-hide");
  }
  initialScroll = currentScroll;
};


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
