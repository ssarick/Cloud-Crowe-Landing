let initialScroll = window.pageYOffset;

$(window).on("scroll", () => {
  let currentScroll = window.pageYOffset;
  let element = document.getElementById("nav");

  if (initialScroll > currentScroll) {
    element.classList.remove("nav-hide");
  } else {
    element.classList.add("nav-hide");
  }
  initialScroll = currentScroll;
});

const offers = [
  { id: 0, name: "EDO  ", desc: "EDO Desciption", price: 1 },
  { id: 1, name: "Banking  ", desc: "Banking Desciption", price: 1 },
  { id: 2, name: "Reporting  ", desc: "Reporting Desciption", price: 1 },
  { id: 3, name: "Statistics  ", desc: "Statistics Desciption", price: 1 },
  { id: 4, name: "Storage  ", desc: "Storage Desciption", price: 1 },
  { id: 5, name: "HR  ", desc: "HR Desciption", price: 1 },
  { id: 6, name: "MSFO  ", desc: "EDO Desciption", price: 1 },
  { id: 7, name: "1C Integration  ", desc: "1C Integration Desciption", price: 1 }
];


function sumStr(price){
  let strArr = price.split(",");
  let sum = strArr.reduce(function(total, num){
    return parseFloat(total) + parseFloat(num);
  });

  return sum;
}



$(document).ready(() => {
  let tariffBlock = $("#targetElement");
  let packageBlock = $("#text");
  let priceBlock = $("#price")

  const orderedArr = [];

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

  priceBlock.append(``)



  $(".offers-card-item-add input").on("click", function (e) {
    const elem = $(e.target).parent().parent().data("item-index");
    const result = offers.find((item) => {
      return item.id === elem;
    });

    if ((orderedArr.includes(offers[result.id])) && ($(`li#offer-${elem}`).length == 1)) {
      console.log("delete");
      $(`li#offer-${elem}`).remove()
      orderedArr.indexOf(offers[elem]);
      console.log(orderedArr)

    } else if (result.id === elem) {
      console.log('added');
      packageBlock.append(`<li class="offers-card-item" id="offer-${elem}"> ${offers[elem].name} price:${offers[elem].price}</li>`);
      orderedArr.push(offers[elem]);
      console.log(orderedArr)
    }
    else{
      return null
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
    let _depth2 = `${100 - (_mouseX - _w) * 0.005}% ${
      0 - (_mouseY - _h) * 0.005
    }%`;
    let _depth3 = `${-10 - (_mouseX - _w) * 0.005}% ${
      100 - (_mouseY - _h) * 0.005
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;

    elem.style.backgroundPosition = x;
  }
})();

function valueChanged(e) {
  let a = e.value;
  e.style.background = `linear-gradient(to right, #FDB914,#FDB914 ${a}%, #eee ${a}%)`;
}
