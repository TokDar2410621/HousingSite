from itsdangerous import URLSafeTimedSerializer
from django.conf import settings


def generate_email_token(user):
    """
    Génère un token sécurisé basé sur l'email de l'utilisateur.
    """
    serializer = URLSafeTimedSerializer(settings.SECRET_KEY)
    return serializer.dumps(user.email, salt="email-confirm")


def verify_email_token(token, max_age=3600):
    """
    Valide le token reçu (valable par défaut 1 heure).
    Retourne l'email associé si valide, sinon None.
    """
    serializer = URLSafeTimedSerializer(settings.SECRET_KEY)
    try:
        email = serializer.loads(token, salt="email-confirm", max_age=max_age)
        return email
    except Exception:
        return None
