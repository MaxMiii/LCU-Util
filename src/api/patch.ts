/**
 * Patch API 模块 (自动生成)
 * 18 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolPatchV1CheckingEnabled
 * @url GET /lol-patch/v1/checking-enabled
 */
export function getLolPatchV1CheckingEnabled(): Promise<unknown> {
  return get('/lol-patch/v1/checking-enabled')
}

/**
 * GetLolPatchV1Environment
 * @url GET /lol-patch/v1/environment
 */
export function getLolPatchV1Environment(): Promise<unknown> {
  return get('/lol-patch/v1/environment')
}

/**
 * PutLolPatchV1GamePatchUrl
 * @url PUT /lol-patch/v1/game-patch-url
 * @param query - 查询参数: { url }
 */
export function putLolPatchV1GamePatchUrl(query: { url: string }): Promise<unknown> {
  return put('/lol-patch/v1/game-patch-url', query)
}

/**
 * GetLolPatchV1GameVersion
 * @url GET /lol-patch/v1/game-version
 */
export function getLolPatchV1GameVersion(): Promise<unknown> {
  return get('/lol-patch/v1/game-version')
}

/**
 * GetLolPatchV1Notifications
 * @url GET /lol-patch/v1/notifications
 */
export function getLolPatchV1Notifications(): Promise<unknown> {
  return get('/lol-patch/v1/notifications')
}

/**
 * DeleteLolPatchV1NotificationsById
 * @url DELETE /lol-patch/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolPatchV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-patch/v1/notifications/${id}`)
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsDetectCorruptionRequest
 * @url POST /lol-patch/v1/products/league_of_legends/detect-corruption-request
 */
export function postLolPatchV1ProductsLeagueOfLegendsDetectCorruptionRequest(): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/detect-corruption-request')
}

/**
 * GetLolPatchV1ProductsLeagueOfLegendsInstallLocation
 * @url GET /lol-patch/v1/products/league_of_legends/install-location
 */
export function getLolPatchV1ProductsLeagueOfLegendsInstallLocation(): Promise<unknown> {
  return get('/lol-patch/v1/products/league_of_legends/install-location')
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsPartialRepairRequest
 * @url POST /lol-patch/v1/products/league_of_legends/partial-repair-request
 */
export function postLolPatchV1ProductsLeagueOfLegendsPartialRepairRequest(): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/partial-repair-request')
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsStartCheckingRequest
 * @url POST /lol-patch/v1/products/league_of_legends/start-checking-request
 */
export function postLolPatchV1ProductsLeagueOfLegendsStartCheckingRequest(): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/start-checking-request')
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsStartPatchingRequest
 * @url POST /lol-patch/v1/products/league_of_legends/start-patching-request
 */
export function postLolPatchV1ProductsLeagueOfLegendsStartPatchingRequest(): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/start-patching-request')
}

/**
 * GetLolPatchV1ProductsLeagueOfLegendsState
 * @url GET /lol-patch/v1/products/league_of_legends/state
 */
export function getLolPatchV1ProductsLeagueOfLegendsState(): Promise<unknown> {
  return get('/lol-patch/v1/products/league_of_legends/state')
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsStopCheckingRequest
 * @url POST /lol-patch/v1/products/league_of_legends/stop-checking-request
 */
export function postLolPatchV1ProductsLeagueOfLegendsStopCheckingRequest(): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/stop-checking-request')
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsStopPatchingRequest
 * @url POST /lol-patch/v1/products/league_of_legends/stop-patching-request
 * @param query - 查询参数: { restart }
 */
export function postLolPatchV1ProductsLeagueOfLegendsStopPatchingRequest(query: { restart: boolean }): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/stop-patching-request', query)
}

/**
 * GetLolPatchV1ProductsLeagueOfLegendsSupportedGameReleases
 * @url GET /lol-patch/v1/products/league_of_legends/supported-game-releases
 */
export function getLolPatchV1ProductsLeagueOfLegendsSupportedGameReleases(): Promise<unknown> {
  return get('/lol-patch/v1/products/league_of_legends/supported-game-releases')
}

/**
 * PutLolPatchV1SelfUpdateRestart
 * @url PUT /lol-patch/v1/self-update-restart
 * @param query - 查询参数: { forceRestartOnSelfUpdate }
 */
export function putLolPatchV1SelfUpdateRestart(query: { forceRestartOnSelfUpdate: boolean }): Promise<unknown> {
  return put('/lol-patch/v1/self-update-restart', query)
}

/**
 * GetLolPatchV1Status
 * @url GET /lol-patch/v1/status
 */
export function getLolPatchV1Status(): Promise<unknown> {
  return get('/lol-patch/v1/status')
}

/**
 * PutLolPatchV1Ux
 * @url PUT /lol-patch/v1/ux
 */
export function putLolPatchV1Ux(): Promise<unknown> {
  return put('/lol-patch/v1/ux')
}
