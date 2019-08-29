/*
    This function displays the results of a recipe search
*/
function search_recipes_view(data){
    console.log(data);
    let searchViewDiv = '<div id="searchView" class="searchView">';
    data.forEach( function(value, index, array) {
        // ajax call to get embedded information for each post
        var searchCardString = get_search_data(value);
        searchViewDiv += searchCardString;
        console.log(searchCardString);
        // var searchPostUrl = window.location.origin + '/wp-json/wp/v2/recipes/' + value.id+'?_embed';
        // var searchViewString
        // jQuery.ajax({
        //     method: 'GET',
        //     url: searchPostUrl,
        // }).done( function(data, ) {
        //     console.log(data);
        //     searchViewString += '<h4 id='+'browseRecipeAuthor'+value.id+ ' class="browseRecipeAuthor">' + data._embedded.author[0].name + '</h4>';
        //
        // });
        // searchViewString += '<div id='+'recipePreview'+value.id+' class="recipePreview">';
        // title
        // searchViewString += '<h3 class="browseRecipeTitle" id='+ 'browseRecipeTitle'+ value.id +' >' + value.title.rendered + '</h3>';
        // author
        // image
        // searchViewString += '<img id='+'browseRecipeImg'+data[key].id+' class="browseRecipeImg" src='+data[key]._embedded['wp:featuredmedia'][0].source_url+'>';
        // excerpt
        // browseRecipeView += '<p id='+'browseRecipeDescription'+data[key].id+' class="browseRecipeDescription">' + data[key].excerpt.rendered + '</p>';
        // searchViewString += data[key].excerpt.rendered;
        // add button
        // searchViewString += '<button id='+data[key].id+ ' name="add" class="selectRecipe" value="add">Add</button>';
        // searchViewString += '</div>';
    });
    searchViewDiv += '</div>';
    return searchViewDiv;
}

function get_search_data(value){
    var searchPostUrl = window.location.origin + '/wp-json/wp/v2/recipes/' + value.id+'?_embed';
    let searchCard = '<div id='+'recipePreview'+value.id+' class="recipePreview">';
    jQuery.ajax({
        method: 'GET',
        url: searchPostUrl,
    }).done( function(data) {
        console.log(data);
        searchCard += '<h4 id='+'browseRecipeAuthor'+data.id+ ' class="browseRecipeAuthor">' + data._embedded.author[0].name + '</h4>';
    });
    searchCard += '</div>';
    // console.log(searchPostData);
    return searchCard;
}
