<template>
  <div>
    <h1>Movie Page</h1>
    
    <p>{{movies}}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Movie',
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