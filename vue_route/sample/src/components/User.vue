<template>
  <!-- 过度特效 -->
  <div class="user">
    <h1>User {{ $route.params.id }}</h1>
    <p>push_route</p>
    <button @click="push_route(1)">1</button>
    <button @click="push_route(5)">5</button>
    <p>replace_route</p>
    <button @click="replace_route(2)">2</button>
    <button @click="replace_route(4)">4</button>
    <p>go history</p>
    <button @click="go_back()">goBack</button>
    <button @click="go_front()">goFront</button>
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
    beforeRouteEnter (to, from, next) {
      // 登陆验证的一个简单模拟
      if(to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        // if (!auth.loggedIn()) {
        if ( false ) { // 这里不实现登陆验证功能, 只做一个模拟
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      } else {
        next()
      }
    },
    methods: {
        push_route (num) {
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

                同样的规则也适用于 router-link 组件的 to 属性。

            */
        },
        /*
            router-link 形式 : <router-link :to="..." replace>
        */
        replace_route (num) {
            this.$router.push({ path: `/user/${num}` }, function () {
                console.log('replace ' + num + ' successed!');
            })
        },
        go_back () {
            this.$router.go(-1)
        },
        go_front () {
            this.$router.go(1)
        },
    }
}
</script>

<style scoped>
.user {
  padding:20px;
}
</style>
