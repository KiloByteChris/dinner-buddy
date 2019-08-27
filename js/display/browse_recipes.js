function browse_recipes_view(data) {
    var browseRecipeView = '';
    // console.log(data);
    browseRecipeView += '<div class="browseRecipeView" id="browseRecipeView">';
    for(var key in data) {
        browseRecipeView += '<div class="recipePreview">';
        // title
        browseRecipeView += '<h3 class="browseRecipeTitle">' + data[key].title.rendered + '</h3>';
        // author
        browseRecipeView += '<h4 class="browseRecipeTitle">' + data[key]._embedded.author[0].name + '</h4>';
        // image
        browseRecipeView += '<img class="browseRecipeImg" src='+data[key]._embedded['wp:featuredmedia'][0].source_url+'>';
        // excerpt
        browseRecipeView += '<p class="browseRecipeDescription">' + data[key].excerpt.rendered + '</p>';
        // add button
        browseRecipeView += '<button name="add" class="add" value="add">Add</button>';


        browseRecipeView += '</div>';
    }
    browseRecipeView += '</div>'; // end browseRecipeView div
    return browseRecipeView;
}
