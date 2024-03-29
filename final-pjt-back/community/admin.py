from django.contrib import admin
from .models import PostComment, Post

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', )


class PostCommentAdmin(admin.ModelAdmin):
    list_display = ('content',)

admin.site.register(PostComment, PostCommentAdmin)
admin.site.register(Post, PostAdmin)
