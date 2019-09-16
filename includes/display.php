<?php
/*
This class is used to display the MealTime plugin
*/

// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Display {
    /*
        Display the header
    */
    public function display_MtHeader() {
        $MtHeaderString = '<div id="MtHeader">';
        $MtHeaderString .= '<h2>MealTime!</h2>';
        $MtHeaderString .= '</div>';
        return $MtHeaderString;
    }
    /*
        Display the recipe dock
    */
    public function display_MtRecipeDock() {
        $MtDockString = '<div id="recipeDock">';
        $MtDockString .= '</div>';
        return $MtDockString;
    }
    /*
        Display the main content div
    */
    public function display_MtMainContent() {
        $MtContent = '<div id="displayDiv" class="displayDiv">';
        $MtContent .= '</div>';
        return $MtContent;
    }
    /*
        Display the dashboard
    */
    public function display_MtDashboard() {
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
        return $dashboardString;
    }
}
