<template>
  <div>
    <h2>MovieDetail.vue</h2>
    {{ movie }}
    <div>
      <MovieCommentForm/>
      <MovieCommentList/>
    </div>
  </div>
</template>

<script>
import MovieCommentList from '@/components/movies/MovieCommentList.vue'
import MovieCommentForm from '@/components/movies/MovieCommentForm.vue'

export default {
  name: 'MovieDetail',
  components: {
    MovieCommentList,
    MovieCommentForm,
  },
  computed: {
    movie: function () {
      return this.$store.getters.getMovieById(Number(this.$route.params.movieId))
    }
  },
}
</script>

<style>

</style>