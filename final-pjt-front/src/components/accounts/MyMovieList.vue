<template>
  <div id="navb">
    <button class="btn mylist-like" @click="toggleLikeMoviesBtn">좋아요 한 영화s</button>
    <button class="btn mylist-review" @click="toggleCommentMoviesBtn">후기를 남긴 영화s</button>
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
#nab a {
  color: #775aad;
}
.mylist-like {
  margin-left: 60px;

  background-color: rgb(72, 38, 206);
  color: aliceblue;
  margin-right: 20px;
  margin-bottom: 30px;
}
.mylist-review {
  background-color: rgb(72, 38, 206);
  color: aliceblue;
  margin-bottom: 30px;
}
</style>