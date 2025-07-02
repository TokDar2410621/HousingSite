from django.urls import path

from annonces.views import AnnonceViewSet


urlpatterns = [
    path('', AnnonceViewSet.as_view({'get': 'list'}), name='annonces'),
]
