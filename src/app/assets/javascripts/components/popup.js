$('.js-open-popup').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    closeMarkup: '<button class="mfp-close"></button>',
    fixedContentPos: true,
    callbacks: {
        open: function () {

            $('.site-header').css({'padding-right': scrollSize().width + 'px'});
        },

        close: function () {

            $('.site-header').css('padding-right', '');

        }
    }
});
