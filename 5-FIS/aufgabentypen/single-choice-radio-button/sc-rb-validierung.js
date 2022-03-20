/* Validierung Single Choice Radio */
function radioVal() {
    jQuery("input[type='radio']").parent().removeClass("correct");
    jQuery("input.solution:checked").parent().addClass("correct");
    jQuery("#alertBox").removeClass("padding bg-success bg-danger");
    if(jQuery("input.solution:checked").parent().hasClass("correct")) {
            jQuery("#alertBox").addClass("padding bg-success rounded p-1 justify-content-center text-center");
            jQuery("#alertBox").html("Stimmt!");
    }
    else {
        jQuery("#alertBox").addClass("padding bg-danger rounded p-1 justify-content-center text-center");
        jQuery("#alertBox").html("Stimmt leider nicht.");
    }
}