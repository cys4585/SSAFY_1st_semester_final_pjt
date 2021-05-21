<template>
  <div>
    <h2>MovieList.vue</h2>
    <MovieCard
      v-for="(movie, idx) in movies"
      :key="idx"
      :movie="movie"
    />
  </div>
</template>

<script>
import MovieCard from '@/components/movies/MovieCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'MovieList',
  components: {
    MovieCard,
  },
  computed: {
    ...mapState(['movies']),
  },
}
</script>

<style>

</style>