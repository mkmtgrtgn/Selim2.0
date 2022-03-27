/** Fuegt aus SQL Buttons dem Textfeld entsprechende Werte hinzu */
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
function hasBasicStatementRequirements(statement) {
    let input = statement.toLowerCase();
    let correct = false;

    if (input && input.startsWith('delete')) {
        if (input.includes('from') && input.includes('personal') && input.includes('where') && input.includes('gehalt')) {
            correct = true;
        }
    }

    return correct;
}

/** Teilt das SQL-Statement in ein Array ein zur besseren Überprüfung */
function getStatementAsArray(input) {
    // Variablen angelegt
    let statement = input;
    let statementAsArray;

    let arrayWerte = statement.split(' ');

    // Pruefe wo ein =, + und < ist und ob leerzeichen eingehalten wurden
    let temp = arrayWerte.map(val => {
        // Dasselbe fuer <
        if (val.includes('>') && val.length > 1) {
            // Splite Werte um das >
            let val1 = val.split('>');
            // Preufe ob der letzte index leer ist
            if (val1[val1.length - 1] == '') {
                val1.pop();
            }
            // Fuege > aus verlorenem Split wieder hinzu
            if (val1.length == 1) {
                val1.push('>');
                return val1;
                // falls auch auf der anderen Seite des > kein leerzeichen ist
            } else if (val1.length == 2) {
                // erstelle neues array mit >
                val1 = [val1[0], '>', val1[1]];
                return val1;
            }
        }
        // Wenn zwischen = immer leerzeichen waren
        return val;
    });
    // Bringe Array auf eine Dimension
    temp = temp.flat();

    statementAsArray = temp.filter((val) => val);
    // Wenn nicht die richtige Anzahl von Objekten uebergebe null um nicht das Statement zu ueberpruefen
    if (statementAsArray.length != 7) {
        statementAsArray = null;
    }
    console.log(statementAsArray);
    return statementAsArray;
}

/** Validiert die Nutzereingaben */
function validateSQL() {
    /** Richtige Loesung: DELETE FROM Personal WHERE Gehalt > 5000 */
    let correct = true;
    let hinweise = '';
    let htmlToPublish = document.getElementById('correction');
    let statementArray;

    // Textfeld Wert
    let statement = jQuery('#textAreaLoesung').val();
    // Hat das Statement die mindestens enthaltenen Ausdruecke um weiter zu validieren
    if (!hasBasicStatementRequirements(statement)) {
        correct = false;
    }
    // Falls ja erstelle ein Array aus dem Statement
    if (correct) {
        statementArray = getStatementAsArray(statement);
    }
    // Wenn das Statment Array einen Wert hat, validiere diesen
    if (statementArray != null) {
        // delete
        let deleteStatement = statementArray[0];
        if (deleteStatement.toLowerCase() !== 'delete') {
            hinweise += " " + deleteStatement + ',';
            correct = false;
        }
        // from
        let from = statementArray[1];
        if (from.toLowerCase() !== 'from') {
            hinweise += " " + from;
            correct = false;
        }
        // Personal
        let personal = statementArray[2];
        if (personal !== 'Personal') {
            hinweise += " " + personal + ',';
            correct = false;
        }
        // where
        let where = statementArray[3];
        if (where.toLowerCase() !== 'where') {
            hinweise += " " + where;
            correct = false;
        }
        // Gehalt
        let gehalt = statementArray[4];
        if (gehalt != 'Gehalt') {
            hinweise += " " + gehalt;
            correct = false;
        }
        // >
        if (statementArray[5] != '>') {
            hinweise += " " + statementArray[5];
            correct = false;
        }
        // 5000
        if (statementArray[6] !== '5000') {
            hinweise += " " + statementArray[6];
            correct = false;
        }

        hinweise = hinweise.replace(' ', '');
    } else {
        hinweise += "das Statement"
        correct = false;
    }

    if (correct) {
        htmlToPublish.innerHTML = "<p class='sql-answer correct'>Richtige Loesung</p>";
        // Setze hide Class um die Spalte zu "löschen"
        if (!jQuery('#kathrinSchusterZeile').hasClass('hide')) {
            jQuery('#kathrinSchusterZeile').addClass('hide');
        }
        // Oeffne accordion um aenderung in der Tabelle zu sehen
        if (!jQuery('#collapseOne').hasClass('show')) {
            jQuery('#collapseOne').addClass('show');
        }
        if (jQuery('#accordionSolution').hasClass('hide')) {
            jQuery('#accordionSolution').removeClass('hide');
        }
    } else {
        htmlToPublish.innerHTML = `<p class='sql-answer wrong'>Leider nicht das richtige Statement. Bitte überprüfe <strong>${hinweise}</strong> und probiere es nochmal.</p>`;
        // Setze "löchen" zurueck durch Class remove
        if (jQuery('#kathrinSchusterZeile').hasClass('hide')) {
            jQuery('#kathrinSchusterZeile').removeClass('hide');
        }
        if (!jQuery('#accordionSolution').hasClass('hide')) {
            jQuery('#accordionSolution').addClass('hide');
        }
    }
}