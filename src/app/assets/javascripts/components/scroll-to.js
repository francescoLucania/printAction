$(function() {

    $(document).on('click','.js-scroll-to',function () {

        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top - 98;
        $('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, TRANSITION_DURATION_BASE);

        $(elementClick).addClass('is-active');

        return false;
    });

});
