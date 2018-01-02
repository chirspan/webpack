<template>
  <div>
    <transition name="dialog-fade" @after-enter="show()" @after-leave="hide()">
      <div class="dialog-wrap" v-show="open" @click.self="clickOutSide">
        <div class="dialog" :style="{'width': width}">
          <slot></slot>

          <div class="dialog-footer">
            <!-- <button @click="clickOutSide">close</button> -->
          </div>
        </div>
      </div>
    </transition>
    <!-- mask -->
    <div class="mask" v-show="open"></div>
  </div>
</template>


<script>
  export default {
    name: 'dp-dialog',
    props: {
      width: {
        type: String,
        default: '30%'
      },
      open: {
        type: Boolean,
        default: false
      },
      appendBody: { // 是否添加到 body 元素后, 内部使用
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        transition: this.dialogTransition
      }
    },
    watch: {

    },
    created() {},
    computed: {},
    methods: {
      show() {
        this.$emit('show')
      },
      hide() {
        this.$emit('hide')
      },
      clickOutSide(e) {
        this.$emit('clickOutSide', e)
      },
    }
  }
</script>

<style scoped lang="scss">
  .dialog-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 102;
    text-align: right;

    .dialog {
      position: relative;
      height: calc(100vh - 40px);
      overflow-y: auto;
      background: #fff;
      /*border-radius: 4px;*/
      z-index: 1000;
      transition: all .2s;
      display: inline-block;
      text-align: left;
      padding: 20px;
    }
  }

  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: .6;
    z-index: 101;
  }

  .dialog-fade-enter-active {
    animation: dialog-fade-in .4s;
  }

  .dialog-fade-leave-active {
    animation: dialog-fade-out .4s;
  }

  @keyframes dialog-fade-in {
    0% {
      transform: translate3d(100%, 0, 0);
      opacity: 0;
    }

    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    100% {
      transform: translate3d(100%, 0, 0);
      opacity: 0;
    }
  }
</style>
