/// <reference types="vite/client" />

// 声明vite-plugin-pages虚拟模块
declare module '~pages' {
  import type { RouteRecordRaw } from 'vue-router'
  const routes: RouteRecordRaw[]
  export default routes
}

// 声明vite-plugin-vue-layouts虚拟模块
declare module 'virtual:generated-layouts' {
  import type { RouteRecordRaw } from 'vue-router'
  export function setupLayouts(routes: RouteRecordRaw[]): RouteRecordRaw[]
}
