from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import ClientProfileSerializer
from .models import ClientProfile

# Create your views here.

class ClientProfileView(viewsets.ModelViewSet):
    queryset = ClientProfile.objects.all()
    serializer_class = ClientProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)
