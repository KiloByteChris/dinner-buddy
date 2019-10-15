/*
 *  Combine the like ingredients from the ingredients list into a shopping list
 */

function sort_list(shoppingListData){
    sortedShoppingList = {};
    // Combine like ingredients when possible
    // Iterate through shopping list 
    for(key in shoppingListData) {
        // Iterate through ingredients in each card
        for(ing in shoppingListData[key]) {
            // check if ingredient has been sorted
            if(sortedShoppingList.hasOwnProperty(shoppingListData[key][ing].title)) {
                // check for unit matches
                if(sortedShoppingList[shoppingListData[key][ing].title].unit != shoppingListData[key][ing].unit){
                    // if not a match, create new entry
                    sortedShoppingList[shoppingListData[key][ing].title] = {
                        'amount' : shoppingListData[key][ing].amount,
                        'unit'   : shoppingListData[key][ing].unit,
                    }; 
                }else if(sortedShoppingList[shoppingListData[key][ing].title].unit == shoppingListData[key][ing].unit){
                    // if measurement units match, combine
                    sortedShoppingList[shoppingListData[key][ing].title].amount = parseInt(sortedShoppingList[shoppingListData[key][ing].title].amount) + parseInt(shoppingListData[key][ing].amount);
                }
            }if(!sortedShoppingList.hasOwnProperty(shoppingListData[key][ing].title)){
                //console.log('doesnt');
                sortedShoppingList[shoppingListData[key][ing].title] = {
                    'amount' : shoppingListData[key][ing].amount,
                    'unit'   : shoppingListData[key][ing].unit,
                }
            }
        }
    }
}
