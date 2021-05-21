<template>
  <div>
    <div class="container col-sm-2" id="lgoin-background">
      <h1>Login</h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">ID</label>
          <input type="email" class="form-control" id="exampleInputEmail1" v-model="credentials.username">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="credentials.password">
        </div>
        <button type="submit" class="btn btn-primary w-100 mb-3" @click="login(credentials)">Login</button>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
    ...mapActions(['login']),
  }
}
</script>

<style>
#lgoin-background {
  background-color: rgb(175, 175, 175, 0.5);
  color: black;
}

</style>