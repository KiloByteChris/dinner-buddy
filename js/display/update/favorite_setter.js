/**
 * Set User Favorites
 */
function fav_setter(userData) {
    for(fav in userData['favorites']){
        console.log(userData['favorites'][fav]);
        if(jQuery('#star'+userData['favorites'][fav]).hasClass('unSet')){
            jQuery('#star'+userData['favorites'][fav]).removeClass('far fa-star unset');
            jQuery('#star'+userData['favorites'][fav]).addClass('fas fa-star set');
        }
    }
}