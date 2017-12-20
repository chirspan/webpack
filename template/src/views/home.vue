<template>
  <base-layout class="home" original>
    <div class="main-content">
     
    </div>
  </base-layout>
</template>

<script>
  import commLib from '../libs/commUtils'
  import BaseLayout from "../components/layout/baseLayout.vue";

  export default {
    components: {
      BaseLayout,
    },
    name: 'home',
    data() {
      return {
        win: null,
        time: null
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
    padding: 200px 30px 0px 30px;
    margin: 0 auto;
  }
</style>

<style>
  .icon-lg {
    font-size: 100px;
  }
</style>
