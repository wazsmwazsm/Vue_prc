<template>
  <div class="home">
    <h1>Home</h1>
    <p>Hello {{ userInfo.username }} !</p>
    <button @click="logout">登出</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    userInfo () {
      return this.$store.state.login.userInfo
    }
  },
  methods: {
    logout () {
      this.$store.commit('logout')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
