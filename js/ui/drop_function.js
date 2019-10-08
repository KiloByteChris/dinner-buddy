/*
   Droppable Event Function
   Triggered when a recipe card is dropped on a calendar day
*/
function drop_function(event, ui, defaultServings) {
    // Use the card ID to select data from recipeDockData
    var cardData = recipeDockData[ui.draggable.context.id];
    // Save title and servings to calendar data
    calendarData[event.target.id] = cardData.recipeTitle;
    calendarData[event.target.id + 'Serv'] = defaultServings;
    // Update calendar data display
    calendar_update(calendarData, daysArray, mealKeys);
}
