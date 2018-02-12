$(function() {

    $(window).scroll(function() {


        if  (($(this).scrollTop() >= 40)) {

            $('.site-header').addClass('is-fixed');

        } else {

            $('.site-header').removeClass('is-fixed');

        }

    });

});
