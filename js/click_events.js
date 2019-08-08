jQuery(document).ready( function() {
    let newIngredientInputNumber = 1;
    // Add ingredient button in the add new recipe form
    jQuery(".dinnerBuddyMainDiv").on("click", ".addNewIngedient", function(){
        // Build the form input

        let newIngredientInput = '<label for='+'newIngredientInput'+newIngredientInputNumber+' >'+newIngredientInputNumber+'. Name</label>';
        newIngredientInput += '<input type="text" name='+'newIngredientInput'+newIngredientInputNumber+' >';

        newIngredientInput += '<label for='+'newIngredientAmount'+newIngredientInputNumber+' >Amount</label>';
        newIngredientInput += '<input type="text" name='+'newIngredientAmount'+newIngredientInputNumber+' >';

        jQuery('.newIngredientsArea').append(newIngredientInput);

        newIngredientInputNumber++;
    });
});
