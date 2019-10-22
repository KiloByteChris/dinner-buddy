/*
    Control click events
*/
jQuery(document).ready( function() {
    /**
     *  Default Display
     */
    function mt_default_display(){
        // Get user info
        const call = new APICall();
        call.get_user(WPsettings.user_ID);
        // Display Calendar
        event.preventDefault();
        currentView = 'calendar';
        // Display Calendar View
        jQuery('.displayDiv').html(calendar_view(daysArray, mealKeys));
        // Display Calendar Data
        calendar_update(calendarData, daysArray, mealKeys);
        // Display Recipe Dock
        jQuery('#recipeDock').html(dock_view());
        // jQuery UI Draggable
        jQuery('.draggable').draggable({revert: true, helper: "clone"});
        // jQuery UI Droppable Function
        jQuery('.droppable').droppable({
            drop: function (event, ui) {
                drop_function(event, ui, defaultServings);
            }
        });
        
    }
    // Fire default display
    mt_default_display();
    /*
     *   Add Recipe Card.
     */
    jQuery(".mtMainDiv").on("click", ".selectRecipe", function(){
        event.preventDefault();
        // Get recipe ID
        var postID = this.id;
        // create new APICall 
        const call = new APICall();
        // Get and save recipe data
        call.createRecipeCard(postID);
        // Display Recipe Dock
        jQuery('#recipeDock').html(dock_view());
    });
    /*
     *   Display Calendar
     */
    jQuery(".dashboard").on("click", ".calendarButton", function () {
        event.preventDefault();
        currentView = 'calendar';
        // Display Calendar View
        jQuery('.displayDiv').html(calendar_view(daysArray, mealKeys));
        // Display Calendar Data
        calendar_update(calendarData, daysArray, mealKeys);
        // Display Recipe Dock
        jQuery('#recipeDock').html(dock_view());
        // jQuery UI Draggable
        jQuery('.draggable').draggable({revert: true, helper: "clone"});
        // jQuery UI Droppable Function
        jQuery('.droppable').droppable({
            drop: function (event, ui) {
                drop_function(event, ui, defaultServings);
            }
        });             
    });
    /*
     *   Recipe Servings Add
     */
    jQuery(".mtMainDiv").on("click", ".servingAdd", function () {
        event.preventDefault();
        var addId = this.attributes.id.value;
        // select day from entryId string
        var dayId = addId.slice(0, 3);
        //select serving location
        var servLoc = dayId;
        // Get Meal Key
        var mealId = addId.slice(3, 4);
        // Select serving amount from calendarData
        var calendarServings = calendarData[dayId + mealId + 'Serv'];
        if(recipeDockData[calendarData[dayId + mealId + 'CardMatch']].recipeServings <= 0) {
            // Do nothing
        }else{
            // add 1 to serving amount
            calendarServings++;
            // Update Calendar Data
            calendarData[dayId + mealId + 'Serv'] = calendarServings;
            // Display Data
            calendar_update(calendarData, daysArray, mealKeys);
            // Subtract 1 from recipe card data
            recipeDockData[calendarData[dayId + mealId + 'CardMatch']].recipeServings = recipeDockData[calendarData[dayId + mealId + 'CardMatch']].recipeServings - 1;
            // Update Display
            update_dock(recipeDockData);
        }
    });
    /*
     *   Recipe Servings Subtract
     */
    jQuery(".mtMainDiv").on("click", ".servingSub", function () {
        event.preventDefault();
        var addId = this.attributes.id.value;
        // select day from entryId string
        var dayId = addId.slice(0, 3);
        //select serving location
        var servLoc = dayId;
        // Get Meal Key
        var mealId = addId.slice(3, 4);
        // Select serving amount from calendarData
        var calendarServings = calendarData[dayId + mealId + 'Serv'];
        if(calendarServings <= 0){
            //do nothing
        }else{
            calendarServings--;
            // Update Calendar Data
            calendarData[dayId + mealId + 'Serv'] = calendarServings;
            // Display Data
            calendar_update(calendarData, daysArray, mealKeys);
            // Subtract 1 from recipe card data
            recipeDockData[calendarData[dayId + mealId + 'CardMatch']].recipeServings = recipeDockData[calendarData[dayId + mealId + 'CardMatch']].recipeServings + 1;
            // Update Display
            update_dock(recipeDockData);
        }
    });
    /*
        Delete Recipe Card
    */
    jQuery("#recipeDock").on("click", ".recipeCardX", function() {
        // Delete associated calendar data values
        for(key in calendarData) {
            // Check all keys for the value of the deleted card
            if(calendarData[key] == 'card'+this.value){
                // If a match, Get the meal id from the key
                var mealId = key.slice(0,4);
                // Hide calendar info
                jQuery('#' + mealId + ' > .calendarDelete').hide();
                jQuery('#' + mealId + ' > .adjustServing').removeClass('show');
                jQuery('#' + mealId + ' > .adjustServing').addClass('hide');
                jQuery('#' + mealId + 'Servings').text('');
                // Check all properties for mealId. Delete matches
                for(prop in calendarData){
                    if(prop == mealId || prop == mealId + 'CardMatch' || prop == mealId + 'Serv' ){
                        calendarData[prop] = '';
                    }
                }
            }
        }
        // Remove recipe card
        jQuery('#card'+this.value).remove();
        // Remove recipe card from dock data
        delete recipeDockData['card'+this.value];
        calendar_update(calendarData, daysArray, mealKeys);
        // Remove card from shopping list data
        delete shoppingListData['card'+this.value];
        // Update shopping list
        sort_list(shoppingListData);
        if(currentView == 'shoppingList'){
           jQuery('.displayDiv').html(display_list(sortedShoppingList)); 
        }
    });
    /*
     *  Delete Calendar Data  
     */
    jQuery('#displayDiv').on('click', '.calendarDelete', function() {
        var deleteId = this.id.slice(0,4);
        for(card in calendarData) {
            // add the card serving amount to the original card
            if(card == deleteId + 'CardMatch') {
                recipeDockData[calendarData[card]].recipeServings += calendarData[deleteId + 'Serv']; 
                calendarData[deleteId + 'Serv'] = '';
            }
            if(card == deleteId) {
                // Hide calendar info
                jQuery('#' + deleteId + ' > .calendarDelete').hide();
                jQuery('#' + deleteId + ' > .adjustServing').removeClass('show');
                jQuery('#' + deleteId + ' > .adjustServing').addClass('hide');
                //jQuery('#' + deleteId + 'Servings').text('');
                calendarData[card] = '';
            }
            // remove data from calendarData
            if(card == deleteId + 'Serv') {
            }    
        }
        calendar_update(calendarData, daysArray, mealKeys);
        update_dock(recipeDockData);
    })
    /*
     *   New Recipe button
     */
    jQuery(".addRecipeButton").on("click", function() {
        currentView = 'newRecipe';
        var newRecipeView = new_recipe_form();
        jQuery('.displayDiv').html(newRecipeView);
    });
    /*
     *  Add Ingredients
     */
   let newIngredientInputNumber = 1;
   jQuery(".mtMainDiv").on("click", ".addNewIngredient", function() {
       var newIngredientInput = new_recipe_ing(newIngredientInputNumber, measurmentUnits);
       jQuery('.newIngredientsArea').append(newIngredientInput);
       newIngredientInputNumber++;
   });
   /*
    *   Shopping List
    */
   // Set current view
   jQuery('.dashboard').on('click', '.shoppingListButton', function() {
    currentView = 'shoppingList';
    sort_list(shoppingListData);
    jQuery('.displayDiv').html(display_list(sortedShoppingList));
   });
   /*
    *   Favorite Star - Search View
    */
   jQuery('#displayDiv').on('click', '.favoriteStar', function() {
       var recipeId = this.id.slice(4);
       var favoritesData = {'favorite' : recipeId};
       let Call = new APICall();
       // Toggle star
       if(jQuery('#'+this.id).hasClass('set')){
            jQuery('#'+this.id).removeClass('fas fa-star set');
            jQuery('#'+this.id).addClass('far fa-star unset');
            favoritesData.method = 'delete';
            Call.add_favorite(WPsettings.user_ID, favoritesData);

        }else if(jQuery('#'+this.id).hasClass('unSet')){
            jQuery('#'+this.id).removeClass('far fa-star unset');
            jQuery('#'+this.id).addClass('fas fa-star set');
            // API call saves recipe id in user meta data
            var method = 'add';
            // Call.add_favorite(WPsettings.user_ID, recipeId, method);
            favoritesData.method = 'add';
            Call.add_favorite(WPsettings.user_ID, favoritesData);
        }
   });
    /*
     * Search Recipes
     */
    jQuery(".dashboard").on("click", "#cookBookButton", function(){
        event.preventDefault();
        currentView = 'search';
        jQuery('#displayDiv').html(cook_book_view());

        var call = new APICall;
        call.browse_recipes();
        //jQuery('#displayDiv').html(cook_book_view());
    });
   /**
    *   Delete User Favorites
    */
   jQuery('MtHeader').on('click', '#clearFavorites', function() {

   });
});
