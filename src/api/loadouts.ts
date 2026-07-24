/**
 * Loadouts API 模块 (自动生成)
 * 8 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolLoadoutsV1LoadoutsReady
 * @url GET /lol-loadouts/v1/loadouts-ready
 */
export function getLolLoadoutsV1LoadoutsReady(): Promise<unknown> {
  return get('/lol-loadouts/v1/loadouts-ready')
}

/**
 * PostLolLoadoutsV4Loadouts
 * @url POST /lol-loadouts/v4/loadouts
 */
export function postLolLoadoutsV4Loadouts(): Promise<unknown> {
  return post('/lol-loadouts/v4/loadouts')
}

/**
 * GetLolLoadoutsV4LoadoutsScopeAccount
 * @url GET /lol-loadouts/v4/loadouts/scope/account
 */
export function getLolLoadoutsV4LoadoutsScopeAccount(): Promise<unknown> {
  return get('/lol-loadouts/v4/loadouts/scope/account')
}

/**
 * GetLolLoadoutsV4LoadoutsScopeByScopeByScopeItemId
 * @url GET /lol-loadouts/v4/loadouts/scope/{scope}/{scopeItemId}
 * @param params - 路径参数: { scope, scopeItemId }
 */
export function getLolLoadoutsV4LoadoutsScopeByScopeByScopeItemId(params: { scope: string | number, scopeItemId: string | number }): Promise<unknown> {
  const { scope, scopeItemId } = params

  return get(`/lol-loadouts/v4/loadouts/scope/${scope}/${scopeItemId}`)
}

/**
 * DeleteLolLoadoutsV4LoadoutsById
 * @url DELETE /lol-loadouts/v4/loadouts/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolLoadoutsV4LoadoutsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-loadouts/v4/loadouts/${id}`)
}

/**
 * PatchLolLoadoutsV4LoadoutsById
 * @url PATCH /lol-loadouts/v4/loadouts/{id}
 * @param params - 路径参数: { id }
 */
export function patchLolLoadoutsV4LoadoutsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return patch(`/lol-loadouts/v4/loadouts/${id}`)
}

/**
 * PutLolLoadoutsV4LoadoutsById
 * @url PUT /lol-loadouts/v4/loadouts/{id}
 * @param params - 路径参数: { id }
 */
export function putLolLoadoutsV4LoadoutsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-loadouts/v4/loadouts/${id}`)
}

/**
 * GetLolLoadoutsV4LoadoutsByLoadoutId
 * @url GET /lol-loadouts/v4/loadouts/{loadoutId}
 * @param params - 路径参数: { loadoutId }
 */
export function getLolLoadoutsV4LoadoutsByLoadoutId(params: { loadoutId: string | number }): Promise<unknown> {
  const { loadoutId } = params

  return get(`/lol-loadouts/v4/loadouts/${loadoutId}`)
}
