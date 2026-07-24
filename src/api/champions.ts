/**
 * Champions API 模块 (自动生成)
 * 9 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolChampionsV1InventoriesBySummonerIdChampions
 * @url GET /lol-champions/v1/inventories/{summonerId}/champions
 * @param params - 路径参数: { summonerId }
 */
export function getLolChampionsV1InventoriesBySummonerIdChampions(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-champions/v1/inventories/${summonerId}/champions`)
}

/**
 * GetLolChampionsV1InventoriesBySummonerIdChampionsMinimal
 * @url GET /lol-champions/v1/inventories/{summonerId}/champions-minimal
 * @param params - 路径参数: { summonerId }
 */
export function getLolChampionsV1InventoriesBySummonerIdChampionsMinimal(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-champions/v1/inventories/${summonerId}/champions-minimal`)
}

/**
 * GetLolChampionsV1InventoriesBySummonerIdChampionsPlayableCount
 * @url GET /lol-champions/v1/inventories/{summonerId}/champions-playable-count
 * @param params - 路径参数: { summonerId }
 */
export function getLolChampionsV1InventoriesBySummonerIdChampionsPlayableCount(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-champions/v1/inventories/${summonerId}/champions-playable-count`)
}

/**
 * GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionId
 * @url GET /lol-champions/v1/inventories/{summonerId}/champions/{championId}
 * @param params - 路径参数: { summonerId, championId }
 */
export function getLolChampionsV1InventoriesBySummonerIdChampionsByChampionId(params: { summonerId: string | number, championId: string | number }): Promise<unknown> {
  const { summonerId, championId } = params

  return get(`/lol-champions/v1/inventories/${summonerId}/champions/${championId}`)
}

/**
 * GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkins
 * @url GET /lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins
 * @param params - 路径参数: { summonerId, championId }
 */
export function getLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkins(params: { summonerId: string | number, championId: string | number }): Promise<unknown> {
  const { summonerId, championId } = params

  return get(`/lol-champions/v1/inventories/${summonerId}/champions/${championId}/skins`)
}

/**
 * GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsByChampionSkinId
 * @url GET /lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{championSkinId}
 * @param params - 路径参数: { summonerId, championId, championSkinId }
 */
export function getLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsByChampionSkinId(params: { summonerId: string | number, championId: string | number, championSkinId: string | number }): Promise<unknown> {
  const { summonerId, championId, championSkinId } = params

  return get(`/lol-champions/v1/inventories/${summonerId}/champions/${championId}/skins/${championSkinId}`)
}

/**
 * GetLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsBySkinIdChromas
 * @url GET /lol-champions/v1/inventories/{summonerId}/champions/{championId}/skins/{skinId}/chromas
 * @param params - 路径参数: { summonerId, championId, skinId }
 */
export function getLolChampionsV1InventoriesBySummonerIdChampionsByChampionIdSkinsBySkinIdChromas(params: { summonerId: string | number, championId: string | number, skinId: string | number }): Promise<unknown> {
  const { summonerId, championId, skinId } = params

  return get(`/lol-champions/v1/inventories/${summonerId}/champions/${championId}/skins/${skinId}/chromas`)
}

/**
 * GetLolChampionsV1InventoriesBySummonerIdSkinsMinimal
 * @url GET /lol-champions/v1/inventories/{summonerId}/skins-minimal
 * @param params - 路径参数: { summonerId }
 */
export function getLolChampionsV1InventoriesBySummonerIdSkinsMinimal(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-champions/v1/inventories/${summonerId}/skins-minimal`)
}

/**
 * GetLolChampionsV1OwnedChampionsMinimal
 * @url GET /lol-champions/v1/owned-champions-minimal
 */
export function getLolChampionsV1OwnedChampionsMinimal(): Promise<unknown> {
  return get('/lol-champions/v1/owned-champions-minimal')
}
