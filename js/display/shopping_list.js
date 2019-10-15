/*
 *  Shopping List Display
 */

 function display_list(sortedShoppingList) {
    console.log(sortedShoppingList);
    var listView = '<div id="listView" class="listView">';
    listView += '<table>';
    // Table Header
    listView += '<tr>';
        listView += '<th>Ingredient</th>';
        listView += '<th>Amount</th>';
        listView += '<th>Unit</th>';
    listView += '</tr>';
    // Iterate through sorted list data
    for(ing in sortedShoppingList){
        console.log(ing);
        listView += '<tr>';
            listView += '<th>'+ing+'</th>';
            listView += '<th>'+sortedShoppingList[ing].amount+'</th>';
            listView += '<th>'+sortedShoppingList[ing].unit+'</th>';
        listView += '</tr>';
        
    }
    listView += '</table>';
    listView += '</div>';
    return listView;
 }