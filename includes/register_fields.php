<?php
/*
    Register custom post fields and their callback functions
*/

// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//add custom fields meta data to a recipe post
function get_recipe_data() {
    //add custom field for recipe servings
    register_rest_field(
        'recipes' ,
        'servings',
        array(
            'get_callback'    => function($callbackData, $postData) {
				return get_post_meta($callbackData['id'], 'servings', false);
				},
            'update_callback' => function($callbackData, $postData) {
                update_post_meta($postData->ID, 'servings', $callbackData);
                return;
                },
            'schema' => null,
        )
    );
    // add custom field for instructions
    register_rest_field(
        'recipes' ,
        'instructions',
        array(
			'get_callback'    => function($callbackData, $postData) {
				return get_post_meta($callbackData['id'], 'instructions', false);
				},
				'update_callback' => function($callbackData, $postData) {
                update_post_meta($postData->ID, 'instructions', $callbackData);
                return;
				},
            'schema' => null,
        )
    );
    // add custom fields for ingredients
    register_rest_field(
        'recipes' ,
        'ingredients',
        array(
			'get_callback'    => function($callbackData, $postData) {
				return get_post_meta($callbackData['id'], 'ingredients', false);
				},
            'update_callback' => function($callbackData, $postData) {
                $values = json_encode($callbackData);
                update_post_meta($postData->ID, 'ingredients', $values);
                return;
                },
            'schema' => null,
        )
    );
}
add_action( 'rest_api_init', 'get_recipe_data');

/**
 * User Favorites Meta
 */
function user_favorites_update($callbackData, $postData) {
    print_r('$callbackData');
    add_user_meta(1, 'favorites', 344366, false);
}
function favorite_recipe_register() {
    register_rest_field(
        'user' ,
        'favorites',
        array(
            'get_callback'    => function($callbackData, $postData) {
                return get_user_meta($callbackData['id'], 'favorites', false);
            },
            'update_callback' => 'user_favorites_update',
            // 'update_callback' => function($callbackData, $postData) {
            //     add_user_meta($postData->ID, 'favorites', 66, false);
            //     if($callbackData['method'] == 'add'){
            //         add_user_meta($postData->ID, 'favorites', $callbackData['favorite'], false);
            //     }else if($callbackData['method'] == 'delete') {
            //         delete_user_meta($postData->ID, 'favorites', $callbackData['favorite']);
            //     }
            // },
            'schema' => null,
        )
    );
}
add_action( 'rest_api_init', 'favorite_recipe_register');



?>
