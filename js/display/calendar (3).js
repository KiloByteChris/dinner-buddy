/*
    Calendar View
*/
function calendar_view(daysArray, mealKeys) {
    var calendarViewString = '<div id="calendarDiv" class="calendarDiv">';
    for (var i = 0; i < mealKeys.length; i++) {
        //meal label
        switch (mealKeys[i]) {
            case "B":
                var meal = "Breakfast"
                break
            case "L":
                var meal = "Lunch"
                break
            case "D":
                var meal = "Dinner"
                break
        }
        calendarViewString += '<div class="' + meal + 'LabelDiv">';
        calendarViewString += '<p id="' + meal +'Label" class="mealLabel">${meal}</p>';
        calendarViewString += '</div>';
        for (var j = 0; j < daysArray.length; j++) {
        }
    }
    calendarViewString += '</div>'; 
}
function calendar_view() {
    var calendarViewString = '';
    var daysArray = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    calendarViewString += '<div id="calendarDiv" class="calendarDiv">';
        //Breakfast
        //meal label
        calendarViewString += '<div class="breakfastLabelDiv">';
        calendarViewString += '<p id="breakfastLabel" class="mealLabel">Breakfast</p>';
        calendarViewString += '</div>';
    for (var i = 0; i < daysArray.length ; i++ ){
            // Meal Container
            calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'B >';
                //day label
                calendarViewString += '<p id="'+daysArray[i]+'Breakfast" class="dayLabel">'+daysArray[i]+'</p>'
                //delete button
                calendarViewString += '<button id="'+daysArray[i]+'BDelete" class="calendarDelete"><i class="fa fa-remove"></i></button>'
                //recipe
                calendarViewString += '<p id="'+daysArray[i]+'BRecipe" class="calendarRecipe">';
                calendarViewString +='</p>';
                // Serving
                calendarViewString += '<p id="'+daysArray[i]+'BServings" class="calendarServing">';
                calendarViewString += '';
                calendarViewString += '</p>';
                calendarViewString += '<button id="'+daysArray[i]+'BSub" class="adjustServing servingSub hide">-</button>';
                calendarViewString += '<button id="'+daysArray[i]+'BAdd" class="adjustServing servingAdd hide">+</button>';
                    
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
