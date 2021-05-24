import Vue from 'vue'
import VueRouter from 'vue-router'

import Movie from '@/views/Movie.vue'
import MovieList from '@/components/movies/MovieList.vue'
import Recommend from '@/components/movies/Recommend.vue'
import MovieDetail from '@/components/movies/MovieDetail.vue'

import Community from '@/views/Community.vue'
import PostList from '@/components/community/PostList.vue'
import PostCreateForm from '@/components/community/PostCreateForm.vue'
import PostUpdateForm from '@/components/community/PostUpdateForm.vue'
import PostDetail from '@/components/community/PostDetail.vue'

import Account from '@/views/Account.vue'
import Signup from '@/components/accounts/Signup.vue'
import Login from '@/components/accounts/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/movies', component: Movie,
    children: [
      { path: '', name: 'MovieList', component: MovieList },
      { path: 'recommend', name: 'Recommend', component: Recommend },
      { path: ':movieId', name: 'MovieDetail', component: MovieDetail },
    ],
  },
  {
    path: '/community', component: Community,
    children: [
      { path: '', name: 'PostList', component: PostList },
      { path: 'post', name: 'PostCreateForm', component: PostCreateForm },
      { path: ':postId', name: 'PostDetail', component: PostDetail },
      { path: ':postId/post', name: 'PostUpdateForm', component: PostUpdateForm, },
    ]
  },
  {
    path: '/accounts', component: Account,
    children: [
      { path: 'signup', name: 'Signup', component: Signup },
      { path: 'login', name: 'Login', component: Login },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
