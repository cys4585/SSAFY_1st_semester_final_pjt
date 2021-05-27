<template>
  <div>
    <table class="table table-hover moviecomment-line-color">
      <thead>
        <tr class="moviecomment-line-color">
          <th scope="col">별점</th>
          <th scope="col">ID</th>
          <th scope="col">한줄평</th>
          <th scope="col" class="comment-update-delete-button"></th>
          <!-- class="post" 좋아요 수 <th scope="col">Likes</th> -->
        </tr>
      </thead>
      <tbody class="post">
        <MovieCommentCard
          v-for="(comment, idx) in commentList"
          :key="idx"
          :comment="comment"
          :movieId="movieId"
        />
      </tbody>
    </table>
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
.moviecomment-line-color {
  color: rgb(224, 224, 224);
  font-weight: 100;
}
.comment-update-delete-button {
  justify-content: end;
}
</style>