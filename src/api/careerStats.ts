/**
 * Careerstats API 模块 (自动生成)
 * 13 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolCareerStatsV1ChampionAveragesSeasonBySeasonByChampionIdByPositionByTierByQueue
 * @url GET /lol-career-stats/v1/champion-averages/season/{season}/{championId}/{position}/{tier}/{queue}
 * @param params - 路径参数: { season, championId, position, tier, queue }
 */
export function getLolCareerStatsV1ChampionAveragesSeasonBySeasonByChampionIdByPositionByTierByQueue(params: { season: string | number, championId: string | number, position: string | number, tier: string | number, queue: string | number }): Promise<unknown> {
  const { season, championId, position, tier, queue } = params

  return get(`/lol-career-stats/v1/champion-averages/season/${season}/${championId}/${position}/${tier}/${queue}`)
}

/**
 * GetLolCareerStatsV1ChampionAveragesByChampionIdByPositionByTierByQueue
 * @url GET /lol-career-stats/v1/champion-averages/{championId}/{position}/{tier}/{queue}
 * @param params - 路径参数: { championId, position, tier, queue }
 */
export function getLolCareerStatsV1ChampionAveragesByChampionIdByPositionByTierByQueue(params: { championId: string | number, position: string | number, tier: string | number, queue: string | number }): Promise<unknown> {
  const { championId, position, tier, queue } = params

  return get(`/lol-career-stats/v1/champion-averages/${championId}/${position}/${tier}/${queue}`)
}

/**
 * GetLolCareerStatsV1ChampionExpertsSeasonBySeasonByChampionIdByPosition
 * @url GET /lol-career-stats/v1/champion-experts/season/{season}/{championId}/{position}
 * @param params - 路径参数: { season, championId, position }
 */
export function getLolCareerStatsV1ChampionExpertsSeasonBySeasonByChampionIdByPosition(params: { season: string | number, championId: string | number, position: string | number }): Promise<unknown> {
  const { season, championId, position } = params

  return get(`/lol-career-stats/v1/champion-experts/season/${season}/${championId}/${position}`)
}

/**
 * GetLolCareerStatsV1ChampionExpertsByChampionIdByPosition
 * @url GET /lol-career-stats/v1/champion-experts/{championId}/{position}
 * @param params - 路径参数: { championId, position }
 */
export function getLolCareerStatsV1ChampionExpertsByChampionIdByPosition(params: { championId: string | number, position: string | number }): Promise<unknown> {
  const { championId, position } = params

  return get(`/lol-career-stats/v1/champion-experts/${championId}/${position}`)
}

/**
 * PostLolCareerStatsV1ChampionStatsPercentiles
 * @url POST /lol-career-stats/v1/champion-stats-percentiles
 */
export function postLolCareerStatsV1ChampionStatsPercentiles(): Promise<unknown> {
  return post('/lol-career-stats/v1/champion-stats-percentiles')
}

/**
 * GetLolCareerStatsV1PositionAveragesSeasonBySeasonByPositionByTierByQueue
 * @url GET /lol-career-stats/v1/position-averages/season/{season}/{position}/{tier}/{queue}
 * @param params - 路径参数: { season, position, tier, queue }
 */
export function getLolCareerStatsV1PositionAveragesSeasonBySeasonByPositionByTierByQueue(params: { season: string | number, position: string | number, tier: string | number, queue: string | number }): Promise<unknown> {
  const { season, position, tier, queue } = params

  return get(`/lol-career-stats/v1/position-averages/season/${season}/${position}/${tier}/${queue}`)
}

/**
 * GetLolCareerStatsV1PositionAveragesByPositionByTierByQueue
 * @url GET /lol-career-stats/v1/position-averages/{position}/{tier}/{queue}
 * @param params - 路径参数: { position, tier, queue }
 */
export function getLolCareerStatsV1PositionAveragesByPositionByTierByQueue(params: { position: string | number, tier: string | number, queue: string | number }): Promise<unknown> {
  const { position, tier, queue } = params

  return get(`/lol-career-stats/v1/position-averages/${position}/${tier}/${queue}`)
}

/**
 * GetLolCareerStatsV1PositionExpertsSeasonBySeasonByPosition
 * @url GET /lol-career-stats/v1/position-experts/season/{season}/{position}
 * @param params - 路径参数: { season, position }
 */
export function getLolCareerStatsV1PositionExpertsSeasonBySeasonByPosition(params: { season: string | number, position: string | number }): Promise<unknown> {
  const { season, position } = params

  return get(`/lol-career-stats/v1/position-experts/season/${season}/${position}`)
}

/**
 * GetLolCareerStatsV1PositionExpertsByPosition
 * @url GET /lol-career-stats/v1/position-experts/{position}
 * @param params - 路径参数: { position }
 */
export function getLolCareerStatsV1PositionExpertsByPosition(params: { position: string | number }): Promise<unknown> {
  const { position } = params

  return get(`/lol-career-stats/v1/position-experts/${position}`)
}

/**
 * PostLolCareerStatsV1PositionStatsPercentiles
 * @url POST /lol-career-stats/v1/position-stats-percentiles
 */
export function postLolCareerStatsV1PositionStatsPercentiles(): Promise<unknown> {
  return post('/lol-career-stats/v1/position-stats-percentiles')
}

/**
 * GetLolCareerStatsV1SummonerGamesByPuuid
 * @url GET /lol-career-stats/v1/summoner-games/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolCareerStatsV1SummonerGamesByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-career-stats/v1/summoner-games/${puuid}`)
}

/**
 * GetLolCareerStatsV1SummonerGamesByPuuidSeasonBySeason
 * @url GET /lol-career-stats/v1/summoner-games/{puuid}/season/{season}
 * @param params - 路径参数: { puuid, season }
 */
export function getLolCareerStatsV1SummonerGamesByPuuidSeasonBySeason(params: { puuid: string | number, season: string | number }): Promise<unknown> {
  const { puuid, season } = params

  return get(`/lol-career-stats/v1/summoner-games/${puuid}/season/${season}`)
}

/**
 * GetLolCareerStatsV1SummonerStatsByPuuidBySeasonByQueueByPosition
 * @url GET /lol-career-stats/v1/summoner-stats/{puuid}/{season}/{queue}/{position}
 * @param params - 路径参数: { puuid, season, queue, position }
 * @param query - 查询参数: { championId }
 */
export function getLolCareerStatsV1SummonerStatsByPuuidBySeasonByQueueByPosition(params: { puuid: string | number, season: string | number, queue: string | number, position: string | number }, query: { championId?: number }): Promise<unknown> {
  const { puuid, season, queue, position } = params

  return get(`/lol-career-stats/v1/summoner-stats/${puuid}/${season}/${queue}/${position}`, query)
}
