from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('text_to_speech', views.text_to_speech, name='text_to_speech'),
]
