<template>
  <div>
    <h4>PostCommentCard.vue</h4>
    <!-- {{ comment }} -->
    {{ comment.username }}| {{ comment.content }}
    <!-- <button class="btn btn-warning" @click="">수정</button> -->
    <button 
      v-if="loginUsername === comment.username"
      class="btn btn-danger" 
      @click="deleteComment"
      >
      삭제
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PostCommentCard',
  props: {
    comment: {
      type: Object,
    },
    postId: {
      type: Number,
    }
  },
  computed: {
    ...mapState(['loginUsername'])
  },
  methods: {
    deleteComment: function () {
      this.$store.dispatch('deletePostComment', {postId: this.postId, commentId: this.comment.id})
    }
  }

}
</script>

<style>

</style>