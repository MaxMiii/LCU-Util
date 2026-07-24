/**
 * Cosmetics API 模块 (自动生成)
 * 10 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolCosmeticsV1InventoriesBySetNameCompanions
 * @url GET /lol-cosmetics/v1/inventories/{setName}/companions
 * @param params - 路径参数: { setName }
 */
export function getLolCosmeticsV1InventoriesBySetNameCompanions(params: { setName: string | number }): Promise<unknown> {
  const { setName } = params

  return get(`/lol-cosmetics/v1/inventories/${setName}/companions`)
}

/**
 * GetLolCosmeticsV1InventoriesBySetNameDamageSkins
 * @url GET /lol-cosmetics/v1/inventories/{setName}/damage-skins
 * @param params - 路径参数: { setName }
 */
export function getLolCosmeticsV1InventoriesBySetNameDamageSkins(params: { setName: string | number }): Promise<unknown> {
  const { setName } = params

  return get(`/lol-cosmetics/v1/inventories/${setName}/damage-skins`)
}

/**
 * GetLolCosmeticsV1InventoriesBySetNameMapSkins
 * @url GET /lol-cosmetics/v1/inventories/{setName}/map-skins
 * @param params - 路径参数: { setName }
 */
export function getLolCosmeticsV1InventoriesBySetNameMapSkins(params: { setName: string | number }): Promise<unknown> {
  const { setName } = params

  return get(`/lol-cosmetics/v1/inventories/${setName}/map-skins`)
}

/**
 * PatchLolCosmeticsV1RecentByType
 * @url PATCH /lol-cosmetics/v1/recent/{type}
 * @param params - 路径参数: { type }
 */
export function patchLolCosmeticsV1RecentByType(params: { type: string | number }): Promise<unknown> {
  const { type } = params

  return patch(`/lol-cosmetics/v1/recent/${type}`)
}

/**
 * DeleteLolCosmeticsV1SelectionCompanion
 * @url DELETE /lol-cosmetics/v1/selection/companion
 */
export function deleteLolCosmeticsV1SelectionCompanion(): Promise<unknown> {
  return del('/lol-cosmetics/v1/selection/companion')
}

/**
 * PutLolCosmeticsV1SelectionCompanion
 * @url PUT /lol-cosmetics/v1/selection/companion
 */
export function putLolCosmeticsV1SelectionCompanion(): Promise<unknown> {
  return put('/lol-cosmetics/v1/selection/companion')
}

/**
 * DeleteLolCosmeticsV1SelectionTftDamageSkin
 * @url DELETE /lol-cosmetics/v1/selection/tft-damage-skin
 */
export function deleteLolCosmeticsV1SelectionTftDamageSkin(): Promise<unknown> {
  return del('/lol-cosmetics/v1/selection/tft-damage-skin')
}

/**
 * PutLolCosmeticsV1SelectionTftDamageSkin
 * @url PUT /lol-cosmetics/v1/selection/tft-damage-skin
 */
export function putLolCosmeticsV1SelectionTftDamageSkin(): Promise<unknown> {
  return put('/lol-cosmetics/v1/selection/tft-damage-skin')
}

/**
 * DeleteLolCosmeticsV1SelectionTftMapSkin
 * @url DELETE /lol-cosmetics/v1/selection/tft-map-skin
 */
export function deleteLolCosmeticsV1SelectionTftMapSkin(): Promise<unknown> {
  return del('/lol-cosmetics/v1/selection/tft-map-skin')
}

/**
 * PutLolCosmeticsV1SelectionTftMapSkin
 * @url PUT /lol-cosmetics/v1/selection/tft-map-skin
 */
export function putLolCosmeticsV1SelectionTftMapSkin(): Promise<unknown> {
  return put('/lol-cosmetics/v1/selection/tft-map-skin')
}
