<template>
<div>
  <!-- <h1>Movie Page</h1>
  |
  <router-link :to="{ name: 'MovieList' }">MovieList</router-link> |
  <router-link :to="{ name: 'Recommend' }">Recommend</router-link> | -->
  <router-view/>

</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Movie',
  components: {
  },
  methods: {
    ...mapActions(['getMoviesFromServer', 'checkLogin']),
  },
  created: function () {
    this.checkLogin()
    if (! this.$store.state.movies) {
      this.getMoviesFromServer()
    }
  }
}
</script>

<style>

</style>