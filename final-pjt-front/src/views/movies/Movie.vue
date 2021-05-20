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
    <h2>test</h2>
  </section>
</div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Movie',
  components: {
    // 2. 등록하기
    MovieCard
  },
  methods: {
    ...mapActions(['getMoviesFromServer']),
  },
  computed: {
    ...mapState(['movies'])
  },
  created: function () {
    this.getMoviesFromServer()
  }
}
</script>

<style>

</style>