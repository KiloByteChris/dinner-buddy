jQuery(document).ready( function() {
    /*
        Click event for the "New Recipe" button
    */
    jQuery(".addRecipeButton").on("click", function(){
        console.log(WPsettings.current_ID);
        var newRecipeView = new_recipe_form();
        //jQuery('.dinnerBuddyMainDiv').append(newRecipeView);
        jQuery('.displayDiv').html(newRecipeView);
    });

    /*
        Click event for add ingredients button in the new recipe form
    */
    let newIngredientInputNumber = 1;
    jQuery(".dinnerBuddyMainDiv").on("click", ".addNewIngredient", function(){
        var newIngredientInput = new_recipe_ing(newIngredientInputNumber);
        jQuery('.newIngredientsArea').append(newIngredientInput);
        newIngredientInputNumber++;
    });

    /*
        Click event for submitting a new recipe
    */
    // variable used to hold post id information
    let newRecipeMediaId = '';
    let newMediaId = '';
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
        fd.append( 'caption', 'test media GO!' );
        //console.log wont work for FormData()
        for (var pair of fd.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
        var url = window.location.origin + '/wp-json/wp/v2/recipes';
        jQuery.ajax( {
            url: url,
            method: 'POST',
            beforeSend: function(xhr) {
				xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
			},
            data : newRecipeData
        }).done(function(responseData) {
            newRecipeMediaId = responseData.id;
        }).complete(function (completeData, status){
            fd.append( 'post', newRecipeMediaId);
            for (var pair of fd.entries()) {
                console.log(pair[0]+ ', ' + pair[1]);
            }
            var mediaUrl = window.location.origin + '/wp-json/wp/v2/media';
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
                newMediaId = data.id;
            }).complete(function (completeData, status){
                var featureData = {
                    'featured_media' : newMediaId
                };
                var featureUrl = window.location.origin + '/wp-json/wp/v2/recipes/' + newRecipeMediaId;
                jQuery.ajax({
                    beforeSend: function(xhr) {
         				xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
         			},
                    method: 'PUT',
                    data: featureData,
                    url: featureUrl,
                }).done( function() {
                });// end 3rd ajax call that assigns the featured image to the post
            });// end featured image ajax request
        });// end ajax.complete for post request
    });// end save new recipe click event

    /*
        Click event for Browse Recipes
    */
    jQuery(".dashboard").on("click", ".browseRecipeButton", function(){
        event.preventDefault();
        // Get recent recipe data for the 'browse recipes' view
        var browseRecipesUrl = window.location.origin + '/wp-json/wp/v2/recipes?_embed';
        jQuery.ajax({
            beforeSend: function(xhr) {
                xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
            },
            method: 'GET',
            url: browseRecipesUrl
        }).done( function(data){
            var browseRecipesView = browse_recipes_view(data);
            jQuery('.displayDiv').html(browseRecipesView);
        });
    });// end browse recipes click event

    /*
        Click event for the Calendar button
    */
    jQuery(".dashboard").on("click", ".calendarButton", function(){
        event.preventDefault();
        var calendarView = calendar_view();
        jQuery('.displayDiv').html(calendarView);
    });// end calendar click event

    /*
        Click event for the add button. Creates a recipe in the dock
    */
    jQuery(".dinnerBuddyMainDiv").on("click", ".selectRecipe", function(){
        event.preventDefault();
        console.log(this);
        //var newCard = create_recipe_card();
        //jQuery('#recipeDock').append(recipeCard);
    });// end calendar click event
});// end document.ready
