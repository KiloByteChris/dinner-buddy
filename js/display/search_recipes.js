/*
    This function displays the results of a recipe search
*/
function search_recipes_view(data){
    console.log(data);
    var searchViewString = '<div id="searchView" class="searchView">';
    data.forEach( function(value, index, array) {
        // select title
        var title = value.title.rendered;
        console.log(value.title.rendered);
        // console.log(index);
        // console.log(array);
        // console.log(value[index]);

        searchViewString += '<div id='+'recipePreview'+value.id+' class="recipePreview">';
        // title
        searchViewString += '<h3 class="browseRecipeTitle" id='+ 'browseRecipeTitle'+ value.id +' >' + value.title.rendered + '</h3>';
        // author
        // searchViewString += '<h4 id='+'browseRecipeAuthor'+value.id+ ' class="browseRecipeAuthor">' + data[key]._embedded.author[0].name + '</h4>';
        // image
        // searchViewString += '<img id='+'browseRecipeImg'+data[key].id+' class="browseRecipeImg" src='+data[key]._embedded['wp:featuredmedia'][0].source_url+'>';
        // excerpt
        // browseRecipeView += '<p id='+'browseRecipeDescription'+data[key].id+' class="browseRecipeDescription">' + data[key].excerpt.rendered + '</p>';
        // searchViewString += data[key].excerpt.rendered;
        // add button
        // searchViewString += '<button id='+data[key].id+ ' name="add" class="selectRecipe" value="add">Add</button>';
        searchViewString += '</div>';
    });
    searchViewString += '</div>';
    return searchViewString;

}
