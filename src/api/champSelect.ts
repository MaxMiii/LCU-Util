/**
 * Champselect API 模块 (自动生成)
 * 35 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolChampSelectV1AllGridChampions
 * @url GET /lol-champ-select/v1/all-grid-champions
 */
export function getLolChampSelectV1AllGridChampions(): Promise<unknown> {
  return get('/lol-champ-select/v1/all-grid-champions')
}

/**
 * GetLolChampSelectV1BannableChampionIds
 * @url GET /lol-champ-select/v1/bannable-champion-ids
 */
export function getLolChampSelectV1BannableChampionIds(): Promise<unknown> {
  return get('/lol-champ-select/v1/bannable-champion-ids')
}

/**
 * PostLolChampSelectV1BattleTrainingLaunch
 * @url POST /lol-champ-select/v1/battle-training/launch
 */
export function postLolChampSelectV1BattleTrainingLaunch(): Promise<unknown> {
  return post('/lol-champ-select/v1/battle-training/launch')
}

/**
 * GetLolChampSelectV1CurrentChampion
 * @url GET /lol-champ-select/v1/current-champion
 */
export function getLolChampSelectV1CurrentChampion(): Promise<unknown> {
  return get('/lol-champ-select/v1/current-champion')
}

/**
 * GetLolChampSelectV1DisabledChampionIds
 * @url GET /lol-champ-select/v1/disabled-champion-ids
 */
export function getLolChampSelectV1DisabledChampionIds(): Promise<unknown> {
  return get('/lol-champ-select/v1/disabled-champion-ids')
}

/**
 * GetLolChampSelectV1GridChampionsByChampionId
 * @url GET /lol-champ-select/v1/grid-champions/{championId}
 * @param params - 路径参数: { championId }
 */
export function getLolChampSelectV1GridChampionsByChampionId(params: { championId: string | number }): Promise<unknown> {
  const { championId } = params

  return get(`/lol-champ-select/v1/grid-champions/${championId}`)
}

/**
 * GetLolChampSelectV1MutedPlayers
 * @url GET /lol-champ-select/v1/muted-players
 */
export function getLolChampSelectV1MutedPlayers(): Promise<unknown> {
  return get('/lol-champ-select/v1/muted-players')
}

/**
 * GetLolChampSelectV1OngoingTrade
 * @url GET /lol-champ-select/v1/ongoing-trade
 */
export function getLolChampSelectV1OngoingTrade(): Promise<unknown> {
  return get('/lol-champ-select/v1/ongoing-trade')
}

/**
 * PostLolChampSelectV1OngoingTradeByIdClear
 * @url POST /lol-champ-select/v1/ongoing-trade/{id}/clear
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectV1OngoingTradeByIdClear(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select/v1/ongoing-trade/${id}/clear`)
}

/**
 * GetLolChampSelectV1PickableChampionIds
 * @url GET /lol-champ-select/v1/pickable-champion-ids
 */
export function getLolChampSelectV1PickableChampionIds(): Promise<unknown> {
  return get('/lol-champ-select/v1/pickable-champion-ids')
}

/**
 * GetLolChampSelectV1PickableSkinIds
 * @url GET /lol-champ-select/v1/pickable-skin-ids
 */
export function getLolChampSelectV1PickableSkinIds(): Promise<unknown> {
  return get('/lol-champ-select/v1/pickable-skin-ids')
}

/**
 * GetLolChampSelectV1PinDropNotification
 * @url GET /lol-champ-select/v1/pin-drop-notification
 */
export function getLolChampSelectV1PinDropNotification(): Promise<unknown> {
  return get('/lol-champ-select/v1/pin-drop-notification')
}

/**
 * PostLolChampSelectV1RetrieveLatestGameDto
 * @url POST /lol-champ-select/v1/retrieve-latest-game-dto
 */
export function postLolChampSelectV1RetrieveLatestGameDto(): Promise<unknown> {
  return post('/lol-champ-select/v1/retrieve-latest-game-dto')
}

/**
 * GetLolChampSelectV1Session
 * @url GET /lol-champ-select/v1/session
 */
export function getLolChampSelectV1Session(): Promise<unknown> {
  return get('/lol-champ-select/v1/session')
}

/**
 * PatchLolChampSelectV1SessionActionsById
 * @url PATCH /lol-champ-select/v1/session/actions/{id}
 * @param params - 路径参数: { id }
 */
export function patchLolChampSelectV1SessionActionsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return patch(`/lol-champ-select/v1/session/actions/${id}`)
}

/**
 * PostLolChampSelectV1SessionActionsByIdComplete
 * @url POST /lol-champ-select/v1/session/actions/{id}/complete
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectV1SessionActionsByIdComplete(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select/v1/session/actions/${id}/complete`)
}

/**
 * PostLolChampSelectV1SessionBenchSwapByChampionId
 * @url POST /lol-champ-select/v1/session/bench/swap/{championId}
 * @param params - 路径参数: { championId }
 */
export function postLolChampSelectV1SessionBenchSwapByChampionId(params: { championId: string | number }): Promise<unknown> {
  const { championId } = params

  return post(`/lol-champ-select/v1/session/bench/swap/${championId}`)
}

/**
 * PatchLolChampSelectV1SessionMySelection
 * @url PATCH /lol-champ-select/v1/session/my-selection
 */
export function patchLolChampSelectV1SessionMySelection(): Promise<unknown> {
  return patch('/lol-champ-select/v1/session/my-selection')
}

/**
 * PostLolChampSelectV1SessionMySelectionReroll
 * @url POST /lol-champ-select/v1/session/my-selection/reroll
 */
export function postLolChampSelectV1SessionMySelectionReroll(): Promise<unknown> {
  return post('/lol-champ-select/v1/session/my-selection/reroll')
}

/**
 * PostLolChampSelectV1SessionSimpleInventory
 * @url POST /lol-champ-select/v1/session/simple-inventory
 */
export function postLolChampSelectV1SessionSimpleInventory(): Promise<unknown> {
  return post('/lol-champ-select/v1/session/simple-inventory')
}

/**
 * GetLolChampSelectV1SessionTimer
 * @url GET /lol-champ-select/v1/session/timer
 */
export function getLolChampSelectV1SessionTimer(): Promise<unknown> {
  return get('/lol-champ-select/v1/session/timer')
}

/**
 * GetLolChampSelectV1SessionTrades
 * @url GET /lol-champ-select/v1/session/trades
 */
export function getLolChampSelectV1SessionTrades(): Promise<unknown> {
  return get('/lol-champ-select/v1/session/trades')
}

/**
 * GetLolChampSelectV1SessionTradesById
 * @url GET /lol-champ-select/v1/session/trades/{id}
 * @param params - 路径参数: { id }
 */
export function getLolChampSelectV1SessionTradesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-champ-select/v1/session/trades/${id}`)
}

/**
 * PostLolChampSelectV1SessionTradesByIdAccept
 * @url POST /lol-champ-select/v1/session/trades/{id}/accept
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectV1SessionTradesByIdAccept(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select/v1/session/trades/${id}/accept`)
}

/**
 * PostLolChampSelectV1SessionTradesByIdCancel
 * @url POST /lol-champ-select/v1/session/trades/{id}/cancel
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectV1SessionTradesByIdCancel(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select/v1/session/trades/${id}/cancel`)
}

/**
 * PostLolChampSelectV1SessionTradesByIdDecline
 * @url POST /lol-champ-select/v1/session/trades/{id}/decline
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectV1SessionTradesByIdDecline(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select/v1/session/trades/${id}/decline`)
}

/**
 * PostLolChampSelectV1SessionTradesByIdRequest
 * @url POST /lol-champ-select/v1/session/trades/{id}/request
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectV1SessionTradesByIdRequest(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select/v1/session/trades/${id}/request`)
}

/**
 * GetLolChampSelectV1SfxNotifications
 * @url GET /lol-champ-select/v1/sfx-notifications
 */
export function getLolChampSelectV1SfxNotifications(): Promise<unknown> {
  return get('/lol-champ-select/v1/sfx-notifications')
}

/**
 * GetLolChampSelectV1SkinCarouselSkins
 * @url GET /lol-champ-select/v1/skin-carousel-skins
 */
export function getLolChampSelectV1SkinCarouselSkins(): Promise<unknown> {
  return get('/lol-champ-select/v1/skin-carousel-skins')
}

/**
 * GetLolChampSelectV1SkinSelectorInfo
 * @url GET /lol-champ-select/v1/skin-selector-info
 */
export function getLolChampSelectV1SkinSelectorInfo(): Promise<unknown> {
  return get('/lol-champ-select/v1/skin-selector-info')
}

/**
 * GetLolChampSelectV1SummonersBySlotId
 * @url GET /lol-champ-select/v1/summoners/{slotId}
 * @param params - 路径参数: { slotId }
 */
export function getLolChampSelectV1SummonersBySlotId(params: { slotId: string | number }): Promise<unknown> {
  const { slotId } = params

  return get(`/lol-champ-select/v1/summoners/${slotId}`)
}

/**
 * GetLolChampSelectV1TeamBoost
 * @url GET /lol-champ-select/v1/team-boost
 */
export function getLolChampSelectV1TeamBoost(): Promise<unknown> {
  return get('/lol-champ-select/v1/team-boost')
}

/**
 * PostLolChampSelectV1TeamBoostPurchase
 * @url POST /lol-champ-select/v1/team-boost/purchase
 */
export function postLolChampSelectV1TeamBoostPurchase(): Promise<unknown> {
  return post('/lol-champ-select/v1/team-boost/purchase')
}

/**
 * PostLolChampSelectV1ToggleFavoriteByChampionIdByPosition
 * @url POST /lol-champ-select/v1/toggle-favorite/{championId}/{position}
 * @param params - 路径参数: { championId, position }
 */
export function postLolChampSelectV1ToggleFavoriteByChampionIdByPosition(params: { championId: string | number, position: string | number }): Promise<unknown> {
  const { championId, position } = params

  return post(`/lol-champ-select/v1/toggle-favorite/${championId}/${position}`)
}

/**
 * PostLolChampSelectV1TogglePlayerMuted
 * @url POST /lol-champ-select/v1/toggle-player-muted
 */
export function postLolChampSelectV1TogglePlayerMuted(): Promise<unknown> {
  return post('/lol-champ-select/v1/toggle-player-muted')
}
