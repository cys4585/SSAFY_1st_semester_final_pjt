<template>
  <div>
    <table class="table table-hover moviecomment-line-color">
      <thead>
        <tr class="moviecomment-line-color">
          <th scope="col"></th>
          <th scope="col"></th>
          <!-- class="post" 좋아요 수 <th scope="col">Likes</th> -->
        </tr>
      </thead>
      <tbody class="post">
        <PostCommentCard
          v-for="(comment, idx) in commentList"
          :key="idx"
          :comment="comment"
          :postId="postId"
        />
      </tbody>
    </table>
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