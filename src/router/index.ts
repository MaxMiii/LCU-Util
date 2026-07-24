/**
 * ===================================================================
 * Vue Router 路由配置文件 (src/router/index.ts)
 * ===================================================================
 * 作用：
 *   - 配置 Vue Router 路由，使用 history 模式
 *   - 设置路由 base 路径，适配 Electron 环境
 *   - 当前仅包含登录页路由，预留 <router-view> 出口供后续扩展
 * ===================================================================
 */

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

/**
 * 判断是否在 Electron 环境中运行
 * Electron 使用 file:// 协议，不能使用 HTML5 history 模式
 * 因此 Electron 环境回退到 hash 模式，浏览器环境使用 history 模式
 */
const isElectron: boolean =
  typeof navigator !== 'undefined' &&
  navigator.userAgent.toLowerCase().includes('electron')

/**
 * 路由配置
 * - 默认重定向到仪表盘
 * - 仪表盘包含侧边栏导航和子路由
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard', // 根路径重定向到仪表盘
  },
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/DashboardView.vue'),
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/main/IndexView.vue')
      },
      {
        path: 'settings',
        name: 'DashboardSettings',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/DashboardPlaceholder.vue'),
        meta: { title: '系统设置' },
      },
      {
        path: 'api-test',
        name: 'DashboardApiTest',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/main/ApiView.vue'),
        meta: { title: 'API 测试' },
      },
      {
        path: 'encyclopedia',
        name: 'DashboardEncyclopedia',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/main/EncyclopediaView.vue'),
        meta: { title: '百科大全' },
      },
    ],
  },
]

// ========== 后续路由预留出口 ==========
// 在此处添加新的路由配置

/**
 * 创建路由实例
 * Electron 环境使用 Hash 模式，浏览器环境使用 History 模式
 */
const router = createRouter({
  history: isElectron ? createWebHashHistory() : createWebHistory('/'),
  routes,
})

export default router
