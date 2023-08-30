<template>
  <handwrittenSignature :width="400" :height="200" @save="save"></handwrittenSignature>
</template>

<script setup>
  const save = (data) => {
    console.log('[ data ] >', data)
  }
</script>

<style scoped>
</style>
