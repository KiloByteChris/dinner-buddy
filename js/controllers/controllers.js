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

       
        //     // uses jquery UI  to make the recipe cards draggable
        //     jQuery('.draggable').draggable({revert: true, helper: "clone"});
        // });
    });
    /*
    View Calendar
    */
    jQuery(".dashboard").on("click", ".calendarButton", function () {
        event.preventDefault();
        // Display Calendar
        jQuery('.displayDiv').html(calendar_view());
        // Display Recipe Dock
        var dockDisplay = dock_view();
        console.log(dockDisplay);
        jQuery('#recipeDock').html(dock_view());
        // jQuery UI Droppable Function
        jQuery('.droppable').droppable({
            drop: function (event, ui) {
                drop_function(event, ui);
            }
        });
        // jQuery UI Draggable
        //jQuery('.draggable').draggable({revert: true, helper: "clone"});       
    });
});

