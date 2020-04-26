<template>
  <div id="app">
    <div class="block">
      <span class="demonstration">人员级联选择器</span>
      <el-cascader
        :options="options"
        :props="{ multiple: true, checkStrictly: true }"
        clearable></el-cascader>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      options: [{
        value: 1,
        label: '信息文档处',
        children: [{
          value: 2,
          label: '信息科',
          children: [
            { value: 3, label: '张三' },
            { value: 4, label: '李四' },
            { value: 5, label: '王五' },
            { value: 6, label: '赵六' }
          ]
        }, {
          value: 7,
          label: '文档科',
          children: [
            { value: 3, label: '张三' },
            { value: 4, label: '李四' },
            { value: 5, label: '王五' },
            { value: 6, label: '赵六' }
          ]
        }]
      }, {
        value: 17,
        label: '运行处',
        children: [{
          value: 18,
          label: '陕西',
          children: [
            { value: 19, label: '西安' },
            { value: 20, label: '延安' }
          ]
        }, {
          value: 21,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 22, label: '乌鲁木齐' },
            { value: 23, label: '克拉玛依' }
          ]
        }]
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
