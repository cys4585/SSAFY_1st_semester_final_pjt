<template>
  <div>
    <div 
      class="modal fade" 
      :id="'movieCommentUpdateModal'+commentId" 
      tabindex="-1" 
      :aria-labelledby="'exampleModalLabel'+commentId" 
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" :id="'exampleModalLabel'+commentId">평점 수정</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
              <!-- 선택 -->
              <div class="mb-3">
                <select v-model="score">
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
                <input 
                  v-model="comment" 
                  @keyup.enter="clickSubmitButton" 
                  type="text" 
                  class="form-control moviecommentform d-inline" 
                  :id="'formGroupExampleInput'+commentId" 
                  placeholder="감상평을 남겨주세요."
                >
              </div>
          </div>
          <!-- 작성 버튼 -->
          <div class="modal-footer">
            <button 
              type="button" 
              :id="'submitButton'+commentId" 
              @click="updateMovieComment" 
              class="btn moviecomment-button" 
              data-bs-dismiss="modal"
            >
              작성
            </button>
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
      score: null,
    }
  },
  props: {
    movieId: {
      type: Number
    },
    commentId: {
      type: Number
    },
  },
  created: function () {
    this.comment = this.oldComment.comment
    this.score = this.oldComment.score
  },
  mounted: function () {
    this.onCloseForm()
  },
  computed: {
    oldComment: function () {
      // console.log('computed:', this.$store.state.editMovieComment)
      return this.$store.state.editMovieComment
    },
    editActive: function () {
      // console.log('computed:', this.$store.state.movieCommentEditActive)
      return this.$store.state.movieCommentEditActive
    },
  },
  watch: {
    editActive: function () {
      // console.log('watch')
      this.comment = this.oldComment.comment
      this.score = this.oldComment.score
      // console.log(this.comment, this.score)
    }
  },
  methods: {
    updateMovieComment: function () {
      console.log('asdasdasdasdasd')
      this.$store.dispatch('updateMovieComment', { movieId: this.movieId, commentId: this.commentId, score: this.score, comment: this.comment })
    },
    clickSubmitButton: function () {
      document.getElementById(`submitButton${this.commentId}`).click()
    },
    onCloseForm: function () {
      const self = this
      document.getElementById(`movieCommentUpdateModal${this.commentId}`).addEventListener('hidden.bs.modal', function () {
        self.$store.dispatch('closeMovieCommentEditForm')
      })
    }
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