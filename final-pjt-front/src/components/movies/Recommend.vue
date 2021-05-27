<template>
  <div class="container">
    <br>
      <h2 class="recommend-h2-title">카드 한장을 골라보세요</h2>

    <div class="recommend-carddeck">
      <!-- 카드1 -->  
      <button 
        @click="getRecommendedMovieFromServer" class="btn recommend-card" 
        data-bs-toggle="modal" data-bs-target="#exampleModal"
      >
        <img src="./tarot.jpg" class="recommend-tarot" alt="">
      </button>
      <!-- 카드2 -->
      <button 
        @click="getRecommendedMovieFromServer" class="btn recommend-card"
        data-bs-toggle="modal" data-bs-target="#exampleModal"
      >
        <img src="./tarot.jpg" class="recommend-tarot" alt="">
      </button>
      <!-- 카드3 -->
      <button 
        @click="getRecommendedMovieFromServer" class="btn recommend-card" 
        data-bs-toggle="modal" data-bs-target="#exampleModal"
      >
        <img src="./tarot.jpg" class="recommend-tarot" alt="">
      </button>
      <!-- 카드4 -->
      <button 
        @click="getRecommendedMovieFromServer" class="btn recommend-card" 
        data-bs-toggle="modal" data-bs-target="#exampleModal"
      >
        <img src="./tarot.jpg" class="recommend-tarot" alt="">
      </button>
      <!-- 카드5 -->
      <button 
        @click="getRecommendedMovieFromServer" class="btn recommend-card" 
        data-bs-toggle="modal" data-bs-target="#exampleModal"
      >
        <img src="./tarot.jpg" class="recommend-tarot" alt="">
      </button>   
    </div>
    <div class="modal fade recommend-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
        
          <div class="modal-header recommend-modal-background">
            <h5 class="modal-title recommend-modal-title" id="exampleModalLabel">이 영화를 추천합니다!</h5>
            <button type="button" class="btn-close recommend-modal-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body recommend-modal-body">
            <img :src="srcUrl" class="recommend-poster" alt="recommend" />
            <div>
              <p id="recommendmovie-title">{{movie.title}}</p>
              <p>개봉일: {{movie.release_date}}</p>
              <p>평점: {{movie.vote_average}}</p>
              <p>인기: {{movie.popularity}}</p>
              <p>투표수: {{movie.vote_count}}</p>
            </div>
          </div>

          <div class="modal-footer">
            <button 
              class="btn recommend-movie-detail-button" 
              @click="goMovieDetail(movie.id)" 
              data-bs-dismiss="modal"
            >
              더보기
            </button>
            <button 
              type="button" id="submitButton"
              class="btn movierecommend-button" data-bs-dismiss="modal"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Recommend',
  methods: {
    ...mapActions(['getRecommendedMovieFromServer', 'goMovieDetail']),
  },
  computed: {
    movie: function () {
      return this.$store.state.recommendedMovie
    },
    srcUrl: function () {
      // console.log(this.movie.poster_path)
      return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
    }
  },
}
</script>

<style>
.recommend-h2-title {
  color: rgb(245, 181, 131);
  margin-left: 40%;
  font-size: 25px;
}
.recommend-modal {
  margin-bottom: 100px;
}
.recommend-modal-title {
  display: inline;
  margin-left: 30%;
  color: black;
  
}
.recommend-modal-body {
 display: flex;
}
/* .recommend-modal-close {
  display: inline-block;
} */
.recommend-poster {
  display: inline-block;
  border: solid rgba(206, 232, 255, 0.603);
  border-width: 1px;
  width: auto; height: auto;
  max-width: 300px;
  max-height: 300px;
  margin-right: 20px;
}
.recommend-tarot {
  width: auto; height: auto;
  max-width: 500px;
  max-height: 500px;
  border: solid 1px rgb(245, 181, 131);
  border-radius: 10px;
}
.movierecommend-button {
  color: black;
  border: solid 1px black;
}
.recommend-movie-detail-button {
  color: black;
  border: solid 1px rgb(240, 149, 80);
}
#recommendmovie-title {
  font-size: 25px;
  color: black;
}
/* .recommend-modal-background {
  background-color: 
} */


/* 타로카드 CSS */

.recommend-carddeck {
  position: relative;
  margin-top: 30px;
  margin-bottom: 800px;
  margin-left: 500px;
}

.recommend-card {
  margin: auto;
  position: absolute;
  top: 0;
  left:0;
  display: block;
  justify-content: center;
  width: 200px;
  height: 300px;
  border-radius: 8px;
  transform-origin: bottom;
  transition: all 0.3s ease-in;
}

/* .recommend-carddeck .recommend-card:nth-child(odd) {
  background: blueviolet;

} */

.recommend-carddeck .recommend-card {
  transition: transform 0.5s ease;
}


.recommend-carddeck .recommend-card:nth-child(1) {
  transform: translate(-2px,2px);
}

.recommend-carddeck .recommend-card:nth-child(2) {
  transform: translate(-6px,6px);
}

.recommend-carddeck .recommend-card:nth-child(3) {
  transform: translate(-10px,10px);
}
.recommend-carddeck .recommend-card:nth-child(4) {
  transform: translate(-14px,14px);
}

.recommend-carddeck .recommend-card:nth-child(5) {
  transform: translate(-18px,18px);
}

.recommend-carddeck .recommend-card:nth-child(6) {
  transform: translate(-22px,22px);
}

.recommend-carddeck .recommend-card:nth-child(7) {
  transform: translate(-26x,26px);
}

.recommend-carddeck .recommend-card:nth-child(8) {
  transform: translate(-30px,30px);
}


.recommend-carddeck:hover .recommend-card:nth-child(8) {
  transform: rotate(45deg);
}

.recommend-carddeck:hover .recommend-card:nth-child(7) {
  transform: rotate(35deg);
}
  
.recommend-carddeck:hover .recommend-card:nth-child(6) {
  transform: rotate(25deg);
}
  

.recommend-carddeck:hover .recommend-card:nth-child(5) {
  transform: rotate(15deg);
}
  

.recommend-carddeck:hover .recommend-card:nth-child(4) {
  transform: rotate(5deg);
}
  

.recommend-carddeck:hover .recommend-card:nth-child(3) {
  transform: rotate(-5deg);
}
  

.recommend-carddeck:hover .recommend-card:nth-child(2) {
  transform: rotate(-15deg);
}

.recommend-carddeck:hover .recommend-card:nth-child(1) {
  transform: rotate(-25deg);
}
  
  
.recommend-carddeck .recommend-card:hover {
  z-index: 1;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  cursor: pointer;
}
</style>