<template>
  <div id="app">
    <!-- 탭 네브바 -->
    <ul class="nav nav-pills">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Movie</a>
        <ul class="dropdown-menu">
          <li><router-link :to="{ name: 'MovieList' }" class="dropdown-item">MovieList</router-link></li>
          <li><router-link :to="{ name: 'Recommend' }" class="dropdown-item">Recommend</router-link></li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Community</a>
        <ul class="dropdown-menu">
          <li><router-link :to="{ name: 'PostList' }" class="dropdown-item">PostList</router-link></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Account</a>
        <ul class="dropdown-menu">
          <li><router-link :to="{ name: 'Login' }" class="dropdown-item">Login</router-link></li>
        </ul>
      </li>
    </ul>
    
      <!-- 일반 네브바
      <div id="nav">
        <span>
          <router-link :to="{ name: 'MovieList' }">Movie</router-link> |
          <router-link :to="{ name: 'PostList' }">Community</router-link> |
        </span>
        <span>
          <router-link :to="{ name: 'Login' }">Account</router-link> |
        </span>
      </div> -->
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
  margin-left: 60px;
  margin-right: 60px;

}

#nav {
  padding: 20px;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color: #6a7d91;
}

#nav a.router-link-exact-active {
  color: #ff0000;
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
</style>
