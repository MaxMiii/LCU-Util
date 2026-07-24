<!--
  ===================================================================
  仪表盘子页面占位组件 (src/views/DashboardPlaceholder.vue)
  ===================================================================
  作用：
    - 为侧边栏菜单项提供占位页面内容
    - 根据路由 meta.title 动态显示标题
    - 适配主题
  ===================================================================
-->

<template>
  <div class="placeholder">
    <div class="placeholder-card">
      <div class="placeholder-icon">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 3v18M3 9h18"/>
        </svg>
      </div>
      <h2 class="placeholder-title">{{ $t('placeholder.unknownPage') }}</h2>
      <p class="placeholder-desc">{{ $t('placeholder.desc', { title: title }) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => (route.meta?.title as string) || '未知页面')
</script>

<style scoped>
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.placeholder-card {
  text-align: center;
  padding: 48px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--card-shadow);
}

.placeholder-icon {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: var(--accent-alpha-01);
  color: var(--accent);
  border: 1px solid var(--accent-alpha-02);
}

.placeholder-title {
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.5px;
}

.placeholder-desc {
  margin: 0;
  font-size: 14px;
  color: var(--text-secondary);
}
</style>
