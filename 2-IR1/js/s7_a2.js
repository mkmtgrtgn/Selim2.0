function validateSolution() {
    //console.log(jQuery('#loesung8').val());
    var loesung1 = jQuery('#loesung1').val();
    var loesung2 = jQuery('#loesung2').val();
    var loesung3 = jQuery('#loesung3').val();
    var loesung4 = jQuery('#loesung4').val();
    var loesung5 = jQuery('#loesung5').val();
    var loesung6 = jQuery('#loesung6').val();
    var loesung7 = jQuery('#loesung7').val();
    var loesung8 = jQuery('#loesung8').val();

    if (loesung1 == 8 && loesung2 == 1 && loesung3 == 7 && loesung4 == 3 && loesung5 == 6 && loesung6 == 2 && loesung7 == 4 && loesung8 == 5) {

        var paragraph = "<p>";
        paragraph += "Die Antwort ist korrekt!";
        paragraph += "</p>";
        document.getElementById('rueckmeldung').innerHTML = paragraph;

        //richtige Lösungen Klasse zurücksetzen
        if (loesung1 == 8) {
            if (jQuery('#loesung1').hasClass('falsche-antwort')) {
                jQuery('#loesung1').removeClass('falsche-antwort');
            }
        }
        if (loesung2 == 1) {
            if (jQuery('#loesung2').hasClass('falsche-antwort')) {
                jQuery('#loesung2').removeClass('falsche-antwort');
            }
        }
        if (loesung3 == 7) {
            if (jQuery('#loesung3').hasClass('falsche-antwort')) {
                jQuery('#loesung3').removeClass('falsche-antwort');
            }
        }
        if (loesung4 == 3) {
            if (jQuery('#loesung4').hasClass('falsche-antwort')) {
                jQuery('#loesung4').removeClass('falsche-antwort');
            }
        }
        if (loesung5 == 6) {
            if (jQuery('#loesung5').hasClass('falsche-antwort')) {
                jQuery('#loesung5').removeClass('falsche-antwort');
            }
        }
        if (loesung6 == 2) {
            if (jQuery('#loesung6').hasClass('falsche-antwort')) {
                jQuery('#loesung6').removeClass('falsche-antwort');
            }
        }
        if (loesung7 == 4) {
            if (jQuery('#loesung7').hasClass('falsche-antwort')) {
                jQuery('#loesung7').removeClass('falsche-antwort');
            }
        }
        if (loesung8 == 5) {
            if (jQuery('#loesung8').hasClass('falsche-antwort')) {
                jQuery('#loesung8').removeClass('falsche-antwort');
            }
        }

    } else {
        var paragraph = "<p>";
        paragraph += "Die Antwort ist leider falsch!";
        paragraph += "</p>";
        document.getElementById('rueckmeldung').innerHTML = paragraph;

        //flasche Lösung Klasse hinzufügen
        if (loesung1 != 8) {
            jQuery('#loesung1').addClass('falsche-antwort');
        }
        if (loesung2 != 1) {
            jQuery('#loesung2').addClass('falsche-antwort');
        }
        if (loesung3 != 7) {
            jQuery('#loesung3').addClass('falsche-antwort');
        }
        if (loesung4 != 3) {
            jQuery('#loesung4').addClass('falsche-antwort');
        }
        if (loesung5 != 6) {
            jQuery('#loesung5').addClass('falsche-antwort');
        }
        if (loesung6 != 2) {
            jQuery('#loesung6').addClass('falsche-antwort');
        }
        if (loesung7 != 4) {
            jQuery('#loesung7').addClass('falsche-antwort');
        }
        if (loesung8 != 5) {
            jQuery('#loesung8').addClass('falsche-antwort');
        }

        //richtige Lösungen Klasse zurücksetzen
        if (loesung1 == 8) {
            if (jQuery('#loesung1').hasClass('falsche-antwort')) {
                jQuery('#loesung1').removeClass('falsche-antwort');
            }
        }
        if (loesung2 == 1) {
            if (jQuery('#loesung2').hasClass('falsche-antwort')) {
                jQuery('#loesung2').removeClass('falsche-antwort');
            }
        }
        if (loesung3 == 7) {
            if (jQuery('#loesung3').hasClass('falsche-antwort')) {
                jQuery('#loesung3').removeClass('falsche-antwort');
            }
        }
        if (loesung4 == 3) {
            if (jQuery('#loesung4').hasClass('falsche-antwort')) {
                jQuery('#loesung4').removeClass('falsche-antwort');
            }
        }
        if (loesung5 == 6) {
            if (jQuery('#loesung5').hasClass('falsche-antwort')) {
                jQuery('#loesung5').removeClass('falsche-antwort');
            }
        }
        if (loesung6 == 2) {
            if (jQuery('#loesung6').hasClass('falsche-antwort')) {
                jQuery('#loesung6').removeClass('falsche-antwort');
            }
        }
        if (loesung7 == 4) {
            if (jQuery('#loesung7').hasClass('falsche-antwort')) {
                jQuery('#loesung7').removeClass('falsche-antwort');
            }
        }
        if (loesung8 == 5) {
            if (jQuery('#loesung8').hasClass('falsche-antwort')) {
                jQuery('#loesung8').removeClass('falsche-antwort');
            }
        }
    }

}