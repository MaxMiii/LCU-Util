/**
 * Playernotifications API 模块 (自动生成)
 * 7 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetPlayerNotificationsV1Config
 * @url GET /player-notifications/v1/config
 */
export function getPlayerNotificationsV1Config(): Promise<unknown> {
  return get('/player-notifications/v1/config')
}

/**
 * PutPlayerNotificationsV1Config
 * @url PUT /player-notifications/v1/config
 */
export function putPlayerNotificationsV1Config(): Promise<unknown> {
  return put('/player-notifications/v1/config')
}

/**
 * GetPlayerNotificationsV1Notifications
 * @url GET /player-notifications/v1/notifications
 */
export function getPlayerNotificationsV1Notifications(): Promise<unknown> {
  return get('/player-notifications/v1/notifications')
}

/**
 * PostPlayerNotificationsV1Notifications
 * @url POST /player-notifications/v1/notifications
 */
export function postPlayerNotificationsV1Notifications(): Promise<unknown> {
  return post('/player-notifications/v1/notifications')
}

/**
 * DeletePlayerNotificationsV1NotificationsById
 * @url DELETE /player-notifications/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function deletePlayerNotificationsV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/player-notifications/v1/notifications/${id}`)
}

/**
 * GetPlayerNotificationsV1NotificationsById
 * @url GET /player-notifications/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function getPlayerNotificationsV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/player-notifications/v1/notifications/${id}`)
}

/**
 * PutPlayerNotificationsV1NotificationsById
 * @url PUT /player-notifications/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function putPlayerNotificationsV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/player-notifications/v1/notifications/${id}`)
}
