from django.urls import path
from . import views


app_name = 'xcodebackend'

urlpatterns = [
    path('signup/', views.registeruser, name='register'),
    path('login/', views.loginuser, name='login'),
    path('logout/', views.logoutuser, name='logout'),
    path('tablecreate/', views.createtable, name='tablecreate'),
    path('getalltables/', views.getalltables, name='gettables'),
    path('snippet/', views.generatesnippet, name='snippetgenerator'),
    path('geturl/<str:tablename>/', views.geturl, name='geturl'),
    path('xcode/<str:tablename>/', views.xcode, name='xcode'),
]