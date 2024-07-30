// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Jobs from '@/views/Jobs.vue';
import NotFound from '@/views/NotFound.vue';
import Job from '@/views/Job.vue';
// import AddJob from '@/views/AddJob.vue';
// import EditJob from '@/views/EditJob.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/jobs', component: Jobs },
    // { path: '/jobs/add', component: AddJob },
    // { path: '/jobs/edit/:id', component: EditJob },
    { path: '/jobs/:id', component: Job },
    { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
