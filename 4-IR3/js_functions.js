//Mögliche Aufgaben Rückmeldungen
const Korrekt = "Super! Alles richtig!"
const Falsch = "Leider hast du einen Fehler gemacht. Versuche es nochmal."


// Elementarparameter Aufgabe S.10
function ueberpruefeEPAufgabe() {
    //Einlesen der input Werte
    let value_b = document.querySelector("#EP-venn-1").value;
    let value_a = document.querySelector("#EP-venn-2").value;
    let value_c = document.querySelector("#EP-venn-3").value;
    let value_d = document.querySelector("#EP-venn-4").value;
    //falls richtige Werte (Antworten) eingegeben worden sind, Korrekt Rückmeldung geben
    if ((value_b == "b") && (value_a == "a") && (value_c == "c") && (value_d == "d")) {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-success" role="alert">' + Korrekt + '</div>';

        //sonst Falsch Rückmeldung geben
    } else {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-danger" role="alert">' + Falsch + '</div>';
    }

}
//E-Maß Aufgabe 1 S.18
function ueberpruefeEMassAufgabe1() {
    // Eingegebene Werte einlesen
    let value_1 = document.querySelector("#eMassAufgabe1Feld1").value;
    let value_2 = document.querySelector("#eMassAufgabe1Feld2").value;
    let value_3 = document.querySelector("#eMassAufgabe1Feld3").value;
    let value_4 = document.querySelector("#eMassAufgabe1Feld4").value;
    //Falls richtige Werte angegeben worden sind Korrekt Rückmeldung geben
    if ((value_1 == "0,69") && (value_2 == "0,76") && (value_3 == "0,71") && (value_4 == "0,75")) {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-success" role="alert">' + Korrekt + '</div>';
        //sonst Falsch Rückmeldung geben
    } else {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-danger" role="alert">' + Falsch + '</div>';
    }
}

//Recall Aufgabe 1 S.11
function ueberpruefeRecallAufgabe1() {
    // Eingegebene Werte einlesen
    let value_a = document.querySelector("#recallFeld1").value;
    let value_b = document.querySelector("#recallFeld2").value;
    let value_c = document.querySelector("#recallFeld3").value;
    //Falls richtige Werte angegeben worden sind Korrekt Rückmeldung geben
    if ((value_a == "a") && (value_b == "a") && (value_c == "c")) {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-success" role="alert">' + Korrekt + '</div>';
        //sonst Falsch Rückmeldung geben
    } else {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-danger" role="alert">' + Falsch + '</div>';
    }
}

//Precision Aufgabe 1 S.12
function ueberpruefePrecisionAufgabe1() {
    // Eingegebene Werte einlesen
    let value_a = document.querySelector("#precisionFeld1").value;
    let value_b = document.querySelector("#precisionFeld2").value;
    let value_c = document.querySelector("#precisionFeld3").value;
    //Falls richtige Werte angegeben worden sind Korrekt Rückmeldung geben
    if ((value_a == "a") && (value_b == "a") && (value_c == "b")) {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-success" role="alert">' + Korrekt + '</div>';
        //sonst Falsch Rückmeldung geben
    } else {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-danger" role="alert">' + Falsch + '</div>';
    }
}

//Seite 14 Aufgaben: Precision und Recall Übungsaufgabe 2 Frage 1
function seite14ueberpruefung1() {
    let eingabefeld = document.querySelector("#Frage1").value;

    if (eingabefeld.length >= 1) {
        document.querySelector("#rueckmeldung_frage1").innerHTML = '<div class="alert alert-success" role="alert">' + "Generell gilt: Je höher die Werte für Recall und Precision sind, desto besser. Allerdings ist ein Recall-Wert von 60% bereits als sehr gut zu beurteilen." + '</div>';
    }

}

//Seite 14 Aufgaben: Precision und Recall Übungsaufgabe 2 Frage 2
function seite14ueberpruefung2() {
    let eingabefeld = document.querySelector("#Frage2").value;

    if (eingabefeld.length >= 1) {
        document.querySelector("#rueckmeldung_frage2").innerHTML = '<div class="alert alert-success" role="alert">' + "Die Maße sagen nichts darüber aus, wie gut ein System die Ergebnisse sortiert hat." + '</div>';
    }

}

//Seite 19 e-Maß: Übungsaufgabe 2
function ueberpruefung_emaß_uebungsaufgabe() {
    let eingabefeld = document.querySelector("#rueckmeldung_emaß_aufgabe2").value;

    if (eingabefeld.length >= 1) {
        document.querySelector("#rueckmeldung_frage1").innerHTML = '<div class="alert alert-success" role="alert">' + " Je niedriger der Wert von e, desto besser ist das System." + '</div>';
    }

}