from django.contrib import admin
from .models import Comment, Post

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'movie_title', )


class CommentAdmin(admin.ModelAdmin):
    list_display = ('content',)

admin.site.register(Comment, CommentAdmin)
admin.site.register(Post, PostAdmin)
