/**
 * Ranked API 模块 (自动生成)
 * 18 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolRankedV1ApexLeaguesByQueueTypeByTier
 * @url GET /lol-ranked/v1/apex-leagues/{queueType}/{tier}
 * @param params - 路径参数: { queueType, tier }
 */
export function getLolRankedV1ApexLeaguesByQueueTypeByTier(params: { queueType: string | number, tier: string | number }): Promise<unknown> {
  const { queueType, tier } = params

  return get(`/lol-ranked/v1/apex-leagues/${queueType}/${tier}`)
}

/**
 * GetLolRankedV1ChallengerLaddersEnabled
 * @url GET /lol-ranked/v1/challenger-ladders-enabled
 */
export function getLolRankedV1ChallengerLaddersEnabled(): Promise<unknown> {
  return get('/lol-ranked/v1/challenger-ladders-enabled')
}

/**
 * GetLolRankedV1CurrentLpChangeNotification
 * @url GET /lol-ranked/v1/current-lp-change-notification
 */
export function getLolRankedV1CurrentLpChangeNotification(): Promise<unknown> {
  return get('/lol-ranked/v1/current-lp-change-notification')
}

/**
 * GetLolRankedV1CurrentRankedStats
 * @url GET /lol-ranked/v1/current-ranked-stats
 */
export function getLolRankedV1CurrentRankedStats(): Promise<unknown> {
  return get('/lol-ranked/v1/current-ranked-stats')
}

/**
 * GetLolRankedV1EosNotifications
 * @url GET /lol-ranked/v1/eos-notifications
 */
export function getLolRankedV1EosNotifications(): Promise<unknown> {
  return get('/lol-ranked/v1/eos-notifications')
}

/**
 * PostLolRankedV1EosNotificationsByIdAcknowledge
 * @url POST /lol-ranked/v1/eos-notifications/{id}/acknowledge
 * @param params - 路径参数: { id }
 */
export function postLolRankedV1EosNotificationsByIdAcknowledge(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-ranked/v1/eos-notifications/${id}/acknowledge`)
}

/**
 * GetLolRankedV1EosRewards
 * @url GET /lol-ranked/v1/eos-rewards
 */
export function getLolRankedV1EosRewards(): Promise<unknown> {
  return get('/lol-ranked/v1/eos-rewards')
}

/**
 * GetLolRankedV1LeagueLaddersByPuuid
 * @url GET /lol-ranked/v1/league-ladders/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolRankedV1LeagueLaddersByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-ranked/v1/league-ladders/${puuid}`)
}

/**
 * GetLolRankedV1Notifications
 * @url GET /lol-ranked/v1/notifications
 */
export function getLolRankedV1Notifications(): Promise<unknown> {
  return get('/lol-ranked/v1/notifications')
}

/**
 * PostLolRankedV1NotificationsByIdAcknowledge
 * @url POST /lol-ranked/v1/notifications/{id}/acknowledge
 * @param params - 路径参数: { id }
 */
export function postLolRankedV1NotificationsByIdAcknowledge(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-ranked/v1/notifications/${id}/acknowledge`)
}

/**
 * GetLolRankedV1RankedStats
 * @url GET /lol-ranked/v1/ranked-stats
 * @param query - 查询参数: { puuids }
 */
export function getLolRankedV1RankedStats(query: { puuids: string[] }): Promise<unknown> {
  return get('/lol-ranked/v1/ranked-stats', query)
}

/**
 * GetLolRankedV1RankedStatsByPuuid
 * @url GET /lol-ranked/v1/ranked-stats/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolRankedV1RankedStatsByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-ranked/v1/ranked-stats/${puuid}`)
}

/**
 * GetLolRankedV1RatedLadderByQueueType
 * @url GET /lol-ranked/v1/rated-ladder/{queueType}
 * @param params - 路径参数: { queueType }
 */
export function getLolRankedV1RatedLadderByQueueType(params: { queueType: string | number }): Promise<unknown> {
  const { queueType } = params

  return get(`/lol-ranked/v1/rated-ladder/${queueType}`)
}

/**
 * GetLolRankedV1SignedRankedStats
 * @url GET /lol-ranked/v1/signed-ranked-stats
 */
export function getLolRankedV1SignedRankedStats(): Promise<unknown> {
  return get('/lol-ranked/v1/signed-ranked-stats')
}

/**
 * GetLolRankedV1SocialLeaderboardRankedQueueStatsForPuuids
 * @url GET /lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids
 * @param query - 查询参数: { queueType, puuids }
 */
export function getLolRankedV1SocialLeaderboardRankedQueueStatsForPuuids(query: { queueType: 'NONE' | 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' | 'RANKED_TFT' | 'RANKED_TFT_TURBO' | 'RANKED_TFT_PAIRS'; puuids: string[] }): Promise<unknown> {
  return get('/lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids', query)
}

/**
 * GetLolRankedV1SplitsConfig
 * @url GET /lol-ranked/v1/splits-config
 */
export function getLolRankedV1SplitsConfig(): Promise<unknown> {
  return get('/lol-ranked/v1/splits-config')
}

/**
 * GetLolRankedV1TopRatedLaddersEnabled
 * @url GET /lol-ranked/v1/top-rated-ladders-enabled
 */
export function getLolRankedV1TopRatedLaddersEnabled(): Promise<unknown> {
  return get('/lol-ranked/v1/top-rated-ladders-enabled')
}

/**
 * GetLolRankedV2Tiers
 * @url GET /lol-ranked/v2/tiers
 * @param query - 查询参数: { summonerIds, queueTypes }
 */
export function getLolRankedV2Tiers(query: { summonerIds: number[]; queueTypes: LolRankedLeagueQueueType[] }): Promise<unknown> {
  return get('/lol-ranked/v2/tiers', query)
}
