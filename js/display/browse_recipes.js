/*
    Build a view that displays the 10 most recent recipes added to the database
*/
function browse_recipes_view(data) {
    var browseRecipeView = '';
    browseRecipeView += '<div class="browseRecipeView" id="browseRecipeView">';
    for(var key in data) {
        browseRecipeView += '<div id='+'recipePreview'+data[key].id+' class="recipePreview">';
        // title
        browseRecipeView += '<h3 class="browseRecipeTitle" id='+ 'browseRecipeTitle'+ data[key].id +' >' + data[key].title.rendered + '</h3>';
        // author
        browseRecipeView += '<h4 id='+'browseRecipeAuthor'+data[key].id+ ' class="browseRecipeAuthor">' + data[key]._embedded.author[0].name + '</h4>';
        // image
        browseRecipeView += '<img id='+'browseRecipeImg'+data[key].id+' class="browseRecipeImg" src='+data[key]._embedded['wp:featuredmedia'][0].source_url+'>';
        // excerpt
        // browseRecipeView += '<p id='+'browseRecipeDescription'+data[key].id+' class="browseRecipeDescription">' + data[key].excerpt.rendered + '</p>';
        browseRecipeView += data[key].excerpt.rendered;
        // favorite button
        browseRecipeView += '<i id='+'star'+data[key].id+ ' class="far fa-star favoriteStar unSet"></i>';
        // add button
        browseRecipeView += '<button id='+data[key].id+ ' name="add" class="selectRecipe" value="add">Add</button>';
        browseRecipeView += '</div>';
    }
    browseRecipeView += '</div>'; // end browseRecipeView div
    return browseRecipeView;
}
