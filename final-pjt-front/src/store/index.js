import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    loginUsername: null,
    movies: null,
    movieComments: [],
    movieLikeStatus: null,
    movieLikeCount: null,
    posts: [],
    post: {},
    postComments: [],
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
      state.loginUsername = username
    },
    SET_MOVIES: function (state, movies) {
      state.movies = movies
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
    SET_POSTS: function (state, posts) {
      state.posts = posts
    },
    CREATE_POST: function (state, post) {
      state.posts.push(post)
    },
    UPDATE_POST: function (state, updatedPost) {
      const idx = state.posts.findIndex(post => post.id === updatedPost.id)
      state.posts[idx] = updatedPost
    },
    DELETE_POST: function (state, postId) {
      state.posts.splice(postId, 1)
    },
    SET_POST_COMMENT_LIST: function (state, comments) {
      state.postComments = comments
    },
    CREATE_POST_COMMENT: function (state, comment) {
      state.postComments.push(comment)
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
    createMovieComment: function ({ commit }, { movieId, score, comment }) {
      // console.log(movieId, comment)
      axios({
        method: 'post',
        url: `http://127.0.0.1:8000/movies/${movieId}/comment/`,
        data: {
          score,
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
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/community/',
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          // console.log(res)
          commit('SET_POSTS', res.data)
        })
        .catch(err => {console.log(err)})
    },
    createPost: function ({ commit }, { title, content }) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/community/',
        data: {
          title,
          content,
        },
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          // console.log(res.data)
          commit('CREATE_POST', res.data)
          router.push({ name: 'PostList' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    goPostDetail: function (context, postId) {
      // console.log(postId)
      router.push({ name: 'PostDetail', params: { postId }})
    },
    updatePost: function ({ commit }, { postId, title, content }) {
      axios({
        method: 'put',
        url: `http://127.0.0.1:8000/community/${postId}/`,
        data: {
          title,
          content,
        },
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          // console.log(res.data)
          commit('UPDATE_POST', res.data)
          router.push({ name: 'PostDetail', params: { postId }})
        })
        .catch(err => {
          console.log(err)
        })
    },
    deletePost: function ({ commit }, postId) {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/community/${postId}/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(function () {
          commit('DELETE_POST', postId)
          router.push({ name: 'PostList' })

        })
        .catch(err => {
          console.log(err)
        })
    },
    getPostCommentListFromServer: function ({ commit }, postId) {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/community/${postId}/comment/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          console.log(res.data)
          commit('SET_POST_COMMENT_LIST', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createPostComment: function ({ commit }, { postId, content }) {
      axios({
        method: 'post',
        url: `http://127.0.0.1:8000/community/${postId}/comment/`,
        data: {
          content,
        },
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          // console.log(res.data)
          commit('CREATE_POST_COMMENT', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
