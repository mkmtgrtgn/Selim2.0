/* Single Choice Radio Button Funktion zur Korrektur */
function radioVal() {
    jQuery("#alertBox").removeClass("padding bg-success bg-danger");
    jQuery("input.solution:checked").parent().addClass("correct");
    if(jQuery("input.solution:checked").parent().hasClass("correct")) {
            jQuery("#alertBox").addClass("padding bg-success rounded p-1 text-center");
            jQuery("#alertBox").html("Stimmt!");
    }
    else {
        jQuery("#alertBox").addClass("padding bg-danger rounded p-1 text-center");
        jQuery("#alertBox").html("Stimmt leider nicht.");
    }
}