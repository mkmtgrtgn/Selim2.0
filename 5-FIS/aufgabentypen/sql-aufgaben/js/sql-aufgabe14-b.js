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
    } else if (event.target.id === 'and') {
        // Groesser Option
        jQuery('#textAreaLoesung').val(valueTextField + 'AND ');
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

    if (input && input.startsWith('select')) {
        if (input.includes('from') && input.includes('where') && input.includes('and')) {
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
        // Dasselbe fuer >
        if (val.includes('>') && val.length > 1) {
            // Splite Werte um das >
            let val1 = val.split('>');
            // Preufe ob der letzte index leer ist
            if (val1[val1.length - 1] == '') {
                val1.pop();
            }
            // Fuege < aus verlorenem Split wieder hinzu
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
    if (statementAsArray.length != 12) {
        statementAsArray = null;
    }

    return statementAsArray;
}

/** Validiert die Nutzereingaben */
function validateSQL() {
    /** Richtige Loesung: SELECT Gehalt FROM Personal WHERE FamStatus = 'ledig' AND Gehalt > 2000
     * oder SELECT Gehalt FROM Personal WHERE Gehalt > 2000 AND FamStatus = 'ledig'
     */
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
    console.log(statementArray);
    // Wenn das Statment Array einen Wert hat, validiere diesen
    if (statementArray != null) {
        // select
        let select = statementArray[0];
        if (select.toLowerCase() !== 'select') {
            hinweise += " " + select + ',';
            correct = false;
        }
        // Gehalt
        let gehalt = statementArray[1];
        if (gehalt != 'Gehalt') {
            hinweise += " " + gehalt;
            correct = false;
        }
        // from
        let from = statementArray[2];
        if (from.toLowerCase() != 'from') {
            hinweise += " " + from;
            correct = false;
        }
        // Personal
        let personal = statementArray[3];
        if (personal !== 'Personal') {
            hinweise += " " + personal + ',';
            correct = false;
        }
        // where
        let where = statementArray[4];
        if (where.toLowerCase() !== 'where') {
            hinweise += " " + where;
            correct = false;
        }
        // Zwei Möglichkeiten
        if (statementArray[5] === 'FamStatus') {
            // Familienstatus
            let famStatus = statementArray[5];
            if (famStatus !== 'FamStatus') {
                hinweise += " " + famStatus + ',';
                correct = false;
            }
            // =
            let gleich = statementArray[6];
            if (gleich != '=') {
                hinweise += " " + gleich;
                correct = false;
            }
            let ledig = statementArray[7];
            if (ledig !== 'ledig' && ledig !== `'ledig'` && ledig !== `"ledig"`) {
                hinweise += " " + ledig;
                correct = false;
            }
            // and
            let and = statementArray[8];
            if (and.toLowerCase() !== 'and') {
                hinweise += " " + and;
                correct = false;
            }
            // Gehalt
            let gehalt2 = statementArray[9];
            if (gehalt2 != 'Gehalt') {
                hinweise += " " + gehalt2;
                correct = false;
            }
            // >
            if (statementArray[10] != '>') {
                hinweise += " " + statementArray[10];
                correct = false;
            }
            // 2000
            if (statementArray[11] !== '2000') {
                hinweise += " " + statementArray[11];
                correct = false;
            }
            // Andere Möglichkeit
        } else {
            // Gehalt
            let gehalt2 = statementArray[5];
            if (gehalt2 != 'Gehalt') {
                hinweise += " " + gehalt2;
                correct = false;
            }
            // >
            if (statementArray[6] != '>') {
                hinweise += " " + statementArray[6];
                correct = false;
            }
            // 2000
            if (statementArray[7] !== '2000') {
                hinweise += " " + statementArray[7];
                correct = false;
            }
            // and
            let and = statementArray[8];
            if (and.toLowerCase() !== 'and') {
                hinweise += " " + and;
                correct = false;
            }
            // Familienstatus
            let famStatus = statementArray[9];
            if (famStatus !== 'FamStatus') {
                hinweise += " " + famStatus + ',';
                correct = false;
            }
            // =
            let gleich = statementArray[10];
            if (gleich != '=') {
                hinweise += " " + gleich;
                correct = false;
            }
            let ledig = statementArray[11];
            if (ledig !== 'ledig' && ledig !== `'ledig'` && ledig !== `"ledig"`) {
                hinweise += " " + ledig;
                correct = false;
            }
        }

        hinweise = hinweise.replace(' ', '');
    } else {
        hinweise += "das Statement"
        correct = false;
    }

    if (correct) {
        htmlToPublish.innerHTML = "<p class='sql-answer correct'>Das war die richtige SQL-Anweisung. Gut gemacht!</p>";
        // Schließe Standardtabelle um Loesung anzuzeigen
        // if (!jQuery('#accordionExample').hasClass('hide')) {
        //     jQuery('#accordionExample').addClass('hide');
        // }
        // Entferne Hintergrund da falsch
        if (jQuery('#accordionLoesung').hasClass('hide')) {
            jQuery('#accordionLoesung').removeClass('hide');
        }
    } else {
        htmlToPublish.innerHTML = `<p class='sql-answer wrong'>Leider nicht die richtige SQL-Anweisung. Bitte überprüfe <strong>${hinweise}</strong> und probiere es nochmal.</p>`;
        // Entferne Hintergrund da falsch
        if (!jQuery('#accordionLoesung').hasClass('hide')) {
            jQuery('#accordionLoesung').addClass('hide');
        }
        // Zeige accordion
        // if (jQuery('#accordionExample').hasClass('hide')) {
        jQuery('#accordionExample').removeClass('hide');
        // }
    }
}