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
        // set URL
        //console.log(newFavData);
        var url = window.location.origin + '/wp-json/wp/v2/users/' + userId;
        //Create Post Data
        var favPostData = {
            postData: newFavData,
        };
        jQuery.ajax( {
            url: url,
            method: 'POST',
            beforeSend: function(xhr) {
                xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
            },
            data : favPostData
            //data : newFavData
        }).done( function(data){
            console.log("outhere1");
            console.log(data);
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
            browseRecipeData = {};
            for(var i = 0; i < data.length; i++){
                // Get Featured Image via Embed
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
                        // Display Results
                        jQuery('#searchResults').html(cook_book_card(browseRecipeData));
                        fav_setter(userData);
                });
            }
        });
    }
    /**
     * Get 10 User Favorites
     */
    // get_user_favs(userData) {
    //     console.log(userData['favorites']);
    //     for(var fav in userData['favorites']) {
    //         //var url = window.location.origin + '/wp-json/wp/v2/recipes/' + userData['favorites'][fav];
    //         console.log(url);
    //         jQuery.ajax({
    //             beforeSend: function(xhr) {
    //             xhr.setRequestHeader( 'X-WP-Nonce' , WPsettings.nonce);
    //             },
    //             method: 'GET',
    //             url: url
    //             }).done( function(embedData){
    //                 console.log(embedData);
    //                 // Assign values to 'browseRecipeData object
    //                 userFavorites[embedData.id] = embedData;
    //                 // Display Results
    //                 //jQuery('#userFavoritesView').html(fav_updater(userFavorites));
                    
    //         });
    //     }
    // }
}
