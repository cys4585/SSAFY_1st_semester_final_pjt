<template>
  <div>
    <h4>MovieCommentCard.vue</h4>
    <!-- {{ comment }} -->
    {{ comment.username }}| {{ comment.comment }}
    <!-- <button class="btn btn-warning" @click="">수정</button> -->
    <button 
      v-if="username === comment.username"
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
  name: 'MovieCommentCard',
  props: {
    comment: {
      type: Object,
    },
    movieId: {
      type: Number,
    }
  },
  computed: {
    ...mapState(['username'])
  },
  methods: {
    deleteComment: function () {
      this.$store.dispatch('deleteComment', {movieId: this.movieId, commentId: this.comment.id})
    }
  }

}
</script>

<style>

</style>