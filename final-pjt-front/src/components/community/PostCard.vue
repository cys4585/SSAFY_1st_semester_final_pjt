<template>
  <div @click="goPostDetail(post.id)">
    <h3>PostCard</h3>
    <div>
      {{ post.title }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['goPostDetail'])
  }
}
</script>

<style>

</style>