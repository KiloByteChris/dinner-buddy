jQuery(document).ready( function() {
    /*
        Submitting New Recipe
    */
    let newRecipeMediaId = '';
    let newMediaId = '';
    jQuery(".mtMainDiv").on("click", ".saveRecipeButton", function(){
        event.preventDefault()
        //creates an object to hold ingredient data
        let ingredientsObject = {};
        //create an array from the ingredients list
        var ingredientsData = jQuery('.newIngredientInput');
        var ingredientsAmountData = jQuery('.newIngredientAmount');
        var ingredientsUnitData = jQuery('.newIngredientUnit');
        var count = ingredientsData.length;
        for( var i = 0; i < count; i++){
            var ingredientName = ingredientsData[i].value;
            var amount = ingredientsAmountData[i].value;
            var unit = ingredientsUnitData[i].value;
            var currentIngredient = 'ing' + i;
            var singleIngredientObject = {
                'title' : ingredientName,
                'amount': amount,
                'unit'  : unit
            };
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
        //console.log(imageData);
        let fd = new FormData();
        fd.append( 'file', imageData);
        fd.append( 'caption', 'test media GO!' );
        //console.log wont work for FormData()
        // for (var pair of fd.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]);
        // }
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
            // for (var pair of fd.entries()) {
            //     console.log(pair[0]+ ', ' + pair[1]);
            // }
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
        Search Recipes
    */
    // jQuery(".dashboard").on("click", ".searchRecipeButton", function(){
    //     event.preventDefault();
    //     // Get recent recipe data for the 'browse recipes' view
    //     var browseRecipesUrl = window.location.origin + '/wp-json/wp/v2/recipes?_embed';
    //     jQuery.ajax({
    //         beforeSend: function(xhr) {
    //             xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
    //         },
    //         method: 'GET',
    //         url: browseRecipesUrl
    //     }).done( function(data){
    //         var browseRecipesView = browse_recipes_view(data);
    //         jQuery('.displayDiv').html(browseRecipesView);
    //     });
    // });// end browse recipes click event
    // /*
    //  * Search Recipes
    //  */
    // jQuery(".dashboard").on("click", ".searchRecipeButton", function(){
    //     event.preventDefault();
    //     currentView = 'search';
    //     // Get search term from the search text input
    //     var searchTerm = jQuery('.searchInput').val();
    //     // Get recent recipe data for the 'search recipes' view
    //     var searchRecipesUrl = window.location.origin + '/wp-json/wp/v2/recipes?search=' + searchTerm;
    //     //var searchRecipesUrl = window.location.origin + '/wp-json/wp/v2/recipes?search=' + searchTerm;
    //     //console.log(searchRecipesUrl);
    //     jQuery.ajax({
    //         beforeSend: function(xhr) {
    //             xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
    //         },
    //         method: 'GET',
    //         url: searchRecipesUrl
    //     }).done( function(data){
    //         // Create a main div for displaying the information
    //         let searchViewDiv = '<div id="searchViewDiv">';
    //         searchViewDiv += '</div>';
    //         jQuery('.displayDiv').html(searchViewDiv );
    //         // Make an api call for each of the array elements
    //         // Is there a better way?
    //         data.forEach( function(value, index, array) {
    //             var searchPostUrl = window.location.origin + '/wp-json/wp/v2/recipes/' + value.id+'?_embed';
    //             jQuery.ajax({
    //                 beforeSend: function(xhr) {
    //                     xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
    //                 },
    //                 method: 'GET',
    //                 url: searchPostUrl,
    //             }).done( function(searchResult) {
    //                 var searchViewCard = search_recipes_view(searchResult);
    //                 jQuery('#searchViewDiv').append(searchViewCard, userData);
    //             });
    //         })
    //     });
    //     // Fill in favorite info

    //     // var getFavCall = new APICall;
    //     // var favMetaData = getFavCall.get_favorites(WPsettings.user_ID);
    //     // console.log(favMetaData);
    // });// end search recipes click event








    jQuery('#headerOptions').on('click', '#headerOptionsButton', function() {
        console.log(recipeDockData);
        console.log(calendarData);
        console.log(shoppingListData);
        console.log(sortedShoppingList);
        console.log(userData);
    });
});// end document.ready
