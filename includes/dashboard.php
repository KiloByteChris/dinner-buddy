<?php
// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/*
    Build and display the dashbaord
*/
function display_dashboard(){
    $dashboardString = '<div class="dashboard" id="dashboard">';
    $dashboardString .= '<button class="addRecipeButton">Add New</button>';
    $dashboardString .= '<button class="browseRecipeButton">Browse</button>';
    $dashboardString .= '<button class="searchRecipeButton">Search</button>';
    $dashboardString .= '<button class="shoppingListButton">Shopping List</button>';
    $dashboardString .= '</div>';
    echo $dashboardString;
}
?>
