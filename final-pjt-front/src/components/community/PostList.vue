<template>
  <div class="container">
    <h2>PostList.vue</h2>
    <table class="table">
      <thead class="post">
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
    <button type="button" class="btn btn-dark">글작성</button>
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
.table {
  margin-top: 0px;
}
.post {
  color: #E1DCD9;
}
</style>