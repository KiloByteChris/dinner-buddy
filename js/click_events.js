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
        event.preventDefault()
        //create an array from the ingredients list
        var ingredientsData = jQuery('.newIngredientInput');
        var ingredientsAmountData = jQuery('.newIngredientAmount');
        var count = ingredientsData.length;
        let ingredientsArray = [];
        let ingredientsObject = {};
        for( var i = 0; i < count; i++){
            var ingredientName = ingredientsData[i].value;
            var amount = ingredientsAmountData[i].value;
            var currentIngredient = 'ing' + i;
            var singleIngredientObject = {};
            singleIngredientObject[ingredientName] = amount
            // ingredientsObject[ingredientName] = amount;
            ingredientsObject[currentIngredient] = singleIngredientObject;
            // ingredientsArray.push({ingredient_name  : ingredientName, ingredient_amount : amount});
            ingredientsArray.push({ingredientName : amount});
        }
        console.log(ingredientsObject);
        // Create an object from the new recipe form data
        var newRecipeData = {
            title: jQuery('#newRecipeTitleInput').val(),
            content: jQuery('#newRecipeDescription').val(),
            servings: jQuery('#newRecipeServingsInput').val(),
            // ingredients: ingredientsArray,
            ingredients: ingredientsObject,
            instructions: jQuery('#newRecipeInstructions').val(),
            status: 'publish',
        };

        var url = window.location.origin + '/wp-json/wp/v2/recipes';
        console.log(url);
        // var url ='http://dinner-buddy.local/wp-json/wp/v2/recipes/56';
        jQuery.ajax( {
           url: url,
           method: 'POST',
           beforeSend: function(xhr) {
				xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
			},
        data : newRecipeData
        } ).done( function ( response ) {
           //console.log( response );
        } );
    });
});
