from django.urls import path
from . import views

urlpatterns = [
    # get post
    path('', views.post_list_create),
    # delete put
    path('<int:post_id>/', views.update_delete_post),
    # get post
    path('<int:post_id>/comment/', views.comment_list_create),
    # get post
    path('<int:post_id>/likes/', views.like),
    # delete put
    path('<int:post_id>/comment/<int:comment_id>/', views.update_delete_comment),
]
