<template>
  <div>
    <h2>PostList.vue</h2>
    <button class="btn btn-primary" @click="postForm">New Post</button>
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
  methods: {
    postForm: function () {
      this.$router.push({ name: 'PostCreateForm' })
    },
  },
}
</script>

<style>
.post {
  color: #E1DCD9;
}
</style>