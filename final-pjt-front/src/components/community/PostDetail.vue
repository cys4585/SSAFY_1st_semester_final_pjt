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
  computed: {
    post: function () {
      return this.$store.getters.getPostById(Number(this.$route.params.postId))
    },
    loginUsername: function () {
      return this.$store.state.loginUsername
    }
  },
  methods: {
    postForm: function () {
      this.$router.push({ name: 'PostUpdateForm', params: { postId: this.post.id } })
    },
    deletePost: function () {
      this.$store.dispatch('deletePost', this.post.id)
    }
  },
}
</script>

<style>

</style>