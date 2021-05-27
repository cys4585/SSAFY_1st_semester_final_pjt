<template>
  <div class="postcreateform">
    <div class="container">
      <!-- <h2>PostCreateForm.vue</h2> -->
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input type="text" v-model="title" class="form-control" id="exampleFormControlInput1" placeholder="제목을 입력하세요.">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Content</label>
        <textarea v-model="content" class="form-control" id="exampleFormControlTextarea1" placeholder="내용을 입력하세요." rows="10"></textarea>
      </div>
      <button class="btn postcreate-button" style="float: right;" @click="createPost">작성</button>
  <!--     
      title : <input type="text" v-model="title">
      content : <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  data: function () {
    return {
      title: null,
      content: null,
    }
  },
  methods: {
    createPost: function () {
      this.$store.dispatch('createPost', { title: this.title, content: this.content })
    }
  },
}
</script>

<style>
.postcreateform {
  background-image: url('./PostCreateForm.jpeg');
  background-size: 100%;
  height: 1000px;
  padding-top: 130px;
  color: blueviolet;
}
.postcreate-button {
  background-color: black;
  border-color: blueviolet;
  color: aliceblue;
}
</style>