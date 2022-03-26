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

/** Validiert die Nutzereingaben */
function validateSQL() {
    // Textfeld Wert
    let valueTextField = jQuery('#textAreaLoesung').val();

    /** Richtige Loesung SELECT * FROM Personal und UPDATE Personal SET Name= Maria 'Müller' WHERE Name= 'Maria Schmidt' */
    let arrayWerte = valueTextField.split('(');
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

    // console.log(statement1, statement2);
    let hinweise = '';

    let correct = true;

    if (statement1.length != 4) {
        correct = false;
    }
    if (statement2.length != 5) {
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
        if (statement2[1] != `"SteffenWolfram"` && statement2[1] != `'SteffenWolfram'`) {
            let name = "";
            if (statement2[1] == "SteffenWolfram" && statement2[1] == 'SteffenWolfram') {
                name += statement2[1].slice(0, 7) + " " + statement2[1].slice(7);
            }
            hinweise += " " + name;
            correct = false;
        }
        if (statement2[2] !== `"verheiratet"` && statement2[2] !== `'verheiratet'`) {
            hinweise += " " + statement2[2];
            correct = false;
        }
        if (statement2[3] !== `"Programmierer"` && statement2[3] !== `'Programmierer'`) {
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