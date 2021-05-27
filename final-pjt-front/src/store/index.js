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
    movie: null,
    movieComments: [],
    movieLikeStatus: null,
    movieLikeCount: null,
    recommendedMovie: null,
    posts: [],
    post: {},
    postComments: [],
    postLikeStatus: null,
    postLikeCount: null,
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
    },
    getMovieCommentById: function (state) {
      console.log('getters 실행')
      return function (commentId) {
        return state.movieComments.find(comment => comment.id === commentId)
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
    SET_MOVIE: function (state, movie) {
      state.movie = movie
    },
    SET_MOVIE_COMMENTS: function (state, comments) {
      state.movieComments = comments
    },
    CREATE_MOVIE_COMMENT: function (state, comment) {
      state.movieComments.push(comment)
    },
    UPDATE_MOVIE_COMMENT: function (state, comment) {
      const idx = state.movieComments.findIndex(movieComment => movieComment.id === comment.id)
      // state.movieComments[idx] = comment
      // 위처럼 하면 computed가 인식을 못함
      // splice를 하면 computed가 인식을 함
      // 이유(예상) : splice를 하면 요소가 제거되고, 중간에 삽입되는 형태라 요소 덩어리가 바뀌는 것 
      state.movieComments.splice(idx, 1, comment)
      // console.log('mutation: UPDTAE_MOVIE_COMMENT: comment changed')
    },
    SET_MOVIE_LIKE_STATUS: function (state, likeStatus) {
      state.movieLikeStatus = likeStatus.liked
      state.movieLikeCount = likeStatus.count
    },
    DELETE_MOVIE_COMMENT: function (state, commentId) {
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
      const idx = state.posts.findIndex(post => post.id === postId)
      state.posts.splice(idx, 1)
    },
    SET_POST_COMMENT_LIST: function (state, comments) {
      state.postComments = comments
    },
    CREATE_POST_COMMENT: function (state, comment) {
      state.postComments.push(comment)
    },
    SET_POST_LIKE_STATUS: function (state, likeStatus) {
      state.postLikeStatus = likeStatus.liked
      state.postLikeCount = likeStatus.count
    },
    DELETE_POST_COMMENT: function (state, commentId) {
      const idx = state.postComments.findIndex(comment => comment.id === commentId)
      state.postComments.splice(idx, 1)
    },
    SET_RECOMMENDED_MOVIE: function (state, movie) {
      state.recommendedMovie = movie
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
    logout: function ({ commit }) {
      localStorage.removeItem('jwt')
      commit('SET_USERNAME', null)
      router.push({ name: 'Login' })
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
          console.log(res.data)
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
    getMovieFromServer: function ({ commit }, movieId) {
      // console.log('getMovieFromServer 실행')
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/${movieId}/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          // console.log(res.data)
          commit('SET_MOVIE', res.data)
        })
        .catch(err => {
          console.log(err)
        })
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
          // alert('댓글(평점)은 하나만 작성할 수 있습니다.')
        })
    },
    updateMovieComment: function ({ commit }, { movieId, commentId, score, comment }) {
      axios({
        method: 'put',
        url: `http://127.0.0.1:8000/movies/${movieId}/comment/${commentId}/`,
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
          commit('UPDATE_MOVIE_COMMENT', res.data)
        })
        .catch(err => {
          console.log(err)
          // alert('댓글(평점)은 하나만 작성할 수 있습니다.')
        })
    },
    deleteMovieComment: function ({ commit }, { movieId, commentId }) {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/movies/${movieId}/comment/${commentId}/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(function () {
          commit('DELETE_MOVIE_COMMENT', commentId)
        })
        .catch(err => {
          alert('권한 없음')
          console.log(err)
        })
    },
    getMovieLikeStatusFromServer: function ({ commit }, movieId) {
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
          router.push({ name: 'PostDetail', params: { postId: res.data.id } })
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
          // console.log(res.data)
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
    },
    postLike: function ({ commit }, postId) {
      axios({
        method: 'post',
        url: `http://127.0.0.1:8000/community/${postId}/likes/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          console.log(res.data)
          commit('SET_POST_LIKE_STATUS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPostLikeStatusFromServer: function ({ commit }, postId) {
      // console.log('getPostLikeStatusFromServer')
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/community/${postId}/likes/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          // console.log(res.data)
          commit('SET_POST_LIKE_STATUS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deletePostComment: function ({ commit }, { postId, commentId }) {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/community/${postId}/comment/${commentId}/`,
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(function () {
          commit('DELETE_POST_COMMENT', commentId)
        })
        .catch(err => {
          alert('권한 없음')
          console.log(err)
        })
    },
    getRecommendedMovieFromServer: function ({ commit }) {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/recommend/`,
        params: {
          'base': 'commented',
        },
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          console.log(res.data)
          commit('SET_RECOMMENDED_MOVIE', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getFilteredSortedMovieListFromServer: function ({ commit }, filters) {
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/movies/`,
        params: {
          ...filters,
          // voteaverage: filters.voteAverage,
        },
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwt')}`
        },
      })
        .then(res => {
          console.log(res.data)
          commit('SET_MOVIES', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  modules: {
  }
})
