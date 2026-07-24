/**
 * LCU WebSocket 工具类
 *
 * - 连接 LCU WebSocket (wss://127.0.0.1:{port}/)
 * - 支持订阅/取消订阅事件
 * - 自动记录事件日志
 */

// ==============================
// 类型定义
// ==============================

export type WsStatus = 'disconnected' | 'connecting' | 'connected'

export interface WsEventMessage {
  id: number
  timestamp: number
  eventType?: string
  uri?: string
  data: unknown
  raw: string
}

export type EventCallback = (msg: WsEventMessage) => void

// ==============================
// WebSocket 客户端
// ==============================

export class LcuWebSocket {
  private baseUrl = ''
  private authHeader = ''
  private eventId = 0
  private subscriptions = new Map<string, number>() // uri -> subscription id
  private callbacks: EventCallback[] = []

  /** 当前连接状态 */
  status: WsStatus = 'disconnected'
  /** 事件日志 */
  logs: WsEventMessage[] = []
  /** 最大日志条数 */
  maxLogs = 500
  /** 连接状态变更回调（供 LcuEventBus 自动重连使用） */
  onStatusChange?: (status: WsStatus) => void

  // ==============================
  // 连接管理
  // ==============================

  /** 获取底层桥接 */
  private get _bridge(): NodeWsBridge | null {
    return window.electronAPI?.nodeWs ?? null
  }

  connect(port: number | string, authToken: string): void {
    console.log('[WS] connect() 被调用, port=' + port + ', 当前状态=' + this.status)
    this._bridge?.close()

    this.baseUrl = `wss://127.0.0.1:${port}/`
    this.authHeader = 'Basic ' + btoa('riot:' + authToken)
    this.status = 'connecting'
    this._notify()

    this._bridge?.connect(this.baseUrl, this.authHeader, {
      onOpen: () => {
        console.log('[WS] onOpen 已连接')
        this.status = 'connected'
        this._addLog({ eventType: 'info', data: 'WebSocket 已连接' })
        this._notify()
        this.onStatusChange?.('connected')
        // 重新订阅已有的事件（使用 getSubscriptions 获取原始 URI）
        for (const uri of this.getSubscriptions()) {
          this._sendSubscribe(uri)
        }
      },

      onClose: (code: number, reason: string) => {
        console.log('[WS] onClose 断开, code=' + code + ', reason=' + reason)
        this.status = 'disconnected'
        const reasonText = reason ? `, 原因: ${reason}` : ''
        this._addLog({ eventType: 'info', data: `WebSocket 已断开 (代码: ${code}${reasonText})` })
        this._notify()
        this.onStatusChange?.('disconnected')
      },

      onError: (msg: string) => {
        console.log('[WS] onError: ' + msg)
        const logMsg = `WebSocket 连接错误: ${msg}`
        this._addLog({ eventType: 'error', data: logMsg })
      },

      onMessage: (raw: string) => {
        try {
          const arr = JSON.parse(raw)
          
          if (!Array.isArray(arr) || arr.length < 2) return

          // LCU WebSocket 消息格式: [type, eventName/payload, ...]
          // 订阅确认: [5, "OnJsonApiEvent{uri}", null]
          // 事件推送: [8, "OnJsonApiEvent{uri}", {data, eventType, uri}]
          const msgType = arr[0]
          const payload = arr[2]
          if (msgType === 8 && payload && typeof payload === 'object') {
            console.log('[WS] 事件:', payload.uri, payload.eventType)
            // 保留完整数据，供 LcuEventBus 使用
            this._addLog({
              eventType: payload.eventType || 'unknown',
              uri: payload.uri,
              data: payload.data ?? payload,
            })
          }
        } catch (e) {
          console.warn('[WS] 消息处理异常:', e)
        }
      },
    })
  }

  disconnect(): void {
    this._bridge?.close()
    this.status = 'disconnected'
    this._notify()
    this.onStatusChange?.('disconnected')
  }

  // ==============================
  // 事件订阅
  // ==============================

  /**
   * 订阅 LCU 事件
   * @param uri 事件 URI，例如 "lol-summoner/v1/current-summoner"
   *             传入空字符串订阅所有事件
   */
  subscribe(uri: string): void {
    const key = uri || '*'
    if (this.subscriptions.has(key)) return

    const subId = ++this.eventId
    this.subscriptions.set(key, subId)
    this._addLog({ eventType: 'subscribe', data: `订阅: ${uri || '全部事件'}` })

    const bridge = this._bridge
    if (bridge && bridge.getReadyState() === 1) {
      this._sendSubscribe(uri)
    }
  }

  unsubscribe(uri: string): void {
    const key = uri || '*'
    if (!this.subscriptions.delete(key)) return
    this._addLog({ eventType: 'unsubscribe', data: `取消订阅: ${uri || '全部事件'}` })
    // LCU WebSocket 不支持主动取消订阅，断开重连即可
  }

  /** 获取所有已订阅的 URI */
  getSubscriptions(): string[] {
    return Array.from(this.subscriptions.keys()).map(k => (k === '*' ? '' : k))
  }

  /** 重新发送所有订阅（供心跳保活使用） */
  resubscribeAll(): void {
    for (const uri of this.subscriptions.keys()) {
      this._sendSubscribe(uri)
    }
  }

  /** 检查底层连接是否真正就绪（readyState === 1） */
  isBridgeReady(): boolean {
    const bridge = this._bridge
    return bridge !== null && bridge.getReadyState() === 1
  }

  // ==============================
  // 回调
  // ==============================

  onEvent(cb: EventCallback): void {
    this.callbacks.push(cb)
  }

  removeCallback(cb: EventCallback): void {
    const idx = this.callbacks.indexOf(cb)
    if (idx >= 0) this.callbacks.splice(idx, 1)
  }

  // ==============================
  // 日志
  // ==============================

  clearLogs(): void {
    this.logs = []
  }

  // ==============================
  // 内部方法
  // ==============================

  private _sendSubscribe(uri: string): void {
    const bridge = this._bridge
    console.log('[WS] _sendSubscribe: uri=' + uri + ', bridge=' + !!bridge + ', readyState=' + (bridge ? bridge.getReadyState() : 'N/A'))
    if (!bridge || bridge.getReadyState() !== 1) return
    const eventName = uri ? `OnJsonApiEvent_${uri.replace(/\//g, '_')}` : 'OnJsonApiEvent'
    const msg = JSON.stringify([5, eventName])
    bridge.send(msg)

    console.log(eventName)
  }

  private _addLog(info: { eventType?: string; uri?: string; data: any }): void {
    const msg: WsEventMessage = {
      id: ++this.eventId,
      timestamp: Date.now(),
      eventType: info.eventType,
      uri: info.uri,
      data: info.data,
      raw: typeof info.data === 'string' ? info.data : JSON.stringify(info.data, null, 3),
    }
    this.logs.push(msg)
    if (this.logs.length > this.maxLogs) {
      this.logs.splice(0, this.logs.length - this.maxLogs)
    }
    this.callbacks.forEach(cb => cb(msg))
  }

  private _notify(): void {
    // 通过状态变更触发响应式更新（不做额外处理，由 Vue 侦听）
  }
}
