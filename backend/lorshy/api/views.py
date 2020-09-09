from rest_framework.generics import ListAPIView, RetrieveAPIView

from lorshy.models import contact
from lorshy.models import blog
from .serializers import ContactSerializer
from .serializers import BlogSerializer


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