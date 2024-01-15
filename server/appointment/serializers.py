from rest_framework import serializers
from .models import Appointment

class AppointSerializers(serializers.ModelSerializer):
    time = serializers.StringRelatedField(many=False)
    doctor = serializers.StringRelatedField(many=False)
    patient = serializers.StringRelatedField(many=False)
    class Meta :
        model = Appointment
        fields = '__all__'