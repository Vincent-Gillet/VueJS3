<template>
  <header>

    <router-link :to="{name: 'Home'}">Acceuil</router-link> |
    <router-link :to="{name: 'Page2'}">Page2</router-link> |
  </header>

  <div>
    <h1>App</h1>
    <router-view />
  </div>

</template>

<script>
  export default {}
</script>