<template>
  <div id="app">
    <!-- <router-link :to="{ name: 'MovieList' }">mainlogo</router-link> -->
      <div id="nav">
        <span>
          <router-link :to="{ name: 'MovieList' }">Movie</router-link> |
          <router-link :to="{ name: 'PostList' }">Community</router-link> |
        </span>
        <span>
          <router-link :to="{ name: 'Login' }">Account</router-link> |
        </span>
      </div>
      <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #6a7d91;
}

#nav {
  padding: 20px;
  background-color: rgba(0, 0, 0);
}

#nav a {
  font-weight: bold;
  color: #6a7d91;
}

#nav a.router-link-exact-active {
  color: #ff0000;
}
</style>
