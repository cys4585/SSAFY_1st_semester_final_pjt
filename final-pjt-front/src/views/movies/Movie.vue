<template>
<div>
  <h1>Movie Page</h1>
  <MovieList/>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MovieList from '@/components/MovieList.vue'

export default {
  name: 'Movie',
  components: {
    MovieList,
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