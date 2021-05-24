<template>
  <div col class="center">
    <b-card @click="goMovieDetail(movie.id)" id="movie-card">
      <!-- <h3>MovieCard.vue</h3> -->
      <img :src="srcUrl" alt="poster_path" class="w-100">
      <p>{{ movie.title }}</p>
    </b-card>
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
.center {
   text-align: center;
}

#movie-card {
  /* border: solid; */
  max-width: 18rem;
  max-height: 30rem;
  background-color: black;
  cursor: pointer;
}
</style>