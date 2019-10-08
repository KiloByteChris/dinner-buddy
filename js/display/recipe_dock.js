/*
 *  Recipe Dock Display 
 */
function dock_view() {
    // Create Recipe Dock
    //recipeDock = '<div id="recipeDock">';
    recipeDock = '';
    // Create Recipe Cards
    for (card in recipeDockData) {
        recipeDock += create_recipe_card(recipeDockData[card]);
    }
    //recipeDock += '</div>';
    return recipeDock;
}