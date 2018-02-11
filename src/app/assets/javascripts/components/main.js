$(function() {

    function mainInit() {

        $('.site-main').css('margin-top', $('.site-header').outerHeight());

    }

    $(window).on('load',function () {

        mainInit();
    });

    $(window).smartresize(function() {
        mainInit();
    });

});
