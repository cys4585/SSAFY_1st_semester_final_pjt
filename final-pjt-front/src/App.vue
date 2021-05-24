<template>
  <div id="app">
    <nav class="navbar">
      <!-- Navbar content -->
      <span class="nav text-decoration-none" id="nav-tab" role="tablist">
        <li class="nav-link active" id="textcolor" data-bs-toggle="tab" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><router-link :to="{ name: 'MovieList' }" class="deco">MovieList</router-link></li>
        <li class="nav-link" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"><router-link :to="{ name: 'Recommend' }">Recommend</router-link></li>
        <li class="nav-link" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"><router-link :to="{ name: 'PostList' }">Community</router-link></li>
        <li class="nav-link" data-bs-toggle="tab" type="button" role="tab" aria-selected="false"><router-link :to="{ name: 'Login' }">Login</router-link></li>
      </span>
    </nav>
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

.navbar {
  background-color: black;
  margin-bottom: 30px;
}

#textcolor {
  color: #D3B7D8;
}

</style>
