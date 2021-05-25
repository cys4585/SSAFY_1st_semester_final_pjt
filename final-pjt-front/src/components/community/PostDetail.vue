<template>
  <div>
    <h2>PostDetail.vue</h2>
    <p>작성자 : {{ post.username }}</p>
    <p>제목 : {{ post.title }}</p>
    <p>내용 : {{ post.content }}</p>
    <div v-if="post.username === loginUsername">
      <button class="btn btn-warning" @click="postForm">수정</button>
      <button class="btn btn-danger" @click="deletePost">삭제</button>
    </div>
    <button 
      class="btn btn-primary" @click="postLike"
      v-if="isLike"
      >
      <i class="far fa-heart"></i>
      좋아요 취소
    </button>
    <button 
      class="btn btn-primary" @click="postLike"
      v-else
      >
      <i class="fas fa-heart"></i>
      좋아요
    </button>
    <p class="movie-margin">좋아요 수 : {{ likeCount }}</p>
    <PostCommentForm :postId="post.id"/>
    <PostCommentList :postId="post.id"/>
  </div>
</template>

<script>
import PostCommentForm from '@/components/community/PostCommentForm.vue'
import PostCommentList from '@/components/community/PostCommentList.vue'

export default {
  name: 'PostDetail',
  components: {
    PostCommentForm,
    PostCommentList,
  },
  created: function () {
    this.$store.dispatch('getPostLikeStatusFromServer', this.post.id)
  },
  computed: {
    post: function () {
      return this.$store.getters.getPostById(Number(this.$route.params.postId))
    },
    loginUsername: function () {
      return this.$store.state.loginUsername
    },
    isLike: function () {
      return this.$store.state.postLikeStatus
    },
    likeCount: function () {
      return this.$store.state.postLikeCount
    }
  },
  methods: {
    postForm: function () {
      this.$router.push({ name: 'PostUpdateForm', params: { postId: this.post.id } })
    },
    deletePost: function () {
      this.$store.dispatch('deletePost', this.post.id)
    },
    postLike: function () {
      this.$store.dispatch('postLike', this.post.id)
    }
  },
}
</script>

<style>

</style>