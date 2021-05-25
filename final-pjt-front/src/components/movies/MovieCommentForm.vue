<template>
  <div>
    <h3>MovieCommentForm.vue</h3>
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
    <div class="mb-3">
      <input  v-model="comment" @keyup.enter="createMovieComment" type="text" class="form-control moviecommentform d-inline" id="formGroupExampleInput" placeholder="댓글을 작성해주세요.">
      <button @click="createMovieComment" class="btn moviecomment-button">작성</button>
    </div>

    
    <!-- <textarea v-model="comment" @keyup.enter="createMovieComment" placeholder="댓글 입력란"></textarea> -->
    
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


</style>