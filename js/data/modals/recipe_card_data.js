/*
    Recipe card object
*/
class RecipeCard {
    constructor(data) {
        this.recipeID = data.id;
        this.recipeTitle = data.title.rendered;
        this.recipeServings = data.servings[0];
    }
}
