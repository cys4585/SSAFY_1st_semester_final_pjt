<template>
  <div>
  <!-- 여기부턴 모달 테스트 구간 -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">평점등록하기</button>
  <div class="modal fade margin-test" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
          <form>
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
              <input  v-model="comment" @keyup.enter="createMovieComment" type="text" class="form-control moviecommentform d-inline" id="formGroupExampleInput" placeholder="댓글을 작성해주세요.">
            </div>
          </form>
        </div>
        <!-- 작성 버튼 -->
        <div class="modal-footer">
          <button @click="createMovieComment" class="btn moviecomment-button">작성</button>
        </div>
      </div>
    </div>
  </div>

  

  </div>
</template>

<script>
export default {
  name: 'MovieCommentForm',
  data: function () {
    return {
      comment: null,
      score: null,
    }
  },
  props: {
    movieId: {
      type: Number
    }
  },
  methods: {
    createMovieComment: function () {
      this.$store.dispatch('createMovieComment', { movieId: this.movieId, score: this.score, comment: this.comment })
      this.comment = ''
    }
  }
}

</script>

<style>
.moviecommentform {
  width: 90%;
  margin-right: 10px;
}
.moviecomment-button {
  background-color: black;
  border-color: blueviolet;
  color: aliceblue;
}
.margin-test {
  margin-top: 300px;
}


</style>