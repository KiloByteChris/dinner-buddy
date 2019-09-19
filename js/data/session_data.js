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
    // Get current serving value
    var currentServing = sessionStorage[servingKey];
    var currentStringNum = Number(currentServing);
    // Add a serving
    var newServing = currentStringNum + 1;
    // Remove old session value
    sessionStorage.removeItem(servingKey);
    // Create new session value
    sessionStorage.setItem(servingKey, newServing);
}
/*
    Create Recipe Card in SessionStorage
*/
function mt_sess_create_card(data){
    // Keep track of how many cards there are
    var cardCount = 1;
    // check for count
    if(sessionStorage['cardCount']){
        // get count
        cardCount = sessionStorage['cardCount'];
        // add
        cardCount++;
        // delete old, create new
        sessionStorage.removeItem('cardCount');
        sessionStorage.setItem('cardCount', cardCount);
    } else {
        // create count
        sessionStorage.setItem('cardCount', cardCount);
    }
    // card id
    var cardId = 'card' + cardCount;
    // set title
    var cardTitleValue = data.title.rendered
    var cardTitle = cardId + 'Title';
    if(sessionStorage[cardId + 'Title']){
        sessionStorage.removeItem(cardTitle);
        sessionStorage.setItem(cardTitle, cardTitleValue);
    }else{
        sessionStorage.setItem(cardTitle, cardTitleValue);
    }
    // set serving
    var cardServ = cardId + 'Serving';
    var servValue = data.servings[0];
    if(sessionStorage[cardServ]){
        sessionStorage.removeItem(cardServ);
        sessionStorage.setItem(cardServ, servValue);
    } else {
        // create serving
        sessionStorage.setItem(cardServ, servValue);
    }
}
