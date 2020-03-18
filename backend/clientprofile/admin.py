from django.contrib import admin
from .models import ClientProfile

# Register your models here.
class ClientProfileAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'fullname', 'address1', 'address2', 'city', 'state', 'zipcode')

admin.site.register(ClientProfile, ClientProfileAdmin)
