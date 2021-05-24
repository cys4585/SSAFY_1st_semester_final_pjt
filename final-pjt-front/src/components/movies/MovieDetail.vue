<template>
  <div>
    <h2>MovieDetail.vue</h2>
    <h3>{{ movie.title }}</h3>
    <p>{{ movie }}</p>
    <button 
      class="btn btn-primary" @click="movieLike"
      v-if="isLike"
      >
      좋아요 취소
    </button>
    <button 
      class="btn btn-primary" @click="movieLike"
      v-else
      >
      좋아요
    </button>
    <p>좋아요 수 : {{ likeCount }}</p>
    <MovieCommentForm :movieId="movie.id" />
    <MovieCommentList :movieId="movie.id" />
  </div>
</template>

<script>
import MovieCommentList from '@/components/movies/MovieCommentList.vue'
import MovieCommentForm from '@/components/movies/MovieCommentForm.vue'

export default {
  name: 'MovieDetail',
  components: {
    MovieCommentList,
    MovieCommentForm,
  },
  created: function () {
    this.$store.dispatch('getLikeStatusFromServer', this.movie.id)
  },
  computed: {
    movie: function () {
      return this.$store.getters.getMovieById(Number(this.$route.params.movieId))
    },
    isLike: function () {
      return this.$store.state.movieLikeStatus
    },
    likeCount: function () {
      return this.$store.state.movieLikeCount
    },
  },
  methods: {
    movieLike: function () {
      this.$store.dispatch('movieLike', this.movie.id)
    }
  }
}
</script>

<style>

</style>