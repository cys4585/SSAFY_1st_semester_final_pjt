from django.contrib import admin
from .models import Comment, Review

# Register your models here.
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('title', 'movie_title', )


class CommentAdmin(admin.ModelAdmin):
    list_display = ('content',)

admin.site.register(Comment, CommentAdmin)
admin.site.register(Review, ReviewAdmin)
