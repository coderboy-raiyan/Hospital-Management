from django.shortcuts import render
from rest_framework import filters, viewsets, pagination
from . import models
from . import serializers


class DoctorPagination(pagination.PageNumberPagination):
    page_size = 1
    page_size_query_param = 'page_size'
    max_page_size = 100

class AvailableTimeForSpecificDoctor(filters.BaseFilterBackend):
     def filter_queryset(self, request, query_set, view):
        doctor_id = request.query_params.get("doctor_id")
        if doctor_id:
            return query_set.filter(doctor = doctor_id)
        return query_set
class DoctorViewSet(viewsets.ModelViewSet):
    queryset = models.Doctor.objects.all()
    serializer_class = serializers.DoctorSerializer
    filter_backends = []
    pagination_class = DoctorPagination

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer

    
class SpecializationViewSet(viewsets.ModelViewSet):
    queryset = models.Specialization.objects.all()
    serializer_class = serializers.SpecializationSerializer

class DesignationViewSet(viewsets.ModelViewSet):
    queryset = models.Designation.objects.all()
    serializer_class = serializers.DesignationSerializer

class AvailableTimeViewSet(viewsets.ModelViewSet):
    queryset = models.AvailableTime.objects.all()
    serializer_class = serializers.AvailableTimeSerializer
    filter_backends = [AvailableTimeForSpecificDoctor]






