<?php
/*
This class is used to display the Dinner Buddy pluign
*/

// exit if file is called directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Display {
    public function display_MtHeader() {
        $MtHeaderString = '<div id="MtHeader">';
        $MtHeaderString .= '<h2>MealTime!</h2>';
        $MtHeaderString .= '</div>';
        return $MtHeaderString;
    }
    function display_weather_buddy() {

    }

    function display_home() {
        $dbDisplayHome = '<div class="dbDisplayHome">';

        $dbDisplayHome .= '</div>';
    }
}


 ?>
