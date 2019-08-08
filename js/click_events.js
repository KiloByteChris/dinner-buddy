jQuery(document).ready( function() {
    let newIngredientInputNumber = 1;
    // Add ingredient button in the add new recipe form
    jQuery(".dinnerBuddyMainDiv").on("click", ".addNewIngedient", function(){
        // Build the form input

        let newIngredientInput = '<label for=""<input type="text">';
        // jQuery('.newIngredientsArea').append();
        newIngredientInputNumber++;
        console.log(newIngredientInputNumber);
    });
});
