from rest_framework import serializers
from .models import Service
from django import forms
class ServiceSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    class Meta :
        model = Service
        fields = '__all__'