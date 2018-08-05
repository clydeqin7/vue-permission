import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Login
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
  ]
})
