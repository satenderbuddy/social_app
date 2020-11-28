from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
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
