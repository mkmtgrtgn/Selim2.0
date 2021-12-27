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
    print('Ihr müsst ein  Verzeichnis "drüber", wo ,app.py drin ist den Befehl "flask run" im Terminal eingeben '
          'oder "python app.py" als Befehl im Terminal eingeben, oder '
          'das über den Playbutton oben rechts in PyCharm einstellen ')

#wir generieren einfach jedes Mal einen neuen Secret Key beim Testen
secret = os.urandom(20)


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
    ENV="development",
    TESTING=True,
    SECRET_KEY=secret,
    DEBUG=True,

    #DATABASE=os.path.join(app.instance_path, 'localDB.sqlite'),
    )

    print('Config loaded, Debug is: '+str(app.debug))

    #db.init_app(app)
    with app.app_context():
        from .main import main
        from .aufgaben import ex
        app.register_blueprint(main.main_bp)

        return app
