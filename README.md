# Selim2.0
Ein Projekt um die Selim Seite wieder aufzufrischen.
Bisher habe ich einen kleinen Server außenrum gebaut und ein grundlegendes Template - das alles kann und soll gerne noch überarbeitet und erweitert werden :)</br>

Grundlegende Voraussetzungen: 

1. Python3 muss auf eurem Rechner installiert sein ( und die verwendeten Bibliotheken, also bisher erstmal Flask die in dem requirements.txt 
   zu finden sind, könnt ihr so installieren: https://pip.pypa.io/en/stable/user_guide/#requirements-files ) </br>

Ablauf um den Server zu starten: </br>

Einfacherer Weg : Ggf. Entwicklungsumgebung wie PyCharm für Python installieren ( https://www.jetbrains.com/shop/eform/students ) 
   Dann könnt ihr einfach app.py -> Rechtsklick -> Run  starten :)</br>
   
Oder Um den Server zu Starten navigiert ihr in der CLI / Terminal / Konsole in das Verzeichnis Selim (nicht selim_r) 
   (ihr seid in .../Überverzeichnis/Selim, Inhalt: selium_r, requirements.txt, app.py, etc. ) 
   schreibt "flask run" und der Server startet auf 127.0.0.1:5000</br>
   
Gebt ihr jetzt die IP 127.0.0.1:5000 in der URL-Zeile des Browsers ein, sollte euch die "neue" Selim Seite angezeigt werden.
   
Ändert ihr etwas an den Dateien des Servers 
z.B. HTML Dateien finden sich in selim_r/main/main_templates, da könnt ihr erstmal am HTML rumbasteln.

Läuft soweit alles, könnt ihr erstmal die lnks.html Datei bearbeiten - das Resultat seht ihr dann immer wenn ihr in der Navbar 
auf alles außer Selim (das führt zur "Startseite"/inhalt.html) klickt; URL 127.0.0.1:5000/nochNIX (wahrscheinlich).


Bsp. </br>
lnks.html sieht geöffnet so ähnlich aus:</br>
____________________________________________________________</br>
   {% extends 'main.html' %}</br>
   {% block inhalt %}</br>
   &lt;h1&gt; Überschrift: Herhören Herhören &lt;/h1&gt; </br>
   -> hier könnt ihr euer HTML schreiben und es wird in die hintergrundfarbene Box geschrieben </br>
   ( der Block wird in &lt;div id="content"&gt; aus main.html eingefügt)</br>;
</br>
   {% endblock}</br>
                                   </br>
Werden die Änderungen nicht direkt in der Seite im Browser angezeigt werden (wegen Caching und so), dann ist oft ein Server-Neustart hilfreich 
- ansonsten happy Coding und einfach Ausprobieren!
  
                                                                                                  
Die navbar.html könnt ihr natürlich auch gerne bearbeiten bzw. euch das mal anschauen, 
ich habe da einfach so ne "Standard" Bootstrap Navbar leicht modifiziert - was genau anders ist findet ihr 
unter /Selim/static/css/main.css und könnt da natürlich auch gerne noch was ändern oder schöner machen :)</br>

Wenn ihr Fragen habt macht sie bitte am Besten im Learnweb Forum oder in GitHub öffentlich, sodass andere mit denselben Fragen aus der Antwort lernen können und auch andere die das      wissen antworten können</br>

   
Wenn ihr schon ein bisschen mehr machen wollt, könnt ihr in main.py auch eigene Routen und HTML Dateien erstellen nach dem Muster:</br>
   @main_bp.route('/meineWunschURL')</br>
      <space><space><p style='margin-left:21px;'>def wasIhrWolltAberMerkenBrauchtManSpäterFürAndereSachen():</p>
<space><space><space><space>return render_template('name_von_eurem.html', seitenname='Ich werde bei den Tabs als Title angezeigt')</p>
   
   
