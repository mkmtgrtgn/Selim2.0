'''
Hier wird der Server gestartet, hier "fließen" die verschiedenen Bestandteile von selim_r zusammen:
die Serverfunktionalitäten, können in Blueprints aufgeteilt werden wie hier bspw. selim_r/main oder selim_r/aufgaben
Das erleichtert direkt die Arbeitsteilung bzw. verhindert dass alle an den selben Stellen rumbasteln müssten...
So einen Template-Ordner könnt ihr einfach erstellen, analog zu main.py am Anfang das ganze als Blueprint
initialisieren und dann habt ihr auch die möglichkeit in diesen Blueprint Ordner einen Template-Ordner anzulegen
in dem ihr dann eure HTML Seiten verwalten bzw. entwickeln könnt :)
'''

import os
from flask import Flask, render_template
#from flask_sqlalchemy import SQLAlchemy

#app = Flask(__name__)

if __name__ == '__main__':
    print('Damit der Server startet, müsst ihr die app.py eine ebene höher starten :)')

def create_app(test_config=None):
    # wir generieren einfach jedes Mal einen neuen Secret Key beim Testen

    secret = os.urandom(20)

    app = Flask(__name__, instance_relative_config=True)

    print('Server app created.')

    app.config.from_mapping(
    ENV="development",
    TESTING=True,
    SECRET_KEY=secret,
    DEBUG=True)

    print('Config loaded. Debug: '+str(app.debug))

    #db.init_app(app)
    with app.app_context():
        from .main import main
        from .aufgaben import ex
        app.register_blueprint(main.main_bp)

        return app
