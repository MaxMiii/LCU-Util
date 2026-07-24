/**
 * ===================================================================
 * Vue 应用入口文件 (src/main.ts)
 * ===================================================================
 * 作用：
 *   - 初始化 Vue 应用实例
 *   - 全局注册 Element Plus 组件
 *   - 引入路由配置
 *   - 引入全局样式（包括滚动条样式）
 *   - 配置 Vue 应用基本选项
 * ===================================================================
 */

import { createApp } from 'vue'
import App from './App.vue'

// ==============================
// 路由配置
// ==============================
import router from './router'

// ==============================
// Element Plus UI 库
// ==============================
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// ==============================
// 全局样式
// ==============================
import './style/scrollbar.scss' // 引入自定义滚动条样式

// ==============================
// Pinia 状态管理
// ==============================
import { createPinia } from 'pinia'

// ==============================
// i18n 国际化
// ==============================
import { installI18n } from './i18n'

// ==============================
// 创建并挂载应用
// ==============================
const app = createApp(App)

// ==============================
// LCU WebSocket 事件总线（启动时自动连接）
// ==============================
import { lcuEventBus } from './utils/lcu-event-bus'
lcuEventBus.start()

// ==============================
// 全局 Store
// ==============================
import { useChatStore } from './stores/chat-store'

// 使用 i18n
installI18n(app)

// 使用路由
app.use(router)

// 使用 Pinia
const pinia = createPinia()
app.use(pinia)

// 使用 Element Plus（全局注册所有组件）
app.use(ElementPlus)

// 启动全局 Store（需在 Pinia 注册之后）
useChatStore().start()

// 挂载应用到 DOM
app.mount('#app')
