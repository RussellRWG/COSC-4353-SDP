from django.test import TestCase

from rest_framework.test import APIClient, APITestCase
from rest_framework import status
# Create your tests here.

# class SmokeTest(TestCase):
#
#     def test_bad_maths(self):
#         self.assertEqual(1 + 1, 3)


#client = APIClient()
#client.post(path="/",data={"gallons":12.4, "delivery_address":"4418","delivery_date":"2020-01-01","suggested_price":1.99, "total_due":24.676}, format="json")

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

