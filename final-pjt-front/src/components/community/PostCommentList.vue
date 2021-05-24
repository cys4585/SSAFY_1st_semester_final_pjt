<template>
  <div>
    <h3>PostCommentList.vue</h3>
    {{ commentList }}
  </div>
</template>

<script>
export default {
  name: 'PostCommentList',
  props: {
    postId: {
      type: Number,
    },
  },
  created: function () {
    this.$store.dispatch('getPostCommentListFromServer', this.postId)
  },
  computed: {
    commentList: function () {
      return this.$store.state.postComments
    }
  },
}
</script>

<style>

</style>