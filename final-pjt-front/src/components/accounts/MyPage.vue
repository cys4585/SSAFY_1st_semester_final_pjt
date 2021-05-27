<template>
  <div class="mypage-background">
    <ul>
      <li>회원 탈퇴</li>
    </ul>
    <router-link :to="{ name: 'Signout' }">Sign Out</router-link> |
    <router-link :to="{ name: 'LikeMovieList' }">My Movie List</router-link> |
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mypage-background {
  background-image: url('./mypage.jpg');
  background-size: 100%;
  height: 1200px;
}
</style>