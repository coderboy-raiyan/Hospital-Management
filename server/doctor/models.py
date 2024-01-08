from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField
# Create your models here.

class Specialization(models.Model):
    name = models.CharField(max_length=20)
    slug = models.SlugField(max_length=50)

    def __str__(self) -> str:
        return self.name
class Designation(models.Model):
    name = models.CharField(max_length=20)
    slug = models.SlugField(max_length=50)

    def __str__(self) -> str:
        return self.name


class AvailableTime(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name
    

class Doctor(models.Model):
    user= models.OneToOneField(User, related_name="doctor", on_delete=models.CASCADE)
    image = CloudinaryField('image')
    designation = models.ManyToManyField(Designation)
    specialization = models.ManyToManyField(Specialization)
    available_time = models.ManyToManyField(AvailableTime)
    fee = models.IntegerField()
    meet_link = models.CharField(max_length=300)

    def __str__(self) -> str:
        return f"Dr. {self.user.first_name} {self.user.last_name}"