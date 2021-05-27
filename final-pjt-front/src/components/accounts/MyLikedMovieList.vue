<template>
  <div>
    <h3>LikedMovieList.vue</h3>
    <section>
      <b-card-group row row-cols-2 row-cols-md-2 g-4>
        <MovieCard
          v-for="(movie, idx) in movies"
          :key="idx"
          :movie="movie"
        />
      </b-card-group>
    </section>
  </div>
</template>

<script>
import MovieCard from '@/components/movies/MovieCard.vue'

export default {
  name: 'LikeMovieList',
  components: {
    MovieCard,
  },
  created: function () {
    this.$store.dispatch('getLikedMovieListFromServer')
  },
  computed: {
    movies: function () {
      return this.$store.state.likedMovies
    }
  },
}
</script>

<style>

</style>