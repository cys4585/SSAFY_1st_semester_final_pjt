from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse

from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Movie, MovieComment
from .serializers import MovieSerializer, MovieCommentSerializer
from rest_framework.decorators import api_view

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication


@api_view(['GET'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def movie_list(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def create_comment(request, movie_id):
    if request.method == 'GET':
        comments = MovieComment.objects.filter(movie_id=movie_id)
        serializer = MovieCommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else: 
        movie = get_object_or_404(Movie, pk=movie_id)
        serializer = MovieCommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user, movie=movie)
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def like(request, movie_id):
    movie = get_object_or_404(Movie, pk=movie_id)
    if request.method == 'GET':
        if movie.like_users.filter(pk=request.user.pk).exists():
            liked = True
        else:
            liked = False
    else:
        if movie.like_users.filter(pk=request.user.pk).exists():
            movie.like_users.remove(request.user)
            liked = False
        else:
            movie.like_users.add(request.user)
            liked = True
    like_status = {
        'liked': liked,
        'count': movie.like_users.count(),
    }
    return JsonResponse(data=like_status)


@api_view(['PUT', 'DELETE'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def update_delete_comment(request, movie_id, comment_id):
    if not request.user.movie_comments.filter(pk=comment_id).exists():
        return Response({'detail': '권한이 없습니다.'}, status=status.HTTP_403_FORBIDDEN)

    if request.method == 'PUT':
        pass
    else:
        comment = get_object_or_404(MovieComment, pk=comment_id)
        comment.delete()
        return Response({'delete': f'{comment_id}번 댓글 삭제'}, status=status.HTTP_204_NO_CONTENT)