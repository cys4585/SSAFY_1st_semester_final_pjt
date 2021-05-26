<template>
  <div class="container col-sm-2" id="lgoin-background">
    <h1>Sign Out</h1>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" v-model="password">
    </div>
    <button type="submit" class="btn login-button w-100 mb-3" @click="signout">Sign out</button>
    <p>회원탈퇴하시면 복구할 수 없습니다.</p>
  </div>
</template>

<script>
export default {
  name: 'Signout',
  data: function () {
    return {
      password: null,
    }
  },
  methods: {
    signout: function () {
      this.$store.dispatch('signout', this.password)
    }
  },
}
</script>

<style>

</style>