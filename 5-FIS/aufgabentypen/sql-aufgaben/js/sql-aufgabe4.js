/** Fuegt aus SQL Buttons dem Textfeld entsprechende Werte hinzu */
function addSQL(event) {
    // Textfeld Wert
    var valueTextField = jQuery('#textAreaLoesung').val();

    // Ersten Wert zurueck setzen bei Eingabe
    if (valueTextField == 'Deine SQL-Anweisung..') {
        jQuery('#textAreaLoesung').val('');
        valueTextField = '';
    }

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
    }
}

/** Fuegt dem Textfeld die Werte des Select (Tabellenspaltennamen) hinzu */
function addColumnValue() {
    // Textfeld Wert
    var valueTextField = jQuery('#textAreaLoesung').val();

    // Ersten Wert zurueck setzen bei Eingabe
    if (valueTextField == 'Deine SQL-Anweisung..') {
        jQuery('#textAreaLoesung').val('');
        valueTextField = '';
    }

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

function validateSQL() {

}