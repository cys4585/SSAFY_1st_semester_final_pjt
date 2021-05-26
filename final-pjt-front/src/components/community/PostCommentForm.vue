<template>
  <div>
    <div class="mb-3">
      <input  v-model="comment" @keyup.enter="createPostComment" type="text" class="form-control d-inline postcommentform" id="formGroupExampleInput" placeholder="댓글을 작성해주세요.">
      <button @click="createPostComment" class="btn postcomment-button">댓글</button>
    </div>
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
      this.comment = ''
    },  
  },
}
</script>

<style>
.postcommentform {
  width: 88%;
  margin-right: 10px;
}

.postcomment-button {
  background-color: black;
  border-color: blueviolet;
  color: aliceblue;
}

.formGroupExampleInput {
  display: inline;
}
</style>