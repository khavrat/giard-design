import $ from 'jquery';

$(document).ready(function () {
  $(".slider").slick({
    fade: true,
    draggable: true,
    swipe: true,
    adaptiveHiight: true,
    appendArrows: $(".content"),
    prevArrow:
      '<button class="slick-arrow slick-prev absolute bottom-0 right-12 w-12 h-12 bg-primaryBg flex justify-center items-center  text-white cursor-pointer" type="button" aria-label="previous"><span class="arrow-left">←</span></button>',
    nextArrow:
      '<button class="slick-arrow slick-next absolute bottom-0 right-0 w-12 h-12 bg-primaryBg flex justify-center items-center  text-white cursor-pointer" type="button" aria-label="next"><span class="arrow-right">→</span></button>',
  });
});
