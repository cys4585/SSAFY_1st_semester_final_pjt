from django.shortcuts import get_list_or_404, render, get_object_or_404
from django.http import JsonResponse

from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Genre, Movie, MovieComment
from .serializers import MovieSerializer, MovieCommentSerializer
from rest_framework.decorators import api_view

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

import random


@api_view(['GET'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def movie_list(request):
    print(request.GET)
    print(type(request.GET))
    print(request.GET.get('filters'))
    print(type(request.GET.get('filters')))
    if request.GET.get('filters'):
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def comment_list_create(request, movie_id):
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


@api_view(['GET'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def recommend_movie(request):
    # 댓글을 남긴(평점을 매긴) 영화 기반
    if request.GET.get('base') == 'commented':
        # 댓글평점(score) 8점 이상을 준 comments 가져오기
        comments = MovieComment.objects.filter(user=request.user, score__gte=8)
        length = comments.count()
        # comment가 1개 이상 존재하면 -> 추천 
        if length:
            # comments를 남긴 영화 중에서 random 선택, 그 영화의 장르 목록 가져오기
            idx = random.randint(0, length - 1)
            genres = comments[idx].movie.genre_ids.all()
            # 장르가 같은 영화 중에서 
            # vote_average>=7.5 인 영화중에서 
            # random으로 영화 추천
            rec_movies = []
            for genre in genres:
                movies = genre.movie_set.filter(vote_average__gte=7.5)
                idx = random.randint(0, movies.count() - 1)
                rec_movies.append(movies[idx])

            idx = random.randint(0, len(rec_movies) - 1)
            if rec_movies:
                rec_movie = rec_movies[idx]
                serializer = MovieSerializer(rec_movie)
                print(type(serializer.data))
                return Response(serializer.data, status=status.HTTP_200_OK)
                
    return Response(status=status.HTTP_204_NO_CONTENT)