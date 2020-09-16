from django.contrib import admin

# Register your models here.
from .models import contact
from .models import blog
from .models import portfweb
from .models import portfcyb
from .models import portfnet
from .models import Aboutme


admin.site.register(contact)
admin.site.register(blog)
admin.site.register(portfweb)
admin.site.register(portfcyb)
admin.site.register(portfnet)
admin.site.register(Aboutme)
