<template>
  <div class="app">
      <h3>{{msg}}</h3>
      <div class="app">
      </div>
      <Vheader></Vheader>
      <Vcontent></Vcontent>
      <Vfooter></Vfooter>
  </div>  
  
  
</template>

<script>
// 这是引入子组件:Vheader组件
import Vheader from './components/Vheader.vue'
import Vcontent from './components/Vcontent.vue'
import Vfooter from './components/Vfooter.vue'


export default {
  name:"App",
  data(){
    return {
      msg:'hello 组件',
    }
  },
  // 挂载
  components:{
    // Vheader:Vheader
    Vheader,
    Vcontent,
    Vfooter,
  }
}
</script>


<style>

</style>


