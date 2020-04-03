from django.test import TestCase, Client
from django.contrib.staticfiles.testing import StaticLiveServerTestCase

from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from .models import ClientProfile

# python manage.py test clientprofile
class BasicTest(APITestCase):
    def test_setup(self):
        user = User.objects.create_user(username="bobby", password="1X<ISRUkw+tuK")
        user.save()
        
        profile = ClientProfile.objects.create(user=user)
        profile.username = "Bobby"
        profile.fullname = "Billy Bob"
        profile.address1 = "123 Street"
        profile.address2 = ""
        profile.city = "Houston"
        profile.state = "TX"
        profile.zipcode = "77777"
        profile.validated = True
        profile.save()

        record = ClientProfile.objects.get(pk=1)
        self.assertEqual(record, profile)

    def test_validate_profile(self):
        user = User.objects.create_user(username='bobby', password='1X<ISRUkw+tuK')
        user.save()
        
        profile = ClientProfile.objects.create(user=user)
        profile.username = "Bobby"
        profile.fullname = "Billy Bob"
        profile.address1 = "123 Street"
        profile.address2 = ""
        profile.city = "Houston"
        profile.state = "TX"
        profile.zipcode = "77777"
        profile.validated = True
        profile.save()
        
        errors = {}

        #Test Good Case
        profile.validate_profile()
        self.assertEqual(profile.validated, True)

        #Test Fullname
        profile.fullname = "123456789012345678901234567890123456789012345678901"
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

        profile.fullname = ""
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

        profile.fullname = "Billy Bob"
        profile.save()

        #Test Address1
        profile.address1 = "123456789012345678901234567890123456789012345678901123456789012345678901234567890123456789012345678901"
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

        profile.address1 = ""
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

        profile.address1 = "123 Street"
        profile.save()

        #Test Address2

        profile.address2 = "123456789012345678901234567890123456789012345678901123456789012345678901234567890123456789012345678901"
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

        profile.address2 = ""
        profile.save()

        #Test City
        profile.city = "123456789012345678901234567890123456789012345678901123456789012345678901234567890123456789012345678901"
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

        profile.city = ""
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

        profile.city = "Houston"
        profile.save()

        #Test State
        profile.state = "AA"
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

        profile.state = "TX"
        profile.save()

        #Test Zip Codes
        profile.zipcode = ""
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)
        
        profile.zipcode = "123456789"
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, True)

        profile.zipcode = "123"
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

        profile.zipcode = "123456789101112"
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

        profile.zipcode = "12345678"
        profile.save()
        profile.validate_profile()
        self.assertEqual(profile.validated, False)

    def test_login(self):
        user = User.objects.create_user(username="bobby", password="PAZZWERD")
        self.assertTrue(self.client.login(username="bobby", password="PAZZWERD"))
        
