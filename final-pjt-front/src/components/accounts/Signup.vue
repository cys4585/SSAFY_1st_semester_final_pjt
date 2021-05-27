<template>
  <div class="account-signup-background">
    <div class="container col-sm-2" id="signup-background">
      <h1>Signup</h1>
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
        <button type="submit" class="btn signup-button w-100 mb-3" @click="signup(credentials)">Signup</button>
  
      </div>
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
.account-signup-background {
  background-image: url('./snowstar.png');
  background-size: 100%;
  height: 1200px;
  padding-top: 130px;
  margin-top: 20px;
}
#signup-background {
  background-color: rgb(175, 175, 175, 0.7);
  color: black;
  padding: 30px;
}
.signup-button {
  background-color: rgb(72, 38, 206);
  color: aliceblue;
}
</style>