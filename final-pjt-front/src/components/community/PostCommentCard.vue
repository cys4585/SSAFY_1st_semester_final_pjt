<template>
  <tr>
    <th scope="row">{{ comment.username }}</th>
    <th>{{ comment.content }}</th>
    <!-- 댓글 삭제 수정버튼 -->
    <div class="dropdown postcomment-dropdown d-inline">
      <button class="btn postcomment-dropdown-button" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></button>
      <div class="dropdown-menu">
        <button 
          v-if="loginUsername === comment.username"
          class="btn dropdown-item postcomment-update-button"
        >
          수정
        </button>
        <button 
          v-if="loginUsername === comment.username"
          class="btn postcomment-delete-button dropdown-item" 
          @click="deleteComment"
          >
          삭제
        </button>
      </div>
    </div>         
  </tr>
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
.postcomment-dropdown-button {
  color: aliceblue;
}
.postcomment-update-button {
  background-color: aliceblue;
  color: black;
}
.postcomment-delete-button {
  background-color: aliceblue;
  color: black;
}
.dropdown-item {
  width: 70px;
}
</style>