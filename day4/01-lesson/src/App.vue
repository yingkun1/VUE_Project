<template>
  <div class="app">
    <Vheader></Vheader>
    <h1>{{currentMsg}}</h1>  
    <img :src="imgSrc" alt="">
    <ul>
      <!-- <li v-for="(item,index) in girls:"key=index> -->
        <!-- <a href="#">{{item}}</a> -->
      <!-- </li> -->
    </ul>

    <button @click="clickHandler">修改按钮</button>

    <Vcontent></Vcontent>
    <vfooter></vfooter>
  </div>  
</template>

<script>
//webpack file-loader
import imgSrc from './assets/logo.png'
import Vheader from './components/Vheader.vue'
import Vcontent from './components/Vcontent.vue'
import Vfooter from './components/Vfooter.vue'

export default {
  name:'app',
  data () {
    return{
      msg:"HELLO S9",
      girls:[
        '范冰冰','李宇春','张靓颖'
      ],
      imgSrc:imgSrc,

    }
  },
  methods:{
    clickHandler(){
      this.msg = '哈哈哈';
    }
  },
  computed:{
    currentMsg(){
      return this.msg
    },
    getArray(){
      return this.girls
    }
  },
  components:{
    Vheader,
    Vcontent,
    Vfooter,
  }


}
</script>

<style>

</style>


