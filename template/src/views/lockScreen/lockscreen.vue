<template>
  <div @click="lockScreen" class="lock-screen-btn-con">
    <Tooltip content="锁屏" placement="bottom">
      <Icon type="locked" :size="20"></Icon>
    </Tooltip>
  </div>
</template>

<script>
  export default {
    name: 'lockScreen',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      lockScreen() {
        let lockScreenBack = document.getElementById('lock_screen_back');
        lockScreenBack.style.transition = 'all 3s';
        lockScreenBack.style.zIndex = 10000;
        lockScreenBack.style.boxShadow = '0 0 0 ' + this.lockScreenSize + 'px #667aa6 inset';
        this.showUnlock = true;

        let backRoute = this.$route.fullPath

        localStorage.islocking = 1
        setTimeout(() => {
          lockScreenBack.style.transition = 'all 0s';
          this.$router.push({
            name: 'locking',
            query: {uri: backRoute}
          });
        }, 800);
      }
    },
    mounted() {
      let lockdiv = document.createElement('div');
      lockdiv.setAttribute('id', 'lock_screen_back');
      lockdiv.setAttribute('class', 'lock-screen-back');
      if (!document.getElementById('lock_screen_back'))
        document.body.appendChild(lockdiv);
      let lockScreenBack = document.getElementById('lock_screen_back');
      let x = document.body.clientWidth;
      let y = document.body.clientHeight;
      let r = Math.sqrt(x * x + y * y);
      let size = parseInt(r);
      this.lockScreenSize = size;
      window.addEventListener('resize', () => {
        let x = document.body.clientWidth;
        let y = document.body.clientHeight;
        let r = Math.sqrt(x * x + y * y);
        let size = parseInt(r);
        this.lockScreenSize = size;
        lockScreenBack.style.transition = 'all 0s';
        lockScreenBack.style.width = lockScreenBack.style.height = size + 'px';
      });
      lockScreenBack.style.width = lockScreenBack.style.height = size + 'px';
    }
  };
</script>
