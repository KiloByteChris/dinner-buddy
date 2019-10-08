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
            // get length of recipeDockData
            var keys = Object.keys(recipeDockData);
            var keyCount = keys.length;
            // add 1
            var cardCount = keyCount + 1;
            // create a new recipe card 
            const newCard = new RecipeCard(data, cardCount);
            // add card to recipe dock data
            recipeDockData['card' + cardCount] = newCard;
        });
    }
}
