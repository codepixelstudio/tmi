
// ================================================================================
// START :: require + modules + dependencies
// ================================================================================

    // jQuery
    import $ from 'jquery';

    // site.object
    import { site, log } from './cvmbs.tmi.app';

// ================================================================================
// END :: require + modules + dependencies
// ================================================================================



// ================================================================================
// START :: globals
// ================================================================================

    var menu;
    var toolbar;
    var button;
    var globalmenulink = $('#global-menu-link');

// ================================================================================
// END :: globals
// ================================================================================



// ================================================================================
// START :: access.menus                                        EXPORT
// ================================================================================

export var menusFX = {

    // register script + define globals
    init: function ( render ) {

        // check in
        console.log(

            '%c[ %cmenusFX %c] %cscript%c.%cinitialized',
            log.brack, log.activ, log.brack, log.init, log.brack, log.brite

        );

        menu   = site.ui.menus.navigation.component;
        button = site.ui.menus.navigation.controller;

        menusFX.access( menu, button, globalmenulink );

        // menusFX.panels( menu );

    },

    // event listener
    access: function( menu, button, globalmenulink ) {

        // check viewport for menu position
        var mediaQ = Foundation.MediaQuery.current;
        var menuX;
        var menuX = 0;

        // console.log( mediaQ );

        // handle ZURB offcanvas event
        $(window).on( 'opened.zf.offcanvas', function( e, target, menuX ) {

            // trap focus
            // Foundation.Keyboard.trapFocus( menu );

            // generate background contrast w/ blur
            site.ui.layout.toggleClass( 'site-menu-is-open' );

            // toggle menu open state for link background images
            $('#global-menu-list .link-artwork').addClass( 'loaded' );

            // test viewport size
            if ( mediaQ == 'medium' || mediaQ == 'large' || mediaQ == 'xlarge' || mediaQ == 'xxlarge' ) {

                // menuX = '-5rem';

            } else if ( mediaQ == 'small' ) {

                // menuX = '-4rem';

            }

            // show menu
            menu.velocity({

                translateX : [ menuX, '28rem' ],
                opacity    : [ 1, 0 ]

            }, {

                begin    : function() {

                    //

                },
                duration : 380,
    			delay 	 : 240,
    			easing   : [0.23, 1, 0.32, 1],
    			complete : function() {

    				//

    			}

            });

        }).on( 'closed.zf.offcanvas', function( e, target, menuX ) {

            // release focus
            // Foundation.Keyboard.releaseFocus( menu );

            // generate background contrast w/ blur
            site.ui.layout.toggleClass( 'site-menu-is-open' );

            // test viewport size
            if ( mediaQ == 'medium' || mediaQ == 'large' || mediaQ == 'xlarge' || mediaQ == 'xxlarge' ) {

                // menuX = '-5rem';

            } else if ( mediaQ == 'small' ) {

                // menuX = '-4rem';

            }

            // hide menu
            menu.velocity({

                translateX : [ '28rem', menuX ],
                opacity    : [ 0, 1 ]

            }, {

                begin    : function() {

                    //

                },
                duration : 380,
    			delay 	 : 40,
    			easing   : [0.23, 1, 0.32, 1],
    			complete : function() {

                    //

    			}

            });

        });

        // handle ZURB tab change event
        $(window).on( 'change.zf.tabs', function( e ) {

            // console.log( e );

            // maybe trap focus
            Foundation.Keyboard.trapFocus( menu );

        });

    },

    // menu panels
    panels: function( menu, panel ) {

        // button class
        var panelcue = $('.site-menu-button');

        // event listener
        panelcue.on( 'click', function( e ) {

            //

        });

        globalmenulink.on( 'click', function( e ) {

            // console.log( 'ball so hard' );

        });

    }

};

// ================================================================================
// END :: access.menus
// ================================================================================
