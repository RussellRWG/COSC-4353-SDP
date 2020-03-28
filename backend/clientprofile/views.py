from django.shortcuts import render
from rest_framework import viewsets, permissions, response
from .serializers import ClientProfileSerializer
from .models import ClientProfile

# Create your views here.

class ClientProfileView(viewsets.ModelViewSet):
    #queryset = ClientProfile.objects.all()
    #queryset = ClientProfile.objects.filter(user = request.user)
    serializer_class = ClientProfileSerializer
    #permission_classes = (permissions.IsAuthenticated,)
    def get_queryset(self):
        profile = ClientProfile.objects.filter(user = self.request.user)
        if profile.exists():
            return profile
        else:
            ClientProfile.objects.create(user=self.request.user)
            profile = ClientProfile.objects.filter(user = self.request.user)
            return profile
        #print (profile.values_list())
        #return profile

    def put(self, request):
        user = request.user
        data = request.data['state']
        print(data)
        profile = ClientProfile.objects.get(user = request.user)
        
        profile.fullname = data['fullname']
        profile.address1 = data['address1']
        profile.address2 = data['address2']
        profile.city = data['city']
        profile.state = data['state']
        profile.zipcode = data['zipcode']
        

        errors = profile.validate_profile()
        print(errors)
        print(profile.validated)

        if (profile.validated == True):
            profile.save()
            
        return response.Response(data=errors)
