<?php
/*
Plugin Name: Dinner Buddy
Description: This plugin is designed to help create a weekly meal plan.
Plugin URI:  https://plugin-planet.com/
Author:      Chris McGuire
Version:     1.0
*/

// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// include dependencies admin and public
require_once plugin_dir_path( __FILE__ ) . 'includes/functions.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/display.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/register_fields.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/register_post_type.php';

// Enqueue CSS
wp_enqueue_style('dbStyle', plugin_dir_url( __FILE__ ) .'/css/dinner_buddy_main.css');

// Enqueue Scripts
wp_register_script( 'dinner_buddy_routing', plugin_dir_url( __FILE__ ) . '/js/routes.js', array('jquery'));
wp_enqueue_script( 'dinner_buddy_routing' );

wp_register_script( 'dinner_buddy_click_events', plugin_dir_url( __FILE__ ) . '/js/click_events.js', array('jquery'));
wp_enqueue_script( 'dinner_buddy_click_events' );

// Get information used for authentication
function rest_edit_scripts() {
    //Make this information available in the click events script
    wp_localize_script( 'dinner_buddy_click_events', 'WPsettings', array(
			'root' => esc_url_raw( rest_url() ),
			'nonce' => wp_create_nonce( 'wp_rest' ),
			'current_ID' => get_the_ID()
		));
}
add_action( 'wp_enqueue_scripts', 'rest_edit_scripts' );
