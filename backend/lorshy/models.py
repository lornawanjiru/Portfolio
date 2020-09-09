from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Contact(models.Model):
        Name = models.CharField(max_length=160)
        Email = models.EmailField (max_length=254)
        Phone = PhoneNumberField()
        Desc = models.TextField (max_length=None)
class Blog(models.Model):
        Title = models.CharField(max_length=200)
        Desc = models.TextField()
        Date = models.DateTimeField(auto_now_add=True)
        Image = models.ImageField(upload_to='pics')

