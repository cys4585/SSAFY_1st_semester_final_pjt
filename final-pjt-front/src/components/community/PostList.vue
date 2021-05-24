<template>
  <div>
    <h2>PostList.vue</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <!--좋아요 수 <th scope="col">Likes</th> -->
        </tr>
      </thead>
    </table>
    <PostCard
      v-for="(post, idx) in posts"
      :key="idx"
      :post="post"
    />
  </div>
</template>

<script>
import PostCard from '@/components/community/PostCard.vue'

export default {
  name: 'PostList.vue',
  components: {
    PostCard,
  },
  computed: {
    posts : function () {
      return this.$store.state.posts
    }
  },
}
</script>

<style>

</style>