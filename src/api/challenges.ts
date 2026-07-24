/**
 * Challenges API 模块 (自动生成)
 * 12 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolChallengesV1AvailableQueueIds
 * @url GET /lol-challenges/v1/available-queue-ids
 */
export function getLolChallengesV1AvailableQueueIds(): Promise<unknown> {
  return get('/lol-challenges/v1/available-queue-ids')
}

/**
 * GetLolChallengesV1ChallengesByProductLocalPlayer
 * @url GET /lol-challenges/v1/challenges/{product}/local-player
 * @param params - 路径参数: { product }
 */
export function getLolChallengesV1ChallengesByProductLocalPlayer(params: { product: string | number }): Promise<unknown> {
  const { product } = params

  return get(`/lol-challenges/v1/challenges/${product}/local-player`)
}

/**
 * GetLolChallengesV1LevelPoints
 * @url GET /lol-challenges/v1/level-points
 */
export function getLolChallengesV1LevelPoints(): Promise<unknown> {
  return get('/lol-challenges/v1/level-points')
}

/**
 * GetLolChallengesV1MyUpdatedChallengesByGameId
 * @url GET /lol-challenges/v1/my-updated-challenges/{gameId}
 * @param params - 路径参数: { gameId }
 */
export function getLolChallengesV1MyUpdatedChallengesByGameId(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return get(`/lol-challenges/v1/my-updated-challenges/${gameId}`)
}

/**
 * PostLolChallengesV1ProcessGameByProductByGameId
 * @url POST /lol-challenges/v1/processGame/{product}/{gameId}
 * @param params - 路径参数: { product, gameId }
 */
export function postLolChallengesV1ProcessGameByProductByGameId(params: { product: string | number, gameId: string | number }): Promise<unknown> {
  const { product, gameId } = params

  return post(`/lol-challenges/v1/processGame/${product}/${gameId}`)
}

/**
 * GetLolChallengesV1SuggestedChallengesByProductLocalPlayer
 * @url GET /lol-challenges/v1/suggested-challenges/{product}/local-player
 * @param params - 路径参数: { product }
 */
export function getLolChallengesV1SuggestedChallengesByProductLocalPlayer(params: { product: string | number }): Promise<unknown> {
  const { product } = params

  return get(`/lol-challenges/v1/suggested-challenges/${product}/local-player`)
}

/**
 * GetLolChallengesV1SummaryPlayerDataByProductLocalPlayer
 * @url GET /lol-challenges/v1/summary-player-data/{product}/local-player
 * @param params - 路径参数: { product }
 */
export function getLolChallengesV1SummaryPlayerDataByProductLocalPlayer(params: { product: string | number }): Promise<unknown> {
  const { product } = params

  return get(`/lol-challenges/v1/summary-player-data/${product}/local-player`)
}

/**
 * GetLolChallengesV1SummaryPlayerDataByProductPlayerByPuuid
 * @url GET /lol-challenges/v1/summary-player-data/{product}/player/{puuid}
 * @param params - 路径参数: { product, puuid }
 */
export function getLolChallengesV1SummaryPlayerDataByProductPlayerByPuuid(params: { product: string | number, puuid: string | number }): Promise<unknown> {
  const { product, puuid } = params

  return get(`/lol-challenges/v1/summary-player-data/${product}/player/${puuid}`)
}

/**
 * GetLolChallengesV1SummaryPlayersDataByProductPlayers
 * @url GET /lol-challenges/v1/summary-players-data/{product}/players
 * @param params - 路径参数: { product }
 * @param query - 查询参数: { puuids }
 */
export function getLolChallengesV1SummaryPlayersDataByProductPlayers(params: { product: string | number }, query: { puuids: string[] }): Promise<unknown> {
  const { product } = params

  return get(`/lol-challenges/v1/summary-players-data/${product}/players`, query)
}

/**
 * GetLolChallengesV1TitlesLocalPlayer
 * @url GET /lol-challenges/v1/titles/local-player
 */
export function getLolChallengesV1TitlesLocalPlayer(): Promise<unknown> {
  return get('/lol-challenges/v1/titles/local-player')
}

/**
 * PostLolChallengesV1UpdatePlayerPreferencesByProduct
 * @url POST /lol-challenges/v1/update-player-preferences/{product}
 * @param params - 路径参数: { product }
 */
export function postLolChallengesV1UpdatePlayerPreferencesByProduct(params: { product: string | number }): Promise<unknown> {
  const { product } = params

  return post(`/lol-challenges/v1/update-player-preferences/${product}`)
}

/**
 * GetLolChallengesV1UpdatedChallengeByGameIdByPuuid
 * @url GET /lol-challenges/v1/updated-challenge/{gameId}/{puuid}
 * @param params - 路径参数: { gameId, puuid }
 */
export function getLolChallengesV1UpdatedChallengeByGameIdByPuuid(params: { gameId: string | number, puuid: string | number }): Promise<unknown> {
  const { gameId, puuid } = params

  return get(`/lol-challenges/v1/updated-challenge/${gameId}/${puuid}`)
}
