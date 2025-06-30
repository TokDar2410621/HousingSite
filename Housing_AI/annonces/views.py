from django.shortcuts import render
from .models import Annonce, ImageAnnonce
from rest_framework import viewsets
from .serializers import AnnonceSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class AnnonceViewSet(viewsets.ModelViewSet):
    queryset = Annonce.objects.all().order_by('-date_postee')
    serializer_class = AnnonceSerializer

    def perform_create(self, serializer):
        """Création d'une annonce avec images supplémentaires"""
        annonce = serializer.save()
        # Récupération des images supplémentaires depuis les URLs
        images = self.request.data.get('images', [])
        for image_url in images:
            ImageAnnonce.objects.create(annonce=annonce, image=image_url)


