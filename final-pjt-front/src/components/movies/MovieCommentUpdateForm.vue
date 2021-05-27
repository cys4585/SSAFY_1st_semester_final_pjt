<template>
  <div>
    <div class="modal fade" :id="'movieCommentUpdateModal'+comment.id" tabindex="-1" :aria-labelledby="'exampleModalLabel'+comment.id" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" :id="'exampleModalLabel'+comment.id">평점 수정</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
              <!-- 선택 -->
              <div class="mb-3">
                <select v-model="comment.score">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <!-- 댓글 작성란 -->
              <div class="mb-3">
                <input v-model="comment.comment" @keyup.enter="clickSubmitButton" type="text" class="form-control moviecommentform d-inline" :id="'formGroupExampleInput'+oldComment.id" placeholder="감상평을 남겨주세요.">
              </div>
          </div>
          <!-- 작성 버튼 -->
          <div class="modal-footer">
            <button type="button" :id="'submitButton'+oldComment.id" @click="updateMovieComment" class="btn moviecomment-button" data-bs-dismiss="modal">작성</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MovieCommentUpdateForm',

  data: function () {
    return {
      comment: null,
    }
  },
  props: {
    movieId: {
      type: Number
    },
    oldComment: {
      type: Object
    },
  },
  created: function () {
    this.comment = this.oldComment
    // console.log(this.oldComment)
    // console.log(this.comment)
  },
  methods: {
    updateMovieComment: function () {
      this.$store.dispatch('updateMovieComment', { movieId: this.movieId, commentId: this.comment.id, score: this.comment.score, comment: this.comment.comment })
    },
    clickSubmitButton: function () {
      document.getElementById('submitButton').click()
    },
  },
}

</script>

<style>
.modal {
  margin-top: 200px;
}
.moviecommentform {
  width: 90%;
  margin-right: 10px;
}
.moviecomment-button {
  background-color: black;
  border-color: blueviolet;
  color: aliceblue;
}
</style>