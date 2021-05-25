from django.shortcuts import get_object_or_404, render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Post, PostComment
from .serializers import PostSerializer, PostCommentSerializer


# Create your views here.
@api_view(['GET', 'POST'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def post_list_create(request):
    if request.method == 'GET':
        post_list = Post.objects.all()
        serializer = PostSerializer(post_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['DELETE', 'PUT'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def update_delete_post(request, post_id):
    if not request.user.posts.filter(pk=post_id).exists():
        return Response({'detail': '권한이 없습니다.'}, status=status.HTTP_403_FORBIDDEN)

    if request.method == 'PUT':
        post = get_object_or_404(Post, pk=post_id)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
    else: 
        post = get_object_or_404(Post, pk=post_id)
        post.delete()
        return Response({'delete': f'{post_id}번 post 삭제'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def comment_list_create(request, post_id):
    if request.method == 'GET':
        comments = PostComment.objects.filter(post_id=post_id)
        serializer = PostCommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        post = get_object_or_404(Post, pk=post_id)
        serializer = PostCommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user, post=post)
            return Response(serializer.data, status=status.HTTP_201_CREATED)