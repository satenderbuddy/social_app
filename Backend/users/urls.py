from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from users import views

urlpatterns = [
    path(
        "details_display/",
        views.DetailsDisplay.as_view(),
        name="detail_display",
    ),
    path("login/", views.Login.as_view(), name="login"),
    path("check_username/", views.CheckUser.as_view(), name="check_user"),
    path("create_user/", views.CreateUser.as_view(), name="create_user"),
    path("logout/", views.Logout.as_view(), name="logout"),
]
