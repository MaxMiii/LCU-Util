/**
 * Highlights API 模块 (自动生成)
 * 9 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolHighlightsV1Config
 * @url GET /lol-highlights/v1/config
 */
export function getLolHighlightsV1Config(): Promise<unknown> {
  return get('/lol-highlights/v1/config')
}

/**
 * PostLolHighlightsV1FileBrowserByHighlightId
 * @url POST /lol-highlights/v1/file-browser/{highlightId}
 * @param params - 路径参数: { highlightId }
 */
export function postLolHighlightsV1FileBrowserByHighlightId(params: { highlightId: string | number }): Promise<unknown> {
  const { highlightId } = params

  return post(`/lol-highlights/v1/file-browser/${highlightId}`)
}

/**
 * GetLolHighlightsV1Highlights
 * @url GET /lol-highlights/v1/highlights
 */
export function getLolHighlightsV1Highlights(): Promise<unknown> {
  return get('/lol-highlights/v1/highlights')
}

/**
 * PostLolHighlightsV1Highlights
 * @url POST /lol-highlights/v1/highlights
 */
export function postLolHighlightsV1Highlights(): Promise<unknown> {
  return post('/lol-highlights/v1/highlights')
}

/**
 * GetLolHighlightsV1HighlightsFolderPath
 * @url GET /lol-highlights/v1/highlights-folder-path
 */
export function getLolHighlightsV1HighlightsFolderPath(): Promise<unknown> {
  return get('/lol-highlights/v1/highlights-folder-path')
}

/**
 * GetLolHighlightsV1HighlightsFolderPathDefault
 * @url GET /lol-highlights/v1/highlights-folder-path/default
 */
export function getLolHighlightsV1HighlightsFolderPathDefault(): Promise<unknown> {
  return get('/lol-highlights/v1/highlights-folder-path/default')
}

/**
 * DeleteLolHighlightsV1HighlightsById
 * @url DELETE /lol-highlights/v1/highlights/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolHighlightsV1HighlightsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-highlights/v1/highlights/${id}`)
}

/**
 * GetLolHighlightsV1HighlightsById
 * @url GET /lol-highlights/v1/highlights/{id}
 * @param params - 路径参数: { id }
 */
export function getLolHighlightsV1HighlightsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-highlights/v1/highlights/${id}`)
}

/**
 * PutLolHighlightsV1HighlightsById
 * @url PUT /lol-highlights/v1/highlights/{id}
 * @param params - 路径参数: { id }
 */
export function putLolHighlightsV1HighlightsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-highlights/v1/highlights/${id}`)
}
