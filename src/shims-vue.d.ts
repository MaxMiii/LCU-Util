/**
 * ===================================================================
 * Vue 单文件组件类型声明 (src/shims-vue.d.ts)
 * ===================================================================
 * 作用：
 *   - 让 TypeScript 正确识别 .vue 文件的默认导出类型
 *   - 避免在导入 .vue 文件时出现 TS 类型错误
 * ===================================================================
 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, never>, Record<string, never>, unknown>
  export default component
}

/**
 * LeagueClientUx.exe 进程认证信息
 */
interface LeagueClientInfo {
  /** LCU API 认证令牌 */
  authToken?: string
  /** LCU API 端口 */
  port?: string
  /** 错误信息（读取失败时存在） */
  error?: string
}

interface NodeWsBridge {
  /** 连接 LCU WebSocket（使用 ws 包绕过 Chromium 限制） */
  connect(url: string, authHeader: string, callbacks: {
    onOpen?: () => void
    onClose?: (code: number, reason: string) => void
    onError?: (msg: string) => void
    onMessage?: (raw: string) => void
  }): void
  /** 发送数据 */
  send(data: string): void
  /** 关闭连接 */
  close(): void
  /** 获取当前 readyState (0=连接中, 1=已连接, 2=关闭中, 3=已关闭) */
  getReadyState(): number
}

/**
 * Electron API 全局类型声明
 * 通过 preload.js 注入到 window.electronAPI
 */
interface ElectronAPI {
  /** 最小化窗口 */
  winMin: () => void
  /** 最大化/还原窗口切换 */
  winMaxToggle: () => void
  /** 关闭窗口 */
  winClose: () => void
  /** 获取窗口是否最大化 */
  isMaximized: () => Promise<boolean>
  /** 获取 LeagueClientUx.exe 进程的认证信息 */
  getLeagueClientInfo: () => Promise<LeagueClientInfo>
  /** Node.js WebSocket 桥接（绕过 Chromium WebSocket 限制） */
  nodeWs: NodeWsBridge
}

interface Window {
  electronAPI?: ElectronAPI
}
