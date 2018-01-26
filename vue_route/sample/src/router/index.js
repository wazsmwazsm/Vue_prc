import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import User from '@/components/User'
import UserProfile from '@/components/UserProfile'
import UserPosts from '@/components/UserPosts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/Bar',
      name: 'Bar',
      component: Bar
    },
    // 动态路径
    {
      path: '/User/:id',
      name: 'User',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view>
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
