from django.db.models import fields
from rest_framework import  serializers
from users.models.user_model import Users

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['first_name','last_name','email_id','dob']
        # fields == '__all__'  # for iinserting all column of table

class EmailCheckSerializer(serializers.Serializer):
    email= serializers.EmailField()

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model=Users
        fields=('email','first_name','last_name')