/*
    Build and display the main calendar
*/
function calendar_view() {
    var calendarViewString = '';
    var daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    calendarViewString += '<div id="calendarDiv" class="calendarDiv">';
    // Loop through the days array and create calendar days
    for(var i=0 ; i<7 ; i++ ){
        calendarViewString += '<div id='+ daysArray[i] + 'Div '+' class="dayDiv">';
        calendarViewString += '<h4 class=>'+daysArray[i]+'</h4>'
            //Breakfast
            if(i<=0){
                calendarViewString += '<div class="breakfastLabelDiv">';
                calendarViewString += '<p class="mealLabel">Breakfast</p>';
                calendarViewString += '</div>';
            };
            calendarViewString += '<div class="mealDiv">';
                // if(i<=0){
                //   calendarViewString += '<p class="mealLabel mtBreakfast">Breakfast</p>';
                // };
                calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'Breakfast >';
                calendarViewString += '</div>'; // end serving
            calendarViewString += '</div>';// end meal
            //Lunch
            calendarViewString += '<div class="mealDiv">';
                if(i<=0){
                  calendarViewString += '<p class="mealLabel">Lunch</p>';
                }
                calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'Lunch >';
                calendarViewString += '</div>'; // end serving
            calendarViewString += '</div>';// end meal
            //Dinner
            calendarViewString += '<div class="mealDiv">';
                if(i<=0){
                  calendarViewString += '<p class="mealLabel">Dinner</p>';
                }
                calendarViewString += '<div class="servingContainer droppable ui-widget-header" id='+daysArray[i]+'Dinner >';
                calendarViewString += '</div>'; // end serving
            calendarViewString += '</div>';// end meal
        calendarViewString += '</div>';// end day
    };
    calendarViewString += '</div>';
    return calendarViewString;
}
