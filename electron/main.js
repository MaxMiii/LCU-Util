/**
 * ===================================================================
 * Electron 主进程文件 (electron/main.js)
 * ===================================================================
 * 作用：
 *   - 创建并管理 Electron 应用的主窗口
 *   - 配置无边框窗口（frame: false），隐藏系统标题栏
 *   - 设置窗口阴影，解决 Windows 下无边框窗口阴影问题
 *   - 提供窗口控制方法（最小化、最大化/还原、关闭），供渲染进程调用
 *   - 配置安全选项：开启 contextIsolation，关闭 nodeIntegration
 *   - 开发环境自动开启 DevTools，生产环境关闭
 *   - 通过 ipcMain 接收渲染层发送的窗口控制指令
 * ===================================================================
 *
 * 注意：Electron 主进程由 Node.js 直接运行，不经过 webpack 编译，
 * 因此使用 .js 文件并通过 JSDoc 提供类型注解。
 */

/** @typedef {import('electron').BrowserWindow} BrowserWindow */

const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { execSync } = require('child_process')

// ==============================
// 管理员权限检测与提升
// 仅 Windows 平台需要，用于 wmic 读取 LeagueClient 进程信息
// ==============================

function ensureAdmin() {
  if (process.platform !== 'win32') return false
  if (process.argv.includes('--elevated')) {
    console.log('[Admin] 已具有管理员权限')
    return true
  }

  try {
    execSync('net session', { timeout: 1000, windowsHide: true })
    console.log('[Admin] 已具有管理员权限')
    return true
  } catch {
    console.log('[Admin] 当前无管理员权限，正在申请...')
  }

  // 通过 PowerShell 重新启动并申请管理员权限
  const args = process.argv.slice(1).concat(['--elevated'])
  const argStr = args.map(a => JSON.stringify(a)).join(', ')
  const psScript = `Start-Process -FilePath ${JSON.stringify(process.execPath)} -ArgumentList @(${argStr}) -Verb RunAs`

  try {
    execSync(
      `powershell -NoProfile -Command ${JSON.stringify(psScript)}`,
      { timeout: 15000, windowsHide: true, stdio: 'pipe' }
    )
  } catch (e) {
    console.error('[Admin] 申请管理员权限失败:', e.message)
  }

  // 退出当前无权限进程
  process.exit(0)
}

ensureAdmin()

// 忽略自签名证书错误（LCU API 使用自签名 HTTPS 证书）
// 必须在 app.whenReady() 之前调用
app.commandLine.appendSwitch('ignore-certificate-errors')

// 自签名证书错误处理（覆盖 HTTP 和 WebSocket 请求）
app.on('certificate-error', (event, _webContents, _url, _error, _certificate, callback) => {
  event.preventDefault()
  callback(true) // 信任所有证书错误
})

// 判断是否为开发环境：通过多种方式检测
// 1. 检查 NODE_ENV 环境变量
// 2. 检查 ELECTRON_DEV 环境变量
// 3. 检查是否在 devDependencies 中有 electron（说明是开发模式）
const isDev = process.env.NODE_ENV === 'development' || 
              process.env.ELECTRON_DEV === 'true' ||
              !app.isPackaged  // Electron 提供的 API，未打包时为 true

console.log('Environment:', {
  NODE_ENV: process.env.NODE_ENV,
  ELECTRON_DEV: process.env.ELECTRON_DEV,
  isPackaged: app.isPackaged,
  isDev: isDev
})

/**
 * 全局窗口引用，防止被垃圾回收
 * @type {BrowserWindow | null}
 */
let mainWindow = null

/**
 * 创建主窗口
 * - frame: false          禁用原生标题栏，隐藏系统最小化/最大化/关闭按钮
 * - titleBarStyle: hidden  配合 frame:false 实现完全自定义标题栏
 * - backgroundMaterial   开启窗口阴影效果，解决 Windows 无边框窗口阴影问题
 * - webPreferences       安全配置：开启 contextIsolation，关闭 nodeIntegration
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1550,                     // 窗口默认宽度
    height: 850,                     // 窗口默认高度
    minWidth: 800,                   // 最小宽度限制
    minHeight: 600,                  // 最小高度限制
    frame: false,                    // 禁用原生标题栏，隐藏系统按钮
    titleBarStyle: 'hidden',         // 隐藏标题栏样式
    transparent: true,               // 开启窗口透明，支持 CSS 圆角
    show: false,                     // 先隐藏，加载完成后再显示，避免白屏闪烁
    backgroundColor: '#00000000',    // 透明背景色
    webPreferences: {
      contextIsolation: true,        // 开启上下文隔离，安全规范必须开启
      nodeIntegration: false,        // 禁止 Node.js 集成，防止渲染进程直接访问 Node API
      webSecurity: false,            // 禁用同源策略，允许渲染进程跨域请求 LCU API
      sandbox: false,                // 关闭沙箱，允许 preload 使用 Node API
      // 指定预加载脚本路径，用于安全地暴露 IPC 通信接口
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // 覆盖所有 HTTP 响应的 CORS 头，解决 LCU API CORS 头缺失或不兼容问题
  // 先删除 LCU 自身返回的 CORS 头，再注入统一值，避免冲突
  mainWindow.webContents.session.webRequest.onHeadersReceived(
    { urls: ['https://127.0.0.1/*', 'http://127.0.0.1/*'] },
    /** @param {import('electron').OnHeadersReceivedListenerDetails} details */
    (details, callback) => {
      /** @type {Record<string, string | string[]>} */
      const responseHeaders = details.responseHeaders || {}
      // 删除 LCU 原有的 CORS 头，防止与注入值合并成非法格式
      delete responseHeaders['access-control-allow-origin']
      delete responseHeaders['Access-Control-Allow-Origin']
      delete responseHeaders['access-control-allow-methods']
      delete responseHeaders['Access-Control-Allow-Methods']
      delete responseHeaders['access-control-allow-headers']
      delete responseHeaders['Access-Control-Allow-Headers']
      // 注入统一 CORS 头
      responseHeaders['Access-Control-Allow-Origin'] = ['*']
      responseHeaders['Access-Control-Allow-Methods'] = ['GET, POST, PUT, PATCH, DELETE, OPTIONS']
      responseHeaders['Access-Control-Allow-Headers'] = ['*']
      callback({ responseHeaders })
    },
  )

  // 根据环境加载不同内容
  if (isDev) {
    // 开发环境：加载 Vue CLI 开发服务器地址
    mainWindow.loadURL('http://localhost:5173')
    // 开发环境自动打开 DevTools 开发者工具
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  } else {
    // 生产环境：加载打包后的 HTML 文件
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  // 窗口加载完成后显示，避免白屏闪烁
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // 窗口关闭时清理引用
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// ==============================
// LCU 连接器
// ==============================
const { getLeagueClientInfo } = require('./lcu-connector')

// ==============================
// IPC 窗口控制指令处理
// 接收渲染进程通过 preload.js 发送的窗口控制事件
// ==============================

// 最小化窗口
ipcMain.on('window-minimize', () => {
  if (mainWindow) {
    mainWindow.minimize()
  }
})

// 最大化 / 还原窗口切换
ipcMain.on('window-maximize-toggle', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize() // 已最大化则还原
    } else {
      mainWindow.maximize()   // 未最大化则最大化
    }
  }
})

// 关闭窗口并退出应用
ipcMain.on('window-close', () => {
  app.quit()
})

// 获取窗口当前是否最大化状态（供渲染进程更新按钮图标）
ipcMain.handle('window-is-maximized', () => {
  return mainWindow ? mainWindow.isMaximized() : false
})

// 打开开发者工具（由渲染进程设置页面调用）
ipcMain.on('open-dev-tools', () => {
  if (mainWindow) {
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  }
})

// ==============================
// LCU 进程信息 IPC 处理
// ==============================

/**
 * 读取 LeagueClientUx.exe 进程的认证信息
 * 渲染进程通过 invoke 调用
 */
ipcMain.handle('get-league-client-info', () => {
  return getLeagueClientInfo()
})

// ==============================
// 应用生命周期管理
// ==============================
app.whenReady().then(() => {
  createWindow()

  // macOS 下点击 dock 图标时重新创建窗口
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// 所有窗口关闭时退出应用（macOS 除外）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
