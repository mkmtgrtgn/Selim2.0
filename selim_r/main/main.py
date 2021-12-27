from flask import Blueprint, redirect, render_template, url_for, request, flash

''' Hier werden die Routen dem Blueprint Main zugeordnet - also bisher ist geplant, 
alle "normalen" Routen/URLS hiermit zu serven, speziellere wie z.B. für Aufgaben können dann
über andere Blueprints organisiert werden - oder z.B. einzelne Themengebiete oder ein Nutzerbereich '''

main_bp = Blueprint(
    'main_bp', __name__,
    template_folder='main_templates',
    static_folder='static'
)

@main_bp.route('/')
def main():
    return render_template('inhalt.html', seitenname='Startseite')

@main_bp.route('/nochNIX')
def links():
    return render_template('lnks.html', seitenname='Links')
