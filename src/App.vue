<!--
  ===================================================================
  应用根组件 (src/App.vue)
  ===================================================================
  作用：
    - 应用最外层容器
    - 使用 <router-view> 作为路由出口，渲染子页面
    - 全局样式通过此处引入
  ===================================================================
-->

<template>
  <div
    class="app-root"
    :style="{
      backgroundImage: backdropImage ? `url(${backdropImage})` : undefined,
    }"
  >
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useChatStore } from '@/stores/chat-store'

const chatStore = useChatStore()
const backdropImage = computed(() => chatStore.backdropImage)
</script>

<style lang="scss">
/* ---- 深色毛玻璃主题（唯一主题） ---- */
:root {
  --el-color-primary: #4a9eff;
  --el-color-primary-light-3: #7ab8ff;
  --el-color-primary-light-5: #a3cfff;
  --el-color-primary-dark-2: #3a7ed9;

  /* 主题通用色 */
  --accent: #4a9eff;
  --accent-purple: #7c3aed;
  --accent-cyan: #06b6d4;
  --accent-alpha-01: rgba(74, 158, 255, 0.1);
  --accent-alpha-012: rgba(74, 158, 255, 0.12);
  --accent-alpha-02: rgba(74, 158, 255, 0.2);
  --accent-alpha-025: rgba(74, 158, 255, 0.25);
  --accent-alpha-03: rgba(74, 158, 255, 0.3);
  --accent-hover: #6bb0ff;
  --accent-hover-light: #8dc4ff;
  --accent-purple-hover: #9b6ef0;

  /* ---- 毛玻璃专用 ---- */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-bg-hover: rgba(255, 255, 255, 0.09);
  --glass-bg-active: rgba(74, 158, 255, 0.12);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-hover: rgba(255, 255, 255, 0.14);
  --glass-blur: 12px;
  --glass-blur-lg: 20px;

  /* ---- 语义色（适配深色背景） ---- */
  --text-primary: rgba(255, 255, 255, 1);
  --text-secondary: rgba(255, 255, 255, 0.75);
  --text-tertiary: rgba(255, 255, 255, 0.5);
  --bg-overlay: rgba(0, 0, 0, 0.5);
  --card-bg: var(--glass-bg);
  --card-border: var(--glass-border);
  --title-bar-bg: rgba(10, 14, 23, 0.6);
  --input-bg: rgba(255, 255, 255, 0.06);
  --input-border: rgba(255, 255, 255, 0.1);
  --input-hover-bg: rgba(255, 255, 255, 0.08);
  --input-focus-bg: rgba(255, 255, 255, 0.06);
  --input-hover-border: rgba(255, 255, 255, 0.18);
  --btn-hover-bg: rgba(255, 255, 255, 0.08);
  --card-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  --card-hover-border: rgba(255, 255, 255, 0.14);
  --app-bg: #0a0e17;
}

/* ==============================
 * 基础重置
 * ============================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: 'Microsoft YaHei', 'PingFang SC', -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
  background: var(--app-bg);
}

.app-root {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.6s ease;
  overflow: hidden;
  border-radius: 12px;
}
</style>
