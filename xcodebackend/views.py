from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib import auth
import json

# Create your views here.

@csrf_exempt
# view for registering the user (sign up)
def registeruser(request):
    received_data = json.loads(request.body)
    # print("====================================")
    # print(received_data)
    try:
        User.objects.create_user(username=received_data['username'], email=received_data['email'], password=received_data['password'])
        return JsonResponse({"msg":"user created successfully"}) # status = 200  default is 200 ok
    except:
        return JsonResponse({"msg":"could not be created."})



# view for login in the user
@csrf_exempt
def loginuser(request):
    received_data = json.loads(request.body)
    username = received_data['username']
    password = received_data['password']
    u = auth.authenticate(request, username=username, password=password)
    
    if u is not None:
        auth.login(request, u)
        return JsonResponse({"username":username}) # status = 200  default is 200 ok
    else:
        return JsonResponse({"username":""}) # status = 200  default is 200 ok



# view for creating tables as per need of the user

    