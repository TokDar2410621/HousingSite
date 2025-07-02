from allauth.account.signals import user_signed_up
from django.dispatch import receiver
from allauth.socialaccount.models import SocialAccount

@receiver(user_signed_up)
def populate_profile_from_social(request, user, **kwargs):
    try:
        socialaccount = SocialAccount.objects.get(user=user)
        data = socialaccount.extra_data

        user.first_name = data.get('given_name') or data.get('first_name', '')
        user.last_name = data.get('family_name') or data.get('last_name', '')

        # Avatar pour Google ou Facebook
        picture_url = data.get('picture')
        if picture_url:
            import requests
            from django.core.files.base import ContentFile
            response = requests.get(picture_url)
            if response.status_code == 200:
                user.photo.save(f"{user.pk}.jpg", ContentFile(response.content), save=False)

        user.save()
    except Exception as e:
        print("Erreur liaison social :", e)
