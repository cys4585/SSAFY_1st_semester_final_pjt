<template>
  <div class="container moviedetail">
    <!-- 포스터 -->
    <div class="movieposter">
      <!-- <h2>MovieDetail.vue</h2> -->
      <img :src="srcUrl" alt="movieposter">
    </div>

    <div class="moviecontent">
      <!-- 제목, 줄거리 -->
      <div>
        <button 
          class="btn moviedetail-unlike-button" @click="movieLike"
          v-if="isLike"
          >
          <i class="far fa-heart"></i>
        </button>
        <button 
          class="btn btn moviedetail-like-button" @click="movieLike"
          v-else
          >
          <i class="fas fa-heart heart-color"></i>
        </button>
      </div>
        <!-- <span class="content-margin">{{ likeCount }}</span> -->
      <div>
        <h3 class="moviedetail-title">{{ movie.title }}</h3>
      </div>
      <div>
        <hr class="movieoverview-line">
        <br>
        <p>{{ movie.overview }}</p>
        <br>
        <hr class="movieoverview-line">
      </div>

      <!-- 댓글 -->
      <div>
        <MovieCommentForm :movieId="movie.id" />
        <MovieCommentList :movieId="movie.id" />
      </div>
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
    // console.log('detail.vue created')
    // console.log(this.$route.params)
    this.$store.dispatch('getMovieFromServer', Number(this.$route.params.movieId))
    this.$store.dispatch('getMovieLikeStatusFromServer', Number(this.$route.params.movieId))
  },
  computed: {
    movie: function () {
      return this.$store.state.movie
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
.moviedetail {
  display: flex;
}
.moviedetail-title {
  display: inline;
}

.movieposter {
  display: inline-block;
  margin-top: 50px;
  margin-right: 100px;
  margin-bottom: 100px;
}

.moviecontent {
  margin-top: 50px;
}

.movieoverview-line {
  color: white;
}
.moviedetail-like-button {
  background-color: black;
  color: red;
  font-size: 40px;
}
.moviedetail-unlike-button {
  color:red;
  font-size: 40px;
}

</style>