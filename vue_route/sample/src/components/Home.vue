<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>{{ 'Current name : ' + routename }}</p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <!-- 命名路由的引用 -->
    <router-link :to="{ name: 'User', params: { id: 12 } }">User 12</router-link>
  </div>
</template>

<script>
export default {
    name: 'Home',
    // ES6 的对象方法语法
    data () {
        return { msg: 'Welcome Home!' }
    },
    computed: {
        routename () {
            return this.$route.name
        }
    }
}
</script>

<style scoped>
.home {
  padding:20px;
}
</style>
