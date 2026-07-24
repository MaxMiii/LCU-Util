/**
 * ===================================================================
 * LCU API 请求工具类 (src/utils/lcu-request.ts)
 * ===================================================================
 * 作用：
 *   - 提供 League Client API 的 HTTP 请求能力
 *   - 通过 createLcuClient() 手动传入端口和认证令牌
 *   - 自动处理 LCU 自签名证书问题（需配合 main.js 配置）
 *   - 提供与 request.ts 相同签名的 get/post/put/patch/del 方法
 *   - 调用前必须调用 createLcuClient() 完成初始化
 * ===================================================================
 *
 * 使用示例：
 *   import { createLcuClient, get } from '@/utils/lcu-request'
 *
 *   const info = await window.electronAPI.getLeagueClientInfo()
 *   if (!info.error) {
 *     createLcuClient(info.port, info.authToken)
 *     const summoner = await get('/lol-summoner/v1/current-summoner')
 *   }
 */

import axios, { type AxiosInstance, type Method, type AxiosResponse } from 'axios'

// ==============================
// 状态管理
// ==============================

/** LCU Axios 实例（由 createLcuClient 初始化） */
let lcuClient: AxiosInstance | null = null

/** LCU 基础 URL，用于外部获取 */
let lcuBaseUrl: string = ''

// ==============================
// 客户端初始化
// ==============================

/**
 * 创建 / 重新配置 LCU API 客户端
 * 每次调用会创建一个新的 Axios 实例，旧的请求不受影响
 *
 * @param port      LeagueClientUx.exe 的 --app-port 值
 * @param authToken LeagueClientUx.exe 的 --remoting-auth-token 值
 *
 * Authorization 请求头格式：
 *   Basic Base64("riot:" + authToken)
 *   （LCU API 使用 Basic 认证，用户名 riot，密码 remoting-auth-token）
 */
export function createLcuClient(port: string, authToken: string): void {
  lcuBaseUrl = `https://127.0.0.1:${port}`

  lcuClient = axios.create({
    baseURL: lcuBaseUrl,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Basic ${btoa('riot:' + authToken)}`,
    },
    // 浏览器环境下无法设置 rejectUnauthorized，需由 Electron 主进程配合
  })
}

/**
 * 检查 LCU 客户端是否已初始化
 */
export function isLcuClientReady(): boolean {
  return lcuClient !== null
}

/**
 * 获取当前 LCU API 基础 URL
 * 格式: https://127.0.0.1:{port}
 */
export function getLcuBaseUrl(): string {
  return lcuBaseUrl
}

/**
 * 销毁当前 LCU 客户端
 */
export function destroyLcuClient(): void {
  lcuClient = null
  lcuBaseUrl = ''
}

// ==============================
// 通用请求方法
// ==============================

/**
 * 通用 LCU API 请求
 * 自动在路径前拼接基础路径，方便传入短路径（如 /lol-summoner/...）
 *
 * @param method  HTTP 方法
 * @param url     请求路径（以 / 开头）
 * @param data    请求体（POST/PUT/PATCH）
 * @param params  URL 查询参数（GET/DELETE）
 */
async function request<T = unknown>(
  method: Method,
  url: string,
  data?: Record<string, unknown>,
  params?: Record<string, unknown>,
): Promise<T> {
  if (!lcuClient) {
    throw new Error('LCU 客户端未初始化，请先调用 createLcuClient(port, authToken)')
  }

  try {
    const response = await lcuClient.request<T>({
      method,
      url,
      data,
      params,
    })
    // LCU API 直接返回业务数据，无需解包
    return response.data
  } catch (error) {
    // 增强错误信息
    if (axios.isAxiosError(error)) {
      const status = error.response?.status
      const statusText = error.response?.statusText
      const data = error.response?.data
      const errMsg = data ? (typeof data === 'string' ? data : JSON.stringify(data)) : statusText || error.message
      throw new Error(`LCU API [${status}] ${errMsg}`)
    }
    throw error
  }
}

// ==============================
// 导出请求方法（与 request.ts 保持同名）
// ==============================

/**
 * 原始 LCU API 请求（返回完整 AxiosResponse）
 * 适用于需要获取状态码、响应头等元数据的场景
 *
 * @param method  HTTP 方法
 * @param url     请求路径（以 / 开头）
 * @param data    请求体
 * @param params  URL 查询参数
 * @param headers 自定义请求头（会合并到已有头中）
 */
export async function rawRequest<T = unknown>(
  method: Method,
  url: string,
  data?: string | Record<string, unknown>,
  params?: Record<string, string>,
  headers?: Record<string, string>,
): Promise<AxiosResponse<T>> {
  if (!lcuClient) {
    throw new Error('LCU 客户端未初始化，请先调用 createLcuClient(port, authToken)')
  }

  return lcuClient.request<T>({
    method,
    url,
    data,
    params,
    headers,
  })
}

/**
 * GET 请求
 * @param url    请求路径（如 /lol-summoner/v1/current-summoner）
 * @param params URL 查询参数
 */
export function get<T = unknown>(
  url: string,
  params?: Record<string, unknown>,
): Promise<T> {
  return request<T>('GET', url, undefined, params)
}

/**
 * POST 请求
 * @param url  请求路径
 * @param data 请求体
 */
export function post<T = unknown>(
  url: string,
  data?: Record<string, unknown>,
): Promise<T> {
  return request<T>('POST', url, data)
}

/**
 * PUT 请求
 * @param url  请求路径
 * @param data 请求体
 */
export function put<T = unknown>(
  url: string,
  data?: Record<string, unknown>,
): Promise<T> {
  return request<T>('PUT', url, data)
}

/**
 * PATCH 请求
 * @param url  请求路径
 * @param data 请求体
 */
export function patch<T = unknown>(
  url: string,
  data?: Record<string, unknown>,
): Promise<T> {
  return request<T>('PATCH', url, data)
}

/**
 * DELETE 请求
 * @param url    请求路径
 * @param params URL 查询参数
 */
export function del<T = unknown>(
  url: string,
  params?: Record<string, unknown>,
): Promise<T> {
  return request<T>('DELETE', url, undefined, params)
}
