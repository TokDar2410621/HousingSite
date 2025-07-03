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
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Lancer le frontend

```bash
cd housing-ai
npm install
npm run dev
```

## Configuration

Le frontend utilise la variable d'environnement `VITE_API_URL` pour savoir
où joindre l'API. Un fichier `.env.example` est disponible dans `housing-ai/`
avec la valeur par défaut :

```bash
VITE_API_URL=http://localhost:8000/api/
```

Copiez ce fichier en `.env` et ajustez l'URL selon votre environnement.
