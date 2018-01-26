<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>{{ 'Current name : ' + routename }}</p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </div>
</template>

<script>
export default {
    name: 'Home',
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
