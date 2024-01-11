from rest_framework import serializers
from . import models
from django.contrib.auth.models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password','is_active', 'is_staff', 'user_permissions', 'groups',)


class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Specialization
        fields = '__all__'

class DesignationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Designation
        fields = '__all__'

class AvailableTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AvailableTime
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Review
        fields = '__all__'


class DoctorSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    user = UserSerializer(many=False, read_only=True)
    designation = DesignationSerializer(many=True, read_only=True)
    specialization = SpecializationSerializer(many=True, read_only=True)
    available_time = AvailableTimeSerializer(many=True, read_only=True)
    class Meta :
        model = models.Doctor
        fields = '__all__'
      
