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
    /**
     *  Add Favorite Recipe
     */
    add_favorite(userId, newFavData) {
        //console.log(recipeId);
        var url = window.location.origin + '/wp-json/wp/v2/users/' + userId;
            var favoriteData = {
                favorites: newFavData,
            };
            jQuery.ajax( {
                url: url,
                method: 'POST',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
                },
                data : favoriteData
            }).done( function(data){
                //console.log(data);
                }
            );
    }
    /**
     *  Get Favorite Recipe Data
     */
    get_favorites(userId) {
        var url = window.location.origin + '/wp-json/wp/v2/users/' + userId;
        jQuery.ajax( {
            url: url,
            method: 'GET',
            beforeSend: function(xhr) {
                xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
            },
        }).done( function(data){
            //console.log(data);
            }
        );

    }
    /**
     *  Get User Data
     */
    get_user(userId) {
        var url = window.location.origin + '/wp-json/wp/v2/users/' + userId;
        jQuery.ajax( {
            url: url,
            method: 'GET',
            beforeSend: function(xhr) {
                xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
            },
        }).done( function(data){
            // Assign data to user data object
            userData = {
                name : data.name,
                id   : data.id,
                description : data.description,
                favorites : data.favorites,
                avatars : data.avatar_urls
            }
        });
    }
    /**
     * Get 10 Latest Recipes
     * ! uses get_feat_img() !
     */
    browse_recipes() {
        var url = window.location.origin + '/wp-json/wp/v2/recipes';
        jQuery.ajax({
            beforeSend: function(xhr) {
                xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
            },
            method: 'GET',
            url: url
        }).done( function(data){
            // Iterate through recipe data
            for(var i = 0; i < data.length; i++){
                // Check for duplicates
                if(browseRecipeData.hasOwnProperty(data[i].id)){
                    // Do nothing
                }else if(!browseRecipeData.hasOwnProperty(data[i].id)){
                    // Get Featured Image
                    var url = window.location.origin + '/wp-json/wp/v2/recipes/' + data[i].id + '?_embed';
                    jQuery.ajax({
                        beforeSend: function(xhr) {
                        xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
                        },
                        method: 'GET',
                        url: url
                        }).done( function(embedData){
                            // Assign values to 'browseRecipeData object
                            browseRecipeData[embedData.id] = embedData;
                    });
                }
            }
            console.log(browseRecipeData);
        });
    }
}
