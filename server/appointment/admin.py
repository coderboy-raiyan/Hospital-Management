from django.contrib import admin
from .models import Appointment

class AppointmentAdminModel(admin.ModelAdmin):
    list_display = ['patient_name', 'doctor_name', 'appointment_types', 'appointment_status', 'symptom', 'time', 'cancel']

    def patient_name(self, obj):
        return obj.patient.user.first_name
    
    def doctor_name(self, obj):
        return obj.doctor.user.first_name


admin.site.register(Appointment, AppointmentAdminModel)