/** 
 *  Cook Book View
 */
function cook_book_view(data) {
    var cookBookView = '<div class="cookBookView" id="cookBookView">';
        // Add stuff to enhance search like tags and catagories
        cookBookView += '<div id="searchTags">';
        cookBookView += '</div>';

        // Search Results Area
        cookBookView += '<div id="searchResults">';
        cookBookView += '</div>';
        
    cookBookView += '</div>'; // end cookBookView div
    return cookBookView;
}
