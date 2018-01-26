<template>
  <div class="user">
    <h1>User {{ $route.params.id }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'User',
    // beforeRouteUpdate 守卫
    beforeRouteUpdate (to, from, next) {
        // 路由更新时执行
        console.log(to, from, next)
        // 继续调用
        next()
    }
}
</script>

<style scoped>
.user {
  padding:20px;
}
</style>
