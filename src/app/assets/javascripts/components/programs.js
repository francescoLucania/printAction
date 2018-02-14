$(function() {

    function programsHeaderHeight() {

        $('.programs').find('.programs-tab').each(function () {

            var $el = $(this);

            $el.find('.programs-tab__header').equalHeights();

        });
    }


    $(document).on('click','.js-tab-switch',function(){

        var $el = $(this);

        console.log($el.data('tab'));

        if($el.data('tab') === 1) {

            $('#tab-2').css('display','none');
            $('#tab-1').fadeIn(500);

        } else if ($el.data('tab') === 2) {

            $('#tab-1').css('display','none');
            $('#tab-2').fadeIn(500);

            $('.programs-tab__header').equalHeights();
        }

        $('.programs-tab__header').equalHeights();

        $('.js-tab-switch').removeClass('is-current');
        $el.addClass('is-current');

        return false

    });




    $(window).on('load',function () {
        programsHeaderHeight();
    });
    $(window).smartresize(function() {
        programsHeaderHeight();
    });
});
