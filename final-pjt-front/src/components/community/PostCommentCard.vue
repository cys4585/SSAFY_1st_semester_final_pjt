<template>
  <tr>
    <th scope="row">
      <p>{{ comment.username }}</p>
    </th>
    <th>
      <p class="comment-content" :id="'comment-content'+comment.id">{{ comment.content }}</p>
      <div class="mb-3" style="display: none; width: 100%;" :id="'editInput'+comment.id">
        <input v-model="editContent" type="text" class="form-control d-inline comment-edit-input">
        <div class="d-flex justify-content-end">
          <button class="btn postcomment-button comment-edit-button" @click="updatePostComment">저장</button>
          <button class="btn postcomment-button comment-edit-button" @click="cancelEdit">취소</button>
        </div>
      </div>
    </th>
    <th>
      <!-- 댓글 삭제 수정버튼 -->
      <div v-if="loginUsername === comment.username" class="dropdown postcomment-dropdown d-inline">
        <button class="btn postcomment-dropdown-button" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></button>
        <div class="dropdown-menu">
          <button 
            class="btn dropdown-item postcomment-update-button"
            @click="setEditForm"
          >
            수정
          </button>
          <button 
            class="btn postcomment-delete-button dropdown-item" 
            @click="deleteComment"
            >
            삭제
          </button>
        </div>
      </div>     
    </th>
  </tr>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PostCommentCard',
  data: function () {
    return {
      editContent: this.comment.content,
    }
  },
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
    },
    setEditForm: function () {
      const editForm = document.getElementById(`editInput${this.comment.id}`)
      const commentVal = document.getElementById(`comment-content${this.comment.id}`)
      editForm.style = 'display: block;'
      commentVal.style = 'display: none;'
    },
    cancelEdit: function () {
      const editForm = document.getElementById(`editInput${this.comment.id}`)
      const commentVal = document.getElementById(`comment-content${this.comment.id}`)
      editForm.style = 'display: none;'
      commentVal.style = 'display: block;'
      this.editContent = this.comment.content
    },
    updatePostComment: function () {
      this.$store.dispatch('updatePostComment', { postId: this.postId, commentId: this.comment.id, content: this.editContent })
      this.cancelEdit()
    }
  }

}
</script>

<style>
.comment-edit-input, .comment-edit-button {
  margin: 2px;
}
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

.comment-content {
  margin: 0px;
}

</style>