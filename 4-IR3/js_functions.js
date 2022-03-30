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

//Seite 13 Aufgaben: Precision und Recall Übungsaufgabe 1 Frage 1
function seite13ueberpruefung1() {
    let eingabefeld = document.querySelector("#Frage1_recall").value;

    if (eingabefeld.length >= 1) {
        document.querySelector("#rueckmeldung_frage1_recall").innerHTML = '<div class="alert alert-success" role="alert">' + "Der Wertebereich des Recalls liegt zwischen 0 und 1 " + '</div>';
    }

}

//Seite 13 Aufgaben: Precision und Recall Übungsaufgabe 1 Frage 2
function seite13ueberpruefung2() {
    let eingabefeld = document.querySelector("#Frage2_precision").value;

    if (eingabefeld.length >= 1) {
        document.querySelector("#rueckmeldung_frage2_precision").innerHTML = '<div class="alert alert-success" role="alert">' + "Der Wertebereich der Precision liegt ebenfalls zwischen 0 und 1 " + '</div>';
    }

}

//Seite 2 Aufgaben: Wichtige Begriffe
function ueberpruefeWichtigeBegriffeAufgabe() {
    let relevanz = document.querySelector("#relevanz").value;
    let recall = document.querySelector("#recall").value;
    let precision = document.querySelector("#precision").value;
    let eMaß = document.querySelector("#eMaß").value;
    let benutzerstandpunkt = document.querySelector("#benutzerstandpunkt").value;
    let koordination = document.querySelector("#koordination").value;
    let elementarparameter = document.querySelector("#elementarparameter").value;
    let standardmaß = document.querySelector("#standardmaß").value;

    if ((relevanz == "8") && (recall =="5") && (precision == "6") && (eMaß == "1") && (benutzerstandpunkt == "1") && (koordination == "1") && (elementarparameter == "1") && (standardmaß == "1")) {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-success" role="alert">' + Korrekt + '</div>';
        //sonst Falsch Rückmeldung geben
    } else {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-danger" role="alert">' + Falsch + '</div>';
    }
 }


//Seite 6 Aufgabe: Bewertungskriterien
function ueberpruefeBewertungskriterienAufgabe() {
    let  bewertungskriterien = document.querySelector('input[name="bewertungskriterien"]:checked').value;

    if ((bewertungskriterien == "a") && (bewertungskriterien = "c"))  {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-success" role="alert">' + Korrekt + '</div>';
        //sonst Falsch Rückmeldung geben
    }
    else if ((bewertungskriterien != "b") && (bewertungskriterien != "d")) {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-danger" role="alert">' + Falsch + '</div>';
    }
}

//Seite 20 Aufgabe: Benutzerstandpunkt
function ueberpruefeBenutzerstandpunktAufgabe3() {
    let  S1 = document.querySelector('input[name="S1"]:checked').value;
    let  S3 = document.querySelector('input[name="S3"]:checked').value;

    if ((S1 == "a") && (S3 == "d")) {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-success" role="alert">' + Korrekt + '</div>';
        //sonst Falsch Rückmeldung geben
    } else {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-danger" role="alert">' + Falsch + '</div>';
    }
}

//Seite 21: Benutzerstandpunkt Uebung 1
function ueberpruefeBSPUebung1() {
    // Eingegebene Werte einlesen

    let value_1 = document.querySelector("#bsp1Feld1").value;
    let value_2 = document.querySelector("#bsp1Feld2").value;
    let value_3 = document.querySelector("#bsp1Feld3").value;
    let value_4 = document.querySelector("#bsp1Feld4").value;
    let value_5 = document.querySelector("#bsp1Feld5").value;
    let value_6 = document.querySelector("#bsp1Feld6").value;
    let value_7 = document.querySelector("#bsp1Feld7").value;
    let value_8 = document.querySelector("#bsp1Feld8").value;
    let value_9 = document.querySelector("#bsp1Feld9").value;
    let value_10 = document.querySelector("#bsp1Feld10").value;
    let value_11 = document.querySelector("#bsp1Feld11").value;
    let value_12 = document.querySelector("#bsp1Feld12").value;
    let value_13 = document.querySelector("#bsp1Feld13").value;
    let value_14 = document.querySelector("#bsp1Feld14").value;
    let value_15 = document.querySelector("#bsp1Feld15").value;
    let value_16 = document.querySelector("#bsp1Feld16").value;
    let value_17 = document.querySelector("#bsp1Feld17").value;
    let value_18 = document.querySelector("#bsp1Feld18").value;
    //Falls richtige Werte angegeben worden sind Korrekt Rückmeldung geben
    if ((value_1 == "4") && (value_2 == "8") && (value_3 == "4") && (value_4 =="6") && (value_5 == "4") && (value_6 == "10") && (value_7 == "2") && (value_8 == "6") && (value_9 == "4") && (value_10 == "10") && (value_11 == "3") && (value_12 == "7") && (value_13 == "2") && (value_14 == "8") && (value_15 == "4") && (value_16 == "6") && (value_17 =="3") && (value_18 =="7")) {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-success" role="alert">' + Korrekt + '</div>';
        //sonst Falsch Rückmeldung geben
    } else {
        document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-danger" role="alert">' + Falsch + '</div>';
    }
}

//Seite 22: Benutzerstandpunkt Uebung 2
function ueberpruefeBSPUebung2 () {
  // Eingegebene Werte einlesen

  let value_1 = document.querySelector("#bsp2Feld1").value;
  let value_2 = document.querySelector("#bsp2Feld2").value;
  let value_3 = document.querySelector("#bsp2Feld3").value;
  let value_4 = document.querySelector("#bsp2Feld4").value;
  let value_5 = document.querySelector("#bsp2Feld5").value;
  let value_6 = document.querySelector("#bsp2Feld6").value;
  let value_7 = document.querySelector("#bsp2Feld7").value;
  let value_8 = document.querySelector("#bsp2Feld8").value;
  let value_9 = document.querySelector("#bsp2Feld9").value;
  let value_10 = document.querySelector("#bsp2Feld10").value;
  let value_11 = document.querySelector("#bsp2Feld11").value;
  let value_12 = document.querySelector("#bsp2Feld12").value;
  let value_13 = document.querySelector("#bsp2Feld13").value;
  let value_14 = document.querySelector("#bsp2Feld14").value;
  let value_15 = document.querySelector("#bsp2Feld15").value;
  let value_16 = document.querySelector("#bsp2Feld16").value;
  let value_17 = document.querySelector("#bsp2Feld17").value;
  let value_18 = document.querySelector("#bsp2Feld18").value;
  //Falls richtige Werte angegeben worden sind Korrekt Rückmeldung geben
  if ((value_1 == "0,22") && (value_2 == "0,33") && (value_3 == "0,2") && (value_4 =="0,4") && (value_5 == "0,2") && (value_6 == "0,29") && (value_7 == "0,1") && (value_8 == "0,25") && (value_9 == "0,2") && (value_10 == "0,29") && (value_11 == "0,15") && (value_12 == "0,3") && (value_13 == "0,1") && (value_14 == "0,2") && (value_15 == "0,2") && (value_16 == "0,4") && (value_17 =="0,15") && (value_18 =="0,3")) {
      document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-success" role="alert">' + Korrekt + '</div>';
      //sonst Falsch Rückmeldung geben
  } else {
      document.querySelector("#rueckmeldung").innerHTML = '<div class="alert alert-danger" role="alert">' + Falsch + '</div>';
  }
}
