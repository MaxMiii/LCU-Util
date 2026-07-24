/**
 * Matchhistory API 模块 (自动生成)
 * 10 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * PostLolMatchHistoryV1AcsEndpointOverride
 * @url POST /lol-match-history/v1/acs-endpoint-override
 */
export function postLolMatchHistoryV1AcsEndpointOverride(): Promise<unknown> {
  return post('/lol-match-history/v1/acs-endpoint-override')
}

/**
 * GetLolMatchHistoryV1Delta
 * @url GET /lol-match-history/v1/delta
 */
export function getLolMatchHistoryV1Delta(): Promise<unknown> {
  return get('/lol-match-history/v1/delta')
}

/**
 * GetLolMatchHistoryV1GameTimelinesByGameId
 * @url GET /lol-match-history/v1/game-timelines/{gameId}
 * @param params - 路径参数: { gameId }
 */
export function getLolMatchHistoryV1GameTimelinesByGameId(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return get(`/lol-match-history/v1/game-timelines/${gameId}`)
}

/**
 * GetLolMatchHistoryV1GamesByGameId
 * @url GET /lol-match-history/v1/games/{gameId}
 * @param params - 路径参数: { gameId }
 */
export function getLolMatchHistoryV1GamesByGameId(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return get(`/lol-match-history/v1/games/${gameId}`)
}

/**
 * GetLolMatchHistoryV1ProductsLolCurrentSummonerMatches
 * @url GET /lol-match-history/v1/products/lol/current-summoner/matches
 * @param query - 查询参数: { begIndex, endIndex }
 */
export function getLolMatchHistoryV1ProductsLolCurrentSummonerMatches(query: { begIndex?: number; endIndex?: number }): Promise<unknown> {
  return get('/lol-match-history/v1/products/lol/current-summoner/matches', query)
}

/**
 * GetLolMatchHistoryV1ProductsLolByPuuidMatches
 * @url GET /lol-match-history/v1/products/lol/{puuid}/matches
 * @param params - 路径参数: { puuid }
 * @param query - 查询参数: { begIndex, endIndex }
 */
export function getLolMatchHistoryV1ProductsLolByPuuidMatches(params: { puuid: string | number }, query: { begIndex?: number; endIndex?: number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-match-history/v1/products/lol/${puuid}/matches`, query)
}

/**
 * GetLolMatchHistoryV1ProductsTftByPuuidMatches
 * @url GET /lol-match-history/v1/products/tft/{puuid}/matches
 * @param params - 路径参数: { puuid }
 * @param query - 查询参数: { begin, count, tag }
 */
export function getLolMatchHistoryV1ProductsTftByPuuidMatches(params: { puuid: string | number }, query: { begin?: number; count?: number; tag?: string }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-match-history/v1/products/tft/${puuid}/matches`, query)
}

/**
 * GetLolMatchHistoryV1RecentlyPlayedSummoners
 * @url GET /lol-match-history/v1/recently-played-summoners
 */
export function getLolMatchHistoryV1RecentlyPlayedSummoners(): Promise<unknown> {
  return get('/lol-match-history/v1/recently-played-summoners')
}

/**
 * GetLolMatchHistoryV1WebUrl
 * @url GET /lol-match-history/v1/web-url
 */
export function getLolMatchHistoryV1WebUrl(): Promise<unknown> {
  return get('/lol-match-history/v1/web-url')
}

/**
 * GetLolMatchHistoryV3MatchlistAccountByAccountId
 * @url GET /lol-match-history/v3/matchlist/account/{accountId}
 * @param params - 路径参数: { accountId }
 * @param query - 查询参数: { begIndex, endIndex }
 */
export function getLolMatchHistoryV3MatchlistAccountByAccountId(params: { accountId: string | number }, query: { begIndex?: number; endIndex?: number }): Promise<unknown> {
  const { accountId } = params

  return get(`/lol-match-history/v3/matchlist/account/${accountId}`, query)
}
