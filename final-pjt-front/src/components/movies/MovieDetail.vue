<template>
  <div class="container">
    <div class="movie">
      <h2>MovieDetail.vue</h2>
      <img :src="srcUrl" alt="movieposter" id="movieposter">
      <button 
        class="btn btn-primary" @click="movieLike"
        v-if="isLike"
        >
        <i class="far fa-heart"></i>
        좋아요 취소
      </button>
      <button 
        class="btn btn-primary" @click="movieLike"
        v-else
        >
        <i class="fas fa-heart"></i>
        좋아요
      </button>
      <p class="movie-margin">좋아요 수 : {{ likeCount }}</p>
      <h3 class="movie-margin">제목: {{ movie.title }}</h3>
      <p class="movie-margin">줄거리: {{ movie.overview }}</p>
    </div>
    <div>
      <MovieCommentForm :movieId="movie.id" />
      <MovieCommentList :movieId="movie.id" />
    </div>
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
    srcUrl: function () {
      // console.log(this.movie.poster_path)
      return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
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
.movie {
  width: 50rem;
}

#movieposter {
  display: inline-block;
  margin-right: 50px;
}

.movie-margin {
  display: inline-block;
  margin-right: 50px;
}
</style>