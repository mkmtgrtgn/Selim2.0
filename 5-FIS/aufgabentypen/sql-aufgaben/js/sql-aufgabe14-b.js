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
                hinweis = `Das Zeichen '${requirement.toUpperCase()}' darf nur einmal vorkommen.`;
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
    if (temp3.length == 12) {
        statementAsArray = temp3;
    }
    console.log(temp3);
    return statementAsArray;
}

/** Validiert die Nutzereingaben */
function validateSQL() {
    /** Richtige Loesung: SELECT Gehalt FROM Personal WHERE FamStatus = 'ledig' AND Gehalt > 2000
     * oder SELECT Gehalt FROM Personal WHERE Gehalt > 2000 AND FamStatus = 'ledig'
     */
    let correct = true;
    let hinweis = '';
    let htmlToPublish = document.getElementById('correction');
    let statementArray;

    // Definiere die Requirements
    let basicRequirements = ["select", "from", "where", "and"];

    // Textfeld Wert
    let input = jQuery('#textAreaLoesung').val();

    // Bestimme Grundbedingungen (Array: [erfüllt, hinweis])
    const grundbedingungen = hasBasicStatementRequirements(input, basicRequirements);
    // Wenn Basisanforderungen nicht erfuellt, "wirf Fehler"
    if (!grundbedingungen[0]) {
        correct = false;
        hinweis = grundbedingungen[1];
    } else {
        statementArray = getStatementAsArray(input);

        // Wenn das Statment Array einen Wert hat, validiere diesen
        if (statementArray != null) {
            // select
            let select = statementArray[0];
            if (select.toLowerCase() !== 'select') {
                hinweis += ` ${select},`;
                correct = false;
            }
            // Gehalt
            let gehalt = statementArray[1];
            if (gehalt != 'Gehalt') {
                hinweis += ` ${gehalt},`;
                correct = false;
            }
            // from
            let from = statementArray[2];
            if (from.toLowerCase() != 'from') {
                hinweis += ` ${from},`;
                correct = false;
            }
            // Personal
            let personal = statementArray[3];
            if (personal !== 'Personal') {
                hinweis += ` ${personal},`;
                correct = false;
            }
            // where
            let where = statementArray[4];
            if (where.toLowerCase() !== 'where') {
                hinweis += ` ${where},`;
                correct = false;
            }
            // Zwei Möglichkeiten
            if (statementArray[5] === 'FamStatus') {
                // 'FamStatus'
                let fam = statementArray[5];
                if (fam != "FamStatus") {
                    correct = false;
                    hinweis += ` ${fam},`;
                }
                // =
                let gleich = statementArray[6];
                if (gleich != '=') {
                    hinweis += ` ${gleich},`;
                    correct = false;
                }
                let ledig = statementArray[7];
                if (ledig !== 'ledig' && ledig !== `'ledig'` && ledig !== `"ledig"`) {
                    hinweis += ` ${ledig},`;
                    correct = false;
                }
                // and
                let and = statementArray[8];
                if (and.toLowerCase() !== 'and') {
                    hinweis += ` ${and},`;
                    correct = false;
                }
                // Gehalt
                let gehalt2 = statementArray[9];
                if (gehalt2 != 'Gehalt') {
                    hinweis += ` ${gehalt2},`;
                    correct = false;
                }
                // >
                if (statementArray[10] != '>') {
                    hinweis += ` ${statementArray[10]},`;
                    correct = false;
                }
                // 2000
                if (statementArray[11] !== '2000') {
                    hinweis += ` ${statementArray[11]},`;
                    correct = false;
                }
                // Andere Möglichkeit
            } else {
                // Gehalt
                let gehalt2 = statementArray[5];
                if (gehalt2 != 'Gehalt') {
                    hinweis += ` ${gehalt2},`;
                    correct = false;
                }
                // >
                if (statementArray[6] != '>') {
                    hinweis += ` ${statementArray[6]},`;
                    correct = false;
                }
                // 2000
                if (statementArray[7] !== '2000') {
                    hinweis += ` ${statementArray[7]},`;
                    correct = false;
                }
                // and
                let and = statementArray[8];
                if (and.toLowerCase() !== 'and') {
                    hinweis += ` ${and},`;
                    correct = false;
                }
                // Familienstatus
                let famStatus = statementArray[9];
                if (famStatus !== 'FamStatus') {
                    hinweis += ` ${famStatus},`;
                    correct = false;
                }
                // =
                let gleich = statementArray[10];
                if (gleich != '=') {
                    hinweis += ` ${gleich},`;
                    correct = false;
                }
                let ledig = statementArray[11];
                if (ledig !== 'ledig' && ledig !== `'ledig'` && ledig !== `"ledig"`) {
                    hinweis += ` ${ledig},`;
                    correct = false;
                }
            }

            // Entferne das erste Leerzeichen und das letzte Komma vom Hinweis
            hinweis.trimStart();
            if (hinweis.charAt(hinweis.length - 1) == ",") {
                hinweis = hinweis.slice(0, hinweis.length - 1);
            }
        } else {
            hinweis = `Du hast leider nicht die richtige Anzahl an notwendigen Argumenten.`
            correct = false;
        }
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
        htmlToPublish.innerHTML = `<p class='sql-answer wrong'>Leider nicht die richtige SQL-Anweisung. \nGrund: <strong>${hinweis}</strong></p>`;
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