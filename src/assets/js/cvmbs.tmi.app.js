
// ========================================================================================================
// START :: require + modules + dependencies
// ========================================================================================================

    // import modules
    import $ from 'jquery';

    // user scripts
    import { menusFX } from './menus.ui';

    // import './library/foundation.explicit';

    // global jQuery object
    window.jQuery = window.$ = $;

    // global velocity object
    // var velocity = $.velocity = require( 'velocity-animate' );
    import velocity from 'velocity-animate';

    // foundation module
    import Foundation from 'foundation-sites';

    // slick.js
    require( 'slick-carousel' );
    import slick from 'slick-carousel';

    // initialize foundation
    $(document).foundation();

// ========================================================================================================
// END :: require + modules + dependencies
// ========================================================================================================



// ========================================================================================================
// START :: config.objects
// ========================================================================================================

    // homepage slideshow
    const slideshow = $( '#custom_billboard.slideshow .slideshow_slides' );

    // base object
    export var site = {};

    // functions
    site.fx = {

        // scrollpage

    };

    // brand
    site.brand = {

        camelot : $('#brand-rams'),
        state   : $('#brand-state'),
        local   : $('#brand-cvmbs')

    };

    // site.ui
    site.ui = {

        header    : $('#site-header'),
        toolbar   : $('#site-menu-toolbar'),
        layout    : $('#site-layout'),
        billboard : $('#billboard-homepage'),
        slides    : $('#billboard-slides'),
        content   : $('#content-homepage'),
        articles  : $('#content-homepage .ui-article'),
        active    : $('#content-homepage .ui-article.active' ),
        footer    : $('#site-footer')

    };

    // menus
    site.ui.menus = {};

    // controls + buttons
    site.ui.controls = {

        university : 'university',
        college    : 'college'
        // department : 'department'

    };

    // menu.navigation
    site.ui.menus.navigation = {

        component  : $('#site-menu'),
        controller : $('#site-menu-button')

    };

    // menu.programs
    site.ui.menus.programs = {};

    // menu.content
    site.ui.menus.content = {};

    // homepage.sections
    site.ui.sections = {

        academics: $('#academics'),
        research: $('#research'),
        facilities: $('#facilities'),
        alumni: $('#alumni'),
        events: $('#events'),
        news: $('#news')

    };

    // visual debug
    export var log = {

        brite : 'color: rgba(144, 187, 34, 1.00)',
        callb : 'color: rgba(85, 168, 182, 0.80)',
        proms : 'color: rgba(85, 168, 182, 0.47)',
        init  : 'color: rgba(214, 221, 242, 0.80)',
        brack : 'color: rgba(255, 255, 255, 0.35)',
        activ : 'color: rgba(243, 133, 72, 1.000)',
        reset : 'color: rgba(243, 133, 72, 0.47)',
        load  : 'color: rgba(188, 197, 60, 0.60)',
        displ : 'color: rgba(219, 27, 137, 1.00)',
        fail  : 'color: rgba(255, 45, 45, 0.85)',
        fx    : 'color: rgba(76, 185, 246, 1.00)',
        prnth : 'color: rgba(255, 255, 255, 1.00)',
        pink  : 'color: rgba(249, 87, 231, 1.00)',
        purpl : 'color: rgba(140, 108, 206, 1.00)'

    };

// ========================================================================================================
// END :: config.objects
// ========================================================================================================



// ========================================================================================================
// START :: initialize
// ========================================================================================================

    // you know what it is bruh
    $(document).ready( function() {

        // menus
        menusFX.init();

        // slick that
        slideshow.slick({

            // slide     : '.slideshow_slide',

            arrows    : true,
            dots      : true,
            dotsClass : 'slideshow_dots',

            prevArrow : '<button id="prev-arrow-control" class="slideshow_control arrow_prev" title="previous slide"><span class="button-label">previous slide</span><svg class="prev-arrow-icon arrow-icon" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><polygon fill="#FFFFFF" points="26.8,30.4 20.3,24 26.8,17.6 27.7,18.4 22.1,24 27.7,29.6" /></svg></button>',
            nextArrow : '<button id="next-arrow-control" class="slideshow_control arrow_next" title="next slide"><span class="button-label">next slide</span><svg class="next-arrow-icon arrow-icon" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve"><polygon fill="#FFFFFF" points="22.2,30.4 21.3,29.6 26.9,24 21.3,18.4 22.2,17.6 28.7,24" /></svg></button>',

            autoplay       : false,
            // autoplaySpeed  : 10000,
            fade           : true,

            initialSlide   : 0,
            infinite       : true,
            slidesToShow   : 1,
            slidesToScroll : 1,
            adaptiveHeight : true,

            speed     : 720,
            cssEase   : 'cubic-bezier(0.23, 1, 0.32, 1)',

            accessibility  : true,
            waitForAnimate : true

        });

    });

// ========================================================================================================
// END :: initialize
// ========================================================================================================



// ========================================================================================================
// START :: CVMBS Accordions
// ========================================================================================================

    if ( $('.cvmbs-accordions').length > 0 ) {
        $('.cvmbs-accordion').each(function() {
            $(this).addClass('has-loaded');
        });

        $('.cvmbs-accordion__title').each(function() {
            var accordionTitle = $(this).html();

            $(this).html('<button class="cvmbs-accordion__toggle" aria-expanded="false">' + accordionTitle + '</button>');
        });

        $('.cvmbs-accordion__content').each(function() {
            $(this).attr('aria-hidden', 'true');
        });

        $('.cvmbs-accordion__toggle').click(function() {
            $(this).attr('aria-expanded', function(i, attr) {
                $(this).parent().next().attr('aria-hidden', attr);
                return attr == 'true' ? 'false' : 'true';
            });
        });
    };

// ========================================================================================================
// END :: CVMBS Accordions
// ========================================================================================================



// ========================================================================================================
// START :: Skip Link Focus Fixes
// ========================================================================================================

    ( function() {
        var isIe = /(trident|msie)/i.test( navigator.userAgent );

        if ( isIe && document.getElementById && window.addEventListener ) {
            window.addEventListener( 'hashchange', function() {
                var id = location.hash.substring( 1 ),
                    element;

                if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
                    return;
                }

                element = document.getElementById( id );

                if ( element ) {
                    if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
                        element.tabIndex = -1;
                    }

                    element.focus();
                }
            }, false );
        }
    } )();

// ========================================================================================================
// END :: Skip Link Focus Fix
// ========================================================================================================
