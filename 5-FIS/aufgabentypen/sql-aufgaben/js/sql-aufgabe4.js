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
        htmlToPublish.innerHTML = "<p class='sql-answer correct'>Richtige Loesung</p>";
        if (jQuery('#correctStatement').hasClass('hide')) {
            jQuery('#correctStatement').removeClass('hide');
            if (!jQuery('#collapseOne').hasClass('show')) {
                jQuery('#collapseOne').addClass('show');
            }
        }
    } else {
        jQuery('#correctStatement').addClass('hide');
        htmlToPublish.innerHTML = `<p class='sql-answer wrong'>Leider nicht das richtige Statement. Bitte überprüfe <strong>${hinweise}</strong> und probiere es nochmal.</p>`;
    }
}

// function checkSelects() {
//     jQuery('body').find('select.selects.hidden').remove();
//     jQuery('#alertBox').removeClass('padding bg-danger bg-success');
//     jQuery('.selects').removeClass('correct');
//     jQuery('.selects').removeClass('wrong');
//     jQuery('.selects').each(function (i, v) {
//         if (jQuery(v).val() == '1') {
//             jQuery(v).addClass('correct');
//         } else {
//             jQuery(v).addClass('wrong'); sa
//         }
//     });
//     if (jQuery('.selects').length == jQuery('.selects.correct').length) {
//         jQuery('#alertBox').addClass('padding bg-success');
//         jQuery('#alertBox').html('Stimmt!');
//     }
//     else {
//         jQuery('#alertBox').addClass('padding bg-danger');
//         jQuery('#alertBox').html('Stimmt leider nicht ganz... Du hast ' + jQuery('.selects.correct').length + ' von ' + jQuery('.selects').length + ' richtig.');
//     }
// }

// function insertFeedback(db, query, taskNumber) {
//     if (taskNumber === "4") {
//         db.transaction(function (tx) {
//             tx.executeSql(query, [], function (tx, results) {
//                 db.transaction(function (tx) {
//                     tx.executeSql("SELECT * FROM Personal", [], function (tx, results) {
//                         var len = results.rows.length;
//                         if (len < 6) {
//                             jQuery('#correction').append("<p class='wrong'>Es wurden Daten aus der Datenbank gelÃ¶scht, das Statement stimmt leider nicht!</p>");
//                         } else if (len < 7) {
//                             jQuery('#correction').append("<p class='wrong'>Leider wurden keine Daten zur Datenbank hinzugefÃ¼gt, das Statement stimmt leider nicht!</p>");
//                         } else {
//                             var msg = "";
//                             var tabelle = "<table class='table table-responsive table-bordered'>"
//                             tabelle += "<tr>";
//                             tabelle += "<th>PersNr</th>";
//                             tabelle += "<th>Name</th>";
//                             tabelle += "<th>FamStatus</th>";
//                             tabelle += "<th>Position</th>";
//                             tabelle += "<th>Gehalt</th>";
//                             tabelle += "</tr>";
//                             for (var i = 0; i < len; i++) {
//                                 tabelle += "<tr>";
//                                 if (results.rows.item(i).PersNr == "7" && i == len - 1) {
//                                     tabelle += "<td class='correct'>" + results.rows.item(i).PersNr + "</td>";
//                                 } else if (results.rows.item(i).PersNr != "7" && i == len - 1) {
//                                     tabelle += "<td class='wrong'>" + results.rows.item(i).PersNr + "</td>";
//                                 } else {
//                                     tabelle += "<td>" + results.rows.item(i).PersNr + "</td>";
//                                 }

//                                 if (results.rows.item(i).Name == "Steffen Wolfram" && i == len - 1) {
//                                     tabelle += "<td class='correct'>" + results.rows.item(i).Name + "</td>";
//                                 } else if (results.rows.item(i).Name != "Steffen Wolfram" && i == len - 1) {
//                                     tabelle += "<td class='wrong'>" + results.rows.item(i).Name + "</td>";
//                                 } else {
//                                     tabelle += "<td>" + results.rows.item(i).Name + "</td>";
//                                 }

//                                 if (results.rows.item(i).FamStatus == "verheiratet" && i == len - 1) {
//                                     tabelle += "<td class='correct'>" + results.rows.item(i).FamStatus + "</td>";
//                                 } else if (results.rows.item(i).FamStatus != "verheiratet" && i == len - 1) {
//                                     tabelle += "<td class='wrong'>" + results.rows.item(i).FamStatus + "</td>";
//                                 } else {
//                                     tabelle += "<td>" + results.rows.item(i).FamStatus + "</td>";
//                                 }

//                                 if (results.rows.item(i).Position == "Programmierer" && i == len - 1) {
//                                     tabelle += "<td class='correct'>" + results.rows.item(i).Position + "</td>";
//                                 } else if (results.rows.item(i).Position != "Programmierer" && i == len - 1) {
//                                     tabelle += "<td class='wrong'>" + results.rows.item(i).Position + "</td>";
//                                 } else {
//                                     tabelle += "<td>" + results.rows.item(i).Position + "</td>";
//                                 }

//                                 if (results.rows.item(i).Gehalt == 4800 && i == len - 1) {
//                                     tabelle += "<td class='correct'>" + results.rows.item(i).Gehalt + "</td>";
//                                 } else if (results.rows.item(i).Gehalt != 4800 && i == len - 1) {
//                                     tabelle += "<td class='wrong'>" + results.rows.item(i).Gehalt + "</td>";
//                                 } else {
//                                     tabelle += "<td>" + results.rows.item(i).Gehalt + "</td>";
//                                 }
//                                 tabelle += "</tr>";
//                             }
//                             tabelle += "</table>";
//                             document.querySelector('#status').innerHTML += tabelle;
//                             if (jQuery("td").hasClass("wrong")) {
//                                 jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig! Schaue unten in der Tabelle nach, welche Daten falsch eingefÃ¼gt wurden</p>");
//                             } else {
//                                 jQuery('#correction').append("<p class='correct'>Das Statement ist richtig! Unten wird eine Tabelle mit der entsprechenden Ausgabe angezeigt</p>");
//                             }
//                         }
//                     });
//                 });
//             }, function (tx, error) {
//                 showError(error);
//             });
//         });
//     }
// }