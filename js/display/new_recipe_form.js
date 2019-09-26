/*
    Build the new recipe form
*/
function new_recipe_form(){
    let newRecipeView = '';
    newRecipeView += '<div class="newRecipeViewDiv">';
    newRecipeView += '<form class="newRecipeForm">';
    newRecipeView += '<p>Add a new recipe</p>';
    //Text input for recipe title
    newRecipeView += '<label for="newRecipeTitle">Recipe Name</label>';
    newRecipeView += '<input type="text" name="newRecipeTitle" id="newRecipeTitleInput">';
    // Textarea for the recipe description
    newRecipeView += '<label for="newRecipeDescription">Description</label>';
    newRecipeView += '<textarea name="newRecipeDescription" class="newRecipeDescription" id="newRecipeDescription"></textarea>';
    // Select input for servings
    newRecipeView += '<label for="newRecipeServings">Servings</label>';
    newRecipeView += '<select name="newRecipeServings" id="newRecipeServingsInput">';
        for(var i=1 ;i<13 ;i++) {
            newRecipeView += '<option value="'+i+'" class="newRecipeServingValue">'+i+'</option>';
        }
    newRecipeView += '</select>';
    // Ingredients
    newRecipeView += '<fieldset id="ingredientsField">';
    newRecipeView += '<legend>Ingredients</legend>';
    newRecipeView += '<button type="button" class="addNewIngredient">+</button>';
    newRecipeView += '<div class="newIngredientsArea"></div>';
    newRecipeView += '</fieldset>';
    // Description
    newRecipeView += '<label for="newRecipeInstructions">Instructions</label>';
    newRecipeView += '<textarea name="newRecipeInstructions" id="newRecipeInstructions" class="newRecipeInstructions"></textarea>';
    // Image input
    newRecipeView += '<label for="newRecipeImage">Image</label>';
    newRecipeView += '<input type="file" id="newRecipeImage" class="newRecipeImage" name="newRecipeImage" accept="image/*">';
    // Submit button
    newRecipeView += '<button type="button" class="saveRecipeButton">Save Recipe</button>';
    // end
    newRecipeView += '</form>';
    newRecipeView += '</div>';
    return newRecipeView;
}

/*
    Build text inputs for new ingredients
*/
function new_recipe_ing(newIngredientInputNumber) {
    // Build the form input
    var newIngredientInput = '<label for='+'newIngredientInput'+newIngredientInputNumber+' >'+newIngredientInputNumber+'. Name</label>';
    newIngredientInput += '<input type="text" class="newIngredientInput" name='+'newIngredientInput'+newIngredientInputNumber+' >';
    newIngredientInput += '<label for='+'newIngredientAmount'+newIngredientInputNumber+' >Amount</label>';
    newIngredientInput += '<input type="text" class="newIngredientAmount" name='+'newIngredientAmount'+newIngredientInputNumber+' >';
    return newIngredientInput;
}
