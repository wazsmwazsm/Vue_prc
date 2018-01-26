<template>
  <div class="bar">
    <h1>{{ msg }}</h1>
    <button @click="goBack">Go back</button>
  </div>
</template>

<script>
export default {
    name: 'Bar',
    data () {
        return { msg: 'I am Bar!' }
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
.bar {
  padding:20px;
}
</style>
