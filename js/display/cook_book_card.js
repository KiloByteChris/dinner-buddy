/**
 * Cook Book Entries
 */
function cook_book_card(data){
    for(var key in data) {
        var cookBookCard = '<div id='+'recipePreview'+data[key].id+' class="recipePreview">';
        // title
        cookBookCard += '<h3 class="browseRecipeTitle" id='+ 'browseRecipeTitle'+ data[key].id +' >' + data[key].title.rendered + '</h3>';
        // author
        cookBookCard += '<h4 id='+'browseRecipeAuthor'+data[key].id+ ' class="browseRecipeAuthor">' + data[key]._embedded.author[0].name + '</h4>';
        // image
        cookBookCard += '<img id='+'browseRecipeImg'+data[key].id+' class="browseRecipeImg" src='+data[key]._embedded['wp:featuredmedia'][0].source_url+'>';
        // excerpt
        // cookBookView += '<p id='+'browseRecipeDescription'+data[key].id+' class="browseRecipeDescription">' + data[key].excerpt.rendered + '</p>';
        cookBookCard += data[key].excerpt.rendered;
        // favorite button
        console.log(userData);
        for(fav in userData.favorites){
            console.log(userData.favorites[fav] );
            if(userData.favorites[fav]== data[key].id) {
                console.log('match');
                cookBookCard += '<i id='+'star'+data[key].id+ ' class="far fa-star favoriteStar set"></i>';

            }
        }
        cookBookCard += '<i id='+'star'+data[key].id+ ' class="far fa-star favoriteStar unSet"></i>';
        // add button
        cookBookCard += '<button id='+data[key].id+ ' name="add" class="selectRecipe" value="add">Add</button>';
        cookBookCard += '</div>';
    }
    return cookBookCard;
}