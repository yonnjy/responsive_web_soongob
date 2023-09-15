$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.__move').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

    $('.main_slide').on('init afterChange', function () {
        const current = $('.main_slide .slick-current');

        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_vi .main_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.main_menu .menu_slide').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // $('.main_service .txt_slide').slick({
    //     asNavFor: ".main_service .img_slide",
    //     arrows: false,
    //     draggable : false,
    //     autoplay: true,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    // });

    // $('.main_service .img_slide').slick({
    //     asNavFor: ".main_service .txt_slide",
    //     arrows: false,
    //     draggable : false,
    //     autoplay: true,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    // });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
    });

    $('.header').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });

    $('.btn_ham').on('wheel', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }
    });
});