<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <BackTop :height="150" :bottom="100" :right="10">
        <i class="iconfont icon-fanhuidingbu top" title="返回顶部"></i>
    </BackTop>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

  }

  #app{
    height: 100%;
  }

  .lock-screen-back{
    border-radius: 50%;
    z-index: -1;
    box-shadow: 0 0 0 0 #667aa6 inset;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    transition: all 3s;
  }
  .top{
    color: rgba(51, 153, 255, .4) !important;
    font-size: 50px !important;
  }
  .top:hover{
    color: rgba(51, 153, 255, 1) !important;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-corner, ::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(100,100,100,0.4);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 1em;
    background-color: rgba(50,50,50,0.3);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(100,100,100,0.8);
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
</style>
