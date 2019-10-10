/*
    Control click events
*/
jQuery(document).ready( function() {
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
});
