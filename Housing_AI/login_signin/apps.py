from django.apps import AppConfig
class LoginSigninConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'login_signin'
    def ready(self):
        import login_signin.signals
