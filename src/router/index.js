import { createRouter, createWebHistory } from 'vue-router';
import UserLayout from '@/layouts/UserLayout.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

const routes = [
  {
    path: '/',
    component: UserLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/AboutView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true }, // Đánh dấu route admin yêu cầu đăng nhập
    children: [
      {
        path: '',
        name: 'Manage',
        component: () => import('@/views/ManageView.vue'),
      },
      {
        path: 'create',
        name: 'create',
        component: () => import('@/views/CreateView.vue'),
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: () => import('@/views/EditView.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/ContactView.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
