<template>
  <div class="container postdetail">
    <div class="postdetail-margin">
      <!-- 전체를 네모 form안에 넣기 -->
      <h2>PostDetail.vue</h2>
      <p>작성자 : {{ post.username }}</p>
      <p>제목 : {{ post.title }}</p>
      <p>내용 : {{ post.content }}</p>
      <hr>
      <div v-if="post.username === loginUsername" class="postdetail-button">
        <button class="btn post-update-button" @click="postForm">수정</button>
        <button class="btn post-delete-button" @click="deletePost">삭제</button>
      </div>
      <div>
        <button 
          class="btn postdetail-unlike-button" @click="postLike"
          v-if="isLike"
          >
          <i class="far fa-heart"></i>
        </button>
        <button 
          class="btn postdetail-like-button" @click="postLike"
          v-else
          >
          <i class="fas fa-heart"></i>
        </button>
        <p>좋아요 {{ likeCount }}개</p>
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

.postdetail-button {
  text-align: right;
  
}
.postdetail-like-button {
  color:red;
  font-size: 30px;
}
.postdetail-unlike-button {
  background-color: black;
  color: red;
  font-size: 30px;
}
.post-update-button {
  background-color: black;
  /* border-color: rgb(0, 183, 255); */
  border-color: rgba(206, 232, 255, 0.603);
  color: aliceblue;
  margin-right: 10px;

}
.post-delete-button {
  background-color: black;
  border-color: rgba(206, 232, 255, 0.603);
  color: aliceblue;

}
</style>