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
    },
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      console.log('I am beforeRouteEnter!')
      next()

      /*
        // 不过，你可以通过传一个回调给 next来访问组件实例
        beforeRouteEnter (to, from, next) {
          next(vm => {
            // 通过 `vm` 访问组件实例
          })
        }
      */
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log('I am beforeRouteUpdate!')
      next()
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log('I am beforeRouteLeave!')
        const answer = window.confirm('确定要离开吗亲?')

        if (answer) {
          next()
        } else {
          next(false) // 阻止继续导航
        }

    }
}
</script>

<style scoped>
.home {
  padding:20px;
}
</style>
