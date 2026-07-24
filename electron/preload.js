/**
 * ===================================================================
 * Electron 预加载脚本 (electron/preload.js)
 * ===================================================================
 * 作用：
 *   - 作为主进程与渲染进程之间的安全桥梁
 *   - 使用 contextBridge 安全地暴露 API 给渲染进程
 *   - 封装窗口控制函数：winMin()、winMaxToggle()、winClose()
 *   - 通过 ipcRenderer 向主进程发送窗口控制事件
 *   - 严格遵循 Electron 安全规范：禁止直接挂载 Node API
 * ===================================================================
 *
 * 注意：预加载脚本由 Electron 直接运行，不经过 webpack 编译，
 * 因此使用 .js 文件并通过 JSDoc 提供类型注解。
 * 渲染进程中的 TypeScript 类型定义参见 src/shims-vue.d.ts
 */

const { contextBridge, ipcRenderer } = require('electron')
const WebSocket = require('ws')

let _nodeWs = null

/**
 * Node.js WebSocket 桥接
 * 绕过 Chromium 的 WebSocket 限制（不支持自定义请求头、URL 凭证被剥离）
 * 使用 ws 包直接从 Node.js 环境连接 LCU WebSocket
 */
function createNodeWs(url, authHeader, callbacks) {
  destroyNodeWs()

  console.log('[createNodeWs] 连接:', url.replace(/Basic .+/, 'Basic ***'))

  _nodeWs = new WebSocket(url, ['wamp'], {
    handshakeTimeout: 10000,
    headers: {
      Authorization: authHeader,
    },
    rejectUnauthorized: false, // LCU 自签名证书
  })

  _nodeWs.onopen = () => {
    console.log('[createNodeWs] 已连接')
    callbacks.onOpen?.()
  }

  _nodeWs.onclose = (code, reason) => {
    // code 可能为 number 或 object（ws 包某些错误路径下）
    const closeCode = typeof code === 'number' ? code : (code?.code ?? -1)
    const reasonStr = reason ? (typeof reason === 'object' ? reason.toString() : String(reason)) : ''
    console.log('[createNodeWs] 断开: code=', closeCode, ', reason=', reasonStr)
    callbacks.onClose?.(closeCode, reasonStr)
    _nodeWs = null
  }

  _nodeWs.onerror = (err) => {
    console.log('[createNodeWs] 错误:', err.message, err.code)
    callbacks.onError?.(`${err.message} (${err.code || '未知'})`)
  }

  // ws 包在服务器返回非 101 状态码时触发此事件（如 401/403/404）
  _nodeWs.on('unexpected-response', (_req, res) => {
    let body = ''
    res.on('data', (chunk) => { body += chunk })
    res.on('end', () => {
      const msg = `服务器返回意外状态: ${res.statusCode} ${res.statusMessage} - ${body.slice(0, 200)}`
      console.log('[createNodeWs] unexpected-response:', msg)
      callbacks.onError?.(msg)
    })
  })

  _nodeWs.on('message', (data) => {
    callbacks.onMessage?.(data.toString())
  })
}

function destroyNodeWs() {
  if (_nodeWs) {
    _nodeWs.onopen = null
    _nodeWs.onclose = null
    _nodeWs.onerror = null
    _nodeWs.removeAllListeners?.('message')
    try { _nodeWs.close() } catch { /* ignore */ }
    _nodeWs = null
  }
}

/**
 * 通过 contextBridge 暴露 window.electronAPI 全局对象

/**
 * 通过 contextBridge 暴露 window.electronAPI 全局对象
 * 渲染进程可通过 window.electronAPI 调用以下方法
 * 禁止直接挂载任何 Node API，符合 Electron 最新安全规范
 *
 * @type {ElectronAPI}
 *
 * @typedef {Object} ElectronAPI
 * @property {() => void} winMin - 最小化窗口
 * @property {() => void} winMaxToggle - 最大化/还原窗口切换
 * @property {() => void} winClose - 关闭窗口
 * @property {() => Promise<boolean>} isMaximized - 获取窗口是否最大化
 * @property {() => Promise<{authToken?: string; port?: string; error?: string}>} getLeagueClientInfo - 获取 LeagueClient 认证信息
 * @property {NodeWsBridge} nodeWs - Node.js WebSocket 桥接
 */
contextBridge.exposeInMainWorld('electronAPI', {
  /**
   * 最小化窗口
   * 向主进程发送 'window-minimize' 事件
   */
  winMin: () => {
    ipcRenderer.send('window-minimize')
  },

  /**
   * 最大化 / 还原窗口切换
   * 向主进程发送 'window-maximize-toggle' 事件
   */
  winMaxToggle: () => {
    ipcRenderer.send('window-maximize-toggle')
  },

  /**
   * 关闭窗口
   * 向主进程发送 'window-close' 事件
   */
  winClose: () => {
    ipcRenderer.send('window-close')
  },

  /**
   * 获取当前窗口是否处于最大化状态
   * 通过 ipcRenderer.invoke 异步获取主进程返回的状态
   * @returns {Promise<boolean>} 是否最大化
   */
  isMaximized: () => {
    return ipcRenderer.invoke('window-is-maximized')
  },

  /**
   * 获取 LeagueClientUx.exe 进程的认证信息
   * 调用主进程读取进程命令行，提取 --remoting-auth-token 和 --app-port
   * @returns {Promise<{authToken?: string; port?: string; error?: string}>} 认证信息
   */
  getLeagueClientInfo: () => {
    return ipcRenderer.invoke('get-league-client-info')
  },

  /**
   * Node.js WebSocket 桥接
   * 绕过 Chromium WebSocket 的限制，使用 ws 包直连 LCU
   */
  nodeWs: {
    connect: (url, authHeader, callbacks) => createNodeWs(url, authHeader, callbacks),
    send: (data) => {
      if (_nodeWs && _nodeWs.readyState === WebSocket.OPEN) {
        _nodeWs.send(data)
      }
    },
    close: () => destroyNodeWs(),
    getReadyState: () => (_nodeWs ? _nodeWs.readyState : 3),
  },
})

