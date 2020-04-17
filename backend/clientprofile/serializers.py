from rest_framework import serializers
from .models import ClientProfile

class ClientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientProfile
        #fields = ('__all__')
        fields = ('user', 'fullname', 'address1', 'address2', 'city', 'state', 'zipcode', 'validated')

