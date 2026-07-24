/**
 * Builtin API 模块 (自动生成)
 * 16 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * Cancels the asynchronous operation or removes its completion status.
 * @url POST /AsyncDelete
 * @param query - 查询参数: { asyncToken }
 */
export function asyncDelete(query: { asyncToken: number }): Promise<unknown> {
  return post('/AsyncDelete', query)
}

/**
 * Retrieves the result of a completed asynchronous operation.
 * @url POST /AsyncResult
 * @param query - 查询参数: { asyncToken }
 */
export function asyncResult(query: { asyncToken: number }): Promise<unknown> {
  return post('/AsyncResult', query)
}

/**
 * Retrieves details on the current state of an asynchronous operation.
 * @url POST /AsyncStatus
 * @param query - 查询参数: { asyncToken }
 */
export function asyncStatus(query: { asyncToken: number }): Promise<unknown> {
  return post('/AsyncStatus', query)
}

/**
 * Attempts to cancel an asynchronous operation
 * @url POST /Cancel
 * @param query - 查询参数: { asyncToken }
 */
export function cancel(query: { asyncToken: number }): Promise<unknown> {
  return post('/Cancel', query)
}

/**
 * Closes the connection.
 * @url POST /Exit
 */
export function exit(): Promise<unknown> {
  return post('/Exit')
}

/**
 * Returns information on available functions and types
 * With no arguments, returns a list of all available functions and types along with a short description. If a function or type is specified, returns detailed information about it.
 * @url POST /Help
 * @param query - 查询参数: { target, format }
 */
export function help(query: { target?: string; format?: 'Full' | 'Epytext' | 'Brief' | 'Console' }): Promise<unknown> {
  return post('/Help', query)
}

/**
 * Subscribes to a given event
 * @url POST /Subscribe
 * @param query - 查询参数: { eventName, format }
 */
export function subscribe(query: { eventName: string; format?: 'JSON' | 'YAML' | 'MsgPack' }): Promise<unknown> {
  return post('/Subscribe', query)
}

/**
 * Unsubscribes from a given event
 * @url POST /Unsubscribe
 * @param query - 查询参数: { eventName }
 */
export function unsubscribe(query: { eventName: string }): Promise<unknown> {
  return post('/Unsubscribe', query)
}

/**
 * Controls the console output format
 * With no arguments, returns the current output format being used. If a format is specified, switches the console output to that format.
 * @url POST /WebSocketFormat
 * @param query - 查询参数: { format }
 */
export function webSocketFormat(query: { format?: 'JSON' | 'YAML' | 'MsgPack' }): Promise<unknown> {
  return post('/WebSocketFormat', query)
}

/**
 * Retrieves the result of a completed asynchronous operation.
 * @url GET /async/v1/result/{asyncToken}
 * @param params - 路径参数: { asyncToken }
 */
export function httpAsyncResult(params: { asyncToken: string | number }): Promise<unknown> {
  const { asyncToken } = params

  return get(`/async/v1/result/${asyncToken}`)
}

/**
 * Cancels the asynchronous operation or removes its completion status.
 * @url DELETE /async/v1/status/{asyncToken}
 * @param params - 路径参数: { asyncToken }
 */
export function httpAsyncDelete(params: { asyncToken: string | number }): Promise<unknown> {
  const { asyncToken } = params

  return del(`/async/v1/status/${asyncToken}`)
}

/**
 * Retrieves details on the current state of an asynchronous operation.
 * @url GET /async/v1/status/{asyncToken}
 * @param params - 路径参数: { asyncToken }
 */
export function httpAsyncStatus(params: { asyncToken: string | number }): Promise<unknown> {
  const { asyncToken } = params

  return get(`/async/v1/status/${asyncToken}`)
}

/**
 * Retrieves the API documentation resource listing
 * @url GET /swagger/v1/api-docs
 */
export function httpApiDocsV1(): Promise<unknown> {
  return get('/swagger/v1/api-docs')
}

/**
 * Retrieves the API declaration for a supported API
 * @url GET /swagger/v1/api-docs/{api}
 * @param params - 路径参数: { api }
 */
export function httpApiDeclarationV1(params: { api: string | number }): Promise<unknown> {
  const { api } = params

  return get(`/swagger/v1/api-docs/${api}`)
}

/**
 * Retrieves the API documentation
 * @url GET /swagger/v2/swagger.json
 */
export function httpApiDocsV2(): Promise<unknown> {
  return get('/swagger/v2/swagger.json')
}

/**
 * Retrieves the API documentation
 * @url GET /swagger/v3/openapi.json
 */
export function httpApiDocsV3(): Promise<unknown> {
  return get('/swagger/v3/openapi.json')
}
