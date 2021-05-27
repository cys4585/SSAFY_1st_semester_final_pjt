<template>
<div class="postlist-background">
  <div class="container">
    <!-- <h2 class="community-title postlist-margin">COMMUNITY</h2> -->
    <!-- <h2>PostList.vue</h2> -->
    
    <button class="btn postlist-margin community-post-button" @click="postForm">글쓰기</button>
    <table class="table post-list">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <!-- class="post" 좋아요 수 <th scope="col">Likes</th> -->
        </tr>
      </thead>
      <tbody class="post">
        <PostCard
          v-for="(post, idx) in posts"
          :key="idx"
          :post="post"
        />
      </tbody>
    </table>

  </div>
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

.community-title {
  color: rgba(240, 248, 255, 0.911);
}
.post-list {
  margin-top: 70px;
  color: rgba(240, 248, 255, 0.678);
}
.community-post-button {
  background-color: black;
  border-color: blueviolet;
  color: aliceblue;
  float: right;
  margin-bottom: 10px;
  margin-top: 150px;
}
</style>