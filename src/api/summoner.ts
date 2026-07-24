/**
 * Summoner API 模块 (自动生成)
 * 27 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolSummonerV1CheckNameAvailabilityNewSummonersByName
 * @url GET /lol-summoner/v1/check-name-availability-new-summoners/{name}
 * @param params - 路径参数: { name }
 */
export function getLolSummonerV1CheckNameAvailabilityNewSummonersByName(params: { name: string | number }): Promise<unknown> {
  const { name } = params

  return get(`/lol-summoner/v1/check-name-availability-new-summoners/${name}`)
}

/**
 * GetLolSummonerV1CheckNameAvailabilityByName
 * @url GET /lol-summoner/v1/check-name-availability/{name}
 * @param params - 路径参数: { name }
 */
export function getLolSummonerV1CheckNameAvailabilityByName(params: { name: string | number }): Promise<unknown> {
  const { name } = params

  return get(`/lol-summoner/v1/check-name-availability/${name}`)
}

/**
 * GetLolSummonerV1CurrentSummoner
 * @url GET /lol-summoner/v1/current-summoner
 */
export function getLolSummonerV1CurrentSummoner(): Promise<unknown> {
  return get('/lol-summoner/v1/current-summoner')
}

/**
 * GetLolSummonerV1CurrentSummonerAccountAndSummonerIds
 * @url GET /lol-summoner/v1/current-summoner/account-and-summoner-ids
 */
export function getLolSummonerV1CurrentSummonerAccountAndSummonerIds(): Promise<unknown> {
  return get('/lol-summoner/v1/current-summoner/account-and-summoner-ids')
}

/**
 * GetLolSummonerV1CurrentSummonerAutofill
 * @url GET /lol-summoner/v1/current-summoner/autofill
 */
export function getLolSummonerV1CurrentSummonerAutofill(): Promise<unknown> {
  return get('/lol-summoner/v1/current-summoner/autofill')
}

/**
 * PutLolSummonerV1CurrentSummonerIcon
 * @url PUT /lol-summoner/v1/current-summoner/icon
 */
export function putLolSummonerV1CurrentSummonerIcon(): Promise<unknown> {
  return put('/lol-summoner/v1/current-summoner/icon')
}

/**
 * GetLolSummonerV1CurrentSummonerJwt
 * @url GET /lol-summoner/v1/current-summoner/jwt
 */
export function getLolSummonerV1CurrentSummonerJwt(): Promise<unknown> {
  return get('/lol-summoner/v1/current-summoner/jwt')
}

/**
 * PostLolSummonerV1CurrentSummonerName
 * @url POST /lol-summoner/v1/current-summoner/name
 */
export function postLolSummonerV1CurrentSummonerName(): Promise<unknown> {
  return post('/lol-summoner/v1/current-summoner/name')
}

/**
 * GetLolSummonerV1CurrentSummonerProfilePrivacy
 * @url GET /lol-summoner/v1/current-summoner/profile-privacy
 */
export function getLolSummonerV1CurrentSummonerProfilePrivacy(): Promise<unknown> {
  return get('/lol-summoner/v1/current-summoner/profile-privacy')
}

/**
 * PutLolSummonerV1CurrentSummonerProfilePrivacy
 * @url PUT /lol-summoner/v1/current-summoner/profile-privacy
 */
export function putLolSummonerV1CurrentSummonerProfilePrivacy(): Promise<unknown> {
  return put('/lol-summoner/v1/current-summoner/profile-privacy')
}

/**
 * GetLolSummonerV1CurrentSummonerRerollPoints
 * @url GET /lol-summoner/v1/current-summoner/rerollPoints
 */
export function getLolSummonerV1CurrentSummonerRerollPoints(): Promise<unknown> {
  return get('/lol-summoner/v1/current-summoner/rerollPoints')
}

/**
 * GetLolSummonerV1CurrentSummonerSummonerProfile
 * @url GET /lol-summoner/v1/current-summoner/summoner-profile
 */
export function getLolSummonerV1CurrentSummonerSummonerProfile(): Promise<unknown> {
  return get('/lol-summoner/v1/current-summoner/summoner-profile')
}

/**
 * PostLolSummonerV1CurrentSummonerSummonerProfile
 * @url POST /lol-summoner/v1/current-summoner/summoner-profile
 */
export function postLolSummonerV1CurrentSummonerSummonerProfile(): Promise<unknown> {
  return post('/lol-summoner/v1/current-summoner/summoner-profile')
}

/**
 * GetLolSummonerV1ProfilePrivacyEnabled
 * @url GET /lol-summoner/v1/profile-privacy-enabled
 */
export function getLolSummonerV1ProfilePrivacyEnabled(): Promise<unknown> {
  return get('/lol-summoner/v1/profile-privacy-enabled')
}

/**
 * GetLolSummonerV1Status
 * @url GET /lol-summoner/v1/status
 */
export function getLolSummonerV1Status(): Promise<unknown> {
  return get('/lol-summoner/v1/status')
}

/**
 * GetLolSummonerV1SummonerProfile
 * @url GET /lol-summoner/v1/summoner-profile
 * @param query - 查询参数: { puuid }
 */
export function getLolSummonerV1SummonerProfile(query: { puuid: string }): Promise<unknown> {
  return get('/lol-summoner/v1/summoner-profile', query)
}

/**
 * GetLolSummonerV1SummonerRequestsReady
 * @url GET /lol-summoner/v1/summoner-requests-ready
 */
export function getLolSummonerV1SummonerRequestsReady(): Promise<unknown> {
  return get('/lol-summoner/v1/summoner-requests-ready')
}

/**
 * GetLolSummonerV1Summoners
 * @url GET /lol-summoner/v1/summoners
 * @param query - 查询参数: { name }
 */
export function getLolSummonerV1Summoners(query: { name: string }): Promise<unknown> {
  return get('/lol-summoner/v1/summoners', query)
}

/**
 * PostLolSummonerV1Summoners
 * @url POST /lol-summoner/v1/summoners
 */
export function postLolSummonerV1Summoners(): Promise<unknown> {
  return post('/lol-summoner/v1/summoners')
}

/**
 * GetLolSummonerV1SummonersByPuuidCachedByPuuid
 * @url GET /lol-summoner/v1/summoners-by-puuid-cached/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolSummonerV1SummonersByPuuidCachedByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-summoner/v1/summoners-by-puuid-cached/${puuid}`)
}

/**
 * GetLolSummonerV1SummonersById
 * @url GET /lol-summoner/v1/summoners/{id}
 * @param params - 路径参数: { id }
 */
export function getLolSummonerV1SummonersById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-summoner/v1/summoners/${id}`)
}

/**
 * GetLolSummonerV2SummonerIcons
 * @url GET /lol-summoner/v2/summoner-icons
 * @param query - 查询参数: { ids }
 */
export function getLolSummonerV2SummonerIcons(query: { ids: number[] }): Promise<unknown> {
  return get('/lol-summoner/v2/summoner-icons', query)
}

/**
 * GetLolSummonerV2SummonerNames
 * @url GET /lol-summoner/v2/summoner-names
 * @param query - 查询参数: { ids }
 */
export function getLolSummonerV2SummonerNames(query: { ids: number[] }): Promise<unknown> {
  return get('/lol-summoner/v2/summoner-names', query)
}

/**
 * GetLolSummonerV2Summoners
 * @url GET /lol-summoner/v2/summoners
 * @param query - 查询参数: { ids }
 */
export function getLolSummonerV2Summoners(query: { ids?: number[] }): Promise<unknown> {
  return get('/lol-summoner/v2/summoners', query)
}

/**
 * PostLolSummonerV2SummonersNames
 * @url POST /lol-summoner/v2/summoners/names
 */
export function postLolSummonerV2SummonersNames(): Promise<unknown> {
  return post('/lol-summoner/v2/summoners/names')
}

/**
 * PostLolSummonerV2SummonersPuuid
 * @url POST /lol-summoner/v2/summoners/puuid
 */
export function postLolSummonerV2SummonersPuuid(): Promise<unknown> {
  return post('/lol-summoner/v2/summoners/puuid')
}

/**
 * GetLolSummonerV2SummonersPuuidByPuuid
 * @url GET /lol-summoner/v2/summoners/puuid/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolSummonerV2SummonersPuuidByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-summoner/v2/summoners/puuid/${puuid}`)
}
