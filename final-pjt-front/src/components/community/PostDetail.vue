<template>
  <div class="container postdetail">
    <div class="postdetail-margin">
      <!-- 전체를 네모 form안에 넣기 -->
      <p class="postdtail-title">{{ post.title }}</p>
      <p class="postdtail-user">{{ post.username }}</p>
      <hr class="postdetail-hr">
      <p class="postdtail-content">{{ post.content }}</p>
      <hr>
      <div v-if="post.username === loginUsername" class="postdetail-button">
        <button class="btn post-update-button" @click="postForm">수정</button>
        <button class="btn post-delete-button" @click="deletePost">삭제</button>
      </div>
      <div>
        <button class="btn postdetail-like-button" id="like-button" @click="postLike">
          <i v-if="isLike" class="fas fa-heart"></i>
          <i v-else class="far fa-heart"></i>
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
  watch: {
    isLike: function () {
      const likeButton = document.getElementById('like-button')
      const childTag = likeButton.children[0]
      const val = this.isLike ? 'fas fa-heart' : 'far fa-heart'
      childTag.setAttribute('class', val)
    },
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
  margin-bottom: 80px;
}
.postdtail-user {
  color: aliceblue;
}
.postdtail-title {
  color: aliceblue;
  font-size: 30px;
}
.postdtail-content {
  color: aliceblue;
  font-size: 25px;
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
.postdetail-hr {
  color: aliceblue;
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