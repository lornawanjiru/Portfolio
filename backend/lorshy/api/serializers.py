from rest_framework import serializers

from lorshy.models import Contact
from lorshy.models import Blog



class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('Name','Email','Phone','Desc') 

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('Title','Desc','Image','Date')      