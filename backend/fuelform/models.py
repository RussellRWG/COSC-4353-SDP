from django.db import models

# Create your models here.

class Fuel(models.Model):
    gallons = models.DecimalField(max_digits=10,decimal_places=4)
    delivery_address = models.CharField(max_length=256)
    delivery_date = models.DateField()
    suggested_price = models.DecimalField(max_digits=10,decimal_places=4)
    total_due = models.DecimalField(max_digits=10, decimal_places=4)

