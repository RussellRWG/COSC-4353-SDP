from rest_framework import serializers
from .models import Fuel


class FuelFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fuel

        fields = ("gallons", "delivery_address", "delivery_date", "suggested_price", "total_due")


