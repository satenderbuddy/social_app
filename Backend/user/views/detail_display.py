from  rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework.response import Response
from user.models.user_registration_models import UserRegistration
from user.serializers import UserRegistrationSerializer
import json
class DetailsDisplay(APIView):
    def get(self,request):
        data = UserRegistration.objects.all()
        s1 = UserRegistrationSerializer(data,many=True)
        print(type(s1))
        return HttpResponse(json.dumps(s1.data),content_type="application/json")

    def post(self,request):
        print('================================')
        print(request,request.POST)
        print('================================')
        return ('This is a test String')
