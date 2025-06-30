
from rest_framework import serializers
from .models import Annonce, ImageAnnonce
from django.contrib.auth.models import User

class ImageAnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageAnnonce
        fields = ['id', 'image']
class AnnonceSerializer(serializers.ModelSerializer):
    images = ImageAnnonceSerializer(many=True, read_only=True)
    class Meta:
        model = Annonce
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username = validated_data['username'],
            email = validated_data['email'],
            password = validated_data['password']  # mot de passe bien hashé
        )
        return user


