<template>
  <div id="account-background">
    <!-- <h1>Account Page</h1>
    |
    <router-link :to="{ name: 'Signup' }">Signup</router-link> |
    <router-link :to="{ name: 'Login' }">Login</router-link> | -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Account',
}
</script>

<style>
#account-background {
  background-image: url('snowstar1.png');
  background-size: 100%;
  height: 1200px;
  padding-top: 130px;
}
</style>