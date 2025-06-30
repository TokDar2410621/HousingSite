from django.core.management.base import BaseCommand
from annonces.models import Annonce, ImageAnnonce

class Command(BaseCommand):
    help = "Supprime toutes les annonces et images associées."

    def handle(self, *args, **kwargs):
        images_count = ImageAnnonce.objects.count()
        annonces_count = Annonce.objects.count()

        self.stdout.write(f"🧹 Suppression de {images_count} images supplémentaires...")
        ImageAnnonce.objects.all().delete()

        self.stdout.write(f"🧹 Suppression de {annonces_count} annonces...")
        Annonce.objects.all().delete()

        self.stdout.write(self.style.SUCCESS("✅ Base de données nettoyée avec succès."))
