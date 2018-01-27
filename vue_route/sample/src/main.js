// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log('I am beforeEach!')
    next()
})
// 全局后置守卫
router.afterEach((to, from, next) => {
    // afterEach 会接受 next 函数
    console.log('I am afterEach!')
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
