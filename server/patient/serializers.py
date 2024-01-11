from rest_framework import serializers
from . import models
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']


class PatientSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    user = UserSerializer(many=False, read_only=True)
    class Meta :
        model = models.Patient
        fields = '__all__'
