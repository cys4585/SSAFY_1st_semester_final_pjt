<template>
  <div class="container moviedetail">
    <div class="moviedetail-margin">
      <!-- 포스터 -->
      <div class="movieposter">
        <img :src="srcUrl" alt="movieposter" class="movieposter-img">
      </div>

      <!-- 제목 -->
      <div class="moviecontent d-inline">
        <div>
          <h3 class="moviedetail-title">{{ movie.title }}</h3>
        </div>

        <!-- 좋아요 -->
        <span class="moviedetail-like">
          <button class="btn moviedetail-like-button" id="like-button" @click="movieLike">
            <i v-if="isLike" class="fas fa-heart"></i>
            <i v-else class="far fa-heart"></i>
          </button>
          <span class="content-margin moviedetail-likecount">좋아요{{ likeCount }}개</span>
        </span>

        <!-- 줄거리 -->
        <hr class="movieoverview-line">
        <div class="movieoverview">
          <p>{{ movie.overview }}</p>
        </div>

        <!-- 댓글 -->
        <div>
          <button 
            type="button" 
            class="btn moviedetail-average-button" 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal" 
            data-bs-whatever="@mdo"
            >
              평점등록하기
            </button>

          <MovieCommentForm 
            :movieId="Number(this.$route.params.movieId)"
          />
          <MovieCommentList :movieId="Number(this.$route.params.movieId)" />
        </div>
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
  /* display: flex; */
  border: 1px solid;
  border-radius: 10px;
  border-color: rgb(245, 181, 131);
  margin-bottom: 500px;
  margin-top: 40px;
}
.moviedetail-margin {
  margin: 20px;
  margin-bottom: 100px;
}
.moviedetail-title {
  display: inline-block;
  font-size: 40px;
  border-color: rgb(245, 181, 131);
  margin-right: 10px;
  margin-bottom: 10px;
  color: rgb(224, 224, 224);
  /* color: rgb(245, 181, 131); */
}
.movieposter {
  height: 20%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.movieposter-img {
  border: solid rgba(206, 232, 255, 0.603);
  border-width: 1px;
  width: auto; height: auto;
  max-width: 500px;
  max-height: 500px;
}
.moviecontent {
  margin-top: 10px;
}
.movieoverview {
  color: rgb(224, 224, 224);
  margin-bottom: 50px;
  letter-spacing: 0.2px;
  word-spacing: 0.5px;
  line-height: 200%;
}
.movieoverview-line {
  color: rgb(245, 181, 131);
  margin-top: 0;
  border: solid 1px rgb(255, 255, 255);
}
.moviedetail-like {
  margin-bottom: 10px;
}
.moviedetail-like-button {
  color:red;
  font-size: 30px;
  margin-bottom: 10px;
  padding: 0;
}
.moviedetail-likecount {
  margin-bottom: 10px;
  font-size: 20px;
}
.moviedetail-average-button {
  float: right;
  color: rgb(245, 181, 131);
  border-color: rgb(245, 181, 131);
}
</style>