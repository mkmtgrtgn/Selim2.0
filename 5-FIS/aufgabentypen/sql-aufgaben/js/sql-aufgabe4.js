/** Fuegt aus den SQL Buttons das Textfeld entsprechende Werte hinzu */
function addSQL(event) {
    // Textfeld Wert
    var valueTextField = jQuery('#textAreaLoesung').val();

    if (event.target.id === 'select') {
        // SELECT Option
        jQuery('#textAreaLoesung').val(valueTextField + 'SELECT ');
    } else if (event.target.id === 'star') {
        // * Option
        jQuery('#textAreaLoesung').val(valueTextField + '* ');
    } else if (event.target.id === 'from') {
        // FROM Option
        jQuery('#textAreaLoesung').val(valueTextField + 'FROM ');
    } else if (event.target.id === 'where') {
        // WHERE Option
        jQuery('#textAreaLoesung').val(valueTextField + 'WHERE ');
    } else if (event.target.id === 'insertInto') {
        // INSERT INTO Option
        jQuery('#textAreaLoesung').val(valueTextField + 'INSERT INTO ');
    } else if (event.target.id === 'update') {
        // UPDATE OpTION
        jQuery('#textAreaLoesung').val(valueTextField + 'UPDATE ');
    } else if (event.target.id === 'set') {
        // SET Option
        jQuery('#textAreaLoesung').val(valueTextField + 'SET ');
    } else if (event.target.id === 'delete') {
        // DELETE FROM Option
        jQuery('#textAreaLoesung').val(valueTextField + 'DELETE FROM ');
    } else if (event.target.id === 'equals') {
        // = Option
        jQuery('#textAreaLoesung').val(valueTextField + '= ');
    } else if (event.target.id === 'equalsNot') {
        // Ungleich Option
        jQuery('#textAreaLoesung').val(valueTextField + '!= ');
    } else if (event.target.id === 'smallerAs') {
        // Kleiner Option
        jQuery('#textAreaLoesung').val(valueTextField + '< ');
    } else if (event.target.id === 'biggerAs') {
        // Groesser Option
        jQuery('#textAreaLoesung').val(valueTextField + '> ');
    } else if (event.target.id === 'values') {
        // VALUES Option
        jQuery('#textAreaLoesung').val(valueTextField + 'VALUES ');
    }
}

/** Fuegt dem Textfeld die Werte des Select (Tabellenspaltennamen) hinzu */
function addColumnValue() {
    // Textfeld Wert
    var valueTextField = jQuery('#textAreaLoesung').val();

    if (jQuery('#selectedValue option:selected').text().toLowerCase() == 'persnr') {
        // Personalnummer Spalte aus der Tabelle Personal
        jQuery('#textAreaLoesung').val(valueTextField + 'PersNr ');
    } else if (jQuery('#selectedValue option:selected').text().toLowerCase() == 'name') {
        // Namen Spalte aus der Tabelle Personal
        jQuery('#textAreaLoesung').val(valueTextField + 'Name ');
    } else if (jQuery('#selectedValue option:selected').text().toLowerCase() == 'famstatus') {
        // Familienstatus Spalte aus der Tabelle Personal
        jQuery('#textAreaLoesung').val(valueTextField + 'FamStatus ');
    } else if (jQuery('#selectedValue option:selected').text().toLowerCase() == 'position') {
        // Position Spalte aus der Tabelle Personal
        jQuery('#textAreaLoesung').val(valueTextField + 'Position ');
    } else if (jQuery('#selectedValue option:selected').text().toLowerCase() == 'gehalt') {
        // Gehalt Spalte aus der Tabelle Personal
        jQuery('#textAreaLoesung').val(valueTextField + 'Gehalt ');
    }
}

/** Prüft ob die grundlegenden Bedingungen fuer das SQL-Statement gegeben sind */
function hasBasicStatementRequirements(input, basicRequirements, uniqueRequirements = []) {
    let correct = true;
    let statement = input.toLowerCase().trim();
    let hinweis = null;

    if (basicRequirements.length > 0) {
        // Prüfe, ob Requirement vorhanden ist
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


/** Teilt das SQL-Statement in ein Array ein zur besseren Überprüfung */
function getStatementAsArray(input) {
    // Variablen angelegt
    // Nimmt die Leerzeichen am Anfang und Ende weg
    let statement = input.trim();
    let statementAsArray;

    // Falls ; an letzter Stelle
    statement = statement.replace(';', '');

    let arrayWerte = statement.split(' ');

    // Pruefe wo ein =, + und < ist und ob leerzeichen eingehalten wurden
    let temp = arrayWerte.map(val => {
        // Dasselbe fuer (
        // Wenn Wert '(' enthaelt und laenger ist als 1 Zeichen
        if (val.includes("(") && val.length > 1) {
            // Splitte nach '('
            let val2 = val.split("(");
            // Pruefe ob durch den Splitt das letzte Element leer ist und entferne es
            if (val2[val2.length - 1] == "") {
                val2.pop();
            }
            // Wenn das Array nur ein Element enthält, fuege das fehlende '(' hinzu
            if (val2.length == 1) {
                val2.push("(");
                return val2;
                // Wenn 2 Elemente, fuege das fehlende '(' dazwischen ein
            } else if (val2.length == 2) {
                // Überprüfe, ob das zweite Element in val2 das Zeichen')' enthält
                if (val2[1].includes(",")) {
                    // Splitte nach dem ')'
                    let val3 = val2[1].split(",");
                    // Wenn 2 Elemente, entferne das Leerzeichen
                    if (val3.length > 1 && val3[1] == "") {
                        val3.pop();
                    }
                    // Wenn val3 keine ')' enthält, füge es hinzu
                    if (!val3.includes(",")) {
                        val3.push(",");
                    }

                    // Aktualisiere ursprüngliche val2 und flatte es
                    val2 = [val2[0], "(", val3].flat();

                    // Falls das zweite Element in val2 das Zeichen')' NICHT enthält
                } else {
                    // Das was davor auch gemacht wurde
                    val2 = [val2[0], "(", val2[1]];
                }
                return val2;
            }
        }
        // Wenn Wert ',' enthaelt und laenger ist als 1 Zeichen
        if (val.includes(",") && val.length > 1) {
            // Splitte nach ','
            let val2 = val.split(",");
            // Pruefe ob durch den Splitt das letzte Element leer ist und entferne es
            if (val2[val2.length - 1] == "") {
                val2.pop();
            }
            // Wenn das Array nur ein Element enthält, fuege das fehlende ',' hinzu
            if (val2.length == 1) {
                val2.push(",");
                return val2;
                // Wenn 2 Elemente, fuege das fehlende ',' dazwischen ein
            } else if (val2.length == 2) {
                val2 = [val2[0], ",", val2[1]];
                return val2;
            }
        }
        // Dasselbe fuer )
        if (val.includes(')') && val.length > 1) {
            // Splite Werte um das )
            let val1 = val.split(')');

            // Preufe ob der letzte index leer ist
            if (val1[val1.length - 1] == '') {
                val1.pop();
            }
            // Fuege ) aus verlorenem Split wieder hinzu
            if (val1.length == 1) {
                val1.push(')');
                return val1;
                // falls auch auf der anderen Seite des ) kein leerzeichen ist
            } else if (val1.length == 2) {
                // erstelle neues array mit )
                val1 = [val1[0], ')', val1[1]];
                return val1;
            }
        }
        // Wenn zwischen = immer leerzeichen waren
        return val;
    });
    // Bringe Array auf eine Dimension
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
    if (temp3.length == 15) {
        statementAsArray = temp3;
    }

    return statementAsArray;
}

/** Validiert die Nutzereingaben */
function validateSQL() {
    /** Richtige Loesung "INSERT INTO Personal VALUES (7, 'Steffen Wolfram', 'verheiratet', 'Programmierer', 4800)"; */
    let correct = true;
    let hinweise = '';
    let htmlToPublish = document.getElementById('correction');
    let statementArray;

    // Textfeld Wert
    let basicRequirements = ["insert", "into", "values"];
    let uniqueRequirements = ["(", ")"];
    // Textfeld Wert
    let input = jQuery("#textAreaLoesung").val();

    // Textfeld Wert
    //let statement = jQuery('#textAreaLoesung').val();

    if (!hasBasicStatementRequirements(input, basicRequirements, uniqueRequirements)) {
        correct = false;
    }
    if (correct) {
        statementArray = getStatementAsArray(input);
    }

    if (statementArray != null) {
        let insert = statementArray[0];
        if (insert.toLowerCase() !== 'insert') {
            hinweise += ` ${insert},`;
            correct = false;
        }

        let into = statementArray[1];
        if (into.toLowerCase() !== 'into') {
            hinweise += ` ${into},`;
            correct = false;
        }

        let personal = statementArray[2];
        if (personal !== 'Personal') {
            hinweise += ` ${personal},`;
            correct = false;
        }

        let values = statementArray[3];
        if (values.toLowerCase() !== 'values') {
            hinweise += ` ${values},`;
            correct = false;
        }

        // '('
        let klammerAuf = statementArray[4];
        if (klammerAuf != "(") {
            correct = false;
            hinweise += ` ${klammerAuf},`;
        }

        let sieben = statementArray[5];
        if (sieben !== '7') {
            hinweise += ` ${sieben},`;
            correct = false;
        }

        // ','
        let komma = statementArray[6];
        if (komma != ",") {
            correct = false;
            hinweise += ` ${komma},`;
        }

        let steffen = statementArray[7];
        if (steffen != `"Steffen Wolfram"` && steffen != `'Steffen Wolfram'`) {
            hinweise += ` ${steffen},`;
            correct = false;
        }

        komma = statementArray[8];
        if (komma != ",") {
            correct = false;
            hinweise += ` ${komma},`;
        }

        let verheiratet = statementArray[9];
        if (verheiratet !== `"verheiratet"` && verheiratet !== `'verheiratet'`) {
            hinweise += ` ${verheiratet},`;
            correct = false;
        }

        komma = statementArray[10];
        if (komma != ",") {
            correct = false;
            hinweise += ` ${komma},`;
        }

        let programmierer = statementArray[11];
        if (programmierer !== `"Programmierer"` && programmierer !== `'Programmierer'`) {
            hinweise += ` ${programmierer},`;
            correct = false;
        }

        komma = statementArray[12];
        if (komma != ",") {
            correct = false;
            hinweise += ` ${komma},`;
        }

        let vierAchthundert = statementArray[13];
        if (vierAchthundert !== '4800') {
            hinweise += ` ${vierAchthundert},`;
            correct = false;
        }

        // ')'
        let klammerZu = statementArray[14];
        if (klammerZu != ")") {
            correct = false;
            hinweise += ` ${klammerZu},`;
        }

        hinweise = hinweise.replace(' ', '');


        // Entferne das erste Leerzeichen und das letzte Komma vom Hinweis
        hinweise.trimStart();
        if (hinweise.charAt(hinweise.length - 1) == ",") {
            hinweise = hinweise.slice(0, hinweise.length - 1);
        }
    } else {
        hinweise = `Du hast leider nicht die richtige Anzahl an notwendigen Argumenten.`
        correct = false;
    }

    if (correct) {
        htmlToPublish.innerHTML = "<p class='sql-answer correct'>Das war die richtige SQL-Anweisung. Gut gemacht!</p>";
        if (jQuery('#correctStatement').hasClass('hide')) {
            jQuery('#correctStatement').removeClass('hide');
        }
        // Oeffne accordian
        if (!jQuery('#collapseOne').hasClass('show')) {
            jQuery('#collapseOne').addClass('show');
        }
        if (jQuery('#accordionSolution').hasClass('hide')) {
            jQuery('#accordionSolution').removeClass('hide');
        }
    } else {
        if (!jQuery('#correctStatement').hasClass('hide')) {
            jQuery('#correctStatement').addClass('hide');
        }
        if (!jQuery('#accordionSolution').hasClass('hide')) {
            jQuery('#accordionSolution').addClass('hide');
        }
        htmlToPublish.innerHTML = `<p class='sql-answer wrong'>Leider nicht die richtige SQL-Anweisung. \nGrund: <strong>${hinweise}</strong></p>`;
    }
}