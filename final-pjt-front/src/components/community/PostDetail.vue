<template>
  <div class="container postdetail">
    <div class="postdetail-margin">
      <!-- 전체를 네모 form안에 넣기 -->
      <h2>PostDetail.vue</h2>
      <p>작성자 : {{ post.username }}</p>
      <p>제목 : {{ post.title }}</p>
      <p>내용 : {{ post.content }}</p>
      <hr>
      <div class="postdetail-display">
        <button 
          class="btn btn-primary" @click="postLike"
          v-if="isLike"
          >
          <i class="far fa-heart"></i>
        </button>
        <button 
          class="btn btn-primary" @click="postLike"
          v-else
          >
          <i class="fas fa-heart"></i>
        </button>
        <p>좋아요 {{ likeCount }}개</p>
      </div>
      <div v-if="post.username === loginUsername" class="postdetail-button">
        <button class="btn btn-warning" @click="postForm">수정</button>
        <button class="btn btn-danger" @click="deletePost">삭제</button>
      </div>
      <PostCommentForm :postId="post.id"/>
      <PostCommentList :postId="post.id"/>
    </div>
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
.postdetail {
  border: solid rgba(206, 232, 255, 0.603);
  border-width: 1px;
  border-radius: 15px;
  margin-top: 50px;
}
.postdetail-margin {
  margin: 40px 
}
.postdetail-display {
  display: flex;
}
.postdetail-button {
  display: flex;
}
</style>