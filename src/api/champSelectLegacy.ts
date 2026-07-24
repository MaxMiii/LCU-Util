/**
 * Champselectlegacy API 模块 (自动生成)
 * 20 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolChampSelectLegacyV1BannableChampionIds
 * @url GET /lol-champ-select-legacy/v1/bannable-champion-ids
 */
export function getLolChampSelectLegacyV1BannableChampionIds(): Promise<unknown> {
  return get('/lol-champ-select-legacy/v1/bannable-champion-ids')
}

/**
 * PostLolChampSelectLegacyV1BattleTrainingLaunch
 * @url POST /lol-champ-select-legacy/v1/battle-training/launch
 */
export function postLolChampSelectLegacyV1BattleTrainingLaunch(): Promise<unknown> {
  return post('/lol-champ-select-legacy/v1/battle-training/launch')
}

/**
 * GetLolChampSelectLegacyV1CurrentChampion
 * @url GET /lol-champ-select-legacy/v1/current-champion
 */
export function getLolChampSelectLegacyV1CurrentChampion(): Promise<unknown> {
  return get('/lol-champ-select-legacy/v1/current-champion')
}

/**
 * GetLolChampSelectLegacyV1DisabledChampionIds
 * @url GET /lol-champ-select-legacy/v1/disabled-champion-ids
 */
export function getLolChampSelectLegacyV1DisabledChampionIds(): Promise<unknown> {
  return get('/lol-champ-select-legacy/v1/disabled-champion-ids')
}

/**
 * GetLolChampSelectLegacyV1ImplementationActive
 * @url GET /lol-champ-select-legacy/v1/implementation-active
 */
export function getLolChampSelectLegacyV1ImplementationActive(): Promise<unknown> {
  return get('/lol-champ-select-legacy/v1/implementation-active')
}

/**
 * GetLolChampSelectLegacyV1PickableChampionIds
 * @url GET /lol-champ-select-legacy/v1/pickable-champion-ids
 */
export function getLolChampSelectLegacyV1PickableChampionIds(): Promise<unknown> {
  return get('/lol-champ-select-legacy/v1/pickable-champion-ids')
}

/**
 * GetLolChampSelectLegacyV1PickableSkinIds
 * @url GET /lol-champ-select-legacy/v1/pickable-skin-ids
 */
export function getLolChampSelectLegacyV1PickableSkinIds(): Promise<unknown> {
  return get('/lol-champ-select-legacy/v1/pickable-skin-ids')
}

/**
 * GetLolChampSelectLegacyV1Session
 * @url GET /lol-champ-select-legacy/v1/session
 */
export function getLolChampSelectLegacyV1Session(): Promise<unknown> {
  return get('/lol-champ-select-legacy/v1/session')
}

/**
 * PatchLolChampSelectLegacyV1SessionActionsById
 * @url PATCH /lol-champ-select-legacy/v1/session/actions/{id}
 * @param params - 路径参数: { id }
 */
export function patchLolChampSelectLegacyV1SessionActionsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return patch(`/lol-champ-select-legacy/v1/session/actions/${id}`)
}

/**
 * PostLolChampSelectLegacyV1SessionActionsByIdComplete
 * @url POST /lol-champ-select-legacy/v1/session/actions/{id}/complete
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectLegacyV1SessionActionsByIdComplete(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select-legacy/v1/session/actions/${id}/complete`)
}

/**
 * PatchLolChampSelectLegacyV1SessionMySelection
 * @url PATCH /lol-champ-select-legacy/v1/session/my-selection
 */
export function patchLolChampSelectLegacyV1SessionMySelection(): Promise<unknown> {
  return patch('/lol-champ-select-legacy/v1/session/my-selection')
}

/**
 * PostLolChampSelectLegacyV1SessionMySelectionReroll
 * @url POST /lol-champ-select-legacy/v1/session/my-selection/reroll
 */
export function postLolChampSelectLegacyV1SessionMySelectionReroll(): Promise<unknown> {
  return post('/lol-champ-select-legacy/v1/session/my-selection/reroll')
}

/**
 * GetLolChampSelectLegacyV1SessionTimer
 * @url GET /lol-champ-select-legacy/v1/session/timer
 */
export function getLolChampSelectLegacyV1SessionTimer(): Promise<unknown> {
  return get('/lol-champ-select-legacy/v1/session/timer')
}

/**
 * GetLolChampSelectLegacyV1SessionTrades
 * @url GET /lol-champ-select-legacy/v1/session/trades
 */
export function getLolChampSelectLegacyV1SessionTrades(): Promise<unknown> {
  return get('/lol-champ-select-legacy/v1/session/trades')
}

/**
 * GetLolChampSelectLegacyV1SessionTradesById
 * @url GET /lol-champ-select-legacy/v1/session/trades/{id}
 * @param params - 路径参数: { id }
 */
export function getLolChampSelectLegacyV1SessionTradesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-champ-select-legacy/v1/session/trades/${id}`)
}

/**
 * PostLolChampSelectLegacyV1SessionTradesByIdAccept
 * @url POST /lol-champ-select-legacy/v1/session/trades/{id}/accept
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectLegacyV1SessionTradesByIdAccept(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select-legacy/v1/session/trades/${id}/accept`)
}

/**
 * PostLolChampSelectLegacyV1SessionTradesByIdCancel
 * @url POST /lol-champ-select-legacy/v1/session/trades/{id}/cancel
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectLegacyV1SessionTradesByIdCancel(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select-legacy/v1/session/trades/${id}/cancel`)
}

/**
 * PostLolChampSelectLegacyV1SessionTradesByIdDecline
 * @url POST /lol-champ-select-legacy/v1/session/trades/{id}/decline
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectLegacyV1SessionTradesByIdDecline(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select-legacy/v1/session/trades/${id}/decline`)
}

/**
 * PostLolChampSelectLegacyV1SessionTradesByIdRequest
 * @url POST /lol-champ-select-legacy/v1/session/trades/{id}/request
 * @param params - 路径参数: { id }
 */
export function postLolChampSelectLegacyV1SessionTradesByIdRequest(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-champ-select-legacy/v1/session/trades/${id}/request`)
}

/**
 * GetLolChampSelectLegacyV1TeamBoost
 * @url GET /lol-champ-select-legacy/v1/team-boost
 */
export function getLolChampSelectLegacyV1TeamBoost(): Promise<unknown> {
  return get('/lol-champ-select-legacy/v1/team-boost')
}
