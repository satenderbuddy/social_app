from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.http import HttpResponse
from django.db.models import Q
import json
class Login(APIView):

    def post(self,request): #user for login 
        print(request.data)
        msg = ''
        if "@" in request.POST["email"]:
            user = User.objects.filter(Q(email=request.POST["email"]))
        else :
            user = User.objects.filter(Q(username=request.POST["email"]))
        
        if user:
            allow_user = user[0].check_password(request.POST['password'])
            if allow_user:
                msg="sucess"
            else:
                msg = "Password Incorrect"
        else:
            msg="User does not exist"
        print(msg)
        return HttpResponse(json.dumps(msg),content_type="application/json")   



class CheckUser(APIView):
    def get(self,request): #used for checking the username in database for new user
        return Response('Restricted',content_type="application/json",status=401)

    def post(self,request):
        if('check_user' in request.POST and request.POST['check_user']=='1'):
            if "user_name"in request.POST and request.POST['user_name']:
                user_name = request.POST['user_name']
                print(user_name)
                user = User.objects.filter(username=user_name)
                if user:
                    return HttpResponse("Failure",content_type="application/json")
                else:
                    return HttpResponse("success",content_type="application/json")

class CreateUser(APIView):
    def post(self,request): #function is used to create new user from online form
        user_data = request.POST
        user_exist = User.objects.filter(Q(email=user_data["email"]) | Q(username=user_data["username"]))
        if not user_exist:
            user = User.objects.create_user(username=user_data['username'],first_name=user_data["first_name"],
                last_name=user_data["last_name"],password=user_data["password"],email=user_data["email"] )
           
            return HttpResponse("User Created",content_type="application/json")
        else:
            return HttpResponse("User Exist",content_type="application/json")
