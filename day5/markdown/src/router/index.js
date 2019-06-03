import Vue from 'vue'
import Router from 'vue-router'
import Vmain from '@/components/Vmain'
import Vnode from '@/components/Vnode'
// import Vheader from '@/components/Vheader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vmain',
      component: Vmain
    },
    {
      path: '/node',
      name: 'Vnode',
      component: Vnode
    }
  ]
})
