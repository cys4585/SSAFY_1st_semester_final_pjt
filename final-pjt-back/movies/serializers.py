from rest_framework import serializers
from .models import Movie, MovieComment

class MovieSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = '__all__'


class MovieCommentSerializer(serializers.ModelSerializer):
    # SerializerMethodField 사용 -> username
    username = serializers.SerializerMethodField()

    def get_username(self, obj):
        return obj.user.username

    class Meta:
        model = MovieComment
        fields = ('id', 'comment', 'movie', 'user', 'username', 'created_at', 'updated_at',)
        read_only_fields = ('movie', 'user', )