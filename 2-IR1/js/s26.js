function solution(event) {

   if (jQuery('#textfield1').val(6)) {
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