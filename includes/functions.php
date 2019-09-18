<?php // Dinner Buddy - Core Function

// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

//Build a div that displays the plugin
function dinner_buddy_main(){

    $MtContainer = '<div class="dinnerBuddyMainDiv">';

    $userInfo = check_user_login();
    if($userInfo){
        // Show the plugin
        $display = New Display;
        $MtContainer .= $display->display_MtHeader();
        $MtContainer .= $display->display_MtMainContent();
        $MtContainer .= $display->display_MtRecipeDock();
        $MtContainer .= $display->display_MtDashboard();
    }else{
        // Show login form
        wp_login_form();
        wp_register();
    };
    $MtContainer .= '</div>';
    return $MtContainer;
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
