import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Top from '@/components/Top.vue';
import List from '@/components/List.vue';
import Cart from '@/components/Cart.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Top
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router