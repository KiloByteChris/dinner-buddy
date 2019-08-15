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
add_action( 'rest_api_init', 'get_recipe_data' );
function get_recipe_data() {
    register_rest_field(
        //post type
        'recipes' ,
        // field name
        'servings',
        array(
            'get_callback'    => 'slug_get_recipe',
            'update_callback' => function($recipes, $callback) {
                    //echo $recpies;
                    //print_r($callback);
                    print_r($recipes);
                    update_post_meta(56, 'servings', $callback->servings);
                    return $callback;
                },
            'schema' => null,
        )
    );
}

function slug_get_recipe() {
    return get_post_meta(56);
}

// function update_recipe($data) {
//     print_r($data);
//     echo "hello!!!";
//     //update_post_meta(56, 'servings', )
// }
