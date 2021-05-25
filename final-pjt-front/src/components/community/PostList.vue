<template>
  <div class="container">
    <!-- <h2>PostList.vue</h2> -->
    <button class="btn buttoncolor" @click="postForm">New Post</button>
    <table class="table">
      <thead class="post">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <!--좋아요 수 <th scope="col">Likes</th> -->
        </tr>
      </thead>
      <tbody>
        <PostCard
          v-for="(post, idx) in posts"
          :key="idx"
          :post="post"
        />
      </tbody>
    </table>


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
.table {
  margin-top: 0px;
}
.post {
  color: #E1DCD9;
}
.buttoncolor {
  background-color: black;
  border-color: blueviolet;
  color: aliceblue;
  /* float: right; */
  margin-bottom: 30px;
  margin-top: 100px;
}
</style>