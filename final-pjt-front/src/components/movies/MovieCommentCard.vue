<template>
  <div>
    <h4>MovieCommentCard.vue</h4>
    <!-- {{ comment }} -->
    <div :id="'movie-comment'+comment.id">
      점수 : {{ comment.score }}| {{ comment.username }}| {{ comment.comment }}
    </div>
    <div class="dropdown moviecomment-dropdown d-inline">
      <button class="btn moviecomment-dropdown-button" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></button>
      <div class="dropdown-menu">
        <button 
          class="btn dropdown-item moviecomment-update-button"
        >
          수정
        </button>
        <button 
          v-if="loginUsername === comment.username"
          class="btn moviecomment-delete-button dropdown-item" 
          @click="deleteComment"
          >
          삭제
        </button>
      </div>       
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieCommentCard',
  props: {
    comment: {
      type: Object,
    },
    movieId: {
      type: Number,
    }
  },
  computed: {
    ...mapState(['loginUsername'])
  },
  methods: {
    deleteComment: function () {
      this.$store.dispatch('deleteMovieComment', {movieId: this.movieId, commentId: this.comment.id})
    }
  }

}
</script>

<style>
.moviecomment-dropdown-button {
  color: aliceblue;
}
.moviecomment-update-button {
  background-color: aliceblue;
  color: black;
}
.moviecomment-delete-button {
  background-color: aliceblue;
  color: black;
}
.dropdown-item {
  width: 70px;
}

</style>