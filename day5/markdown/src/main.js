// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    //这里面的状态跟每个组件的数据属性有关系
    allList:[]
  },
  mutations:{
    increment(state){
      state.count++
    }
  }

})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
