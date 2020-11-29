from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.http import HttpResponse
from django.db.models import Q
import json
class Login(APIView):

    def post(self,request):
        print("in post")
        print(request.data)
        resp = {
            "first_name":"satender",
            "Last_name":"Singh",
        }
        return HttpResponse(json.dumps(resp),content_type="application/json")   



class CheckUser(APIView):
    def get(self,request):
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
    def post(self,request):
        user_data = request.POST
        user_exist = User.objects.filter(Q(email=user_data["email"]) | Q(username=user_data["username"]))
        if not user_exist:
            user = User.objects.create_user(username=user_data['username'],first_name=user_data["first_name"],
                last_name=user_data["last_name"],password=user_data["password"],email=user_data["email"] )
           
            return HttpResponse("User Created",content_type="application/json")
        else:
            return HttpResponse("User Exist",content_type="application/json")
