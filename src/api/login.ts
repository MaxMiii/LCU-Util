/**
 * Login API 模块 (自动生成)
 * 23 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolLoginV1AccountState
 * @url GET /lol-login/v1/account-state
 */
export function getLolLoginV1AccountState(): Promise<unknown> {
  return get('/lol-login/v1/account-state')
}

/**
 * PostLolLoginV1AccountState
 * @url POST /lol-login/v1/account-state
 */
export function postLolLoginV1AccountState(): Promise<unknown> {
  return post('/lol-login/v1/account-state')
}

/**
 * PostLolLoginV1ChangeSummonerName
 * @url POST /lol-login/v1/change-summoner-name
 */
export function postLolLoginV1ChangeSummonerName(): Promise<unknown> {
  return post('/lol-login/v1/change-summoner-name')
}

/**
 * PostLolLoginV1DeleteRsoOnClose
 * @url POST /lol-login/v1/delete-rso-on-close
 */
export function postLolLoginV1DeleteRsoOnClose(): Promise<unknown> {
  return post('/lol-login/v1/delete-rso-on-close')
}

/**
 * PostLolLoginV1LeagueSessionStatus
 * @url POST /lol-login/v1/leagueSessionStatus
 */
export function postLolLoginV1LeagueSessionStatus(): Promise<unknown> {
  return post('/lol-login/v1/leagueSessionStatus')
}

/**
 * GetLolLoginV1LoginConnectionState
 * @url GET /lol-login/v1/login-connection-state
 */
export function getLolLoginV1LoginConnectionState(): Promise<unknown> {
  return get('/lol-login/v1/login-connection-state')
}

/**
 * GetLolLoginV1LoginDataPacket
 * @url GET /lol-login/v1/login-data-packet
 */
export function getLolLoginV1LoginDataPacket(): Promise<unknown> {
  return get('/lol-login/v1/login-data-packet')
}

/**
 * GetLolLoginV1LoginInGameCreds
 * @url GET /lol-login/v1/login-in-game-creds
 */
export function getLolLoginV1LoginInGameCreds(): Promise<unknown> {
  return get('/lol-login/v1/login-in-game-creds')
}

/**
 * GetLolLoginV1LoginPlatformCredentials
 * @url GET /lol-login/v1/login-platform-credentials
 */
export function getLolLoginV1LoginPlatformCredentials(): Promise<unknown> {
  return get('/lol-login/v1/login-platform-credentials')
}

/**
 * GetLolLoginV1LoginQueueState
 * @url GET /lol-login/v1/login-queue-state
 */
export function getLolLoginV1LoginQueueState(): Promise<unknown> {
  return get('/lol-login/v1/login-queue-state')
}

/**
 * DeleteLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName
 * @url DELETE /lol-login/v1/service-proxy-async-requests/{serviceName}/{methodName}
 * @param params - 路径参数: { serviceName, methodName }
 * @param query - 查询参数: { pluginId }
 */
export function deleteLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName(params: { serviceName: string | number, methodName: string | number }, query: { pluginId: number }): Promise<unknown> {
  const { serviceName, methodName } = params

  return del(`/lol-login/v1/service-proxy-async-requests/${serviceName}/${methodName}`, query)
}

/**
 * PostLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName
 * @url POST /lol-login/v1/service-proxy-async-requests/{serviceName}/{methodName}
 * @param params - 路径参数: { serviceName, methodName }
 * @param query - 查询参数: { pluginId }
 */
export function postLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName(params: { serviceName: string | number, methodName: string | number }, query: { pluginId: number }): Promise<unknown> {
  const { serviceName, methodName } = params

  return post(`/lol-login/v1/service-proxy-async-requests/${serviceName}/${methodName}`, query)
}

/**
 * PostLolLoginV1ServiceProxyUuidRequests
 * @url POST /lol-login/v1/service-proxy-uuid-requests
 * @param query - 查询参数: { serviceName, methodName, pluginId, timeoutMillis, payload }
 */
export function postLolLoginV1ServiceProxyUuidRequests(query: { serviceName: string; methodName: string; pluginId: number; timeoutMillis: number; payload: string }): Promise<unknown> {
  return post('/lol-login/v1/service-proxy-uuid-requests', query)
}

/**
 * DeleteLolLoginV1Session
 * @url DELETE /lol-login/v1/session
 */
export function deleteLolLoginV1Session(): Promise<unknown> {
  return del('/lol-login/v1/session')
}

/**
 * GetLolLoginV1Session
 * @url GET /lol-login/v1/session
 */
export function getLolLoginV1Session(): Promise<unknown> {
  return get('/lol-login/v1/session')
}

/**
 * PostLolLoginV1Session
 * @url POST /lol-login/v1/session
 */
export function postLolLoginV1Session(): Promise<unknown> {
  return post('/lol-login/v1/session')
}

/**
 * PostLolLoginV1SessionInvoke
 * @url POST /lol-login/v1/session/invoke
 * @param query - 查询参数: { destination, method }
 */
export function postLolLoginV1SessionInvoke(query: { destination: string; method: string }): Promise<unknown> {
  return post('/lol-login/v1/session/invoke', query)
}

/**
 * DeleteLolLoginV1ShutdownLocksByLockName
 * @url DELETE /lol-login/v1/shutdown-locks/{lockName}
 * @param params - 路径参数: { lockName }
 */
export function deleteLolLoginV1ShutdownLocksByLockName(params: { lockName: string | number }): Promise<unknown> {
  const { lockName } = params

  return del(`/lol-login/v1/shutdown-locks/${lockName}`)
}

/**
 * PutLolLoginV1ShutdownLocksByLockName
 * @url PUT /lol-login/v1/shutdown-locks/{lockName}
 * @param params - 路径参数: { lockName }
 */
export function putLolLoginV1ShutdownLocksByLockName(params: { lockName: string | number }): Promise<unknown> {
  const { lockName } = params

  return put(`/lol-login/v1/shutdown-locks/${lockName}`)
}

/**
 * PostLolLoginV1SummonerSession
 * @url POST /lol-login/v1/summoner-session
 */
export function postLolLoginV1SummonerSession(): Promise<unknown> {
  return post('/lol-login/v1/summoner-session')
}

/**
 * PostLolLoginV1SummonerSessionFailed
 * @url POST /lol-login/v1/summoner-session-failed
 */
export function postLolLoginV1SummonerSessionFailed(): Promise<unknown> {
  return post('/lol-login/v1/summoner-session-failed')
}

/**
 * GetLolLoginV1Wallet
 * @url GET /lol-login/v1/wallet
 */
export function getLolLoginV1Wallet(): Promise<unknown> {
  return get('/lol-login/v1/wallet')
}

/**
 * GetLolLoginV2LeagueSessionInitToken
 * @url GET /lol-login/v2/league-session-init-token
 */
export function getLolLoginV2LeagueSessionInitToken(): Promise<unknown> {
  return get('/lol-login/v2/league-session-init-token')
}
