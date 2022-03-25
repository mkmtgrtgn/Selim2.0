/* Select Funktion zur Korrektur */
function checkSelects() {
    jQuery(".selects").removeClass("list-correct list-wrong");
    jQuery(".selects").each(function(i,v) {
        if(jQuery(v).val() == "1") {
            jQuery(v).addClass("list-correct");
        } 
        else {
            jQuery(v).addClass("list-wrong");
        }
    });
}

/* Select Funktion zum Reset aller Felder */
function resetSelects() {
    jQuery(".selects").removeClass("list-correct list-wrong");
    jQuery(".selects").each(function(i,v) {
        if(jQuery(v).val() != "default") {
            jQuery(v).val("default");
        } 
    });
} 