from django.db import models

# Create your models here.
class ClientProfile(models.Model):
    username = models.TextField(unique=True)
    
    fullname = models.CharField(max_length=50)
    address1 = models.CharField(max_length=100)
    address2 = models.CharField(max_length=100, blank=True, default='')
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=9)

    newprofile = models.BooleanField(default=True)

    def validate_profile(self):
        if len(self.fullname) > 50 or len(self.fullname) < 1:
            return False

        if len(self.address1) > 100 or len(self.address1) < 1:
            return False

        if len(self.address2) > 100:
            return False

        if len(self.city) > 100 or len(self.city) < 1:
            return False

        states = ['AL', 'AK','AR','AZ','CA','CO','CT','DE','FL','GA','HI','AL','ID','IA','IL','IN','KS','KY','LA','MA','MD','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY']
        if self.state not in states:
            return False
        
        if self.zipcode.isdigit() == False:
            return False

        if len(self.zipcode) != 5 and len(self.zipcode) != 9:
            return False

        return True
