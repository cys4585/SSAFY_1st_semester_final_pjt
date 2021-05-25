<template>
  <div>
    <h4>MovieCommentCard.vue</h4>
    <!-- {{ comment }} -->
    점수 : {{ comment.score }}| {{ comment.username }}| {{ comment.comment }}
    <!-- <button class="btn btn-warning" @click="">수정</button> -->
    <button 
      v-if="loginUsername === comment.username"
      class="btn moviecomment-delete-button" 
      @click="deleteComment"
      >
      <i class="fas fa-trash-alt"></i>
    </button>
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
.moviecomment-delete-button {
  background-color: black;
  color: aliceblue;
}
</style>