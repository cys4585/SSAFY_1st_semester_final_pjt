<template>
  <div id="app">
    <!-- 탭 네브바 -->
    <!-- <h1 id="title">Movie</h1> -->
    <nav>
      <div id="nav">
        <span>
          <router-link :to="{ name: 'MovieList' }" class="text-decoration-none">Movie</router-link> .
          <router-link :to="{ name: 'Recommend' }" class="text-decoration-none">Recommend</router-link> .
          <router-link :to="{ name: 'PostList' }" class="text-decoration-none">Community</router-link> .
          <router-link :to="{ name: 'Login' }" class="text-decoration-none">Login</router-link> 
        </span>
      </div>
      <router-view/>
    </nav>

  </div>
</template>

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

#title {
  margin-top: 50px;
  margin-bottom: 0%;
  font-size: 60px;
  font-weight: 600;
  color: rgb(122, 31, 162);
  margin-left: 60px;
}

#nav {
  background-color: black;
  margin-left: 40px;
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #6a7d91;
}

#nav a.router-link-exact-active {
  color: #D3B7D8;
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
