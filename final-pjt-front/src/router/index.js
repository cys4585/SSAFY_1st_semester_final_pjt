import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/movies/Movie.vue'
import Community from '../views/community/Community.vue'
import Signup from '../views/accounts/Signup.vue'
import Login from '../views/accounts/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movies',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
