from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ClientProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    """fullname = models.CharField(max_length=50, blank=True, default='')
    address1 = models.CharField(max_length=100, blank=True, default='')
    address2 = models.CharField(max_length=100, blank=True, default='')
    city = models.CharField(max_length=100, blank=True, default='')
    state = models.CharField(max_length=2, blank=True, default='')
    zipcode = models.CharField(max_length=9, blank=True, default='')"""

    fullname = models.CharField(max_length=50)
    address1 = models.CharField(max_length=100)
    address2 = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=9)

    validated = models.BooleanField(default=False)

    def validate_profile(self):
        self.validated = True
        errors = {
            'fullname' : '',
            'address1' : '',
            'address2' : '',
            'city' : '',
            'state': '',
            'zipcode' : '',
            }
        
        if len(self.fullname) > 50:
            errors['fullname'] = 'Name must be 50 characters or less'
            self.validated = False
        elif len(self.fullname) < 1:
            errors['fullname'] = 'Name is required'
            self.validated = False

        if len(self.address1) > 100:
            errors['address1'] = 'Address 1 must be 100 characters or less'
            self.validated = False
        elif len(self.address1) < 1:
            errors['address1'] = 'Address 1 is required'
            self.validated = False

        if len(self.address2) > 100:
            errors['address2'] = 'Address 2 must be 100 characters or less'
            self.validated = False

        if len(self.city) > 100:
            errors['city'] = 'City name must be 100 characters or less'
            self.validated = False
        elif len(self.city) < 1:
            errors['city'] = 'City is required'
            self.validated = False

        states = ['AL', 'AK','AR','AZ','CA','CO','CT','DE','FL','GA','HI','ID','IA','IL','IN','KS','KY','LA','MA','MD', 'ME', 'MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV', 'NY', 'OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY']
        if self.state not in states:
            if self.state == '':
                errors['state'] = 'State is required'
                self.validated = False
            else:
                errors['state'] = 'Not a valid state'
                self.validated = False
        
        if len(self.zipcode) == 0:
            errors['zipcode'] = 'Zipcode is required'
            self.validated = False
        elif self.zipcode.isdigit() == False:
            errors['zipcode'] = 'Zipcode must be a 5 or 9 digit number'
            self.validated = False
        elif len(self.zipcode) != 5 and len(self.zipcode) != 9:
            errors['zipcode'] = 'Zipcode must be a 5 or 9 digit number'
            self.validated = False

        return errors
