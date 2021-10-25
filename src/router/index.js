import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import FirstComer from '@/components/FirstComer.vue';
import ReturningUser from '@/components/ReturningUser.vue';
import RegisteredUser from '@/components/RegisteredUser.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/FirstComer',
        name: 'FirstComer',
        component: FirstComer,
    },
    {
        path: '/ReturningUser',
        name: 'ReturningUser',
        component: ReturningUser,

    },
    {
        path: '/RegisteredUser',
        name: 'RegisteredUser',
        component: RegisteredUser,
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router