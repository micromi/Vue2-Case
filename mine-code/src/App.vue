<template>
  <div id="app">
    <div class="app-head">
      <div class="app-head-inner">
        <img src="./assets/logo.png">
        <div class="head-nav">
          <ul class="nav-list">
            <li>登录</li>
            <li class="nav-pile">|</li>
            <li>注册</li>
            <li class="nav-pile">|</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <div class="app-foot">
      © 2017 micromi MIT
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>

</style>
