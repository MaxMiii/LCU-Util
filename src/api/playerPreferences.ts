/**
 * Playerpreferences API 模块 (自动生成)
 * 5 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * PostLolPlayerPreferencesV1Hash
 * @url POST /lol-player-preferences/v1/hash
 */
export function postLolPlayerPreferencesV1Hash(): Promise<unknown> {
  return post('/lol-player-preferences/v1/hash')
}

/**
 * PostLolPlayerPreferencesV1PlayerPreferencesEndpointOverride
 * @url POST /lol-player-preferences/v1/player-preferences-endpoint-override
 */
export function postLolPlayerPreferencesV1PlayerPreferencesEndpointOverride(): Promise<unknown> {
  return post('/lol-player-preferences/v1/player-preferences-endpoint-override')
}

/**
 * GetLolPlayerPreferencesV1PlayerPreferencesReady
 * @url GET /lol-player-preferences/v1/player-preferences-ready
 */
export function getLolPlayerPreferencesV1PlayerPreferencesReady(): Promise<unknown> {
  return get('/lol-player-preferences/v1/player-preferences-ready')
}

/**
 * PutLolPlayerPreferencesV1Preference
 * @url PUT /lol-player-preferences/v1/preference
 */
export function putLolPlayerPreferencesV1Preference(): Promise<unknown> {
  return put('/lol-player-preferences/v1/preference')
}

/**
 * GetLolPlayerPreferencesV1PreferenceByType
 * @url GET /lol-player-preferences/v1/preference/{type}
 * @param params - 路径参数: { type }
 * @param query - 查询参数: { hash }
 */
export function getLolPlayerPreferencesV1PreferenceByType(params: { type: string | number }, query: { hash?: string }): Promise<unknown> {
  const { type } = params

  return get(`/lol-player-preferences/v1/preference/${type}`, query)
}
