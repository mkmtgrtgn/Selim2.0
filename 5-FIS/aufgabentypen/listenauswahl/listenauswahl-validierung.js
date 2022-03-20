/* Validierung Select */

function checkSelects() {
    jQuery("body").find("select.selects.hidden").remove();
    jQuery("#alertBox").removeClass("padding bg-danger bg-success");
    jQuery(".selects").removeClass("correct");
    jQuery(".selects").removeClass("wrong");
    jQuery(".selects").each(function(i,v) {
        if(jQuery(v).val() == '1') {
            jQuery(v).addClass("correct");
        } 
        else {
            jQuery(v).addClass("wrong");
        }
    });
}