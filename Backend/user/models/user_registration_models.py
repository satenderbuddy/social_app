from django.db import models

# Create your models here.
class UserRegistration(models.Model):
    pk_user_registration = models.AutoField( primary_key=True)
    first_name = models.CharField(max_length=30,blank=True, null=True)
    last_name = models.CharField(max_length=50,blank=True, null=True)
    email_id = models.CharField(max_length=80,blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    reg_date = models.DateTimeField(blank=True, null=True)
    password = models.CharField(max_length=256,null=True)
    class Meta:
        managed = True
        db_table = 'user_registration'
