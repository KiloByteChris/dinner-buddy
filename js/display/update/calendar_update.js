/*
 *  Update Calendar View Display
 */
function calendar_update(calendarData, daysArray, mealKeys) {
    for (var i = 0; i < daysArray.length; i++) {
        for (var j = 0; j < mealKeys.length; j++) {
            var currentMeal = daysArray[i] + mealKeys[j];
            // Title Update
            jQuery('#' + currentMeal + 'Recipe').text(calendarData[daysArray[i] + mealKeys[j]]);
            // Servings Update
            jQuery('#' + currentMeal + 'Servings').text(calendarData[daysArray[i] + mealKeys[j] + 'Serv'] );
            // If meal is set, display controls
            if (calendarData[currentMeal] != '') {
                // Delete Button
                jQuery('#' + currentMeal + ' > .calendarDelete').show();
                // Servings Adjust
                jQuery('#' + currentMeal + ' > .adjustServing').removeClass('hide');
                jQuery('#' + currentMeal + ' > .adjustServing').addClass('show');
            }
        }
    }
}

