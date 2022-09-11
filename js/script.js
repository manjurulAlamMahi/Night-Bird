$(function () {
    'use strict';

    // Banner slider js

    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // Dj Slider js



    $('.dj_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevClass: true,
        nextArrow: '<i class="fas fa-chevron-right dj_next transition"></i>',
        prevArrow: '<i class="fas fa-chevron-left dj_prev transition"></i>',
        dots: false,
        focusOnSelect: true,
    });

    setTimeout(function () {
        var SlickCurrent = $('.slick-center');
        SlickCurrent.prev().addClass('prev');
        SlickCurrent.next().addClass('next');
    }, 100);

    $('.dj_slider').on('beforeChange', function () {
        $('.slick-slide').removeClass('prev next');
        setTimeout(function () {
            var beforechange = $('.slick-center');
            beforechange.prev().addClass('prev');
            beforechange.next().addClass('next');
        }, 100);
    });





    // Events Slider

    $('.events_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right events_next transition"></i>',
        prevArrow: '<i class="fas fa-chevron-left events_prev transition"></i>',
        dots: false,
    });

    // Events Countdown

    $('.timer_day').countdown('2021/08/28', function (event) {
        $(this).html(event.strftime('%D  DAY'));
    });

    $('.timer_min').countdown('2021/08/28', function (event) {
        $(this).html(event.strftime('%M  MINS'));
    });

    $('.timer_hours').countdown('2021/08/28', function (event) {
        $(this).html(event.strftime('%H  HRS'));
    });

    $('.timer_scnd').countdown('2021/08/28', function (event) {
        $(this).html(event.strftime('%S  SECS'));
    });

    // Testimonial Slider

    $('.testi_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right testi_next transition"></i>',
        prevArrow: '<i class="fas fa-chevron-left testi_prev transition"></i>',
        dots: false,
    });


});