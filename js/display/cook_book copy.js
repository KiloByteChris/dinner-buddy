/** 
 *  !!! SEARCH VIEW !!!
 */
function cook_book_view(data) {
    var cookBookView = '<div class="cookBookView" id="cookBookView">';
    for(var key in data) {
        cookBookView += '<div id='+'recipePreview'+data[key].id+' class="recipePreview">';
        // title
        cookBookView += '<h3 class="browseRecipeTitle" id='+ 'browseRecipeTitle'+ data[key].id +' >' + data[key].title.rendered + '</h3>';
        // author
        cookBookView += '<h4 id='+'browseRecipeAuthor'+data[key].id+ ' class="browseRecipeAuthor">' + data[key]._embedded.author[0].name + '</h4>';
        // image
        cookBookView += '<img id='+'browseRecipeImg'+data[key].id+' class="browseRecipeImg" src='+data[key]._embedded['wp:featuredmedia'][0].source_url+'>';
        // excerpt
        // cookBookView += '<p id='+'browseRecipeDescription'+data[key].id+' class="browseRecipeDescription">' + data[key].excerpt.rendered + '</p>';
        cookBookView += data[key].excerpt.rendered;
        // favorite button
        console.log(userData);
        for(fav in userData.favorites){
            console.log(userData.favorites[fav] );
            if(userData.favorites[fav]== data[key].id) {
                console.log('match');
                cookBookView += '<i id='+'star'+data[key].id+ ' class="far fa-star favoriteStar set"></i>';

            }
        }
        cookBookView += '<i id='+'star'+data[key].id+ ' class="far fa-star favoriteStar unSet"></i>';
        // add button
        cookBookView += '<button id='+data[key].id+ ' name="add" class="selectRecipe" value="add">Add</button>';
        cookBookView += '</div>';
    }
    cookBookView += '</div>'; // end cookBookView div
    return cookBookView;
}
