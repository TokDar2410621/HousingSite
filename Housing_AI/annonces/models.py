from django.db import models

# Create your models here.
class Annonce(models.Model):
    titre = models.CharField(max_length=255)
    prix = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)
    image_Principale = models.URLField(blank=True, null=True)
    date_postee = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    lien = models.URLField(default="")

    def __str__(self):
        return self.titre
class ImageAnnonce(models.Model):
    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE, related_name='images')
    image = models.URLField(default="")
    def __str__(self):
        return f"Image for {self.annonce.titre}"

