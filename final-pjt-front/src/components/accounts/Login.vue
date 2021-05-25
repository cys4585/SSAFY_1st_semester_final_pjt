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
        <button type="submit" class="btn login-button w-100 mb-3" @click="login(credentials)">Login</button>
        <p>MOVIE 회원이 아닌가요?</p>
        <router-link :to="{ name: 'Signup' }" class="signup">지금 가입하세요</router-link>
    </div>
    <router-view/>
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
  background-color: rgba(175, 175, 175, 0.7);
  color: black;
  padding: 30px;
}
.login-button {
  background-color: rgb(122, 31, 162);
  color: aliceblue;
}

.signup {
  text-decoration: none;
  color: rgb(122, 31, 162);
  font-weight: bold;
}


</style>