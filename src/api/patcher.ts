/**
 * Patcher API 模块 (自动生成)
 * 21 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetPatcherV1Notifications
 * @url GET /patcher/v1/notifications
 */
export function getPatcherV1Notifications(): Promise<unknown> {
  return get('/patcher/v1/notifications')
}

/**
 * PostPatcherV1Notifications
 * @url POST /patcher/v1/notifications
 * @param query - 查询参数: { notificationId }
 */
export function postPatcherV1Notifications(query: { notificationId: 'UnspecifiedError' | 'ConnectionError' | 'MissingFilesError' | 'FailedToWriteError' | 'WillRestoreClientBackupOnRestart' | 'DidRestoreClientBackup' | 'NotEnoughDiskSpace' | 'BrokenPermissions' }): Promise<unknown> {
  return post('/patcher/v1/notifications', query)
}

/**
 * DeletePatcherV1NotificationsById
 * @url DELETE /patcher/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function deletePatcherV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/patcher/v1/notifications/${id}`)
}

/**
 * GetPatcherV1P2pStatus
 * @url GET /patcher/v1/p2p/status
 */
export function getPatcherV1P2pStatus(): Promise<unknown> {
  return get('/patcher/v1/p2p/status')
}

/**
 * PatchPatcherV1P2pStatus
 * @url PATCH /patcher/v1/p2p/status
 */
export function patchPatcherV1P2pStatus(): Promise<unknown> {
  return patch('/patcher/v1/p2p/status')
}

/**
 * GetPatcherV1Products
 * @url GET /patcher/v1/products
 */
export function getPatcherV1Products(): Promise<unknown> {
  return get('/patcher/v1/products')
}

/**
 * PostPatcherV1ProductsLeagueOfLegendsFullRepairRequest
 * @url POST /patcher/v1/products/league_of_legends/full-repair-request
 */
export function postPatcherV1ProductsLeagueOfLegendsFullRepairRequest(): Promise<unknown> {
  return post('/patcher/v1/products/league_of_legends/full-repair-request')
}

/**
 * DeletePatcherV1ProductsByProductId
 * @url DELETE /patcher/v1/products/{product-id}
 */
export function deletePatcherV1ProductsByProductId(): Promise<unknown> {
  return del('/patcher/v1/products/{product-id}')
}

/**
 * PostPatcherV1ProductsByProductIdDetectCorruptionRequest
 * @url POST /patcher/v1/products/{product-id}/detect-corruption-request
 */
export function postPatcherV1ProductsByProductIdDetectCorruptionRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/detect-corruption-request')
}

/**
 * PostPatcherV1ProductsByProductIdPartialRepairRequest
 * @url POST /patcher/v1/products/{product-id}/partial-repair-request
 */
export function postPatcherV1ProductsByProductIdPartialRepairRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/partial-repair-request')
}

/**
 * GetPatcherV1ProductsByProductIdPaths
 * @url GET /patcher/v1/products/{product-id}/paths
 */
export function getPatcherV1ProductsByProductIdPaths(): Promise<unknown> {
  return get('/patcher/v1/products/{product-id}/paths')
}

/**
 * PostPatcherV1ProductsByProductIdSignalStartPatchingDelayed
 * @url POST /patcher/v1/products/{product-id}/signal-start-patching-delayed
 */
export function postPatcherV1ProductsByProductIdSignalStartPatchingDelayed(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/signal-start-patching-delayed')
}

/**
 * PostPatcherV1ProductsByProductIdStartCheckingRequest
 * @url POST /patcher/v1/products/{product-id}/start-checking-request
 */
export function postPatcherV1ProductsByProductIdStartCheckingRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/start-checking-request')
}

/**
 * PostPatcherV1ProductsByProductIdStartPatchingRequest
 * @url POST /patcher/v1/products/{product-id}/start-patching-request
 */
export function postPatcherV1ProductsByProductIdStartPatchingRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/start-patching-request')
}

/**
 * GetPatcherV1ProductsByProductIdState
 * @url GET /patcher/v1/products/{product-id}/state
 */
export function getPatcherV1ProductsByProductIdState(): Promise<unknown> {
  return get('/patcher/v1/products/{product-id}/state')
}

/**
 * PostPatcherV1ProductsByProductIdStopCheckingRequest
 * @url POST /patcher/v1/products/{product-id}/stop-checking-request
 */
export function postPatcherV1ProductsByProductIdStopCheckingRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/stop-checking-request')
}

/**
 * PostPatcherV1ProductsByProductIdStopPatchingRequest
 * @url POST /patcher/v1/products/{product-id}/stop-patching-request
 */
export function postPatcherV1ProductsByProductIdStopPatchingRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/stop-patching-request')
}

/**
 * GetPatcherV1ProductsByProductIdTags
 * @url GET /patcher/v1/products/{product-id}/tags
 */
export function getPatcherV1ProductsByProductIdTags(): Promise<unknown> {
  return get('/patcher/v1/products/{product-id}/tags')
}

/**
 * PutPatcherV1SelfUpdateRestart
 * @url PUT /patcher/v1/self-update-restart
 * @param query - 查询参数: { forceRestartOnSelfUpdate }
 */
export function putPatcherV1SelfUpdateRestart(query: { forceRestartOnSelfUpdate: boolean }): Promise<unknown> {
  return put('/patcher/v1/self-update-restart', query)
}

/**
 * GetPatcherV1Status
 * @url GET /patcher/v1/status
 */
export function getPatcherV1Status(): Promise<unknown> {
  return get('/patcher/v1/status')
}

/**
 * PutPatcherV1Ux
 * @url PUT /patcher/v1/ux
 */
export function putPatcherV1Ux(): Promise<unknown> {
  return put('/patcher/v1/ux')
}
