<template>
  <div id="app">
    <Vheader></Vheader>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Vheader from '@/components/Vheader'
import $ from 'jquery'

export default {
  name: 'App',
  components:{
    Vheader
  },
  mounted(){
    var _this = this
    $.ajax({
      url:'http://127.0.0.1:9527/api/comments/',
      methods:'get',
      success:function(data){
        // console.log(_this);
        _this.$store.state.allList = data;
      }
    })
  }
}
</script>

<style>
</style>
