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
        Display Header
    */
    public function display_MtHeader() {
        $MtHeaderString = '<div id="MtHeader">';
            // Title
            $MtHeaderString .= '<div id="headerTitle">';
                $MtHeaderString .= '<h2>MealTime!</h2>';
            $MtHeaderString .= '</div>';
            // Options
            $MtHeaderString .= '<div id="headerOptions">';
                $MtHeaderString .= '<button id="clearFavorites">Clear Favorites</button>';
                $MtHeaderString .= '<button id="headerOptionsButton">Log Data</button>';
            $MtHeaderString .= '</div>';
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
        Display Main Content
    */
    public function display_MtMainContent() {
        $MtContent = '<div id="displayDiv" class="displayDiv">';
        $MtContent .= '</div>';
        return $MtContent;
    }
    /*
        Display Dashboard
    */
    public function display_MtDashboard() {
        $dashboardString = '<div class="dashboard" id="dashboard">';
            // Calendar button
            $dashboardString .= '<button class="dashboardButton calendarButton">';
            $dashboardString .= '<i class="fa fa-calendar" aria-hidden="true"></i>';
            $dashboardString .= '</button>';
            // Search button
            $dashboardString .= '<button id="cookBookButton" class="dashboardButton cookBookButton">';
            $dashboardString .= '<i class="fas fa-search"></i>';
            $dashboardString .= '</button>';
            // New recipe  button
            $dashboardString .= '<button class="dashboardButton addRecipeButton">';
            $dashboardString .= '<i class="fas fa-plus"></i>';
            $dashboardString .= '</button>';
            // Favorite recipes button
            $dashboardString .= '<button class="dashboardButton favoriteRecipeButton">';
            $dashboardString .= '<i class="far fa-star"></i>';
            $dashboardString .= '</button>';
            // Shopping list button
            $dashboardString .= '<button class="dashboardButton shoppingListButton">';
            $dashboardString .= '<i class="fas fa-tasks"></i>';
            $dashboardString .= '</button>';
            // $dashboardString .= '<button class="dashboardButton searchRecipeButton">Search</button>';
            // $dashboardString .= '<button class="dashboardButton shoppingListButton">Shopping List</button>';
            // $dashboardString .= '<label for="weeklyServings" class="weeklyServingsLabel">Group Size</label>';
            // $dashboardString .= '<select class="weeklyServings" name="weeklyServings">';
            // for($i=1; $i<13; $i++){
            //     $dashboardString .= '<option value='.$i.'>'.$i.'</option>';
            // }
            // $dashboardString .= '</select>';
        $dashboardString .= '</div>';
        return $dashboardString;
    }
}
