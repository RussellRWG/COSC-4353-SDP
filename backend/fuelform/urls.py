from django.urls import path

from .views import FuelFormView

urlpatterns = [
    path('', FuelFormView.as_view({"post":"create"})),
]
