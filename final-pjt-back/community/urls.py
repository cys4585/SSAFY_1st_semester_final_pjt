from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list_create),
    path('<int:post_id>/', views.update_delete_post),
    path('<int:post_id>/comment/', views.comment_list_create),
]
