from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib import auth
from django.db import connection
from .models import ListOfTables
import json

# Create your views here.

@csrf_exempt
# view for registering the user (sign up)   POST
def registeruser(request):
    received_data = json.loads(request.body)
    # print("====================================")
    # print(received_data)
    try:
        User.objects.create_user(username=received_data['username'], email=received_data['email'], password=received_data['password'])
        return JsonResponse({"msg":"user created successfully"}) # status = 200  default is 200 ok
    except:
        return JsonResponse({"msg":"could not be created."})



# view for login in the user    POST
@csrf_exempt
def loginuser(request):
    received_data = json.loads(request.body)
    username = received_data['username']
    password = received_data['password']
    u = auth.authenticate(request, username=username, password=password)
    
    if u is not None:
        auth.login(request, u)
        return JsonResponse({"curruser":username}) # status = 200  default is 200 ok
    else:
        return JsonResponse({"curruser":""}) # status = 200  default is 200 ok



# view for logout     GET
def logoutuser(request):
    auth.logout(request)
    return JsonResponse({"curruser":""}) # status = 200  default is 200 ok
    


@csrf_exempt
# view for creating tables as per need of the user   POST
def createtable(request):

    received_data = json.loads(request.body)
    # print(str(received_data))/
    t = ListOfTables.objects.get_or_create(owner=User.objects.get(username='admin'), tablename=received_data['tablename'], tableschema=str(received_data))
    # print(received_data)

    tablename = "xcodebackend_"+received_data['tablename']
    cursor = connection.cursor()
    # cursor.execute("CREATE TABLE "+tablename+" (field1 INTEGER, field2 VARCHAR(30) )")
    query = "CREATE TABLE " + tablename + "( "
    for i in received_data['fields']:
        query = query + i['name'] + " "
        if(i['type'] == 'STRING'):
            query = query + "VARCHAR(100), "
        else:
            query = query + "INTEGER, "
    query = query[:-2]
    query = query + ")"

    # print(query)
    try:
        cursor.execute(query)
    except:
        pass

    user_tables = ListOfTables.objects.all().filter(owner=User.objects.get(username='admin')).values_list( 'tableschema', flat=True)
    user_tables = list(user_tables)
    # print(user_tables)

    responsetosend = {
        "curruser":"admin",
        "tables":user_tables
    }
    
    # return JsonResponse({"curruser":str(request.user)}) 
    return JsonResponse(responsetosend)

    
# view for retrieving all the tables of the specified user   GET
def getalltables(request):
    # responsetosend = {"curruser":""}
    
    user_tables = ListOfTables.objects.all().filter(owner=User.objects.get(username="admin")).values_list( 'tableschema', flat=True)
    user_tables = list(user_tables)
    # print(user_tables)
    responsetosend = {
        "curruser":"admin",
        "tables":user_tables
    }
    return JsonResponse(responsetosend)
