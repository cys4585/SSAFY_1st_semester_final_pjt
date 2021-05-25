<template>
  <div>
    <h3>PostCommentForm.vue</h3>
    <textarea v-model="comment" @keyup.enter="createPostComment" placeholder="댓글 입력란"></textarea>
    <button @click="createPostComment" class="btn btn-success">작성</button>
  </div>
</template>

<script>
export default {
  name: 'PostCommentForm',
  props: {
    postId: {
      type: Number,
    },
  },
  data: function () {
    return {
      comment: null,
    }
  },
  methods: {
    createPostComment: function() {
      this.$store.dispatch('createPostComment', { postId: this.postId, content: this.comment })
    },
  },
}
</script>

<style>

</style>