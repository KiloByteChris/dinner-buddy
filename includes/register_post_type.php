<?php
// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

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
add_action( 'init', 'register_new_recipe' ); ?>
