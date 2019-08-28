/*
    Generates the recipe card in the recipes dock after it has been selected
*/
function create_recipe_card(data){
    // console.log(data);
    var recipeCard = '<div id='+'card'+data.id+' class="recipeCard draggable ui-widget-content">';
    //var recipeCard = '<div id='+'card'+data.id+' class="recipeCard">';
        recipeCard += '<p class="recipeCardTitle">'+data.title.rendered+'</p>';
        recipeCard += '<p class="recipeCardServings">'+data.servings[0]+'</p>';
        // Button to delete card
        recipeCard += '<button value='+data.id+ ' class="recipeCardX">X</button>';
    recipeCard += '</div>';
    return recipeCard;

}
