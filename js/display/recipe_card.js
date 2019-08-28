/*
    Generates the recipe card in the recipes dock after it has been selected
*/
function create_recipe_card(data){
    console.log(data);
    var recipeCard = '<div class="recipeCard">';
    recipeCard += '<p class="recipeCardTitle">'+data.title.rendered+'</p>';
    recipeCard += '<p class="recipeCardServings">'+data.servings[0]+'</p>';
    recipeCard += '<button class="recipeCardX">X</button>';
    recipeCard += '</div>';
    return recipeCard;

}
