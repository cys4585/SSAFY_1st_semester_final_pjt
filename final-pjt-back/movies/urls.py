from django.urls import path
from . import views


urlpatterns = [
    # get
    path('', views.movie_list),
    # get
    path('<int:movie_id>/', views.movie),
    # get post
    path('<int:movie_id>/comment/', views.comment_list_create),
    # put delete
    path('<int:movie_id>/comment/<int:comment_id>/', views.update_delete_comment),
    # get post
    path('<int:movie_id>/likes/', views.like),
    # get
    path('recommend/', views.recommend_movie),
    # get
    path('liked/', views.liked_movies),
    # get
    path('commented/', views.commented_movies),
]
