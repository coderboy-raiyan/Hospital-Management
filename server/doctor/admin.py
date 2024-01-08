from django.contrib import admin
from .models import Doctor, Specialization, Designation, AvailableTime
# Register your models here.

class SpecializationAdminModel(admin.ModelAdmin):
    prepopulated_fields = {'slug' : ('name',),}


class DesignationAdminModel(admin.ModelAdmin):
    prepopulated_fields = {'slug' : ('name',),}

admin.site.register(Doctor)
admin.site.register(Specialization, SpecializationAdminModel)
admin.site.register(Designation, DesignationAdminModel)
admin.site.register(AvailableTime)