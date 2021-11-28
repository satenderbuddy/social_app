from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import status
from django.db.models import Q
from django.contrib.auth import get_user_model

from users.serializers import EmailCheckSerializer, UserCreateSerializer
import json
# from rest_framework.authentication
from rest_framework.authtoken.models import Token

Users= get_user_model()
class Login(APIView):
    permission_classes=()
    authentication_classes=()
    def post(self,request): #user for login 
        msg = ''
        if 'email' not in request.data:
            return Response({"status":True,"msg":"Invalid email"})
        if "@" in request.POST["email"]:
            valid_email = EmailCheckSerializer(data= request.data)
            if not valid_email.is_valid():
                return Response({"status":False,"msg":"Invalid email"})
            user = Users.objects.filter(email=request.data["email"]).first()
        else :
            user = Users.objects.filter(Q(username=request.data["email"])).first()
        
        if user:
            allow_user = user.check_password(request.data['password'])
            if allow_user:
                token = Token.objects.get_or_create(user=user)
                return Response({"status":True,"msg":"login sucess", "data":{"token":"Token "+token[0].key}},headers={"Authorization":token[0].key})
            else:
                msg = "Password Incorrect"
        
        else:
            msg="User does not exist"
            return Response({"status":False,"msg":msg})
    
class Logout(APIView):
    def get(self,request):
        return Response("")

    def post(self,request):
        print(request.user)
        Token.objects.get(key=request.auth).delete()
        return Response({"status":True,"msg":"logout successfull"})



class CheckUser(APIView):
    def get(self,request): #used for checking the username in database for new user
        return Response('Restricted',content_type="application/json",status=401)

    def post(self,request):
        if('check_user' in request.POST and request.POST['check_user']=='1'):
            if "user_name"in request.POST and request.POST['user_name']:
                user_name = request.POST['user_name']
                print(user_name)
                user = Users.objects.filter(username=user_name)
                if user:
                    return HttpResponse("Failure",content_type="application/json")
                else:
                    return HttpResponse("success",content_type="application/json")

class CreateUser(APIView):
    permission_classes=()
    authentication_classes=()
    def post(self,request): #function is used to create new user from online form
        user = UserCreateSerializer(data=request.data)
        if user.is_valid():
            if "password" in request.data and len(request.data['password'])>7:
                user = user.save()
                user.set_password(request.data['password'])
                # user.is_staff=1
                # user.is_superuser=1
                user.save()
                token = Token.objects.get_or_create(user=user)
                return Response({"status":True,"msg":"login sucess"},headers={"Authorization":token})

            else:
                Response({"status":False,"msg":"invalid password"},status=status.HTTP_400_BAD_REQUEST)
        else:
            print(user.errors)
            for key in user.errors:
                pass
            return Response({"status":False,"msg":"error "+key},status=status.HTTP_400_BAD_REQUEST)