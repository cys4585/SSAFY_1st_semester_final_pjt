<template>
  <div>
    <h3>MovieCommentForm.vue</h3>
    <textarea v-model="comment" @keyup.enter="createMovieComment" placeholder="댓글 입력란"></textarea>
    <button @click="createMovieComment" class="btn btn-success">작성</button>
  </div>
</template>

<script>
export default {
  name: 'MovieCommentForm',
  data: function () {
    return {
      comment: null,
    }
  },
  props: {
    movieId: {
      type: Number
    }
  },
  methods: {
    createMovieComment: function () {
      this.$store.dispatch('createMovieComment', { movieId: this.movieId, comment: this.comment })
      this.comment = ''
    }
  }
}
</script>

<style>

</style>