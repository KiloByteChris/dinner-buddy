/*
    Initiates the api call class
*/
class APICall {
    /*
     * Create Recipe Card AJAX request 
     */
    createRecipeCard(postID) {
        // Set ajax method
        var method = "GET";
        // build a url for getting recipe posts
        var url = window.location.origin + '/wp-json/wp/v2/recipes/' + postID;
        jQuery.ajax({
            beforeSend: function(xhr) {
                xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
            },
            method: method,
            url: url
        }).done( function(data) {
            cardIdCount++;
            // create a new recipe card 
            const newCard = new RecipeCard(data, cardIdCount);
            // add card to recipe dock data
            recipeDockData['card' + cardIdCount] = newCard;
            // add ingredient data
            shoppingListData['card' + cardIdCount] = JSON.parse(data.ingredients[0]);
            // Display
            jQuery('#recipeDock').html(dock_view());
            update_dock(recipeDockData);
        });
    }

    add_favorite(userId, recipeId) {
        //console.log(userId);
        var url = window.location.origin + '/wp-json/wp/v2/users/' + userId;
            var favoriteData = {
                favorites: recipeId
            };
            jQuery.ajax( {
                url: url,
                method: 'POST',
                //method: 'GET',

                beforeSend: function(xhr) {
                    xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
                },
                data : favoriteData
            });
    }
}
