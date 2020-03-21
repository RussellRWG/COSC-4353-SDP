from django.test import TestCase
from django.contrib.staticfiles.testing import StaticLiveServerTestCase

from .models import ClientProfile

# Create your tests here.

# python manage.py test clientprofile
class BasicTest(TestCase):
    def test_fields(self):
        profile = ClientProfile()
        profile.username = "Bobby"
        profile.fullname = "Billy Bob"
        profile.address1 = "123 Street"
        profile.address2 = ""
        profile.city = "Houston"
        profile.state = "TX"
        profile.zipcode = "77777"
        profile.newprofile = False
        profile.save()

        record = ClientProfile.objects.get(pk=1)
        self.assertEqual(record, profile)

    def test_validate_profile(self):
        profile = ClientProfile()
        profile.username = "Bobby"
        profile.fullname = "Billy Bob"
        profile.address1 = "123 Street"
        profile.address2 = ""
        profile.city = "Houston"
        profile.state = "TX"
        profile.zipcode = "77777"
        profile.newprofile = False
        profile.save()

        #Test Good Case
        self.assertEqual(profile.validate_profile(), True)

        #Test Fullname
        profile.fullname = "123456789012345678901234567890123456789012345678901"
        profile.save()
        self.assertEqual(profile.validate_profile(), False)

        profile.fullname = ""
        profile.save()
        self.assertEqual(profile.validate_profile(), False)

        profile.fullname = "Billy Bob"
        profile.save()

        #Test Address1
        profile.address1 = "123456789012345678901234567890123456789012345678901123456789012345678901234567890123456789012345678901"
        profile.save()
        self.assertEqual(profile.validate_profile(), False)

        profile.address1 = ""
        profile.save()
        self.assertEqual(profile.validate_profile(), False)

        profile.address1 = "123 Street"
        profile.save()

        #Test Address2

        profile.address2 = "123456789012345678901234567890123456789012345678901123456789012345678901234567890123456789012345678901"
        profile.save()
        self.assertEqual(profile.validate_profile(), False)

        profile.address2 = ""
        profile.save()

        #Test City
        profile.city = "123456789012345678901234567890123456789012345678901123456789012345678901234567890123456789012345678901"
        profile.save()
        self.assertEqual(profile.validate_profile(), False)

        profile.city = ""
        profile.save()
        self.assertEqual(profile.validate_profile(), False)

        profile.city = "Houston"
        profile.save()

        #Test State
        profile.state = "AA"
        profile.save()
        self.assertEqual(profile.validate_profile(), False)

        profile.state = "TX"
        profile.save()

        #Test Zip Codes
        profile.zipcode = "123456789"
        profile.save()
        self.assertEqual(profile.validate_profile(), True)

        profile.zipcode = "123"
        profile.save()
        self.assertEqual(profile.validate_profile(), False)

        profile.zipcode = "123456789101112"
        profile.save()
        self.assertEqual(profile.validate_profile(), False)

        profile.zipcode = "12345678"
        profile.save()
        self.assertEqual(profile.validate_profile(), False)
        

        

        
