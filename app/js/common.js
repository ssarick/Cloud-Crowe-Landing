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

$(document).ready(() => {
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
var swiper = new Swiper(".VideoSwiper", {
    effect: "flip",
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

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
            desc: 'ЭДО - позволит вам легко и быстро обмениваться электронными документами',
            link: 'service.html#edo'
        },
        images: [
            {
                src: ('../img/EDO-ill.svg'),
                link: 'service.html#bank',
                text: {
                    ru: 'ЭДО - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/bank-ill.svg'),
                link: 'service.html#bank',
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/storage-ill.svg'),
                link: 'service.html#storage',
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/hr-ill.svg'),
                link: 'service.html#hr',
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/accounting-ill.svg'),
                link: 'service.html#accounting',
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/statistics-ill.svg'),
                link: 'service.html#statistics',
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/soliq-ill.svg'),
                link: 'service.html#soliq',
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/1c-ill.svg'),
                link: 'service.html#1c',
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            },
            {
                src: ('../img/msfo-ill.svg'),
                link: 'service.html#msfo',
                text: {
                    ru: 'Банк - позволит вам легко и быстро обмениваться электронными документами',
                    en: 'hey',
                    uz: ''
                }
            }
        ],
    },
    methods: {
      updateImg: function (src, text, link) {
        this.selected.image = src
        this.selected.desc = text
          this.selected.link = link
      }
    }
})



