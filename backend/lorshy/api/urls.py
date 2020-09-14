from django.urls import path
from rest_framework import routers
from .views import ContactDetailView, ContactListView
from .views import BlogDetailView, BlogListView

router = routers.DefaultRouter()
urlpatterns = [
    
    path('blog/', BlogListView.as_view()),
    path('#section-blog<pk>/', BlogDetailView.as_view()),
    path('contact/', ContactListView.as_view()),
    path('#section-contact<pk>/', ContactDetailView.as_view()),
]