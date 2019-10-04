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
        calendarViewString += '<div class="' + meal.toLowerCase() + 'LabelDiv">';
        calendarViewString += '<p id="' + meal.toLowerCase() +'Label" class="mealLabel">'+meal+'</p>';
        calendarViewString += '</div>';
        for (var j = 0; j < daysArray.length; j++) {
            var currentMeal = daysArray[j] + mealKeys[i];
            // Meal Container
            calendarViewString += '<div class="servingContainer droppable ui-widget-header" id=' + currentMeal + '>';
            //day label
            calendarViewString += '<p id="' + daysArray[i] + meal + '" class="dayLabel">' + daysArray[i] + '</p>'
            //delete button
            calendarViewString += '<button id="' + currentMeal + 'Delete" class="calendarDelete"><i class="fa fa-remove"></i></button>'
            //recipe
            calendarViewString += '<p id="' + currentMeal + 'Recipe" class="calendarRecipe">';
            calendarViewString += '</p>';
            // Serving
            calendarViewString += '<p id="' + currentMeal + 'Servings" class="calendarServing">';
            calendarViewString += '';
            calendarViewString += '</p>';
            calendarViewString += '<button id="' + currentMeal + 'Sub" class="adjustServing servingSub hide">-</button>';
            calendarViewString += '<button id="' + currentMeal + 'Add" class="adjustServing servingAdd hide">+</button>';
            calendarViewString += '</div>';
        }
    }
    calendarViewString += '</div>'; 
    return calendarViewString;
}

