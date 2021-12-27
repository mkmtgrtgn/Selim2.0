'''
Hello, dieses einfache Programm startet einen Server für euch wenn ihr Python installiert habt
- ich empfehle Pycharm von Jetbrains, gibts kostenlos Jahreslizenzen für Studenten (per Uni-Email)!
(Ist eine Python Entwicklungsumbung und ich kriege leider kein Geld für die Empfehlung :D
    https://www.jetbrains.com/de-de/community/education/#students   )
Das übernimmt dann auch solche Geschichten wie Virtual Environments für jedes Projekt zu erstellen
und kann auch Biliotheken selber installieren.

Die Funktion um den Server zu "bauen" wird in der Datei __init__.py definiert und von dieser
Datei (app.py) aus gestartet - das sollte z.B. über CLI ("Konsole") auch gehen per Befehl: python3 app.py

Flask ist dann ein Server im lokalen Netzwerk - das ist bisher ganz minimalistisch:
Beim Aufrufen der Pfade/URLs liefert der Server HTML-Templates zurück.

Am Design etc. könnt ihr über main.css erstmal was ändern bzw. das alles ausbauen,
ich dachte mir es wäre gut wenn wir direkt alle eine gemeinsame Grundlage haben an der wir
anfangen können zu Arbeiten :)
'''

import os
from flask import Flask, render_template
from selim_r import create_app

print('Starting Server')

if __name__ == '__main__':
    print('Den Server müsstet ihr hier über die Konsole mit dem '
          'Befehl "flask run" starten oder oben links neben dem Play-Symboleinstellen,'
          ' dass Flask gestartet wird :)')

app = create_app()
if __name__ == 'main':
    app.run()

    print('Server running')
'''
#wir generieren einfach jedes mal einen neuen Secret Key beim Testen
secret = os.urandom(12)

app.secret_key = secret


@app.route('/')
def main():
    return render_template('inhalt.html', seitenname='Startseite')

@app.route('/nochNIX')
def links():
    return render_template('lnks.html', seitenname='Links')


if __name__ == '__main__':
    app.run()

'''