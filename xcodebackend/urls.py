from django.urls import path
from . import views


app_name = 'xcodebackend'

urlpatterns = [
    path('signup/', views.registeruser, name='register'),
    path('login/', views.loginuser, name='login'),
]