import Vue from 'vue'
import Router from 'vue-router'
// 导入组件
import Login from '@/components/Login'
import AppIndex from '@/components/home/AppIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    }
  ]
})
