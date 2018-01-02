<template>
  <div class="main-menu-bottom">
    <Menu :active-name="activeMenu" class="menu" width="180px" :open-names="openMenus">
      <Submenu v-for="m,index in menuData" :key="m.id" :name="m.name">
        <template slot="title">
          <Icon :type="m.icon"></Icon>
          {{m.desc}}
        </template>
        <MenuItem v-for="s,sindex in m.subMenu" :key="s.id" :name="s.name" @click.native="changeMenu(index,sindex)">
          {{s.desc}}
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>


<script>
  import bus from '../../libs/bus'

  export default {
    name: 'main-menu-bottom',
    props: {
      theme: String
    },
    data() {
      return {
        fullHeight: document.documentElement.clientHeight,
        activeMenu: '',
        menuData: [
        ]
      }
    },
    methods: {
      changeMenu(index, sindex) {
        let parentMenu = this.menuData[index].subMenu;
        let currentMenu = parentMenu[sindex];
        if (this.$route.name != currentMenu.name) {
          this.$store.dispatch('addOpenMenu', currentMenu);

          this.$router.push({
            name: currentMenu.name
          });

          this.activeMenu = currentMenu.name;

          bus.$emit('open-menu', currentMenu)
        }
      }
    },
    computed: {
      openMenus() {
        let oMenus = [];
        this.menuData.forEach(m => {
          oMenus.push(m.name)
        })
        return oMenus;
      }
    },
    mounted() {
      this.activeMenu = this.$route.name;
    }
  }
</script>


<style lang="scss">
  .main-menu-bottom {
    overflow-y: auto;
    height: 380px;
    .menu {
      background-color: transparent !important;
      color: #fff !important;
      .ivu-menu-item:hover, .ivu-menu-submenu-title:hover {
        background-color: rgba(255, 255, 255, .1) !important;
      }
      .ivu-menu-item:not(.ivu-menu-item-active) {
        color: #fff !important;
      }
      &:after {
        background: none !important;
      }
      .ivu-menu-submenu-title, .ivu-menu-item {
        text-align: left;
      }
    }
  }
</style>
