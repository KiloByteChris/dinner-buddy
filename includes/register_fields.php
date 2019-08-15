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
            'get_callback'    => 'slug_get_recipe',
            'update_callback' => function($callbackData, $postData) {
                update_post_meta($postData->ID, 'servings', $callbackData);
                return;
                },
            'schema' => null,
        )
    );
    //add custom field for recipe description
    register_rest_field(
        'recipes' ,
        'description',
        array(
            'get_callback'    => 'slug_get_recipe',
            'update_callback' => function($callbackData, $postData) {
                update_post_meta($postData->ID, 'description', $callbackData);
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
            'get_callback'    => 'slug_get_recipe',
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
            'get_callback'    => 'slug_get_recipe',
            'update_callback' => function($callbackData, $postData) {
                $values = json_encode($callbackData);
                update_post_meta($postData->ID, 'ingredients', $values);
                return;
                },
            'schema' => null,
        )
    );
}
add_action( 'rest_api_init', 'get_recipe_data' );

function slug_get_recipe($callbackData, $postData) {
    return get_post_meta($postData->ID);
}


?>
