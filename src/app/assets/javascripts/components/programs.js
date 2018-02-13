$(function() {

    function programsHeaderHeight() {

        $('.programs').find('.programs-tab').each(function () {

            var $el = $(this);

            $el.find('.programs-tab__header').equalHeights();

        });
    }


    $(window).on('load',function () {
        programsHeaderHeight();
    });
    $(window).smartresize(function() {
        programsHeaderHeight();
    });
});
