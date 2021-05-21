from django.urls import path
from . import views

urlpatterns = [
    # get : get postlist / post : create post
    path('', views.post_list_create),
]
