import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import FindGym from './components/FindGym.vue'
import AddGym from './components/AddGym.vue'
import StartGym from './components/StartGym.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: StartGym,
        },
        {
            path: '/find',
            component: FindGym,
        },
        {
            path: '/add',
            component: AddGym,
        }
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')


