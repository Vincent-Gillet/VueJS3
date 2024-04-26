<script setup>
  const props = defineProps(['user']);
</script>

<template>
  <h1>Hello World</h1>
  <p>Votre nom est {{props.user.name}}  et vous avez {{props.user.age}} ans.</p>


</template>

<style scoped>

</style>