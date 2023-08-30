# vue3手写签名组件

## 用法
```
npm i handwritten-signature-vue3
```
```html
<template>
  <handwritten-signature 
    @save="save"
  >
  </handwritten-signature>
</template>

<script setup>
  import handwrittenSignature from 'handwritten-signature-vue3'

  const save = (data) => {
    console.log('[ data ] >', data)
  }
</script>

<style scoped>
</style>
```

## 参数
| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | Number | 600 | 画布宽度（单位px） |
| height | Number | 400 | 画布高度（单位px） |
| prev | Boolean | true | 是否显示上一步按钮 |
| reset | Boolean | true | 是否显示重做按钮 |