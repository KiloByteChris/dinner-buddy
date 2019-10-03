/*
    Recipe card object
*/
class RecipeCard {
    constructor(data, cardCount) {
        this.recipeID = data.id;
        this.recipeTitle = data.title.rendered;
        this.recipeServings = data.servings[0];
        this.cardID = cardCount;
    }
}
