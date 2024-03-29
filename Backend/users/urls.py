from django.urls import path
from users.views.login import Logout
from users.views.detail_display import DetailsDisplay
from users.views.login import Login, CheckUser,CreateUser
from rest_framework.urlpatterns import format_suffix_patterns
urlpatterns=[
    path('details_display/', DetailsDisplay.as_view(), name= 'detail_display'),
    path('login/',Login.as_view(),name="login"),
    path('check_username/',CheckUser.as_view(),name='check_user'),
    path('create_user/',CreateUser.as_view(),name="create_user"),
    path('logout/',Logout.as_view(),name="logout"),
    
]
