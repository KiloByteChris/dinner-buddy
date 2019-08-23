<?php // Dinner Buddy - Core Function

// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

//Build a div that displays the plugin
function dinner_buddy_main(){

    $dinnerBuddyContainer = '<div class="dinnerBuddyMainDiv">';
    $dinnerBuddyContainer .= '<p>Dinner Buddy!</p>';

    $userInfo = check_user_login();
    if($userInfo){
        // Show the plugin
        //wp_logout();
        $dinnerBuddyContainer .= '<button class="addRecipeButton">Add New</button>';
        $dinnerBuddyContainer .= '<button class="browseRecipeButton">Browse</button>';
        $dinnerBuddyContainer .= '<button class="searchRecipeButton">Search</button>';
        $dinnerBuddyContainer .= '<button class="shoppingListButton">Shopping List</button>';
    }else{
        // Show login form
        wp_login_form();
        wp_register();
    };
    $dinnerBuddyContainer .= '</div>';
    return $dinnerBuddyContainer;
}
// Register the short code
add_shortcode( 'DinnerBuddy', 'dinner_buddy_main' );

// User Login
function check_user_login(){
    $user = wp_get_current_user();
    if($user->exists()) {
        return $user;
    } else {
        return false;
    };
}
//add_action( 'init', 'check_user_login');
