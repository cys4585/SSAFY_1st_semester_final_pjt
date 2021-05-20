import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'
import Community from '../views/Community.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
