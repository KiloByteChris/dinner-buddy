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
