<template>
  <Select v-model="model" size="small">
    <Option v-for="item in dataTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
  </Select>
</template>


<script>
  export default {
    name: 'data-type-select',
    props: {
      value: {type: String, default: 'VARCHAR2'}
    },
    data() {
      return {
        model: this.value,
        dataTypeList: [
          {
            value: 'VARCHAR2',
            label: '字符型'
          },
          {
            value: 'INTEGER',
            label: '整数型'
          },
          {
            value: 'DATE',
            label: '日期型'
          },
        ]
      }
    },
    methods: {}
  }
</script>


<style scoped>

</style>
