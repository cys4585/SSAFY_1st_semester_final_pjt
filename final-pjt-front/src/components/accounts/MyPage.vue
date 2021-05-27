<template>
  <div class="mypage-background">
    <button class="btn signout-button">
      <router-link :to="{ name: 'Signout' }" class="text-decoration-none text-light">
        Sign Out
      </router-link>
    </button>
    <button class="btn mymovie-button">
      <router-link :to="{ name: 'MyMovieList' }" class="text-decoration-none text-light">
        내 보관함
      </router-link>
    </button>
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
  background-color: black;
  background-size: 100%;
  height: 1200px;
}
.signout-button {
  float: right;
  margin-top: 40px;
  margin-right: 30px;
  color: aliceblue;
  background-color: black;

}
.mymovie-button{
  border-color: blueviolet;
  margin-left: 60px;
  margin-top: 40px;
  font-size: 25px;
  margin-bottom: 30px;
}
</style>