from django.db import models
from django.contrib.auth.models import AbstractUser

from users.enums.country_enums import Countries 
# Create your models here.
class Users(AbstractUser):
    dob = models.DateField(null=True)
    email = models.EmailField(unique=True)
    mobile= models.CharField(max_length=12,null=True,unique= True)
    image = models.TextField(null=True)
    bio = models.CharField(max_length=150,blank=True,null=True)
    followers  = models.ManyToManyField('self')
    following = models.ManyToManyField('self')
    country = models.CharField(max_length=2, choices=Countries.country_choices())
    
    USERNAME_FIELD="email"   
    REQUIRED_FIELDS=[]

    class Meta:
        managed = True
        db_table = 'users'
