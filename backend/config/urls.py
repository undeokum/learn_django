from django.contrib import admin
from django.urls import path
from .views import hello_api

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/hello/", hello_api),
]