<template>
  <base-layout class="home">
    <simple-head showLogo slot="header"></simple-head>
    <div class="main-content">
      <!--<div class="l-menu">
        <main-menu></main-menu>
      </div>-->
      <div class="r-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <footer-bar slot="footer"></footer-bar>
  </base-layout>
</template>

<script>
  import commLib from '../libs/commUtils'
  import BaseLayout from "../components/layout/baseLayout.vue";
  import SimpleHead from "../components/head/simpleHead.vue";
  import FooterBar from "./footer/footerBar.vue";

  export default {
    components: {
      FooterBar,
      BaseLayout,
      SimpleHead,
    },
    name: 'main-app',
    data() {
      return {
        time: null,
      }
    },
    created() {
      setInterval(() => {
        this.time = commLib.getCurDate();
      }, 100);
    },
  }
</script>

<style scoped lang="scss">
  .main-content {
    display: flex;
    padding: 0;
    margin-bottom: 30px;
  }

  .l-menu {
    /*margin-right: 10px;*/
    background-color: #fff;
  }

  .r-content {
    width: 100%;
    padding: 10px;
  }
</style>


<style>
  .icon-lg {
    font-size: 100px;
  }

  .margin-top-10 {
    margin-top: 10px;
  }

  .inline {
    display: inline-block;
  }
  .model-dialog-right{
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 460px;
    padding: 24px;
  }
</style>
