/*
    This function displays the results of a recipe search
*/
function search_recipes_view(data){
    console.log(data);
    var searchCard = '<div id=searchCard'+data.id+' class="searchCard">';
        // title
        searchCard += '<h3 id=searchCardTitle'+data.id+'>'+data.title.rendered+'</h3>';
        // author
        searchCard += '<h4 id='+'searchCardAuthor'+data.id+ ' class="searchCardAuthor">' + data._embedded.author[0].name + '</h4>';
        // image
        searchCard += '<img id='+'searchCardImg'+data.id+' class="searchCardImg" src='+data._embedded['wp:featuredmedia'][0].source_url+'>';
        // excerpt
        searchCard += data.excerpt.rendered;
        // add button
        searchCard += '<button id='+data.id+ ' name="add" class="selectRecipe" value="add">Add</button>';
    searchCard += '</div>';
    return searchCard += '';
}
