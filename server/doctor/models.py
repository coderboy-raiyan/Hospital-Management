from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField
from patient.models import Patient
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
    
STAR_CHOICES = [
    ('⭐', '⭐'),
    ('⭐⭐', '⭐⭐'),
    ('⭐⭐⭐', '⭐⭐⭐'),
    ('⭐⭐⭐⭐', '⭐⭐⭐⭐'),
    ('⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'),
]

class Review(models.Model):
    reviewer = models.ForeignKey(Patient, related_name="reviews", on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor,related_name="reviews" , on_delete=models.CASCADE)
    body = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    ratings = models.CharField(max_length=10,choices = STAR_CHOICES)

    def __str__(self) -> str:
        return f"Patient {self.reviewer.user.first_name} {self.reviewer.user.last_name} ; Doctor : {self.doctor.user.first_name}"