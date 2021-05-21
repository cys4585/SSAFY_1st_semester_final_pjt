<template>
  <div>
    <img :src="srcUrl" alt="poster_path">
    <p>{{ movie.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object
    },
  },
  computed: {
    srcUrl: function () {
      console.log(this.movie.poster_path)
      return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
    }
  }
}
</script>

<style>

</style>