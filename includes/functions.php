<?php // Dinner Buddy - Core Function

// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


function dinner_buddy_Main(){
    $dinnerBuddyContainer = '<div class="dinnerBuddyMainDiv">';
    $dinnerBuddyContainer .= '<p>Dinner Buddy!</p>';
    $dinnerBuddyContainer .= '<button class="addRecipeButton">Add Recipe</button>';
    $dinnerBuddyContainer .= '</div>';
    return $dinnerBuddyContainer;
}
add_shortcode( 'DinnerBuddy', 'dinner_buddy_Main' );

// Register custome post type for use with recipes
function add_recipe_post_type() {
	$args = array(
		'labels'             => array( 'name' => 'Recipes' ),
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'recipe' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => null,
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
    );
	register_post_type( 'recipe', $args );
}
add_action( 'init', 'add_recipe_post_type' );

// Post to the new post type
