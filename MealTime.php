<?php
/*
Plugin Name: MealTime
Description: This plugin is designed to help create a weekly meal plan.
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
wp_enqueue_style('dbStyle', plugin_dir_url( __FILE__ ) .'/css/mt_main.css');
wp_enqueue_style('mtCalendar', plugin_dir_url( __FILE__ ) .'/css/mt_calendar.css');

// Enqueue Scripts
wp_enqueue_script( 'jquery-ui-core' );
wp_enqueue_script( 'jquery-ui-widget' );
wp_enqueue_script( 'jquery-ui-draggable' );
wp_enqueue_script( 'jquery-ui-droppable' );

// wp_register_script( 'dinner_buddy_routing', plugin_dir_url( __FILE__ ) . '/js/routes.js', array('jquery'));
// wp_enqueue_script( 'dinner_buddy_routing' );

wp_register_script( 'mt_click_events', plugin_dir_url( __FILE__ ) . '/js/click_events.js', array('jquery'));
wp_enqueue_script( 'mt_click_events' );

wp_register_script( 'new_recipe_form', plugin_dir_url( __FILE__ ) . '/js/display/new_recipe_form.js', array('jquery'));
wp_enqueue_script( 'new_recipe_form' );

wp_register_script( 'browse_recipes', plugin_dir_url( __FILE__ ) . '/js/display/browse_recipes.js', array('jquery'));
wp_enqueue_script( 'browse_recipes' );

wp_register_script( 'calendar', plugin_dir_url( __FILE__ ) . '/js/display/calendar.js', array('jquery'));
wp_enqueue_script( 'calendar' );

wp_register_script( 'recipe_cards', plugin_dir_url( __FILE__ ) . '/js/display/recipe_card.js', array('jquery'));
wp_enqueue_script( 'recipe_cards' );

wp_register_script( 'search_recipes', plugin_dir_url( __FILE__ ) . '/js/display/search_recipes.js', array('jquery'));
wp_enqueue_script( 'search_recipes' );

wp_register_script( 'mt_sess_data', plugin_dir_url( __FILE__ ) . '/js/data/session_data.js', array('jquery'));
wp_enqueue_script( 'mt_sess_data' );

wp_register_script( 'drop_function', plugin_dir_url( __FILE__ ) . '/js/ui/drop_function.js', array('jquery'));
wp_enqueue_script( 'drop_function' );



// Get information used for authentication
function rest_edit_scripts() {
    //Make this information available in the click events script
    wp_localize_script( 'mt_click_events', 'WPsettings', array(
			'root' => esc_url_raw( rest_url() ),
			'nonce' => wp_create_nonce( 'wp_rest' ),
			'current_ID' => get_the_ID()
		));
}
add_action( 'wp_enqueue_scripts', 'rest_edit_scripts' );
