<template>
  <div class="app">
    <ul>
      <li>
        <!-- <a href="/">首页</a> -->
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <!-- <a href="/course">课程</a> -->
        <router-link to="/course">课程</router-link>
      </li>
      <li>
        <!-- <a href="/marked">编辑器</a> -->
        <router-link to="marked">编辑器</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>


