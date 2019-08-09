// Directs the plugin depending on what actuion was requested

// New Recipe Click Event
jQuery(document).ready(function(){
    jQuery(".addRecipeButton").on("click", function(){
        // Build the new recipe form
	    let newRecipeView = '';
        newRecipeView += '<div class="newRecipeViewDiv">';
        newRecipeView += '<form class="newRecipeForm">';
        newRecipeView += '<p>Add a new recipe</p>';
        //Text input for recipe title
        newRecipeView += '<label for="newRecipeTitle">Recipe Name</label>';
        newRecipeView += '<input type="text" name="newRecipeTitle" id="newRecipeTitleInput">';
        // Textarea for the recipe description
        newRecipeView += '<label for="newRecipeDescription">Description</label>';
        newRecipeView += '<textarea name="newRecipeDescription" class="newRecipeDescription" id="newRecipeDescription">Mutha... Fucka... </textarea>';
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
        newRecipeView += '<button type="button" class="addNewIngedient">+</button>';
        newRecipeView += '<div class="newIngredientsArea"></div>';
        newRecipeView += '</fieldset>';
        // Description
        newRecipeView += '<label for="newRecipeInstructions">Instructions</label>';
        newRecipeView += '<textarea name="newRecipeInstructions" id="newRecipeInstructions" class="newRecipeInstructions">Mutha... Fucka... 2</textarea>';
        // Submit button
        newRecipeView += '<button type="button" class="saveRecipeButton">Save Recipe</button>';
        // end
        newRecipeView += '</form>';
        newRecipeView += '</div>';
        // Display the form
        jQuery('.dinnerBuddyMainDiv').append(newRecipeView);
    });
})
