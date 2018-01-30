import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Pagenotfound from '@/components/Pagenotfound'
import store from '@/store/store'

Vue.use(Router)

export default new Router({
  routes: [
    // 设置未找到跳转到 404 路由
    {
      path: "*",
      redirect: "/pagenotfound"
    },
    {
      path: '/pagenotfound',
      name: 'pagenotfound',
      component: Pagenotfound
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter (to, from, next) {
        if( ! store.state.login.login_flag) {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
