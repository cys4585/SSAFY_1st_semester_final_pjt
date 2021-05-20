<template>
<div>
  <h1>Movie Page</h1>
  <section>
    <b-card-group row row-cols-1 row-cols-md-2 g-4>
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
import MovieCard from '@/components/MovieCard.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Movie',
  components: {
    MovieCard
  },
  methods: {
    ...mapActions(['getMoviesFromServer', 'checkLogin']),
  },
  computed: {
    ...mapState(['movies'])
  },
  created: function () {
    this.checkLogin()
    this.getMoviesFromServer()
  }
}
</script>

<style>

</style>