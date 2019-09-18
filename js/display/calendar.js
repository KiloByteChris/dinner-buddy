/*
    Build and display the main calendar
*/
function calendar_view() {
    var calendarViewString = '';
    var daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    calendarViewString += '<div id="calendarDiv" class="calendarDiv">';
        // Loop through the days array and create calendar day labels
        for(var i=0 ; i<7 ; i++ ){
            calendarViewString += '<div id='+ daysArray[i] + 'BDiv '+' class="dayDiv">';
            calendarViewString += '<h4 class="'+daysArray[i]+'">'+daysArray[i]+'</h4>';
            calendarViewString += '</div>';
        };
        //Breakfast
        calendarViewString += '<div class="breakfastLabelDiv">';
        calendarViewString += '<p id="breakfastLabel" class="mealLabel">Breakfast</p>';
        calendarViewString += '</div>';
        for(var i=0 ; i<7 ; i++ ){
            calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'Breakfast >';
            calendarViewString += '</div>'; // end serving
        }
        // Lunch
        calendarViewString += '<div class="lunchLabelDiv">';
        calendarViewString += '<p id="lunchLabel" class="mealLabel">Lunch</p>';
        calendarViewString += '</div>';
        for(var i=0 ; i<7 ; i++ ){
            calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'Lunch >';
            calendarViewString += '</div>'; // end serving
        }
        // Dinner
        calendarViewString += '<div class="dinnerLabelDiv">';
        calendarViewString += '<p id="dinnerLabel" class="mealLabel">Dinner</p>';
        calendarViewString += '</div>';
        for(var i=0 ; i<7 ; i++ ){
            calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'Dinner >';
            calendarViewString += '</div>'; // end serving
        }
    calendarViewString += '</div>';
    return calendarViewString;
}
