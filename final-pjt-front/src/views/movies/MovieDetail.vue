<template>
  <div>
    <h1>Movie Detail Page</h1>
    {{ movie }}
    <div>
      <MovieCommentList/>
      <MovieCommentForm/>
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
  data: function () {
    return {
    }
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