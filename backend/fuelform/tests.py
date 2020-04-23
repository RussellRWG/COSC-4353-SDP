from django.test import TestCase, Client
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient, APITestCase
from rest_framework import status
from clientprofile.models import ClientProfile
from django.contrib.auth.models import User
from rest_framework.test import force_authenticate
# Create your tests here.

# class SmokeTest(TestCase):
#
#     def test_bad_maths(self):
#         self.assertEqual(1 + 1, 3)


#client = APIClient()
#client.post(path="/",data={"gallons":12.4, "delivery_address":"4418","delivery_date":"2020-01-01","suggested_price":1.99, "total_due":24.676}, format="json")

# python manage.py test fuelform

class FuelFormTest(APITestCase):

    def test_create_fuel_data(self):
        url = "http://127.0.0.1:8000/api/fuelform/"
        data = {"gallons":12.4, "delivery_address":"4418","delivery_date":"2020-01-01","suggested_price":1.99, "total_due":24.676}
        response = self.client.post(path=url, data=data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_wrong_post_data(self):
        url = "http://127.0.0.1:8000/api/fuelform/"
        data = {}
        response = self.client.post(path=url, data=data, format="json")
        self.assertEqual(response.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR)

    def test_wrong_method(self):
        url = "http://127.0.0.1:8000/api/fuelform/"
        data = {"gallons":12.4, "delivery_address":"4418","delivery_date":"2020-01-01","suggested_price":1.99, "total_due":24.676}
        response = self.client.get(path=url)
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_post_path_request(self):
        url = "http://127.0.0.1:8000/api/fuelform"
        request= self.client.post(path=url)
        self.assertEqual(request.status_code, status.HTTP_301_MOVED_PERMANENTLY)

    def test_price(self):
        user = User.objects.create_user(username="bobby", password="PAZZWERD99")
        client = APIClient()
        response = client.login(username="bobby", password="PAZZWERD99")
        client.force_authenticate(user=user)
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
        url = "http://127.0.0.1:8000/api/price/"
        data = {"gallons":50, "month":3}
        response= client.post(path=url, data=data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_price_negative(self):
        user = User.objects.create_user(username="bobby", password="PAZZWERD99")
        client = APIClient()
        response = client.login(username="bobby", password="PAZZWERD99")
        client.force_authenticate(user=user)
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
        url = "http://127.0.0.1:8000/api/price/"
        data = {"gallons":-50, "month":-3}
        response= client.post(path=url, data=data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_price_check_result_spring(self):
        user = User.objects.create_user(username="bobby", password="PAZZWERD99")
        client = APIClient()
        response = client.login(username="bobby", password="PAZZWERD99")
        client.force_authenticate(user=user)
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
        url = "http://127.0.0.1:8000/api/price/"
        data = {"gallons":50, "month":3}
        response= client.post(path=url, data=data, format="json")
        dict = {'price':1.77, 'total_price':88.5}
        self.assertEqual(response.data, dict)

    def test_price_check_result_summer(self):
        user = User.objects.create_user(username="bobby", password="PAZZWERD99")
        client = APIClient()
        response = client.login(username="bobby", password="PAZZWERD99")
        client.force_authenticate(user=user)
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
        url = "http://127.0.0.1:8000/api/price/"
        data = {"gallons":50, "month":6}
        response= client.post(path=url, data=data, format="json")
        dict = {'price':1.7850000000000001, 'total_price':89.25}
        self.assertEqual(response.data, dict)

        def test_price_check_result_multiple(self):
            user = User.objects.create_user(username="bobby", password="PAZZWERD99")
            client = APIClient()
            response = client.login(username="bobby", password="PAZZWERD99")
            client.force_authenticate(user=user)
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
            Fuel.objects.create(
                user=user,
                gallons=7,
                delivery_address=profile.address1,
                delivery_date="03",
                suggested_price=80,
                total_due=9001
                )
            url = "http://127.0.0.1:8000/api/price/"
            data = {"gallons":50, "month":6}
            response= client.post(path=url, data=data, format="json")
            dict = {'price':1.7850000000000001, 'total_price':89.25}
            self.assertEqual(response.data, dict)
