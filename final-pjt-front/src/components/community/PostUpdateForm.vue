<template>
  <div>
    <h2>PostUpdateForm.vue</h2>
    {{ post }}
    title : <input type="text" v-model="title">
    content : <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
    <button class="btn btn-success" @click="updatePost">작성</button>
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

</style>