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

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  autoplay: {
    dalay: 1000,
    disableOnInteraction: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});


(function() {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#news");
  // Magic happens here
  function parallax(e) {
      let _w = window.innerWidth;
      let _h = window.innerHeight;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${70 - (_mouseX - _w) * 0.005}% ${120 - (_mouseY - _h) * 0.005}%`;
      let _depth2 = `${100 - (_mouseX - _w) * 0.005}% ${0 - (_mouseY - _h) * 0.005}%`;
      let _depth3 = `${-10 - (_mouseX - _w) * 0.005}% ${100 - (_mouseY - _h) * 0.005}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(x);
      elem.style.backgroundPosition = x;
  }

})();


var app = new Vue({
  el: '#app',
  data: {
      
  }
})


function valueChanged(e){
	let a = e.value;
	e.style.background = `linear-gradient(to right, #FDB914,#FDB914 ${a}%, #eee ${a}%)`;
}