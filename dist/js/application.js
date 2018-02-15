"use strict";

var enable = {
    mq: true,
    mqDevice: true,

    doubleHover: true,

    jQueryUI: {
        autocomplete: true,
        datepicker: true,
        selectmenu: true
    },

    components: {
        icons: true,
        wysiwyg: true
    }
};
'use strict';

// Media queries
var mq = {};

function createMq(mqBreakpoints) {
    if (enable.mq) {
        var mqDevice = enable.mqDevice ? 'device-' : '';

        for (var i = 0; i < mqBreakpoints.length; i++) {
            var mqRange = i === 0 ? 'max' : 'min';

            mq[mqBreakpoints[i][0]] = {
                int: mqBreakpoints[i][1],
                str: '(' + mqRange + '-' + mqDevice + 'width: ' + mqBreakpoints[i][1] + 'px)'
            };
        }
    }
}

// Double hover
// https://gist.github.com/artpolikarpov/3428762 (modified)
var doubleHover = function doubleHover(selector, hoverClass, activeClass) {
    if (!Modernizr.touchevents) {
        $(document).on('mouseenter mouseleave', selector, function (e) {
            $(selector).filter('[href="' + $(this).attr('href') + '"]').toggleClass(hoverClass, e.type === 'mouseenter');
        }).on('mousedown mouseup', selector, function (e) {
            $(selector).filter('[href="' + $(this).attr('href') + '"]').toggleClass(activeClass, e.type === 'mousedown');
        });
    }
};

if (enable.doubleHover) {
    doubleHover('.js-hover', 'hover', 'active');
}

// Debounced Resize() jQuery Plugin
// https://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
(function ($, sr) {
    var debounce = function debounce(func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this,
                args = arguments;
            function delayed() {
                if (!execAsap) func.apply(obj, args);
                timeout = null;
            }

            if (timeout) clearTimeout(timeout);else if (execAsap) func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    jQuery.fn[sr] = function (fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})(jQuery, 'smartresize');
'use strict';

// Media queries (for example: xs, sm, md, lg, xl)
// Integer: mq.sm.int
// String:  Modernizr.mq(mq.sm.str);
createMq([['sm', 767], ['md', 768], ['xl', 1220], ['lg', 1380]]);

var TRANSITION_DURATION_BASE = 200;
'use strict';

if (enable.jQueryUI.autocomplete === true) {
    var availableTags = ['ActionScript', 'AppleScript', 'Asp', 'BASIC', 'C', 'C++', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'Python', 'Ruby', 'Scala', 'Scheme'];
    var $autocomplete = $('.js-autocomplete-input');

    $autocomplete.autocomplete({
        source: availableTags,
        open: function open(event, ui) {
            $(event.target).addClass('ui-autocomplete-input-opened');
        },
        close: function close(event, ui) {
            $(event.target).removeClass('ui-autocomplete-input-opened');
        }
    });

    $(window).smartresize(function () {
        $autocomplete.autocomplete('close');
    });
}
'use strict';

if (enable.jQueryUI.datepicker === true) {
    var datepickerSetMinWidth = function datepickerSetMinWidth(input, dpDiv) {
        setTimeout(function () {
            $(dpDiv).css('min-width', '').css('min-width', $(input).outerWidth());
        }, 0);
    };

    // Force Datepicker open always under input


    var $datepicker = $('.js-datepicker-input');

    $.extend($.datepicker, {
        _checkOffset: function _checkOffset(inst, offset) {
            return offset;
        }
    });

    $datepicker.datepicker({
        prevText: '',
        nextText: '',
        beforeShow: function beforeShow(input, inst) {
            $(input).addClass('hasDatepickerFocus');

            datepickerSetMinWidth(input, inst.dpDiv);
        },
        onChangeMonthYear: function onChangeMonthYear(year, month, inst) {
            datepickerSetMinWidth(inst.input, inst.dpDiv);
        },
        onClose: function onClose(dateText, inst) {
            $(inst.input).removeClass('hasDatepickerFocus');
        },
        onSelect: function onSelect(dateText, inst) {
            $(inst.input).removeClass('hasDatepickerFocus');
        }
    });

    $(window).smartresize(function () {
        $datepicker.datepicker('hide');
    });
}
'use strict';

if (enable.jQueryUI.selectmenu === true) {
    var $selectmenu = $('.js-selectmenu-select');

    $selectmenu.selectmenu({
        create: function create(event, ui) {
            var $select = $(event.target);

            if ($select.find('option:first-child').is(':disabled')) {
                $select.next('.ui-selectmenu-button').find('.ui-selectmenu-text').addClass('ui-state-placeholder');
            }
        }
    });

    $(window).smartresize(function () {
        $selectmenu.selectmenu('close');
    });
}
"use strict";

if (enable.components.icons === true) {
    svg4everybody();
}
'use strict';

if (enable.components.wysiwyg === true) {
    var $wysiwyg = $('.js-wysiwyg');

    // Img
    $wysiwyg.find('> p > img').each(function () {
        $(this).css({
            height: '',
            width: ''
        }).unwrap();
    });

    // Table
    $wysiwyg.find('> table').each(function () {
        $(this).wrap('<div class="wysiwyg__table"/>');
    });

    // Video (Youtube, Vimeo)
    $wysiwyg.find('> iframe[src*="vimeo"], > iframe[src*="youtube"]').each(function () {
        $(this).wrap('<div class="wysiwyg__video"/>');
    });
}
'use strict';

// Debounced Resize() jQuery Plugin
// https://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
(function ($, sr) {
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function debounce(func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this,
                args = arguments;
            function delayed() {
                if (!execAsap) func.apply(obj, args);
                timeout = null;
            }

            if (timeout) clearTimeout(timeout);else if (execAsap) func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    // smartresize
    jQuery.fn[sr] = function (fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})(jQuery, 'smartresize');
'use strict';

function scrollSize() {
    var css = {
        'width': '200px',
        'height': '200px',
        'margin': '0',
        'padding': '0',
        'border': 'none'
    };

    var inner = $('<div>').css($.extend({}, css));
    var outer = $('<div>').css($.extend({
        'position': 'absolute',
        'top': '-1000px',
        'left': '-1000px',
        'overflow': 'scroll'
    }, css)).append(inner).appendTo('body').scrollTop(1000).scrollLeft(1000);

    var scrollSize = {
        'width': outer.offset().left - inner.offset().left || 0,
        'height': outer.offset().top - inner.offset().top || 0
    };

    outer.remove();

    return scrollSize;
}
'use strict';

$(function () {

    function mainInit() {

        $('.site-main').css('margin-top', $('.site-header').outerHeight());
    }

    $(window).on('load', function () {

        mainInit();
    });

    $(window).smartresize(function () {
        mainInit();
    });
});
'use strict';

$(function () {

    function programsHeaderHeight() {

        $('.programs').find('.programs-tab').each(function () {

            var $el = $(this);

            $el.find('.programs-tab__header').equalHeights();
        });
    }

    $(document).on('click', '.js-tab-switch', function () {

        var $el = $(this);

        console.log($el.data('tab'));

        if ($el.data('tab') === 1) {

            $('#tab-2').css('display', 'none');
            $('#tab-1').fadeIn(500);
        } else if ($el.data('tab') === 2) {

            $('#tab-1').css('display', 'none');
            $('#tab-2').fadeIn(500);

            $('.programs-tab__header').equalHeights();
        }

        $('.programs-tab__header').equalHeights();

        $('.js-tab-switch').removeClass('is-current');
        $el.addClass('is-current');

        return false;
    });

    $(window).on('load', function () {
        programsHeaderHeight();
    });
    $(window).smartresize(function () {
        programsHeaderHeight();
    });
});
'use strict';

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 40) {

            $('.site-header').addClass('is-fixed');
        } else {

            $('.site-header').removeClass('is-fixed');
        }
    });
});
'use strict';

$(function () {

    $(document).on('click', '.js-scroll-to', function () {

        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top - 98;
        $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, TRANSITION_DURATION_BASE);

        $(elementClick).addClass('is-active');

        return false;
    });
});
'use strict';

$('.js-open-popup').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    closeMarkup: '<button class="mfp-close"></button>',
    fixedContentPos: true,
    callbacks: {
        open: function open() {

            $('.site-header').css({ 'padding-right': scrollSize().width + 'px' });
        },

        close: function close() {

            $('.site-header').css('padding-right', '');
        }
    }
});
'use strict';

$(function () {

    if (Modernizr.mq(mq.sm.str)) {

        $('.js-catalog-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            customPaging: function customPaging(slider, i) {
                return $('<span></span>');
            }
        });

        $(document).on('click', '.js-catalog-next', function () {

            $(this).closest('.js-catalog-slider-box').find('.js-catalog-slider').slick('slickNext');

            return false;
        });

        $(document).on('click', '.js-catalog-prev', function () {

            $(this).closest('.js-catalog-slider-box').find('.js-catalog-slider').slick('slickPrev');

            return false;
        });
    }

    function itemOpenContent() {

        $(document).on('click touchend', '.js-catalog-item-content', function () {

            if ($(this).hasClass('is-active')) {

                $(this).removeClass('is-active');

                // $(this).closest('.js-catalog-slider-box').removeClass('not-actions');

                $(this).closest('.catalog__item').find('.catalog__item-label').css('display', '');
            } else {

                $(this).addClass('is-active');

                // $(this).closest('.js-catalog-slider-box').addClass('not-actions');

                $(this).closest('.catalog__item').find('.catalog__item-label').css('display', 'none');
            }
            return false;
        });
    }

    if (Modernizr.mq(mq.sm.str)) {
        itemOpenContent();
    }

    if (Modernizr.mq(mq.md.str)) {

        if (Modernizr.mq(mq.xl.str)) {} else {
            itemOpenContent();
        }
    }

    if (Modernizr.mq(mq.xl.str)) {

        $(window).on('load', function () {
            $('.catalog__item').equalHeights();
        });

        $(window).smartresize(function () {
            $('.catalog__item').equalHeights();
        });
    }
});