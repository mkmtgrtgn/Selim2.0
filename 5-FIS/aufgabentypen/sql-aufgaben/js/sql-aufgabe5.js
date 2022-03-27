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
    }
}

/** Prüft ob die grundlegenden Bedingungen fuer das SQL-Statement gegeben sind (Update where set) */
function hasBasicStatementRequirements(input) {
    let correct = false;
    let statement = input.toLowerCase();

    if (statement && statement.startsWith("update")) {
        if (statement.includes("set") && statement.includes("where")) {
            correct = true;
        }
    }
    return correct;
}

/** Teilt das SQL-Statement in ein Array ein zur besseren Überprüfung */
function getStatementAsArray(input) {
    // Variablen
    let statement = input;
    let statementAsArray;

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
            // Wenn das Array nur ein Element enthält, fuege das fehlende '=' hinzu
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

    // Fuege getrennte SQL-Strings wieder zusammen
    let temp2 = temp.map((val, index) => {
        // Ueberpruefe ob Wert mit '(single-quote) anfaengt, der naechste index existiert, und der naechste Wert mit ' endet
        if (val.startsWith(`'`) && temp[index + 1] && temp[index + 1].endsWith(`'`)) {
            val2 = `${val} ${temp[index + 1]}`;
            // entferne naechstes Element
            temp[index + 1] = "";
            return val2;
            // Ueberpruefe ob Wert mit "(double-quote) anfaengt, der naechste index existiert, und der naechste Wert mit " endet
        } else if (val.startsWith(`"`) && temp[index + 1] && temp[index + 1].endsWith(`"`)) {
            val2 = `${val} ${temp[index + 1]}`;
            // entferne naechstes Element
            temp[index + 1] = "";
            return val2;
        }
        // Gebe den Originalwert zurueck, falls kein SQL-String
        return val;
    });

    // Filtere leere Elemente heraus
    let temp3 = temp2.filter((e) => e);

    // Ueberpruefe, ob Anzahl der Elemente dem richtigen Statement entspricht (10)
    if (temp3.length == 10) {
        statementAsArray = temp3;
    }

    return statementAsArray;
}

/** Validiert die Nutzereingaben */
function validateSQL() {
    /** Richtige Loesung
     * UPDATE Personal SET Name = 'Maria Müller' WHERE Name = 'Maria Schmidt'
     * */
    // Textfeld Wert
    let input = jQuery("#textAreaLoesung").val();

    // Laufvariablen
    let correct = true;
    let hinweis = "";
    let statementArray;

    // Wenn Basisanforderungen nicht erfuellt, "wirf Fehler"
    if (!hasBasicStatementRequirements(input)) {
        correct = false;
        hinweis += "das Statement";
    }

    // Wenn Basisbedingungen erfuellt...
    if (correct) {
        statementArray = getStatementAsArray(input);
    }

    // Wenn Array-Statement valide ist ...
    if (statementArray != null) {
        //.. überprüfe die einzelnen Token und deren Reihenfolge
        // UPDATE
        let s1 = statementArray[0];
        if (s1.toLowerCase() != "update") {
            correct = false;
            hinweis += ` ${s1},`;
        }
        // Personal
        let s2 = statementArray[1];
        if (s2 != "Personal") {
            correct = false;
            hinweis += ` ${s2},`;
        }
        // SET
        let s3 = statementArray[2];
        if (s3.toLowerCase() != "set") {
            correct = false;
            hinweis += ` ${s3},`;
        }
        // Name
        let s4 = statementArray[3];
        if (s4 != "Name") {
            correct = false;
            hinweis += ` ${s4},`;
        }
        // '='
        let s5 = statementArray[4];
        if (s5 != "=") {
            correct = false;
            hinweis += ` ${s5},`;
        }
        // Maria Müller oder Maria Mueller für beide quotes (single/double)
        let s6 = statementArray[5];
        if (![`'Maria Müller'`, `"Maria Müller"`, `"Maria Mueller"`, `'Maria Mueller'`].includes(s6)) {
            correct = false;
            hinweis += ` ${s6},`;
        }
        // WHERE
        let s7 = statementArray[6];
        if (s7.toLowerCase() != "where") {
            correct = false;
            hinweis += ` ${s7},`;
        }
        // Name
        let s8 = statementArray[7];
        if (s8 != "Name") {
            correct = false;
            hinweis += ` ${s8},`;
        }
        // '='
        let s9 = statementArray[8];
        if (s9 != "=") {
            correct = false;
            hinweis += ` ${s9},`;
        }
        // Maria Schmidt für beide quotes (single/double)
        let s10 = statementArray[9];
        if (![`'Maria Schmidt'`, `"Maria Schmidt"`].includes(s10)) {
            correct = false;
            hinweis += ` ${s10},`;
        }

        // Entferne das erste Leerzeichen und das letzte Komma vom Hinweis
        hinweis.trimStart();
        if (hinweis.charAt(hinweis.length - 1) == ",") {
            hinweis = hinweis.slice(0, hinweis.length - 1);
        }
    } else {
        correct = false;
        hinweis = "das Statement"
    }

    if (correct) {
        document.getElementById("correction").innerHTML =
            "<p class='sql-answer correct'>Richtige Loesung</p>";
        // Setze den aktualisierten Namen in die Tabelle
        let aktuellerName = statementArray[5].replaceAll(`"`, '').replaceAll(`'`, '');
        document.getElementById("updateColumn").innerHTML = aktuellerName;

        if (!jQuery("#collapseOne").hasClass("show")) {
            jQuery("#collapseOne").addClass("show");
        }
        if (!jQuery("#mariaZeile").hasClass("right-background-color")) {
            jQuery("#mariaZeile").addClass("right-background-color");
        }
        if (jQuery('#accordionSolution').hasClass('hide')) {
            jQuery('#accordionSolution').removeClass('hide');
        }
    } else {
        // Setze den ursprünglichen Namen in die Tabelle
        document.getElementById("updateColumn").innerHTML = "Maria Schmidt";
        document.getElementById(
            "correction"
        ).innerHTML = `<p class='sql-answer wrong'>Leider nicht das richtige Statement. Bitte überprüfe <strong>${hinweis}</strong> und probiere es nochmal.</p>`;
        if (jQuery("#mariaZeile").hasClass("right-background-color")) {
            jQuery("#mariaZeile").removeClass("right-background-color");
        }
        if (!jQuery('#accordionSolution').hasClass('hide')) {
            jQuery('#accordionSolution').addClass('hide');
        }
    }
}
