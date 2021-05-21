import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'


Vue.use(Vuex)

const TMDB_URL = 'https://api.themoviedb.org/3'
const TMDB_KEY = '59dde7bd14865cb45e54cd51d83d7ab7'

export default new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {
    getMovieById: function (state) {
      // console.log('getMovieById 실행')
      return function (id) {
        // console.log(id)
        // console.log(state.movies)
        // console.log(state.movies.find(movie => movie.id === id))
        return state.movies.find(movie => movie.id === id)
      }
    },
  },
  mutations: {
    SET_MOVIES: function (state, movies) {
      state.movies = movies
    }
  },
  actions: {
    getMoviesFromServer: function ({ commit }) {
      axios({
        method: 'get',
        url: `${TMDB_URL}/movie/popular/?api_key=${TMDB_KEY}`,
      })
        .then(res => {
          // console.log(res.data.results)
          commit('SET_MOVIES', res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
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
    login: function (context, credentials) {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/api-token-auth/',
        data: credentials,
      })
        .then(res => {
          localStorage.setItem('jwt', res.data.token)
          router.push({name: 'Movie'})
        })
        .catch(err => console.log(err))
    },
    checkLogin: function (context) {
      console.log(context)
      const token = localStorage.getItem('jwt')
      if (! token) {
        router.push({ name: 'Login' })
      }
    },
    goMovieDetail: function (context, movieId) {
      // console.log(movieId)
      router.push({ name: 'MovieDetail', params: { movieId } })
    }
  },
  modules: {
  }
})
