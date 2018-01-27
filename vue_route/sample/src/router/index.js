import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import User from '@/components/User'
import UserProfile from '@/components/UserProfile'
import UserPosts from '@/components/UserPosts'
import Hi from '@/components/Hi'

import Product from '@/components/Product'
import Promotion from '@/components/Promotion'
import Search from '@/components/Search'


Vue.use(Router)

export default new Router({
  /*
     路由的 history 模式可以有一个简洁好看的 URL 但是需要配置服务器重写规则

    Apache

    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.html [L]
    </IfModule>

    nginx

    location / {
      try_files $uri $uri/ /index.html;
    }

  */
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home', // 命名路由
      component: Home,
      alias: '/homepage'  // 别名
    },
    {
      path: '/home',
      // 与别名不同，重定向会直接跳转路由
      redirect: '/' // 重定向  可以是一个命名的路由 甚至是一个方法
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
      components: {
          default: User,
          hi: Hi
      },
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
    },
    // 如果 props 被设置为 true，route.params 将会被设置为组件属性
    {
      path: '/Product/:id',
      name: 'Product',
      component:  Product,
      props: true
      /*
        // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
        path: '/user/:id',
        components: { default: User, sidebar: Sidebar },
        props: { default: true, sidebar: false }
      */
    },
    // 如果 props 是一个对象，它会被按原样设置为组件属性
    {
      path: '/Promotion',
      name: 'Promotion',
      component: Promotion,
      props: {
          newsletterPopup: false // 直接传入组件的 props 中
      }
    },
    // 你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      // 语法参见 JavaScript 箭头函数
      // URL /search?q=vue 会将 {query: 'vue'} 作为属性传递给 SearchUser 组件。
      props: (route) => ({ query: route.query.q })
    }
  ]
})
