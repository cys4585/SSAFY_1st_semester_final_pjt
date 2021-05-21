<template>
  <div id="app">
    <router-link :to="{ name: 'Movie' }">mainlogo</router-link>
      <div id="nav">
        <span>
          <router-link :to="{ name: 'Movie' }">Movie</router-link> |
          <router-link :to="{ name: 'Community' }">Community</router-link> |
        </span>
        <span>
          <router-link :to="{ name: 'Signup' }">Signup</router-link> |
          <router-link :to="{ name: 'Login' }">Login</router-link> |
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #53616e;
}

#nav a.router-link-exact-active {
  color: #ff0000;
}
</style>
