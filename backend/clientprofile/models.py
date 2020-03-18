from django.db import models

# Create your models here.
class ClientProfile(models.Model):
    username = models.CharField(max_length=32)
    password = models.CharField(max_length=128)
    
    fullname = models.CharField(max_length=50)
    address1 = models.CharField(max_length=100)
    address2 = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=9)
