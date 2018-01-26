<template>
  <div class="userposts">
    <h2>UserPosts {{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {
    name: 'UserPosts'
}
</script>

<style scoped>
.userposts {
  padding:20px;
}
</style>
