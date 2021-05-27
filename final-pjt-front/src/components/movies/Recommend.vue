<template>
  <div>
    <h2>Recommend.vue</h2>
    <ul>
      <li>회원이 좋아요한 MovieList에서 하나 random 추천</li>
      <li>장르별 각 하나씩 random 추천</li>
      <li>filter 기능으로 소거 방식으로 movies 추천 -> movies에서 하는게 좋을 듯</li>
    </ul>
    <ul>
      <li>1. 평점을 준 영화 모두 얻어오기</li>
    </ul>
    <button @click="getRecommendedMovieFromServer" class="btn btn-primary">recommend!</button>
    <div @click="goMovieDetail(movie.id)">
      <p>{{movie.title}}</p>
      <p>{{movie.overview}}</p>
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
    }
  },
}
</script>

<style>
</style>