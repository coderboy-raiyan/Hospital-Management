from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('list', views.PatientViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', views.UserRegistrationApiView.as_view(), name="register"),
    path('login/', views.UserLoginApiView.as_view(), name="login"),
    path('activate/<uid64>/<token>/', views.activate, name="activate"),

]