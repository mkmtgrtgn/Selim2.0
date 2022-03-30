var acc = document.getElementsByClassName("accordion"); //sucht aus dem Document Elemente mit der Klasse accordion
var i;

for (i = 0; i < acc.length; i++) { //sorgt für die Farbumstellungumstellung beim hover und beim auslösen des Events
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") { //ändert die Sichtbarkeit, standardmäßig=none
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}