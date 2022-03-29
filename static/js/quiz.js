/*

<@author liebl


Dieses Script liest Multiple Choice Fragen aus einem <div id="quiz"... nur wenn die Fragen und Antworten im Format
<div class="frage"> frage || antwort ** aw2 ** aw3 || falscheantwort ** fa ** fa2... </div>
im HTML Dokument formuliert werden. Alle Fragen (Quizze) kann man per Knopfdruck via Modal (siehe quiz.html)
durchklicken.

 */

//Elternklasse einer Abfrage
class Quizelement {
    constructor(htmlNode) {
        this.node = document.createElement("h5");
        this.node.innerHTML = htmlNode;
    }
}

//Zum einen die Frage
class Quizfrage extends Quizelement {
    constructor(node) {
        super(node);
        this.node.className = "quizfrage";
    }
}
//und die Antwortmöglichkeiten
class Quizantwort extends Quizelement {
    constructor(node, truth) {
        super(node);
        this.truth = truth;
        this.selected = false;
        this.node.className = "quizantwort";
        this.node.addEventListener("click", this.select);
    }
    //Kennzeichnet angeklickte Antworten
    select() {
        if (this.className != "quizantwort") {
            //this.selected = !this.selected;
            this.className = "quizantwort";
        }
        else {
            //this.selected = !this.selected;
            this.className = "quizantwort selected";
        }
    }
    //Klassifiziert die Fragenbeantwortung, also falsch richtig markierte
    // und richtige die nicht markiert sind - gibt Erfolg zurueck
    reveal() {
        //wenn die Frage abgegeben ist WIRD NICHT MEHR RUMMARKIERT
        this.node.removeEventListener("click", this.select);
        if (this.truth) {

            if (this.node.className === "quizantwort selected") {
                console.log(self.selected);

                this.node.className ="quizantwort wahreAntwort richtigBeantwortet";
                return true;
            }
            else {
                this.node.className = "quizantwort wahreAntwort nichtBeantwortet";
                return false;
            }
        }
        else {
            if (this.node.className === "quizantwort selected"){
                this.node.className = "quizantwort falscheAntwort falschBeantwortet";
                return false;
            }
            else {
                this.node.className = "quizantwort falscheAntwort richtigIgnoriert";
                return true;
            }
        }
    }
    //setzt markierungsstatus zurueck
    reset() {
        this.node.className ="quizantwort";
        this.node.addEventListener("click", this.select);
    }
    //haengt diese Frage hinter die Frage an
    aktivieren(parent) {
        this.node.className = "quizantwort";
        parent.appendChild(this.node);
    }

}

class Quiz {

    constructor(frage, quizelemente) {
        this.frage = frage;
        this.quizel = quizelemente;
    }
    //weist jede Frage an sich aufzudecken und checkt ob alles richtig ist
    aufloesen() {
        let allesRichtig = true;
        for (let i =0; i<this.quizel.length; i++) {
            let perf = this.quizel[i].reveal();
            if(!perf) {
                allesRichtig = false;
            }
        }
        return allesRichtig;
    }
    //leert das fragendiv und füllt es mit den eigenen Fragen auf
    show() {
        let par = document.getElementById("fragendiv");
        while (par.hasChildNodes()) {
            par.removeChild(par.firstChild);
        }
        par.appendChild(this.frage.node);

        let gemischt = shuffleArray(this.quizel);

        for(let i=0; i<gemischt.length; i++) {
            this.quizel[gemischt[i]].aktivieren(par);
        }
    }
    //resettet die Nodes zum erneuten Abfragen
    res() {
        for (let i =0; i<this.quizel.length; i++) {
            this.quizel[i].reset();
        }
    }
}
//Sammlung von Quizzen und relevanten Infos über Abfrage
class Fragenkatalog {
    constructor(quizze) {
        this.quizze = quizze;
        this.reps = 0;
        this.cur = 0;
        this.richtig = [];
        this.falsch = [];
    }
    //setzt falsch beantwortete Fragen auf alle und startet mit dem 1. /0.
    init() {
        this.quizze[this.cur].show();
        let f = [];
        for (let i=0; i<this.quizze.length; i++){
            f.push(i);
        }
        this.falsch =f;
    }
    //Quizloesung anzeigen
    aufloesung() {
        //nach 8 Sekunden wird automatisch eine neue Frage präsentiert
        //const nxt = setTimeout(naechsteFrage, 10000);

        let performance = this.quizze[this.cur].aufloesen();
        this.reps++;
        let n = this.falsch.length;

        //Die Frage wurde richtig beantwortet wenn performance noch wahr ist
        if(performance) {

            let modl = document.getElementById("modalCont");
            modl.style = "background-color: rgba(144, 238, 144, 0.7);"
            //bisschen motivierende Sprueche schaden ja nicht
            let erfolgsnachricht = document.getElementById("erfolgsnachricht");
            let spr = [":)", "Super!", "Alles richtig!", "Eins A", "Weiter so!"];



            let rnd = Math.floor(Math.random()*spr.length);
            erfolgsnachricht.innerHTML = spr[rnd];



            if((this.reps >this.quizze.length+5)%2===4) {
                erfolgsnachricht.innerHTML = "na langweilig? :p";
            }
            const nr = setTimeout(meldungWeg, 1200);

            //Fortschrittsbalken updaten
            if( n>0 ) {
                this.updateProg(n-1)

                for (let i = 0; i < n; i++) {
                    //bisher noch nicht beantwortete Frage aus falsch entfernen zu richtig dazu
                    if (this.falsch[i] === this.cur) {
                        this.falsch.splice(this.falsch.indexOf(this.cur), 1);
                        if (!this.richtig.includes(this.cur)) {
                            this.richtig.push(this.cur);
                        }
                    }
                }
            }
        }
    }
    //zufaelliges Quiz aus den noch nicht geloesten auswaehlen
    naechste() {
        this.quizze[this.cur].res();
        //solange wir noch Quizze haben die noch nicht richtig beantwortet werden, erstmal diese abarbeiten
        if(this.falsch.length > 0) {
            let rndindx = Math.floor(Math.random()*this.falsch.length);

            this.quizze[this.falsch[rndindx]].show();
            this.cur = this.falsch[rndindx];
            console.log("rndndx ist: " + rndindx);
            console.log("cur ist: " + this.cur);

        }
        //sonst ein zufaelliges Frage-Antwort Tupel
        else {
            let rndindx = Math.round(Math.random()*this.quizze.length);
            this.quizze[rndindx].show();
            this.cur = rndindx;
        }

    }
    // Zeigt den Fortschritt des Spielers an und signalisiert 100% richtig
    updateProg(n) {
            let bar = document.getElementById("fortschritt");
            let prog = Math.floor(100 * ((this.quizze.length-n) / this.quizze.length));
            let style = "width:" + String(prog) + "%";
            console.log(style);
            bar.style.width = String(prog) + "%";

            bar.setAttribute("aria-valuenow", String(prog));
            if (n === 0) {
                let body = document.getElementById("modalCont");
                body.className = "modal-content allesrichtig";
                let title = document.getElementById("staticBackdropLabel");
                title.innerHTML = "Super, du hast alles richtig beantwortet!";
                let quizbtn = document.getElementById("quizmaster");
                let weiter = document.createElement("h6");
                weiter.innerHTML = "Weitermachen?";
                weiter.className = "btn btn-outline-primary m-1";
                quizbtn.style.display = "none";
                weiter.addEventListener("click", function() {
                    body.className = "modal-content";
                    weiter.style.display = "none";
                    quizbtn.style.display = "block";
                    naechsteFrage();
                });
                let par = title.parentElement;
                par.appendChild(weiter);
            }

        return true;
    }
}

//Alle Fragen werden als Objekte angelegt
function erstelleFragenkatalog() {
    let quizzes = document.getElementsByClassName("frage");

    if(quizzes) {
        let frageAntworten = [];
        for(let i = 0; i< quizzes.length; i++) {
            let quizstring = quizzes.item(i).innerHTML;
            frageAntworten.push(machQuiz(quizstring));
        }
        //und dann loescht man die aus dem Quelltext -> Fragen mittelmaessig gut versteckt
        let el = document.getElementById("quiz");
        el.remove();

        return new Fragenkatalog(frageAntworten);

    }
}

//Man liest die Fragen aus dem Quelltext ein und überführt sie in komplette Quizzes
function machQuiz(string) {
    if(string) {
        console.log(string);
        let alles = string.split("||");
        if(alles.length > 2) {
            let frage = new Quizfrage(alles[0]);

            //antworten
            let tmp = alles[1]
            let antwrtn = tmp.split("**");
            let ants = [];
            for(let i = 0; i<antwrtn.length; i++) {
                let temp =new Quizantwort(antwrtn[i], true);
                ants.push(temp);
            }
            tmp = alles[2]
            antwrtn = tmp.split("**");
            for(let i = 0; i<antwrtn.length; i++) {
                let temp =new Quizantwort(antwrtn[i], false);
                ants.push(temp);
            }
            let quiz = new Quiz(frage, ants);

            return quiz;
        }
    }
}





//Methode checkt und ändert den Button auf nächste Frage
function antwortChecken() {
    let btn = document.getElementById("quizmaster");
    kat.aufloesung();
    btn.removeEventListener("click", antwortChecken);
    btn.innerHTML = "Nächste Frage";
    btn.addEventListener("click", naechsteFrage);

}
//Methode generiert neue Frage und ändert den Button wieder zu Antwort checken
function naechsteFrage() {
    let btn = document.getElementById("quizmaster");

    kat.naechste();
    btn.removeEventListener("click", naechsteFrage);
    btn.innerHTML = "Antwort überprüfen";
    btn.addEventListener("click", antwortChecken);
}

//Deklaration des Fragenkatalogs
let kat;

document.addEventListener("DOMContentLoaded", function(event) {
    kat = erstelleFragenkatalog();
    kat.init();
    //var wenndasgeht = kat.quizze;

});



//gibt ein gemischtes Array von 1-Länge Input Array aus zur Abfrage
function shuffleArray(arr) {
    let shuffledIndexes = [];
    for(let i=0; i<arr.length; i++) {
        shuffledIndexes[i] = i;
    }
    for(let i=0; i<10; i++) {
        shuffledIndexes.sort((a, b) => 0.5 - Math.random());
    }
    return shuffledIndexes;
}

function meldungWeg() {
    let modl = document.getElementById("modalCont");
            modl.style = "";
            let erfolgsnachricht = document.getElementById("erfolgsnachricht");
            erfolgsnachricht.innerHTML ="";
}