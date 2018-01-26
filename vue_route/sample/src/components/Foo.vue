<template>
  <div class="foo">
    <h1>{{ msg }}</h1>
    <button @click="goBack">Go back</button>
  </div>
</template>

<script>
export default {
    name: 'Foo',
    data () {
        return { msg: 'I am Foo!' }
    },
    methods: {
        goBack () {
          window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.foo {
  padding:20px;
}
</style>
