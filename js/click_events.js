jQuery(document).ready( function() {
    let newIngredientInputNumber = 1;
    // Add ingredient button in the add new recipe form
    jQuery(".dinnerBuddyMainDiv").on("click", ".addNewIngedient", function(){
        // Build the form input

        let newIngredientInput = '<label for='+'newIngredientInput'+newIngredientInputNumber+' >'+newIngredientInputNumber+'. Name</label>';
        newIngredientInput += '<input type="text" class="newIngredientInput" name='+'newIngredientInput'+newIngredientInputNumber+' >';

        newIngredientInput += '<label for='+'newIngredientAmount'+newIngredientInputNumber+' >Amount</label>';
        newIngredientInput += '<input type="text" class="newIngredientAmount" name='+'newIngredientAmount'+newIngredientInputNumber+' >';

        jQuery('.newIngredientsArea').append(newIngredientInput);

        newIngredientInputNumber++;
    });

    jQuery(".dinnerBuddyMainDiv").on("click", ".saveRecipeButton", function(){
        //create an array from the ingredients list
        var ingredientsData = jQuery('.newIngredientInput');
        var ingredientsAmountData = jQuery('.newIngredientAmount');
        var count = ingredientsData.length;
        let ingredientsArray = [];
        for( var i = 0; i < count; i++){
            var IngredientName = ingredientsData[i].value;
            var amount = ingredientsAmountData[i].value;
            ingredientsArray.push({ingredient_name : IngredientName,ingredient_amount : amount});
        }

        // Create an object from the new recipe form data
        var newRecipeData = {
            title: jQuery('#newRecipeTitleInput').val(),
            description: jQuery('#newRecipeDescription').val(),
            servings: jQuery('#newRecipeServingsInput').val(),
            ingredients: ingredientsArray,
            instructions: jQuery('#newRecipeInstructions').val()
        };
        console.log(newRecipeData);

    });
});
