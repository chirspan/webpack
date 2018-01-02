<template>
  <div class="footer-bar" ref="footerBar">
    <div class="l-bar">
      <div class="l-button" @click="toggleDropMenu">
        <Icon type="social-windows" size="28"></Icon>
      </div>
      <div class="bar-search">
        <Input v-model="searchTxt" icon="ios-search" placeholder="输入您要搜索的内容..." style="width: 200px"></Input>
      </div>

      <div class="bar-title" v-for="m,index in openedMenu" :class="m.actived?'bar-actived':''"
           @click="handleOpenMenu(m)">
        {{m.desc}}
        <Icon type="ios-close-empty" size="20" class="icon" @click.native.stop="closeMenu(index)"></Icon>
      </div>
    </div>

    <div class="r-bar">
      <div class="bar-time">
        {{time}}
      </div>
    </div>

    <div class="drop-menu" v-show="showDropMenu">
      <div class="l-menu">
        <ul>
          <!--用户-->
          <li>
            <Tooltip content="admin" placement="top">
              <Avatar icon="person" size="small" style="background-color: #2d8cf0"/>
            </Tooltip>
          </li>
          <!--设置-->
          <li>
            <Tooltip content="设置" placement="top">
              <Icon type="ios-gear" size="26"></Icon>
            </Tooltip>
          </li>
          <!--退出-->
          <li>
            <Tooltip content="退出" placement="top">
              <Icon type="power" size="22" @click.native="logout"></Icon>
            </Tooltip>
          </li>
        </ul>
      </div>
      <div class="r-menu">
        <main-menu-bottom theme="light" accordion></main-menu-bottom>
      </div>
      <div class="r-mark">
        <div style="text-align: left">常用</div>
        <mark-menu @on-open-menu="handleOpenMenu"></mark-menu>
      </div>
    </div>
  </div>
</template>


<script>
  import bus from '../../libs/bus'
  import commLib from '../../libs/commUtils'
  import MainMenuBottom from "../appComponents/mainMenuBottom.vue";
  import MarkMenu from "../appComponents/markMenu.vue";

  export default {
    components: {
      MarkMenu,
      MainMenuBottom
    },
    name: 'footer-bar',
    data() {
      return {
        searchTxt: null,
        time: null,
        title: null,
        showDropMenu: false
      }
    },
    methods: {
      logout() {
        this.$Modal.confirm({
          title: '退出确认',
          content: '<p>确定退出当前登录用户？</p>',
          onOk: () => {
            this.$router.push({name:'login'})
          },
          onCancel: () => {
          }
        });
      },
      handleClickOutSide(e) {
        if (!this.$refs.footerBar.contains(e.target)) {
          this.showDropMenu = false;
        }
      },
      show() {
        this.showDropMenu = true;
      },
      hide() {
        this.showDropMenu = false;
      },
      toggleDropMenu() {
        this.showDropMenu ? this.hide() : this.show();
      },
      handleOpenMenu(m) {
        if (this.$route.name != m.name) {
          this.$store.dispatch('addOpenMenu', m);

          this.$router.push({
            name: m.name
          });

          this.showDropMenu = false;
        }
      },
      closeMenu(index) {

        this.$store.dispatch('removeMenuTag', index);

        if (index == 0) {
          this.$router.push({name: 'home_index'})
        } else {
          let redirectMenu = this.openedMenu[index - 1];
          this.$store.dispatch('addOpenMenu', redirectMenu);

          this.$router.push({
            name: redirectMenu.name
          });
        }
      }
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutSide);
    },
    computed: {
      openedMenu() {
        return this.$store.state.openMenu
      }
    },
    created() {
      setInterval(() => {
        this.time = commLib.getCurDate();
      }, 100);
    },
    mounted() {
      this.title = document.title.split('-')[0];
      document.addEventListener('click', this.handleClickOutSide);

      bus.$on('open-menu', () => {
        this.hide();
      })
    }
  }
</script>


<style scoped lang="scss">
  .footer-bar {
    height: 40px;
    background-color: rgba(0, 0, 0, .8);
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    .l-bar {
      display: flex;
      align-items: center;

      .bar-search {
        margin-left: 30px;
        margin-right: 10px;
      }
      .l-button {
        color: #fff;
        :hover {
          cursor: pointer;
          color: #2d8cf0;
        }
      }

    }

    .bar-time {
      color: #fff;
    }

    .bar-title {
      color: #fff;
      margin-left: 2px;
      padding: 8px 20px;
      display: flex;
      align-items: center;

      &.bar-actived {
        background-color: rgba(255, 255, 255, .1);
        border-bottom: 3px solid #2d8cf0;

      }

      &:hover {
        cursor: default;
        background-color: rgba(255, 255, 255, .1);
        .icon {
          visibility: visible;
        }
      }

      .icon {
        margin-left: 5px;
        visibility: hidden;
        &:hover {
          color: red;
        }
      }
    }
  }

  .drop-menu {
    position: absolute;
    width: 470px;
    height: 400px;
    left: 0;
    bottom: 40px;
    background-color: rgba(0, 0, 0, .7);
    padding: 10px 10px;
    display: flex;

    .l-menu {
      width: 40px;
      display: flex;
      margin-top: 270px;
      ul {
        color: #fff;
      }
      li {
        align-items: center;
        list-style: none;
        padding: 7px 5px;
        margin: 0;
        line-height: normal;
      }
    }

    .r-menu {
      margin-left: 5px;
    }

    .r-mark {
      margin-left: 10px;
      color: #fff;
      width: 200px;
    }

  }
</style>

<style>
  .bar-search input {
    border-radius: 0 !important;
    background-color: rgba(255, 255, 255, .1) !important;
    border-color: rgba(50, 50, 50, .2);
  }

  .bar-search input:hover, .bar-search input:focus {
    background-color: rgba(255, 255, 255, .1) !important;
  }
</style>
