from django.shortcuts import render, HttpResponse
from rest_framework import viewsets, permissions, response
from django.contrib.auth.models import User

# Create your views here.
from rest_framework import viewsets
from rest_framework import status
from .serializer import FuelFormSerializer
from .models import Fuel

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

