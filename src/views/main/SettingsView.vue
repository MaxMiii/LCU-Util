<template>
  <div class="settings-view">
    <div class="settings-card">
      <h2 class="settings-title">{{ $t('settings.title') }}</h2>

      <div class="settings-list">
        <!-- 打开调试界面 -->
        <div class="settings-item">
          <div class="settings-item__info">
            <span class="settings-item__label">{{ $t('settings.openDevtools') }}</span>
            <span class="settings-item__desc">{{ $t('settings.openDevtoolsDesc') }}</span>
          </div>
          <button class="settings-item__btn" @click="openDevTools">
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 3l6 6-6 6"/>
            </svg>
            {{ $t('settings.open') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function openDevTools(): void {
  if (window.electronAPI?.openDevTools) {
    window.electronAPI.openDevTools()
  }
}
</script>

<style scoped lang="scss">
.settings-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

.settings-card {
  width: 60%;
  max-width: 640px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 14px;
  padding: 28px 32px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: var(--card-shadow);
}

.settings-title {
  margin: 0 0 24px;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.3px;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.settings-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: var(--glass-bg-hover);
    border-color: var(--glass-border-hover);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__label {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
  }

  &__desc {
    font-size: 12px;
    color: var(--text-tertiary);
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 18px;
    font-size: 13px;
    font-weight: 500;
    color: #fff;
    background: var(--accent);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
      background: var(--accent-hover);
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.97);
    }
  }
}
</style>
