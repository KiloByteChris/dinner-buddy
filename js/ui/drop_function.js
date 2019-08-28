/*
    This function controls the droppable event from the main calendar.
    It is triggered when a recipe card is dropped onto a meal div on the main calendar.
*/
function drop_function(event, ui){
    console.log('droppin!');
    console.log(event);
    console.log(ui);
    jQuery( this ).addClass( "dropped" );
}
