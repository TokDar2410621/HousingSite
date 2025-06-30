@echo off
echo Suppression de la base de données...
del db.sqlite3

echo Suppression des dossiers de migrations...
for /d %%i in (*\migrations) do (
    del /q %%i\*.py
    del /q %%i\__pycache__\*.pyc
)

echo Recréation des migrations...
python manage.py makemigrations

echo Application des migrations...
python manage.py migrate

echo Script terminé.
pause
