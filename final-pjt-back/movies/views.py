from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Movie
from .serializers import MovieSerializer
from rest_framework.decorators import api_view


@api_view(['GET'])
def movie_list(request):
    movies = Movie.objects.all()
    # 언제 instance고 언제 data ?
    # serializer = MovieSerializer(instance=Movie, many=True)
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data, status=status.HTTP_201_CREATED)