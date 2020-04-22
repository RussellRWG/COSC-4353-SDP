from django.shortcuts import render, HttpResponse
from rest_framework import viewsets, permissions, response
from django.contrib.auth.models import User

# Create your views here.
from rest_framework import viewsets
from rest_framework import status
from .serializer import FuelFormSerializer
from .models import Fuel
from clientprofile.models import ClientProfile

class FuelFormView(viewsets.ModelViewSet):
    serializer_class = FuelFormSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        profile = Fuel.objects.filter(user = self.request.user)
        return profile

    def create(self, request, *args, **kwargs):
        print(request.data)
        

        try:
            user = request.user
            gallons = request.data["gallons"]
            delivery_address = request.data["delivery_address"]
            delivery_date = request.data["delivery_date"]
            suggested_price = request.data["suggested_price"]
            total_due = request.data["total_due"]
            
            fuel = Fuel.objects.create(
                user=user,
                gallons=gallons,
                delivery_address=delivery_address,
                delivery_date=delivery_date,
                suggested_price=suggested_price,
                total_due=total_due
                )

            #fuel.save()
            
            
            print("Fuel: ", fuel)
            data = Fuel.objects.all()
            print(data.values())
            return HttpResponse(status=status.HTTP_201_CREATED)
        except Exception as e:
            print(e)
            return HttpResponse(status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class CalcPriceFuelForm(viewsets.ViewSet):
    def create(self, request, *args, **kwargs):
        print(request.user)
        print(request.data)

        gallons = int(request.data["gallons"])
        month = int(request.data["month"])
        client = ClientProfile.objects.get(user=request.user)
        location = client.state
        profile = Fuel.objects.filter(user=request.user)

        print("Gallons:",gallons)
        print("Month:",month)
        print("Location:",location)
        print("Prev:",len(profile))

        profit_factor = 0.1
        month_factor = 0.03
        prev_factor = 0.0
        location_factor = 0.04
        gallons_factor = 0.03
        may = 4
        september = 8

        if location =="TX":
            location_factor = 0.02


        if len(profile)!=0:
            prev_factor = -0.01

        if gallons > 1000:
            gallons_factor = 0.02

        if month> may and month < september:
            month_factor = 0.04

        total_factors = 1.50+(profit_factor+location_factor+month_factor+prev_factor+gallons_factor)*1.50
        total_price = gallons * total_factors
        price = {}
        price["price"] = total_factors
        price["total_price"] = total_price


        return response.Response(data=price)