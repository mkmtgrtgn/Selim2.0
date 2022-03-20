// Funktion zur PrÃ¼fung von Input Eingaben
function dasher(Student, Correct) {
    var studentAnswer = Student.value;
    var correctAnswer = Correct;
    result = ""
    for (var c = 0; c< correctAnswer.length; c ++) {
        var CorrectX = correctAnswer.charAt(c);
        var StudentX = studentAnswer.charAt(c);
        if (CorrectX == StudentX) {
        result = result + CorrectX;
        }
        else {
        result = result +  "=";
        }
    }
    Student.value = result;
        if (studentAnswer == correctAnswer){
            Student.value = "*" + studentAnswer + "*";
        }
    }
    // "Oder Eingaben"
    
    // 
    function inputTable() {
        jQuery('#alertBox').removeClass('padding bg-info bg-success bg-danger');
        var inputs = jQuery('input[type="text"]');
        var count = 0;
        inputs.removeClass('correct incorrect');
        jQuery(inputs).each(function(i,v){
            if(jQuery(v).val().toLowerCase() == jQuery(v).attr('name').toLowerCase()) {
                jQuery(v).addClass('correct');
                count++;
            }
            else {
                jQuery(v).addClass('incorrect');
            }
        })
        if(count == inputs.length) {
            jQuery('#alertBox').addClass('padding bg-success');
            jQuery('#alertBox').html('Toll, alles richtig!');
        }
        else {
            jQuery('#alertBox').addClass('padding bg-info');
            jQuery('#alertBox').html('Leider nicht ganz richtig. Du hast ' + count + '/' + inputs.length + ' richtig');
        }
    }
    
    function inputVal() {
        jQuery('#alertBox').removeClass('padding bg-info bg-success bg-danger');
        jQuery('#alertBox').html('');
        var correctAnswers = jQuery('input.correctAnswers').val().split(',');
        jQuery('body').find('input.answer.hidden').remove();
        var userAnswers = jQuery('input.answer');
        var countCorrect = 0;
        var usedAnswers = [];
        jQuery(userAnswers).removeClass('correct');
        jQuery(correctAnswers).each(function(i,v){
            userAnswers.each(function(i2,v2) {
                var cleanV2 = jQuery(v2).val().toLowerCase().trim();
                if(jQuery.inArray(cleanV2, usedAnswers) != -1) {
                    //jQuery('#alertBox').html('Ein Eintrag ist mehrfach vorhanden. Versuche es doch nochmal oder frag iWi.' + '<br />');
                    console.log('Ein Eintrag ist mehrfach vorhanden. Versuche es doch nochmal oder frag iWi.' + '<br />');
                }
                if(v.toLowerCase() == cleanV2 && jQuery.inArray(cleanV2, usedAnswers) == -1) {
                    jQuery(v2).addClass('correct');
                    countCorrect++;
                    usedAnswers.push(cleanV2);
                }
            });
        });
        if(userAnswers.length == 1) {
            if(countCorrect == userAnswers.length) {
                jQuery('#alertBox').addClass('padding bg-success');
                jQuery('#alertBox').html('Stimmt!');
            }
            else {
                jQuery('#alertBox').addClass('padding bg-danger');
                jQuery('#alertBox').html('Stimmt leider nicht...');
            }
        }
        else {
            jQuery('#alertBox').append("Du hast " + countCorrect + "/" + userAnswers.length + " richtig!");
            jQuery('#alertBox').addClass('padding bg-info');
        }
    }
    
    // Reihenfolge der inputs muss festgelegt sein (Prozesse)
    // oder auch zum Beispiel fÃ¼r die Formeln
    function inputValOrder() {
        jQuery('#alertBox').removeClass('bg-danger bg-success padding');
        if( jQuery('.input1').val().toLowerCase() == jQuery('.input1').attr('name').toLowerCase() && jQuery('.input2').val().toLowerCase() == jQuery('.input2').attr('name').toLowerCase() && jQuery('.input3').val().toLowerCase() == jQuery('.input3').attr('name').toLowerCase() ){
            jQuery('#alertBox').addClass('padding bg-success');
            jQuery('#alertBox').html('Richtig!');
            }
        else 
        {
            jQuery('#alertBox').addClass('padding bg-danger');
            jQuery('#alertBox').html('Leider falsch. Versuche es doch nochmal.');
        }
    }
    // brauchen wir doch noch, obwohl etwas veraltet
    function input_Korrektur() {
            
            // Unser Input
              var aw1 = a1.tf1.value;
              var aw2 = a1.tf2.value;
            var aw3 = a1.tf3.value;
            var aw4 = a1.tf4.value;
            
            // Correct Answers
            var ca1 = a1.ca1.value;
            var ca2 = a1.ca2.value;
            var ca3 = a1.ca3.value;
            var ca4 = a1.ca4.value;
            
            // 
            var alertBox = document.getElementById("alertBox");
        
        var richtigzaehler = 0;	
        
        if( aw1==ca1 || aw1==ca2 || aw1==ca3 || aw1==ca4){
                    richtigzaehler++;
                    } else aw1="";
        if( aw2==ca1 || aw2==ca2 || aw2==ca3 || aw2==ca4){
                    richtigzaehler++;
                    } else aw2="";
        if( aw3==ca1 || aw3==ca2 || aw3==ca3 || aw3==ca4){
                    richtigzaehler++;
                    } else aw3="";
        if( aw4==ca1 || aw4==ca2 || aw4==ca3 || aw4==ca4){
                    richtigzaehler++;
                    } else aw4="";
        
        if ( richtigzaehler==4 ) {
            if( aw1!=aw2 && aw2!=aw3 && aw3 != aw4 ){
                alertBox.className = "padding bg-success";
                alertBox.innerHTML = "Toll, alles richtig!";
                }
            else{
                alertBox.className = "padding bg-info";
                alertBox.innerHTML = "Du hast einen Eintrag doppelt. Versuch's doch nochmal oder frag iWi.";
                }
            }
        else { 
            alertBox.className = "padding bg-danger";
            alertBox.innerHTML = "Leider nicht. Versuch's nochmal, oder bitte iWi um Hilfe.";
            }		
    }
    
    // Select Validierung
    function checkSelects() {
        jQuery('body').find('select.selects.hidden').remove();
        jQuery('#alertBox').removeClass('padding bg-danger bg-success');
        jQuery('.selects').removeClass('correct');
        jQuery('.selects').removeClass('wrong');
        jQuery('.selects').each(function(i,v) {
            if(jQuery(v).val() == '1') {
                jQuery(v).addClass('correct');
            } else {
                jQuery(v).addClass('wrong');
            }
        });
        if(jQuery('.selects').length == jQuery('.selects.correct').length) {
            jQuery('#alertBox').addClass('padding bg-success');
            jQuery('#alertBox').html('Stimmt!');
        }
        else {
            jQuery('#alertBox').addClass('padding bg-danger');
            jQuery('#alertBox').html('Stimmt leider nicht ganz... Du hast ' + jQuery('.selects.correct').length + ' von ' + jQuery('.selects').length + ' richtig.');
        }
    }
    
    
    function radioVal() {
        jQuery('input[type="radio"]').parent().removeClass('correct');
        jQuery('input.solution:checked').parent().addClass('correct');
        jQuery('#alertBox').removeClass('padding bg-success bg-danger');
        if(jQuery('input.solution:checked').parent().hasClass('correct')) {
                jQuery('#alertBox').addClass('padding bg-success');
                jQuery('#alertBox').html('Stimmt!');
        }
        else {
            jQuery('#alertBox').addClass('padding bg-danger');
            jQuery('#alertBox').html('Stimmt leider nicht...');
        }
    }
    
    function checkBoxVal() {
        jQuery('input[type="checkbox"]').parent().removeClass('correct');
        jQuery('input.solution:checked').parent().addClass('correct');
        console.log(jQuery('input.solution').length + ' sind mÃ¶glich');
        jQuery('#alertBox').addClass('padding bg-info');
        jQuery('#alertBox').html('Du hast ' + jQuery('input.solution:checked').length + 'von ' + jQuery('input.solution').length + ' MÃ¶glichkeiten richtig.');
    }
    // Klappt einen LÃ¶sungsvorschlag aus
    function toggleAnswer1() {
        if(!jQuery('#btnloesung1').hasClass('disabled')) {
            jQuery('.aufgabe1').toggle();
        }
    }
    function toggleAnswer2() {
        if(!jQuery('#btnloesung2').hasClass('disabled')) {
            jQuery('.aufgabe2').toggle();
        }
    }
    function toggleAnswer3() {
        if(!jQuery('#btnloesung3').hasClass('disabled')) {
            jQuery('.aufgabe3').toggle();
        }
    }
    jQuery('.toggleMoreInformation').click(function() {
        jQuery(this).parent().siblings(".ausklappen").toggleClass("hidden");
    });
    jQuery('#loesung1').keyup(function () {
        if(jQuery(this).val().length >= 15) {
            jQuery('#btnloesung1').removeClass('disabled');
        } else if(jQuery(this).val().length < 15) {
            jQuery('#btnloesung1').addClass('disabled');
        }
    });
    jQuery('#loesung2').keyup(function () {
        if(jQuery(this).val().length >= 15) {
            jQuery('#btnloesung2').removeClass('disabled');
        } else if(jQuery(this).val().length < 15) {
            jQuery('#btnloesung2').addClass('disabled');
        }
    });
    jQuery('#loesung3').keyup(function () {
        if(jQuery(this).val().length >= 15) {
            jQuery('#btnloesung3').removeClass('disabled');
        } else if(jQuery(this).val().length < 15) {
            jQuery('#btnloesung3').addClass('disabled');
        }
    });
    
    
    //Drag & Drop Tabelle
    jQuery("#drag1").draggable({
        revert: "invalid",
        snap: ".droppable",
        snapMode: "inner"
    });
    jQuery("#drag2").draggable({
        revert: "invalid",
        snap: ".droppable",
        snapMode: "inner"
    });
    jQuery("#drag3").draggable({
        revert: "invalid",
        snap: ".droppable",
        snapMode: "inner"
    });
    jQuery("#drag4").draggable({
        revert: "invalid",
        snap: ".droppable",
        snapMode: "inner"
    });
    jQuery("#drag5").draggable({
        revert: "invalid",
        snap: ".droppable",
        snapMode: "inner"
    });
    jQuery("#drag6").draggable({
        revert: "invalid",
        snap: ".droppable",
        snapMode: "inner"
    });
    jQuery("#drag7").draggable({
        revert: "invalid",
        snap: ".droppable",
        snapMode: "inner"
    });
    jQuery("#drag8").draggable({
        revert: "invalid",
        snap: ".droppable",
        snapMode: "inner"
    });
    
    jQuery("#drop1").droppable({
        accept: "#drag7"
    });
    jQuery("#drop2").droppable({
        accept: "#drag6"
    });
    jQuery("#drop3").droppable({
        accept: "#drag8"
    });
    jQuery("#drop4").droppable({
        accept: "#drag2"
    });
    jQuery("#drop5").droppable({
        accept: "#drag3"
    });
    jQuery("#drop6").droppable({
        accept: "#drag1"
    });
    jQuery("#drop7").droppable({
        accept: "#drag4"
    });
    jQuery("#drop8").droppable({
        accept: "#drag5"
    });
    
    //Alles fÃ¼r Aufgabe 1
    jQuery('#cursor-change>strong').click(function () {
        jQuery('#cursor-change>strong').removeClass('wrong');
        jQuery('#cursor-change>strong').removeClass('correct');
        if(jQuery(this).hasClass('vormerken')) {
            jQuery('strong.vormerken').toggleClass('marked');
        } else if(jQuery(this).hasClass('video')) {
            jQuery('strong.video').toggleClass('marked');
        } else if(jQuery(this).hasClass('ausleiher')) {
            jQuery('strong.ausleiher').toggleClass('marked');
        } else {
            jQuery(this).toggleClass('marked');
        }
    
    });
    
    function markWords() {
        if(jQuery('#bib').hasClass('marked')) {
            jQuery('#bib').removeClass('marked');
            jQuery('#bib').addClass('wrong');
        }
        if(jQuery('#is').hasClass('marked')) {
            jQuery('#is').removeClass('marked');
            jQuery('#is').addClass('wrong');
        }
        if(jQuery('#info').hasClass('marked')) {
            jQuery('#info').removeClass('marked');
            jQuery('#info').addClass('wrong');
        }
        if(jQuery('#verleihen').hasClass('marked')) {
            jQuery('#verleihen').removeClass('marked');
            jQuery('#verleihen').addClass('correct');
        }
        if(jQuery('strong.vormerken').hasClass('marked')) {
            jQuery('strong.vormerken').removeClass('marked');
            jQuery('strong.vormerken').addClass('correct');
        }
        if(jQuery('strong.video').hasClass('marked')) {
            jQuery('strong.video').removeClass('marked');
            jQuery('strong.video').addClass('correct');
        }
        if(jQuery('strong.ausleiher').hasClass('marked')) {
            jQuery('strong.ausleiher').removeClass('marked');
            jQuery('strong.ausleiher').addClass('correct');
        }
        if(jQuery('#strafen').hasClass('marked')) {
            jQuery('#strafen').removeClass('marked');
            jQuery('#strafen').addClass('correct');
        }
        if(jQuery('#rueckgaben').hasClass('marked')) {
            jQuery('#rueckgaben').removeClass('marked');
            jQuery('#rueckgaben').addClass('wrong');
        }
        if(jQuery('#zahlen').hasClass('marked')) {
            jQuery('#zahlen').removeClass('marked');
            jQuery('#zahlen').addClass('correct');
        }
    
        jQuery('#cursor-change>strong').removeClass('marked');
    }
    
    function addSQL() {
        if(event.target.id == 'select') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'SELECT ');
        } else if(event.target.id == 'star') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + '* ');
        } else if(event.target.id == 'from') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'FROM ');
        } else if(event.target.id == 'where') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'WHERE ');
        } else if(event.target.id == 'insert') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'INSERT INTO ');
        } else if(event.target.id == 'update') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'UPDATE ');
        } else if(event.target.id == 'set') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'SET ');
        } else if(event.target.id == 'delete') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'DELETE FROM ');
        } else if(event.target.id == 'equals') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + '= ');
        } else if(event.target.id == 'equalsNot') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + '!= ');
        } else if(event.target.id == 'smallerAs') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + '< ');
        } else if(event.target.id == 'biggerAs') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + '> ');
        } else if(jQuery('#sqlOptions option:selected').text().toLowerCase() == 'persnr') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'PersNr ');
        } else if(jQuery('#sqlOptions option:selected').text().toLowerCase() == 'name') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'Name ');
        } else if(jQuery('#sqlOptions option:selected').text().toLowerCase() == 'famstatus') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'FamStatus ');
        } else if(jQuery('#sqlOptions option:selected').text().toLowerCase() == 'position') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'Position ');
        } else if(jQuery('#sqlOptions option:selected').text().toLowerCase() == 'gehalt') {
            jQuery('#loesung1').val(jQuery('#loesung1').val() + 'Gehalt ');
        }
    }
    
    
    //WebSQL Funktionen
    function dbTest() {
        document.querySelector('#status').innerHTML =  "";
        jQuery('#correction').empty();
    
        var db = openDatabase('mydb', '1.0', 'Test DB', 10 * 1024 * 1024);
    
        var query = jQuery('#loesung1').val();
        var sqlType = jQuery(".sqlType").attr("id");
        var taskNumber = jQuery(".taskNumber").attr("id");
    
        createDB(db);
    
        if(sqlType == "select") {
            selectFeedback(db, query, taskNumber);
        } else if(sqlType == "update") {
            updateFeedback(db, query, taskNumber);
        } else if(sqlType === "insert") {
            insertFeedback(db, query, taskNumber);
        } else if(sqlType == "delete") {
            deleteFeedback(db, query, taskNumber);
        }
    
    }
    
    function createDB(db) {
        db.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS Personal', [], function(tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Personal (PersNr unique, Name, FamStatus, Position, Gehalt, FilialNr, FWNr)');
                tx.executeSql('INSERT INTO Personal (PersNr, Name, FamStatus, Position, Gehalt, FilialNr, FWNr) VALUES (1, "Maria Schmidt", "ledig", "SekretÃ¤rin", 4900, 1, 2)');
                tx.executeSql('INSERT INTO Personal (PersNr, Name, FamStatus, Position, Gehalt, FilialNr, FWNr) VALUES (2, "Thomas Meyer", "ledig", "Praktikant", 2000, 2, 2)');
                tx.executeSql('INSERT INTO Personal (PersNr, Name, FamStatus, Position, Gehalt, FilialNr, FWNr) VALUES (3, "Hans MÃ¼ller", "ledig", "Programmierer", 5000, 1, 1)');
                tx.executeSql('INSERT INTO Personal (PersNr, Name, FamStatus, Position, Gehalt, FilialNr, FWNr) VALUES (4, "JÃ¼rgen Schmidt", "verheiratet", "VerkÃ¤ufer", 5000, 1, 1)');
                tx.executeSql('INSERT INTO Personal (PersNr, Name, FamStatus, Position, Gehalt, FilialNr, FWNr) VALUES (5, "Kathrin Schuster", "geschieden", "Personalleiterin", 5400, 2, 1)');
                tx.executeSql('INSERT INTO Personal (PersNr, Name, FamStatus, Position, Gehalt, FilialNr, FWNr) VALUES (6, "Mario FÃ¶rster", "ledig", "VerkÃ¤ufer", 4800, 2, 2)');
            });
    
            tx.executeSql('DROP TABLE IF EXISTS Filiale', [], function(tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Filiale (FilialNr unique, Name)');
                tx.executeSql('INSERT INTO Filiale (FilialNr, Name) VALUES (1, "Am Dammtor")');
                tx.executeSql('INSERT INTO Filiale (FilialNr, Name) VALUES (2, "City")');
            });
    
    
            tx.executeSql('DROP TABLE IF EXISTS Firmenwagen', [], function(tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Firmenwagen (FWNr unique, Modell)');
                tx.executeSql('INSERT INTO Firmenwagen (FWNr, Modell) VALUES (1, "Ferrari")');
                tx.executeSql('INSERT INTO Firmenwagen (FWNr, Modell) VALUES (2, "Smart")');
            });
        });
    }
    
    function selectFeedback(db, query, taskNumber) {
        if(taskNumber == "11") {
            db.transaction(function (tx) {
                tx.executeSql(query, [], function (tx, results) {
                    var queryTrimmed = query.replace(/\s+/g, '');
                    var queryTrimmed = queryTrimmed.toLowerCase();
                    if (queryTrimmed.startsWith("insert")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein INSERT-Statement.</p>");
                    } else if(queryTrimmed.startsWith("delete")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein DELETE-Statement.</p>");
                    } else if(queryTrimmed.startsWith("update")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein UPDATE-Statement.</p>");
                    } else {
                        var len = results.rows.length;
                        if(len == 0) {
                            jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, die Ausgabetabelle ist leer!</p>");
                        } else {
                            var tabelle =
                                "<table class='table table-responsive table-bordered'>" +
                                "<tr>";
                            if (typeof results.rows.item(0).PersNr !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>PersNr</th>";
                            }
                            if (typeof results.rows.item(0).Name !== "undefined") {
                                tabelle += "<th>Name</th>";
                            }
                            if (typeof results.rows.item(0).FamStatus !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>FamStatus</th>";
                            }
                            if (typeof results.rows.item(0).Position !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>Position</th>";
                            }
                            if (typeof results.rows.item(0).Gehalt !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>Gehalt</th>";
                            }
                            tabelle += "</tr>";
                            for (var i = 0; i < len; i++) {
                                tabelle += "<tr>";
                                if (typeof results.rows.item(0).PersNr !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).PersNr + "</td>";
                                }
                                if (typeof results.rows.item(0).Name !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Name + "</td>";
                                }
                                if (typeof results.rows.item(0).FamStatus !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).FamStatus + "</td>";
                                }
                                if (typeof results.rows.item(0).Position !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Position + "</td>";
                                }
                                if (typeof results.rows.item(0).Gehalt !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Gehalt + "</td>";
                                }
                                tabelle += "</tr>";
                            }
                            tabelle += "</table>";
                            document.querySelector('#status').innerHTML += tabelle;
    
                            if (len < 2 && jQuery('#correction').is(':empty')) {
                                jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, es werden nicht alle Namen angezeigt!</p>");
                            } else if (len > 2 && jQuery('#correction').is(':empty')) {
                                jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, es werden zu viele Namen angezeigt!</p>");
                            }
                            if (jQuery('#correction').is(':empty')) {
                                jQuery('#correction').append("<p class='correct'>Das Statement ist richtig! Unten wird eine Tabelle mit der entsprechenden Ausgabe angezeigt</p>");
                            }
                        }
                    }
                }, function (tx, error) {
                    showError(error);
                });
            });
        }
    
        if(taskNumber == "12") {
            db.transaction(function (tx) {
                tx.executeSql(query, [], function (tx, results) {
                    var queryTrimmed = query.replace(/\s+/g, '');
                    var queryTrimmed = queryTrimmed.toLowerCase();
                    if (queryTrimmed.startsWith("insert")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein INSERT-Statement.</p>");
                    } else if(queryTrimmed.startsWith("delete")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein DELETE-Statement.</p>");
                    } else if(queryTrimmed.startsWith("update")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein UPDATE-Statement.</p>");
                    } else {
                        var len = results.rows.length;
                        if(len == 0) {
                            jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, die Ausgabetabelle ist leer!</p>");
                        } else {
                            var tabelle =
                                "<table class='table table-responsive table-bordered'>" +
                                "<tr>";
                            if (typeof results.rows.item(0).PersNr !== "undefined") {
                                tabelle += "<th>PersNr</th>";
                            }
                            if (typeof results.rows.item(0).Name !== "undefined") {
                                tabelle += "<th>Name</th>";
                            }
                            if (typeof results.rows.item(0).FamStatus !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen und Personalnummern angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>FamStatus</th>";
                            }
                            if (typeof results.rows.item(0).Position !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen und Personalnummern angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>Position</th>";
                            }
                            if (typeof results.rows.item(0).Gehalt !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen und Personalnummern angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>Gehalt</th>";
                            }
                            tabelle += "</tr>";
                            for (var i = 0; i < len; i++) {
                                tabelle += "<tr>";
                                if (typeof results.rows.item(0).PersNr !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).PersNr + "</td>";
                                }
                                if (typeof results.rows.item(0).Name !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Name + "</td>";
                                }
                                if (typeof results.rows.item(0).FamStatus !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).FamStatus + "</td>";
                                }
                                if (typeof results.rows.item(0).Position !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Position + "</td>";
                                }
                                if (typeof results.rows.item(0).Gehalt !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Gehalt + "</td>";
                                }
                                tabelle += "</tr>";
                            }
                            tabelle += "</table>";
                            document.querySelector('#status').innerHTML += tabelle;
    
                            if (len < 4 && jQuery('#correction').is(':empty')) {
                                jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, es werden nicht alle Namen und Personalnummern angezeigt!</p>");
                            } else if (len > 4 && jQuery('#correction').is(':empty')) {
                                jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, es werden zu viele Namen und Personalnummern angezeigt!</p>");
                            }
                            if (jQuery('#correction').is(':empty')) {
                                jQuery('#correction').append("<p class='correct'>Das Statement ist richtig! Unten wird eine Tabelle mit der entsprechenden Ausgabe angezeigt</p>");
                            }
                        }
                    }
                }, function (tx, error) {
                    showError(error);
                });
            });
        }
    
        if(taskNumber == "14") {
            db.transaction(function (tx) {
                tx.executeSql(query, [], function (tx, results) {
                    var queryTrimmed = query.replace(/\s+/g, '');
                    var queryTrimmed = queryTrimmed.toLowerCase();
                    if (queryTrimmed.startsWith("insert")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein INSERT-Statement.</p>");
                    } else if(queryTrimmed.startsWith("delete")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein DELETE-Statement.</p>");
                    } else if(queryTrimmed.startsWith("update")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein UPDATE-Statement.</p>");
                    } else {
                        var len = results.rows.length;
                        if(len == 0) {
                            jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, die Ausgabetabelle ist leer!</p>");
                        } else {
                            var tabelle =
                                "<table class='table table-responsive table-bordered'>" +
                                "<tr>";
    
                            var keys = Object.keys(results.rows.item(0));
                            for (var i = 0; i < keys.length; i++) {
                                if (keys[i].toLowerCase() == "avg(gehalt)") {
                                    tabelle += "<th>AVG(Gehalt)</th>";
                                    var key = i;
                                }
                            }
                            if (typeof results.rows.item(0).PersNr !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur das mittlere Einkommen aller ledigen Mitarbeiter angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>PersNr</th>";
                            }
                            if (typeof results.rows.item(0).Name !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur das mittlere Einkommen aller ledigen Mitarbeiter angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>Name</th>";
                            }
                            if (typeof results.rows.item(0).FamStatus !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur das mittlere Einkommen aller ledigen Mitarbeiter angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>FamStatus</th>";
                            }
                            if (typeof results.rows.item(0).Position !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur das mittlere Einkommen aller ledigen Mitarbeiter angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>Position</th>";
                            }
                            if (typeof results.rows.item(0).Gehalt !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur das mittlere Einkommen aller ledigen Mitarbeiter angezeigt werden, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>Gehalt</th>";
                            }
                            tabelle += "</tr>";
                            for (var i = 0; i < len; i++) {
                                for (value in results.rows.item(key)) {
                                    tabelle += "<td>" + results.rows.item(key)[value] + "</td>";
                                    if (results.rows.item(key)[value] != "4175" && jQuery('#correction').is(':empty')) {
                                        jQuery('#correction').append("<p class='wrong'>Leider wird nicht das mittlere Einkommen aller ledigen Mitarbeiter berechnet, das Statement ist falsch!</p>");
                                    }
                                }
                                tabelle += "<tr>";
                                if (typeof results.rows.item(0).PersNr !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).PersNr + "</td>";
                                }
                                if (typeof results.rows.item(0).Name !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Name + "</td>";
                                }
                                if (typeof results.rows.item(0).FamStatus !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).FamStatus + "</td>";
                                }
                                if (typeof results.rows.item(0).Position !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Position + "</td>";
                                }
                                if (typeof results.rows.item(0).Gehalt !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Gehalt + "</td>";
                                }
                                tabelle += "</tr>";
                            }
                            tabelle += "</table>";
                            document.querySelector('#status').innerHTML += tabelle;
    
                            if (jQuery('#correction').is(':empty')) {
                                jQuery('#correction').append("<p class='correct'>Das Statement ist richtig! Unten wird eine Tabelle mit der entsprechenden Ausgabe angezeigt</p>");
                            }
                        }
                    }
                }, function (tx, error) {
                    showError(error);
                });
            });
        }
    
        if(taskNumber == "18") {
            db.transaction(function (tx) {
                tx.executeSql(query, [], function (tx, results) {
                    var queryTrimmed = query.replace(/\s+/g, '');
                    var queryTrimmed = queryTrimmed.toLowerCase();
                    if (queryTrimmed.startsWith("insert")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein INSERT-Statement.</p>");
                    } else if(queryTrimmed.startsWith("delete")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein DELETE-Statement.</p>");
                    } else if(queryTrimmed.startsWith("update")) {
                        jQuery('#correction').append("<p class='wrong'>Es soll ein SELECT-Statement ausgefÃ¼hrt werden, kein UPDATE-Statement.</p>");
                    } else {
                        var len = results.rows.length;
                        if(len == 0) {
                            jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, die Ausgabetabelle ist leer!</p>");
                        } else {
                            var tabelle =
                                "<table class='table table-responsive table-bordered'>" +
                                "<tr>";
    
                            if (typeof results.rows.item(0).PersNr !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen der Mitarbeiter angezeigt werden, die in der Filiale City arbeiten und einen Ferrari fahren, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>PersNr</th>";
                            }
                            if (typeof results.rows.item(0).Name !== "undefined") {
                                tabelle += "<th>Name</th>";
                            }
                            if (typeof results.rows.item(0).FamStatus !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen der Mitarbeiter angezeigt werden, die in der Filiale City arbeiten und einen Ferrari fahren, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>FamStatus</th>";
                            }
                            if (typeof results.rows.item(0).Position !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen der Mitarbeiter angezeigt werden, die in der Filiale City arbeiten und einen Ferrari fahren, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>Position</th>";
                            }
                            if (typeof results.rows.item(0).Gehalt !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen der Mitarbeiter angezeigt werden, die in der Filiale City arbeiten und einen Ferrari fahren, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>Gehalt</th>";
                            }
                            if (typeof results.rows.item(0).FilialNr !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen der Mitarbeiter angezeigt werden, die in der Filiale City arbeiten und einen Ferrari fahren, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>FilialNr</th>";
                            }
                            if (typeof results.rows.item(0).FWNr !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen der Mitarbeiter angezeigt werden, die in der Filiale City arbeiten und einen Ferrari fahren, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>FWNr</th>";
                            }
                            if (typeof results.rows.item(0).Modell !== "undefined") {
                                jQuery('#correction').empty();
                                jQuery('#correction').append("<p class='wrong'>Es sollten nur die Namen der Mitarbeiter angezeigt werden, die in der Filiale City arbeiten und einen Ferrari fahren, so ist das Statement leider falsch!</p>");
                                tabelle += "<th>FWNr</th>";
                            }
                            tabelle += "</tr>";
                            for (var i = 0; i < len; i++) {
                                tabelle += "<tr>";
                                if (typeof results.rows.item(0).PersNr !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).PersNr + "</td>";
                                }
                                if (typeof results.rows.item(0).Name !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Name + "</td>";
                                }
                                if (typeof results.rows.item(0).FamStatus !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).FamStatus + "</td>";
                                }
                                if (typeof results.rows.item(0).Position !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Position + "</td>";
                                }
                                if (typeof results.rows.item(0).Gehalt !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Gehalt + "</td>";
                                }
                                if (typeof results.rows.item(0).FilialNr !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).FilialNr + "</td>";
                                }
                                if (typeof results.rows.item(0).FWNr !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).FWNr + "</td>";
                                }
                                if (typeof results.rows.item(0).Modell !== "undefined") {
                                    tabelle += "<td>" + results.rows.item(i).Modell + "</td>";
                                }
                                tabelle += "</tr>";
                            }
                            tabelle += "</table>";
                            document.querySelector('#status').innerHTML += tabelle;
    
                            if (len > 1 && jQuery('#correction').is(':empty')) {
                                jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, es werden zu viele Namen angezeigt!</p>");
                            }
    
                            if (jQuery('#correction').is(':empty')) {
                                jQuery('#correction').append("<p class='correct'>Das Statement ist richtig! Unten wird eine Tabelle mit der entsprechenden Ausgabe angezeigt</p>");
                            }
                        }
                    }
                }, function (tx, error) {
                    showError(error);
                });
            });
        }
    }
    
    function updateFeedback(db, query, taskNumber) {
        if(taskNumber === "5") {
            db.transaction(function (tx) {
                tx.executeSql(query, [], function (tx, results) {
                    db.transaction(function (tx) {
                        tx.executeSql("SELECT * FROM Personal", [], function (tx, results) {
                            var len = results.rows.length;
                            if(len < 6) {
                                jQuery('#correction').append("<p class='wrong'>Es wurden Daten aus der Datenbank gelÃ¶scht, das Statement stimmt leider nicht!</p>");
                            } else if(len > 6) {
                                jQuery('#correction').append("<p class='wrong'>Es wurden Daten zur Datenbank hinzugefÃ¼gt, das Statement stimmt leider nicht!</p>");
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
                                    tabelle += "<td>" + results.rows.item(i).PersNr + "</td>";
    
                                    if (results.rows.item(i).Name == "Maria MÃ¼ller" && i == 0) {
                                        tabelle += "<td class='correct'>" + results.rows.item(i).Name + "</td>";
                                    } else if ((results.rows.item(i).Name != "Maria MÃ¼ller" && i == 0) ||
                                        (results.rows.item(i).Name != "Thomas Meyer" && i == 1) ||
                                        (results.rows.item(i).Name != "Hans MÃ¼ller" && i == 2) ||
                                        (results.rows.item(i).Name != "JÃ¼rgen Schmidt" && i == 3) ||
                                        (results.rows.item(i).Name != "Kathrin Schuster" && i == 4) ||
                                        (results.rows.item(i).Name != "Mario FÃ¶rster" && i == 5)) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).Name + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).Name + "</td>";
                                    }
    
                                    if (results.rows.item(i).FamStatus == "verheiratet" && i == 0) {
                                        tabelle += "<td class='correct'>" + results.rows.item(i).FamStatus + "</td>";
                                    } else if ((results.rows.item(i).FamStatus != "verheiratet" && i == 0) ||
                                        (results.rows.item(i).FamStatus != "ledig" && i == 1) ||
                                        (results.rows.item(i).FamStatus != "ledig" && i == 2) ||
                                        (results.rows.item(i).FamStatus != "verheiratet" && i == 3) ||
                                        (results.rows.item(i).FamStatus != "geschieden" && i == 4) ||
                                        (results.rows.item(i).FamStatus != "ledig" && i == 5)) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).FamStatus + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).FamStatus + "</td>";
                                    }
    
                                    if ((results.rows.item(i).Position != "SekretÃ¤rin" && i == 0) ||
                                        (results.rows.item(i).Position != "Praktikant" && i == 1) ||
                                        (results.rows.item(i).Position != "Programmierer" && i == 2) ||
                                        (results.rows.item(i).Position != "VerkÃ¤ufer" && i == 3) ||
                                        (results.rows.item(i).Position != "Personalleiterin" && i == 4) ||
                                        (results.rows.item(i).Position != "VerkÃ¤ufer" && i == 5)) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).Position + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).Position + "</td>";
                                    }
    
                                    if ((results.rows.item(i).Gehalt != "4900" && i == 0) ||
                                        (results.rows.item(i).Gehalt != "2000" && i == 1) ||
                                        (results.rows.item(i).Gehalt != "5000" && i == 2) ||
                                        (results.rows.item(i).Gehalt != "5000" && i == 3) ||
                                        (results.rows.item(i).Gehalt != "5400" && i == 4) ||
                                        (results.rows.item(i).Gehalt != "4800" && i == 5)) {
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
        if(taskNumber === "6") {
            db.transaction(function (tx) {
                tx.executeSql(query, [], function (tx, results) {
                    db.transaction(function (tx) {
                        tx.executeSql("SELECT * FROM Personal", [], function (tx, results) {
                            var len = results.rows.length;
                            if(len < 6) {
                                jQuery('#correction').append("<p class='wrong'>Es wurden Daten aus der Datenbank gelÃ¶scht, das Statement stimmt leider nicht!</p>");
                            } else if(len > 6) {
                                jQuery('#correction').append("<p class='wrong'>Es wurden Daten zur Datenbank hinzugefÃ¼gt, das Statement stimmt leider nicht!</p>");
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
    
                                    if ((results.rows.item(i).Name != "Maria Schmidt" && i == 0) ||
                                        (results.rows.item(i).Name != "Thomas Meyer" && i == 1) ||
                                        (results.rows.item(i).Name != "Hans MÃ¼ller" && i == 2) ||
                                        (results.rows.item(i).Name != "JÃ¼rgen Schmidt" && i == 3) ||
                                        (results.rows.item(i).Name != "Kathrin Schuster" && i == 4) ||
                                        (results.rows.item(i).Name != "Mario FÃ¶rster" && i == 5)) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).Name + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).Name + "</td>";
                                    }
    
                                    if ((results.rows.item(i).FamStatus != "verheiratet" && i == 0) ||
                                        (results.rows.item(i).FamStatus != "ledig" && i == 1) ||
                                        (results.rows.item(i).FamStatus != "ledig" && i == 2) ||
                                        (results.rows.item(i).FamStatus != "verheiratet" && i == 3) ||
                                        (results.rows.item(i).FamStatus != "geschieden" && i == 4) ||
                                        (results.rows.item(i).FamStatus != "ledig" && i == 5)) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).FamStatus + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).FamStatus + "</td>";
                                    }
    
                                    if ((results.rows.item(i).Position != "SekretÃ¤rin" && i == 0) ||
                                        (results.rows.item(i).Position != "Praktikant" && i == 1) ||
                                        (results.rows.item(i).Position != "Programmierer" && i == 2) ||
                                        (results.rows.item(i).Position != "VerkÃ¤ufer" && i == 3) ||
                                        (results.rows.item(i).Position != "Personalleiterin" && i == 4) ||
                                        (results.rows.item(i).Position != "VerkÃ¤ufer" && i == 5)) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).Position + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).Position + "</td>";
                                    }
    
                                    if (results.rows.item(i).Gehalt == 2500 && i == 1) {
                                        tabelle += "<td class='correct'>" + results.rows.item(i).Gehalt + "</td>";
                                    } else if ((results.rows.item(i).Gehalt != 2500 && i == 1) ||
                                        (results.rows.item(i).Gehalt != "2000" && i == 1) ||
                                        (results.rows.item(i).Gehalt != "5000" && i == 2) ||
                                        (results.rows.item(i).Gehalt != "5000" && i == 3) ||
                                        (results.rows.item(i).Gehalt != "5400" && i == 4) ||
                                        (results.rows.item(i).Gehalt != "4800" && i == 5)) {
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
    
    function insertFeedback(db, query, taskNumber) {
        if(taskNumber === "4") {
            db.transaction(function (tx) {
                tx.executeSql(query, [], function (tx, results) {
                    db.transaction(function (tx) {
                        tx.executeSql("SELECT * FROM Personal", [], function (tx, results) {
                            var len = results.rows.length;
                            if(len < 6) {
                                jQuery('#correction').append("<p class='wrong'>Es wurden Daten aus der Datenbank gelÃ¶scht, das Statement stimmt leider nicht!</p>");
                            } else if(len < 7) {
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
                                    if(results.rows.item(i).PersNr == "7" && i == len - 1) {
                                        tabelle += "<td class='correct'>" + results.rows.item(i).PersNr + "</td>";
                                    } else if(results.rows.item(i).PersNr != "7" && i == len - 1) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).PersNr + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).PersNr + "</td>";
                                    }
    
                                    if(results.rows.item(i).Name == "Steffen Wolfram" && i == len - 1) {
                                        tabelle += "<td class='correct'>" + results.rows.item(i).Name + "</td>";
                                    } else if(results.rows.item(i).Name != "Steffen Wolfram" && i == len - 1) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).Name + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).Name + "</td>";
                                    }
    
                                    if(results.rows.item(i).FamStatus == "verheiratet" && i == len - 1) {
                                        tabelle += "<td class='correct'>" + results.rows.item(i).FamStatus + "</td>";
                                    } else if(results.rows.item(i).FamStatus != "verheiratet" && i == len - 1) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).FamStatus + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).FamStatus + "</td>";
                                    }
    
                                    if(results.rows.item(i).Position == "Programmierer" && i == len - 1) {
                                        tabelle += "<td class='correct'>" + results.rows.item(i).Position + "</td>";
                                    } else if(results.rows.item(i).Position != "Programmierer" && i == len - 1) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).Position + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).Position + "</td>";
                                    }
    
                                    if(results.rows.item(i).Gehalt == 4800 && i == len - 1) {
                                        tabelle += "<td class='correct'>" + results.rows.item(i).Gehalt + "</td>";
                                    } else if(results.rows.item(i).Gehalt != 4800 && i == len - 1) {
                                        tabelle += "<td class='wrong'>" + results.rows.item(i).Gehalt + "</td>";
                                    } else {
                                        tabelle += "<td>" + results.rows.item(i).Gehalt + "</td>";
                                    }
                                    tabelle += "</tr>";
                                }
                                tabelle += "</table>";
                                document.querySelector('#status').innerHTML +=  tabelle;
                                if(jQuery("td").hasClass("wrong")) {
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
    
    function deleteFeedback(db, query, taskNumber) {
        if(taskNumber === "7") {
            db.transaction(function (tx) {
                tx.executeSql(query, [], function (tx, results) {
                    db.transaction(function (tx) {
                        tx.executeSql("SELECT * FROM Personal", [], function (tx, results) {
                            var len = results.rows.length;
                            if(len > 6) {
                                jQuery('#correction').append("<p class='wrong'>Leider wurden keine Daten zur Datenbank hinzugefÃ¼gt, das Statement stimmt leider nicht!</p>");
                            } else if(len < 5) {
                                jQuery('#correction').append("<p class='wrong'>Es wurden zu viele Daten aus der Datenbank gelÃ¶scht, das Statement stimmt leider nicht!</p>");
                            } else {
                                tx.executeSql("SELECT * FROM Personal WHERE Name = 'Hans MÃ¼ller'", [], function (tx, results) {
                                    var len = results.rows.length;
                                    if(len != 0) {
                                        jQuery('#correction').append("<p class='wrong'>Der Datensatz wurde nicht aus der Datenbank entfernt, leider stimmt das Statement nicht.</p>");
                                    } else if(len == 0) {
                                        jQuery('#correction').append("<p class='correct'>Der Datensatz wurde aus der Datenbank entfernt, sehr gut gemacht!</p>");
                                    }
                                });
                            }
                        });
                    });
    
                }, function (tx, error) {
                    showError(error);
                });
            });
        }
        if(taskNumber === "8") {
            db.transaction(function (tx) {
                tx.executeSql(query, [], function (tx, results) {
                    db.transaction(function (tx) {
                        tx.executeSql("SELECT * FROM Personal", [], function (tx, results) {
                            var len = results.rows.length;
                            if(len > 6) {
                                jQuery('#correction').append("<p class='wrong'>Leider wurden keine Daten zur Datenbank hinzugefÃ¼gt, das Statement stimmt leider nicht!</p>");
                            } else if(len < 5) {
                                jQuery('#correction').append("<p class='wrong'>Es wurden zu viele Daten aus der Datenbank gelÃ¶scht, das Statement stimmt leider nicht!</p>");
                            } else {
                                tx.executeSql("SELECT * FROM Personal WHERE Name = 'Kathrin Schuster'", [], function (tx, results) {
                                    var len = results.rows.length;
                                    if(len != 0) {
                                        jQuery('#correction').append("<p class='wrong'>Der Datensatz wurde nicht aus der Datenbank entfernt, leider stimmt das Statement nicht.</p>");
                                    } else if(len == 0) {
                                        jQuery('#correction').append("<p class='correct'>Der Datensatz wurde aus der Datenbank entfernt, sehr gut gemacht!</p>");
                                    }
                                });
                            }
                        });
                    });
    
                }, function (tx, error) {
                    showError(error);
                });
            });
        }
    }
    
    function showError(error) {
        if(error.message.toLowerCase().indexOf("syntax error") >= 0) {
            jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, es gibt einen Syntaxfehler. Unten wird die originale Fehlermeldung des Systems angezeigt!</p>");
        } else if (error.message.toLowerCase().indexOf("no such table") >= 0) {
            jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, die Tabelle, aus der Daten abgefragt werden, existiert nicht. Unten wird die originale Fehlermeldung des Systems angezeigt!</p>");
        } else if (error.message.toLowerCase().indexOf("no such column") >= 0) {
            jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, die Spalte, aus der Daten abgefragt werden, existiert nicht. Unten wird die originale Fehlermeldung des Systems angezeigt!</p>");
        } else {
            jQuery('#correction').append("<p class='wrong'>Das Statement ist leider nicht richtig, unten wird die originale Fehlermeldung des Systems angezeigt!</p>");
        }
        document.querySelector('#status').innerHTML +=  "<div class='well'><strong>" + error.message + "</strong></div>";
    }