from rest_framework import serializers
from .models import Post, PostComment


class PostSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()

    def get_username(self, obj):
        return obj.user.username


    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'user', 'username', 'created_at', 'updated_at',)
        read_only_fields = ('user', )


class PostCommentSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()

    def get_username(self, obj):
        return obj.user.username


    class Meta:
        model = PostComment
        fields = ('id', 'post', 'user', 'username', 'content',  'created_at', 'updated_at', )
        read_only_fields = ('post', 'user', )