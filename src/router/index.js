import { createRouter, createWebHistory } from 'vue-router';
import Flip from '@/views/flip.vue';

const routes = [
  {
    path: '/',
    name: 'Flip',
    component: Flip,
  },
];

const router = createRouter({
  history: createWebHistory(), // 여기서 createWebHistory()를 사용합니다
  routes,
});

export default router;
