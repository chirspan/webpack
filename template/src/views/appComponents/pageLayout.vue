<template>
  <div class="page-layout">
    <div class="page-path">
      <slot name="pagePath"></slot>
    </div>
    <div class="page-content">
      <slot></slot>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'page-layout',
    data() {
      return {}
    },
    methods: {}
  }
</script>


<style scoped>
  .page-path {
    background-color: #fff;
    padding: 10px 10px;
  }

  .page-content {
    margin-top: 10px;
    background-color: #fff;
    padding: 10px 10px 30px 10px;
  }
</style>
