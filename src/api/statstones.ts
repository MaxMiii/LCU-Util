/**
 * Statstones API 模块 (自动生成)
 * 13 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * DeleteLolStatstonesV1EogNotifications
 * @url DELETE /lol-statstones/v1/eog-notifications
 */
export function deleteLolStatstonesV1EogNotifications(): Promise<unknown> {
  return del('/lol-statstones/v1/eog-notifications')
}

/**
 * GetLolStatstonesV1EogNotifications
 * @url GET /lol-statstones/v1/eog-notifications
 */
export function getLolStatstonesV1EogNotifications(): Promise<unknown> {
  return get('/lol-statstones/v1/eog-notifications')
}

/**
 * DeleteLolStatstonesV1EogNotificationsByKey
 * @url DELETE /lol-statstones/v1/eog-notifications/{key}
 * @param params - 路径参数: { key }
 */
export function deleteLolStatstonesV1EogNotificationsByKey(params: { key: string | number }): Promise<unknown> {
  const { key } = params

  return del(`/lol-statstones/v1/eog-notifications/${key}`)
}

/**
 * GetLolStatstonesV1FeaturedChampionStatstonesByChampionItemId
 * @url GET /lol-statstones/v1/featured-champion-statstones/{championItemId}
 * @param params - 路径参数: { championItemId }
 */
export function getLolStatstonesV1FeaturedChampionStatstonesByChampionItemId(params: { championItemId: string | number }): Promise<unknown> {
  const { championItemId } = params

  return get(`/lol-statstones/v1/featured-champion-statstones/${championItemId}`)
}

/**
 * PostLolStatstonesV1FeaturedChampionStatstonesByChampionItemIdByStatstoneId
 * @url POST /lol-statstones/v1/featured-champion-statstones/{championItemId}/{statstoneId}
 * @param params - 路径参数: { championItemId, statstoneId }
 */
export function postLolStatstonesV1FeaturedChampionStatstonesByChampionItemIdByStatstoneId(params: { championItemId: string | number, statstoneId: string | number }): Promise<unknown> {
  const { championItemId, statstoneId } = params

  return post(`/lol-statstones/v1/featured-champion-statstones/${championItemId}/${statstoneId}`)
}

/**
 * GetLolStatstonesV1ProfileSummaryByPuuid
 * @url GET /lol-statstones/v1/profile-summary/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolStatstonesV1ProfileSummaryByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-statstones/v1/profile-summary/${puuid}`)
}

/**
 * GetLolStatstonesV1StatstoneByContentIdOwned
 * @url GET /lol-statstones/v1/statstone/{contentId}/owned
 * @param params - 路径参数: { contentId }
 */
export function getLolStatstonesV1StatstoneByContentIdOwned(params: { contentId: string | number }): Promise<unknown> {
  const { contentId } = params

  return get(`/lol-statstones/v1/statstone/${contentId}/owned`)
}

/**
 * GetLolStatstonesV1StatstonesEnabledQueueIds
 * @url GET /lol-statstones/v1/statstones-enabled-queue-ids
 */
export function getLolStatstonesV1StatstonesEnabledQueueIds(): Promise<unknown> {
  return get('/lol-statstones/v1/statstones-enabled-queue-ids')
}

/**
 * DeleteLolStatstonesV1VignetteNotifications
 * @url DELETE /lol-statstones/v1/vignette-notifications
 */
export function deleteLolStatstonesV1VignetteNotifications(): Promise<unknown> {
  return del('/lol-statstones/v1/vignette-notifications')
}

/**
 * GetLolStatstonesV1VignetteNotifications
 * @url GET /lol-statstones/v1/vignette-notifications
 */
export function getLolStatstonesV1VignetteNotifications(): Promise<unknown> {
  return get('/lol-statstones/v1/vignette-notifications')
}

/**
 * DeleteLolStatstonesV1VignetteNotificationsByKey
 * @url DELETE /lol-statstones/v1/vignette-notifications/{key}
 * @param params - 路径参数: { key }
 */
export function deleteLolStatstonesV1VignetteNotificationsByKey(params: { key: string | number }): Promise<unknown> {
  const { key } = params

  return del(`/lol-statstones/v1/vignette-notifications/${key}`)
}

/**
 * GetLolStatstonesV2PlayerStatstonesSelfByChampionItemId
 * @url GET /lol-statstones/v2/player-statstones-self/{championItemId}
 * @param params - 路径参数: { championItemId }
 */
export function getLolStatstonesV2PlayerStatstonesSelfByChampionItemId(params: { championItemId: string | number }): Promise<unknown> {
  const { championItemId } = params

  return get(`/lol-statstones/v2/player-statstones-self/${championItemId}`)
}

/**
 * GetLolStatstonesV2PlayerSummarySelf
 * @url GET /lol-statstones/v2/player-summary-self
 */
export function getLolStatstonesV2PlayerSummarySelf(): Promise<unknown> {
  return get('/lol-statstones/v2/player-summary-self')
}
