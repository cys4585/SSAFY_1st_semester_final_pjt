<template>
<div>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'Movie',
  components: {
  },
  created: function () {
    this.$store.dispatch('getMoviesFromServer')
  }
}
</script>

<style>

</style>