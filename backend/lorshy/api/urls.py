from django.urls import path
from rest_framework import routers
from .views import BlogDetailView, BlogListView
from .views import *

router = routers.DefaultRouter()
urlpatterns = [
    path('portfolio/', portfwebListView.as_view()),
    path('#section-web<pk>/', portfwebDetailView.as_view()),
    path('blog/', BlogListView.as_view()),
    path('#section-blog<pk>/', BlogDetailView.as_view()),
    path('contact/', ContactListView.as_view()),
    path('#section-contact<pk>/', ContactDetailView.as_view()),
    path('portfolio/', portfcybListView.as_view()),
    path('#section-cyb<pk>/', portfcybDetailView.as_view()),
    path('portfolio/', portfnetListView.as_view()),
    path('#section-net<pk>/', portfnetDetailView.as_view()),
    path('Aboutme/', AboutmeListView.as_view()),
    path('#section-about<pk>/', AboutmeDetailView.as_view()),
]