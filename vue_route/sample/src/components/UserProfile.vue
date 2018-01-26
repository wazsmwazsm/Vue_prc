<template>
  <div class="userprofile">
    <h2>UserProfile {{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {
    name: 'UserProfile'
}
</script>

<style scoped>
.userprofile {
  padding:20px;
}
</style>
