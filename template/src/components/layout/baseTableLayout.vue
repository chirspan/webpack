<template>
  <div class="base-table-layout">
    <Row class="margin-top-10">
      <Input v-model="searchName" @on-change="handleSearch" placeholder="请输入搜索内容..."
             style="width: 200px"/>
      <Button type="primary" icon="ios-search-strong" @click.native="handleSearch">搜索</Button>
      <slot name="more-opreation"></slot>
    </Row>

    <Row class="margin-top-10">
      <slot></slot>
    </Row>

  </div>
</template>

<script>
  import dpDialog from "@/components/dialog/dialog.vue"

  export default {
    name: 'base-table-layout',
    components: {dpDialog},
    props: {},
    data() {
      return {
        searchName: '',
      }
    },
    methods: {
      handleSearch() {
        this.$emit('handleSearch', this.searchGroupName)
      },
    }
  }
</script>

<style lang="scss" scoped>
  .base-table-layout {

  }


</style>

