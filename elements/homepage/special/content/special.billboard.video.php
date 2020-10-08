<?php

    // options
    $unit_options = get_field( 'special_homepage_options' );

    // announcement block
    $announcements = $unit_options[ 'announcement_block' ];

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

    // billboard style
    $custom_billboard = $unit_options[ 'custom_homepage_billboard' ];

    // set billboard image
    if ( $custom_billboard ) {

        // custom
        $billboard_settings = $unit_options[ 'custom_billboard_settings' ];

    } else {

        // default
        $billboard_settings = $unit_options[ 'default_billboard_settings' ];

    }

    // field data
    $billboard_title = $billboard_settings[ 'billboard_title' ];
    $billboard_text  = $billboard_settings[ 'billboard_text' ];

?>

<!-- special.billboard -->
<section id="video_billboard" class="special-unit-homepage-billboard">

    <?php if ( $custom_billboard ) : ?>

    <!-- content -->
    <div class="billboard-content custom <?php echo $layout_class; ?>" style="background-image:url(<?php echo $billboard_settings[ 'billboard_image' ]; ?>);">

    <?php else : ?>

    <!-- content -->
    <div class="billboard-content default <?php echo $layout_class; ?>" style="background-image:url(<?php echo $billboard_settings[ 'billboard_image' ]; ?>);">

    <?php endif; ?>

        <!-- video background -->
        <div id="video_background" class="homepage-video">

            <!-- video -->
            <!-- <video playsinline autoplay muted loop poster="<?php echo $billboard_settings[ 'billboard_image' ]; ?>" id="billboard_video" class="video_container"> -->
            <video playsinline autoplay muted poster="<?php echo $billboard_settings[ 'billboard_image' ]; ?>" id="billboard_video" class="video_container">

                <!-- <source src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/video/TMI_drone.mp4" type="video/mp4"> -->

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

            <?php get_template_part( 'elements/homepage/special/content/special.announcements' ); ?>

        <?php endif; ?>

    <?php endif; ?>

</section>
<!-- END department.billboard -->
