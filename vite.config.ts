import path from 'node:path'
import Vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite' // 自动导入 Composition API 和其他库的函数
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
        api: 'modern-compiler',
      },
    },
  },

  plugins: [
    Vue(),
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '/' }], // 将views-auto作为路由根目录
      extensions: ['vue'],
      importMode: 'async',
      exclude: ['**/components/*.vue'],
      routeStyle: 'nuxt', // 使用Nuxt风格的路由生成
      // 添加类型生成
      onRoutesGenerated: (routes) => {
        console.log('Generated routes:', routes)
        return routes
      },
      extendRoute(route) {
        return {
          ...route,
          meta: {
            requiresAuth: false,
            layout: 'AppLayout',
            ...route.meta,
          },
        }
      },
    }),
    Layouts({
      layoutsDirs: 'src/layouts', // 布局文件目录
      defaultLayout: 'AppLayout', // 默认布局组件
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        'vue',
        'vue-router',
        // 'pinia',
        // {
        //   from: 'element-plus',
        //   imports: ['ElMessage'],
        // },
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      dirs: ['src/components', 'src/layouts', 'src/pages'],
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
  ],

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['element-plus'],
  },
})
