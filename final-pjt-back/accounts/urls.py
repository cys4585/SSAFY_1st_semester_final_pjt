from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('user/', views.signout),
    path('signup/', views.signup),
    path('api-token-auth/', obtain_jwt_token),
]
