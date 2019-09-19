/*
    MealTime temporary storage
*/
/*
    Set calendar recipe title
*/
function mt_sess_set_recipe(entryId, entryValue) {
    var servingKey = entryId + 'Serving';
    // Select data
    var entryTitle = sessionStorage[entryId];
    // Check if it exsists
    if(!entryTitle) {
        // create new
        sessionStorage.setItem(entryId, entryValue);
        sessionStorage.setItem(servingKey, "1");
    }else if (entryTitle) {
        // Remove current
        sessionStorage.removeItem(entryId);
        sessionStorage.setItem(entryId, entryValue);
        // Create new
        sessionStorage.removeItem(servingKey);
        sessionStorage.setItem(servingKey, "1");
    }
}
/*
    Add a serving
*/
function mt_sess_add(servingKey) {
    // // Get current serving value
    var currentServing = sessionStorage[servingKey];
    var currentStringNum = Number(currentServing);
    // Add a serving
    var newServing = currentStringNum + 1;
    // Remove old session value
    sessionStorage.removeItem(servingKey);
    // Create new session value
    sessionStorage.setItem(servingKey, newServing);
}
