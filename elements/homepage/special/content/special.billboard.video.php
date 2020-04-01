<?php

    // options
    $unit_options = get_field( 'special_homepage_options' );

    // announcement block
    $announcements = $unit_options[ 'announcement_block' ];

    // custom
    $billboard_settings = $unit_options[ 'custom_billboard_settings' ];

    // field data
    $billboard_title = $billboard_settings[ 'billboard_title' ];
    $billboard_text  = $billboard_settings[ 'billboard_text' ];

    // get data
    $announcement = $unit_options[ 'announcement' ];

    // evaluate expiration
    $expired = is_this_item_expired( $announcement[ 'expiration' ] );

    // set billboard class
    if ( $announcements && ! ( $expired ) ) {

        $layout_class = 'announcement';

    } else {

        $layout_class = 'expired';

    }

?>

<!-- special.billboard -->
<section id="video_billboard" class="special-unit-homepage-billboard">

    <!-- content -->
    <div class="billboard-content custom <?php echo $layout_class; ?>" style="background-image:url(<?php echo $billboard_settings[ 'billboard_image' ]; ?>);">

        <!-- video background -->
        <div id="video_background" class="homepage-video">

            <iframe id="wallpaper-0_0" class="video_container" allowfullscreen="1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" src="https://www.youtube.com/embed/toQZgkDt4_0?controls=0&rel=0&showinfo=0&wmode=transparent&enablejsapi=1&version=3&playerapiid=wallpaper-0_0&loop=1&autoplay=1" width="1920" height="1080"></iframe>

            <!-- video -->
            <video playsinline autoplay muted loop poster="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/img/billboard.00.jpg" id="billboard_video" class="video_container">

                <source src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/video/elements_full.mp4" type="video/mp4">

            </video>
            <!-- END video -->

        </div>
        <!-- END video background -->

        <!-- billboard.title -->
        <header id="homepage-title" class="homepage-section">

            <!-- title -->
            <span class="billboard-text title">

                <?php echo $billboard_title; ?>

            </span>
            <!-- END title -->

            <!-- text -->
            <span class="billboard-text text">

                <?php echo $billboard_text; ?>

            </span>
            <!-- END text -->

        </header>
        <!-- END billboard.title -->

    </div>
    <!-- END content -->

    <?php if ( $announcements ) : ?>

        <?php if ( ! ( $expired ) ) : ?>

            <?php // get_template_part( 'elements/homepage/special/content/special.announcements' ); ?>

        <?php endif; ?>

    <?php endif; ?>

</section>
<!-- END department.billboard -->
