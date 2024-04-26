

<template>
  <header>
    <HelloWorld />


    <div class="bold"
         :class="[user.age > 30 ? 'text-red' : 'text-green']">
        {{user.name}}
    </div>


  </header>

  <main>

  </main>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { ref } from 'vue';

const name = ref('NordCoders');
const name = ref('NordCoders');

const user = reactive({
  name: 'NordCoders',
      age: 30,
});


const display = () => {
  console.log(user.name, user.age);
}

display()

</script>

<style scoped>

.bold {
  font-weight: bolder;
}

.text-red {
  color:indianred;
}

.text-green {
  color: green;
}

</style>
