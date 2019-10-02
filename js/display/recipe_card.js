/*
    Create Recipe Card
*/
function create_recipe_card(data){
    var recipeCard = '<div id=' + 'card' + data.cardID + ' value=' + data.cardID+' class="recipeCard draggable ui-widget-content">';
    //var recipeCard = '<div id='+'card'+data.id+' class="recipeCard">';
    recipeCard += '<p class="recipeCardTitle">' + data.recipeTitle+'</p>';
    recipeCard += '<p class="recipeCardServings">' + data.recipeServings+'</p>';
        // Button to delete card
    recipeCard += '<button value=' + data.cardID+ ' class="recipeCardX">X</button>';
    recipeCard += '</div>';
    return recipeCard;
}
