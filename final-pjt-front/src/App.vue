<template>
  <div id="app">
    <!-- 탭 네브바 -->
    <img class="movie-title" src="./assets/waterpurple.jpg" alt="title">
    <nav>
      <div id="nav">
        <span v-if="loginUsername">
          <router-link :to="{ name: 'MovieList' }" class="nav-margin text-decoration-none">Movie</router-link> 
          <router-link :to="{ name: 'Recommend' }" class="nav-margin text-decoration-none">Recommend</router-link> 
          <router-link :to="{ name: 'PostList' }" class="nav-margin text-decoration-none">Community</router-link> 
          <router-link :to="{ name: 'MyPage' }" class="nav-margin account-nav-right text-decoration-none">MyPage</router-link> 
          <router-link @click.native="logout" to="#" class="nav-margin account-nav-right text-decoration-none">Logout</router-link>
        </span>
        <span v-else>
          <router-link :to="{ name: 'Login' }" class="nav-margin account-nav-right text-decoration-none">Login</router-link>
        </span>
      </div>
      <router-view/>
    </nav>
  </div>
</template>

<script >
export default {
  name: 'App',
  computed: {
    loginUsername: function () {
      return this.$store.state.loginUsername
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    },
  },
  // created: function () {
  //   this.$store.dispatch('checkLogin')
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #6a7d91;
  margin-left: 0;
  margin-right: 0;
  font-size: 20px;

}

#nav {
  background-color: black;
  margin-left: 40px;
  padding: 20px;
}
.nav-margin {
  margin-right: 15px;
}
.account-nav-right {
  float: right;
}
#nav a {
  font-weight: bold;
  color: #6a7d91;
}

#nav a.router-link-exact-active {
  color: #775aad;
}
.nav {
  margin-bottom: 50px;
}
.nav-item a {
  font-size: 20px;
  color: #D3B7D8;
  text-decoration: none;
}

.dropdown-menu {
  background-color: black;
}
.movie-title {
  height: 70%;
  width: 100%;
}
</style>
