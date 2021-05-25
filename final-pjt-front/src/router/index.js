import Vue from 'vue'
import VueRouter from 'vue-router'

import Movie from '@/views/Movie.vue'
import MovieList from '@/components/movies/MovieList.vue'
import MovieDetail from '@/components/movies/MovieDetail.vue'

import Community from '@/views/Community.vue'
import PostList from '@/components/community/PostList.vue'
import PostCreateForm from '@/components/community/PostCreateForm.vue'
import PostUpdateForm from '@/components/community/PostUpdateForm.vue'
import PostDetail from '@/components/community/PostDetail.vue'

import Account from '@/views/Account.vue'
import Signup from '@/components/accounts/Signup.vue'
import Login from '@/components/accounts/Login.vue'
import Recommend from '@/components/accounts/Recommend.vue'


Vue.use(VueRouter)

const routes = [
  { 
    path: '', 
    redirect: '/movies',
  },
  {
    path: '/movies', component: Movie,
    meta: { authRequired: true},
    children: [
      { path: '', name: 'MovieList', component: MovieList },
      { path: ':movieId', name: 'MovieDetail', component: MovieDetail },
    ],
  },
  {
    path: '/community', component: Community,
    meta: { authRequired: true},
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
      { path: 'signup', name: 'Signup', component: Signup, meta: { authRequired: false}, },
      { path: 'login', name: 'Login', component: Login, meta: { authRequired: false}, },
      { path: 'recommend', name: 'Recommend', component: Recommend, meta: { authRequired: true}, },
    ],
  },
  {
    path: '*',
    component: () => import ('@/views/NotFoundPage.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function (to, from, next) {
  if (to.matched.some(routeInfo => routeInfo.meta.authRequired) && !localStorage.getItem('jwt')) {
    // window.alert('Login Please!')
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
