/**
 * Collections API 模块 (自动生成)
 * 10 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolCollectionsV1InventoriesChestEligibility
 * @url GET /lol-collections/v1/inventories/chest-eligibility
 */
export function getLolCollectionsV1InventoriesChestEligibility(): Promise<unknown> {
  return get('/lol-collections/v1/inventories/chest-eligibility')
}

/**
 * GetLolCollectionsV1InventoriesLocalPlayerChampionMasteryScore
 * @url GET /lol-collections/v1/inventories/local-player/champion-mastery-score
 */
export function getLolCollectionsV1InventoriesLocalPlayerChampionMasteryScore(): Promise<unknown> {
  return get('/lol-collections/v1/inventories/local-player/champion-mastery-score')
}

/**
 * GetLolCollectionsV1InventoriesScouting
 * @url GET /lol-collections/v1/inventories/scouting
 */
export function getLolCollectionsV1InventoriesScouting(): Promise<unknown> {
  return get('/lol-collections/v1/inventories/scouting')
}

/**
 * GetLolCollectionsV1InventoriesBySummonerIdBackdrop
 * @url GET /lol-collections/v1/inventories/{summonerId}/backdrop
 * @param params - 路径参数: { summonerId }
 */
export function getLolCollectionsV1InventoriesBySummonerIdBackdrop(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-collections/v1/inventories/${summonerId}/backdrop`)
}

/**
 * GetLolCollectionsV1InventoriesBySummonerIdChampionMastery
 * @url GET /lol-collections/v1/inventories/{summonerId}/champion-mastery
 * @param params - 路径参数: { summonerId }
 */
export function getLolCollectionsV1InventoriesBySummonerIdChampionMastery(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-collections/v1/inventories/${summonerId}/champion-mastery`)
}

/**
 * GetLolCollectionsV1InventoriesBySummonerIdChampionMasteryTop
 * @url GET /lol-collections/v1/inventories/{summonerId}/champion-mastery/top
 * @param params - 路径参数: { summonerId }
 * @param query - 查询参数: { limit, sortRule }
 */
export function getLolCollectionsV1InventoriesBySummonerIdChampionMasteryTop(params: { summonerId: string | number }, query: { limit: number; sortRule?: string }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-collections/v1/inventories/${summonerId}/champion-mastery/top`, query)
}

/**
 * GetLolCollectionsV1InventoriesBySummonerIdSpells
 * @url GET /lol-collections/v1/inventories/{summonerId}/spells
 * @param params - 路径参数: { summonerId }
 */
export function getLolCollectionsV1InventoriesBySummonerIdSpells(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-collections/v1/inventories/${summonerId}/spells`)
}

/**
 * PutLolCollectionsV1InventoriesBySummonerIdVerification
 * @url PUT /lol-collections/v1/inventories/{summonerId}/verification
 * @param params - 路径参数: { summonerId }
 */
export function putLolCollectionsV1InventoriesBySummonerIdVerification(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return put(`/lol-collections/v1/inventories/${summonerId}/verification`)
}

/**
 * GetLolCollectionsV1InventoriesBySummonerIdWardSkins
 * @url GET /lol-collections/v1/inventories/{summonerId}/ward-skins
 * @param params - 路径参数: { summonerId }
 */
export function getLolCollectionsV1InventoriesBySummonerIdWardSkins(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-collections/v1/inventories/${summonerId}/ward-skins`)
}

/**
 * GetLolCollectionsV1InventoriesBySummonerIdWardSkinsByWardSkinId
 * @url GET /lol-collections/v1/inventories/{summonerId}/ward-skins/{wardSkinId}
 * @param params - 路径参数: { summonerId, wardSkinId }
 */
export function getLolCollectionsV1InventoriesBySummonerIdWardSkinsByWardSkinId(params: { summonerId: string | number, wardSkinId: string | number }): Promise<unknown> {
  const { summonerId, wardSkinId } = params

  return get(`/lol-collections/v1/inventories/${summonerId}/ward-skins/${wardSkinId}`)
}
