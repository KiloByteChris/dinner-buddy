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
        // Remove current, create new
        sessionStorage.removeItem(entryId);
        sessionStorage.setItem(entryId, entryValue);
    }
}
