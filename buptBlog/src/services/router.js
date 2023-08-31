import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/detail/detail.vue';
import Edit from '../pages/edit/edit.vue';
import Links from '../pages/edit/edit.vue';  // 待定
import Search from '../components/search.vue';

const routes = [
  { path: '/detail/detail', component: Home },
  { path: '/edit/edit', component: Edit },
  { path: '/links', component: Links },
  { path: '/search', component: Search }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;