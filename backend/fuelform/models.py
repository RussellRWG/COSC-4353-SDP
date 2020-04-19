from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.

class Fuel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    gallons = models.DecimalField(max_digits=10,decimal_places=4)
    delivery_address = models.CharField(max_length=256)
    delivery_date = models.DateField()
    suggested_price = models.DecimalField(max_digits=10,decimal_places=4)
    total_due = models.DecimalField(max_digits=10, decimal_places=4)

