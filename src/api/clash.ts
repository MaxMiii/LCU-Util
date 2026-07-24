/**
 * Clash API 模块 (自动生成)
 * 92 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolClashV1AllTournaments
 * @url GET /lol-clash/v1/all-tournaments
 */
export function getLolClashV1AllTournaments(): Promise<unknown> {
  return get('/lol-clash/v1/all-tournaments')
}

/**
 * GetLolClashV1BracketByBracketId
 * @url GET /lol-clash/v1/bracket/{bracketId}
 * @param params - 路径参数: { bracketId }
 */
export function getLolClashV1BracketByBracketId(params: { bracketId: string | number }): Promise<unknown> {
  const { bracketId } = params

  return get(`/lol-clash/v1/bracket/${bracketId}`)
}

/**
 * GetLolClashV1CheckinAllowed
 * @url GET /lol-clash/v1/checkin-allowed
 */
export function getLolClashV1CheckinAllowed(): Promise<unknown> {
  return get('/lol-clash/v1/checkin-allowed')
}

/**
 * GetLolClashV1CurrentTournamentIds
 * @url GET /lol-clash/v1/currentTournamentIds
 */
export function getLolClashV1CurrentTournamentIds(): Promise<unknown> {
  return get('/lol-clash/v1/currentTournamentIds')
}

/**
 * GetLolClashV1DisabledConfig
 * @url GET /lol-clash/v1/disabled-config
 */
export function getLolClashV1DisabledConfig(): Promise<unknown> {
  return get('/lol-clash/v1/disabled-config')
}

/**
 * GetLolClashV1Enabled
 * @url GET /lol-clash/v1/enabled
 */
export function getLolClashV1Enabled(): Promise<unknown> {
  return get('/lol-clash/v1/enabled')
}

/**
 * GetLolClashV1EogPlayerUpdate
 * @url GET /lol-clash/v1/eog-player-update
 */
export function getLolClashV1EogPlayerUpdate(): Promise<unknown> {
  return get('/lol-clash/v1/eog-player-update')
}

/**
 * PostLolClashV1EogPlayerUpdateAcknowledge
 * @url POST /lol-clash/v1/eog-player-update/acknowledge
 */
export function postLolClashV1EogPlayerUpdateAcknowledge(): Promise<unknown> {
  return post('/lol-clash/v1/eog-player-update/acknowledge')
}

/**
 * GetLolClashV1EventByUuid
 * @url GET /lol-clash/v1/event/{uuid}
 * @param params - 路径参数: { uuid }
 */
export function getLolClashV1EventByUuid(params: { uuid: string | number }): Promise<unknown> {
  const { uuid } = params

  return get(`/lol-clash/v1/event/${uuid}`)
}

/**
 * PostLolClashV1Events
 * @url POST /lol-clash/v1/events
 */
export function postLolClashV1Events(): Promise<unknown> {
  return post('/lol-clash/v1/events')
}

/**
 * GetLolClashV1GameEnd
 * @url GET /lol-clash/v1/game-end
 */
export function getLolClashV1GameEnd(): Promise<unknown> {
  return get('/lol-clash/v1/game-end')
}

/**
 * PostLolClashV1GameEndAcknowledge
 * @url POST /lol-clash/v1/game-end/acknowledge
 */
export function postLolClashV1GameEndAcknowledge(): Promise<unknown> {
  return post('/lol-clash/v1/game-end/acknowledge')
}

/**
 * GetLolClashV1Historyandwinners
 * @url GET /lol-clash/v1/historyandwinners
 */
export function getLolClashV1Historyandwinners(): Promise<unknown> {
  return get('/lol-clash/v1/historyandwinners')
}

/**
 * GetLolClashV1Iconconfig
 * @url GET /lol-clash/v1/iconconfig
 */
export function getLolClashV1Iconconfig(): Promise<unknown> {
  return get('/lol-clash/v1/iconconfig')
}

/**
 * GetLolClashV1InvitedRosterIds
 * @url GET /lol-clash/v1/invited-roster-ids
 */
export function getLolClashV1InvitedRosterIds(): Promise<unknown> {
  return get('/lol-clash/v1/invited-roster-ids')
}

/**
 * PostLolClashV1LftPlayer
 * @url POST /lol-clash/v1/lft/player
 */
export function postLolClashV1LftPlayer(): Promise<unknown> {
  return post('/lol-clash/v1/lft/player')
}

/**
 * PostLolClashV1LftPlayerFind
 * @url POST /lol-clash/v1/lft/player/find
 */
export function postLolClashV1LftPlayerFind(): Promise<unknown> {
  return post('/lol-clash/v1/lft/player/find')
}

/**
 * PostLolClashV1LftTeam
 * @url POST /lol-clash/v1/lft/team
 */
export function postLolClashV1LftTeam(): Promise<unknown> {
  return post('/lol-clash/v1/lft/team')
}

/**
 * PostLolClashV1LftTeamFetchRequests
 * @url POST /lol-clash/v1/lft/team/fetch-requests
 */
export function postLolClashV1LftTeamFetchRequests(): Promise<unknown> {
  return post('/lol-clash/v1/lft/team/fetch-requests')
}

/**
 * PostLolClashV1LftTeamFind
 * @url POST /lol-clash/v1/lft/team/find
 */
export function postLolClashV1LftTeamFind(): Promise<unknown> {
  return post('/lol-clash/v1/lft/team/find')
}

/**
 * GetLolClashV1LftTeamRequests
 * @url GET /lol-clash/v1/lft/team/requests
 */
export function getLolClashV1LftTeamRequests(): Promise<unknown> {
  return get('/lol-clash/v1/lft/team/requests')
}

/**
 * PostLolClashV1LftTeamByRosterIdRequest
 * @url POST /lol-clash/v1/lft/team/{rosterId}/request
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1LftTeamByRosterIdRequest(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/lft/team/${rosterId}/request`)
}

/**
 * GetLolClashV1Notifications
 * @url GET /lol-clash/v1/notifications
 */
export function getLolClashV1Notifications(): Promise<unknown> {
  return get('/lol-clash/v1/notifications')
}

/**
 * PostLolClashV1NotificationsAcknowledge
 * @url POST /lol-clash/v1/notifications/acknowledge
 */
export function postLolClashV1NotificationsAcknowledge(): Promise<unknown> {
  return post('/lol-clash/v1/notifications/acknowledge')
}

/**
 * GetLolClashV1Ping
 * @url GET /lol-clash/v1/ping
 */
export function getLolClashV1Ping(): Promise<unknown> {
  return get('/lol-clash/v1/ping')
}

/**
 * GetLolClashV1Player
 * @url GET /lol-clash/v1/player
 */
export function getLolClashV1Player(): Promise<unknown> {
  return get('/lol-clash/v1/player')
}

/**
 * GetLolClashV1PlayerChatRosters
 * @url GET /lol-clash/v1/player/chat-rosters
 */
export function getLolClashV1PlayerChatRosters(): Promise<unknown> {
  return get('/lol-clash/v1/player/chat-rosters')
}

/**
 * GetLolClashV1PlayerHistory
 * @url GET /lol-clash/v1/player/history
 */
export function getLolClashV1PlayerHistory(): Promise<unknown> {
  return get('/lol-clash/v1/player/history')
}

/**
 * GetLolClashV1PlaymodeRestricted
 * @url GET /lol-clash/v1/playmode-restricted
 */
export function getLolClashV1PlaymodeRestricted(): Promise<unknown> {
  return get('/lol-clash/v1/playmode-restricted')
}

/**
 * GetLolClashV1Ready
 * @url GET /lol-clash/v1/ready
 */
export function getLolClashV1Ready(): Promise<unknown> {
  return get('/lol-clash/v1/ready')
}

/**
 * PostLolClashV1Refresh
 * @url POST /lol-clash/v1/refresh
 */
export function postLolClashV1Refresh(): Promise<unknown> {
  return post('/lol-clash/v1/refresh')
}

/**
 * GetLolClashV1Rewards
 * @url GET /lol-clash/v1/rewards
 */
export function getLolClashV1Rewards(): Promise<unknown> {
  return get('/lol-clash/v1/rewards')
}

/**
 * GetLolClashV1RosterByRosterId
 * @url GET /lol-clash/v1/roster/{rosterId}
 * @param params - 路径参数: { rosterId }
 */
export function getLolClashV1RosterByRosterId(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return get(`/lol-clash/v1/roster/${rosterId}`)
}

/**
 * PostLolClashV1RosterByRosterIdAccept
 * @url POST /lol-clash/v1/roster/{rosterId}/accept
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdAccept(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/accept`)
}

/**
 * PostLolClashV1RosterByRosterIdCancelWithdraw
 * @url POST /lol-clash/v1/roster/{rosterId}/cancel-withdraw
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdCancelWithdraw(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/cancel-withdraw`)
}

/**
 * PostLolClashV1RosterByRosterIdChangeAllDetails
 * @url POST /lol-clash/v1/roster/{rosterId}/change-all-details
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdChangeAllDetails(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/change-all-details`)
}

/**
 * PostLolClashV1RosterByRosterIdChangeIcon
 * @url POST /lol-clash/v1/roster/{rosterId}/change-icon
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdChangeIcon(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/change-icon`)
}

/**
 * PostLolClashV1RosterByRosterIdChangeName
 * @url POST /lol-clash/v1/roster/{rosterId}/change-name
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdChangeName(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/change-name`)
}

/**
 * PostLolClashV1RosterByRosterIdChangeShortName
 * @url POST /lol-clash/v1/roster/{rosterId}/change-short-name
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdChangeShortName(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/change-short-name`)
}

/**
 * PostLolClashV1RosterByRosterIdDecline
 * @url POST /lol-clash/v1/roster/{rosterId}/decline
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdDecline(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/decline`)
}

/**
 * PostLolClashV1RosterByRosterIdDisband
 * @url POST /lol-clash/v1/roster/{rosterId}/disband
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdDisband(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/disband`)
}

/**
 * PostLolClashV1RosterByRosterIdInvite
 * @url POST /lol-clash/v1/roster/{rosterId}/invite
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdInvite(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/invite`)
}

/**
 * PostLolClashV1RosterByRosterIdKick
 * @url POST /lol-clash/v1/roster/{rosterId}/kick
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdKick(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/kick`)
}

/**
 * PostLolClashV1RosterByRosterIdLeave
 * @url POST /lol-clash/v1/roster/{rosterId}/leave
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdLeave(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/leave`)
}

/**
 * PostLolClashV1RosterByRosterIdLockin
 * @url POST /lol-clash/v1/roster/{rosterId}/lockin
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdLockin(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/lockin`)
}

/**
 * PostLolClashV1RosterByRosterIdSetPosition
 * @url POST /lol-clash/v1/roster/{rosterId}/set-position
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdSetPosition(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/set-position`)
}

/**
 * PostLolClashV1RosterByRosterIdSetTicket
 * @url POST /lol-clash/v1/roster/{rosterId}/set-ticket
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdSetTicket(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/set-ticket`)
}

/**
 * GetLolClashV1RosterByRosterIdStats
 * @url GET /lol-clash/v1/roster/{rosterId}/stats
 * @param params - 路径参数: { rosterId }
 */
export function getLolClashV1RosterByRosterIdStats(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return get(`/lol-clash/v1/roster/${rosterId}/stats`)
}

/**
 * PostLolClashV1RosterByRosterIdSubstituteAccept
 * @url POST /lol-clash/v1/roster/{rosterId}/substitute/accept
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdSubstituteAccept(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/substitute/accept`)
}

/**
 * PostLolClashV1RosterByRosterIdSubstituteDecline
 * @url POST /lol-clash/v1/roster/{rosterId}/substitute/decline
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdSubstituteDecline(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/substitute/decline`)
}

/**
 * PostLolClashV1RosterByRosterIdSubstituteInvite
 * @url POST /lol-clash/v1/roster/{rosterId}/substitute/invite
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdSubstituteInvite(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/substitute/invite`)
}

/**
 * PostLolClashV1RosterByRosterIdSubstituteReclaim
 * @url POST /lol-clash/v1/roster/{rosterId}/substitute/reclaim
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdSubstituteReclaim(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/substitute/reclaim`)
}

/**
 * PostLolClashV1RosterByRosterIdSubstituteBySummonerIdRevoke
 * @url POST /lol-clash/v1/roster/{rosterId}/substitute/{summonerId}/revoke
 * @param params - 路径参数: { rosterId, summonerId }
 */
export function postLolClashV1RosterByRosterIdSubstituteBySummonerIdRevoke(params: { rosterId: string | number, summonerId: string | number }): Promise<unknown> {
  const { rosterId, summonerId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/substitute/${summonerId}/revoke`)
}

/**
 * PostLolClashV1RosterByRosterIdSuggest
 * @url POST /lol-clash/v1/roster/{rosterId}/suggest
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdSuggest(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/suggest`)
}

/**
 * PostLolClashV1RosterByRosterIdSuggestBySummonerIdAccept
 * @url POST /lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/accept
 * @param params - 路径参数: { rosterId, summonerId }
 */
export function postLolClashV1RosterByRosterIdSuggestBySummonerIdAccept(params: { rosterId: string | number, summonerId: string | number }): Promise<unknown> {
  const { rosterId, summonerId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/suggest/${summonerId}/accept`)
}

/**
 * PostLolClashV1RosterByRosterIdSuggestBySummonerIdDecline
 * @url POST /lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/decline
 * @param params - 路径参数: { rosterId, summonerId }
 */
export function postLolClashV1RosterByRosterIdSuggestBySummonerIdDecline(params: { rosterId: string | number, summonerId: string | number }): Promise<unknown> {
  const { rosterId, summonerId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/suggest/${summonerId}/decline`)
}

/**
 * PostLolClashV1RosterByRosterIdSuggestBySummonerIdRevoke
 * @url POST /lol-clash/v1/roster/{rosterId}/suggest/{summonerId}/revoke
 * @param params - 路径参数: { rosterId, summonerId }
 */
export function postLolClashV1RosterByRosterIdSuggestBySummonerIdRevoke(params: { rosterId: string | number, summonerId: string | number }): Promise<unknown> {
  const { rosterId, summonerId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/suggest/${summonerId}/revoke`)
}

/**
 * PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdAccept
 * @url POST /lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/accept
 * @param params - 路径参数: { rosterId, summonerId }
 */
export function postLolClashV1RosterByRosterIdTicketOfferBySummonerIdAccept(params: { rosterId: string | number, summonerId: string | number }): Promise<unknown> {
  const { rosterId, summonerId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/ticket-offer/${summonerId}/accept`)
}

/**
 * PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdDecline
 * @url POST /lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/decline
 * @param params - 路径参数: { rosterId, summonerId }
 */
export function postLolClashV1RosterByRosterIdTicketOfferBySummonerIdDecline(params: { rosterId: string | number, summonerId: string | number }): Promise<unknown> {
  const { rosterId, summonerId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/ticket-offer/${summonerId}/decline`)
}

/**
 * PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdOffer
 * @url POST /lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/offer
 * @param params - 路径参数: { rosterId, summonerId }
 */
export function postLolClashV1RosterByRosterIdTicketOfferBySummonerIdOffer(params: { rosterId: string | number, summonerId: string | number }): Promise<unknown> {
  const { rosterId, summonerId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/ticket-offer/${summonerId}/offer`)
}

/**
 * PostLolClashV1RosterByRosterIdTicketOfferBySummonerIdRevoke
 * @url POST /lol-clash/v1/roster/{rosterId}/ticket-offer/{summonerId}/revoke
 * @param params - 路径参数: { rosterId, summonerId }
 */
export function postLolClashV1RosterByRosterIdTicketOfferBySummonerIdRevoke(params: { rosterId: string | number, summonerId: string | number }): Promise<unknown> {
  const { rosterId, summonerId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/ticket-offer/${summonerId}/revoke`)
}

/**
 * PostLolClashV1RosterByRosterIdTransferCaptain
 * @url POST /lol-clash/v1/roster/{rosterId}/transfer-captain
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdTransferCaptain(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/transfer-captain`)
}

/**
 * PostLolClashV1RosterByRosterIdUnlockin
 * @url POST /lol-clash/v1/roster/{rosterId}/unlockin
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdUnlockin(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/unlockin`)
}

/**
 * PostLolClashV1RosterByRosterIdUnwithdraw
 * @url POST /lol-clash/v1/roster/{rosterId}/unwithdraw
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdUnwithdraw(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/unwithdraw`)
}

/**
 * PostLolClashV1RosterByRosterIdUpdateLogos
 * @url POST /lol-clash/v1/roster/{rosterId}/update-logos
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdUpdateLogos(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/update-logos`)
}

/**
 * PostLolClashV1RosterByRosterIdWithdraw
 * @url POST /lol-clash/v1/roster/{rosterId}/withdraw
 * @param params - 路径参数: { rosterId }
 */
export function postLolClashV1RosterByRosterIdWithdraw(params: { rosterId: string | number }): Promise<unknown> {
  const { rosterId } = params

  return post(`/lol-clash/v1/roster/${rosterId}/withdraw`)
}

/**
 * GetLolClashV1ScoutingChampions
 * @url GET /lol-clash/v1/scouting/champions
 * @param query - 查询参数: { summonerIds }
 */
export function getLolClashV1ScoutingChampions(query: { summonerIds: number[] }): Promise<unknown> {
  return get('/lol-clash/v1/scouting/champions', query)
}

/**
 * GetLolClashV1ScoutingMatchhistory
 * @url GET /lol-clash/v1/scouting/matchhistory
 * @param query - 查询参数: { summonerIds }
 */
export function getLolClashV1ScoutingMatchhistory(query: { summonerIds: number[] }): Promise<unknown> {
  return get('/lol-clash/v1/scouting/matchhistory', query)
}

/**
 * GetLolClashV1SeasonRewardsBySeasonId
 * @url GET /lol-clash/v1/season-rewards/{seasonId}
 * @param params - 路径参数: { seasonId }
 */
export function getLolClashV1SeasonRewardsBySeasonId(params: { seasonId: string | number }): Promise<unknown> {
  const { seasonId } = params

  return get(`/lol-clash/v1/season-rewards/${seasonId}`)
}

/**
 * GetLolClashV1SimpleStateFlags
 * @url GET /lol-clash/v1/simple-state-flags
 */
export function getLolClashV1SimpleStateFlags(): Promise<unknown> {
  return get('/lol-clash/v1/simple-state-flags')
}

/**
 * PostLolClashV1SimpleStateFlagsByIdAcknowledge
 * @url POST /lol-clash/v1/simple-state-flags/{id}/acknowledge
 * @param params - 路径参数: { id }
 */
export function postLolClashV1SimpleStateFlagsByIdAcknowledge(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-clash/v1/simple-state-flags/${id}/acknowledge`)
}

/**
 * GetLolClashV1ThirdpartyTeamData
 * @url GET /lol-clash/v1/thirdparty/team-data
 */
export function getLolClashV1ThirdpartyTeamData(): Promise<unknown> {
  return get('/lol-clash/v1/thirdparty/team-data')
}

/**
 * GetLolClashV1Time
 * @url GET /lol-clash/v1/time
 */
export function getLolClashV1Time(): Promise<unknown> {
  return get('/lol-clash/v1/time')
}

/**
 * GetLolClashV1TournamentStateInfo
 * @url GET /lol-clash/v1/tournament-state-info
 */
export function getLolClashV1TournamentStateInfo(): Promise<unknown> {
  return get('/lol-clash/v1/tournament-state-info')
}

/**
 * GetLolClashV1TournamentSummary
 * @url GET /lol-clash/v1/tournament-summary
 */
export function getLolClashV1TournamentSummary(): Promise<unknown> {
  return get('/lol-clash/v1/tournament-summary')
}

/**
 * GetLolClashV1TournamentCancelled
 * @url GET /lol-clash/v1/tournament/cancelled
 */
export function getLolClashV1TournamentCancelled(): Promise<unknown> {
  return get('/lol-clash/v1/tournament/cancelled')
}

/**
 * GetLolClashV1TournamentGetAllPlayerTiers
 * @url GET /lol-clash/v1/tournament/get-all-player-tiers
 */
export function getLolClashV1TournamentGetAllPlayerTiers(): Promise<unknown> {
  return get('/lol-clash/v1/tournament/get-all-player-tiers')
}

/**
 * GetLolClashV1TournamentByTournamentId
 * @url GET /lol-clash/v1/tournament/{tournamentId}
 * @param params - 路径参数: { tournamentId }
 */
export function getLolClashV1TournamentByTournamentId(params: { tournamentId: string | number }): Promise<unknown> {
  const { tournamentId } = params

  return get(`/lol-clash/v1/tournament/${tournamentId}`)
}

/**
 * PostLolClashV1TournamentByTournamentIdCreateRoster
 * @url POST /lol-clash/v1/tournament/{tournamentId}/create-roster
 * @param params - 路径参数: { tournamentId }
 */
export function postLolClashV1TournamentByTournamentIdCreateRoster(params: { tournamentId: string | number }): Promise<unknown> {
  const { tournamentId } = params

  return post(`/lol-clash/v1/tournament/${tournamentId}/create-roster`)
}

/**
 * GetLolClashV1TournamentByTournamentIdGetPlayerTiers
 * @url GET /lol-clash/v1/tournament/{tournamentId}/get-player-tiers
 * @param params - 路径参数: { tournamentId }
 * @param query - 查询参数: { summonerIds }
 */
export function getLolClashV1TournamentByTournamentIdGetPlayerTiers(params: { tournamentId: string | number }, query: { summonerIds: number[] }): Promise<unknown> {
  const { tournamentId } = params

  return get(`/lol-clash/v1/tournament/${tournamentId}/get-player-tiers`, query)
}

/**
 * GetLolClashV1TournamentByTournamentIdPlayer
 * @url GET /lol-clash/v1/tournament/{tournamentId}/player
 * @param params - 路径参数: { tournamentId }
 */
export function getLolClashV1TournamentByTournamentIdPlayer(params: { tournamentId: string | number }): Promise<unknown> {
  const { tournamentId } = params

  return get(`/lol-clash/v1/tournament/${tournamentId}/player`)
}

/**
 * GetLolClashV1TournamentByTournamentIdPlayerHonorRestricted
 * @url GET /lol-clash/v1/tournament/{tournamentId}/player-honor-restricted
 * @param params - 路径参数: { tournamentId }
 */
export function getLolClashV1TournamentByTournamentIdPlayerHonorRestricted(params: { tournamentId: string | number }): Promise<unknown> {
  const { tournamentId } = params

  return get(`/lol-clash/v1/tournament/${tournamentId}/player-honor-restricted`)
}

/**
 * GetLolClashV1TournamentByTournamentIdStateInfo
 * @url GET /lol-clash/v1/tournament/{tournamentId}/stateInfo
 * @param params - 路径参数: { tournamentId }
 */
export function getLolClashV1TournamentByTournamentIdStateInfo(params: { tournamentId: string | number }): Promise<unknown> {
  const { tournamentId } = params

  return get(`/lol-clash/v1/tournament/${tournamentId}/stateInfo`)
}

/**
 * GetLolClashV1TournamentByTournamentIdWinners
 * @url GET /lol-clash/v1/tournament/{tournamentId}/winners
 * @param params - 路径参数: { tournamentId }
 */
export function getLolClashV1TournamentByTournamentIdWinners(params: { tournamentId: string | number }): Promise<unknown> {
  const { tournamentId } = params

  return get(`/lol-clash/v1/tournament/${tournamentId}/winners`)
}

/**
 * PostLolClashV1UpdateLogos
 * @url POST /lol-clash/v1/update-logos
 */
export function postLolClashV1UpdateLogos(): Promise<unknown> {
  return post('/lol-clash/v1/update-logos')
}

/**
 * GetLolClashV1Visible
 * @url GET /lol-clash/v1/visible
 */
export function getLolClashV1Visible(): Promise<unknown> {
  return get('/lol-clash/v1/visible')
}

/**
 * DeleteLolClashV1Voice
 * @url DELETE /lol-clash/v1/voice
 */
export function deleteLolClashV1Voice(): Promise<unknown> {
  return del('/lol-clash/v1/voice')
}

/**
 * PostLolClashV1Voice
 * @url POST /lol-clash/v1/voice
 */
export function postLolClashV1Voice(): Promise<unknown> {
  return post('/lol-clash/v1/voice')
}

/**
 * DeleteLolClashV1VoiceDelayByDelaySeconds
 * @url DELETE /lol-clash/v1/voice-delay/{delaySeconds}
 * @param params - 路径参数: { delaySeconds }
 */
export function deleteLolClashV1VoiceDelayByDelaySeconds(params: { delaySeconds: string | number }): Promise<unknown> {
  const { delaySeconds } = params

  return del(`/lol-clash/v1/voice-delay/${delaySeconds}`)
}

/**
 * PostLolClashV1VoiceDelayByDelaySeconds
 * @url POST /lol-clash/v1/voice-delay/{delaySeconds}
 * @param params - 路径参数: { delaySeconds }
 */
export function postLolClashV1VoiceDelayByDelaySeconds(params: { delaySeconds: string | number }): Promise<unknown> {
  const { delaySeconds } = params

  return post(`/lol-clash/v1/voice-delay/${delaySeconds}`)
}

/**
 * GetLolClashV1VoiceEnabled
 * @url GET /lol-clash/v1/voice-enabled
 */
export function getLolClashV1VoiceEnabled(): Promise<unknown> {
  return get('/lol-clash/v1/voice-enabled')
}

/**
 * GetLolClashV2PlaymodeRestricted
 * @url GET /lol-clash/v2/playmode-restricted
 */
export function getLolClashV2PlaymodeRestricted(): Promise<unknown> {
  return get('/lol-clash/v2/playmode-restricted')
}
