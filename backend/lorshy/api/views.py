from rest_framework.generics import *
from rest_framework.views import APIView
from lorshy.models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *



     

class ContactListView(ListAPIView):
    queryset = contact.objects.all()
    serializer_class = ContactSerializer

class ContactDetailView(RetrieveAPIView):
    queryset = contact.objects.all()
    serializer_class = ContactSerializer

class BlogListView(ListAPIView):
    queryset = blog.objects.all()
    serializer_class = BlogSerializer

class BlogDetailView(RetrieveAPIView):
    queryset = blog.objects.all()
    serializer_class = BlogSerializer    

class portfwebListView(ListAPIView):
    queryset = portfweb.objects.all()
    serializer_class = portfwebSerializer
class portfwebDetailView(RetrieveAPIView):
   queryset = portfweb.objects.all()
   serializer_class = portfwebSerializer
class portfnetListView(ListAPIView):
    queryset = portfnet.objects.all()
    serializer_class = portfnetSerializer
class portfnetDetailView(RetrieveAPIView):
   queryset = portfnet.objects.all()
   serializer_class = portfnetSerializer
class portfcybListView(ListAPIView):
    queryset = portfcyb.objects.all()
    serializer_class = portfcybSerializer
class portfcybDetailView(RetrieveAPIView):
   queryset = portfcyb.objects.all()
   serializer_class = portfcybSerializer
class AboutmeListView(ListAPIView):
    queryset = Aboutme.objects.all()
    serializer_class = AboutmeSerializer
class AboutmeDetailView(RetrieveAPIView):
   queryset = Aboutme.objects.all()
   serializer_class = AboutmeSerializer
