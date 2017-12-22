<template>
  <footer class="footer">
    <span>&copy; \{{copyright}}</span>
  </footer>
</template>

<script>
  import appConf from '../../libs/app-conf'

export default {
  name: 'page-footer',
  props:{},
  components: {
  },
  data() {
    return {
      copyright: appConf.copyYear+' '+appConf.copyName+' 版权所有'
    }
  }
}
</script>

<style>
  .footer {
    /*position: absolute;*/
    text-align: center;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0px 10px;
    background-color: rgb(242, 242, 242);
    color: #ccc;
  }

</style>
