<template>
  <div>
    <h2>MovieList.vue</h2>
    <section>
      <b-card-group row row-cols-1 row-cols-md-6 g-4>
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