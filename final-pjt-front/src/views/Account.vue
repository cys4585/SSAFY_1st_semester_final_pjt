<template>
  <div>
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
/* #account-background {
  background-image: url('../assets/snowstar.png');
  background-size: 100%;
  height: 1200px;
  padding-top: 130px;
  margin-top: 20px;
} */
</style>