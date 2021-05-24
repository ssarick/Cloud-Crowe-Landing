
let initialScroll = window.pageYOffset;

$(window).on("scroll", () => {
  let currentScroll = window.pageYOffset;
  let element = document.getElementById("nav");

  if (initialScroll > currentScroll) {
    element.classList.remove("nav-hide");
  } else if (element.classList.contains('activeB')) {
    element.classList.remove("nav-hide");
  }
  else {
    element.classList.add("nav-hide");
  }
  initialScroll = currentScroll;
});

$('.language_item').click(function(e) {
  e.stopPropagation()
  $('.language').toggleClass('opened')
});

$(window).click(function() {
  $('.language').removeClass('opened')
})

const offers = [
  { id: 0, name: "EDO  ", desc: "EDO Desciption", price: 1 },
  { id: 1, name: "Banking  ", desc: "Banking Desciption", price: 2 },
  { id: 2, name: "Reporting  ", desc: "Reporting Desciption", price: 3 },
  { id: 3, name: "Statistics  ", desc: "Statistics Desciption", price: 4 },
  { id: 4, name: "Storage  ", desc: "Storage Desciption", price: 5 },
  { id: 5, name: "HR  ", desc: "HR Desciption", price: 6 },
  { id: 6, name: "MSFO  ", desc: "EDO Desciption", price: 7 },
  {
    id: 7,
    name: "1C Integration  ",
    desc: "1C Integration Desciption",
    price: 8,
  },
];

$(document).ready(() => {
  let tariffBlock = $("#targetElement");
  let packageBlock = $("#text");
  let priceBlock = $("#price");

  function sum(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
        continue;
      }
      total += Number(input[i]);
    }
    return total;
  }

  const priceAmount = [];
  const orderedArr = [];

  function sum(input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
        continue;
      }
      total += Number(input[i]);
    }
    return total;
  }

  for (let x = 0; x < offers.length; x++) {
    tariffBlock.append(`
    <li id="text-elem" class="offers-card-item-add" data-item-index="${offers[x].id}">
      <label for="item-input-${offers[x].id}" class="switch">
        <input id="item-input-${offers[x].id}" type="checkbox">
        <span class="slider round"></span>
      </label>
      <p>${offers[x].name}</p>
    </li>`);
  }

  $(".offers-card-item-add input").on("click", function (e) {
    // $("ul#text").removeClass("active-list");

    const elem = $(e.target).parent().parent().data("item-index");
    const result = offers.find((item) => {
      return item.id === elem;
    });

    if (
      orderedArr.includes(offers[result.id]) &&
      $(`li#offer-${elem}`).length == 1
    ) {
      console.log("delete");
      // Deleting from DOM
      $(`li#offer-${elem}`).remove();

      // Deleting from Array for ORDER NAMES
      if (orderedArr.indexOf(offers[elem]) > -1) {
        orderedArr.splice(orderedArr.indexOf(offers[elem]), 1);
      }
      // Deleting from Array for PRICE
      if (priceAmount.indexOf(offers[elem].price) > -1) {
        priceAmount.splice(priceAmount.indexOf(offers[elem].price), 1);
      }
      document.getElementById("price-tag").innerHTML =
        "Price:  " + sum(priceAmount);

      // console.log(orderedArr);
      // console.log(priceAmount);
      // console.log(sum(priceAmount));
    } else if (result.id === elem) {
      console.log("added");
      orderedArr.push(offers[elem]);
      priceAmount.push(offers[elem].price);

      packageBlock.append(
        `<li class="offers-card-item wow slideInLeft" id="offer-${elem}"> ${offers[elem].name}</li>`
      );

      // console.log(priceAmount);
      // console.log(orderedArr);
      // console.log(sum(priceAmount));

      document.getElementById("price-tag").innerHTML =
        "Price:  " + sum(priceAmount) + "$";
    } else {
      return null;
    }
    
    if (orderedArr.length > 0){
      $('ul#text').removeClass('active-list');
    }else{
      console.log('tete')
      $("ul#text").addClass('active-list');
    }

  });

});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  autoplay: {
    dalay: 1000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#news");
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth;
    let _h = window.innerHeight;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${70 - (_mouseX - _w) * 0.005}% ${
      120 - (_mouseY - _h) * 0.005
    }%`;
    let _depth2 = `${140 - (_mouseX - _w) * 0.001}% ${
      5000 - (_mouseY - _h) * 0.005
    }%`;
    let _depth3 = `${-35 - (_mouseX - _w) * 0.001}% ${
      -6000 - (_mouseY - _h) * 0.005
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;

    elem.style.backgroundPosition = x;
  }
})();

function valueChanged(e) {
  let a = e.value;
  e.style.background = `linear-gradient(to right, #FDB914,#FDB914 ${a}%, #eee ${a}%)`;
}

function toggle() {
  var sec = document.getElementById('nav');
  sec.classList.toggle('activeB')
}