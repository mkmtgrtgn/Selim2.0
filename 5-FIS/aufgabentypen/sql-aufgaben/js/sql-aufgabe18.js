/** Fuegt aus SQL Buttons dem Textfeld entsprechende Werte hinzu */
function addSQL(event) {
    // Textfeld Wert
    var valueTextField = jQuery("#textAreaLoesung").val();

    if (event.target.id === "select") {
        // SELECT Option
        jQuery("#textAreaLoesung").val(valueTextField + "SELECT ");
    } else if (event.target.id === "star") {
        // * Option
        jQuery("#textAreaLoesung").val(valueTextField + "* ");
    } else if (event.target.id === "from") {
        // FROM Option
        jQuery("#textAreaLoesung").val(valueTextField + "FROM ");
    } else if (event.target.id === "where") {
        // WHERE Option
        jQuery("#textAreaLoesung").val(valueTextField + "WHERE ");
    } else if (event.target.id === "insertInto") {
        // INSERT INTO Option
        jQuery("#textAreaLoesung").val(valueTextField + "INSERT INTO ");
    } else if (event.target.id === "update") {
        // UPDATE OpTION
        jQuery("#textAreaLoesung").val(valueTextField + "UPDATE ");
    } else if (event.target.id === "set") {
        // SET Option
        jQuery("#textAreaLoesung").val(valueTextField + "SET ");
    } else if (event.target.id === "delete") {
        // DELETE FROM Option
        jQuery("#textAreaLoesung").val(valueTextField + "DELETE FROM ");
    } else if (event.target.id === "and") {
        // = AND Option
        jQuery("#textAreaLoesung").val(valueTextField + "AND ");
    } else if (event.target.id === "equals") {
        // = Option
        jQuery("#textAreaLoesung").val(valueTextField + "= ");
    } else if (event.target.id === "equalsNot") {
        // Ungleich Option
        jQuery("#textAreaLoesung").val(valueTextField + "!= ");
    } else if (event.target.id === "smallerAs") {
        // Kleiner Option
        jQuery("#textAreaLoesung").val(valueTextField + "< ");
    } else if (event.target.id === "biggerAs") {
        // Groesser Option
        jQuery("#textAreaLoesung").val(valueTextField + "> ");
    }
}

/** Fuegt dem Textfeld die Werte des Select (Tabellenspaltennamen) hinzu */
function addColumnValue() {
    // Textfeld Wert
    var valueTextField = jQuery("#textAreaLoesung").val();

    if (jQuery("#selectedValue option:selected").text().toLowerCase() == "persnr") {
        // Personalnummer Spalte aus der Tabelle Personal
        jQuery("#textAreaLoesung").val(valueTextField + "PersNr ");
    } else if (jQuery("#selectedValue option:selected").text().toLowerCase() == "name") {
        // Namen Spalte aus der Tabelle Personal
        jQuery("#textAreaLoesung").val(valueTextField + "Name ");
    } else if (jQuery("#selectedValue option:selected").text().toLowerCase() == "famstatus") {
        // Familienstatus Spalte aus der Tabelle Personal
        jQuery("#textAreaLoesung").val(valueTextField + "FamStatus ");
    } else if (jQuery("#selectedValue option:selected").text().toLowerCase() == "position") {
        // Position Spalte aus der Tabelle Personal
        jQuery("#textAreaLoesung").val(valueTextField + "Position ");
    } else if (jQuery("#selectedValue option:selected").text().toLowerCase() == "gehalt") {
        // Gehalt Spalte aus der Tabelle Personal
        jQuery("#textAreaLoesung").val(valueTextField + "Gehalt ");
    } else if (jQuery("#selectedValue option:selected").text().toLowerCase() == "filialnr") {
        // FilialNr Spalte aus der Tabelle Filiale
        jQuery("#textAreaLoesung").val(valueTextField + "FilialNr ");
    } else if (jQuery("#selectedValue option:selected").text().toLowerCase() == "fwnr") {
        // FWNr Spalte aus der Tabelle Firmenwagen
        jQuery("#textAreaLoesung").val(valueTextField + "FWNr ");
    } else if (jQuery("#selectedValue option:selected").text().toLowerCase() == "modell") {
        // Modell Spalte aus der Tabelle Firmenwagen
        jQuery("#textAreaLoesung").val(valueTextField + "Modell ");
    }
}

/** Pr??ft ob die grundlegenden Bedingungen fuer das SQL-Statement gegeben sind */
function hasBasicStatementRequirements(input, basicRequirements, uniqueRequirements = []) {
    let correct = true;
    let statement = input.toLowerCase().trim();
    let hinweis = null;

    if (basicRequirements.length > 0) {
        // Pr??fe, ob Requirement vorhanden ist
        basicRequirements.forEach((requirement) => {
            if (!statement.includes(requirement)) {
                correct = false;
                hinweis = `Es fehlt '${requirement.toUpperCase()}'.`;
            }
        });
    }

    if (uniqueRequirements.length > 0) {
        uniqueRequirements.forEach(requirement => {
            // Das Requirement sollte jeweils genau EINMAL vorkommen
            if (statement.split(requirement).length != 2) {
                correct = false;
                hinweis = `Das Zeichen '${requirement.toUpperCase()}' soll einmal vorkommen.`;
            }
        });
    }

    if (statement.includes(';')) {
        if (statement.split(';').length != 2) {
            correct = false;
            hinweis = `Das ';' darf nur einmal vorkommen.`
        }
        if (statement.charAt(statement.length - 1) != ';') {
            correct = false;
            hinweis = `Das ';' ist an der falschen Stelle.`
        }
    }

    return [correct, hinweis];
}

/** Teilt das SQL-Statement in ein Array ein zur besseren ??berpr??fung */
function getStatementAsArray(input) {
    // Variablen
    // Nimmt die Leerzeichen am Anfang und Ende weg
    let statement = input.trim();
    let statementAsArray;

    // Falls ; an letzter Stelle
    statement = statement.replace(';', '');

    // Splitte zunaechst nach Leerzeichen
    let arrayWerte = statement.split(" ");

    // Pruefe und fixe fehlende Leerzeichen zwischen '='
    let temp = arrayWerte.map((val) => {
        // Wenn Wert '=' enthaelt und laenger ist als 1 Zeichen
        if (val.includes("=") && val.length > 1) {
            // Splitte nach '='
            let val2 = val.split("=");
            // Pruefe ob durch den Splitt das letzte Element leer ist und entferne es
            if (val2[val2.length - 1] == "") {
                val2.pop();
            }
            // Wenn das Array nur ein Element enth??lt, fuege das fehlende '=' hinzu
            if (val2.length == 1) {
                val2.push("=");
                return val2;
                // Wenn 2 Elemente, fuege das fehlende '=' dazwischen ein
            } else if (val2.length == 2) {
                val2 = [val2[0], "=", val2[1]];
                return val2;
            }
        }
        // Gebe den Originalwert zurueck, wenn Leerzeichen eingehalten wurden
        return val;
    });

    // Reduziere Array auf eine Dimension
    temp = temp.flat();

    // Filtere leere Elemente heraus
    let temp2 = temp.filter((e) => e);

    // Ueberpruefe, ob Anzahl der Elemente dem richtigen Statement entspricht (12)
    if (temp2.length == 12) {
        statementAsArray = temp2;
    }

    return statementAsArray;
}

/** Vergleicht zwei Arrays miteinander */
function compareArrays(array1, array2) {
    correct = true;
    array1.forEach((element, index) => {
        if (element != array2[index]) {
            correct = false;
        }
    });
    return correct;
}

/** Validiert die Nutzereingaben */
function validateSQL() {
    /** Richtige Loesung SELECT Name FROM Personal WHERE FilialNr = 2 AND FWNr = 1 */
    let htmlToPublish = document.getElementById('correction');
    // Textfeld Wert
    let input = jQuery("#textAreaLoesung").val();

    // Laufvariablen
    let correct = true;
    let hinweis = "";
    let statementArray;

    // Definiere die Requirements
    let basicRequirements = ["select", "from", "where", "and"];

    // Bestimme Grundbedingungen (Array: [erf??llt, hinweis])
    const grundbedingungen = hasBasicStatementRequirements(input, basicRequirements);
    // Wenn Basisanforderungen nicht erfuellt, "wirf Fehler"
    if (!grundbedingungen[0]) {
        correct = false;
        hinweis = grundbedingungen[1];
    } else {
        statementArray = getStatementAsArray(input);

        // Wenn Array-Statement valide ist ...
        if (statementArray != null) {
            //.. ??berpr??fe die einzelnen Token und deren Reihenfolge

            // SELECT
            let select = statementArray[0];
            if (select.toLowerCase() != "select") {
                correct = false;
                hinweis += ` ${select},`;
            }

            // Name
            let name = statementArray[1];
            if (name != "Name") {
                correct = false;
                hinweis += ` ${name},`;
            }
            // FROM
            let from = statementArray[2];
            if (from.toLowerCase() != "from") {
                correct = false;
                hinweis += ` ${from},`;
            }
            // Personal
            let personal = statementArray[3];
            if (personal != "Personal") {
                correct = false;
                hinweis += ` ${personal},`;
            }
            // WHERE
            let where = statementArray[4];
            if (where.toLowerCase() != "where") {
                correct = false;
                hinweis += ` ${where},`;
            }

            // Damit die Reihenfolge der Where-Argumente irrelevant ist, packe alle in ein seperates Array
            // M??glichkeit1: ["FilialNr", "=", "2"]
            // M??glichkeit2: ["FWNr", "=", "1",]
            let moeglichkeit1 = ["FilialNr", "=", "2"];
            let moeglichkeit2 = ["FWNr", "=", "1"];
            let where1Array = [statementArray[5], statementArray[6], statementArray[7]];
            let where2Array = [statementArray[9], statementArray[10], statementArray[11]];

            // Vergleiche die Where-Argumente mit den M??glichkeiten
            if (!compareArrays(where1Array, moeglichkeit1) && !compareArrays(where1Array, moeglichkeit2)) {
                correct = false;
                hinweis += `${where1Array[0]} oder ${where1Array[2]},`;
            }
            if (!compareArrays(where2Array, moeglichkeit1) && !compareArrays(where2Array, moeglichkeit2)) {
                correct = false;
                hinweis += `${where2Array[0]} oder ${where2Array[2]},`;
            }

            // Wenn beide Where-Argumente gleich sind
            if (compareArrays(where1Array, where2Array)) {
                correct = false;
                hinweis += `die WHERE-Bedingungen,`;
            }

            // erstes '='
            let gleich = statementArray[6];
            if (gleich != "=") {
                correct = false;
                hinweis += ` ${gleich} nach '${statementArray[5]}',`;
            }

            // zweites '='
            let gleich2 = statementArray[10];
            if (gleich2 != "=") {
                correct = false;
                hinweis += ` ${gleich2} nach '${statementArray[9]}',`;
            }

            // AND
            let and = statementArray[8];
            if (and.toLowerCase() != "and") {
                correct = false;
                hinweis += ` ${and},`;
            }

            // Entferne das erste Leerzeichen und das letzte Komma vom Hinweis
            hinweis.trimStart();
            if (hinweis.charAt(hinweis.length - 1) == ",") {
                hinweis = hinweis.slice(0, hinweis.length - 1);
            }
        } else {
            correct = false;
            hinweis = `Du hast leider nicht die richtige Anzahl an notwendigen Argumenten.`
        }
    }

    if (correct) {
        // Positive Rueckmeldung
        htmlToPublish.innerHTML = "<p class='sql-answer correct'>Das war die richtige SQL-Anweisung. Gut gemacht!</p>";
        // Zeige Ergebnistabelle Personal
        if (!jQuery("#collapseZero").hasClass("show")) {
            jQuery("#collapseZero").addClass("show");
        }
        if (jQuery("#accordion-ergebnis").hasClass("hide")) {
            jQuery("#accordion-ergebnis").removeClass("hide");
        }
    } else {
        // Negative Rueckmeldung
        htmlToPublish.innerHTML = `<p class='sql-answer wrong'>Leider nicht die richtige SQL-Anweisung. \nGrund: <strong>${hinweis}</strong></p>`;
        // Verberge  Ergebnistabelle Personal
        if (jQuery("#collapseZero").hasClass("show")) {
            jQuery("#collapseZero").removeClass("show");
        }
        if (!jQuery("#accordion-ergebnis").hasClass("hide")) {
            jQuery("#accordion-ergebnis").addClass("hide");
        }
    }
}
