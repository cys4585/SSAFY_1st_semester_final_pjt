<template>
  <tr class="text-color" @click="goPostDetail(post.id)">
      <!-- <h3>PostCard</h3> -->
      <th scope="row">{{ post.id }}</th>
      <th>{{ post.username }}</th>
      <td>{{ post.title }}</td>
  </tr>
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
.text-color {
  color: antiquewhite;
  cursor: pointer;
}

</style>