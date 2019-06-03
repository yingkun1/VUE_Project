import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
console.log($);

new Vue({
  el: '#app',
  render: h => h(App)
})
