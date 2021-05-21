<template>
  <div>
    <h1>Account Page</h1>
    |
    <router-link :to="{ name: 'Signup' }">Signup</router-link> |
    <router-link :to="{ name: 'Login' }">Login</router-link> |
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Account',
}
</script>

<style>

</style>