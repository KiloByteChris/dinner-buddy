/*
    Build and display the main calendar
*/
function calendar_view() {
    var calendarViewString = '';
    var daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    calendarViewString += '<div id="calendarDiv" class="calendarDiv">';
        //Breakfast
        calendarViewString += '<div class="breakfastLabelDiv">';
        calendarViewString += '<p id="breakfastLabel" class="mealLabel">Breakfast</p>';
        calendarViewString += '</div>';
        for(var i=0 ; i<7 ; i++ ){
            calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'Breakfast >';
            calendarViewString += '<p id="'+daysArray[i]+'B" class="dayLabel">'+daysArray[i]+'</p>'
            calendarViewString += '</div>'; // end serving
        }
        // Lunch
        calendarViewString += '<div class="lunchLabelDiv">';
        calendarViewString += '<p id="lunchLabel" class="mealLabel">Lunch</p>';
        calendarViewString += '</div>';
        for(var i=0 ; i<7 ; i++ ){
            calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'Lunch >';
            calendarViewString += '<p id="'+daysArray[i]+'L " class="dayLabel">'+daysArray[i]+'</p>'
            calendarViewString += '</div>'; // end serving
        }
        // Dinner
        calendarViewString += '<div class="dinnerLabelDiv">';
        calendarViewString += '<p id="dinnerLabel" class="mealLabel">Dinner</p>';
        calendarViewString += '</div>';
        for(var i=0 ; i<7 ; i++ ){
            calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'Dinner >';
            calendarViewString += '<p id="'+daysArray[i]+'D" class="dayLabel">'+daysArray[i]+'</p>'
            calendarViewString += '</div>'; // end serving
        }
    calendarViewString += '</div>';
    return calendarViewString;
}
