/**
 * Settings API 模块 (自动生成)
 * 14 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolSettingsV1AccountDidreset
 * @url GET /lol-settings/v1/account/didreset
 */
export function getLolSettingsV1AccountDidreset(): Promise<unknown> {
  return get('/lol-settings/v1/account/didreset')
}

/**
 * PostLolSettingsV1AccountSave
 * @url POST /lol-settings/v1/account/save
 */
export function postLolSettingsV1AccountSave(): Promise<unknown> {
  return post('/lol-settings/v1/account/save')
}

/**
 * GetLolSettingsV1AccountByCategory
 * @url GET /lol-settings/v1/account/{category}
 * @param params - 路径参数: { category }
 */
export function getLolSettingsV1AccountByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return get(`/lol-settings/v1/account/${category}`)
}

/**
 * PatchLolSettingsV1AccountByCategory
 * @url PATCH /lol-settings/v1/account/{category}
 * @param params - 路径参数: { category }
 */
export function patchLolSettingsV1AccountByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return patch(`/lol-settings/v1/account/${category}`)
}

/**
 * PutLolSettingsV1AccountByCategory
 * @url PUT /lol-settings/v1/account/{category}
 * @param params - 路径参数: { category }
 */
export function putLolSettingsV1AccountByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return put(`/lol-settings/v1/account/${category}`)
}

/**
 * GetLolSettingsV1LocalByCategory
 * @url GET /lol-settings/v1/local/{category}
 * @param params - 路径参数: { category }
 */
export function getLolSettingsV1LocalByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return get(`/lol-settings/v1/local/${category}`)
}

/**
 * PatchLolSettingsV1LocalByCategory
 * @url PATCH /lol-settings/v1/local/{category}
 * @param params - 路径参数: { category }
 */
export function patchLolSettingsV1LocalByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return patch(`/lol-settings/v1/local/${category}`)
}

/**
 * GetLolSettingsV2AccountByPpTypeByCategory
 * @url GET /lol-settings/v2/account/{ppType}/{category}
 * @param params - 路径参数: { ppType, category }
 */
export function getLolSettingsV2AccountByPpTypeByCategory(params: { ppType: string | number, category: string | number }): Promise<unknown> {
  const { ppType, category } = params

  return get(`/lol-settings/v2/account/${ppType}/${category}`)
}

/**
 * PatchLolSettingsV2AccountByPpTypeByCategory
 * @url PATCH /lol-settings/v2/account/{ppType}/{category}
 * @param params - 路径参数: { ppType, category }
 */
export function patchLolSettingsV2AccountByPpTypeByCategory(params: { ppType: string | number, category: string | number }): Promise<unknown> {
  const { ppType, category } = params

  return patch(`/lol-settings/v2/account/${ppType}/${category}`)
}

/**
 * PutLolSettingsV2AccountByPpTypeByCategory
 * @url PUT /lol-settings/v2/account/{ppType}/{category}
 * @param params - 路径参数: { ppType, category }
 */
export function putLolSettingsV2AccountByPpTypeByCategory(params: { ppType: string | number, category: string | number }): Promise<unknown> {
  const { ppType, category } = params

  return put(`/lol-settings/v2/account/${ppType}/${category}`)
}

/**
 * GetLolSettingsV2DidresetByPpType
 * @url GET /lol-settings/v2/didreset/{ppType}
 * @param params - 路径参数: { ppType }
 */
export function getLolSettingsV2DidresetByPpType(params: { ppType: string | number }): Promise<unknown> {
  const { ppType } = params

  return get(`/lol-settings/v2/didreset/${ppType}`)
}

/**
 * GetLolSettingsV2LocalByCategory
 * @url GET /lol-settings/v2/local/{category}
 * @param params - 路径参数: { category }
 */
export function getLolSettingsV2LocalByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return get(`/lol-settings/v2/local/${category}`)
}

/**
 * PatchLolSettingsV2LocalByCategory
 * @url PATCH /lol-settings/v2/local/{category}
 * @param params - 路径参数: { category }
 */
export function patchLolSettingsV2LocalByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return patch(`/lol-settings/v2/local/${category}`)
}

/**
 * GetLolSettingsV2Ready
 * @url GET /lol-settings/v2/ready
 */
export function getLolSettingsV2Ready(): Promise<unknown> {
  return get('/lol-settings/v2/ready')
}
