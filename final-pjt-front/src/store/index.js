import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const TMDB_URL = 'https://api.themoviedb.org/3'
const TMDB_KEY = '59dde7bd14865cb45e54cd51d83d7ab7'

export default new Vuex.Store({
  state: {
    movies: [],
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
          console.log(res.data)
          commit('SET_MOVIES', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
