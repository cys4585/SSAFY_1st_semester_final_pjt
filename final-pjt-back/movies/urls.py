from django.urls import path
from . import views


urlpatterns = [
    path('', views.movie_list),
    path('<int:movie_id>/likes/', views.like),
    path('<int:movie_id>/comment/', views.create_comment),
    path('<int:movie_id>/comment/<int:comment_id>/', views.update_delete_comment),
]
