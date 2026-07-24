import i18n from 'i18next'
import i18nVue from 'i18next-vue'
import type { App } from 'vue'
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'

const resources = {
  'zh-CN': { translation: zhCN },
  'en-US': { translation: enUS },
}

/** 检测浏览器语言 */
function detectLanguage(): string {
  const lang = navigator.language || (navigator as any).userLanguage || 'zh-CN'
  // 支持简/繁中文都 fallback 到 zh-CN
  if (lang.startsWith('zh')) return 'zh-CN'
  if (resources[lang as keyof typeof resources]) return lang
  // 只保留语言前缀，如 'en' → 'en-US'
  const base = lang.split('-')[0]
  const match = Object.keys(resources).find(k => k.startsWith(base))
  return match || 'zh-CN'
}

i18n.init({
  resources,
  lng: detectLanguage(),
  fallbackLng: 'zh-CN',
  interpolation: {
    escapeValue: false, // Vue 已处理 XSS
  },
})

/**
 * 安装 i18n 插件
 * 注入后模板可用 $t()，组件内可用 useTranslation()
 */
export function installI18n(app: App): void {
  app.use(i18nVue, { i18next: i18n })
}

export default i18n
