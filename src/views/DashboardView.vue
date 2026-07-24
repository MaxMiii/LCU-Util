<!--
  ===================================================================
  仪表盘页面 (src/views/DashboardView.vue)
  ===================================================================
  作用：
    - Element Plus Container 布局 (Aside + Main + Footer)
    - 可折叠侧边栏菜单，含图标和路由导航
    - 自定义标题栏：应用名 + 头像(Badge+Dropdown) + 主题切换 + 窗口控制
    - 所有组件通过 CSS 变量适配明/暗主题
  ===================================================================
-->

<template>
  <div class="dashboard-container">
    <!-- 全屏 LCU 检测加载遮罩 -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-title">{{ $t('dashboard.loading.title') }}</p>
        <p class="loading-subtitle">{{ $t('dashboard.loading.subtitle') }}</p>
      </div>
    </div>

    <!-- 标题栏 -->
    <header class="title-bar">
      <div class="title-bar__left">
        <span class="title-bar__icon">&#9670;</span>
        <span class="title-bar__name">{{ $t('app.name') }}</span>
      </div>
      <div class="title-bar__right">
        <!-- 用户头像 + 未读消息徽标 + 下拉菜单 -->
        <el-dropdown trigger="hover" placement="bottom-end">
          <span class="avatar-wrapper">
            <el-badge :value="msgCount" :max="99" class="avatar-badge">
              <el-avatar :size="32" class="user-avatar">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" />
                </svg>
              </el-avatar>
            </el-badge>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"
                  style="margin-right:6px;vertical-align:-2px">
                  <path d="M10 12a4 4 0 100-8 4 4 0 000 8zm-7 6a7 7 0 0114 0" />
                </svg>
                {{ $t('nav.profile') }}
              </el-dropdown-item>
              <el-dropdown-item>
                <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"
                  style="margin-right:6px;vertical-align:-2px">
                  <path
                    d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1zm1 2v8h12V6H4zm2 2h8v2H6V8z" />
                </svg>
                {{ $t('nav.messages') }}
              </el-dropdown-item>
              <el-dropdown-item divided>
                <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"
                  style="margin-right:6px;vertical-align:-2px">
                  <path d="M7 5l5 5-5 5M2 10h10" />
                </svg>
                {{ $t('nav.logout') }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>


        <span class="control-separator"></span>

        <!-- 语言切换 -->
        <button class="control-btn lang-btn" @click="toggleLang" :title="currentLang === 'zh-CN' ? 'English' : '中文'">
          {{ currentLang === 'zh-CN' ? '中' : 'EN' }}
        </button>

        <!-- 窗口控制 -->
        <button class="control-btn" @click="handleMinimize" :title="$t('window.minimize')">
          <svg viewBox="0 0 12 12" width="12" height="12">
            <rect x="1.5" y="6" width="9" height="1" fill="currentColor" />
          </svg>
        </button>
        <button class="control-btn" @click="handleMaximize" :title="isMaximized ? $t('window.restore') : $t('window.maximize')">
          <svg v-if="!isMaximized" viewBox="0 0 12 12" width="12" height="12">
            <rect x="2" y="2" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1" />
          </svg>
          <svg v-else viewBox="0 0 12 12" width="12" height="12">
            <rect x="3.5" y="3.5" width="6" height="6" fill="none" stroke="currentColor" stroke-width="1" />
            <rect x="1.5" y="1.5" width="6" height="6" fill="none" stroke="currentColor" stroke-width="1" />
          </svg>
        </button>
        <button class="control-btn control-btn--close" @click="handleClose" :title="$t('window.close')">
          <svg viewBox="0 0 12 12" width="12" height="12">
            <path d="M1.5 1.5L10.5 10.5M10.5 1.5L1.5 10.5" stroke="currentColor" stroke-width="1.2" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Element Plus 布局容器 -->
    <el-container class="app-layout">
      <!-- 侧边栏 -->
      <el-aside width="64px" class="app-aside">
        <div class="aside-inner">
          <el-menu :default-active="activeMenu" collapse :collapse-transition="false" router
            class="aside-menu">
            <el-tooltip :content="$t('nav.home')" placement="right" effect="dark">
            <el-menu-item index="/dashboard/index">
              <svg class="menu-icon" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="7" height="7" rx="1" />
                <rect x="11" y="2" width="7" height="7" rx="1" />
                <rect x="2" y="11" width="7" height="7" rx="1" />
                <rect x="11" y="11" width="7" height="7" rx="1" />
              </svg>
              <span>{{ $t('nav.home') }}</span>
            </el-menu-item>
            </el-tooltip>

            <el-tooltip :content="$t('nav.apiTest')" placement="right" effect="dark">
            <el-menu-item index="/dashboard/api-test">
              <svg class="menu-icon" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 5l8-3 8 3M2 5v10l8 3M2 5l8 3m0-3v10m8-10v10l-8 3" />
              </svg>
              <span>{{ $t('nav.apiTest') }}</span>
            </el-menu-item>
            </el-tooltip>

            <el-tooltip :content="$t('nav.encyclopedia')" placement="right" effect="dark">
            <el-menu-item index="/dashboard/encyclopedia">
              <svg class="menu-icon" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="10" cy="10" r="2.5" />
                <path d="M3 7c0-2 2.5-4 7-4s7 2 7 4v6c0 2-2.5 4-7 4s-7-2-7-4V7z" />
                <path d="M3 7c0 2 2.5 4 7 4s7-2 7-4" />
              </svg>
              <span>{{ $t('nav.encyclopedia') }}</span>
            </el-menu-item>
            </el-tooltip>
            <el-tooltip :content="$t('nav.settings')" placement="right" effect="dark">
            <el-menu-item index="/dashboard/settings">
              <svg class="menu-icon" viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="10" cy="10" r="3" />
                <path
                  d="M10 1v2M10 17v2M1 10h2M17 10h2M3.93 3.93l1.41 1.41M14.66 14.66l1.41 1.41M3.93 16.07l1.41-1.41M14.66 5.34l1.41-1.41" />
              </svg>
              <span>{{ $t('nav.settings') }}</span>
            </el-menu-item>
            </el-tooltip>

          </el-menu>




        </div>
      </el-aside>

      <!-- 主内容区 -->
      <el-container>
        <el-main class="app-main">
          <router-view />
        </el-main>
        <el-footer class="app-footer">
          {{ $t('dashboard.footer', { year: new Date().getFullYear() }) }}
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
/**
 * 仪表盘页面逻辑
 * - el-container 布局，可折叠侧边栏
 * - 路由导航 + 窗口控制 + 主题切换
 * - 用户头像徽标 + 下拉菜单
 */
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import i18n from '@/i18n'

const route = useRoute()

// 当前语言
const currentLang = ref(i18n.language)

/** 切换语言 */
function toggleLang(): void {
  const next = currentLang.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  i18n.changeLanguage(next)
  currentLang.value = next
}

// 当前激活的菜单项
const activeMenu = computed(() => route.path)

// ==============================
// 未读消息数（随机）
// ==============================
const msgCount = ref(Math.floor(Math.random() * 20) + 1)

// ==============================
// 窗口控制
// ==============================
const isMaximized = ref(false)

const handleMinimize = (): void => {
  window.electronAPI?.winMin()
}
const handleMaximize = (): void => {
  window.electronAPI?.winMaxToggle()
  isMaximized.value = !isMaximized.value
}
const handleClose = (): void => {
  window.electronAPI?.winClose()
}

// ==============================
// LCU 进程检测
// ==============================
const loading = ref(true)
let checkTimer: ReturnType<typeof setInterval> | null = null

/** 轮询检测 LCU 进程是否存在 */
function startLcuPolling(): void {
  if (!window.electronAPI) {
    loading.value = false
    return
  }

  checkTimer = setInterval(async () => {
    try {
      const info = await window.electronAPI!.getLeagueClientInfo()
      if (!info.error) {
        // LCU 进程已存在，关闭加载
        loading.value = false
        if (checkTimer) {
          clearInterval(checkTimer)
          checkTimer = null
        }
      }
    } catch {
      // 忽略异常，继续轮询
    }
  }, 2000)
}

onMounted(async (): Promise<void> => {
  if (window.electronAPI) {
    isMaximized.value = await window.electronAPI.isMaximized()
  }
  startLcuPolling()
})

onUnmounted(() => {
  if (checkTimer) {
    clearInterval(checkTimer)
    checkTimer = null
  }
})
</script>

<style lang="scss" scoped>
/**
 * 仪表盘页面样式
 * - Element Plus Container 布局
 * - 可折叠侧边栏菜单
 * - 使用 CSS 变量适配明/暗主题
 */

/* ==============================
 * 全屏 LCU 检测加载遮罩
 * ============================== */
.loading-overlay {
  position: absolute;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--app-bg);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 3px solid var(--card-border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
}

.loading-subtitle {
  font-size: 13px;
  color: var(--text-tertiary);
}

/* ==============================
 * 主容器
 * ============================== */
.dashboard-container {
  width: 100%;
  height: 100vh;
  position: relative;
  background: transparent;
}

/* ==============================
 * 标题栏
 * ============================== */
.title-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  -webkit-app-region: drag;
  user-select: none;
  z-index: 100;
  background: var(--title-bar-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.title-bar__left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-bar__icon {
  font-size: 16px;
  color: var(--accent);
}

.title-bar__name {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: 0.5px;
}

.title-bar__right {
  display: flex;
  align-items: center;
  gap: 8px;
  -webkit-app-region: no-drag;
}

/* 头像包裹器 */
.avatar-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
}

.user-avatar {
  background: var(--accent-alpha-02);
  color: var(--accent);
  border: 1px solid var(--accent-alpha-02);
  transition: all 0.2s ease;

  &:hover {
    background: var(--accent-alpha-01);
    border-color: var(--accent);
  }
}

/* 控制按钮 */
.control-btn {
  width: 32px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: var(--btn-hover-bg);
    color: var(--text-primary);
  }

  &:active {
    transform: scale(0.92);
  }
}

.control-btn--close {
  &:hover {
    background: rgba(239, 68, 68, 0.8);
    color: #fff;
  }
}

/* 语言切换按钮 */
.lang-btn {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--accent);
  width: 28px;
}

.control-separator {
  width: 1px;
  height: 16px;
  background: var(--input-border);
}

/* ==============================
 * Element Plus 布局
 * ============================== */
.app-layout {
  height: 100vh;
  padding-top: 40px;
}

/* ==============================
 * 侧边栏
 * ============================== */
.app-aside {
  background: var(--glass-bg);
  border-right: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
}

.aside-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* 菜单 */
.aside-menu {
  flex: 1;
  border-right: none;
  background: transparent;

  // 覆盖 Element Plus 菜单默认样式
  --el-menu-bg-color: transparent;
  --el-menu-text-color: var(--text-secondary);
  --el-menu-active-color: var(--accent);
  --el-menu-hover-bg-color: var(--btn-hover-bg);
  --el-menu-hover-text-color: var(--text-primary);

  &:not(.el-menu--collapse) {
    width: 100%;
  }
}

.menu-icon {
  margin-right: 4px;
  flex-shrink: 0;
}

/* 菜单项悬停/激活 */
:deep(.el-menu-item) {
  margin: 2px 6px;
  border-radius: 6px;
  color: var(--text-secondary);

  &:hover {
    background: var(--glass-bg-hover);
    color: var(--text-primary);
  }

  &.is-active {
    color: var(--accent);
    background: var(--glass-bg-active);
  }
}

/* 图标居中 */
.el-menu--collapse .menu-icon {
  margin-right: 0;
}

/* 菜单文字隐藏（collapse 模式下） */
.el-menu--collapse .el-menu-item span {
  display: none;
}

/* 折叠按钮 */
.aside-footer {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0 16px;
  cursor: pointer;
  color: var(--text-secondary);
  border-top: 1px solid var(--glass-border);
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: var(--text-primary);
    background: var(--glass-bg-hover);
  }
}

.collapse-text {
  font-size: 12px;
}

/* ==============================
 * 主内容区
 * ============================== */
.app-main {
  background: transparent;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  padding: 24px;
  overflow-y: auto;
}

.app-footer {
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--text-tertiary);
  background: var(--glass-bg);
  border-top: 1px solid var(--glass-border);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* ==============================
 * Element Plus 组件主题适配
 * ============================== */
:deep(.el-badge__content) {
  background: var(--accent);
  border-color: var(--title-bar-bg);
}

:deep(.el-dropdown-menu) {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(12px);

  .el-dropdown-menu__item {
    color: var(--text-secondary);
    font-size: 13px;

    &:hover {
      background: var(--btn-hover-bg);
      color: var(--text-primary);
    }

    &.is-disabled {
      color: var(--text-tertiary);
    }
  }

  .el-dropdown-menu__item--divided {
    border-top-color: var(--card-border);
  }
}

/* ==============================
 * 滚动条
 * ============================== */
.app-main {
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--input-border);
    border-radius: 3px;

    &:hover {
      background: var(--text-tertiary);
    }
  }
}
</style>
