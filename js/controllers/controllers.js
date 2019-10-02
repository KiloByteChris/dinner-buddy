/*
    Control the variouse click events
*/
jQuery(document).ready( function() {
    /*
        Click event for the add recipe card button. Creates a recipe card in the dock
    */
    jQuery(".mtMainDiv").on("click", ".selectRecipe", function(){
        event.preventDefault();
        // Get the recipe post id from the button that was clicked
        var postID = this.id;
        // create a new instance of the APICall class
        const call = new APICall();
        // API call
        var data = call.createRecipeCard(postID);
        // assign data to a new recipe card instance
        // var newCard = new RecipeCard(data.responseJSON);

        // create card in sessionStorage
        //     mt_sess_create_card(data);
        //     // console.log(data);
        //     var recipeCard = create_recipe_card(data);
        //     jQuery('#recipeDock').append(recipeCard);
        //     // uses jquery UI  to make the recipe cards draggable
        //     jQuery('.draggable').draggable({revert: true, helper: "clone"});
        // });
    });// end calendar click event
});
