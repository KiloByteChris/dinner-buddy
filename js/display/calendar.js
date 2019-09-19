/*
    Build and display the main calendar
*/
function calendar_view() {
    var calendarViewString = '';
    var daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    calendarViewString += '<div id="calendarDiv" class="calendarDiv">';
        //Breakfast
        //meal label
        calendarViewString += '<div class="breakfastLabelDiv">';
        calendarViewString += '<p id="breakfastLabel" class="mealLabel">Breakfast</p>';
        calendarViewString += '</div>';
        for(var i=0 ; i<7 ; i++ ){
            // Meal Container
            calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'Breakfast >';
                //day label
                calendarViewString += '<p id="'+daysArray[i]+'B" class="dayLabel">'+daysArray[i]+'</p>'
                //delete button
                calendarViewString += '<button id="'+daysArray[i]+'BDelete" class="calendarDelete"><i class="fa fa-remove"></i></button>'
                //recipe
                calendarViewString += '<p id="'+daysArray[i]+'BRecipe" class="calendarRecipe">';
                    // check if recipe is set
                    if(sessionStorage[daysArray[i] + 'Breakfast']) {
                        calendarViewString += sessionStorage[daysArray[i] + 'Breakfast'];
                    } else {
                        calendarViewString += '';
                    }
                calendarViewString +='</p>';
                // Serving
                    if(sessionStorage[daysArray[i] + 'BreakfastServing']) {
                        calendarViewString += '<p id="'+daysArray[i]+'BServings" class="calendarServing">';
                            calendarViewString += sessionStorage[daysArray[i] + 'BreakfastServing'];
                        calendarViewString += '</p>';
                        calendarViewString += '<button id="'+daysArray[i]+'BSub" class="adjustServing servingSub show">-</button>';
                        calendarViewString += '<button id="'+daysArray[i]+'BAdd" class="adjustServing servingAdd show">+</button>';
                    } else {
                        calendarViewString += '<p id="'+daysArray[i]+'BServings" class="calendarServing">';
                            calendarViewString += '';
                        calendarViewString += '</p>';
                        calendarViewString += '<button id="'+daysArray[i]+'BSub" class="adjustServing servingSub hide">-</button>';
                        calendarViewString += '<button id="'+daysArray[i]+'BAdd" class="adjustServing servingAdd hide">+</button>';
                    }
            calendarViewString += '</div>';
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
