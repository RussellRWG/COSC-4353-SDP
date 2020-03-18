from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ClientProfileSerializer
from .models import ClientProfile

# Create your views here.

class ClientProfileView(viewsets.ModelViewSet):
    serializer_class = ClientProfileSerializer
    queryset = ClientProfile.objects.all()
