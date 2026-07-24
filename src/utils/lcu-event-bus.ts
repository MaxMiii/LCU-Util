/**
 * ===================================================================
 * LCU WebSocket 事件总线 (src/utils/lcu-event-bus.ts)
 * ===================================================================
 * 作用：
 *   - 软件启动时自动连接 LCU WebSocket
 *   - 连接成功后订阅全部消息（OnJsonApiEvent）
 *   - 连接断开时自动重连（指数退避）
 *   - 提供 on(uri, handler) / off(uri, handler) 类似 event.on() 的 API
 *   - 从所有订阅消息中筛选指定 URI，分发到对应处理器
 * ===================================================================
 *
 * 使用示例：
 *   import { lcuEventBus } from '@/utils/lcu-event-bus'
 *
 *   // 监听召唤师信息变更
 *   lcuEventBus.on('lol-summoner/v1/current-summoner', (data, eventType) => {
 *     console.log('召唤师信息更新:', data, eventType)
 *   })
 *
 *   // 单次监听
 *   const off = lcuEventBus.on('lol-gameflow/v1/session', (data) => {
 *     console.log('游戏会话:', data)
 *     off() // 取消监听
 *   })
 *
 *   // 组件销毁时清理
 *   onUnmounted(() => { off() })
 * ===================================================================
 */

import { LcuWebSocket } from './lcu-websocket'

// ==============================
// 类型定义
// ==============================

/** 事件处理函数 */
export type EventHandler = (data: unknown, eventType: string) => void

// ==============================
// 事件总线
// ==============================

export class LcuEventBus {
  private ws: LcuWebSocket
  private handlers = new Map<string, Set<EventHandler>>()
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null
  private retryCount = 0
  private readonly maxRetries = 30
  private destroyed = false

  constructor() {
    this.ws = new LcuWebSocket()

    // 消息分发：从所有订阅消息中按 URI 筛选
    this.ws.onEvent((msg) => {
      if (!msg.uri) {
        console.log('[LcuEventBus] onEvent 无 uri, type=', msg.eventType)
        return
      }
      const handlers = this.handlers.get(msg.uri)
      console.log('[LcuEventBus] 收到消息 uri=' + msg.uri + ', 匹配=' + (handlers ? handlers.size : 0) + ' 个处理器')
      if (handlers && handlers.size > 0) {
        handlers.forEach(fn => fn(msg.data, msg.eventType || ''))
      }
    })

    // 状态变化 → 自动重连
    this.ws.onStatusChange = (status) => {
      console.log('[LcuEventBus] 状态变化:', status)
      if (status === 'connected') {
        this.retryCount = 0
        // 连接成功后订阅所有事件
        console.log('[LcuEventBus] 准备订阅全部事件')
        this.ws.subscribe('')
        console.log('[LcuEventBus] 订阅完毕')
      } else if (status === 'disconnected') {
        this.scheduleReconnect()
      }
    }
  }

  // ==============================
  // 公共 API
  // ==============================

  /**
   * 监听指定 URI 的事件
   * @param uri     事件 URI，如 "lol-summoner/v1/current-summoner"
   * @param handler 处理函数 (data, eventType) => void
   * @returns       取消监听的函数
   */
  on(uri: string, handler: EventHandler): () => void {
    if (!this.handlers.has(uri)) {
      this.handlers.set(uri, new Set())
    }
    this.handlers.get(uri)!.add(handler)
    return () => this.off(uri, handler)
  }

  /**
   * 移除指定 URI 的监听器
   */
  off(uri: string, handler: EventHandler): void {
    this.handlers.get(uri)?.delete(handler)
  }

  /**
   * 启动自动连接
   * - 获取 LCU 认证信息
   * - 连接 LCU WebSocket
   * - 连接成功后订阅所有事件
   */
  async start(): Promise<void> {
    if (this.destroyed) return
    console.log('[LcuEventBus] 启动自动连接...')
    await this.tryConnect()
    this.startHeartbeat()
  }

  /** 心跳保活：每 15 秒检查连接状态，确保订阅有效 */
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null

  private startHeartbeat(): void {
    if (this.heartbeatTimer) return
    this.heartbeatTimer = setInterval(() => {
      if (this.destroyed) {
        this.stopHeartbeat()
        return
      }
      const status = this.ws.status
      if (status === 'connected') {
        // 校验底层连接是否真的还活着
        if (this.ws.isBridgeReady()) {
          this.ws.resubscribeAll()
        } else {
          console.log('[LcuEventBus] 心跳检测到底层连接已断开(readyState!==1)，强制重连')
          this.tryConnect()
        }
      } else if (status === 'disconnected') {
        console.log('[LcuEventBus] 心跳检测到连接断开，尝试重连')
        this.tryConnect()
      }
    }, 15000)
  }

  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
  }

  /**
   * 手动连接（可用于切换到新端口/Token）
   */
  connect(port: string, token: string): void {
    if (this.destroyed) return
    this.ws.connect(port, token)
  }

  /**
   * 手动断开连接
   */
  disconnect(): void {
    this.ws.disconnect()
  }

  /**
   * 销毁事件总线（清理所有资源）
   */
  destroy(): void {
    this.destroyed = true
    this.stopHeartbeat()
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
      this.reconnectTimer = null
    }
    this.ws.disconnect()
    this.handlers.clear()
  }

  // ==============================
  // 内部方法
  // ==============================

  private async tryConnect(): Promise<void> {
    try {
      const info = await window.electronAPI?.getLeagueClientInfo()
      if (!info || info.error || !info.port || !info.authToken) {
        console.warn('[LcuEventBus] LCU 未连接:', info?.error)
        this.scheduleReconnect()
        return
      }
      this.ws.connect(info.port, info.authToken)
    } catch (e) {
      console.warn('[LcuEventBus] 获取 LCU 信息失败:', e)
      this.scheduleReconnect()
    }
  }

  private scheduleReconnect(): void {
    if (this.destroyed || this.retryCount >= this.maxRetries) return

    // 指数退避：2s → 3s → 4.5s → ... → 最大 30s
    const delay = Math.min(2000 * Math.pow(1.5, this.retryCount), 30000)
    this.retryCount++
    console.log(`[LcuEventBus] ${delay / 1000}s 后重连 (第 ${this.retryCount} 次)`)

    this.reconnectTimer = setTimeout(() => this.tryConnect(), delay)
  }
}

/** 全局单例 */
export const lcuEventBus = new LcuEventBus()
