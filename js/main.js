$(function () {


    $('.products__slider').slick({
        prevArrow: '<button class="slider__btn slider__btn-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="slider__btn slider__btn-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 1"/></svg></button>',
        infinite: false,
    });

    $('.quastion__item_title').on('click', function () {

        $('.quastion__item').removeClass('quastion__item--active');
        $(this).parent().addClass('quastion__item--active');

    });

    $('.menu__btn').on('click', function() {
       $(this).toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active')
    });

    $('.menu__list_link').on('click', function() {
       $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active')
    });

    $('.logo').on('click', function() {
       $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active')
    });



});
