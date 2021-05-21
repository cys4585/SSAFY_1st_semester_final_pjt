<template>
  <div @click="goMovieDetail(movie.id)">
    <h3>MovieCard.vue</h3>
    <img :src="srcUrl" alt="poster_path">
    <p>{{ movie.title }}</p>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object
    },
  },
  computed: {
    srcUrl: function () {
      // console.log(this.movie.poster_path)
      return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
    }
  },
  methods: {
    ...mapActions(['goMovieDetail']),
  }
}
</script>

<style>

</style>