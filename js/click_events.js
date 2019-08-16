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
    // create a variable used to hold post id information
    let newRecipeMediaId = '';
    //console.log(newRecipeMediaId);
    jQuery(".dinnerBuddyMainDiv").on("click", ".saveRecipeButton", function(){
        event.preventDefault()
        //creates an object to hold ingredient data
        let ingredientsObject = {};
        //create an array from the ingredients list
        var ingredientsData = jQuery('.newIngredientInput');
        var ingredientsAmountData = jQuery('.newIngredientAmount');
        var count = ingredientsData.length;

        for( var i = 0; i < count; i++){
            var ingredientName = ingredientsData[i].value;
            var amount = ingredientsAmountData[i].value;
            var currentIngredient = 'ing' + i;
            var singleIngredientObject = {};
            singleIngredientObject[ingredientName] = amount
            ingredientsObject[currentIngredient] = singleIngredientObject;
        }
        // Create an object from the new recipe form data
        var newRecipeData = {
            title: jQuery('#newRecipeTitleInput').val(),
            content: jQuery('#newRecipeDescription').val(),
            servings: jQuery('#newRecipeServingsInput').val(),
            ingredients: ingredientsObject,
            instructions: jQuery('#newRecipeInstructions').val(),
            status: 'publish',
        };

        //select the featured image from the new recipes form
        let imageData = jQuery('#newRecipeImage')[0].files[0];

        var url = window.location.origin + '/wp-json/wp/v2/recipes';
        jQuery.ajax( {
           url: url,
           method: 'POST',
           beforeSend: function(xhr) {
				xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
			},

        data : newRecipeData

        }).done(function(responseData) {
            //console.log(responseData);
            newRecipeMediaId = responseData.id;
            //console.log(newRecipeMediaId);

        }).complete(function (completeData, status){
            //console.log(completeData);
            //console.log(status);
            //console.log(newRecipeMediaId);
            //console.log(imageData);
            var formData = new FormData();
            formData.append( 'file', imageData);
            formData.append( 'post', newRecipeMediaId);
            formData.append( 'caption', 'caption' );
            var imageRequestData = {
                post: newRecipeMediaId,
                file: imageData,
            };
            // console.log(imageRequestData);
            console.log(formData);
            var mediaUrl = window.location.origin + '/wp-json/wp/v2/media';
            jQuery.ajax({
                method: 'POST',
                data: formData,
                url: mediaUrl
            }).done( function(data){
                console.log('all the way done')
                console.log(data);
            });// end featured image ajax request
        });// end ajax.complete for post request
    });// end click event
});// end document.ready
