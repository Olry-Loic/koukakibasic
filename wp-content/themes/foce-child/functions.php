<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}
//ajout de l'animation des titres//
function title_scripts() {
// Charger le fichier JavaScript titleAnimation.js
    wp_enqueue_script('titleAnimation', get_theme_file_uri() . '/js/titleAnimation.js', array(),'1.0', true);
}
add_action('wp_enqueue_scripts', 'title_scripts');
/*wp_enqueue_script( 'order-custom-scripts', get_theme_file_uri( '/assets/images' ), array('jquery'), '1.0.0', true );*/

//ajout de l'effet parallax du logo//
function mon_parallax_scripts() {
// Charger le fichier JavaScript parallaxAnimation.js
    wp_enqueue_script('parallaxAnimation', get_theme_file_uri() . '/js/parallaxAnimation.js', array(),'1.0', true);
}
add_action('wp_enqueue_scripts', 'mon_parallax_scripts');
    