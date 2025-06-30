# Housing_AI

Housing_AI : application backend Django et frontend React.

Ce projet regroupe un backend Django pour la logique serveur et un frontend React pour l'interface utilisateur.

## Fonctionnalités

- CRUD d'annonces immobilières exposées via une API REST.
- Authentification JWT (JSON Web Token) pour l'inscription et la connexion des utilisateurs.
- Documentation interactive disponible sur `/swagger`.

## Structure du dépôt

- `Housing_AI/` : code du backend Django.
- `housing-ai/` : application React basée sur Vite.

## Lancer le backend

```bash
cd Housing_AI
python -m venv venv
source venv/bin/activate
pip install django djangorestframework drf-yasg djangorestframework-simplejwt corsheaders
python manage.py migrate
python manage.py runserver
```

## Lancer le frontend

```bash
cd housing-ai
npm install
npm run dev
```
