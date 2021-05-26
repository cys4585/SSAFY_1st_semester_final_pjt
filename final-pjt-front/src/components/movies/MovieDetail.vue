<template>
  <div class="container moviedetail">
    <!-- 여기부턴 모달 테스트 구간 -->

    <div>
      <!-- <h2 class="moviedetail-title">영화 정보</h2> -->
    </div>
    <!-- 포스터 -->
    <div class="movieposter">
      <!-- <h2>MovieDetail.vue</h2> -->
      <img :src="srcUrl" alt="movieposter">
    </div>

    <div class="moviecontent">
      <!-- 제목, 줄거리 -->
      <div>
        <button class="btn moviedetail-like-button" id="like-button" @click="movieLike">
          <i v-if="isLike" class="fas fa-heart"></i>
          <i v-else class="far fa-heart"></i>
        </button>
        <span class="content-margin">{{ likeCount }}</span>
      </div>
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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">평점등록하기</button>

        <MovieCommentForm 
          :movieId="Number(this.$route.params.movieId)"
        />
        <MovieCommentList :movieId="Number(this.$route.params.movieId)" />
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
    // console.log('movie detail page is open', Number(this.$route.params.movieId))
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
      const likeButton = document.getElementById('like-button')
      const childTag = likeButton.children[0]
      const val = this.isLike ? 'far fa-heart' : 'fas fa-heart'
      childTag.setAttribute('class', val)
    }   
  }
}
</script>

<style>

.moviedetail {
  display: flex;
  border: solid;
  border-color: aliceblue;

}
.moviedetail-title {
  display: inline;
}

.movieposter {
  display: inline-block;
  border: solid rgba(206, 232, 255, 0.603);
  border-width: 1px;
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
  color:red;
  font-size: 40px;
}
</style>