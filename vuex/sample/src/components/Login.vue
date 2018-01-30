<template>
  <div class="login" v-if="loginShow">
    <h1>Login</h1>
    <input v-model="username" class="login-input"><br>
    <input v-model="password" class="login-input"><br>
    <button @click="login">登陆</button>
  </div>
  <div class="login" v-else>
    <h1>You already login!</h1>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
        if(this.username == 'admin' && this.password == '12345') {
            this.$store.commit('login', { username: this.username, password: this.password })
            this.$router.push({ path: '/' })
        } else {
            alert('用户名密码错误')
        }
    }
  },
  computed: {
    loginShow () {
      return ! this.$store.state.login.login_flag
    }
  }
}
</script>

<style scoped>
.login {
  padding: 20px;
}

.login-input {
  padding: 8px;
  margin: 10px;
}
</style>
