/*
 *  Update Calendar View Display
 */
function calendar_update(calendarData) {
    // systematically iterate trhough the calendar elements and apply their matching data
    var daysArray = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var idStrings = {
        breakfast: [
            'B',
            'Breakfast',
            'BDelete',
            'BRecipe',
            'BServings',
        ],
        lunch: [
            'L',
            'Lunch',
            'LDelete',
            'LRecipe',
            'LServings',
        ],
        Dinner: [
            'D',
            'Dinner',
            'DDelete',
            'DRecipe',
            'DServings',
        ]
    }
    for(var i = 1; i <= daysArray.length; i++) {
        console.log(i);
        jQuery(daysArray[i] + 'B').text(calendarData[daysArray[i]] + 'BRecipe');
    }
}