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
        //Custom post type
        'recipes' ,
        //Custom field name
        'servings',
        array(
            'get_callback'    => 'slug_get_recipe',
            'update_callback' => function($callbackData, $postData) {
                $fieldName = array_keys($callbackData);
                update_post_meta($postData->ID, $fieldName[0], $callbackData['servings'][0]);
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
