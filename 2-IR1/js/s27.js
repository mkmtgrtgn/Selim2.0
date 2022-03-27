function validate(event) {

    var paragraph = "<p>";
    paragraph += "Vergleiche deine Antwort!<br/>Deskriptoren der automatischen Indexierung: Abenteuer; Ausgabe; Band; bedecken; deutsch; englisch; Erscheinung; erwarten; Fans; feststehen; Fortsetzung; Frau; halten; Harry; Rowling; scheinen; Termin; Verlag; vorliegen; warten; Welt; ziehen; 2003.<br/>Achtung!<br/>Information Retrievalsysteme und vor allem die Werkzeuge der Dokumentenanalyse sind sprachenabhängig! Für den vorliegenden Text kann das bedeuten, daß das System mit dem Begriff 'Run' und dessen Verarbeitung Probleme haben könnte.";
    paragraph += "</p>";
    document.getElementById('rueckmeldung').innerHTML = paragraph;
    
  }

  function solution(event) {

    var paragraph = "<p>";
    paragraph += "Vergleiche deine Antwort!<br/>Deskriptoren der manuellen Indexierung: Harry Potter; Potter; Harry; Rowling; Neuerscheinung; Neuerscheinung 2003.<br/>Diskussion:<br/>Die Deskriptorenliste der manuellen Indexierung ist um einiges kürzer, als die der automatischen Indexierung. In der Deskriptorenliste der automatischen Indexierung sind viele Begriffe enthalten, die für den Inhalt des Textes nicht von Bedeutung sind (warten, Welt, etc.). Dafür taucht der Begriff 'Harry Potter' nicht einmal im Text und somit auch nicht als Deskriptor auf. Begriffe in anderen Sprachen stellen für die manuelle Indexierung nicht so ein großes Problem dar, wie bei der automatischen Indexierung.";
    paragraph += "</p>";
    document.getElementById('rueckmeldung2').innerHTML = paragraph;
    
  } 