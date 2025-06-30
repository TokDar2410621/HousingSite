import os
import json
from django.core.management.base import BaseCommand
from annonces.models import Annonce, ImageAnnonce

class Command(BaseCommand):
    help = "Importe automatiquement des annonces à partir d’un fichier JSON."

    def handle(self, *args, **kwargs):
        chemin = os.path.join(os.path.dirname(__file__), '../../../annonces/data/kijiji.json')
        chemin = os.path.abspath(chemin)

        if not os.path.exists(chemin):
            self.stdout.write(self.style.WARNING("⚠️ Fichier JSON non trouvé à l’emplacement : " + chemin))
            return

        try:
            with open(chemin, 'r', encoding='utf-8') as f:
                data = json.load(f)
                for annonce_data in data:
                    titre = annonce_data.get("title")
                    if Annonce.objects.filter(titre=titre).exists():
                        continue
                    prix = annonce_data.get("price")
                    adresse = annonce_data.get("address")
                    image_principale = annonce_data.get("main_image")
                    annonce = Annonce.objects.create(
                        titre=titre,
                        prix=prix,
                        adresse=adresse,
                        image_Principale=image_principale,
                        description=annonce_data.get("description"),
                        lien=annonce_data.get("lien")
                    )
                            # images supplémentaires
                    images = annonce_data.get('images_supplémentaires', [])
                    if images:
                        for image_url in images:
                            ImageAnnonce.objects.create(annonce=annonce, image=image_url)
            self.stdout.write(self.style.SUCCESS("✅ Importation terminée avec succès !"))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f"❌ Erreur lors de l’import : {str(e)}"))

