$(function() {

    if (Modernizr.mq(mq.sm.str)) {

        $('.js-catalog-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            customPaging: function(slider, i) {
                return $('<span></span>');
            }
        });

        $(document).on('click','.js-catalog-next',function() {

            $(this).closest('.js-catalog-slider-box').find('.js-catalog-slider').slick('slickNext');

            return false
        });

        $(document).on('click','.js-catalog-prev',function() {

            $(this).closest('.js-catalog-slider-box').find('.js-catalog-slider').slick('slickPrev');

            return false
        });

    }

    function itemOpenContent() {

        $(document).on('click touchend','.js-catalog-item-content',function() {

            if ($(this).hasClass('is-active')) {

                $(this).removeClass('is-active');

                $(this).closest('.js-catalog-slider-box').removeClass('not-actions');

                $(this).closest('.catalog__item').find('.catalog__item-label').css('display','');

            } else {

                $(this).addClass('is-active');

                $(this).closest('.js-catalog-slider-box').addClass('not-actions');

                $(this).closest('.catalog__item').find('.catalog__item-label').css('display','none');
            }

            return false
        });
    }

    if (Modernizr.mq(mq.sm.str)) {
        itemOpenContent();
    }

    if (Modernizr.mq(mq.md.str)) {
        itemOpenContent();
    }
});
