from rest_framework import serializers

from lorshy.models import contact
from lorshy.models import blog



class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = contact
        fields = ('Name','Email','Phone','Desc') 

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = blog
        fields = ('Title','Desc','Image','Date')      