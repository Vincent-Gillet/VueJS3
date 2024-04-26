<script setup>
  const props = defineProps(['user']);
</script>

<template>
  <h1>Hello World</h1>
  <slot name="name">

  </slot>
  <slot name="age"></slot>
</template>

<style scoped>


</style>