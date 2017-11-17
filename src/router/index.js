import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import Sign from '@/views/layout/sign'
import Service from '@/views/layout/service'
import Home from '@/views/layout/home'
import China from '@/views/map'
Vue.use(Router)
export default new Router({
//   mode:"history",
  routes: [
    {
      path: '/',
      redirect: "/home",
      name: 'layout',
      component: Layout,
      children: [
        {
          path: 'sign',
          component: Sign
        },
        {
          path: 'service',
          component: Service
        },
        {
          path: 'home',
          component: Home
        }
      ]

    }
  ]
})
