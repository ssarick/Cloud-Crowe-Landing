var initialScroll = window.pageYOffset;

window.onscroll = function() {

  var currentScroll = window.pageYOffset;
  var element = document.getElementById("nav");

  if (initialScroll > currentScroll) {
    element.classList.remove("nav-hide");
  } else {
    element.classList.add("nav-hide");
  }
  initialScroll = currentScroll;
}