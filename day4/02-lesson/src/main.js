import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import VurRouter from 'vue-router'

import Vmain from './components/Vmain'
import Vcourse from './components/Vcourse'
import Vmarked from './components/Vmarked'

Vue.use(VurRouter);

//定义路由对象，每一个路由应该要映射一个组件
const router = new VurRouter({
  mode:'history',
  routes:[
    {path:'/',component:Vmain},
    {path:'/course',component:Vcourse},
    {path:'/marked',component:Vmarked}     
  ]
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
