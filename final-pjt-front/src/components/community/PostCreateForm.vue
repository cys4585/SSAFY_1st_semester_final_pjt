<template>
  <div>
    <h2>PostCreateForm.vue</h2>

    title : <input type="text" v-model="title">
    content : <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
    <button class="btn btn-success" @click="createPost">작성</button>
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
  methods: {
    createPost: function () {
      this.$store.dispatch('createPost', { title: this.title, content: this.content })
    }
  },
}
</script>

<style>

</style>