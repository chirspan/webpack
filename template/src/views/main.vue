<template>
  <base-layout primary>
    <simple-head showLogo slot="header"></simple-head>
    <div class="main-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>
    <page-footer slot="footer"></page-footer>
  </base-layout>
</template>

<script>
  import commLib from '../libs/commUtils'
  import BaseLayout from "../components/layout/baseLayout.vue";
  import SimpleHead from "../components/head/simpleHead.vue";
  import PageFooter from "../components/footer/pageFooter.vue";

  export default {
    components: {
      PageFooter,
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
    padding: 0px 20px 0px 0px;
    margin: 0 auto;
    margin-bottom: 35px;
  }
</style>

