<template>
  <div class="mypage-background">
    <router-link :to="{ name: 'Signout' }">Sign Out</router-link> |
    <router-link :to="{ name: 'MyMovieList' }">My Movie List</router-link> |
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
}
</script>

<style>
.mypage-background {
  background-image: url('./mypage.jpg');
  background-size: 100%;
  height: 1200px;
}
</style>