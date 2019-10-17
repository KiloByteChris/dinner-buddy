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

/*
	Controllers
*/
wp_register_script( 'mt_click_events', plugin_dir_url( __FILE__ ) . '/js/click_events.js', array('jquery'));
wp_enqueue_script( 'mt_click_events' );

wp_register_script( 'mt_controllers', plugin_dir_url( __FILE__ ) . '/js/controllers/controllers.js', array('jquery'));
wp_enqueue_script( 'mt_controllers' );

wp_register_script( 'mt_sort_utility', plugin_dir_url( __FILE__ ) . '/js/controllers/utilities/sort_shopping_list.js', array('jquery'));
wp_enqueue_script( 'mt_sort_utility' );

/*
	Data
*/
// API Call
wp_register_script( 'mt_api_call', plugin_dir_url( __FILE__ ) . '/js/data/api_call/api_call.js', array('jquery'));
wp_enqueue_script( 'mt_api_call' );
// User Data
wp_register_script( 'mt_user_data', plugin_dir_url( __FILE__ ) . '/js/data/models/user_data.js', array('jquery'));
wp_enqueue_script( 'mt_user_data' );
// Recipe Card Data
wp_register_script( 'mt_recipe_card_data', plugin_dir_url( __FILE__ ) . '/js/data/models/recipe_card_data.js', array('jquery'));
wp_enqueue_script( 'mt_recipe_card_data' );
// Recipe Dock Data
wp_register_script( 'mt_recipe_dock_data', plugin_dir_url( __FILE__ ) . '/js/data/models/recipe_dock_data.js', array('jquery'));
wp_enqueue_script( 'mt_recipe_dock_data' );
// Calendar Data
wp_register_script( 'mt_calendar_data', plugin_dir_url( __FILE__ ) . '/js/data/models/calendar_data.js', array('jquery'));
wp_enqueue_script( 'mt_calendar_data' );
// Shopping List Data
wp_register_script( 'mt_shopping_list_data', plugin_dir_url( __FILE__ ) . '/js/data/models/shopping_list_data.js', array('jquery'));
wp_enqueue_script( 'mt_shopping_list_data' );
// Meal Time Helper Data
wp_register_script( 'mt_data', plugin_dir_url( __FILE__ ) . '/js/data/mt_data.js', array('jquery'));
wp_enqueue_script( 'mt_data' );
/*
	Display
*/
wp_register_script( 'new_recipe_form', plugin_dir_url( __FILE__ ) . '/js/display/new_recipe_form.js', array('jquery'));
wp_enqueue_script( 'new_recipe_form' );

wp_register_script( 'browse_recipes', plugin_dir_url( __FILE__ ) . '/js/display/browse_recipes.js', array('jquery'));
wp_enqueue_script( 'browse_recipes' );

wp_register_script( 'calendar', plugin_dir_url( __FILE__ ) . '/js/display/calendar.js', array('jquery'));
wp_enqueue_script( 'calendar' );

wp_register_script( 'recipe dock', plugin_dir_url( __FILE__ ) . '/js/display/recipe_dock.js', array('jquery'));
wp_enqueue_script( 'recipe dock' );

wp_register_script( 'recipe_cards', plugin_dir_url( __FILE__ ) . '/js/display/recipe_card.js', array('jquery'));
wp_enqueue_script( 'recipe_cards' );

wp_register_script( 'search_recipes', plugin_dir_url( __FILE__ ) . '/js/display/search_recipes.js', array('jquery'));
wp_enqueue_script( 'search_recipes' );

wp_register_script( 'mt_update_calendar', plugin_dir_url( __FILE__ ) . '/js/display/update/calendar_update.js', array('jquery'));
wp_enqueue_script( 'mt_update_calendar' );

wp_register_script( 'mt_recipe_dock_update', plugin_dir_url( __FILE__ ) . '/js/display/update/recipe_dock_update.js', array('jquery'));
wp_enqueue_script( 'mt_recipe_dock_update' );

wp_register_script( 'mt_shopping_list', plugin_dir_url( __FILE__ ) . '/js/display/shopping_list.js', array('jquery'));
wp_enqueue_script( 'mt_shopping_list' );

wp_register_script( 'drop_function', plugin_dir_url( __FILE__ ) . '/js/ui/drop_function.js', array('jquery'));
wp_enqueue_script( 'drop_function' );
//Session Data
wp_register_script( 'mt_sess_data', plugin_dir_url( __FILE__ ) . '/js/data/session_data.js', array('jquery'));
wp_enqueue_script( 'mt_sess_data' );


// Get information used for authentication
function rest_edit_scripts() {
    //Make this information available in the click events script
    wp_localize_script( 'mt_click_events', 'WPsettings', array(
		'root' => esc_url_raw( rest_url() ),
		'nonce' => wp_create_nonce( 'wp_rest' ),
		'current_ID' => get_the_ID(),
		'user_ID' => get_current_user_id()
	));
	wp_localize_script( 'mt_controllers', 'WPsettings', array(
		'root' => esc_url_raw( rest_url() ),
		'nonce' => wp_create_nonce( 'wp_rest' ),
		'current_ID' => get_the_ID(),
		'user_ID' => get_current_user_id()
	));
    wp_localize_script( 'mt_api_call', 'WPsettings', array(
		'root' => esc_url_raw( rest_url() ),
		'nonce' => wp_create_nonce( 'wp_rest' ),
		'current_ID' => get_the_ID(),
		'user_ID' => get_current_user_id()
	));
}
add_action( 'wp_enqueue_scripts', 'rest_edit_scripts' );
