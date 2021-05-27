<template>
<div class="container">
  <br>
  <br>
    <h2 class="recommend-h2-title">카드 한장을 골라보세요</h2>
    <!-- <ul>
      <li>회원이 좋아요한 MovieList에서 하나 random 추천</li>
      <li>장르별 각 하나씩 random 추천</li>
      <li>filter 기능으로 소거 방식으로 movies 추천 -> movies에서 하는게 좋을 듯</li>
    </ul>
    <ul>
      <li>1. 평점을 준 영화 모두 얻어오기</li>
    </ul>
    <button @click="getRecommendedMovieFromServer" class="btn btn-primary">Recommend!</button>
    <div @click="goMovieDetail(movie.id)">
      <p>{{movie.posterpath}}</p>
      <p>{{movie.title}}</p>
      <img :src="srcUrl" alt="recommend" />
    </div> -->
    

    <!-- 카드1 -->
  <div class="recommend-carddeck">
    <button @click="getRecommendedMovieFromServer" class="btn recommend-card" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./tarot.jpg" class="recommend-tarot" alt=""></button>
    <div class="modal fade recommend-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">추천 영화</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div @click="goMovieDetail(movie.id)" class="modal-body">
            <img :src="srcUrl" class="recommend-poster" alt="recommend" />
            <p>{{movie.title}}</p>
            <p>{{movie.genre}}</p>
            <button class="btn">영화정보 더보기</button>
          </div>

          <!-- 작성 버튼 -->
          <div class="modal-footer">
            <button type="button" id="submitButton" @click="createMovieComment" class="btn movierecommend-button" data-bs-dismiss="modal">확인</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 카드2 -->
    <button @click="getRecommendedMovieFromServer" class="btn recommend-card" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./tarot.jpg" class="recommend-tarot" alt=""></button>
    <div class="modal fade recommend-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">추천 영화</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div @click="goMovieDetail(movie.id)" class="modal-body">
            <img :src="srcUrl" class="recommend-poster" alt="recommend" />
            <p>{{movie.title}}</p>
            <p>{{movie.genre}}</p>
            <button class="btn">영화정보 더보기</button>
          </div>

          <!-- 작성 버튼 -->
          <div class="modal-footer">
            <button type="button" id="submitButton" @click="createMovieComment" class="btn moviecomment-button" data-bs-dismiss="modal">확인</button>
          </div>
        </div>
      </div>
    </div>


  <!-- 카드3 -->
    <button @click="getRecommendedMovieFromServer" class="btn recommend-card" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./tarot.jpg" class="recommend-tarot" alt=""></button>
    <div class="modal fade recommend-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">추천 영화</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div @click="goMovieDetail(movie.id)" class="modal-body">
            <img :src="srcUrl" class="recommend-poster" alt="recommend" />
            <p>{{movie.title}}</p>
            <p>{{movie.genre}}</p>
            <button class="btn">영화정보 더보기</button>
          </div>

          <!-- 작성 버튼 -->
          <div class="modal-footer">
            <button type="button" id="submitButton" @click="createMovieComment" class="btn moviecomment-button" data-bs-dismiss="modal">확인</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 카드 4 -->
    <button @click="getRecommendedMovieFromServer" class="btn recommend-card" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="./tarot.jpg" class="recommend-tarot" alt=""></button>
    <div class="modal fade recommend-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">추천 영화</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div @click="goMovieDetail(movie.id)" class="modal-body">
            <img :src="srcUrl" class="recommend-poster" alt="recommend" />
            <p>{{movie.title}}</p>
            <p>{{movie.genre}}</p>
            <button class="btn">영화정보 더보기</button>
          </div>

          <!-- 작성 버튼 -->
          <div class="modal-footer">
            <button type="button" id="submitButton" @click="createMovieComment" class="btn moviecomment-button" data-bs-dismiss="modal">확인</button>
          </div>
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
    ...mapActions(['goMovieDetail', 'getRecommendedMovieFromServer']),
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
  text-align: center;
  font-size: 25px;
}
.recommend-modal {
  margin-bottom: 100px;
}
.recommend-poster {
  display: flex;
  border: solid rgba(206, 232, 255, 0.603);
  border-width: 1px;
  width: auto; height: auto;
  max-width: 300px;
  max-height: 300px;
}
.recommend-tarot {
  width: auto; height: auto;
  max-width: 500px;
  max-height: 500px;
  border: solid 1px rgb(245, 181, 131);
  border-radius: 10px;
}
.movierecommend-button {
  color: rgb(105, 46, 1);
  border: solid 1px rgb(240, 149, 80);
}

.recommend-carddeck {
  position: relative;
  margin-top: 30px;
  margin-bottom: 800px;
  margin-left: 500px;
}

.recommend-card {
  position: absolute;
  top: 0;
  left:0;
  display: block;
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