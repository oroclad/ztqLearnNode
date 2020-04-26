import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import workTime from '@/components/workTime'
import login from '@/components/login'
import Container from '@/components/Container'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/asd',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/abcd',
      name: 'workTime',
      component: workTime
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/container',
      name: 'container',
      component: Container
    }

  ]
})
