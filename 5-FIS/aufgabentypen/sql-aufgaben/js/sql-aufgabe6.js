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

/** Prüft ob die grundlegenden Bedingungen fuer das SQL-Statement gegeben sind (update personal set) */
function hasBasicStatementRequirements(statement) {
    let input = statement.toLowerCase();
    let correct = false;

    if (input && input.startsWith('update')) {
        if (input.includes('personal') && input.includes('set') && input.includes('gehalt') && input.includes('where')) {
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
        // = und enthaelt ein zeichen
        if (val.includes('=') && val.length > 1) {
            // Splite Werte um das =
            let val1 = val.split('=');
            // Preufe ob der letzte index leer ist
            if (val1[val1.length - 1] == '') {
                val1.pop();
            }
            // Fuege = aus verlorenem Split wieder hinzu
            if (val1.length == 1) {
                val1.push('=');
                return val1;
                // falls auch auf der anderen Seite des = kein leerzeichen ist
            } else if (val1.length == 2) {
                // erstelle neues array mit =
                val1 = [val1[0], '=', val1[1]];
                return val1;
            }
        }
        // Dasselbe fuer +
        if (val.includes('+') && val.length > 1) {
            // Splite Werte um das +
            let val1 = val.split('+');
            // Preufe ob der letzte index leer ist
            if (val1[val1.length - 1] == '') {
                val1.pop();
            }
            // Fuege + aus verlorenem Split wieder hinzu
            if (val1.length == 1) {
                val1.push('+');
                return val1;
                // falls auch auf der anderen Seite des + kein leerzeichen ist
            } else if (val1.length == 2) {
                // erstelle neues array mit +
                val1 = [val1[0], '+', val1[1]];
                return val1;
            }
        }
        // Dasselbe fuer <
        if (val.includes('<') && val.length > 1) {
            // Splite Werte um das <
            let val1 = val.split('<');
            // Preufe ob der letzte index leer ist
            if (val1[val1.length - 1] == '') {
                val1.pop();
            }
            // Fuege < aus verlorenem Split wieder hinzu
            if (val1.length == 1) {
                val1.push('<');
                return val1;
                // falls auch auf der anderen Seite des < kein leerzeichen ist
            } else if (val1.length == 2) {
                // erstelle neues array mit <
                val1 = [val1[0], '<', val1[1]];
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
    if (statementAsArray.length != 12) {
        statementAsArray = null;
    }
    // console.log(statementAsArray);
    return statementAsArray;
}

/** Validiert die Nutzereingaben */
function validateSQL() {
    /** Richtige Loesung: UPDATE Personal SET Gehalt = Gehalt + 500 WHERE Gehalt < 4000 */
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
        // update
        let update = statementArray[0];
        if (update.toLowerCase() !== 'update') {
            hinweise += " " + update + ',';
            correct = false;
        }
        // Personal
        let personal = statementArray[1];
        if (personal !== 'Personal') {
            hinweise += " " + personal + ',';
            correct = false;
        }
        // set
        let set = statementArray[2];
        if (set.toLowerCase() !== 'set') {
            hinweise += " " + set;
            correct = false;
        }
        // Gehalt
        let gehalt = statementArray[3];
        if (gehalt != 'Gehalt') {
            hinweise += " " + gehalt;
            correct = false;
        }
        // =
        let gleich = statementArray[4];
        if (gleich != '=') {
            hinweise += " " + gleich;
            correct = false;
        }
        // Gehalt nochmal
        if (statementArray[5] != `Gehalt`) {
            hinweise += " " + statementArray[5];
            correct = false;
        }
        // +
        let plus = statementArray[6];
        if (plus != '+') {
            hinweise += " " + plus;
            correct = false;
        }
        // 500
        let funfh = statementArray[7];
        if (funfh != '500') {
            hinweise += " " + funfh;
            correct = false;
        }
        // where
        let where = statementArray[8];
        if (where.toLowerCase() !== 'where') {
            hinweise += " " + where;
            correct = false;
        }
        // Gehalt
        if (statementArray[9] != `Gehalt`) {
            hinweise += " " + statementArray[9];
            correct = false;
        }
        // <
        if (statementArray[10] != '<') {
            hinweise += " " + statementArray[10];
            correct = false;
        }
        // 4000
        if (statementArray[11] !== '4000') {
            hinweise += " " + statementArray[11];
            correct = false;
        }

        hinweise = hinweise.replace(' ', '');
    } else {
        hinweise += "das Statement"
        correct = false;
    }

    if (correct) {
        htmlToPublish.innerHTML = "<p class='sql-answer correct'>Das war die richtige SQL-Anweisung. Gut gemacht!</p>";
        // Setze Wert auf den neuen Wert
        document.getElementById('thomasGehalt').innerHTML = 2500;
        // Mache Hintergrund gruen
        if (!jQuery('#thomasZeile').hasClass('right-background-color')) {
            jQuery('#thomasZeile').addClass('right-background-color');
        }
        // Oeffne accordion um aenderung in der Tabelle zu sehen
        if (!jQuery('#collapseOne').hasClass('show')) {
            jQuery('#collapseOne').addClass('show');
        }
        if (jQuery('#accordionSolution').hasClass('hide')) {
            jQuery('#accordionSolution').removeClass('hide');
        }
    } else {
        htmlToPublish.innerHTML = `<p class='sql-answer wrong'>Leider nicht die richtige SQL-Anweisung. Bitte überprüfe <strong>${hinweise}</strong> und probiere es nochmal.</p>`;
        // Setze Wert zurueck
        document.getElementById('thomasGehalt').innerHTML = 2000;
        // Entferne Hintergrund da falsch
        if (jQuery('#thomasZeile').hasClass('right-background-color')) {
            jQuery('#thomasZeile').removeClass('right-background-color');
        }
        if (!jQuery('#accordionSolution').hasClass('hide')) {
            jQuery('#accordionSolution').addClass('hide');
        }
    }
}