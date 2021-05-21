<template>
  <div>
    <h2>Signup.vue</h2>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">ID</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="credentials.username">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="credentials.password">
      </div>
      <div class="mb-3">
        <label for="passwordconfirmation" class="form-label">PasswordConfirmation</label>
        <input type="password" class="form-control" id="passwordconfirmation" v-model="credentials.passwordConfirmation">
      </div>
      <button type="submit" class="btn btn-primary" @click="signup(credentials)">Signup</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Signup',
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
        passwordConfirmation: null,
      }
    }
  },
  methods: {
    ...mapActions(['signup']),
  }
}
</script>

<style>
</style>