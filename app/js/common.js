$(function($){
    'use strict';
    $(window).on('load', function () {
        if ($(".pre-loader").length > 0)
        {
            $(".pre-loader").fadeOut("slow");
        }
    });
})

$('.language_item').click(function (e) {
    e.stopPropagation()
    $('.language').toggleClass('opened')
});

$(window).click(function () {
    $('.language').removeClass('opened')
})

const offers = [
    {id: 0, name: "EDO  ", desc: "EDO Desciption", price: 1},
    {id: 1, name: "Banking  ", desc: "Banking Desciption", price: 2},
    {id: 2, name: "Reporting  ", desc: "Reporting Desciption", price: 3},
    {id: 3, name: "Statistics  ", desc: "Statistics Desciption", price: 4},
    {id: 4, name: "Storage  ", desc: "Storage Desciption", price: 5},
    {id: 5, name: "HR  ", desc: "HR Desciption", price: 6},
    {id: 6, name: "MSFO  ", desc: "EDO Desciption", price: 7},
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
                `<li class="offers-card-item" id="offer-${elem}"> ${offers[elem].name}</li>`
            );

            // console.log(priceAmount);
            // console.log(orderedArr);
            // console.log(sum(priceAmount));

            document.getElementById("price-tag").innerHTML =
                "Price:  " + sum(priceAmount) + "$";
        } else {
            return null;
        }

        if (orderedArr.length > 0) {
            $('ul#text').removeClass('active-list');
        } else {
            console.log('tete')
            $("ul#text").addClass('active-list');
        }

    });
    $('#myVideo').on('ended', function () {
        this.load();
        this.play();
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

function valueChanged(e) {
    let a = e.value;
    e.style.background = `linear-gradient(to right, #FDB914,#FDB914 ${a}%, #eee ${a}%)`;
}

function toggle() {
    let sec = document.getElementById('nav');
    sec.classList.toggle('activeB')

    let slide = document.getElementById('burger')
    slide.classList.toggle('slideFrom')

    let b1 = document.getElementById('btn-reg')
    let b2 = document.getElementById('btn-log')
    b1.classList.toggle('btn-black')
    b1.classList.toggle('btn-white')
    b2.classList.toggle('btn-black')
    b2.classList.toggle('btn-white')
}

let btn = document.querySelector('.btnSlide');
btn.onmousemove = function (e) {
    let x = e.clientX - btn.offsetLeft;
    let y = e.clientY - btn.offsetTop;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
}


var app = new Vue({
    el: '#app',
    data: {
        selected: {
            image: '../img/EDO-ill.svg',
            desc: 'ЭДО - позволит вам легко и быстро обмениваться электронными документами'
        },
        images: [
            {
                src: ('../img/EDO-ill.svg'),
                text: {
                    ru: 'ЭДО - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/bank-ill.svg'),
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/storage-ill.svg'),
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/hr-ill.svg'),
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/accounting-ill.svg'),
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/statistics-ill.svg'),
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/soliq-ico.png'),
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/hr-ico.png'),
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/msfo-ico.png'),
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            }
        ],
    },
    methods: {
      updateImg: function (src, text) {
        this.selected.image = src
        this.selected.desc = text
      }
    }
})