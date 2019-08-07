<?php
/*
Plugin Name: Dinner Buddy
Description: This plugin is designed to help create a weekly meal plan.
Plugin URI:  https://plugin-planet.com/
Author:      Chris McGuire
Version:     1.0
*/

function dinnerBuddy_Main(){
    echo "Dinner Buddy!";
}
add_shortcode( 'DinnerBuddy', 'dinnerBuddy_Main' );
