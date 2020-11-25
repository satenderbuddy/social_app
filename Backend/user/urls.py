from django.urls import path
from user.views.detail_display import DetailsDisplay
from rest_framework.urlpatterns import format_suffix_patterns
urlpatterns=[
    path('details_display/', DetailsDisplay.as_view(), name= 'detail_display'),
]
