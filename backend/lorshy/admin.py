from django.contrib import admin

# Register your models here.
from .models import contact
from .models import blog

admin.site.register(contact)
admin.site.register(blog)