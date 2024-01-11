from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('list', views.DoctorViewSet)
router.register('available_time', views.AvailableTimeViewSet)
router.register('designation', views.DesignationViewSet)
router.register('reviews', views.ReviewViewSet)
router.register('specialization', views.SpecializationViewSet)


urlpatterns = [
    path('', include(router.urls))
]
