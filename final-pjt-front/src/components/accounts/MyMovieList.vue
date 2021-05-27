<template>
  <div>
    <h3>MyMovieList.vue</h3>
    <button @click="toggleLikeMoviesBtn">좋아요 한 영화s</button>
    <button @click="toggleCommentMoviesBtn">후기를 남긴 영화s</button>
    <MyLikedMovieList
      v-show="isShowLikeMovies"
    />
    <MyCommentedMovieList
      v-show="isShowCommentMovies"
    />
  </div>
</template>

<script>
import MyLikedMovieList from '@/components/accounts/MyLikedMovieList.vue'
import MyCommentedMovieList from '@/components/accounts/MyCommentedMovieList.vue'

export default {
  name: 'MyMovieList',
  // created: function () {
  //   this.$store.dispatch('getLikeMovieListFromServer')
  // },
  components: {
    MyLikedMovieList,
    MyCommentedMovieList,
  },
  data: function () {
    return {
      isShowLikeMovies: false,
      isShowCommentMovies: false,
    }
  },
  methods: {
    toggleLikeMoviesBtn: function () {
      this.isShowLikeMovies = !this.isShowLikeMovies
      this.isShowCommentMovies = false
    },
    toggleCommentMoviesBtn: function () {
      this.isShowCommentMovies = !this.isShowCommentMovies
      this.isShowLikeMovies = false
    }
  },
}
</script>

<style>

</style>