from rest_framework import serializers
from lorshy.models import contact
from lorshy.models import blog
from lorshy.models import portfweb
from lorshy.models import portfcyb
from lorshy.models import portfnet
from lorshy.models import Aboutme


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = contact
        fields = ('Name','Email','Phone','Desc') 

    def save(self):
        contact.save()
        return contact     

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = blog
        fields = ('Title','Desc','Image','Date') 

class portfwebSerializer(serializers.ModelSerializer):
    class Meta:
        model = portfweb
        fields = ('Title','Category','Image')     

class portfnetSerializer(serializers.ModelSerializer):
    class Meta:
        model = portfnet
        fields = ('Title','Category','Image')  


class portfcybSerializer(serializers.ModelSerializer):
    class Meta:
        model = portfcyb
        fields = ('Title','Category','Image')  

class AboutmeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aboutme
        fields = ('Image')        