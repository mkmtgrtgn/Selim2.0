/** Fuegt aus SQL Buttons dem Textfeld entsprechende Werte hinzu */
function addSQL(event) {
    // Textfeld Wert
    var valueTextField = jQuery('#textAreaLoesung').val();

    // Ersten Wert zurueck setzen bei Eingabe
    //if (valueTextField == 'Deine SQL-Anweisung..') {
    //    jQuery('#textAreaLoesung').val('');
    //    valueTextField = '';
    //}

    if (event.target.id == 'select') {
        // SELECT Option
        jQuery('#textAreaLoesung').val(valueTextField + 'SELECT ');
    } else if (event.target.id == 'star') {
        // * Option
        jQuery('#textAreaLoesung').val(valueTextField + '* ');
    } else if (event.target.id == 'from') {
        // FROM Option
        jQuery('#textAreaLoesung').val(valueTextField + 'FROM ');
    } else if (event.target.id == 'where') {
        // WHERE Option
        jQuery('#textAreaLoesung').val(valueTextField + 'WHERE ');
    } else if (event.target.id == 'insertInto') {
        // INSERT INTO Option
        jQuery('#textAreaLoesung').val(valueTextField + 'INSERT INTO ');
    } else if (event.target.id == 'update') {
        // UPDATE OpTION
        jQuery('#textAreaLoesung').val(valueTextField + 'UPDATE ');
    } else if (event.target.id == 'set') {
        // SET Option
        jQuery('#textAreaLoesung').val(valueTextField + 'SET ');
    } else if (event.target.id == 'delete') {
        // DELETE FROM Option
        jQuery('#textAreaLoesung').val(valueTextField + 'DELETE FROM ');
    } else if (event.target.id == 'equals') {
        // = Option
        jQuery('#textAreaLoesung').val(valueTextField + '= ');
    } else if (event.target.id == 'equalsNot') {
        // Ungleich Option
        jQuery('#textAreaLoesung').val(valueTextField + '!= ');
    } else if (event.target.id == 'smallerAs') {
        // Kleiner Option
        jQuery('#textAreaLoesung').val(valueTextField + '< ');
    } else if (event.target.id == 'biggerAs') {
        // Groesser Option
        jQuery('#textAreaLoesung').val(valueTextField + '> ');
    } else if (event.target.id == 'values') {
        // Groesser Option
        jQuery('#textAreaLoesung').val(valueTextField + 'VALUES ');
    }
}

/** Fuegt dem Textfeld die Werte des Select (Tabellenspaltennamen) hinzu */
function addColumnValue() {
    // Textfeld Wert
    var valueTextField = jQuery('#textAreaLoesung').val();

    // Ersten Wert zurueck setzen bei Eingabe
    //if (valueTextField == 'Deine SQL-Anweisung..') {
    //    jQuery('#textAreaLoesung').val('');
    //    valueTextField = '';
    //}

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

/** Validiert die Nutzereingaben */
function validateSQL() {
    // Textfeld Wert
    let valueTextField = jQuery('#textAreaLoesung').val();

    /** Richtige Loesung "INSERT INTO Personal VALUES (7, 'Steffen Wolfram', 'verheiratet', 'Programmierer', 4800)"; */
    let arrayWerte = valueTextField.split('(');
    let statement1 = arrayWerte[0].split(' ').filter(val => {
        return val !== '';
    });
    let statement2 = arrayWerte[1]
        .replaceAll(')', '')
        .replaceAll("'", "")
        .replaceAll('"', '')
        .replaceAll(' ', '')
        .split(',')
        .filter(val => {
            return val !== '';
        });

    // console.log(statement1, statement2);
    let hinweise = '';

    let correct = true;

    if (statement1.length != 4) {
        correct = false;
    }
    if (statement1.length != 5) {
        correct = false;
    }

    if (!correct) {
        hinweise += "das Statement"
    }

    if (correct) {

        if (statement1[0].toLowerCase() !== 'insert') {
            hinweise += " " + statement1[0] + ',';
            correct = false;
        }
        if (statement1[1].toLowerCase() !== 'into') {
            hinweise += " " + statement1[1] + ',';
            correct = false;
        }
        if (statement1[2] !== 'Personal') {
            hinweise += " " + statement1[2] + ',';
            correct = false;
        }
        if (statement1[3].toLowerCase() !== 'values') {
            hinweise += " " + statement1[3];
            correct = false;
        }
        if (statement2[0] !== '7') {
            hinweise += " " + statement2[0];
            correct = false;
        }
        if (statement2[1] !== 'SteffenWolfram') {
            hinweise += " " + statement2[1];
            correct = false;
        }
        if (statement2[2] !== 'verheiratet') {
            hinweise += " " + statement2[2];
            correct = false;
        }
        if (statement2[3] !== 'Programmierer') {
            hinweise += " " + statement2[3];
            correct = false;
        }
        if (statement2[4] !== '4800') {
            hinweise += " " + statement2[4];
            correct = false;
        }

        hinweise = hinweise.replace(' ', '');

    }
    if (correct) {
        document.getElementById('correction').innerHTML = "<p class='right-answer'>Richtige Loesung</p>";
    } else {
        document.getElementById('correction').innerHTML = `<p class='wrong-answer'>Leider nicht das richtige Statement. Bitte überprüfe <strong>${hinweise}</strong> und probiere es nochmal.</p>`;
    }

}

function checkSelects() {
    jQuery('body').find('select.selects.hidden').remove();
    jQuery('#alertBox').removeClass('padding bg-danger bg-success');
    jQuery('.selects').removeClass('correct');
    jQuery('.selects').removeClass('wrong');
    jQuery('.selects').each(function (i, v) {
        if (jQuery(v).val() == '1') {
            jQuery(v).addClass('correct');
        } else {
            jQuery(v).addClass('wrong'); sa
        }
    });
    if (jQuery('.selects').length == jQuery('.selects.correct').length) {
        jQuery('#alertBox').addClass('padding bg-success');
        jQuery('#alertBox').html('Stimmt!');
    }
    else {
        jQuery('#alertBox').addClass('padding bg-danger');
        jQuery('#alertBox').html('Stimmt leider nicht ganz... Du hast ' + jQuery('.selects.correct').length + ' von ' + jQuery('.selects').length + ' richtig.');
    }
}

function insertFeedback(db, query, taskNumber) {
    if (taskNumber === "4") {
        db.transaction(function (tx) {
            tx.executeSql(query, [], function (tx, results) {
                db.transaction(function (tx) {
                    tx.executeSql("SELECT * FROM Personal", [], function (tx, results) {
                        var len = results.rows.length;
                        if (len < 6) {
                            jQuery('#correction').append("<p class='wrong'>Es wurden Daten aus der Datenbank gelÃ¶scht, das Statement stimmt leider nicht!</p>");
                        } else if (len < 7) {
                            jQuery('#correction').append("<p class='wrong'>Leider wurden keine Daten zur Datenbank hinzugefÃ¼gt, das Statement stimmt leider nicht!</p>");
                        } else {
                            var msg = "";
                            var tabelle = "<table class='table table-responsive table-bordered'>"
                            tabelle += "<tr>";
                            tabelle += "<th>PersNr</th>";
                            tabelle += "<th>Name</th>";
                            tabelle += "<th>FamStatus</th>";
                            tabelle += "<th>Position</th>";
                            tabelle += "<th>Gehalt</th>";
                            tabelle += "</tr>";
                            for (var i = 0; i < len; i++) {
                                tabelle += "<tr>";
                                if (results.rows.item(i).PersNr == "7" && i == len - 1) {
                                    tabelle += "<td class='correct'>" + results.rows.item(i).PersNr + "</td>";
                                } else if (results.rows.item(i).PersNr != "7" && i == len - 1) {
                                    tabelle += "<td class='wrong'>" + results.rows.item(i).PersNr + "</td>";
                                } else {
                                    tabelle += "<td>" + results.rows.item(i).PersNr + "</td>";
                                }

                                if (results.rows.item(i).Name == "Steffen Wolfram" && i == len - 1) {
                                    tabelle += "<td class='correct'>" + results.rows.item(i).Name + "</td>";
                                } else if (results.rows.item(i).Name != "Steffen Wolfram" && i == len - 1) {
                                    tabelle += "<td class='wrong'>" + results.rows.item(i).Name + "</td>";
                                } else {
                                    tabelle += "<td>" + results.rows.item(i).Name + "</td>";
                                }

                                if (results.rows.item(i).FamStatus == "verheiratet" && i == len - 1) {
                                    tabelle += "<td class='correct'>" + results.rows.item(i).FamStatus + "</td>";
                                } else if (results.rows.item(i).FamStatus != "verheiratet" && i == len - 1) {
                                    tabelle += "<td class='wrong'>" + results.rows.item(i).FamStatus + "</td>";
                                } else {
                                    tabelle += "<td>" + results.rows.item(i).FamStatus + "</td>";
                                }

                                if (results.rows.item(i).Position == "Programmierer" && i == len - 1) {
                                    tabelle += "<td class='correct'>" + results.rows.item(i).Position + "</td>";
                                } else if (results.rows.item(i).Position != "Programmierer" && i == len - 1) {
                                    tabelle += "<td class='wrong'>" + results.rows.item(i).Position + "</td>";
                                } else {
                                    tabelle += "<td>" + results.rows.item(i).Position + "</td>";
                                }

                                if (results.rows.item(i).Gehalt == 4800 && i == len - 1) {
                                    tabelle += "<td class='correct'>" + results.rows.item(i).Gehalt + "</td>";
                                } else if (results.rows.item(i).Gehalt != 4800 && i == len - 1) {
                                    tabelle += "<td class='wrong'>" + results.rows.item(i).Gehalt + "</td>";
                                } else {
                                    tabelle += "<td>" + results.rows.item(i).Gehalt + "</td>";
                                }
                                tabelle += "</tr>";
                            }
                            tabelle += "</table>";
                            document.querySelector('#status').innerHTML += tabelle;
                            if (jQuery("td").hasClass("wrong")) {
                                jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig! Schaue unten in der Tabelle nach, welche Daten falsch eingefÃ¼gt wurden</p>");
                            } else {
                                jQuery('#correction').append("<p class='correct'>Das Statement ist richtig! Unten wird eine Tabelle mit der entsprechenden Ausgabe angezeigt</p>");
                            }
                        }
                    });
                });
            }, function (tx, error) {
                showError(error);
            });
        });
    }
}