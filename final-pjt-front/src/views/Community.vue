<template>
  <div class="postlist-background">
    <!-- <h1>Community Page</h1>
    |
    <router-link :to="{ name: 'PostList' }">PostList</router-link> | -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Community',
  created: function () {
    this.$store.dispatch('getPostsFromServer')
  },
}
</script>

<style>
.postlist-background {
  background-color: black;
}
</style>