/**
 * Rsoauth API 模块 (自动生成)
 * 17 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolRsoAuthConfigurationV3ReadyState
 * @url GET /lol-rso-auth/configuration/v3/ready-state
 */
export function getLolRsoAuthConfigurationV3ReadyState(): Promise<unknown> {
  return get('/lol-rso-auth/configuration/v3/ready-state')
}

/**
 * DeleteLolRsoAuthV1AuthHintsHint
 * @url DELETE /lol-rso-auth/v1/auth-hints/hint
 */
export function deleteLolRsoAuthV1AuthHintsHint(): Promise<unknown> {
  return del('/lol-rso-auth/v1/auth-hints/hint')
}

/**
 * GetLolRsoAuthV1AuthHintsHint
 * @url GET /lol-rso-auth/v1/auth-hints/hint
 */
export function getLolRsoAuthV1AuthHintsHint(): Promise<unknown> {
  return get('/lol-rso-auth/v1/auth-hints/hint')
}

/**
 * DeleteLolRsoAuthV1Authorization
 * @url DELETE /lol-rso-auth/v1/authorization
 */
export function deleteLolRsoAuthV1Authorization(): Promise<unknown> {
  return del('/lol-rso-auth/v1/authorization')
}

/**
 * GetLolRsoAuthV1Authorization
 * @url GET /lol-rso-auth/v1/authorization
 */
export function getLolRsoAuthV1Authorization(): Promise<unknown> {
  return get('/lol-rso-auth/v1/authorization')
}

/**
 * GetLolRsoAuthV1AuthorizationAccessToken
 * @url GET /lol-rso-auth/v1/authorization/access-token
 */
export function getLolRsoAuthV1AuthorizationAccessToken(): Promise<unknown> {
  return get('/lol-rso-auth/v1/authorization/access-token')
}

/**
 * GetLolRsoAuthV1AuthorizationError
 * @url GET /lol-rso-auth/v1/authorization/error
 */
export function getLolRsoAuthV1AuthorizationError(): Promise<unknown> {
  return get('/lol-rso-auth/v1/authorization/error')
}

/**
 * PostLolRsoAuthV1AuthorizationGas
 * @url POST /lol-rso-auth/v1/authorization/gas
 */
export function postLolRsoAuthV1AuthorizationGas(): Promise<unknown> {
  return post('/lol-rso-auth/v1/authorization/gas')
}

/**
 * GetLolRsoAuthV1AuthorizationIdToken
 * @url GET /lol-rso-auth/v1/authorization/id-token
 */
export function getLolRsoAuthV1AuthorizationIdToken(): Promise<unknown> {
  return get('/lol-rso-auth/v1/authorization/id-token')
}

/**
 * PostLolRsoAuthV1AuthorizationRefresh
 * @url POST /lol-rso-auth/v1/authorization/refresh
 */
export function postLolRsoAuthV1AuthorizationRefresh(): Promise<unknown> {
  return post('/lol-rso-auth/v1/authorization/refresh')
}

/**
 * GetLolRsoAuthV1AuthorizationUserinfo
 * @url GET /lol-rso-auth/v1/authorization/userinfo
 */
export function getLolRsoAuthV1AuthorizationUserinfo(): Promise<unknown> {
  return get('/lol-rso-auth/v1/authorization/userinfo')
}

/**
 * PostLolRsoAuthV1AuthorizationUserinfo
 * @url POST /lol-rso-auth/v1/authorization/userinfo
 */
export function postLolRsoAuthV1AuthorizationUserinfo(): Promise<unknown> {
  return post('/lol-rso-auth/v1/authorization/userinfo')
}

/**
 * PostLolRsoAuthV1DeviceId
 * @url POST /lol-rso-auth/v1/device-id
 */
export function postLolRsoAuthV1DeviceId(): Promise<unknown> {
  return post('/lol-rso-auth/v1/device-id')
}

/**
 * DeleteLolRsoAuthV1Session
 * @url DELETE /lol-rso-auth/v1/session
 */
export function deleteLolRsoAuthV1Session(): Promise<unknown> {
  return del('/lol-rso-auth/v1/session')
}

/**
 * GetLolRsoAuthV1StatusByPlatformId
 * @url GET /lol-rso-auth/v1/status/{platformId}
 * @param params - 路径参数: { platformId }
 */
export function getLolRsoAuthV1StatusByPlatformId(params: { platformId: string | number }): Promise<unknown> {
  const { platformId } = params

  return get(`/lol-rso-auth/v1/status/${platformId}`)
}

/**
 * DeleteLolRsoAuthV2Config
 * @url DELETE /lol-rso-auth/v2/config
 */
export function deleteLolRsoAuthV2Config(): Promise<unknown> {
  return del('/lol-rso-auth/v2/config')
}

/**
 * PostLolRsoAuthV2Config
 * @url POST /lol-rso-auth/v2/config
 */
export function postLolRsoAuthV2Config(): Promise<unknown> {
  return post('/lol-rso-auth/v2/config')
}
