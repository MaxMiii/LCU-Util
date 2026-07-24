/**
 * ===================================================================
 * League Client 进程信息读取工具 (electron/lcu-connector.js)
 * ===================================================================
 * 作用：
 *   - 读取 LeagueClientUx.exe 进程的命令行参数
 *   - 提取 --remoting-auth-token (认证令牌) 和 --app-port (API端口)
 *   - 需要管理员权限运行
 * ===================================================================
 *
 * 注意：
 *   - 仅支持 Windows 平台（LeagueClientUx.exe 仅 Windows 存在）
 *   - 通过 PowerShell Get-CimInstance 查询进程命令行，需要管理员权限
 *   - 管理员权限由 main.js 在启动时自动申请
 */

const { execSync } = require('child_process')

/**
 * @typedef {Object} LeagueClientInfo
 * @property {string} [authToken] - LCU API 认证令牌
 * @property {string} [port]      - LCU API 端口号
 * @property {string} [error]     - 错误信息（读取失败时存在）
 */

/**
 * 读取 LeagueClientUx.exe 进程的命令行并提取认证信息
 *
 * 通过 PowerShell Get-CimInstance 查询进程 CommandLine，从中正则匹配：
 *   - --remoting-auth-token=<token>
 *   - --app-port=<port>
 *
 * @returns {LeagueClientInfo}
 */
function getLeagueClientInfo() {
  if (process.platform !== 'win32') {
    return { error: 'League Client 仅支持 Windows 平台' }
  }

  try {
    // 使用 PowerShell Get-CimInstance 替代已弃用的 wmic
    // Get-CimInstance 是 wmic 的现代化替代，Win11 中稳定可用
    const psCmd =
      'Get-CimInstance Win32_Process -Filter "name=\'LeagueClientUx.exe\'" | Select-Object -ExpandProperty CommandLine'
    const stdout = execSync(
      `powershell -NoProfile -Command ${JSON.stringify(psCmd)}`,
      {
        encoding: 'utf8',
        timeout: 10000,
        windowsHide: true,
        maxBuffer: 10 * 1024 * 1024, // 命令行可能很长，设置 10MB 缓冲区
      },
    ).trim()

    if (!stdout) {
      return { error: 'LeagueClientUx.exe 进程未运行' }
    }

    // PowerShell 直接输出原始命令行，无需解析额外前缀
    const cmdLine = stdout
    const tokenMatch = cmdLine.match(/--remoting-auth-token="?([^"\s]+)"?/)
    const portMatch = cmdLine.match(/--app-port="?(\d+)"?/)

    if (!tokenMatch || !tokenMatch[1]) {
      return { error: '命令行中未找到 --remoting-auth-token' }
    }
    if (!portMatch || !portMatch[1]) {
      return { error: '命令行中未找到 --app-port' }
    }

    return {
      authToken: tokenMatch[1],
      port: portMatch[1],
    }
  } catch (err) {
    const msg = err.message || ''
    if (msg.includes('Access denied')) {
      return { error: '权限不足，请以管理员权限运行此应用' }
    }
    if (msg.includes('ETIMEDOUT') || msg.includes('timeout')) {
      return { error: '读取进程信息超时' }
    }
    return { error: `读取 LeagueClient 进程失败: ${msg}` }
  }
}

module.exports = { getLeagueClientInfo }
