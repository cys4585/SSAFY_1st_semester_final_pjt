<template>
  <div>
    <h2>MyPage.vue</h2>
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

</style>