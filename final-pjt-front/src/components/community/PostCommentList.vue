<template>
  <div>
    <h3>PostCommentList.vue</h3>
    <PostCommentCard
      v-for="(comment, idx) in commentList"
      :key="idx"
      :comment="comment"
      :postId="postId"
    />
  </div>
</template>

<script>
import PostCommentCard from '@/components/community/PostCommentCard.vue'

export default {
  name: 'PostCommentList',
  props: {
    postId: {
      type: Number,
    },
  },
  components: {
    PostCommentCard,
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