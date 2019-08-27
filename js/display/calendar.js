/*
    Build and display the main calendar
*/
function calendar_view() {
    var calendarViewString = '';
    var daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    calendarViewString += '<div id="calendarDiv" class="calendarDiv">';
    calendarViewString += '<form id="calendarForm" class="calendarForm">';
    // Loop through the days array and create caledar days
    for(var i=0 ; i<7 ; i++ ){
        calendarViewString += '<fieldset id='+ daysArray[i] + 'Field '+' class="dayField">';
        calendarViewString += '<legend class="dayLabel">'+daysArray[i]+'</legend>';
        //Breakfast
        calendarViewString += '<label for='+ daysArray[i] + 'Breakfast '+ 'class="breakfastLabel">Breakfast</label>';
        calendarViewString += '<input type="text" name='+ daysArray[i] + 'Breakfast '+ 'class="breakfastInput">';
        //Lunch
        calendarViewString += '<label for='+ daysArray[i] + 'Lunch '+ 'class="lunchLabel">Lunch</label>';
        calendarViewString += '<input type="text" name='+ daysArray[i] + 'Lunch '+ 'class="LunchInput">';
        //Dinner
        calendarViewString += '<label for='+ daysArray[i] + 'Dinner '+ 'class="dinnerLabel">Dinner</label>';
        calendarViewString += '<input type="text" name='+ daysArray[i] + 'Dinner '+ 'class="DinnerInput">';

        calendarViewString += '</fieldset>';
    };
    calendarViewString += '</form>';
    calendarViewString += '</div>';
    return calendarViewString;
}
