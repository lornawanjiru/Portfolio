from django.urls import path

from .views import ContactDetailView, ContactListView
from .views import BlogDetailView, BlogListView


urlpatterns = [
    path('#section-blog/', BlogListView.as_view()),
    path('#section-blog<pk>/', BlogDetailView.as_view()),
    path('#section-contact/', ContactListView.as_view()),
    path('#section-contact<pk>/', ContactDetailView.as_view()),
]