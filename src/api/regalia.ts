/**
 * Regalia API 模块 (自动生成)
 * 7 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolRegaliaV2Config
 * @url GET /lol-regalia/v2/config
 */
export function getLolRegaliaV2Config(): Promise<unknown> {
  return get('/lol-regalia/v2/config')
}

/**
 * GetLolRegaliaV2CurrentSummonerRegalia
 * @url GET /lol-regalia/v2/current-summoner/regalia
 */
export function getLolRegaliaV2CurrentSummonerRegalia(): Promise<unknown> {
  return get('/lol-regalia/v2/current-summoner/regalia')
}

/**
 * PutLolRegaliaV2CurrentSummonerRegalia
 * @url PUT /lol-regalia/v2/current-summoner/regalia
 */
export function putLolRegaliaV2CurrentSummonerRegalia(): Promise<unknown> {
  return put('/lol-regalia/v2/current-summoner/regalia')
}

/**
 * GetLolRegaliaV2SummonersBySummonerIdQueuesByQueuePositionsByPositionRegalia
 * @url GET /lol-regalia/v2/summoners/{summonerId}/queues/{queue}/positions/{position}/regalia
 * @param params - 路径参数: { summonerId, queue, position }
 */
export function getLolRegaliaV2SummonersBySummonerIdQueuesByQueuePositionsByPositionRegalia(params: { summonerId: string | number, queue: string | number, position: string | number }): Promise<unknown> {
  const { summonerId, queue, position } = params

  return get(`/lol-regalia/v2/summoners/${summonerId}/queues/${queue}/positions/${position}/regalia`)
}

/**
 * GetLolRegaliaV2SummonersBySummonerIdQueuesByQueueRegalia
 * @url GET /lol-regalia/v2/summoners/{summonerId}/queues/{queue}/regalia
 * @param params - 路径参数: { summonerId, queue }
 */
export function getLolRegaliaV2SummonersBySummonerIdQueuesByQueueRegalia(params: { summonerId: string | number, queue: string | number }): Promise<unknown> {
  const { summonerId, queue } = params

  return get(`/lol-regalia/v2/summoners/${summonerId}/queues/${queue}/regalia`)
}

/**
 * GetLolRegaliaV2SummonersBySummonerIdRegalia
 * @url GET /lol-regalia/v2/summoners/{summonerId}/regalia
 * @param params - 路径参数: { summonerId }
 * @param query - 查询参数: { hovercard }
 */
export function getLolRegaliaV2SummonersBySummonerIdRegalia(params: { summonerId: string | number }, query: { hovercard: boolean }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-regalia/v2/summoners/${summonerId}/regalia`, query)
}

/**
 * GetLolRegaliaV2SummonersBySummonerIdRegaliaAsync
 * @url GET /lol-regalia/v2/summoners/{summonerId}/regalia/async
 * @param params - 路径参数: { summonerId }
 */
export function getLolRegaliaV2SummonersBySummonerIdRegaliaAsync(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-regalia/v2/summoners/${summonerId}/regalia/async`)
}
