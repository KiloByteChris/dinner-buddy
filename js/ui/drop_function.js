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
    // assign values to session storage
    mt_sess_set_recipe(event.target.id, recipeTitle);
    // show recipe title in calendar div
    var calendarRecipe = jQuery('#' + event.target.id +' > .calendarRecipe');
    calendarRecipe.text(sessionStorage[event.target.id])
    // show serving
    var calendarServing = jQuery('#' + event.target.id +'> .calendarServing');
    calendarServing.text(sessionStorage[event.target.id + 'Serving']);
    // show delete button
    jQuery('#' + event.target.id +' > .calendarDelete').show();
    // show servings
    jQuery('#' + event.target.id +' > .calendarServing').text('1');
    // show adjust servings buttons
    jQuery('#' + event.target.id +' > .adjustServing').removeClass('hide');
    jQuery('#' + event.target.id +' > .adjustServing').addClass('show');

}
