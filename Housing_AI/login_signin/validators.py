from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _

class CustomPasswordValidator:
    def validate(self, password, user=None):
        if len(password) < 8:
            raise ValidationError(
                _("Le mot de passe doit contenir au moins 8 caractères."),
                code='password_too_short',
            )
        if password.isdigit():
            raise ValidationError(
                _("Le mot de passe ne peut pas être entièrement numérique."),
                code='password_entirely_numeric',
            )
        if "darius" in password.lower():
            raise ValidationError(
                _("Le mot de passe ne doit pas contenir votre prénom."),
                code='password_contains_prenom',
            )

    def get_help_text(self):
        return _("Votre mot de passe doit contenir au moins 8 caractères, ne pas être seulement numérique, ni contenir votre prénom.")
