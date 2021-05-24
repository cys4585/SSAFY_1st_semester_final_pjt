import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    username: null,
    movies: null,
    movieComments: [],
    movieLikeStatus: null,
    movieLikeCount: null,
    posts: [],
  },
  getters: {
    getMovieById: function (state) {
      // console.log('getMovieById 실행')
      return function (movieId) {
        // console.log(movieId)
        // console.log(state.movies)
        // console.log(state.movies.find(movie => movie.id === id))
        return state.movies.find(movie => movie.id === movieId)
      }
    },
    getPostById: function (state) {
      // console.log('getPostById 실행')
      return function (postId) {
        // console.log(postId)
        return state.posts.find(post => post.id === postId)
      }
    }
  },
  mutations: {
    SET_USERNAME: function (state, username) {
      state.username = username
    },
    SET_MOVIES: function (state, movies) {
      state.movies = movies
    },
    SET_POSTS: function (state, posts) {
      state.posts = posts
    },
    SET_MOVIE_COMMENTS: function (state, comments) {
      state.movieComments = comments
    },
    CREATE_MOVIE_COMMENT: function (state, comment) {
      state.movieComments.push(comment)
    },
    SET_MOVIE_LIKE_STATUS: function (state, likeStatus) {
      state.movieLikeStatus = likeStatus.liked
      state.movieLikeCount = likeStatus.count
    },
    DELETE_COMMENT: function (state, commentId) {
      const comment = state.movieComments.find(comment => comment.id === commentId)
      const idx = state.movieComments.indexOf(comment)
      state.movieComments.splice(idx, 1)
    },
  },
  actions: {
    signup: function (context, credentials) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/signup/',
        data: credentials,
      })
        .then(function () {
          router.push({name: 'Login'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    login: function ({ commit }, credentials) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/api-token-auth/',
        data: credentials,
      })
        .then(res => {
          localStorage.setItem('jwt', res.data.token)
          commit('SET_USERNAME', credentials.username)
          router.push({name: 'MovieList'})
        })
        .catch(err => console.log(err))
    },
    checkLogin: function () {
      const token = localStorage.getItem('jwt')
      if (! token) {
        router.push({ name: 'Login' })
      }
    },
    getMoviesFromServer: function ({ commit }) {
      console.log('getMoviesFromServer() 실행')
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/',
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          commit('SET_MOVIES', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    goMovieDetail: function (context, movieId) {
      // console.log(movieId)
      router.push({ name: 'MovieDetail', params: { movieId } })
    },
    getMovieCommentListFromServer: function ({ commit }, movieId) {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/${movieId}/comment/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          // console.log(res.data)
          commit('SET_MOVIE_COMMENTS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createMovieComment: function ({ commit }, { movieId, comment }) {
      // console.log(movieId, comment)
      axios({
        method: 'post',
        url: `http://127.0.0.1:8000/movies/${movieId}/comment/`,
        data: {
          comment,
        },
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          // console.log(res)
          commit('CREATE_MOVIE_COMMENT', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteComment: function ({ commit }, { movieId, commentId }) {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/movies/${movieId}/comment/${commentId}/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(function () {
          commit('DELETE_COMMENT', commentId)
        })
        .catch(err => {
          alert('권한 없음')
          console.log(err)
        })
    },
    getLikeStatusFromServer: function ({ commit }, movieId) {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/${movieId}/likes/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          // console.log(res.data)
          commit('SET_MOVIE_LIKE_STATUS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    movieLike: function ({ commit }, movieId) {
      axios({
        method: 'post',
        url: `http://127.0.0.1:8000/movies/${movieId}/likes/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          // console.log(res.data)
          commit('SET_MOVIE_LIKE_STATUS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPostsFromServer: function ({ commit }) {
      const token = localStorage.getItem('jwt')
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/community/',
        headers: {
          Authorization: `JWT ${token}`
        },
      })
        .then(res => {
          // console.log(res)
          commit('SET_POSTS', res.data)
        })
        .catch(err => {console.log(err)})
    },
    goPostDetail: function (context, postId) {
      // console.log(postId)
      router.push({ name: 'PostDetail', params: { postId }})
    }
  },
  modules: {
  }
})
