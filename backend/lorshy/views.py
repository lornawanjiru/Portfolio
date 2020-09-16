from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .models import contact

# Create your views here.

def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        desc = request.POST['desc']


        send_mail('Contact Form',
        desc,
        settings.EMAIL_HOST_USER,
        'lornamuchangi@gmail.com',
        fail_silently=False)

    return render(request, 'api/contact')    
