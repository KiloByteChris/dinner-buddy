<?php // Dinner Buddy - Core Function

// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

//Build a div that displays the plugin
function dinner_buddy_main(){

    $dinnerBuddyContainer = '<div class="dinnerBuddyMainDiv">';

    $userInfo = check_user_login();
    if($userInfo){
        // Show the plugin
        $display = New Display;
        $dinnerBuddyContainer .= $display->display_MtHeader();
        $dinnerBuddyContainer .= '<div id="recipeDock">';
        $dinnerBuddyContainer .= '</div>';
        $dinnerBuddyContainer .= '<div class="displayDiv">';
        $dinnerBuddyContainer .= '</div>';
        $dinnerBuddyContainer .= display_dashboard();
    }else{
        // Show login form
        wp_login_form();
        wp_register();
    };
    // $dinnerBuddyContainer .= '<div class="displayDiv">';
    // $dinnerBuddyContainer .= '</div>';
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
