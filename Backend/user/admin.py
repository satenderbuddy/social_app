from django.contrib import admin
from user.models.profile import Profile,Following,Followers
# Register your models here.
admin.site.register(Profile)
admin.site.register(Followers)
admin.site.register(Following)