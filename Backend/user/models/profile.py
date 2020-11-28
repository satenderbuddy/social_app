from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils import timezone
from django.db.models.signals import post_save
from django.conf import settings
from autoslug import AutoSlugField

class TimeStampMixin(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

        
class Profile(TimeStampMixin):
    user      = models.OneToOneField( User, on_delete=models.CASCADE)
    image     = models.ImageField(default='default.png', upload_to='profile_pics')
    bio       = models.CharField(max_length=255, blank=True)
    followers = models.IntegerField(default=0)
    following = models.IntegerField(default=0)

    def __str__(self):
        return str(self.user.username)

class Followers(TimeStampMixin):
    user     = models.ForeignKey(User ,related_name='to_user',on_delete=models.CASCADE)
    follower = models.ForeignKey(User ,on_delete=models.CASCADE)


class Following(TimeStampMixin):
    user      = models.ForeignKey(User ,related_name="from_user",on_delete=models.CASCADE)
    following = models.ForeignKey(User ,on_delete=models.CASCADE)

