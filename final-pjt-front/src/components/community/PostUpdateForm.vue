<template>
  <div class="container">
    <h2>PostUpdateForm.vue</h2>
    <!-- {{ post }} -->
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Title</label>
      <input type="text" v-model="title" class="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요.">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Content</label>
      <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
    </div>
    <button class="btn buttoncolor" style="float: right;" @click="updatePost">작성</button>

    
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  data: function () {
    return {
      title: null,
      content: null,
    }
  },
  computed: {
    post: function () {
      return this.$store.getters.getPostById(Number(this.$route.params.postId))
    },
    loginUsername: function () {
      return this.$store.state.loginUsername
    },
  },
  created: function () {
    this.title = this.post.title
    this.content = this.post.content
  },
  methods: {
    updatePost: function () {
      this.$store.dispatch('updatePost', { postId: this.post.id, title: this.title, content: this.content })
    }
  },
}
</script>

<style>
.buttoncolor {
  background-color: black;
  border-color: blueviolet;
  color: aliceblue;
}
</style>