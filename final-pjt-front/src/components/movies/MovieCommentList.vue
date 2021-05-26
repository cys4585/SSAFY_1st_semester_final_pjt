<template>
  <div>
    <h3>MovieCommentList.vue</h3>
    <MovieCommentCard
      v-for="(comment, idx) in commentList"
      :key="idx"
      :comment="comment"
      :movieId="movieId"
    />
    
  </div>
</template>

<script>
import MovieCommentCard from '@/components/movies/MovieCommentCard.vue'

export default {
  name: 'MovieCommentList',
  components: {
    MovieCommentCard,
  },
  props: {
    movieId: {
      type: Number
    }
  },
  created: function () {
    // console.log('movie comment list vue is created', this.movieId)
    this.$store.dispatch('getMovieCommentListFromServer', this.movieId)
  },
  computed: {
    commentList: function () {
      return this.$store.state.movieComments
    }
  },
}
</script>

<style>

</style>