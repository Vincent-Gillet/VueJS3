<script setup>
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Test from '@/components/Test.vue';
import Page2 from "@/components/Page2.vue";

const route = useRoute();


//import { ref, computed } from 'vue'
//import App from './'
//import Page2 from './components/Page2'

//const routes = {
//  '/': App,
//  '/page2': Page2
//}

//const currentPath = ref(window.location.hash)

//window.addEventListener('hashchange', () => {
//  currentPath.value = window.location.hash
//})

//const currentView = computed(() => {
//  return routes[currentPath.value.slice(1) || '/'] || NotFound
//})



//import {reactive} from 'vue';


const  user = reactive({
  name: 'NordCoders',
  age: 30,
})

const display = () => {
  console.log(user.name, user.age);
}
display()

</script>

<template>


  <div class="home">
    <h1>Acceuil</h1>
    <router-view></router-view>

    <HelloWorld :user="user" />
    <br>

    <input type="text" v-model="user.name" @change="display">
    <br>
    <input type="text" v-model="user.age" @change="display">

    <Test />
  </div>
</template>



<style scoped>


</style>
