/*
    Update the recipe dock with current data
*/
function update_dock(recipeDockData) {
    // Iterate through recipeDockData
    // display recipe cards for each entry
    for(key in recipeDockData) {
        // Display Title
        jQuery('#card'+ recipeDockData[key].cardID + ' > .recipeCardTitle').text(recipeDockData[key].recipeTitle);
        // Display Servings
        jQuery('#card'+ recipeDockData[key].cardID + ' > .recipeCardServings').text(recipeDockData[key].recipeServings);
    }
}