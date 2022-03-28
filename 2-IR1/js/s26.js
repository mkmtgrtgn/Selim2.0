function solution(event) {
  var Anzahl = jQuery('#Anzahl').val();

   if (Anzahl == 6) {
    
    var paragraph = "<p>";
    paragraph += "Die Antwort ist korrekt!";
    paragraph += "</p>";
    document.getElementById('rueckmeldung1').innerHTML = paragraph;
   } else {
    var paragraph = "<p>";
    paragraph += "Die Antwort ist leider falsch!";
    paragraph += "</p>";
    document.getElementById('rueckmeldung1').innerHTML = paragraph; 
   }
}

function validate(event) {
  var Zahl1 = jQuery('#Zahl1').val();
  var Zahl2 = jQuery('#Zahl2').val();
  var Zahl3 = jQuery('#Zahl3').val();

   if (Zahl1 == 6 && Zahl2 == 9 && Zahl3 == 9) {
    
    var paragraph = "<p>";
    paragraph += "Die Antwort ist korrekt! Das Ergebnis ist 0,67";
    paragraph += "</p>";
    document.getElementById('rueckmeldung2').innerHTML = paragraph;
   } else {
    var paragraph = "<p>";
    paragraph += "Die Antwort ist leider falsch!";
    paragraph += "</p>";
    document.getElementById('rueckmeldung2').innerHTML = paragraph; 
   }
}