<template>
  <div class="base-head clearfix">
    <div class="logo l">
      <slot name="logo"></slot>
    </div>
    <div class="nav l">
      <slot name="nav"></slot>
    </div>
    <slot name="operate-container"></slot>
  </div>
</template>


<script>
  export default {
    name: 'BaseHead',
    data() {
      return {}
    },
    methods: {}
  }
</script>


<style scoped>
  .base-head {
    padding-left: 20px;
    display: block;
    width: 100%;
    height: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .nav {
    padding-left: 4%;
  }


</style>

<style>
  .l {
    float: left;
  }

  .r {
    float: right;
  }
</style>
