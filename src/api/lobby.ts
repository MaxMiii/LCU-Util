/**
 * Lobby API 模块 (自动生成)
 * 68 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetLolLobbyV1AutofillDisplayed
 * @url GET /lol-lobby/v1/autofill-displayed
 */
export function getLolLobbyV1AutofillDisplayed(): Promise<unknown> {
  return get('/lol-lobby/v1/autofill-displayed')
}

/**
 * PutLolLobbyV1AutofillDisplayed
 * @url PUT /lol-lobby/v1/autofill-displayed
 */
export function putLolLobbyV1AutofillDisplayed(): Promise<unknown> {
  return put('/lol-lobby/v1/autofill-displayed')
}

/**
 * DeleteLolLobbyV1Clash
 * @url DELETE /lol-lobby/v1/clash
 */
export function deleteLolLobbyV1Clash(): Promise<unknown> {
  return del('/lol-lobby/v1/clash')
}

/**
 * PostLolLobbyV1Clash
 * @url POST /lol-lobby/v1/clash
 */
export function postLolLobbyV1Clash(): Promise<unknown> {
  return post('/lol-lobby/v1/clash')
}

/**
 * GetLolLobbyV1CustomGames
 * @url GET /lol-lobby/v1/custom-games
 */
export function getLolLobbyV1CustomGames(): Promise<unknown> {
  return get('/lol-lobby/v1/custom-games')
}

/**
 * PostLolLobbyV1CustomGamesRefresh
 * @url POST /lol-lobby/v1/custom-games/refresh
 */
export function postLolLobbyV1CustomGamesRefresh(): Promise<unknown> {
  return post('/lol-lobby/v1/custom-games/refresh')
}

/**
 * GetLolLobbyV1CustomGamesById
 * @url GET /lol-lobby/v1/custom-games/{id}
 * @param params - 路径参数: { id }
 */
export function getLolLobbyV1CustomGamesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-lobby/v1/custom-games/${id}`)
}

/**
 * PostLolLobbyV1CustomGamesByIdJoin
 * @url POST /lol-lobby/v1/custom-games/{id}/join
 * @param params - 路径参数: { id }
 */
export function postLolLobbyV1CustomGamesByIdJoin(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-lobby/v1/custom-games/${id}/join`)
}

/**
 * GetLolLobbyV1LobbyAvailability
 * @url GET /lol-lobby/v1/lobby/availability
 */
export function getLolLobbyV1LobbyAvailability(): Promise<unknown> {
  return get('/lol-lobby/v1/lobby/availability')
}

/**
 * GetLolLobbyV1LobbyCountdown
 * @url GET /lol-lobby/v1/lobby/countdown
 */
export function getLolLobbyV1LobbyCountdown(): Promise<unknown> {
  return get('/lol-lobby/v1/lobby/countdown')
}

/**
 * PostLolLobbyV1LobbyCustomBots
 * @url POST /lol-lobby/v1/lobby/custom/bots
 */
export function postLolLobbyV1LobbyCustomBots(): Promise<unknown> {
  return post('/lol-lobby/v1/lobby/custom/bots')
}

/**
 * DeleteLolLobbyV1LobbyCustomBotsBySummonerInternalName
 * @url DELETE /lol-lobby/v1/lobby/custom/bots/{summonerInternalName}
 * @param params - 路径参数: { summonerInternalName }
 */
export function deleteLolLobbyV1LobbyCustomBotsBySummonerInternalName(params: { summonerInternalName: string | number }): Promise<unknown> {
  const { summonerInternalName } = params

  return del(`/lol-lobby/v1/lobby/custom/bots/${summonerInternalName}`)
}

/**
 * PostLolLobbyV1LobbyCustomBotsBySummonerInternalName
 * @url POST /lol-lobby/v1/lobby/custom/bots/{summonerInternalName}
 * @param params - 路径参数: { summonerInternalName }
 */
export function postLolLobbyV1LobbyCustomBotsBySummonerInternalName(params: { summonerInternalName: string | number }): Promise<unknown> {
  const { summonerInternalName } = params

  return post(`/lol-lobby/v1/lobby/custom/bots/${summonerInternalName}`)
}

/**
 * PostLolLobbyV1LobbyCustomCancelChampSelect
 * @url POST /lol-lobby/v1/lobby/custom/cancel-champ-select
 */
export function postLolLobbyV1LobbyCustomCancelChampSelect(): Promise<unknown> {
  return post('/lol-lobby/v1/lobby/custom/cancel-champ-select')
}

/**
 * PostLolLobbyV1LobbyCustomStartChampSelect
 * @url POST /lol-lobby/v1/lobby/custom/start-champ-select
 */
export function postLolLobbyV1LobbyCustomStartChampSelect(): Promise<unknown> {
  return post('/lol-lobby/v1/lobby/custom/start-champ-select')
}

/**
 * PostLolLobbyV1LobbyCustomSwitchTeams
 * @url POST /lol-lobby/v1/lobby/custom/switch-teams
 * @param query - 查询参数: { team }
 */
export function postLolLobbyV1LobbyCustomSwitchTeams(query: { team?: string }): Promise<unknown> {
  return post('/lol-lobby/v1/lobby/custom/switch-teams', query)
}

/**
 * GetLolLobbyV1LobbyInvitations
 * @url GET /lol-lobby/v1/lobby/invitations
 */
export function getLolLobbyV1LobbyInvitations(): Promise<unknown> {
  return get('/lol-lobby/v1/lobby/invitations')
}

/**
 * PostLolLobbyV1LobbyInvitations
 * @url POST /lol-lobby/v1/lobby/invitations
 */
export function postLolLobbyV1LobbyInvitations(): Promise<unknown> {
  return post('/lol-lobby/v1/lobby/invitations')
}

/**
 * GetLolLobbyV1LobbyInvitationsById
 * @url GET /lol-lobby/v1/lobby/invitations/{id}
 * @param params - 路径参数: { id }
 */
export function getLolLobbyV1LobbyInvitationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-lobby/v1/lobby/invitations/${id}`)
}

/**
 * PutLolLobbyV1LobbyMembersLocalMemberPositionPreferences
 * @url PUT /lol-lobby/v1/lobby/members/localMember/position-preferences
 */
export function putLolLobbyV1LobbyMembersLocalMemberPositionPreferences(): Promise<unknown> {
  return put('/lol-lobby/v1/lobby/members/localMember/position-preferences')
}

/**
 * PutLolLobbyV1PartiesActive
 * @url PUT /lol-lobby/v1/parties/active
 */
export function putLolLobbyV1PartiesActive(): Promise<unknown> {
  return put('/lol-lobby/v1/parties/active')
}

/**
 * GetLolLobbyV1PartiesGamemode
 * @url GET /lol-lobby/v1/parties/gamemode
 */
export function getLolLobbyV1PartiesGamemode(): Promise<unknown> {
  return get('/lol-lobby/v1/parties/gamemode')
}

/**
 * PutLolLobbyV1PartiesMetadata
 * @url PUT /lol-lobby/v1/parties/metadata
 */
export function putLolLobbyV1PartiesMetadata(): Promise<unknown> {
  return put('/lol-lobby/v1/parties/metadata')
}

/**
 * GetLolLobbyV1PartiesPlayer
 * @url GET /lol-lobby/v1/parties/player
 */
export function getLolLobbyV1PartiesPlayer(): Promise<unknown> {
  return get('/lol-lobby/v1/parties/player')
}

/**
 * PutLolLobbyV1PartiesQueue
 * @url PUT /lol-lobby/v1/parties/queue
 */
export function putLolLobbyV1PartiesQueue(): Promise<unknown> {
  return put('/lol-lobby/v1/parties/queue')
}

/**
 * PutLolLobbyV1PartiesReady
 * @url PUT /lol-lobby/v1/parties/ready
 */
export function putLolLobbyV1PartiesReady(): Promise<unknown> {
  return put('/lol-lobby/v1/parties/ready')
}

/**
 * PutLolLobbyV1PartiesByPartyIdMembersByPuuidRole
 * @url PUT /lol-lobby/v1/parties/{partyId}/members/{puuid}/role
 * @param params - 路径参数: { partyId, puuid }
 */
export function putLolLobbyV1PartiesByPartyIdMembersByPuuidRole(params: { partyId: string | number, puuid: string | number }): Promise<unknown> {
  const { partyId, puuid } = params

  return put(`/lol-lobby/v1/parties/${partyId}/members/${puuid}/role`)
}

/**
 * GetLolLobbyV1PartyRewards
 * @url GET /lol-lobby/v1/party-rewards
 */
export function getLolLobbyV1PartyRewards(): Promise<unknown> {
  return get('/lol-lobby/v1/party-rewards')
}

/**
 * PostLolLobbyV1TournamentsByIdJoin
 * @url POST /lol-lobby/v1/tournaments/{id}/join
 * @param params - 路径参数: { id }
 */
export function postLolLobbyV1TournamentsByIdJoin(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-lobby/v1/tournaments/${id}/join`)
}

/**
 * GetLolLobbyV2CommsMembers
 * @url GET /lol-lobby/v2/comms/members
 */
export function getLolLobbyV2CommsMembers(): Promise<unknown> {
  return get('/lol-lobby/v2/comms/members')
}

/**
 * GetLolLobbyV2CommsToken
 * @url GET /lol-lobby/v2/comms/token
 */
export function getLolLobbyV2CommsToken(): Promise<unknown> {
  return get('/lol-lobby/v2/comms/token')
}

/**
 * GetLolLobbyV2EligibilityGameSelectEligibilityHash
 * @url GET /lol-lobby/v2/eligibility/game-select-eligibility-hash
 */
export function getLolLobbyV2EligibilityGameSelectEligibilityHash(): Promise<unknown> {
  return get('/lol-lobby/v2/eligibility/game-select-eligibility-hash')
}

/**
 * GetLolLobbyV2EligibilityInitialConfigurationComplete
 * @url GET /lol-lobby/v2/eligibility/initial-configuration-complete
 */
export function getLolLobbyV2EligibilityInitialConfigurationComplete(): Promise<unknown> {
  return get('/lol-lobby/v2/eligibility/initial-configuration-complete')
}

/**
 * PostLolLobbyV2EligibilityParty
 * @url POST /lol-lobby/v2/eligibility/party
 */
export function postLolLobbyV2EligibilityParty(): Promise<unknown> {
  return post('/lol-lobby/v2/eligibility/party')
}

/**
 * PostLolLobbyV2EligibilitySelf
 * @url POST /lol-lobby/v2/eligibility/self
 */
export function postLolLobbyV2EligibilitySelf(): Promise<unknown> {
  return post('/lol-lobby/v2/eligibility/self')
}

/**
 * PostLolLobbyV2EogInvitations
 * @url POST /lol-lobby/v2/eog-invitations
 */
export function postLolLobbyV2EogInvitations(): Promise<unknown> {
  return post('/lol-lobby/v2/eog-invitations')
}

/**
 * DeleteLolLobbyV2Lobby
 * @url DELETE /lol-lobby/v2/lobby
 */
export function deleteLolLobbyV2Lobby(): Promise<unknown> {
  return del('/lol-lobby/v2/lobby')
}

/**
 * GetLolLobbyV2Lobby
 * @url GET /lol-lobby/v2/lobby
 */
export function getLolLobbyV2Lobby(): Promise<unknown> {
  return get('/lol-lobby/v2/lobby')
}

/**
 * PostLolLobbyV2Lobby
 * @url POST /lol-lobby/v2/lobby
 */
export function postLolLobbyV2Lobby(): Promise<unknown> {
  return post('/lol-lobby/v2/lobby')
}

/**
 * GetLolLobbyV2LobbyCustomAvailableBots
 * @url GET /lol-lobby/v2/lobby/custom/available-bots
 */
export function getLolLobbyV2LobbyCustomAvailableBots(): Promise<unknown> {
  return get('/lol-lobby/v2/lobby/custom/available-bots')
}

/**
 * GetLolLobbyV2LobbyCustomBotsEnabled
 * @url GET /lol-lobby/v2/lobby/custom/bots-enabled
 */
export function getLolLobbyV2LobbyCustomBotsEnabled(): Promise<unknown> {
  return get('/lol-lobby/v2/lobby/custom/bots-enabled')
}

/**
 * GetLolLobbyV2LobbyInvitations
 * @url GET /lol-lobby/v2/lobby/invitations
 */
export function getLolLobbyV2LobbyInvitations(): Promise<unknown> {
  return get('/lol-lobby/v2/lobby/invitations')
}

/**
 * PostLolLobbyV2LobbyInvitations
 * @url POST /lol-lobby/v2/lobby/invitations
 */
export function postLolLobbyV2LobbyInvitations(): Promise<unknown> {
  return post('/lol-lobby/v2/lobby/invitations')
}

/**
 * DeleteLolLobbyV2LobbyMatchmakingSearch
 * @url DELETE /lol-lobby/v2/lobby/matchmaking/search
 */
export function deleteLolLobbyV2LobbyMatchmakingSearch(): Promise<unknown> {
  return del('/lol-lobby/v2/lobby/matchmaking/search')
}

/**
 * PostLolLobbyV2LobbyMatchmakingSearch
 * @url POST /lol-lobby/v2/lobby/matchmaking/search
 */
export function postLolLobbyV2LobbyMatchmakingSearch(): Promise<unknown> {
  return post('/lol-lobby/v2/lobby/matchmaking/search')
}

/**
 * GetLolLobbyV2LobbyMatchmakingSearchState
 * @url GET /lol-lobby/v2/lobby/matchmaking/search-state
 */
export function getLolLobbyV2LobbyMatchmakingSearchState(): Promise<unknown> {
  return get('/lol-lobby/v2/lobby/matchmaking/search-state')
}

/**
 * GetLolLobbyV2LobbyMembers
 * @url GET /lol-lobby/v2/lobby/members
 */
export function getLolLobbyV2LobbyMembers(): Promise<unknown> {
  return get('/lol-lobby/v2/lobby/members')
}

/**
 * PutLolLobbyV2LobbyMembersLocalMemberPositionPreferences
 * @url PUT /lol-lobby/v2/lobby/members/localMember/position-preferences
 */
export function putLolLobbyV2LobbyMembersLocalMemberPositionPreferences(): Promise<unknown> {
  return put('/lol-lobby/v2/lobby/members/localMember/position-preferences')
}

/**
 * PostLolLobbyV2LobbyMembersBySummonerIdGrantInvite
 * @url POST /lol-lobby/v2/lobby/members/{summonerId}/grant-invite
 * @param params - 路径参数: { summonerId }
 */
export function postLolLobbyV2LobbyMembersBySummonerIdGrantInvite(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return post(`/lol-lobby/v2/lobby/members/${summonerId}/grant-invite`)
}

/**
 * PostLolLobbyV2LobbyMembersBySummonerIdKick
 * @url POST /lol-lobby/v2/lobby/members/{summonerId}/kick
 * @param params - 路径参数: { summonerId }
 */
export function postLolLobbyV2LobbyMembersBySummonerIdKick(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return post(`/lol-lobby/v2/lobby/members/${summonerId}/kick`)
}

/**
 * PostLolLobbyV2LobbyMembersBySummonerIdPromote
 * @url POST /lol-lobby/v2/lobby/members/{summonerId}/promote
 * @param params - 路径参数: { summonerId }
 */
export function postLolLobbyV2LobbyMembersBySummonerIdPromote(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return post(`/lol-lobby/v2/lobby/members/${summonerId}/promote`)
}

/**
 * PostLolLobbyV2LobbyMembersBySummonerIdRevokeInvite
 * @url POST /lol-lobby/v2/lobby/members/{summonerId}/revoke-invite
 * @param params - 路径参数: { summonerId }
 */
export function postLolLobbyV2LobbyMembersBySummonerIdRevokeInvite(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return post(`/lol-lobby/v2/lobby/members/${summonerId}/revoke-invite`)
}

/**
 * PutLolLobbyV2LobbyPartyType
 * @url PUT /lol-lobby/v2/lobby/partyType
 */
export function putLolLobbyV2LobbyPartyType(): Promise<unknown> {
  return put('/lol-lobby/v2/lobby/partyType')
}

/**
 * PostLolLobbyV2LobbyTeamByTeam
 * @url POST /lol-lobby/v2/lobby/team/{team}
 * @param params - 路径参数: { team }
 */
export function postLolLobbyV2LobbyTeamByTeam(params: { team: string | number }): Promise<unknown> {
  const { team } = params

  return post(`/lol-lobby/v2/lobby/team/${team}`)
}

/**
 * PostLolLobbyV2MatchmakingQuickSearch
 * @url POST /lol-lobby/v2/matchmaking/quick-search
 */
export function postLolLobbyV2MatchmakingQuickSearch(): Promise<unknown> {
  return post('/lol-lobby/v2/matchmaking/quick-search')
}

/**
 * GetLolLobbyV2Notifications
 * @url GET /lol-lobby/v2/notifications
 */
export function getLolLobbyV2Notifications(): Promise<unknown> {
  return get('/lol-lobby/v2/notifications')
}

/**
 * PostLolLobbyV2Notifications
 * @url POST /lol-lobby/v2/notifications
 */
export function postLolLobbyV2Notifications(): Promise<unknown> {
  return post('/lol-lobby/v2/notifications')
}

/**
 * DeleteLolLobbyV2NotificationsByNotificationId
 * @url DELETE /lol-lobby/v2/notifications/{notificationId}
 * @param params - 路径参数: { notificationId }
 */
export function deleteLolLobbyV2NotificationsByNotificationId(params: { notificationId: string | number }): Promise<unknown> {
  const { notificationId } = params

  return del(`/lol-lobby/v2/notifications/${notificationId}`)
}

/**
 * PostLolLobbyV2PartiesOverridesEnabledForTeamBuilderQueues
 * @url POST /lol-lobby/v2/parties/overrides/EnabledForTeamBuilderQueues
 * @param query - 查询参数: { enabledForTeambuilderQueues }
 */
export function postLolLobbyV2PartiesOverridesEnabledForTeamBuilderQueues(query: { enabledForTeambuilderQueues: boolean }): Promise<unknown> {
  return post('/lol-lobby/v2/parties/overrides/EnabledForTeamBuilderQueues', query)
}

/**
 * GetLolLobbyV2PartyActive
 * @url GET /lol-lobby/v2/party-active
 */
export function getLolLobbyV2PartyActive(): Promise<unknown> {
  return get('/lol-lobby/v2/party-active')
}

/**
 * GetLolLobbyV2PartyEogStatus
 * @url GET /lol-lobby/v2/party/eog-status
 */
export function getLolLobbyV2PartyEogStatus(): Promise<unknown> {
  return get('/lol-lobby/v2/party/eog-status')
}

/**
 * PostLolLobbyV2PartyByPartyIdJoin
 * @url POST /lol-lobby/v2/party/{partyId}/join
 * @param params - 路径参数: { partyId }
 */
export function postLolLobbyV2PartyByPartyIdJoin(params: { partyId: string | number }): Promise<unknown> {
  const { partyId } = params

  return post(`/lol-lobby/v2/party/${partyId}/join`)
}

/**
 * PostLolLobbyV2PlayAgain
 * @url POST /lol-lobby/v2/play-again
 */
export function postLolLobbyV2PlayAgain(): Promise<unknown> {
  return post('/lol-lobby/v2/play-again')
}

/**
 * PostLolLobbyV2PlayAgainDecline
 * @url POST /lol-lobby/v2/play-again-decline
 */
export function postLolLobbyV2PlayAgainDecline(): Promise<unknown> {
  return post('/lol-lobby/v2/play-again-decline')
}

/**
 * GetLolLobbyV2ReceivedInvitations
 * @url GET /lol-lobby/v2/received-invitations
 */
export function getLolLobbyV2ReceivedInvitations(): Promise<unknown> {
  return get('/lol-lobby/v2/received-invitations')
}

/**
 * PostLolLobbyV2ReceivedInvitationsByInvitationIdAccept
 * @url POST /lol-lobby/v2/received-invitations/{invitationId}/accept
 * @param params - 路径参数: { invitationId }
 */
export function postLolLobbyV2ReceivedInvitationsByInvitationIdAccept(params: { invitationId: string | number }): Promise<unknown> {
  const { invitationId } = params

  return post(`/lol-lobby/v2/received-invitations/${invitationId}/accept`)
}

/**
 * PostLolLobbyV2ReceivedInvitationsByInvitationIdDecline
 * @url POST /lol-lobby/v2/received-invitations/{invitationId}/decline
 * @param params - 路径参数: { invitationId }
 */
export function postLolLobbyV2ReceivedInvitationsByInvitationIdDecline(params: { invitationId: string | number }): Promise<unknown> {
  const { invitationId } = params

  return post(`/lol-lobby/v2/received-invitations/${invitationId}/decline`)
}

/**
 * GetLolLobbyV2RegistrationStatus
 * @url GET /lol-lobby/v2/registration-status
 */
export function getLolLobbyV2RegistrationStatus(): Promise<unknown> {
  return get('/lol-lobby/v2/registration-status')
}
