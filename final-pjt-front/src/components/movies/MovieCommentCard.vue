<template>
  <tr :id="'movie-comment'+comment.id">
    <th scope="row">{{ comment.score }}</th> 
    <th>{{ comment.username }}</th> 
    <th class="comment-update-delete-button">{{ comment.comment }}</th>
    <th>
      <div v-if="loginUsername === comment.username" class="dropdown moviecomment-dropdown d-inline">
        <button class="btn moviecomment-dropdown-button" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></button>
        <span class="dropdown-menu">
          <button 
            type="button" 
            class="btn dropdown-item moviecomment-update-button" 
            data-bs-toggle="modal" 
            :data-bs-target="'#movieCommentUpdateModal'+comment.id" 
            data-bs-whatever="@mdo"
            @click="openEditForm"
            >
              수정
            </button>
          <button 
            class="btn moviecomment-delete-button dropdown-item" 
            @click="deleteComment"
            >
            삭제
          </button>
        </span>    
        <MovieCommentUpdateForm 
          :movieId="Number(this.$route.params.movieId)"
          :commentId="comment.id"
        />   
      </div>
    </th>
  </tr>
  
</template>

<script>
import { mapState } from 'vuex'
import MovieCommentUpdateForm from '@/components/movies/MovieCommentUpdateForm.vue'

export default {
  name: 'MovieCommentCard',
  components: {
    MovieCommentUpdateForm,
  },
  props: {
    comment: {
      type: Object,
    },
    movieId: {
      type: Number,
    }
  },
  created: function () {
    console.log(this.comment.id)
  },
  computed: {
    ...mapState(['loginUsername']),
  },
  methods: {
    deleteComment: function () {
      this.$store.dispatch('deleteMovieComment', {movieId: this.movieId, commentId: this.comment.id})
    },
    openEditForm: function () {
      console.log('open Edit Form')
      console.log(this.comment.id)
      this.$store.dispatch('openMovieCommentEditForm', this.comment)
    },
  }

}
</script>

<style>
.moviecomment-dropdown-button {
  color: rgb(224, 224, 224);

}
.moviecomment-update-button {
  background-color: aliceblue;
  color: black;

}
.moviecomment-delete-button {
  background-color: aliceblue;
  color: black;
}
.dropdown-menu {
  width: 80px;
}

.dropdown-item {
  width: 30px;
}
.dropdown-menu {
  width: 32px;
}
</style>