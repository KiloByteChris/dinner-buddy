function browse_recipes_view(data) {
    var browseRecipeView = '';
    console.log(data);
    console.log(typeof data);
    browseRecipeView += '<div class="browseRecipeView" id="browseRecipeView">';
    for(var key in data) {
        console.log(data[key].title.rendered);
        browseRecipeView += '<div class="recipePreview">';
        browseRecipeView += '<h3 class="browseRecipeTitle">' + data[key].title.rendered + '</h3>';

        browseRecipeView += '</div>';
    }
    browseRecipeView += '</div>'; // end browseRecipeView div
    return browseRecipeView;
}
