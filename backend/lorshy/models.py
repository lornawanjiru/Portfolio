from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class contact(models.Model):
        Name = models.CharField(max_length=160)
        Email = models.EmailField (max_length=254)
        Phone = PhoneNumberField()
        Desc = models.TextField (max_length=None)

class blog(models.Model):
        Title = models.CharField(max_length=200)
        Desc = models.TextField()
        Date = models.DateTimeField(auto_now_add=True)
        Image = models.ImageField(upload_to='pics')

        def __str__(self):
            return self.Title 
class portfweb(models.Model):
        Title = models.CharField(max_length=200)
        Category = models.CharField(max_length=50)
        Image = models.ImageField(upload_to='pics')

        def __str__(self):
            return self.Title 

class portfnet(models.Model):
        Title = models.CharField(max_length=200)
        Category = models.CharField(max_length=50)
        Image = models.ImageField(upload_to='pics')

        def __str__(self):
            return self.Title 

class portfcyb(models.Model):
        Title = models.CharField(max_length=200)
        Category = models.CharField(max_length=50)
        Image = models.ImageField(upload_to='pics')

        def __str__(self):
            return self.Title 

class Aboutme (models.Model):
        Image = models.ImageField(upload_to='pics')
       



