/**
 * ===================================================================
 * Axios HTTP 请求工具类 (src/utils/request.ts)
 * ===================================================================
 * 作用：
 *   - 创建预配置的 Axios 实例，统一请求/响应处理
 *   - 请求拦截器：自动注入认证 Token
 *   - 响应拦截器：统一解包、错误处理、401 自动跳转登录
 *   - 提供泛型友好的请求方法封装
 * ===================================================================
 */

import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  type AxiosInstance,
  type Method,
} from 'axios'

// ==============================
// 类型定义
// ==============================

/** 后端统一响应结构 */
export interface ApiResponse<T = unknown> {
  code: number
  message: string
  data: T
}

/** 分页数据结构 */
export interface PaginatedData<T = unknown> {
  list: T[]
  total: number
  page: number
  pageSize: number
}

// ==============================
// 实例配置
// ==============================

const BASE_URL: string = process.env.VUE_APP_API_BASE_URL || ''

const TIMEOUT: number = 15000 // 15 秒超时

/**
 * 
 * 创建 Axios 实例
 * 开发环境代理到 /api，生产环境使用实际后端地址
 */
const service: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

// ==============================
// 请求拦截器
// ==============================

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 从 localStorage 获取认证 Token
    const token: string | null = localStorage.getItem('token')

    // 如果存在 Token，自动注入 Authorization 请求头
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error: AxiosError) => {
    // 请求发送失败（如网络中断）
    console.error('请求发送失败:', error.message)
    return Promise.reject(error)
  },
)

// ==============================
// 响应拦截器
// ==============================

service.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    const res: ApiResponse = response.data

    // 根据后端业务 code 判断请求是否成功
    // 约定：code === 0 或 200 表示成功，其他值表示业务异常
    if (res.code !== 0 && res.code !== 200) {
      console.error(`业务异常 [${res.code}]: ${res.message}`)

      // Token 过期或未授权，清除本地 Token 并跳转到登录页
      if (res.code === 401) {
        localStorage.removeItem('token')
        window.location.hash = '#/login'
      }

      return Promise.reject(new Error(res.message || '请求失败'))
    }

    // 正常返回响应数据
    return response
  },
  (error: AxiosError) => {
    // HTTP 状态码错误处理
    if (error.response) {
      const status: number = error.response.status
      const messages: Record<number, string> = {
        400: '请求参数错误',
        401: '未授权，请重新登录',
        403: '拒绝访问',
        404: '请求资源不存在',
        500: '服务器内部错误',
        502: '网关错误',
        503: '服务不可用',
        504: '网关超时',
      }
      console.error(`HTTP ${status}: ${messages[status] || '未知错误'}`)
    } else if (error.code === 'ECONNABORTED') {
      // 请求超时
      console.error('请求超时，请检查网络连接')
    } else {
      // 网络错误（断网、DNS 解析失败等）
      console.error('网络错误，请检查网络连接')
    }

    return Promise.reject(error)
  },
)

// ==============================
// 封装请求方法
// ==============================

/**
 * 通用请求方法
 * @param method  HTTP 方法
 * @param url     请求路径
 * @param data    请求体（POST/PUT/PATCH）
 * @param params  URL 查询参数（GET/DELETE）
 */
async function request<T = unknown>(
  method: Method,
  url: string,
  data?: Record<string, unknown>,
  params?: Record<string, unknown>,
): Promise<T> {
  const response: AxiosResponse<ApiResponse<T>> = await service.request({
    method,
    url,
    data,
    params,
  })

  // 解包，直接返回 data 字段
  return response.data.data as T
}

/**
 * GET 请求
 * @param url    请求路径
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

export default service
