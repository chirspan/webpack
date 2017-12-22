<template>
  <base-head>
    <div class="logo-container" slot="logo" v-if="showLogo">
      <img src="../../assets/img/logo-white.png" class="logo-img" height="30">
      <div class="logo-title" >
        \{{appName}}
      </div>
    </div>
    <div slot="operate-container" class="head-operate-container r">
      <div class="operate-right" v-if="search">
        <!--search-->
        <div class="search l">
        </div>
      </div>
      <!--lock-->
      <div class="operate-right" v-if="lock">
        <span style="cursor: pointer"><lock-screen></lock-screen></span>
      </div>
      <div class="operate-right" v-if="search">
        <Tooltip content="首页" placement="bottom">
          <router-link to="/home">
            <Icon type="ios-home" size="22" color="white"></Icon>
          </router-link>
        </Tooltip>
      </div>
      <!--user info and menu-->
      <div class="operate-right user-dropdown-info" v-if="userInfo">
        <Dropdown class="user-innercon" trigger="click" placement="bottom-end">
          <span>\{{ userInfo.username}}</span>
          <Icon type="arrow-down-b"></Icon>
          <DropdownMenu slot="list">
            <DropdownItem>个人中心</DropdownItem>
            <DropdownItem>修改密码</DropdownItem>
            <DropdownItem>设置</DropdownItem>
            <DropdownItem divided>帮助</DropdownItem>
            <DropdownItem @click.native="logout">退出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  </base-head>
</template>


<script>
  import appConf from '@/libs/app-conf.js'
  import LockScreen from "../lockScreen/lockscreen.vue";
  import BaseHead from "../layout/baseHead.vue";

  export default {
    name: 'simple-head',
    components: {
      BaseHead,
      LockScreen,
    },
    props: {
      value: String,
      showLogo: Boolean,
      search: Boolean,
      lock: {type: Boolean, default: true},
      appTitle: String
    },
    data() {
      return {
        appName: this.appTitle ? this.appTitle : appConf.appName,
        kw: this.value
      }
    },
    computed: {
      userInfo() {
        return this.$store.state.user
      },
      isFullScreen: {
        get() {
          return this.$store.state.isFullScreen
        }
        ,
        set(value) {
          this.$store.state.isFullScreen = value
        }
      },
    },
    methods: {
      logout() {
        this.$Modal.confirm({
          title: '退出确认',
          content: '<p>确定退出当前登录用户？</p>',
          onOk: () => {
          },
          onCancel: () => {
          }
        });
      }
    }
  }
</script>


<style scoped lang="scss">
  .logo-container{
    display: flex;
  }
  .logo-img{
    margin-right: 30px;
    margin-left: 15px;
  }
  .logo-title {
    font-size: 20px;
    font-weight: bold;
  }

  .operate-right {
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 12px;
  }

  .head-operate-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding-right: 10px;
  }

  .user-dropdown-info {
    cursor: pointer;
  }

  .search {
    display: flex;
    align-items: center;
    height: 100%;
  }
</style>

<style lang="scss">

</style>
