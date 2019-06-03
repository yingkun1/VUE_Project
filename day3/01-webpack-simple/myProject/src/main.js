import Vue from 'vue'

//注意：在webpack生成的脚手架中，只要是'.vue'结尾的文件就是一个组件
import App from './App.vue'

console.log(Vue);
new Vue({
  el: '#app',
  render: h => h(App)
})
