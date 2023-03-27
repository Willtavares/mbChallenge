import {createRouter, createWebHistory} from 'vue-router';
import Multiform from './../components/MultiForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'multiform',
      component: Multiform,
    },
    {
      path: '/list',
      name: 'listclients',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./../components/ListClients.vue'),
    },
  ],
});

export default router;
