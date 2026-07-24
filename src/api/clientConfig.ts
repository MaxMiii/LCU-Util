/**
 * Clientconfig API 模块 (自动生成)
 * 11 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetClientConfigV1Config
 * @url GET /client-config/v1/config
 * @param query - 查询参数: { type, app, version, patchline, region, namespace }
 */
export function getClientConfigV1Config(query: { type: 'public' | 'player'; app?: string; version?: string; patchline?: string; region?: string; namespace?: string }): Promise<unknown> {
  return get('/client-config/v1/config', query)
}

/**
 * GetClientConfigV1ConfigByName
 * @url GET /client-config/v1/config/{name}
 * @param params - 路径参数: { name }
 * @param query - 查询参数: { type, app, version, patchline, region }
 */
export function getClientConfigV1ConfigByName(params: { name: string | number }, query: { type: 'public' | 'player'; app?: string; version?: string; patchline?: string; region?: string }): Promise<unknown> {
  const { name } = params

  return get(`/client-config/v1/config/${name}`, query)
}

/**
 * PutClientConfigV1EntitlementsToken
 * @url PUT /client-config/v1/entitlements-token
 */
export function putClientConfigV1EntitlementsToken(): Promise<unknown> {
  return put('/client-config/v1/entitlements-token')
}

/**
 * PutClientConfigV1RefreshConfigStatus
 * @url PUT /client-config/v1/refresh-config-status
 */
export function putClientConfigV1RefreshConfigStatus(): Promise<unknown> {
  return put('/client-config/v1/refresh-config-status')
}

/**
 * GetClientConfigV1StatusByType
 * @url GET /client-config/v1/status/{type}
 * @param params - 路径参数: { type }
 */
export function getClientConfigV1StatusByType(params: { type: string | number }): Promise<unknown> {
  const { type } = params

  return get(`/client-config/v1/status/${type}`)
}

/**
 * GetClientConfigV2ConfigByName
 * @url GET /client-config/v2/config/{name}
 * @param params - 路径参数: { name }
 */
export function getClientConfigV2ConfigByName(params: { name: string | number }): Promise<unknown> {
  const { name } = params

  return get(`/client-config/v2/config/${name}`)
}

/**
 * PutClientConfigV2NamespaceChanges
 * @url PUT /client-config/v2/namespace-changes
 */
export function putClientConfigV2NamespaceChanges(): Promise<unknown> {
  return put('/client-config/v2/namespace-changes')
}

/**
 * GetClientConfigV2NamespaceByNamespace
 * @url GET /client-config/v2/namespace/{namespace}
 * @param params - 路径参数: { namespace }
 */
export function getClientConfigV2NamespaceByNamespace(params: { namespace: string | number }): Promise<unknown> {
  const { namespace } = params

  return get(`/client-config/v2/namespace/${namespace}`)
}

/**
 * GetClientConfigV2NamespaceByNamespacePlayer
 * @url GET /client-config/v2/namespace/{namespace}/player
 * @param params - 路径参数: { namespace }
 */
export function getClientConfigV2NamespaceByNamespacePlayer(params: { namespace: string | number }): Promise<unknown> {
  const { namespace } = params

  return get(`/client-config/v2/namespace/${namespace}/player`)
}

/**
 * GetClientConfigV2NamespaceByNamespacePublic
 * @url GET /client-config/v2/namespace/{namespace}/public
 * @param params - 路径参数: { namespace }
 */
export function getClientConfigV2NamespaceByNamespacePublic(params: { namespace: string | number }): Promise<unknown> {
  const { namespace } = params

  return get(`/client-config/v2/namespace/${namespace}/public`)
}

/**
 * GetLolClientConfigV3ClientConfigByName
 * @url GET /lol-client-config/v3/client-config/{name}
 * @param params - 路径参数: { name }
 */
export function getLolClientConfigV3ClientConfigByName(params: { name: string | number }): Promise<unknown> {
  const { name } = params

  return get(`/lol-client-config/v3/client-config/${name}`)
}
