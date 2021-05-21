<template>
  <div>
    <h2>PostDetail.vue</h2>
    <p>{{ post.title }}</p>
    <p>{{ post.content }}</p>
    <PostCommentForm/>
    <PostCommentList/>
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
    }
  },
}
</script>

<style>

</style>