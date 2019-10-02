/*
    Initiates the api call class
*/
class APICall {
    /*
     * Create Recipe Card AJAX request 
     */
    createRecipeCard(postID) {
        let cardData = {};
        // Set the ajax method
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
            
            // get the length of the recipeDockData object
            var length = Object.keys(recipeDockData);
            var cardCount = length.length;
            // create a new recipe card object
            const newCard = new RecipeCard(data, cardCount);
            console.log(newCard);
            //recipeDockData.push(newCard);
            //console.log(recipeDockData);
            //console.log(data);
            //console.log(newCard);
        });
    }
}
