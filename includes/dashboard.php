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
        $dashboardString .= '<button class="calendarButton">Calendar</button>';
        $dashboardString .= '<button class="addRecipeButton">Add New</button>';
        $dashboardString .= '<button class="browseRecipeButton">Browse</button>';
        $dashboardString .= '<input type="text" class="searchInput" />';
        $dashboardString .= '<button class="searchRecipeButton">Search</button>';
        $dashboardString .= '<button class="shoppingListButton">Shopping List</button>';
        $dashboardString .= '<label for="weeklyServings" class="weeklyServingsLabel">Group</label>';
        $dashboardString .= '<select class="weeklyServings" name="weeklyServings">';
        for($i=1; $i<13; $i++){
            $dashboardString .= '<option value='.$i.'>'.$i.'</option>';
        }
        $dashboardString .= '</select>';
    $dashboardString .= '</div>';
    $dashboardString .= '<div id="recipeDock">';
    $dashboardString .= '</div>';
    echo $dashboardString;
}
?>
