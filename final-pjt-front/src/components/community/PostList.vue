<template>
  <div>
    <h2>PostList.vue</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="post">#</th>
          <th scope="col" class="post">Title</th>
          <th scope="col" class="post">Content</th>
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
.post {
  color: #E1DCD9;
}
</style>