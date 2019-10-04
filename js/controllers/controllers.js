/*
    Control click events
*/
jQuery(document).ready( function() {
    /*
        Add Recipe Card.
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
        Display Calendar
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
    ///*
    //    Recipe Servings Add
    //*/
    //jQuery(".mtMainDiv").on("click", ".servingAdd", function () {
    //    event.preventDefault();
    //    var addId = this.attributes.id.value;
    //    // select day from entryId string
    //    var dayId = addId.slice(0, 3);
    //    // select serving location
    //    var servLoc = dayId;
    //    var mealId = addId.slice(3, 4);
    //    switch (mealId) {
    //        case 'B':
    //            dayId += 'Breakfast';
    //            servLoc += 'BServings'
    //            break;
    //        case "L":
    //            dayId += 'Lunch';
    //            servLoc += 'LServings'
    //            break;
    //        case 'D':
    //            dayId += 'Dinner';
    //            servLoc += 'DServings'
    //            break;
    //    }
    //    // Get current serving value
    //    var servingKey = dayId + 'Serving';
    //    // Update sessionStorage
    //    mt_sess_add(servingKey);
    //    // Update display from sessionStorage
    //    var serVal = sessionStorage[servingKey];
    //    jQuery('#' + servLoc).text(serVal);
    //    console.log(sessionStorage);
    //});
});

