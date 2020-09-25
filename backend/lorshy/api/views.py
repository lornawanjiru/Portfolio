from rest_framework.generics import *
from rest_framework.views import APIView
from lorshy.models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *
from django.http import HttpResponse
from django.conf import settings
from django.views.generic import View

import logging
import urllib.request
import os
     

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

# class FrontendAppView(View):
#     def get(self, request):
#         print (os.path.join(settings.REACT_APP_DIR, 'build', 'index.html'))
#         try:
#             with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
#                 return HttpResponse(f.read())
#         except FileNotFoundError:
#             logging.exception('Production build of app not found')
#             return HttpResponse(
#                 """
#                 This URL is only used when you have built the production
#                 version of the app. Visit http://localhost:3000/ instead, or
#                 run `yarn run build` to test the production version.
#                 """,
#                 status=501,
#             )