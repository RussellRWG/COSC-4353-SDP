from django.shortcuts import render, HttpResponse

# Create your views here.
from rest_framework import viewsets
from rest_framework import status
from .serializer import FuelFormSerializer
from .models import Fuel

class FuelFormView(viewsets.ModelViewSet):
    serializer_class = FuelFormSerializer

    def create(self, request, *args, **kwargs):
        print(request.data)
        try:
            fuel = Fuel.objects.create(gallons=request.data["gallons"],
                                delivery_address=request.data["delivery_address"],
                                delivery_date=request.data["delivery_date"],
                                suggested_price=request.data["suggested_price"],
                                total_due=request.data["total_due"])
            print("Fuel:",fuel)
            data = Fuel.objects.all()
            print(data.values())
            return HttpResponse(status=status.HTTP_201_CREATED)
        except:
            return HttpResponse(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

