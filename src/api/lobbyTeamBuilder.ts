/**
 * Lobbyteambuilder API 模块 (自动生成)
 * 30 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolLobbyTeamBuilderChampSelectV1BannableChampionIds
 * @url GET /lol-lobby-team-builder/champ-select/v1/bannable-champion-ids
 */
export function getLolLobbyTeamBuilderChampSelectV1BannableChampionIds(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/bannable-champion-ids')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1CurrentChampion
 * @url GET /lol-lobby-team-builder/champ-select/v1/current-champion
 */
export function getLolLobbyTeamBuilderChampSelectV1CurrentChampion(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/current-champion')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1DisabledChampionIds
 * @url GET /lol-lobby-team-builder/champ-select/v1/disabled-champion-ids
 */
export function getLolLobbyTeamBuilderChampSelectV1DisabledChampionIds(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/disabled-champion-ids')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1HasAutoAssignedSmite
 * @url GET /lol-lobby-team-builder/champ-select/v1/has-auto-assigned-smite
 */
export function getLolLobbyTeamBuilderChampSelectV1HasAutoAssignedSmite(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/has-auto-assigned-smite')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1ImplementationActive
 * @url GET /lol-lobby-team-builder/champ-select/v1/implementation-active
 */
export function getLolLobbyTeamBuilderChampSelectV1ImplementationActive(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/implementation-active')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1MatchToken
 * @url GET /lol-lobby-team-builder/champ-select/v1/match-token
 */
export function getLolLobbyTeamBuilderChampSelectV1MatchToken(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/match-token')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1PickableChampionIds
 * @url GET /lol-lobby-team-builder/champ-select/v1/pickable-champion-ids
 */
export function getLolLobbyTeamBuilderChampSelectV1PickableChampionIds(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/pickable-champion-ids')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1PickableSkinIds
 * @url GET /lol-lobby-team-builder/champ-select/v1/pickable-skin-ids
 */
export function getLolLobbyTeamBuilderChampSelectV1PickableSkinIds(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/pickable-skin-ids')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1Preferences
 * @url GET /lol-lobby-team-builder/champ-select/v1/preferences
 */
export function getLolLobbyTeamBuilderChampSelectV1Preferences(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/preferences')
}

/**
 * PostLolLobbyTeamBuilderChampSelectV1RetrieveLatestGameDto
 * @url POST /lol-lobby-team-builder/champ-select/v1/retrieve-latest-game-dto
 */
export function postLolLobbyTeamBuilderChampSelectV1RetrieveLatestGameDto(): Promise<unknown> {
  return post('/lol-lobby-team-builder/champ-select/v1/retrieve-latest-game-dto')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1SendingLoadoutsGcosEnabled
 * @url GET /lol-lobby-team-builder/champ-select/v1/sending-loadouts-gcos-enabled
 */
export function getLolLobbyTeamBuilderChampSelectV1SendingLoadoutsGcosEnabled(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/sending-loadouts-gcos-enabled')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1Session
 * @url GET /lol-lobby-team-builder/champ-select/v1/session
 */
export function getLolLobbyTeamBuilderChampSelectV1Session(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/session')
}

/**
 * PatchLolLobbyTeamBuilderChampSelectV1SessionActionsById
 * @url PATCH /lol-lobby-team-builder/champ-select/v1/session/actions/{id}
 * @param params - 路径参数: { id }
 */
export function patchLolLobbyTeamBuilderChampSelectV1SessionActionsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return patch(`/lol-lobby-team-builder/champ-select/v1/session/actions/${id}`)
}

/**
 * PostLolLobbyTeamBuilderChampSelectV1SessionActionsByIdComplete
 * @url POST /lol-lobby-team-builder/champ-select/v1/session/actions/{id}/complete
 * @param params - 路径参数: { id }
 */
export function postLolLobbyTeamBuilderChampSelectV1SessionActionsByIdComplete(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-lobby-team-builder/champ-select/v1/session/actions/${id}/complete`)
}

/**
 * PostLolLobbyTeamBuilderChampSelectV1SessionBenchSwapByChampionId
 * @url POST /lol-lobby-team-builder/champ-select/v1/session/bench/swap/{championId}
 * @param params - 路径参数: { championId }
 */
export function postLolLobbyTeamBuilderChampSelectV1SessionBenchSwapByChampionId(params: { championId: string | number }): Promise<unknown> {
  const { championId } = params

  return post(`/lol-lobby-team-builder/champ-select/v1/session/bench/swap/${championId}`)
}

/**
 * PatchLolLobbyTeamBuilderChampSelectV1SessionMySelection
 * @url PATCH /lol-lobby-team-builder/champ-select/v1/session/my-selection
 */
export function patchLolLobbyTeamBuilderChampSelectV1SessionMySelection(): Promise<unknown> {
  return patch('/lol-lobby-team-builder/champ-select/v1/session/my-selection')
}

/**
 * PostLolLobbyTeamBuilderChampSelectV1SessionMySelectionReroll
 * @url POST /lol-lobby-team-builder/champ-select/v1/session/my-selection/reroll
 */
export function postLolLobbyTeamBuilderChampSelectV1SessionMySelectionReroll(): Promise<unknown> {
  return post('/lol-lobby-team-builder/champ-select/v1/session/my-selection/reroll')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1SessionTimer
 * @url GET /lol-lobby-team-builder/champ-select/v1/session/timer
 */
export function getLolLobbyTeamBuilderChampSelectV1SessionTimer(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/session/timer')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1SessionTrades
 * @url GET /lol-lobby-team-builder/champ-select/v1/session/trades
 */
export function getLolLobbyTeamBuilderChampSelectV1SessionTrades(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/session/trades')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1SessionTradesById
 * @url GET /lol-lobby-team-builder/champ-select/v1/session/trades/{id}
 * @param params - 路径参数: { id }
 */
export function getLolLobbyTeamBuilderChampSelectV1SessionTradesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-lobby-team-builder/champ-select/v1/session/trades/${id}`)
}

/**
 * PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdAccept
 * @url POST /lol-lobby-team-builder/champ-select/v1/session/trades/{id}/accept
 * @param params - 路径参数: { id }
 */
export function postLolLobbyTeamBuilderChampSelectV1SessionTradesByIdAccept(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-lobby-team-builder/champ-select/v1/session/trades/${id}/accept`)
}

/**
 * PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdCancel
 * @url POST /lol-lobby-team-builder/champ-select/v1/session/trades/{id}/cancel
 * @param params - 路径参数: { id }
 */
export function postLolLobbyTeamBuilderChampSelectV1SessionTradesByIdCancel(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-lobby-team-builder/champ-select/v1/session/trades/${id}/cancel`)
}

/**
 * PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdDecline
 * @url POST /lol-lobby-team-builder/champ-select/v1/session/trades/{id}/decline
 * @param params - 路径参数: { id }
 */
export function postLolLobbyTeamBuilderChampSelectV1SessionTradesByIdDecline(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-lobby-team-builder/champ-select/v1/session/trades/${id}/decline`)
}

/**
 * PostLolLobbyTeamBuilderChampSelectV1SessionTradesByIdRequest
 * @url POST /lol-lobby-team-builder/champ-select/v1/session/trades/{id}/request
 * @param params - 路径参数: { id }
 */
export function postLolLobbyTeamBuilderChampSelectV1SessionTradesByIdRequest(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-lobby-team-builder/champ-select/v1/session/trades/${id}/request`)
}

/**
 * PostLolLobbyTeamBuilderChampSelectV1SimpleInventory
 * @url POST /lol-lobby-team-builder/champ-select/v1/simple-inventory
 */
export function postLolLobbyTeamBuilderChampSelectV1SimpleInventory(): Promise<unknown> {
  return post('/lol-lobby-team-builder/champ-select/v1/simple-inventory')
}

/**
 * GetLolLobbyTeamBuilderChampSelectV1TeamBoost
 * @url GET /lol-lobby-team-builder/champ-select/v1/team-boost
 */
export function getLolLobbyTeamBuilderChampSelectV1TeamBoost(): Promise<unknown> {
  return get('/lol-lobby-team-builder/champ-select/v1/team-boost')
}

/**
 * PostLolLobbyTeamBuilderChampSelectV1TeamBoostPurchase
 * @url POST /lol-lobby-team-builder/champ-select/v1/team-boost/purchase
 */
export function postLolLobbyTeamBuilderChampSelectV1TeamBoostPurchase(): Promise<unknown> {
  return post('/lol-lobby-team-builder/champ-select/v1/team-boost/purchase')
}

/**
 * GetLolLobbyTeamBuilderV1Matchmaking
 * @url GET /lol-lobby-team-builder/v1/matchmaking
 */
export function getLolLobbyTeamBuilderV1Matchmaking(): Promise<unknown> {
  return get('/lol-lobby-team-builder/v1/matchmaking')
}

/**
 * PostLolLobbyTeamBuilderV1ReadyCheckAccept
 * @url POST /lol-lobby-team-builder/v1/ready-check/accept
 */
export function postLolLobbyTeamBuilderV1ReadyCheckAccept(): Promise<unknown> {
  return post('/lol-lobby-team-builder/v1/ready-check/accept')
}

/**
 * PostLolLobbyTeamBuilderV1ReadyCheckDecline
 * @url POST /lol-lobby-team-builder/v1/ready-check/decline
 */
export function postLolLobbyTeamBuilderV1ReadyCheckDecline(): Promise<unknown> {
  return post('/lol-lobby-team-builder/v1/ready-check/decline')
}
