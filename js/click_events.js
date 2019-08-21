jQuery(document).ready( function() {
    /*
        Click event for the "New Recipe" button
    */
    jQuery(".addRecipeButton").on("click", function(){
        var newRecipeView = new_recipe_form();
        jQuery('.dinnerBuddyMainDiv').append(newRecipeView);
    });

    /*
        Click event for add ingredients button in the new recipe form
    */
    let newIngredientInputNumber = 1;
    jQuery(".dinnerBuddyMainDiv").on("click", ".addNewIngedient", function(){
        var newIngredientInput = new_recipe_ing(newIngredientInputNumber);
        jQuery('.newIngredientsArea').append(newIngredientInput);
        newIngredientInputNumber++;
    });

    /*
        Click event for submitting a new recipe
    */
    // variable used to hold post id information
    let newRecipeMediaId = '';
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
        console.log(imageData);
        let fd = new FormData();
        fd.append( 'file', imageData);
        //fd.append( 'post', newRecipeMediaId);
        fd.append( 'caption', 'test media GO!' );
        //console.log wont work for FormData()
        for (var pair of fd.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }

        var mediaUrl = window.location.origin + '/wp-json/wp/v2/media';
        console.log(mediaUrl);
        jQuery.ajax({
            beforeSend: function(xhr) {
                xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
            },
            processData: false,
			contentType: false,
            method: 'POST',
            data: fd,
            url: mediaUrl
        }).done( function(data){
            console.log('all the way done')
            console.log(data);
        });
        // var url = window.location.origin + '/wp-json/wp/v2/recipes';
        // jQuery.ajax( {
        //     url: url,
        //     method: 'POST',
        //     beforeSend: function(xhr) {
		// 		xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
		// 	},
        //     data : newRecipeData
        // }).done(function(responseData) {
        //     //console.log(responseData);
        //     newRecipeMediaId = responseData.id;
        //     //console.log(newRecipeMediaId);
        //
        // }).complete(function (completeData, status){
        //     //fd.append( 'post', newRecipeMediaId);
        //     // var imageRequestData = {
        //     //     //post: newRecipeMediaId,
        //     //     file: imageData,
        //     // };
        //     console.log('HERE!');
        //     var mediaUrl = window.location.origin + '/wp-json/wp/v2/media';
        //     jQuery.ajax({
        //         beforeSend: function(xhr) {
     	// 			xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
     	// 		},
        //         method: 'POST',
        //         data: fd,
        //         url: mediaUrl
        //     }).done( function(data){
        //         console.log('all the way done')
        //         console.log(data);
        //     });// end featured image ajax request
        // });// end ajax.complete for post request
    });// end click event
});// end document.ready
