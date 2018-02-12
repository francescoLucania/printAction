$(function() {

    if (Modernizr.mq(mq.sm.str)) {

        $('.js-programs-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            customPaging: function (slider, i) {
                return $('<span></span>');
            }
        });

        $(document).on('click', '.js-programs-next', function () {

            $(this).closest('.programs-tab__products').find('.js-programs-slider').slick('slickNext');

            return false
        });

        $(document).on('click', '.js-programs-prev', function () {

            $(this).closest('.programs-tab__products').find('.js-programs-slider').slick('slickPrev');

            return false
        });
    }

});
