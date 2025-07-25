// import "~/styles/element/index.scss";
import { createApp } from "vue";

import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";
// or use cdn, uncomment cdn link in `index.html`
import '~/styles/index.scss'
import 'uno.css'
// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'
import App from './App.vue'
import router from './router'

// import { initRequestInstance } from './api/axios-wrappers'
// initRequestInstance()

const app = createApp(App)
// 启用pinia
// app.use(createPinia())
// 注册路由信息
app.use(router)
// 注册 element-plus
app.use(ElementPlus)
// size 用于改变组件的默认尺寸，zIndex 设置弹框的初始 z-index（默认值：2000）。按需引入 Element Plus 的方式
app.use(ElementPlus, { size: 'large', zIndex: 3000 })
// 挂载 app
router.isReady().then(() => {
  console.log('路由加载完成')
  app.mount('#app')
})