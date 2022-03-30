function validate(event) {

    var paragraph = "<p>";
    paragraph += "Vergleiche deine Antwort!<br/>Das Stemming generiert den Wortstamm eines Begriffs. Begriffe, die indexiert werden, werden mit ihren morphologischen Varianten indexiert. Dies kann aber auch während der Suchanfrage geschehen, indem die Suchterme durch um ihre morphologischen Varianten erweitert werden. Stemming-Methoden erhöhen somit den Recall, es werden mehr relevante Dokumente gefunden.";
    paragraph += "</p>";
    document.getElementById('rueckmeldung').innerHTML = paragraph;
    
  }

  function solution(event) {

    var paragraph = "<p>";
    paragraph += "Vergleiche deine Antwort!<br/>Der Begriff Synonymie bezeichnet die inhaltliche Übereinstimmung von verschiedenen Wörtern oder Konstruktionen in derselben Sprache. Im IR kann Synonymie zur Folge haben, dass relevante Dokumente ignoriert werden, also eine Verschlechterung des Recall. Der Begriff Polysemie bezeichnet das Vorhandensein von mehreren Bedeutungen zu einem Wort. Im IR kann das zur Folge haben, dass irrelevante Dokumente in Betracht gezogen werden, also eine Verschlechterung der Precision.";
    paragraph += "</p>";
    document.getElementById('rueckmeldung2').innerHTML = paragraph;
    
  } 