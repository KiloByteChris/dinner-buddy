/*
   Droppable Event Function
   Triggered when a recipe card is dropped on a calendar day
*/
function drop_function(event, ui) {
    //
    var default_servings = 1;
    // Get id of dropped card
    var cardId = ui.draggable.context.id;
    // Use id to select card title
    var recipeTitle = jQuery('#'+cardId+' > .recipeCardTitle').text();
    // use id to select current servings
    var recipeServings = jQuery('#'+cardId+' > .recipeCardServings').text();
    // Save title and servings to calendar data
    calendarData[event.target.id] = recipeTitle;
    calendarData[event.target.id + 'Serv'] = default_servings;
    // Update calendar data display
    calendar_update(calendarData);
    console.log(calendarData);
}
