

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Page2 from '@/components/Page2.vue'

const routes = [
        { path: '/', component: Home, name: 'Home' },
        { path: '/page2', component: Page2, name: 'Page2' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
