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
        $dashboardString .= '<button class="dashboardButton calendarButton">Calendar</button>';
        $dashboardString .= '<button class="dashboardButton addRecipeButton">Add New</button>';
        $dashboardString .= '<button class="dashboardButton browseRecipeButton">Browse</button>';
        $dashboardString .= '<button class="dashboardButton searchRecipeButton">Search</button>';
        $dashboardString .= '<button class="dashboardButton shoppingListButton">Shopping List</button>';
        // $dashboardString .= '<button class="dashboardButton searchRecipeButton">Search</button>';
        // $dashboardString .= '<button class="dashboardButton shoppingListButton">Shopping List</button>';
        $dashboardString .= '<label for="weeklyServings" class="weeklyServingsLabel">Group Size</label>';
        $dashboardString .= '<select class="weeklyServings" name="weeklyServings">';
        for($i=1; $i<13; $i++){
            $dashboardString .= '<option value='.$i.'>'.$i.'</option>';
        }
        $dashboardString .= '</select>';
    $dashboardString .= '</div>';
    $dashboardString .= '<div id="recipeDock">';
    $dashboardString .= '</div>';
    // echo $dashboardString;
    return $dashboardString;
}
?>
