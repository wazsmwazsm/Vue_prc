<template>
  <div class="user">
    <h1>User {{ $route.params.id }}</h1>
    <button @click="go_route(1)">1</button>
    <button @click="go_route(5)">5</button>
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
    },
    methods: {
        go_route (num) {
            this.$router.push({ path: `/user/${num}` })

            /*
                // 字符串
                router.push('home')

                // 对象
                router.push({ path: 'home' })

                // 命名的路由
                router.push({ name: 'user', params: { userId: 123 }})

                // 带查询参数，变成 /register?plan=private
                router.push({ path: 'register', query: { plan: 'private' }})
            */
        }
    }
}
</script>

<style scoped>
.user {
  padding:20px;
}
</style>
