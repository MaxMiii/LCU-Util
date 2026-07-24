/**
 * Banners API 模块 (自动生成)
 * 5 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolBannersV1CurrentSummonerFlags
 * @url GET /lol-banners/v1/current-summoner/flags
 */
export function getLolBannersV1CurrentSummonerFlags(): Promise<unknown> {
  return get('/lol-banners/v1/current-summoner/flags')
}

/**
 * GetLolBannersV1CurrentSummonerFlagsEquipped
 * @url GET /lol-banners/v1/current-summoner/flags/equipped
 */
export function getLolBannersV1CurrentSummonerFlagsEquipped(): Promise<unknown> {
  return get('/lol-banners/v1/current-summoner/flags/equipped')
}

/**
 * PutLolBannersV1CurrentSummonerFlagsEquipped
 * @url PUT /lol-banners/v1/current-summoner/flags/equipped
 */
export function putLolBannersV1CurrentSummonerFlagsEquipped(): Promise<unknown> {
  return put('/lol-banners/v1/current-summoner/flags/equipped')
}

/**
 * GetLolBannersV1CurrentSummonerFramesEquipped
 * @url GET /lol-banners/v1/current-summoner/frames/equipped
 */
export function getLolBannersV1CurrentSummonerFramesEquipped(): Promise<unknown> {
  return get('/lol-banners/v1/current-summoner/frames/equipped')
}

/**
 * GetLolBannersV1PlayersByPuuidFlagsEquipped
 * @url GET /lol-banners/v1/players/{puuid}/flags/equipped
 * @param params - 路径参数: { puuid }
 */
export function getLolBannersV1PlayersByPuuidFlagsEquipped(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-banners/v1/players/${puuid}/flags/equipped`)
}
