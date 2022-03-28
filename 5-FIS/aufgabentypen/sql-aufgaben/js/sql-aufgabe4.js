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

/** Prüft ob die grundlegenden Bedingungen fuer das SQL-Statement gegeben sind (insert into values) */
function hasBasicStatementRequirements(statement) {
    let input = statement.toLowerCase();
    let correct = false;

    if (input && input.startsWith('insert')) {
        if (input.includes('into') && input.includes('values') && input.includes('(') && input.includes(')')) {
            correct = true;
        }
    }

    return correct;
}

/** Teilt das SQL-Statement in ein Array ein zur besseren Überprüfung */
function getStatementAsArray(statement) {
    let statementAsArray = null;
    let correct = true;

    let arrayWerte = statement.split('(');
    let statement1 = arrayWerte[0].split(' ').filter(val => {
        return val !== '';
    });

    let statement2 = arrayWerte[1]
        .replaceAll(')', '')
        .replaceAll(' ', '')
        .split(',')
        .filter(val => {
            return val !== '';
        });

    if (statement1.length != 4) {
        correct = false;
    }
    if (statement2.length != 5) {
        correct = false;
    }
    if (correct) {
        statementAsArray = [];
        statement1.forEach(element => {
            statementAsArray.push(element);
        });
        statement2.forEach(element => {
            statementAsArray.push(element);
        })
    }

    return statementAsArray
}

/** Validiert die Nutzereingaben */
function validateSQL() {
    /** Richtige Loesung "INSERT INTO Personal VALUES (7, 'Steffen Wolfram', 'verheiratet', 'Programmierer', 4800)"; */
    let correct = true;
    let hinweise = '';
    let htmlToPublish = document.getElementById('correction');
    let statementArray;

    // Textfeld Wert
    let statement = jQuery('#textAreaLoesung').val();

    if (!hasBasicStatementRequirements(statement)) {
        correct = false;
    }
    if (correct) {
        statementArray = getStatementAsArray(statement);
    }

    if (statementArray != null) {
        let insert = statementArray[0];
        if (insert.toLowerCase() !== 'insert') {
            hinweise += " " + insert + ',';
            correct = false;
        }

        let into = statementArray[1];
        if (into.toLowerCase() !== 'into') {
            hinweise += " " + into + ',';
            correct = false;
        }

        let personal = statementArray[2];
        if (personal !== 'Personal') {
            hinweise += " " + personal + ',';
            correct = false;
        }

        let values = statementArray[3];
        if (values.toLowerCase() !== 'values') {
            hinweise += " " + values;
            correct = false;
        }

        let sieben = statementArray[4];
        if (sieben !== '7') {
            hinweise += " " + sieben;
            correct = false;
        }

        let steffen = statementArray[5];
        if (steffen != `"SteffenWolfram"` && steffen != `'SteffenWolfram'`) {
            let name = "";
            if (steffen == "SteffenWolfram" && steffen == 'SteffenWolfram') {
                name += steffen.slice(0, 7) + " " + steffen.slice(7);
            }
            hinweise += " " + name;
            correct = false;
        }

        let verheiratet = statementArray[6];
        if (verheiratet !== `"verheiratet"` && verheiratet !== `'verheiratet'`) {
            hinweise += " " + verheiratet;
            correct = false;
        }

        let programmierer = statementArray[7];
        if (programmierer !== `"Programmierer"` && programmierer !== `'Programmierer'`) {
            hinweise += " " + programmierer;
            correct = false;
        }

        let vierAchthundert = statementArray[8];
        if (vierAchthundert !== '4800') {
            hinweise += " " + vierAchthundert;
            correct = false;
        }

        hinweise = hinweise.replace(' ', '');
    } else {
        hinweise += "das Statement"
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
        htmlToPublish.innerHTML = `<p class='sql-answer wrong'>Leider nicht die richtige SQL-Anweisung. Bitte überprüfe <strong>${hinweise}</strong> und probiere es nochmal.</p>`;
    }
}