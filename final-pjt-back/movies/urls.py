from django.urls import path
from . import views


urlpatterns = [
    path('', views.movie_list),
    path('<int:movie_id>/', views.movie),
    path('<int:movie_id>/likes/', views.like),
    path('<int:movie_id>/comment/', views.comment_list_create),
    path('<int:movie_id>/comment/<int:comment_id>/', views.update_delete_comment),
    path('recommend/', views.recommend_movie),
]
