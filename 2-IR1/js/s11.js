function validateSolution() {
    //console.log(jQuery('#loesung1').val());
    var loesung1 = jQuery('#loesung1').val();
    var loesung2 = jQuery('#loesung2').val();
    var loesung3 = jQuery('#loesung3').val();
    var loesung4 = jQuery('#loesung4').val();

    if (loesung1 == 1 && loesung2 == 2 && loesung3 == 2 && loesung4 == 1) {

        var paragraph = "<p>";
        paragraph += "Die Antwort ist korrekt!";
        paragraph += "</p>";
        document.getElementById('rueckmeldung').innerHTML = paragraph;

        //richtige Lösungen Klasse zurücksetzen
        if (loesung1 == 1) {
            if (jQuery('#loesung1').hasClass('falsche-antwort')) {
                jQuery('#loesung1').removeClass('falsche-antwort');
            }
        }
        if (loesung2 == 2) {
            if (jQuery('#loesung2').hasClass('falsche-antwort')) {
                jQuery('#loesung2').removeClass('falsche-antwort');
            }
        }
        if (loesung3 == 2) {
            if (jQuery('#loesung3').hasClass('falsche-antwort')) {
                jQuery('#loesung3').removeClass('falsche-antwort');
            }
        }
        if (loesung4 == 1) {
            if (jQuery('#loesung4').hasClass('falsche-antwort')) {
                jQuery('#loesung4').removeClass('falsche-antwort');
            }
        }


    } else {
        var paragraph = "<p>";
        paragraph += "Die Antwort ist leider falsch!";
        paragraph += "</p>";
        document.getElementById('rueckmeldung').innerHTML = paragraph;

        //flasche Lösung Klasse hinzufügen
        if (loesung1 != 1) {
            jQuery('#loesung1').addClass('falsche-antwort');
        }
        if (loesung2 != 2) {
            jQuery('#loesung2').addClass('falsche-antwort');
        }
        if (loesung3 != 2) {
            jQuery('#loesung3').addClass('falsche-antwort');
        }
        if (loesung4 != 1) {
            jQuery('#loesung4').addClass('falsche-antwort');
        }


        //richtige Lösungen Klasse zurücksetzen
        if (loesung1 == 1) {
            if (jQuery('#loesung1').hasClass('falsche-antwort')) {
                jQuery('#loesung1').removeClass('falsche-antwort');
            }
        }
        if (loesung2 == 2) {
            if (jQuery('#loesung2').hasClass('falsche-antwort')) {
                jQuery('#loesung2').removeClass('falsche-antwort');
            }
        }
        if (loesung3 == 2) {
            if (jQuery('#loesung3').hasClass('falsche-antwort')) {
                jQuery('#loesung3').removeClass('falsche-antwort');
            }
        }
        if (loesung4 == 1) {
            if (jQuery('#loesung4').hasClass('falsche-antwort')) {
                jQuery('#loesung4').removeClass('falsche-antwort');
            }
        }
    }

}