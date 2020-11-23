from rest_framework import  serializers
from user.models.user_registration_models import UserRegistration

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRegistration
        fields = ['first_name','last_name','email_id','dob']
        # fields == '__all__'  # for iinserting all column of table
