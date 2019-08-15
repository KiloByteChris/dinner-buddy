<?php // Dinner Buddy - Core Function

// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

//Build a div that displays the plugin
function dinner_buddy_main(){
    $dinnerBuddyContainer = '<div class="dinnerBuddyMainDiv">';
    $dinnerBuddyContainer .= '<p>Dinner Buddy!</p>';
    $dinnerBuddyContainer .= '<button class="addRecipeButton">Add Recipe</button>';
    $dinnerBuddyContainer .= '</div>';
    return $dinnerBuddyContainer;
}
// Register the short code
add_shortcode( 'DinnerBuddy', 'dinner_buddy_main' );

// Register custom post type for use with recipes
function register_new_recipe() {
	$labels = array(
		'name'               => _x( 'Recipes', 'post type general name', 'dinner-buddy' ),
		'singular_name'      => _x( 'Recipe', 'post type singular name', 'dinner-buddy' ),
		'menu_name'          => _x( 'Recipes', 'admin menu', 'dinner-buddy' ),
		'name_admin_bar'     => _x( 'Recipe', 'add new on admin bar', 'dinner-buddy' ),
		'add_new'            => _x( 'Add New', 'Recipe', 'dinner-buddy' ),
		'add_new_item'       => __( 'Add New Recipe', 'dinner-buddy' ),
		'new_item'           => __( 'New Recipe', 'dinner-buddy' ),
		'edit_item'          => __( 'Edit Recipe', 'dinner-buddy' ),
		'view_item'          => __( 'View Recipe', 'dinner-buddy' ),
		'all_items'          => __( 'All Recipes', 'dinner-buddy' ),
		'search_items'       => __( 'Search Recipes', 'dinner-buddy' ),
		'parent_item_colon'  => __( 'Parent Recipes:', 'dinner-buddy' ),
		'not_found'          => __( 'No Recipes found.', 'dinner-buddy' ),
		'not_found_in_trash' => __( 'No Recipes found in Trash.', 'dinner-buddy' )
	);

	$args = array(
		'labels'             => $labels,
        'description'        => __( 'Post type for recipes', 'dinner-buddy' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'recipe' ),
		'capability_type'    => 'post',
        'show_in_rest'       => true,
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'custom-fields' ),
        'taxonomies'         => array('category', 'post_tag' )
	);
	register_post_type( 'Recipes', $args );
}
add_action( 'init', 'register_new_recipe' );

//add custom fields meta data to a recipe post
function get_recipe_data() {
    register_rest_field(
        //Custom post type
        'recipes' ,
        //Custom field name
        'servings',
        array(
            'get_callback'    => 'slug_get_recipe',
            'update_callback' => function($callbackData, $postData) {
                $fieldName = array_keys($callbackData);
                // print_r($callbackData);
                // print_r($callbackData['servings'][0]);
                 print_r($postData);
                print_r($postData->ID);
                // print_r($fieldName[0]);
                // print_r($callbackData[0]);

                // update_post_meta($postData->id, $fieldName[0], $callbackData[0]);
                update_post_meta($postData->ID, $fieldName[0], $callbackData['servings'][0]);
                return;
                },
            'schema' => null,
        )
    );
}
add_action( 'rest_api_init', 'get_recipe_data' );

function slug_get_recipe($callbackData, $postData) {
    return get_post_meta($postData->id);
}
