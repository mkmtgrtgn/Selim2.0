function validate(event) {
  console.log(document.getElementById('antwort2').checked);


   if (document.getElementById('antwort2').checked){
    var paragraph = "<p>";
    paragraph += "Die Antwort ist korrekt!";
    paragraph += "</p>";
    document.getElementById('rueckmeldung').innerHTML = paragraph;
   } else {
    var paragraph = "<p>";
    paragraph += "Die Antwort ist leider falsch!";
    paragraph += "</p>";
    document.getElementById('rueckmeldung').innerHTML = paragraph;
   }
  
}


//event.target.checked
//event.target.id