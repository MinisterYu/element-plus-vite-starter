import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes = setupLayouts([
  ...generatedRoutes,
])

const router = createRouter({
  history: createWebHistory(),
  routes,
})

import type { Component } from 'vue'

// 全局路由守卫处理布局
router.beforeEach((to, from, next) => {
  // 添加明确的类型定义
  const layoutMap: Record<string, () => Promise<{ default: Component }>> = {
    AppLayout: () => import('~/layouts/AppLayout.vue'),
  }
  const layoutName = (to.meta.layout as string) || 'AppLayout'
  to.meta.layoutComponent = layoutMap[layoutName]
  next()
})

export default router

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: () => import('@/layouts/AppLayout.vue'),
//       children: [
//         {
//           path: '',
//           name: 'dashboard',
//           redirect: '/dashboard',
//         },
//         {
//           path: '/user',
//           name: 'user',
//           component: () => import('@/views/users/index.vue'),
//         },
//         {
//           path: '/user/:id',
//           name: 'userInfo',
//           component: () => import('@/views/users/_id.vue'),
//         },
//         {
//           path: '/dashboard',
//           name: 'dashboard',
//           component: () => import('@/views/dashboard.vue'),
//         },
//         {
//           path: '/dynamic',
//           name: 'dynamic',
//           component: () => import('@/views/dynamic.vue'),
//         },
//         {
//           path: '/slot',
//           name: 'slot',
//           component: () => import('@/views/slot.vue'),
//         },
//         {
//           path: '/element',
//           name: 'element',
//           component: () => import('@/views/element.vue'),
//         },
//       ],
//     },
//   ],
// })

// export default router
