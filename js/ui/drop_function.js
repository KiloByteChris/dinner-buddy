/*
    This function controls the droppable event from the main calendar.
    It is triggered when a recipe card is dropped onto a meal div on the main calendar.
*/
function drop_function(event, ui){
    // get the ID of the card that has been dropped
    var cardId = ui.draggable.context.id;
    // use the id to select the title of the card
    var recipeTitle = jQuery('#'+cardId+' > .recipeCardTitle').text();
    // use the id to select the current number of servings from the card
    var recipeServings = jQuery('#'+cardId+' > .recipeCardServings').text();
    // get the number of people in the group
    var groupSize = jQuery('.weeklyServings').val();
    // build meal card
    var leftOver = Number(recipeServings) - Number(groupSize);
    var mealCard = '<p class="mealCardTitle">'+recipeTitle+'</p>';
    mealCard += '<p class="mealCardServings">'+groupSize+'</p>';
    // Display the meal card
    jQuery('#' + event.target.id).html(mealCard);
    // update recipe card with leftover value
    jQuery('#'+cardId+' > .recipeCardServings').text(leftOver);
}
