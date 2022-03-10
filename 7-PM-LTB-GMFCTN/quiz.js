function machFragen() {
    var quizzes = document.getElementsByClassName("frage");

    if(quizzes) {
        frageAntworten = new Object();
        for(var i = 0; i< quizzes.length; i++) {
            let quiz = quizzes.item(i).innerHTML;
            frageAntworten["quiz"+i] = strukturierFrage(quiz);
        }
        return frageAntworten;
    }
}

function strukturierFrage(string) {
    if(string) {
        let allet = string.split("||");
        if(allet.length > 1) {
            let quiz = new Object({
                    frage: allet[0]
                }
            );
            for(let i = 1; i< allet.length; i++) {
                quiz["antwort"+i] = allet[i];
            }
            return quiz;
        }

    }
}

function naechsteFrage() {
    let div = document.getElementById("fragendiv");
    let modalbody = div.parentElement;
    div.remove();
    let ndiv = document.createElement('div');
    ndiv.id = "fragendiv";
    ndiv.class = "container";
}

var frageAntwortKatalog = machFragen();
console.log(frageAntwortKatalog);