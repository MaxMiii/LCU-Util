/**
 * Plugins API 模块 (自动生成)
 * 998 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

/**
 * GetAntiAddictionV1PoliciesByPolicyTypeAntiAddictionState
 * @url GET /anti-addiction/v1/policies/{policyType}/anti-addiction-state
 * @param params - 路径参数: { policyType }
 */
export function getAntiAddictionV1PoliciesByPolicyTypeAntiAddictionState(params: { policyType: string | number }): Promise<unknown> {
  const { policyType } = params

  return get(`/anti-addiction/v1/policies/${policyType}/anti-addiction-state`)
}

/**
 * GetClientConfigV1Config
 * @url GET /client-config/v1/config
 * @param query - 查询参数: { type, app, version, patchline, region, namespace }
 */
export function getClientConfigV1Config(query: { type: 'public' | 'player'; app?: string; version?: string; patchline?: string; region?: string; namespace?: string }): Promise<unknown> {
  return get('/client-config/v1/config', query)
}

/**
 * GetClientConfigV1ConfigByName
 * @url GET /client-config/v1/config/{name}
 * @param params - 路径参数: { name }
 * @param query - 查询参数: { type, app, version, patchline, region }
 */
export function getClientConfigV1ConfigByName(params: { name: string | number }, query: { type: 'public' | 'player'; app?: string; version?: string; patchline?: string; region?: string }): Promise<unknown> {
  const { name } = params

  return get(`/client-config/v1/config/${name}`, query)
}

/**
 * PutClientConfigV1EntitlementsToken
 * @url PUT /client-config/v1/entitlements-token
 */
export function putClientConfigV1EntitlementsToken(): Promise<unknown> {
  return put('/client-config/v1/entitlements-token')
}

/**
 * PutClientConfigV1RefreshConfigStatus
 * @url PUT /client-config/v1/refresh-config-status
 */
export function putClientConfigV1RefreshConfigStatus(): Promise<unknown> {
  return put('/client-config/v1/refresh-config-status')
}

/**
 * GetClientConfigV1StatusByType
 * @url GET /client-config/v1/status/{type}
 * @param params - 路径参数: { type }
 */
export function getClientConfigV1StatusByType(params: { type: string | number }): Promise<unknown> {
  const { type } = params

  return get(`/client-config/v1/status/${type}`)
}

/**
 * GetClientConfigV2ConfigByName
 * @url GET /client-config/v2/config/{name}
 * @param params - 路径参数: { name }
 */
export function getClientConfigV2ConfigByName(params: { name: string | number }): Promise<unknown> {
  const { name } = params

  return get(`/client-config/v2/config/${name}`)
}

/**
 * PutClientConfigV2NamespaceChanges
 * @url PUT /client-config/v2/namespace-changes
 */
export function putClientConfigV2NamespaceChanges(): Promise<unknown> {
  return put('/client-config/v2/namespace-changes')
}

/**
 * GetClientConfigV2NamespaceByNamespace
 * @url GET /client-config/v2/namespace/{namespace}
 * @param params - 路径参数: { namespace }
 */
export function getClientConfigV2NamespaceByNamespace(params: { namespace: string | number }): Promise<unknown> {
  const { namespace } = params

  return get(`/client-config/v2/namespace/${namespace}`)
}

/**
 * GetClientConfigV2NamespaceByNamespacePlayer
 * @url GET /client-config/v2/namespace/{namespace}/player
 * @param params - 路径参数: { namespace }
 */
export function getClientConfigV2NamespaceByNamespacePlayer(params: { namespace: string | number }): Promise<unknown> {
  const { namespace } = params

  return get(`/client-config/v2/namespace/${namespace}/player`)
}

/**
 * GetClientConfigV2NamespaceByNamespacePublic
 * @url GET /client-config/v2/namespace/{namespace}/public
 * @param params - 路径参数: { namespace }
 */
export function getClientConfigV2NamespaceByNamespacePublic(params: { namespace: string | number }): Promise<unknown> {
  const { namespace } = params

  return get(`/client-config/v2/namespace/${namespace}/public`)
}

/**
 * GetEntitlementsV1Token
 * @url GET /entitlements/v1/token
 */
export function getEntitlementsV1Token(): Promise<unknown> {
  return get('/entitlements/v1/token')
}

/**
 * PostLolAccountVerificationV1Authenticate
 * @url POST /lol-account-verification/v1/authenticate
 */
export function postLolAccountVerificationV1Authenticate(): Promise<unknown> {
  return post('/lol-account-verification/v1/authenticate')
}

/**
 * GetLolAccountVerificationV1Device
 * @url GET /lol-account-verification/v1/device
 */
export function getLolAccountVerificationV1Device(): Promise<unknown> {
  return get('/lol-account-verification/v1/device')
}

/**
 * PostLolAccountVerificationV1Invalidate
 * @url POST /lol-account-verification/v1/invalidate
 */
export function postLolAccountVerificationV1Invalidate(): Promise<unknown> {
  return post('/lol-account-verification/v1/invalidate')
}

/**
 * GetLolAccountVerificationV1IsVerified
 * @url GET /lol-account-verification/v1/is-verified
 */
export function getLolAccountVerificationV1IsVerified(): Promise<unknown> {
  return get('/lol-account-verification/v1/is-verified')
}

/**
 * PostLolAccountVerificationV1SendToken
 * @url POST /lol-account-verification/v1/send-token
 */
export function postLolAccountVerificationV1SendToken(): Promise<unknown> {
  return post('/lol-account-verification/v1/send-token')
}

/**
 * PostLolAccountVerificationV1Verify
 * @url POST /lol-account-verification/v1/verify
 */
export function postLolAccountVerificationV1Verify(): Promise<unknown> {
  return post('/lol-account-verification/v1/verify')
}

/**
 * GetLolActiveBoostsV1ActiveBoosts
 * @url GET /lol-active-boosts/v1/active-boosts
 */
export function getLolActiveBoostsV1ActiveBoosts(): Promise<unknown> {
  return get('/lol-active-boosts/v1/active-boosts')
}

/**
 * GetLolAntiAddictionV1AntiAddictionToken
 * @url GET /lol-anti-addiction/v1/anti-addiction-token
 */
export function getLolAntiAddictionV1AntiAddictionToken(): Promise<unknown> {
  return get('/lol-anti-addiction/v1/anti-addiction-token')
}

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

/**
 * GetLolCareerStatsV1ChampionAveragesSeasonBySeasonByChampionIdByPositionByTierByQueue
 * @url GET /lol-career-stats/v1/champion-averages/season/{season}/{championId}/{position}/{tier}/{queue}
 * @param params - 路径参数: { season, championId, position, tier, queue }
 */
export function getLolCareerStatsV1ChampionAveragesSeasonBySeasonByChampionIdByPositionByTierByQueue(params: { season: string | number, championId: string | number, position: string | number, tier: string | number, queue: string | number }): Promise<unknown> {
  const { season, championId, position, tier, queue } = params

  return get(`/lol-career-stats/v1/champion-averages/season/${season}/${championId}/${position}/${tier}/${queue}`)
}

/**
 * GetLolCareerStatsV1ChampionAveragesByChampionIdByPositionByTierByQueue
 * @url GET /lol-career-stats/v1/champion-averages/{championId}/{position}/{tier}/{queue}
 * @param params - 路径参数: { championId, position, tier, queue }
 */
export function getLolCareerStatsV1ChampionAveragesByChampionIdByPositionByTierByQueue(params: { championId: string | number, position: string | number, tier: string | number, queue: string | number }): Promise<unknown> {
  const { championId, position, tier, queue } = params

  return get(`/lol-career-stats/v1/champion-averages/${championId}/${position}/${tier}/${queue}`)
}

/**
 * GetLolCareerStatsV1ChampionExpertsSeasonBySeasonByChampionIdByPosition
 * @url GET /lol-career-stats/v1/champion-experts/season/{season}/{championId}/{position}
 * @param params - 路径参数: { season, championId, position }
 */
export function getLolCareerStatsV1ChampionExpertsSeasonBySeasonByChampionIdByPosition(params: { season: string | number, championId: string | number, position: string | number }): Promise<unknown> {
  const { season, championId, position } = params

  return get(`/lol-career-stats/v1/champion-experts/season/${season}/${championId}/${position}`)
}

/**
 * GetLolCareerStatsV1ChampionExpertsByChampionIdByPosition
 * @url GET /lol-career-stats/v1/champion-experts/{championId}/{position}
 * @param params - 路径参数: { championId, position }
 */
export function getLolCareerStatsV1ChampionExpertsByChampionIdByPosition(params: { championId: string | number, position: string | number }): Promise<unknown> {
  const { championId, position } = params

  return get(`/lol-career-stats/v1/champion-experts/${championId}/${position}`)
}

/**
 * PostLolCareerStatsV1ChampionStatsPercentiles
 * @url POST /lol-career-stats/v1/champion-stats-percentiles
 */
export function postLolCareerStatsV1ChampionStatsPercentiles(): Promise<unknown> {
  return post('/lol-career-stats/v1/champion-stats-percentiles')
}

/**
 * GetLolCareerStatsV1PositionAveragesSeasonBySeasonByPositionByTierByQueue
 * @url GET /lol-career-stats/v1/position-averages/season/{season}/{position}/{tier}/{queue}
 * @param params - 路径参数: { season, position, tier, queue }
 */
export function getLolCareerStatsV1PositionAveragesSeasonBySeasonByPositionByTierByQueue(params: { season: string | number, position: string | number, tier: string | number, queue: string | number }): Promise<unknown> {
  const { season, position, tier, queue } = params

  return get(`/lol-career-stats/v1/position-averages/season/${season}/${position}/${tier}/${queue}`)
}

/**
 * GetLolCareerStatsV1PositionAveragesByPositionByTierByQueue
 * @url GET /lol-career-stats/v1/position-averages/{position}/{tier}/{queue}
 * @param params - 路径参数: { position, tier, queue }
 */
export function getLolCareerStatsV1PositionAveragesByPositionByTierByQueue(params: { position: string | number, tier: string | number, queue: string | number }): Promise<unknown> {
  const { position, tier, queue } = params

  return get(`/lol-career-stats/v1/position-averages/${position}/${tier}/${queue}`)
}

/**
 * GetLolCareerStatsV1PositionExpertsSeasonBySeasonByPosition
 * @url GET /lol-career-stats/v1/position-experts/season/{season}/{position}
 * @param params - 路径参数: { season, position }
 */
export function getLolCareerStatsV1PositionExpertsSeasonBySeasonByPosition(params: { season: string | number, position: string | number }): Promise<unknown> {
  const { season, position } = params

  return get(`/lol-career-stats/v1/position-experts/season/${season}/${position}`)
}

/**
 * GetLolCareerStatsV1PositionExpertsByPosition
 * @url GET /lol-career-stats/v1/position-experts/{position}
 * @param params - 路径参数: { position }
 */
export function getLolCareerStatsV1PositionExpertsByPosition(params: { position: string | number }): Promise<unknown> {
  const { position } = params

  return get(`/lol-career-stats/v1/position-experts/${position}`)
}

/**
 * PostLolCareerStatsV1PositionStatsPercentiles
 * @url POST /lol-career-stats/v1/position-stats-percentiles
 */
export function postLolCareerStatsV1PositionStatsPercentiles(): Promise<unknown> {
  return post('/lol-career-stats/v1/position-stats-percentiles')
}

/**
 * GetLolCareerStatsV1SummonerGamesByPuuid
 * @url GET /lol-career-stats/v1/summoner-games/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolCareerStatsV1SummonerGamesByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-career-stats/v1/summoner-games/${puuid}`)
}

/**
 * GetLolCareerStatsV1SummonerGamesByPuuidSeasonBySeason
 * @url GET /lol-career-stats/v1/summoner-games/{puuid}/season/{season}
 * @param params - 路径参数: { puuid, season }
 */
export function getLolCareerStatsV1SummonerGamesByPuuidSeasonBySeason(params: { puuid: string | number, season: string | number }): Promise<unknown> {
  const { puuid, season } = params

  return get(`/lol-career-stats/v1/summoner-games/${puuid}/season/${season}`)
}

/**
 * GetLolCareerStatsV1SummonerStatsByPuuidBySeasonByQueueByPosition
 * @url GET /lol-career-stats/v1/summoner-stats/{puuid}/{season}/{queue}/{position}
 * @param params - 路径参数: { puuid, season, queue, position }
 * @param query - 查询参数: { championId }
 */
export function getLolCareerStatsV1SummonerStatsByPuuidBySeasonByQueueByPosition(params: { puuid: string | number, season: string | number, queue: string | number, position: string | number }, query: { championId?: number }): Promise<unknown> {
  const { puuid, season, queue, position } = params

  return get(`/lol-career-stats/v1/summoner-stats/${puuid}/${season}/${queue}/${position}`, query)
}

/**
 * GetLolCatalogV1ItemDetails
 * @url GET /lol-catalog/v1/item-details
 * @param query - 查询参数: { inventoryType, itemId }
 */
export function getLolCatalogV1ItemDetails(query: { inventoryType: string; itemId: number }): Promise<unknown> {
  return get('/lol-catalog/v1/item-details', query)
}

/**
 * GetLolCatalogV1Items
 * @url GET /lol-catalog/v1/items
 * @param query - 查询参数: { inventoryType, itemIds }
 */
export function getLolCatalogV1Items(query: { inventoryType: string; itemIds: number[] }): Promise<unknown> {
  return get('/lol-catalog/v1/items', query)
}

/**
 * GetLolCatalogV1ItemsByInventoryType
 * @url GET /lol-catalog/v1/items/{inventoryType}
 * @param params - 路径参数: { inventoryType }
 */
export function getLolCatalogV1ItemsByInventoryType(params: { inventoryType: string | number }): Promise<unknown> {
  const { inventoryType } = params

  return get(`/lol-catalog/v1/items/${inventoryType}`)
}

/**
 * GetLolChallengesV1AvailableQueueIds
 * @url GET /lol-challenges/v1/available-queue-ids
 */
export function getLolChallengesV1AvailableQueueIds(): Promise<unknown> {
  return get('/lol-challenges/v1/available-queue-ids')
}

/**
 * GetLolChallengesV1ChallengesByProductLocalPlayer
 * @url GET /lol-challenges/v1/challenges/{product}/local-player
 * @param params - 路径参数: { product }
 */
export function getLolChallengesV1ChallengesByProductLocalPlayer(params: { product: string | number }): Promise<unknown> {
  const { product } = params

  return get(`/lol-challenges/v1/challenges/${product}/local-player`)
}

/**
 * GetLolChallengesV1LevelPoints
 * @url GET /lol-challenges/v1/level-points
 */
export function getLolChallengesV1LevelPoints(): Promise<unknown> {
  return get('/lol-challenges/v1/level-points')
}

/**
 * GetLolChallengesV1MyUpdatedChallengesByGameId
 * @url GET /lol-challenges/v1/my-updated-challenges/{gameId}
 * @param params - 路径参数: { gameId }
 */
export function getLolChallengesV1MyUpdatedChallengesByGameId(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return get(`/lol-challenges/v1/my-updated-challenges/${gameId}`)
}

/**
 * PostLolChallengesV1ProcessGameByProductByGameId
 * @url POST /lol-challenges/v1/processGame/{product}/{gameId}
 * @param params - 路径参数: { product, gameId }
 */
export function postLolChallengesV1ProcessGameByProductByGameId(params: { product: string | number, gameId: string | number }): Promise<unknown> {
  const { product, gameId } = params

  return post(`/lol-challenges/v1/processGame/${product}/${gameId}`)
}

/**
 * GetLolChallengesV1SuggestedChallengesByProductLocalPlayer
 * @url GET /lol-challenges/v1/suggested-challenges/{product}/local-player
 * @param params - 路径参数: { product }
 */
export function getLolChallengesV1SuggestedChallengesByProductLocalPlayer(params: { product: string | number }): Promise<unknown> {
  const { product } = params

  return get(`/lol-challenges/v1/suggested-challenges/${product}/local-player`)
}

/**
 * GetLolChallengesV1SummaryPlayerDataByProductLocalPlayer
 * @url GET /lol-challenges/v1/summary-player-data/{product}/local-player
 * @param params - 路径参数: { product }
 */
export function getLolChallengesV1SummaryPlayerDataByProductLocalPlayer(params: { product: string | number }): Promise<unknown> {
  const { product } = params

  return get(`/lol-challenges/v1/summary-player-data/${product}/local-player`)
}

/**
 * GetLolChallengesV1SummaryPlayerDataByProductPlayerByPuuid
 * @url GET /lol-challenges/v1/summary-player-data/{product}/player/{puuid}
 * @param params - 路径参数: { product, puuid }
 */
export function getLolChallengesV1SummaryPlayerDataByProductPlayerByPuuid(params: { product: string | number, puuid: string | number }): Promise<unknown> {
  const { product, puuid } = params

  return get(`/lol-challenges/v1/summary-player-data/${product}/player/${puuid}`)
}

/**
 * GetLolChallengesV1SummaryPlayersDataByProductPlayers
 * @url GET /lol-challenges/v1/summary-players-data/{product}/players
 * @param params - 路径参数: { product }
 * @param query - 查询参数: { puuids }
 */
export function getLolChallengesV1SummaryPlayersDataByProductPlayers(params: { product: string | number }, query: { puuids: string[] }): Promise<unknown> {
  const { product } = params

  return get(`/lol-challenges/v1/summary-players-data/${product}/players`, query)
}

/**
 * GetLolChallengesV1TitlesLocalPlayer
 * @url GET /lol-challenges/v1/titles/local-player
 */
export function getLolChallengesV1TitlesLocalPlayer(): Promise<unknown> {
  return get('/lol-challenges/v1/titles/local-player')
}

/**
 * PostLolChallengesV1UpdatePlayerPreferencesByProduct
 * @url POST /lol-challenges/v1/update-player-preferences/{product}
 * @param params - 路径参数: { product }
 */
export function postLolChallengesV1UpdatePlayerPreferencesByProduct(params: { product: string | number }): Promise<unknown> {
  const { product } = params

  return post(`/lol-challenges/v1/update-player-preferences/${product}`)
}

/**
 * GetLolChallengesV1UpdatedChallengeByGameIdByPuuid
 * @url GET /lol-challenges/v1/updated-challenge/{gameId}/{puuid}
 * @param params - 路径参数: { gameId, puuid }
 */
export function getLolChallengesV1UpdatedChallengeByGameIdByPuuid(params: { gameId: string | number, puuid: string | number }): Promise<unknown> {
  const { gameId, puuid } = params

  return get(`/lol-challenges/v1/updated-challenge/${gameId}/${puuid}`)
}

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

/**
 * GetLolChatV1BlockedPlayers
 * @url GET /lol-chat/v1/blocked-players
 */
export function getLolChatV1BlockedPlayers(): Promise<unknown> {
  return get('/lol-chat/v1/blocked-players')
}

/**
 * PostLolChatV1BlockedPlayers
 * @url POST /lol-chat/v1/blocked-players
 */
export function postLolChatV1BlockedPlayers(): Promise<unknown> {
  return post('/lol-chat/v1/blocked-players')
}

/**
 * DeleteLolChatV1BlockedPlayersById
 * @url DELETE /lol-chat/v1/blocked-players/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1BlockedPlayersById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/blocked-players/${id}`)
}

/**
 * GetLolChatV1BlockedPlayersById
 * @url GET /lol-chat/v1/blocked-players/{id}
 * @param params - 路径参数: { id }
 */
export function getLolChatV1BlockedPlayersById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/blocked-players/${id}`)
}

/**
 * GetLolChatV1Config
 * @url GET /lol-chat/v1/config
 */
export function getLolChatV1Config(): Promise<unknown> {
  return get('/lol-chat/v1/config')
}

/**
 * GetLolChatV1Conversations
 * @url GET /lol-chat/v1/conversations
 */
export function getLolChatV1Conversations(): Promise<unknown> {
  return get('/lol-chat/v1/conversations')
}

/**
 * PostLolChatV1Conversations
 * @url POST /lol-chat/v1/conversations
 */
export function postLolChatV1Conversations(): Promise<unknown> {
  return post('/lol-chat/v1/conversations')
}

/**
 * DeleteLolChatV1ConversationsActive
 * @url DELETE /lol-chat/v1/conversations/active
 */
export function deleteLolChatV1ConversationsActive(): Promise<unknown> {
  return del('/lol-chat/v1/conversations/active')
}

/**
 * GetLolChatV1ConversationsActive
 * @url GET /lol-chat/v1/conversations/active
 */
export function getLolChatV1ConversationsActive(): Promise<unknown> {
  return get('/lol-chat/v1/conversations/active')
}

/**
 * PutLolChatV1ConversationsActive
 * @url PUT /lol-chat/v1/conversations/active
 */
export function putLolChatV1ConversationsActive(): Promise<unknown> {
  return put('/lol-chat/v1/conversations/active')
}

/**
 * GetLolChatV1ConversationsNotify
 * @url GET /lol-chat/v1/conversations/notify
 */
export function getLolChatV1ConversationsNotify(): Promise<unknown> {
  return get('/lol-chat/v1/conversations/notify')
}

/**
 * DeleteLolChatV1ConversationsById
 * @url DELETE /lol-chat/v1/conversations/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1ConversationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/conversations/${id}`)
}

/**
 * GetLolChatV1ConversationsById
 * @url GET /lol-chat/v1/conversations/{id}
 * @param params - 路径参数: { id }
 */
export function getLolChatV1ConversationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/conversations/${id}`)
}

/**
 * PutLolChatV1ConversationsById
 * @url PUT /lol-chat/v1/conversations/{id}
 * @param params - 路径参数: { id }
 */
export function putLolChatV1ConversationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-chat/v1/conversations/${id}`)
}

/**
 * PostLolChatV1ConversationsByIdClosed
 * @url POST /lol-chat/v1/conversations/{id}/closed
 * @param params - 路径参数: { id }
 */
export function postLolChatV1ConversationsByIdClosed(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-chat/v1/conversations/${id}/closed`)
}

/**
 * PutLolChatV1ConversationsByIdClosed
 * @url PUT /lol-chat/v1/conversations/{id}/closed
 * @param params - 路径参数: { id }
 */
export function putLolChatV1ConversationsByIdClosed(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-chat/v1/conversations/${id}/closed`)
}

/**
 * DeleteLolChatV1ConversationsByIdMessages
 * @url DELETE /lol-chat/v1/conversations/{id}/messages
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1ConversationsByIdMessages(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/conversations/${id}/messages`)
}

/**
 * GetLolChatV1ConversationsByIdMessages
 * @url GET /lol-chat/v1/conversations/{id}/messages
 * @param params - 路径参数: { id }
 */
export function getLolChatV1ConversationsByIdMessages(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/conversations/${id}/messages`)
}

/**
 * PostLolChatV1ConversationsByIdMessages
 * @url POST /lol-chat/v1/conversations/{id}/messages
 * @param params - 路径参数: { id }
 */
export function postLolChatV1ConversationsByIdMessages(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-chat/v1/conversations/${id}/messages`)
}

/**
 * GetLolChatV1ConversationsByIdParticipants
 * @url GET /lol-chat/v1/conversations/{id}/participants
 * @param params - 路径参数: { id }
 */
export function getLolChatV1ConversationsByIdParticipants(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/conversations/${id}/participants`)
}

/**
 * PostLolChatV1ConversationsByIdParticipants
 * @url POST /lol-chat/v1/conversations/{id}/participants
 * @param params - 路径参数: { id }
 */
export function postLolChatV1ConversationsByIdParticipants(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-chat/v1/conversations/${id}/participants`)
}

/**
 * GetLolChatV1ConversationsByIdParticipantsByPid
 * @url GET /lol-chat/v1/conversations/{id}/participants/{pid}
 * @param params - 路径参数: { id, pid }
 */
export function getLolChatV1ConversationsByIdParticipantsByPid(params: { id: string | number, pid: string | number }): Promise<unknown> {
  const { id, pid } = params

  return get(`/lol-chat/v1/conversations/${id}/participants/${pid}`)
}

/**
 * GetLolChatV1Errors
 * @url GET /lol-chat/v1/errors
 */
export function getLolChatV1Errors(): Promise<unknown> {
  return get('/lol-chat/v1/errors')
}

/**
 * DeleteLolChatV1ErrorsById
 * @url DELETE /lol-chat/v1/errors/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1ErrorsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/errors/${id}`)
}

/**
 * GetLolChatV1FriendCounts
 * @url GET /lol-chat/v1/friend-counts
 */
export function getLolChatV1FriendCounts(): Promise<unknown> {
  return get('/lol-chat/v1/friend-counts')
}

/**
 * GetLolChatV1FriendExistsBySummonerId
 * @url GET /lol-chat/v1/friend-exists/{summonerId}
 * @param params - 路径参数: { summonerId }
 */
export function getLolChatV1FriendExistsBySummonerId(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-chat/v1/friend-exists/${summonerId}`)
}

/**
 * GetLolChatV1FriendGroups
 * @url GET /lol-chat/v1/friend-groups
 */
export function getLolChatV1FriendGroups(): Promise<unknown> {
  return get('/lol-chat/v1/friend-groups')
}

/**
 * PostLolChatV1FriendGroups
 * @url POST /lol-chat/v1/friend-groups
 */
export function postLolChatV1FriendGroups(): Promise<unknown> {
  return post('/lol-chat/v1/friend-groups')
}

/**
 * PutLolChatV1FriendGroupsOrder
 * @url PUT /lol-chat/v1/friend-groups/order
 */
export function putLolChatV1FriendGroupsOrder(): Promise<unknown> {
  return put('/lol-chat/v1/friend-groups/order')
}

/**
 * DeleteLolChatV1FriendGroupsById
 * @url DELETE /lol-chat/v1/friend-groups/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1FriendGroupsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/friend-groups/${id}`)
}

/**
 * GetLolChatV1FriendGroupsById
 * @url GET /lol-chat/v1/friend-groups/{id}
 * @param params - 路径参数: { id }
 */
export function getLolChatV1FriendGroupsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/friend-groups/${id}`)
}

/**
 * PutLolChatV1FriendGroupsById
 * @url PUT /lol-chat/v1/friend-groups/{id}
 * @param params - 路径参数: { id }
 */
export function putLolChatV1FriendGroupsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-chat/v1/friend-groups/${id}`)
}

/**
 * GetLolChatV1FriendGroupsByIdFriends
 * @url GET /lol-chat/v1/friend-groups/{id}/friends
 * @param params - 路径参数: { id }
 */
export function getLolChatV1FriendGroupsByIdFriends(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/friend-groups/${id}/friends`)
}

/**
 * GetLolChatV1FriendRequests
 * @url GET /lol-chat/v1/friend-requests
 */
export function getLolChatV1FriendRequests(): Promise<unknown> {
  return get('/lol-chat/v1/friend-requests')
}

/**
 * PostLolChatV1FriendRequests
 * @url POST /lol-chat/v1/friend-requests
 */
export function postLolChatV1FriendRequests(): Promise<unknown> {
  return post('/lol-chat/v1/friend-requests')
}

/**
 * DeleteLolChatV1FriendRequestsById
 * @url DELETE /lol-chat/v1/friend-requests/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1FriendRequestsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/friend-requests/${id}`)
}

/**
 * PutLolChatV1FriendRequestsById
 * @url PUT /lol-chat/v1/friend-requests/{id}
 * @param params - 路径参数: { id }
 */
export function putLolChatV1FriendRequestsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-chat/v1/friend-requests/${id}`)
}

/**
 * GetLolChatV1Friends
 * @url GET /lol-chat/v1/friends
 */
export function getLolChatV1Friends(): Promise<unknown> {
  return get('/lol-chat/v1/friends')
}

/**
 * DeleteLolChatV1FriendsById
 * @url DELETE /lol-chat/v1/friends/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolChatV1FriendsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-chat/v1/friends/${id}`)
}

/**
 * GetLolChatV1FriendsById
 * @url GET /lol-chat/v1/friends/{id}
 * @param params - 路径参数: { id }
 */
export function getLolChatV1FriendsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-chat/v1/friends/${id}`)
}

/**
 * PutLolChatV1FriendsById
 * @url PUT /lol-chat/v1/friends/{id}
 * @param params - 路径参数: { id }
 */
export function putLolChatV1FriendsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-chat/v1/friends/${id}`)
}

/**
 * GetLolChatV1Me
 * @url GET /lol-chat/v1/me
 */
export function getLolChatV1Me(): Promise<unknown> {
  return get('/lol-chat/v1/me')
}

/**
 * PutLolChatV1Me
 * @url PUT /lol-chat/v1/me
 */
export function putLolChatV1Me(): Promise<unknown> {
  return put('/lol-chat/v1/me')
}

/**
 * GetLolChatV1Resources
 * @url GET /lol-chat/v1/resources
 */
export function getLolChatV1Resources(): Promise<unknown> {
  return get('/lol-chat/v1/resources')
}

/**
 * DeleteLolChatV1Session
 * @url DELETE /lol-chat/v1/session
 */
export function deleteLolChatV1Session(): Promise<unknown> {
  return del('/lol-chat/v1/session')
}

/**
 * GetLolChatV1Session
 * @url GET /lol-chat/v1/session
 */
export function getLolChatV1Session(): Promise<unknown> {
  return get('/lol-chat/v1/session')
}

/**
 * PostLolChatV1SessionPlain
 * @url POST /lol-chat/v1/session/plain
 */
export function postLolChatV1SessionPlain(): Promise<unknown> {
  return post('/lol-chat/v1/session/plain')
}

/**
 * PostLolChatV1SessionRso
 * @url POST /lol-chat/v1/session/rso
 */
export function postLolChatV1SessionRso(): Promise<unknown> {
  return post('/lol-chat/v1/session/rso')
}

/**
 * GetLolChatV1Settings
 * @url GET /lol-chat/v1/settings
 */
export function getLolChatV1Settings(): Promise<unknown> {
  return get('/lol-chat/v1/settings')
}

/**
 * PutLolChatV1Settings
 * @url PUT /lol-chat/v1/settings
 * @param query - 查询参数: { doAsync }
 */
export function putLolChatV1Settings(query: { doAsync?: boolean }): Promise<unknown> {
  return put('/lol-chat/v1/settings', query)
}

/**
 * DeleteLolChatV1SettingsByKey
 * @url DELETE /lol-chat/v1/settings/{key}
 * @param params - 路径参数: { key }
 * @param query - 查询参数: { doAsync }
 */
export function deleteLolChatV1SettingsByKey(params: { key: string | number }, query: { doAsync?: boolean }): Promise<unknown> {
  const { key } = params

  return del(`/lol-chat/v1/settings/${key}`, query)
}

/**
 * GetLolChatV1SettingsByKey
 * @url GET /lol-chat/v1/settings/{key}
 * @param params - 路径参数: { key }
 */
export function getLolChatV1SettingsByKey(params: { key: string | number }): Promise<unknown> {
  const { key } = params

  return get(`/lol-chat/v1/settings/${key}`)
}

/**
 * PutLolChatV1SettingsByKey
 * @url PUT /lol-chat/v1/settings/{key}
 * @param params - 路径参数: { key }
 * @param query - 查询参数: { doAsync }
 */
export function putLolChatV1SettingsByKey(params: { key: string | number }, query: { doAsync?: boolean }): Promise<unknown> {
  const { key } = params

  return put(`/lol-chat/v1/settings/${key}`, query)
}

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

/**
 * GetLolClientConfigV3ClientConfigByName
 * @url GET /lol-client-config/v3/client-config/{name}
 * @param params - 路径参数: { name }
 */
export function getLolClientConfigV3ClientConfigByName(params: { name: string | number }): Promise<unknown> {
  const { name } = params

  return get(`/lol-client-config/v3/client-config/${name}`)
}

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

/**
 * GetLolContentTargetingV1Filters
 * @url GET /lol-content-targeting/v1/filters
 */
export function getLolContentTargetingV1Filters(): Promise<unknown> {
  return get('/lol-content-targeting/v1/filters')
}

/**
 * GetLolContentTargetingV1Locale
 * @url GET /lol-content-targeting/v1/locale
 */
export function getLolContentTargetingV1Locale(): Promise<unknown> {
  return get('/lol-content-targeting/v1/locale')
}

/**
 * GetLolContentTargetingV1ProtectedFilters
 * @url GET /lol-content-targeting/v1/protected_filters
 */
export function getLolContentTargetingV1ProtectedFilters(): Promise<unknown> {
  return get('/lol-content-targeting/v1/protected_filters')
}

/**
 * PutLolContentTargetingV1TftExperimentBucket
 * @url PUT /lol-content-targeting/v1/tft_experiment_bucket
 */
export function putLolContentTargetingV1TftExperimentBucket(): Promise<unknown> {
  return put('/lol-content-targeting/v1/tft_experiment_bucket')
}

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

/**
 * PostLolEmailVerificationV1ConfirmEmail
 * @url POST /lol-email-verification/v1/confirm-email
 */
export function postLolEmailVerificationV1ConfirmEmail(): Promise<unknown> {
  return post('/lol-email-verification/v1/confirm-email')
}

/**
 * GetLolEmailVerificationV1Email
 * @url GET /lol-email-verification/v1/email
 */
export function getLolEmailVerificationV1Email(): Promise<unknown> {
  return get('/lol-email-verification/v1/email')
}

/**
 * PutLolEmailVerificationV1Email
 * @url PUT /lol-email-verification/v1/email
 */
export function putLolEmailVerificationV1Email(): Promise<unknown> {
  return put('/lol-email-verification/v1/email')
}

/**
 * GetLolEndOfGameV1ChampionMasteryUpdates
 * @url GET /lol-end-of-game/v1/champion-mastery-updates
 */
export function getLolEndOfGameV1ChampionMasteryUpdates(): Promise<unknown> {
  return get('/lol-end-of-game/v1/champion-mastery-updates')
}

/**
 * GetLolEndOfGameV1EogStatsBlock
 * @url GET /lol-end-of-game/v1/eog-stats-block
 */
export function getLolEndOfGameV1EogStatsBlock(): Promise<unknown> {
  return get('/lol-end-of-game/v1/eog-stats-block')
}

/**
 * GetLolEndOfGameV1GameclientEogStatsBlock
 * @url GET /lol-end-of-game/v1/gameclient-eog-stats-block
 */
export function getLolEndOfGameV1GameclientEogStatsBlock(): Promise<unknown> {
  return get('/lol-end-of-game/v1/gameclient-eog-stats-block')
}

/**
 * PostLolEndOfGameV1GameclientEogStatsBlock
 * @url POST /lol-end-of-game/v1/gameclient-eog-stats-block
 */
export function postLolEndOfGameV1GameclientEogStatsBlock(): Promise<unknown> {
  return post('/lol-end-of-game/v1/gameclient-eog-stats-block')
}

/**
 * GetLolEndOfGameV1ReportedPlayers
 * @url GET /lol-end-of-game/v1/reported-players
 */
export function getLolEndOfGameV1ReportedPlayers(): Promise<unknown> {
  return get('/lol-end-of-game/v1/reported-players')
}

/**
 * PostLolEndOfGameV1StateDismissStats
 * @url POST /lol-end-of-game/v1/state/dismiss-stats
 */
export function postLolEndOfGameV1StateDismissStats(): Promise<unknown> {
  return post('/lol-end-of-game/v1/state/dismiss-stats')
}

/**
 * GetLolEndOfGameV1TftEogStats
 * @url GET /lol-end-of-game/v1/tft-eog-stats
 */
export function getLolEndOfGameV1TftEogStats(): Promise<unknown> {
  return get('/lol-end-of-game/v1/tft-eog-stats')
}

/**
 * PostLolEndOfGameV2PlayerComplaints
 * @url POST /lol-end-of-game/v2/player-complaints
 */
export function postLolEndOfGameV2PlayerComplaints(): Promise<unknown> {
  return post('/lol-end-of-game/v2/player-complaints')
}

/**
 * GetLolEsportStreamNotificationsV1LiveStreams
 * @url GET /lol-esport-stream-notifications/v1/live-streams
 */
export function getLolEsportStreamNotificationsV1LiveStreams(): Promise<unknown> {
  return get('/lol-esport-stream-notifications/v1/live-streams')
}

/**
 * PostLolEsportStreamNotificationsV1SendStats
 * @url POST /lol-esport-stream-notifications/v1/send-stats
 */
export function postLolEsportStreamNotificationsV1SendStats(): Promise<unknown> {
  return post('/lol-esport-stream-notifications/v1/send-stats')
}

/**
 * GetLolEsportStreamNotificationsV1StreamUrl
 * @url GET /lol-esport-stream-notifications/v1/stream-url
 */
export function getLolEsportStreamNotificationsV1StreamUrl(): Promise<unknown> {
  return get('/lol-esport-stream-notifications/v1/stream-url')
}

/**
 * GetLolGameClientChatV1Buddies
 * @url GET /lol-game-client-chat/v1/buddies
 */
export function getLolGameClientChatV1Buddies(): Promise<unknown> {
  return get('/lol-game-client-chat/v1/buddies')
}

/**
 * GetLolGameClientChatV1IgnoredSummoners
 * @url GET /lol-game-client-chat/v1/ignored-summoners
 */
export function getLolGameClientChatV1IgnoredSummoners(): Promise<unknown> {
  return get('/lol-game-client-chat/v1/ignored-summoners')
}

/**
 * PostLolGameClientChatV1InstantMessages
 * @url POST /lol-game-client-chat/v1/instant-messages
 * @param query - 查询参数: { summonerName, message }
 */
export function postLolGameClientChatV1InstantMessages(query: { summonerName: string; message: string }): Promise<unknown> {
  return post('/lol-game-client-chat/v1/instant-messages', query)
}

/**
 * GetLolGameClientChatV1MutedSummoners
 * @url GET /lol-game-client-chat/v1/muted-summoners
 */
export function getLolGameClientChatV1MutedSummoners(): Promise<unknown> {
  return get('/lol-game-client-chat/v1/muted-summoners')
}

/**
 * PostLolGameClientChatV1PartyMessages
 * @url POST /lol-game-client-chat/v1/party-messages
 * @param query - 查询参数: { message }
 */
export function postLolGameClientChatV1PartyMessages(query: { message: string }): Promise<unknown> {
  return post('/lol-game-client-chat/v1/party-messages', query)
}

/**
 * GetLolGameQueuesV1Custom
 * @url GET /lol-game-queues/v1/custom
 */
export function getLolGameQueuesV1Custom(): Promise<unknown> {
  return get('/lol-game-queues/v1/custom')
}

/**
 * GetLolGameQueuesV1CustomNonDefault
 * @url GET /lol-game-queues/v1/custom-non-default
 */
export function getLolGameQueuesV1CustomNonDefault(): Promise<unknown> {
  return get('/lol-game-queues/v1/custom-non-default')
}

/**
 * GetLolGameQueuesV1GameTypeConfigByGameTypeConfigId
 * @url GET /lol-game-queues/v1/game-type-config/{gameTypeConfigId}
 * @param params - 路径参数: { gameTypeConfigId }
 */
export function getLolGameQueuesV1GameTypeConfigByGameTypeConfigId(params: { gameTypeConfigId: string | number }): Promise<unknown> {
  const { gameTypeConfigId } = params

  return get(`/lol-game-queues/v1/game-type-config/${gameTypeConfigId}`)
}

/**
 * GetLolGameQueuesV1GameTypeConfigByGameTypeConfigIdMapByMapId
 * @url GET /lol-game-queues/v1/game-type-config/{gameTypeConfigId}/map/{mapId}
 * @param params - 路径参数: { gameTypeConfigId, mapId }
 */
export function getLolGameQueuesV1GameTypeConfigByGameTypeConfigIdMapByMapId(params: { gameTypeConfigId: string | number, mapId: string | number }): Promise<unknown> {
  const { gameTypeConfigId, mapId } = params

  return get(`/lol-game-queues/v1/game-type-config/${gameTypeConfigId}/map/${mapId}`)
}

/**
 * GetLolGameQueuesV1Queues
 * @url GET /lol-game-queues/v1/queues
 */
export function getLolGameQueuesV1Queues(): Promise<unknown> {
  return get('/lol-game-queues/v1/queues')
}

/**
 * GetLolGameQueuesV1QueuesTypeByQueueType
 * @url GET /lol-game-queues/v1/queues/type/{queueType}
 * @param params - 路径参数: { queueType }
 */
export function getLolGameQueuesV1QueuesTypeByQueueType(params: { queueType: string | number }): Promise<unknown> {
  const { queueType } = params

  return get(`/lol-game-queues/v1/queues/type/${queueType}`)
}

/**
 * GetLolGameQueuesV1QueuesById
 * @url GET /lol-game-queues/v1/queues/{id}
 * @param params - 路径参数: { id }
 */
export function getLolGameQueuesV1QueuesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-game-queues/v1/queues/${id}`)
}

/**
 * GetLolGameSettingsV1Didreset
 * @url GET /lol-game-settings/v1/didreset
 */
export function getLolGameSettingsV1Didreset(): Promise<unknown> {
  return get('/lol-game-settings/v1/didreset')
}

/**
 * GetLolGameSettingsV1GameSettings
 * @url GET /lol-game-settings/v1/game-settings
 */
export function getLolGameSettingsV1GameSettings(): Promise<unknown> {
  return get('/lol-game-settings/v1/game-settings')
}

/**
 * PatchLolGameSettingsV1GameSettings
 * @url PATCH /lol-game-settings/v1/game-settings
 */
export function patchLolGameSettingsV1GameSettings(): Promise<unknown> {
  return patch('/lol-game-settings/v1/game-settings')
}

/**
 * GetLolGameSettingsV1GameSettingsSchema
 * @url GET /lol-game-settings/v1/game-settings-schema
 */
export function getLolGameSettingsV1GameSettingsSchema(): Promise<unknown> {
  return get('/lol-game-settings/v1/game-settings-schema')
}

/**
 * GetLolGameSettingsV1InputSettings
 * @url GET /lol-game-settings/v1/input-settings
 */
export function getLolGameSettingsV1InputSettings(): Promise<unknown> {
  return get('/lol-game-settings/v1/input-settings')
}

/**
 * PatchLolGameSettingsV1InputSettings
 * @url PATCH /lol-game-settings/v1/input-settings
 */
export function patchLolGameSettingsV1InputSettings(): Promise<unknown> {
  return patch('/lol-game-settings/v1/input-settings')
}

/**
 * GetLolGameSettingsV1InputSettingsSchema
 * @url GET /lol-game-settings/v1/input-settings-schema
 */
export function getLolGameSettingsV1InputSettingsSchema(): Promise<unknown> {
  return get('/lol-game-settings/v1/input-settings-schema')
}

/**
 * GetLolGameSettingsV1Ready
 * @url GET /lol-game-settings/v1/ready
 */
export function getLolGameSettingsV1Ready(): Promise<unknown> {
  return get('/lol-game-settings/v1/ready')
}

/**
 * PostLolGameSettingsV1ReloadPostGame
 * @url POST /lol-game-settings/v1/reload-post-game
 */
export function postLolGameSettingsV1ReloadPostGame(): Promise<unknown> {
  return post('/lol-game-settings/v1/reload-post-game')
}

/**
 * PostLolGameSettingsV1Save
 * @url POST /lol-game-settings/v1/save
 */
export function postLolGameSettingsV1Save(): Promise<unknown> {
  return post('/lol-game-settings/v1/save')
}

/**
 * PostLolGameflowV1AckFailedToLaunch
 * @url POST /lol-gameflow/v1/ack-failed-to-launch
 */
export function postLolGameflowV1AckFailedToLaunch(): Promise<unknown> {
  return post('/lol-gameflow/v1/ack-failed-to-launch')
}

/**
 * GetLolGameflowV1ActivePatcherLock
 * @url GET /lol-gameflow/v1/active-patcher-lock
 */
export function getLolGameflowV1ActivePatcherLock(): Promise<unknown> {
  return get('/lol-gameflow/v1/active-patcher-lock')
}

/**
 * GetLolGameflowV1Availability
 * @url GET /lol-gameflow/v1/availability
 */
export function getLolGameflowV1Availability(): Promise<unknown> {
  return get('/lol-gameflow/v1/availability')
}

/**
 * GetLolGameflowV1BasicTutorial
 * @url GET /lol-gameflow/v1/basic-tutorial
 */
export function getLolGameflowV1BasicTutorial(): Promise<unknown> {
  return get('/lol-gameflow/v1/basic-tutorial')
}

/**
 * PostLolGameflowV1BasicTutorialStart
 * @url POST /lol-gameflow/v1/basic-tutorial/start
 */
export function postLolGameflowV1BasicTutorialStart(): Promise<unknown> {
  return post('/lol-gameflow/v1/basic-tutorial/start')
}

/**
 * GetLolGameflowV1BattleTraining
 * @url GET /lol-gameflow/v1/battle-training
 */
export function getLolGameflowV1BattleTraining(): Promise<unknown> {
  return get('/lol-gameflow/v1/battle-training')
}

/**
 * PostLolGameflowV1BattleTrainingStart
 * @url POST /lol-gameflow/v1/battle-training/start
 */
export function postLolGameflowV1BattleTrainingStart(): Promise<unknown> {
  return post('/lol-gameflow/v1/battle-training/start')
}

/**
 * PostLolGameflowV1BattleTrainingStop
 * @url POST /lol-gameflow/v1/battle-training/stop
 */
export function postLolGameflowV1BattleTrainingStop(): Promise<unknown> {
  return post('/lol-gameflow/v1/battle-training/stop')
}

/**
 * PostLolGameflowV1ClientReceivedMessage
 * @url POST /lol-gameflow/v1/client-received-message
 */
export function postLolGameflowV1ClientReceivedMessage(): Promise<unknown> {
  return post('/lol-gameflow/v1/client-received-message')
}

/**
 * PostLolGameflowV1EarlyExit
 * @url POST /lol-gameflow/v1/early-exit
 */
export function postLolGameflowV1EarlyExit(): Promise<unknown> {
  return post('/lol-gameflow/v1/early-exit')
}

/**
 * DeleteLolGameflowV1EarlyExitNotificationsEog
 * @url DELETE /lol-gameflow/v1/early-exit-notifications/eog
 */
export function deleteLolGameflowV1EarlyExitNotificationsEog(): Promise<unknown> {
  return del('/lol-gameflow/v1/early-exit-notifications/eog')
}

/**
 * GetLolGameflowV1EarlyExitNotificationsEog
 * @url GET /lol-gameflow/v1/early-exit-notifications/eog
 */
export function getLolGameflowV1EarlyExitNotificationsEog(): Promise<unknown> {
  return get('/lol-gameflow/v1/early-exit-notifications/eog')
}

/**
 * DeleteLolGameflowV1EarlyExitNotificationsEogByKey
 * @url DELETE /lol-gameflow/v1/early-exit-notifications/eog/{key}
 * @param params - 路径参数: { key }
 */
export function deleteLolGameflowV1EarlyExitNotificationsEogByKey(params: { key: string | number }): Promise<unknown> {
  const { key } = params

  return del(`/lol-gameflow/v1/early-exit-notifications/eog/${key}`)
}

/**
 * DeleteLolGameflowV1EarlyExitNotificationsMissions
 * @url DELETE /lol-gameflow/v1/early-exit-notifications/missions
 */
export function deleteLolGameflowV1EarlyExitNotificationsMissions(): Promise<unknown> {
  return del('/lol-gameflow/v1/early-exit-notifications/missions')
}

/**
 * GetLolGameflowV1EarlyExitNotificationsMissions
 * @url GET /lol-gameflow/v1/early-exit-notifications/missions
 */
export function getLolGameflowV1EarlyExitNotificationsMissions(): Promise<unknown> {
  return get('/lol-gameflow/v1/early-exit-notifications/missions')
}

/**
 * DeleteLolGameflowV1EarlyExitNotificationsMissionsByKey
 * @url DELETE /lol-gameflow/v1/early-exit-notifications/missions/{key}
 * @param params - 路径参数: { key }
 */
export function deleteLolGameflowV1EarlyExitNotificationsMissionsByKey(params: { key: string | number }): Promise<unknown> {
  const { key } = params

  return del(`/lol-gameflow/v1/early-exit-notifications/missions/${key}`)
}

/**
 * GetLolGameflowV1ExtraGameClientArgs
 * @url GET /lol-gameflow/v1/extra-game-client-args
 */
export function getLolGameflowV1ExtraGameClientArgs(): Promise<unknown> {
  return get('/lol-gameflow/v1/extra-game-client-args')
}

/**
 * PostLolGameflowV1ExtraGameClientArgs
 * @url POST /lol-gameflow/v1/extra-game-client-args
 */
export function postLolGameflowV1ExtraGameClientArgs(): Promise<unknown> {
  return post('/lol-gameflow/v1/extra-game-client-args')
}

/**
 * GetLolGameflowV1GameflowMetadataPlayerStatus
 * @url GET /lol-gameflow/v1/gameflow-metadata/player-status
 */
export function getLolGameflowV1GameflowMetadataPlayerStatus(): Promise<unknown> {
  return get('/lol-gameflow/v1/gameflow-metadata/player-status')
}

/**
 * PostLolGameflowV1GameflowMetadataPlayerStatus
 * @url POST /lol-gameflow/v1/gameflow-metadata/player-status
 */
export function postLolGameflowV1GameflowMetadataPlayerStatus(): Promise<unknown> {
  return post('/lol-gameflow/v1/gameflow-metadata/player-status')
}

/**
 * GetLolGameflowV1GameflowMetadataRegistrationStatus
 * @url GET /lol-gameflow/v1/gameflow-metadata/registration-status
 */
export function getLolGameflowV1GameflowMetadataRegistrationStatus(): Promise<unknown> {
  return get('/lol-gameflow/v1/gameflow-metadata/registration-status')
}

/**
 * PostLolGameflowV1GameflowMetadataRegistrationStatus
 * @url POST /lol-gameflow/v1/gameflow-metadata/registration-status
 */
export function postLolGameflowV1GameflowMetadataRegistrationStatus(): Promise<unknown> {
  return post('/lol-gameflow/v1/gameflow-metadata/registration-status')
}

/**
 * GetLolGameflowV1GameflowPhase
 * @url GET /lol-gameflow/v1/gameflow-phase
 */
export function getLolGameflowV1GameflowPhase(): Promise<unknown> {
  return get('/lol-gameflow/v1/gameflow-phase')
}

/**
 * PostLolGameflowV1PreEndGameTransition
 * @url POST /lol-gameflow/v1/pre-end-game-transition
 * @param query - 查询参数: { enabled }
 */
export function postLolGameflowV1PreEndGameTransition(query: { enabled: boolean }): Promise<unknown> {
  return post('/lol-gameflow/v1/pre-end-game-transition', query)
}

/**
 * PostLolGameflowV1Reconnect
 * @url POST /lol-gameflow/v1/reconnect
 */
export function postLolGameflowV1Reconnect(): Promise<unknown> {
  return post('/lol-gameflow/v1/reconnect')
}

/**
 * GetLolGameflowV1Session
 * @url GET /lol-gameflow/v1/session
 */
export function getLolGameflowV1Session(): Promise<unknown> {
  return get('/lol-gameflow/v1/session')
}

/**
 * PostLolGameflowV1SessionDodge
 * @url POST /lol-gameflow/v1/session/dodge
 */
export function postLolGameflowV1SessionDodge(): Promise<unknown> {
  return post('/lol-gameflow/v1/session/dodge')
}

/**
 * PostLolGameflowV1SessionEvent
 * @url POST /lol-gameflow/v1/session/event
 */
export function postLolGameflowV1SessionEvent(): Promise<unknown> {
  return post('/lol-gameflow/v1/session/event')
}

/**
 * PostLolGameflowV1SessionGameConfiguration
 * @url POST /lol-gameflow/v1/session/game-configuration
 */
export function postLolGameflowV1SessionGameConfiguration(): Promise<unknown> {
  return post('/lol-gameflow/v1/session/game-configuration')
}

/**
 * GetLolGameflowV1SessionPerPositionSummonerSpellsDisallowed
 * @url GET /lol-gameflow/v1/session/per-position-summoner-spells/disallowed
 */
export function getLolGameflowV1SessionPerPositionSummonerSpellsDisallowed(): Promise<unknown> {
  return get('/lol-gameflow/v1/session/per-position-summoner-spells/disallowed')
}

/**
 * GetLolGameflowV1SessionPerPositionSummonerSpellsDisallowedAsString
 * @url GET /lol-gameflow/v1/session/per-position-summoner-spells/disallowed/as-string
 */
export function getLolGameflowV1SessionPerPositionSummonerSpellsDisallowedAsString(): Promise<unknown> {
  return get('/lol-gameflow/v1/session/per-position-summoner-spells/disallowed/as-string')
}

/**
 * GetLolGameflowV1SessionPerPositionSummonerSpellsRequired
 * @url GET /lol-gameflow/v1/session/per-position-summoner-spells/required
 */
export function getLolGameflowV1SessionPerPositionSummonerSpellsRequired(): Promise<unknown> {
  return get('/lol-gameflow/v1/session/per-position-summoner-spells/required')
}

/**
 * GetLolGameflowV1SessionPerPositionSummonerSpellsRequiredAsString
 * @url GET /lol-gameflow/v1/session/per-position-summoner-spells/required/as-string
 */
export function getLolGameflowV1SessionPerPositionSummonerSpellsRequiredAsString(): Promise<unknown> {
  return get('/lol-gameflow/v1/session/per-position-summoner-spells/required/as-string')
}

/**
 * PostLolGameflowV1SessionRequestEnterGameflow
 * @url POST /lol-gameflow/v1/session/request-enter-gameflow
 */
export function postLolGameflowV1SessionRequestEnterGameflow(): Promise<unknown> {
  return post('/lol-gameflow/v1/session/request-enter-gameflow')
}

/**
 * PostLolGameflowV1SessionRequestLobby
 * @url POST /lol-gameflow/v1/session/request-lobby
 */
export function postLolGameflowV1SessionRequestLobby(): Promise<unknown> {
  return post('/lol-gameflow/v1/session/request-lobby')
}

/**
 * PostLolGameflowV1SessionRequestTournamentCheckin
 * @url POST /lol-gameflow/v1/session/request-tournament-checkin
 */
export function postLolGameflowV1SessionRequestTournamentCheckin(): Promise<unknown> {
  return post('/lol-gameflow/v1/session/request-tournament-checkin')
}

/**
 * PostLolGameflowV1SessionTournamentEnded
 * @url POST /lol-gameflow/v1/session/tournament-ended
 */
export function postLolGameflowV1SessionTournamentEnded(): Promise<unknown> {
  return post('/lol-gameflow/v1/session/tournament-ended')
}

/**
 * GetLolGameflowV1Spectate
 * @url GET /lol-gameflow/v1/spectate
 */
export function getLolGameflowV1Spectate(): Promise<unknown> {
  return get('/lol-gameflow/v1/spectate')
}

/**
 * GetLolGameflowV1SpectateDelayedLaunch
 * @url GET /lol-gameflow/v1/spectate/delayed-launch
 */
export function getLolGameflowV1SpectateDelayedLaunch(): Promise<unknown> {
  return get('/lol-gameflow/v1/spectate/delayed-launch')
}

/**
 * PostLolGameflowV1SpectateLaunch
 * @url POST /lol-gameflow/v1/spectate/launch
 */
export function postLolGameflowV1SpectateLaunch(): Promise<unknown> {
  return post('/lol-gameflow/v1/spectate/launch')
}

/**
 * PostLolGameflowV1SpectateQuit
 * @url POST /lol-gameflow/v1/spectate/quit
 */
export function postLolGameflowV1SpectateQuit(): Promise<unknown> {
  return post('/lol-gameflow/v1/spectate/quit')
}

/**
 * PostLolGameflowV1Tick
 * @url POST /lol-gameflow/v1/tick
 */
export function postLolGameflowV1Tick(): Promise<unknown> {
  return post('/lol-gameflow/v1/tick')
}

/**
 * GetLolGameflowV1Watch
 * @url GET /lol-gameflow/v1/watch
 */
export function getLolGameflowV1Watch(): Promise<unknown> {
  return get('/lol-gameflow/v1/watch')
}

/**
 * PostLolGameflowV1WatchLaunch
 * @url POST /lol-gameflow/v1/watch/launch
 */
export function postLolGameflowV1WatchLaunch(): Promise<unknown> {
  return post('/lol-gameflow/v1/watch/launch')
}

/**
 * PostLolGameflowV2SpectateLaunch
 * @url POST /lol-gameflow/v2/spectate/launch
 */
export function postLolGameflowV2SpectateLaunch(): Promise<unknown> {
  return post('/lol-gameflow/v2/spectate/launch')
}

/**
 * GetLolGeoinfoV1Getlocation
 * @url GET /lol-geoinfo/v1/getlocation
 * @param query - 查询参数: { ip_address }
 */
export function getLolGeoinfoV1Getlocation(query: { ip_address: string }): Promise<unknown> {
  return get('/lol-geoinfo/v1/getlocation', query)
}

/**
 * GetLolGeoinfoV1Whereami
 * @url GET /lol-geoinfo/v1/whereami
 */
export function getLolGeoinfoV1Whereami(): Promise<unknown> {
  return get('/lol-geoinfo/v1/whereami')
}

/**
 * GetLolHighlightsV1Config
 * @url GET /lol-highlights/v1/config
 */
export function getLolHighlightsV1Config(): Promise<unknown> {
  return get('/lol-highlights/v1/config')
}

/**
 * PostLolHighlightsV1FileBrowserByHighlightId
 * @url POST /lol-highlights/v1/file-browser/{highlightId}
 * @param params - 路径参数: { highlightId }
 */
export function postLolHighlightsV1FileBrowserByHighlightId(params: { highlightId: string | number }): Promise<unknown> {
  const { highlightId } = params

  return post(`/lol-highlights/v1/file-browser/${highlightId}`)
}

/**
 * GetLolHighlightsV1Highlights
 * @url GET /lol-highlights/v1/highlights
 */
export function getLolHighlightsV1Highlights(): Promise<unknown> {
  return get('/lol-highlights/v1/highlights')
}

/**
 * PostLolHighlightsV1Highlights
 * @url POST /lol-highlights/v1/highlights
 */
export function postLolHighlightsV1Highlights(): Promise<unknown> {
  return post('/lol-highlights/v1/highlights')
}

/**
 * GetLolHighlightsV1HighlightsFolderPath
 * @url GET /lol-highlights/v1/highlights-folder-path
 */
export function getLolHighlightsV1HighlightsFolderPath(): Promise<unknown> {
  return get('/lol-highlights/v1/highlights-folder-path')
}

/**
 * GetLolHighlightsV1HighlightsFolderPathDefault
 * @url GET /lol-highlights/v1/highlights-folder-path/default
 */
export function getLolHighlightsV1HighlightsFolderPathDefault(): Promise<unknown> {
  return get('/lol-highlights/v1/highlights-folder-path/default')
}

/**
 * DeleteLolHighlightsV1HighlightsById
 * @url DELETE /lol-highlights/v1/highlights/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolHighlightsV1HighlightsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-highlights/v1/highlights/${id}`)
}

/**
 * GetLolHighlightsV1HighlightsById
 * @url GET /lol-highlights/v1/highlights/{id}
 * @param params - 路径参数: { id }
 */
export function getLolHighlightsV1HighlightsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-highlights/v1/highlights/${id}`)
}

/**
 * PutLolHighlightsV1HighlightsById
 * @url PUT /lol-highlights/v1/highlights/{id}
 * @param params - 路径参数: { id }
 */
export function putLolHighlightsV1HighlightsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-highlights/v1/highlights/${id}`)
}

/**
 * GetLolHonorV2V1Ballot
 * @url GET /lol-honor-v2/v1/ballot
 */
export function getLolHonorV2V1Ballot(): Promise<unknown> {
  return get('/lol-honor-v2/v1/ballot')
}

/**
 * GetLolHonorV2V1Config
 * @url GET /lol-honor-v2/v1/config
 */
export function getLolHonorV2V1Config(): Promise<unknown> {
  return get('/lol-honor-v2/v1/config')
}

/**
 * PostLolHonorV2V1HonorPlayer
 * @url POST /lol-honor-v2/v1/honor-player
 */
export function postLolHonorV2V1HonorPlayer(): Promise<unknown> {
  return post('/lol-honor-v2/v1/honor-player')
}

/**
 * GetLolHonorV2V1LateRecognition
 * @url GET /lol-honor-v2/v1/late-recognition
 */
export function getLolHonorV2V1LateRecognition(): Promise<unknown> {
  return get('/lol-honor-v2/v1/late-recognition')
}

/**
 * PostLolHonorV2V1LateRecognitionAck
 * @url POST /lol-honor-v2/v1/late-recognition/ack
 */
export function postLolHonorV2V1LateRecognitionAck(): Promise<unknown> {
  return post('/lol-honor-v2/v1/late-recognition/ack')
}

/**
 * GetLolHonorV2V1LatestEligibleGame
 * @url GET /lol-honor-v2/v1/latest-eligible-game
 */
export function getLolHonorV2V1LatestEligibleGame(): Promise<unknown> {
  return get('/lol-honor-v2/v1/latest-eligible-game')
}

/**
 * GetLolHonorV2V1LevelChange
 * @url GET /lol-honor-v2/v1/level-change
 */
export function getLolHonorV2V1LevelChange(): Promise<unknown> {
  return get('/lol-honor-v2/v1/level-change')
}

/**
 * PostLolHonorV2V1LevelChangeAck
 * @url POST /lol-honor-v2/v1/level-change/ack
 */
export function postLolHonorV2V1LevelChangeAck(): Promise<unknown> {
  return post('/lol-honor-v2/v1/level-change/ack')
}

/**
 * GetLolHonorV2V1MutualHonor
 * @url GET /lol-honor-v2/v1/mutual-honor
 */
export function getLolHonorV2V1MutualHonor(): Promise<unknown> {
  return get('/lol-honor-v2/v1/mutual-honor')
}

/**
 * PostLolHonorV2V1MutualHonorAck
 * @url POST /lol-honor-v2/v1/mutual-honor/ack
 */
export function postLolHonorV2V1MutualHonorAck(): Promise<unknown> {
  return post('/lol-honor-v2/v1/mutual-honor/ack')
}

/**
 * GetLolHonorV2V1Profile
 * @url GET /lol-honor-v2/v1/profile
 */
export function getLolHonorV2V1Profile(): Promise<unknown> {
  return get('/lol-honor-v2/v1/profile')
}

/**
 * GetLolHonorV2V1Recognition
 * @url GET /lol-honor-v2/v1/recognition
 */
export function getLolHonorV2V1Recognition(): Promise<unknown> {
  return get('/lol-honor-v2/v1/recognition')
}

/**
 * GetLolHonorV2V1RewardGranted
 * @url GET /lol-honor-v2/v1/reward-granted
 */
export function getLolHonorV2V1RewardGranted(): Promise<unknown> {
  return get('/lol-honor-v2/v1/reward-granted')
}

/**
 * PostLolHonorV2V1RewardGrantedAck
 * @url POST /lol-honor-v2/v1/reward-granted/ack
 */
export function postLolHonorV2V1RewardGrantedAck(): Promise<unknown> {
  return post('/lol-honor-v2/v1/reward-granted/ack')
}

/**
 * GetLolHonorV2V1TeamChoices
 * @url GET /lol-honor-v2/v1/team-choices
 */
export function getLolHonorV2V1TeamChoices(): Promise<unknown> {
  return get('/lol-honor-v2/v1/team-choices')
}

/**
 * GetLolHonorV2V1VoteCompletion
 * @url GET /lol-honor-v2/v1/vote-completion
 */
export function getLolHonorV2V1VoteCompletion(): Promise<unknown> {
  return get('/lol-honor-v2/v1/vote-completion')
}

/**
 * GetLolHovercardV1FriendInfoBySummonerBySummonerId
 * @url GET /lol-hovercard/v1/friend-info-by-summoner/{summonerId}
 * @param params - 路径参数: { summonerId }
 */
export function getLolHovercardV1FriendInfoBySummonerBySummonerId(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-hovercard/v1/friend-info-by-summoner/${summonerId}`)
}

/**
 * GetLolHovercardV1FriendInfoByPuuid
 * @url GET /lol-hovercard/v1/friend-info/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolHovercardV1FriendInfoByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-hovercard/v1/friend-info/${puuid}`)
}

/**
 * GetLolInventoryV1ChampSelectInventory
 * @url GET /lol-inventory/v1/champSelectInventory
 */
export function getLolInventoryV1ChampSelectInventory(): Promise<unknown> {
  return get('/lol-inventory/v1/champSelectInventory')
}

/**
 * GetLolInventoryV1InitialConfigurationComplete
 * @url GET /lol-inventory/v1/initial-configuration-complete
 */
export function getLolInventoryV1InitialConfigurationComplete(): Promise<unknown> {
  return get('/lol-inventory/v1/initial-configuration-complete')
}

/**
 * GetLolInventoryV1Inventory
 * @url GET /lol-inventory/v1/inventory
 * @param query - 查询参数: { inventoryTypes }
 */
export function getLolInventoryV1Inventory(query: { inventoryTypes: string[] }): Promise<unknown> {
  return get('/lol-inventory/v1/inventory', query)
}

/**
 * GetLolInventoryV1InventoryEmotes
 * @url GET /lol-inventory/v1/inventory/emotes
 */
export function getLolInventoryV1InventoryEmotes(): Promise<unknown> {
  return get('/lol-inventory/v1/inventory/emotes')
}

/**
 * PostLolInventoryV1NotificationAcknowledge
 * @url POST /lol-inventory/v1/notification/acknowledge
 */
export function postLolInventoryV1NotificationAcknowledge(): Promise<unknown> {
  return post('/lol-inventory/v1/notification/acknowledge')
}

/**
 * GetLolInventoryV1NotificationsByInventoryType
 * @url GET /lol-inventory/v1/notifications/{inventoryType}
 * @param params - 路径参数: { inventoryType }
 */
export function getLolInventoryV1NotificationsByInventoryType(params: { inventoryType: string | number }): Promise<unknown> {
  const { inventoryType } = params

  return get(`/lol-inventory/v1/notifications/${inventoryType}`)
}

/**
 * GetLolInventoryV1PlayersByPuuidInventory
 * @url GET /lol-inventory/v1/players/{puuid}/inventory
 * @param params - 路径参数: { puuid }
 * @param query - 查询参数: { inventoryTypes }
 */
export function getLolInventoryV1PlayersByPuuidInventory(params: { puuid: string | number }, query: { inventoryTypes: string[] }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-inventory/v1/players/${puuid}/inventory`, query)
}

/**
 * GetLolInventoryV1SignedInventory
 * @url GET /lol-inventory/v1/signedInventory
 * @param query - 查询参数: { inventoryTypes }
 */
export function getLolInventoryV1SignedInventory(query: { inventoryTypes: string[] }): Promise<unknown> {
  return get('/lol-inventory/v1/signedInventory', query)
}

/**
 * GetLolInventoryV1SignedInventorySimple
 * @url GET /lol-inventory/v1/signedInventory/simple
 * @param query - 查询参数: { inventoryTypes, queryParams }
 */
export function getLolInventoryV1SignedInventorySimple(query: { inventoryTypes: string[]; queryParams?: Record<string, unknown> }): Promise<unknown> {
  return get('/lol-inventory/v1/signedInventory/simple', query)
}

/**
 * GetLolInventoryV1SignedInventoryTournamentlogos
 * @url GET /lol-inventory/v1/signedInventory/tournamentlogos
 */
export function getLolInventoryV1SignedInventoryTournamentlogos(): Promise<unknown> {
  return get('/lol-inventory/v1/signedInventory/tournamentlogos')
}

/**
 * GetLolInventoryV1SignedInventoryCache
 * @url GET /lol-inventory/v1/signedInventoryCache
 */
export function getLolInventoryV1SignedInventoryCache(): Promise<unknown> {
  return get('/lol-inventory/v1/signedInventoryCache')
}

/**
 * GetLolInventoryV1SignedWallet
 * @url GET /lol-inventory/v1/signedWallet
 * @param query - 查询参数: { currencyTypes }
 */
export function getLolInventoryV1SignedWallet(query: { currencyTypes: string[] }): Promise<unknown> {
  return get('/lol-inventory/v1/signedWallet', query)
}

/**
 * GetLolInventoryV1SignedWalletByCurrencyType
 * @url GET /lol-inventory/v1/signedWallet/{currencyType}
 * @param params - 路径参数: { currencyType }
 */
export function getLolInventoryV1SignedWalletByCurrencyType(params: { currencyType: string | number }): Promise<unknown> {
  const { currencyType } = params

  return get(`/lol-inventory/v1/signedWallet/${currencyType}`)
}

/**
 * GetLolInventoryV1Wallet
 * @url GET /lol-inventory/v1/wallet
 * @param query - 查询参数: { currencyTypes }
 */
export function getLolInventoryV1Wallet(query: { currencyTypes: string[] }): Promise<unknown> {
  return get('/lol-inventory/v1/wallet', query)
}

/**
 * GetLolInventoryV1WalletByCurrencyType
 * @url GET /lol-inventory/v1/wallet/{currencyType}
 * @param params - 路径参数: { currencyType }
 */
export function getLolInventoryV1WalletByCurrencyType(params: { currencyType: string | number }): Promise<unknown> {
  const { currencyType } = params

  return get(`/lol-inventory/v1/wallet/${currencyType}`)
}

/**
 * GetLolInventoryV2InventoryByInventoryType
 * @url GET /lol-inventory/v2/inventory/{inventoryType}
 * @param params - 路径参数: { inventoryType }
 */
export function getLolInventoryV2InventoryByInventoryType(params: { inventoryType: string | number }): Promise<unknown> {
  const { inventoryType } = params

  return get(`/lol-inventory/v2/inventory/${inventoryType}`)
}

/**
 * GetLolItemSetsV1ItemSetsBySummonerIdSets
 * @url GET /lol-item-sets/v1/item-sets/{summonerId}/sets
 * @param params - 路径参数: { summonerId }
 */
export function getLolItemSetsV1ItemSetsBySummonerIdSets(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-item-sets/v1/item-sets/${summonerId}/sets`)
}

/**
 * PostLolItemSetsV1ItemSetsBySummonerIdSets
 * @url POST /lol-item-sets/v1/item-sets/{summonerId}/sets
 * @param params - 路径参数: { summonerId }
 */
export function postLolItemSetsV1ItemSetsBySummonerIdSets(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return post(`/lol-item-sets/v1/item-sets/${summonerId}/sets`)
}

/**
 * PutLolItemSetsV1ItemSetsBySummonerIdSets
 * @url PUT /lol-item-sets/v1/item-sets/{summonerId}/sets
 * @param params - 路径参数: { summonerId }
 */
export function putLolItemSetsV1ItemSetsBySummonerIdSets(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return put(`/lol-item-sets/v1/item-sets/${summonerId}/sets`)
}

/**
 * PostLolItemSetsV1ItemSetsBySummonerIdValidate
 * @url POST /lol-item-sets/v1/item-sets/{summonerId}/validate
 * @param params - 路径参数: { summonerId }
 */
export function postLolItemSetsV1ItemSetsBySummonerIdValidate(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return post(`/lol-item-sets/v1/item-sets/${summonerId}/validate`)
}

/**
 * GetLolKickoutV1Notification
 * @url GET /lol-kickout/v1/notification
 */
export function getLolKickoutV1Notification(): Promise<unknown> {
  return get('/lol-kickout/v1/notification')
}

/**
 * GetLolKrPlaytimeReminderV1Message
 * @url GET /lol-kr-playtime-reminder/v1/message
 */
export function getLolKrPlaytimeReminderV1Message(): Promise<unknown> {
  return get('/lol-kr-playtime-reminder/v1/message')
}

/**
 * GetLolKrPlaytimeReminderV1Playtime
 * @url GET /lol-kr-playtime-reminder/v1/playtime
 */
export function getLolKrPlaytimeReminderV1Playtime(): Promise<unknown> {
  return get('/lol-kr-playtime-reminder/v1/playtime')
}

/**
 * GetLolKrShutdownLawV1CustomStatus
 * @url GET /lol-kr-shutdown-law/v1/custom-status
 */
export function getLolKrShutdownLawV1CustomStatus(): Promise<unknown> {
  return get('/lol-kr-shutdown-law/v1/custom-status')
}

/**
 * GetLolKrShutdownLawV1DisabledQueues
 * @url GET /lol-kr-shutdown-law/v1/disabled-queues
 */
export function getLolKrShutdownLawV1DisabledQueues(): Promise<unknown> {
  return get('/lol-kr-shutdown-law/v1/disabled-queues')
}

/**
 * GetLolKrShutdownLawV1Notification
 * @url GET /lol-kr-shutdown-law/v1/notification
 */
export function getLolKrShutdownLawV1Notification(): Promise<unknown> {
  return get('/lol-kr-shutdown-law/v1/notification')
}

/**
 * GetLolKrShutdownLawV1QueueStatusByQueueId
 * @url GET /lol-kr-shutdown-law/v1/queue-status/{queue_id}
 * @param params - 路径参数: { queue_id }
 */
export function getLolKrShutdownLawV1QueueStatusByQueueId(params: { queue_id: string | number }): Promise<unknown> {
  const { queue_id } = params

  return get(`/lol-kr-shutdown-law/v1/queue-status/${queue_id}`)
}

/**
 * GetLolKrShutdownLawV1RatingScreen
 * @url GET /lol-kr-shutdown-law/v1/rating-screen
 */
export function getLolKrShutdownLawV1RatingScreen(): Promise<unknown> {
  return get('/lol-kr-shutdown-law/v1/rating-screen')
}

/**
 * PostLolKrShutdownLawV1RatingScreenAcknowledge
 * @url POST /lol-kr-shutdown-law/v1/rating-screen/acknowledge
 */
export function postLolKrShutdownLawV1RatingScreenAcknowledge(): Promise<unknown> {
  return post('/lol-kr-shutdown-law/v1/rating-screen/acknowledge')
}

/**
 * GetLolKrShutdownLawV1Status
 * @url GET /lol-kr-shutdown-law/v1/status
 */
export function getLolKrShutdownLawV1Status(): Promise<unknown> {
  return get('/lol-kr-shutdown-law/v1/status')
}

/**
 * GetLolLeagueSessionV1LeagueSessionToken
 * @url GET /lol-league-session/v1/league-session-token
 */
export function getLolLeagueSessionV1LeagueSessionToken(): Promise<unknown> {
  return get('/lol-league-session/v1/league-session-token')
}

/**
 * GetLolLeaverBusterV1Notifications
 * @url GET /lol-leaver-buster/v1/notifications
 */
export function getLolLeaverBusterV1Notifications(): Promise<unknown> {
  return get('/lol-leaver-buster/v1/notifications')
}

/**
 * DeleteLolLeaverBusterV1NotificationsById
 * @url DELETE /lol-leaver-buster/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolLeaverBusterV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-leaver-buster/v1/notifications/${id}`)
}

/**
 * GetLolLeaverBusterV1NotificationsById
 * @url GET /lol-leaver-buster/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function getLolLeaverBusterV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-leaver-buster/v1/notifications/${id}`)
}

/**
 * GetLolLicenseAgreementV1Agreements
 * @url GET /lol-license-agreement/v1/agreements
 */
export function getLolLicenseAgreementV1Agreements(): Promise<unknown> {
  return get('/lol-license-agreement/v1/agreements')
}

/**
 * PostLolLicenseAgreementV1AgreementsByIdAccept
 * @url POST /lol-license-agreement/v1/agreements/{id}/accept
 * @param params - 路径参数: { id }
 */
export function postLolLicenseAgreementV1AgreementsByIdAccept(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-license-agreement/v1/agreements/${id}/accept`)
}

/**
 * PostLolLicenseAgreementV1AgreementsByIdDecline
 * @url POST /lol-license-agreement/v1/agreements/{id}/decline
 * @param params - 路径参数: { id }
 */
export function postLolLicenseAgreementV1AgreementsByIdDecline(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-license-agreement/v1/agreements/${id}/decline`)
}

/**
 * GetLolLicenseAgreementV1AllAgreements
 * @url GET /lol-license-agreement/v1/all-agreements
 */
export function getLolLicenseAgreementV1AllAgreements(): Promise<unknown> {
  return get('/lol-license-agreement/v1/all-agreements')
}

/**
 * GetLolLicenseAgreementV1ServeLocation
 * @url GET /lol-license-agreement/v1/serve-location
 */
export function getLolLicenseAgreementV1ServeLocation(): Promise<unknown> {
  return get('/lol-license-agreement/v1/serve-location')
}

/**
 * GetLolLoadoutsV1LoadoutsReady
 * @url GET /lol-loadouts/v1/loadouts-ready
 */
export function getLolLoadoutsV1LoadoutsReady(): Promise<unknown> {
  return get('/lol-loadouts/v1/loadouts-ready')
}

/**
 * PostLolLoadoutsV4Loadouts
 * @url POST /lol-loadouts/v4/loadouts
 */
export function postLolLoadoutsV4Loadouts(): Promise<unknown> {
  return post('/lol-loadouts/v4/loadouts')
}

/**
 * GetLolLoadoutsV4LoadoutsScopeAccount
 * @url GET /lol-loadouts/v4/loadouts/scope/account
 */
export function getLolLoadoutsV4LoadoutsScopeAccount(): Promise<unknown> {
  return get('/lol-loadouts/v4/loadouts/scope/account')
}

/**
 * GetLolLoadoutsV4LoadoutsScopeByScopeByScopeItemId
 * @url GET /lol-loadouts/v4/loadouts/scope/{scope}/{scopeItemId}
 * @param params - 路径参数: { scope, scopeItemId }
 */
export function getLolLoadoutsV4LoadoutsScopeByScopeByScopeItemId(params: { scope: string | number, scopeItemId: string | number }): Promise<unknown> {
  const { scope, scopeItemId } = params

  return get(`/lol-loadouts/v4/loadouts/scope/${scope}/${scopeItemId}`)
}

/**
 * DeleteLolLoadoutsV4LoadoutsById
 * @url DELETE /lol-loadouts/v4/loadouts/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolLoadoutsV4LoadoutsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-loadouts/v4/loadouts/${id}`)
}

/**
 * PatchLolLoadoutsV4LoadoutsById
 * @url PATCH /lol-loadouts/v4/loadouts/{id}
 * @param params - 路径参数: { id }
 */
export function patchLolLoadoutsV4LoadoutsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return patch(`/lol-loadouts/v4/loadouts/${id}`)
}

/**
 * PutLolLoadoutsV4LoadoutsById
 * @url PUT /lol-loadouts/v4/loadouts/{id}
 * @param params - 路径参数: { id }
 */
export function putLolLoadoutsV4LoadoutsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-loadouts/v4/loadouts/${id}`)
}

/**
 * GetLolLoadoutsV4LoadoutsByLoadoutId
 * @url GET /lol-loadouts/v4/loadouts/{loadoutId}
 * @param params - 路径参数: { loadoutId }
 */
export function getLolLoadoutsV4LoadoutsByLoadoutId(params: { loadoutId: string | number }): Promise<unknown> {
  const { loadoutId } = params

  return get(`/lol-loadouts/v4/loadouts/${loadoutId}`)
}

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

/**
 * GetLolLoginV1AccountState
 * @url GET /lol-login/v1/account-state
 */
export function getLolLoginV1AccountState(): Promise<unknown> {
  return get('/lol-login/v1/account-state')
}

/**
 * PostLolLoginV1AccountState
 * @url POST /lol-login/v1/account-state
 */
export function postLolLoginV1AccountState(): Promise<unknown> {
  return post('/lol-login/v1/account-state')
}

/**
 * PostLolLoginV1ChangeSummonerName
 * @url POST /lol-login/v1/change-summoner-name
 */
export function postLolLoginV1ChangeSummonerName(): Promise<unknown> {
  return post('/lol-login/v1/change-summoner-name')
}

/**
 * PostLolLoginV1DeleteRsoOnClose
 * @url POST /lol-login/v1/delete-rso-on-close
 */
export function postLolLoginV1DeleteRsoOnClose(): Promise<unknown> {
  return post('/lol-login/v1/delete-rso-on-close')
}

/**
 * PostLolLoginV1LeagueSessionStatus
 * @url POST /lol-login/v1/leagueSessionStatus
 */
export function postLolLoginV1LeagueSessionStatus(): Promise<unknown> {
  return post('/lol-login/v1/leagueSessionStatus')
}

/**
 * GetLolLoginV1LoginConnectionState
 * @url GET /lol-login/v1/login-connection-state
 */
export function getLolLoginV1LoginConnectionState(): Promise<unknown> {
  return get('/lol-login/v1/login-connection-state')
}

/**
 * GetLolLoginV1LoginDataPacket
 * @url GET /lol-login/v1/login-data-packet
 */
export function getLolLoginV1LoginDataPacket(): Promise<unknown> {
  return get('/lol-login/v1/login-data-packet')
}

/**
 * GetLolLoginV1LoginInGameCreds
 * @url GET /lol-login/v1/login-in-game-creds
 */
export function getLolLoginV1LoginInGameCreds(): Promise<unknown> {
  return get('/lol-login/v1/login-in-game-creds')
}

/**
 * GetLolLoginV1LoginPlatformCredentials
 * @url GET /lol-login/v1/login-platform-credentials
 */
export function getLolLoginV1LoginPlatformCredentials(): Promise<unknown> {
  return get('/lol-login/v1/login-platform-credentials')
}

/**
 * GetLolLoginV1LoginQueueState
 * @url GET /lol-login/v1/login-queue-state
 */
export function getLolLoginV1LoginQueueState(): Promise<unknown> {
  return get('/lol-login/v1/login-queue-state')
}

/**
 * DeleteLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName
 * @url DELETE /lol-login/v1/service-proxy-async-requests/{serviceName}/{methodName}
 * @param params - 路径参数: { serviceName, methodName }
 * @param query - 查询参数: { pluginId }
 */
export function deleteLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName(params: { serviceName: string | number, methodName: string | number }, query: { pluginId: number }): Promise<unknown> {
  const { serviceName, methodName } = params

  return del(`/lol-login/v1/service-proxy-async-requests/${serviceName}/${methodName}`, query)
}

/**
 * PostLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName
 * @url POST /lol-login/v1/service-proxy-async-requests/{serviceName}/{methodName}
 * @param params - 路径参数: { serviceName, methodName }
 * @param query - 查询参数: { pluginId }
 */
export function postLolLoginV1ServiceProxyAsyncRequestsByServiceNameByMethodName(params: { serviceName: string | number, methodName: string | number }, query: { pluginId: number }): Promise<unknown> {
  const { serviceName, methodName } = params

  return post(`/lol-login/v1/service-proxy-async-requests/${serviceName}/${methodName}`, query)
}

/**
 * PostLolLoginV1ServiceProxyUuidRequests
 * @url POST /lol-login/v1/service-proxy-uuid-requests
 * @param query - 查询参数: { serviceName, methodName, pluginId, timeoutMillis, payload }
 */
export function postLolLoginV1ServiceProxyUuidRequests(query: { serviceName: string; methodName: string; pluginId: number; timeoutMillis: number; payload: string }): Promise<unknown> {
  return post('/lol-login/v1/service-proxy-uuid-requests', query)
}

/**
 * DeleteLolLoginV1Session
 * @url DELETE /lol-login/v1/session
 */
export function deleteLolLoginV1Session(): Promise<unknown> {
  return del('/lol-login/v1/session')
}

/**
 * GetLolLoginV1Session
 * @url GET /lol-login/v1/session
 */
export function getLolLoginV1Session(): Promise<unknown> {
  return get('/lol-login/v1/session')
}

/**
 * PostLolLoginV1Session
 * @url POST /lol-login/v1/session
 */
export function postLolLoginV1Session(): Promise<unknown> {
  return post('/lol-login/v1/session')
}

/**
 * PostLolLoginV1SessionInvoke
 * @url POST /lol-login/v1/session/invoke
 * @param query - 查询参数: { destination, method }
 */
export function postLolLoginV1SessionInvoke(query: { destination: string; method: string }): Promise<unknown> {
  return post('/lol-login/v1/session/invoke', query)
}

/**
 * DeleteLolLoginV1ShutdownLocksByLockName
 * @url DELETE /lol-login/v1/shutdown-locks/{lockName}
 * @param params - 路径参数: { lockName }
 */
export function deleteLolLoginV1ShutdownLocksByLockName(params: { lockName: string | number }): Promise<unknown> {
  const { lockName } = params

  return del(`/lol-login/v1/shutdown-locks/${lockName}`)
}

/**
 * PutLolLoginV1ShutdownLocksByLockName
 * @url PUT /lol-login/v1/shutdown-locks/{lockName}
 * @param params - 路径参数: { lockName }
 */
export function putLolLoginV1ShutdownLocksByLockName(params: { lockName: string | number }): Promise<unknown> {
  const { lockName } = params

  return put(`/lol-login/v1/shutdown-locks/${lockName}`)
}

/**
 * PostLolLoginV1SummonerSession
 * @url POST /lol-login/v1/summoner-session
 */
export function postLolLoginV1SummonerSession(): Promise<unknown> {
  return post('/lol-login/v1/summoner-session')
}

/**
 * PostLolLoginV1SummonerSessionFailed
 * @url POST /lol-login/v1/summoner-session-failed
 */
export function postLolLoginV1SummonerSessionFailed(): Promise<unknown> {
  return post('/lol-login/v1/summoner-session-failed')
}

/**
 * GetLolLoginV1Wallet
 * @url GET /lol-login/v1/wallet
 */
export function getLolLoginV1Wallet(): Promise<unknown> {
  return get('/lol-login/v1/wallet')
}

/**
 * GetLolLoginV2LeagueSessionInitToken
 * @url GET /lol-login/v2/league-session-init-token
 */
export function getLolLoginV2LeagueSessionInitToken(): Promise<unknown> {
  return get('/lol-login/v2/league-session-init-token')
}

/**
 * GetLolLootV1CurrencyConfiguration
 * @url GET /lol-loot/v1/currency-configuration
 */
export function getLolLootV1CurrencyConfiguration(): Promise<unknown> {
  return get('/lol-loot/v1/currency-configuration')
}

/**
 * GetLolLootV1Enabled
 * @url GET /lol-loot/v1/enabled
 */
export function getLolLootV1Enabled(): Promise<unknown> {
  return get('/lol-loot/v1/enabled')
}

/**
 * GetLolLootV1LootGrants
 * @url GET /lol-loot/v1/loot-grants
 */
export function getLolLootV1LootGrants(): Promise<unknown> {
  return get('/lol-loot/v1/loot-grants')
}

/**
 * DeleteLolLootV1LootGrantsById
 * @url DELETE /lol-loot/v1/loot-grants/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolLootV1LootGrantsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-loot/v1/loot-grants/${id}`)
}

/**
 * GetLolLootV1LootItems
 * @url GET /lol-loot/v1/loot-items
 */
export function getLolLootV1LootItems(): Promise<unknown> {
  return get('/lol-loot/v1/loot-items')
}

/**
 * GetLolLootV1LootOddsByRecipeName
 * @url GET /lol-loot/v1/loot-odds/{recipeName}
 * @param params - 路径参数: { recipeName }
 */
export function getLolLootV1LootOddsByRecipeName(params: { recipeName: string | number }): Promise<unknown> {
  const { recipeName } = params

  return get(`/lol-loot/v1/loot-odds/${recipeName}`)
}

/**
 * GetLolLootV1Milestones
 * @url GET /lol-loot/v1/milestones
 * @param query - 查询参数: { minimizeResponse, includeInactive }
 */
export function getLolLootV1Milestones(query: { minimizeResponse: boolean; includeInactive?: boolean }): Promise<unknown> {
  return get('/lol-loot/v1/milestones', query)
}

/**
 * GetLolLootV1MilestonesCounters
 * @url GET /lol-loot/v1/milestones/counters
 */
export function getLolLootV1MilestonesCounters(): Promise<unknown> {
  return get('/lol-loot/v1/milestones/counters')
}

/**
 * GetLolLootV1MilestonesItems
 * @url GET /lol-loot/v1/milestones/items
 */
export function getLolLootV1MilestonesItems(): Promise<unknown> {
  return get('/lol-loot/v1/milestones/items')
}

/**
 * GetLolLootV1MilestonesByLootMilestonesId
 * @url GET /lol-loot/v1/milestones/{lootMilestonesId}
 * @param params - 路径参数: { lootMilestonesId }
 * @param query - 查询参数: { includeInactive }
 */
export function getLolLootV1MilestonesByLootMilestonesId(params: { lootMilestonesId: string | number }, query: { includeInactive?: boolean }): Promise<unknown> {
  const { lootMilestonesId } = params

  return get(`/lol-loot/v1/milestones/${lootMilestonesId}`, query)
}

/**
 * PostLolLootV1MilestonesByLootMilestonesIdClaim
 * @url POST /lol-loot/v1/milestones/{lootMilestonesId}/claim
 * @param params - 路径参数: { lootMilestonesId }
 */
export function postLolLootV1MilestonesByLootMilestonesIdClaim(params: { lootMilestonesId: string | number }): Promise<unknown> {
  const { lootMilestonesId } = params

  return post(`/lol-loot/v1/milestones/${lootMilestonesId}/claim`)
}

/**
 * GetLolLootV1MilestonesByLootMilestonesIdClaimProgress
 * @url GET /lol-loot/v1/milestones/{lootMilestonesId}/claimProgress
 * @param params - 路径参数: { lootMilestonesId }
 */
export function getLolLootV1MilestonesByLootMilestonesIdClaimProgress(params: { lootMilestonesId: string | number }): Promise<unknown> {
  const { lootMilestonesId } = params

  return get(`/lol-loot/v1/milestones/${lootMilestonesId}/claimProgress`)
}

/**
 * GetLolLootV1MilestonesByLootMilestonesIdCounter
 * @url GET /lol-loot/v1/milestones/{lootMilestonesId}/counter
 * @param params - 路径参数: { lootMilestonesId }
 */
export function getLolLootV1MilestonesByLootMilestonesIdCounter(params: { lootMilestonesId: string | number }): Promise<unknown> {
  const { lootMilestonesId } = params

  return get(`/lol-loot/v1/milestones/${lootMilestonesId}/counter`)
}

/**
 * GetLolLootV1NewPlayerCheckDone
 * @url GET /lol-loot/v1/new-player-check-done
 */
export function getLolLootV1NewPlayerCheckDone(): Promise<unknown> {
  return get('/lol-loot/v1/new-player-check-done')
}

/**
 * PostLolLootV1NewPlayerCheckDoneByNewValue
 * @url POST /lol-loot/v1/new-player-check-done/{newValue}
 * @param params - 路径参数: { newValue }
 */
export function postLolLootV1NewPlayerCheckDoneByNewValue(params: { newValue: string | number }): Promise<unknown> {
  const { newValue } = params

  return post(`/lol-loot/v1/new-player-check-done/${newValue}`)
}

/**
 * GetLolLootV1PlayerDisplayCategories
 * @url GET /lol-loot/v1/player-display-categories
 */
export function getLolLootV1PlayerDisplayCategories(): Promise<unknown> {
  return get('/lol-loot/v1/player-display-categories')
}

/**
 * GetLolLootV1PlayerLoot
 * @url GET /lol-loot/v1/player-loot
 */
export function getLolLootV1PlayerLoot(): Promise<unknown> {
  return get('/lol-loot/v1/player-loot')
}

/**
 * GetLolLootV1PlayerLootMap
 * @url GET /lol-loot/v1/player-loot-map
 */
export function getLolLootV1PlayerLootMap(): Promise<unknown> {
  return get('/lol-loot/v1/player-loot-map')
}

/**
 * GetLolLootV1PlayerLootNotifications
 * @url GET /lol-loot/v1/player-loot-notifications
 */
export function getLolLootV1PlayerLootNotifications(): Promise<unknown> {
  return get('/lol-loot/v1/player-loot-notifications')
}

/**
 * PostLolLootV1PlayerLootNotificationsByIdAcknowledge
 * @url POST /lol-loot/v1/player-loot-notifications/{id}/acknowledge
 * @param params - 路径参数: { id }
 */
export function postLolLootV1PlayerLootNotificationsByIdAcknowledge(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-loot/v1/player-loot-notifications/${id}/acknowledge`)
}

/**
 * GetLolLootV1PlayerLootByLootId
 * @url GET /lol-loot/v1/player-loot/{lootId}
 * @param params - 路径参数: { lootId }
 */
export function getLolLootV1PlayerLootByLootId(params: { lootId: string | number }): Promise<unknown> {
  const { lootId } = params

  return get(`/lol-loot/v1/player-loot/${lootId}`)
}

/**
 * GetLolLootV1PlayerLootByLootIdContextMenu
 * @url GET /lol-loot/v1/player-loot/{lootId}/context-menu
 * @param params - 路径参数: { lootId }
 */
export function getLolLootV1PlayerLootByLootIdContextMenu(params: { lootId: string | number }): Promise<unknown> {
  const { lootId } = params

  return get(`/lol-loot/v1/player-loot/${lootId}/context-menu`)
}

/**
 * PostLolLootV1PlayerLootByLootIdContextMenu
 * @url POST /lol-loot/v1/player-loot/{lootId}/context-menu
 * @param params - 路径参数: { lootId }
 */
export function postLolLootV1PlayerLootByLootIdContextMenu(params: { lootId: string | number }): Promise<unknown> {
  const { lootId } = params

  return post(`/lol-loot/v1/player-loot/${lootId}/context-menu`)
}

/**
 * DeleteLolLootV1PlayerLootByLootIdNewNotification
 * @url DELETE /lol-loot/v1/player-loot/{lootId}/new-notification
 * @param params - 路径参数: { lootId }
 */
export function deleteLolLootV1PlayerLootByLootIdNewNotification(params: { lootId: string | number }): Promise<unknown> {
  const { lootId } = params

  return del(`/lol-loot/v1/player-loot/${lootId}/new-notification`)
}

/**
 * PostLolLootV1PlayerLootByLootNameRedeem
 * @url POST /lol-loot/v1/player-loot/{lootName}/redeem
 * @param params - 路径参数: { lootName }
 */
export function postLolLootV1PlayerLootByLootNameRedeem(params: { lootName: string | number }): Promise<unknown> {
  const { lootName } = params

  return post(`/lol-loot/v1/player-loot/${lootName}/redeem`)
}

/**
 * GetLolLootV1Ready
 * @url GET /lol-loot/v1/ready
 */
export function getLolLootV1Ready(): Promise<unknown> {
  return get('/lol-loot/v1/ready')
}

/**
 * GetLolLootV1RecipesConfiguration
 * @url GET /lol-loot/v1/recipes/configuration
 */
export function getLolLootV1RecipesConfiguration(): Promise<unknown> {
  return get('/lol-loot/v1/recipes/configuration')
}

/**
 * GetLolLootV1RecipesInitialItemByLootId
 * @url GET /lol-loot/v1/recipes/initial-item/{lootId}
 * @param params - 路径参数: { lootId }
 * @param query - 查询参数: { includeInactive }
 */
export function getLolLootV1RecipesInitialItemByLootId(params: { lootId: string | number }, query: { includeInactive?: boolean }): Promise<unknown> {
  const { lootId } = params

  return get(`/lol-loot/v1/recipes/initial-item/${lootId}`, query)
}

/**
 * PostLolLootV1RecipesInitialItemByLootId
 * @url POST /lol-loot/v1/recipes/initial-item/{lootId}
 * @param params - 路径参数: { lootId }
 * @param query - 查询参数: { includeInactive }
 */
export function postLolLootV1RecipesInitialItemByLootId(params: { lootId: string | number }, query: { includeInactive?: boolean }): Promise<unknown> {
  const { lootId } = params

  return post(`/lol-loot/v1/recipes/initial-item/${lootId}`, query)
}

/**
 * PostLolLootV1RecipesByRecipeNameCraft
 * @url POST /lol-loot/v1/recipes/{recipeName}/craft
 * @param params - 路径参数: { recipeName }
 * @param query - 查询参数: { repeat }
 */
export function postLolLootV1RecipesByRecipeNameCraft(params: { recipeName: string | number }, query: { repeat?: number }): Promise<unknown> {
  const { recipeName } = params

  return post(`/lol-loot/v1/recipes/${recipeName}/craft`, query)
}

/**
 * PostLolLootV1Refresh
 * @url POST /lol-loot/v1/refresh
 * @param query - 查询参数: { force }
 */
export function postLolLootV1Refresh(query: { force: boolean }): Promise<unknown> {
  return post('/lol-loot/v1/refresh', query)
}

/**
 * GetLolLootV2PlayerLootMap
 * @url GET /lol-loot/v2/player-loot-map
 */
export function getLolLootV2PlayerLootMap(): Promise<unknown> {
  return get('/lol-loot/v2/player-loot-map')
}

/**
 * GetLolLoyaltyV1InventoryRequestNotification
 * @url GET /lol-loyalty/v1/inventory-request-notification
 */
export function getLolLoyaltyV1InventoryRequestNotification(): Promise<unknown> {
  return get('/lol-loyalty/v1/inventory-request-notification')
}

/**
 * GetLolLoyaltyV1StatusNotification
 * @url GET /lol-loyalty/v1/status-notification
 */
export function getLolLoyaltyV1StatusNotification(): Promise<unknown> {
  return get('/lol-loyalty/v1/status-notification')
}

/**
 * PostLolLoyaltyV1UpdateTftInventory
 * @url POST /lol-loyalty/v1/updateTftInventory
 */
export function postLolLoyaltyV1UpdateTftInventory(): Promise<unknown> {
  return post('/lol-loyalty/v1/updateTftInventory')
}

/**
 * PostLolMapsV1Map
 * @url POST /lol-maps/v1/map
 */
export function postLolMapsV1Map(): Promise<unknown> {
  return post('/lol-maps/v1/map')
}

/**
 * GetLolMapsV1MapById
 * @url GET /lol-maps/v1/map/{id}
 * @param params - 路径参数: { id }
 */
export function getLolMapsV1MapById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-maps/v1/map/${id}`)
}

/**
 * GetLolMapsV1Maps
 * @url GET /lol-maps/v1/maps
 */
export function getLolMapsV1Maps(): Promise<unknown> {
  return get('/lol-maps/v1/maps')
}

/**
 * GetLolMapsV2MapByIdByGameMode
 * @url GET /lol-maps/v2/map/{id}/{gameMode}
 * @param params - 路径参数: { id, gameMode }
 */
export function getLolMapsV2MapByIdByGameMode(params: { id: string | number, gameMode: string | number }): Promise<unknown> {
  const { id, gameMode } = params

  return get(`/lol-maps/v2/map/${id}/${gameMode}`)
}

/**
 * GetLolMapsV2MapByIdByGameModeByGameMutator
 * @url GET /lol-maps/v2/map/{id}/{gameMode}/{gameMutator}
 * @param params - 路径参数: { id, gameMode, gameMutator }
 */
export function getLolMapsV2MapByIdByGameModeByGameMutator(params: { id: string | number, gameMode: string | number, gameMutator: string | number }): Promise<unknown> {
  const { id, gameMode, gameMutator } = params

  return get(`/lol-maps/v2/map/${id}/${gameMode}/${gameMutator}`)
}

/**
 * GetLolMapsV2Maps
 * @url GET /lol-maps/v2/maps
 */
export function getLolMapsV2Maps(): Promise<unknown> {
  return get('/lol-maps/v2/maps')
}

/**
 * PostLolMatchHistoryV1AcsEndpointOverride
 * @url POST /lol-match-history/v1/acs-endpoint-override
 */
export function postLolMatchHistoryV1AcsEndpointOverride(): Promise<unknown> {
  return post('/lol-match-history/v1/acs-endpoint-override')
}

/**
 * GetLolMatchHistoryV1Delta
 * @url GET /lol-match-history/v1/delta
 */
export function getLolMatchHistoryV1Delta(): Promise<unknown> {
  return get('/lol-match-history/v1/delta')
}

/**
 * GetLolMatchHistoryV1GameTimelinesByGameId
 * @url GET /lol-match-history/v1/game-timelines/{gameId}
 * @param params - 路径参数: { gameId }
 */
export function getLolMatchHistoryV1GameTimelinesByGameId(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return get(`/lol-match-history/v1/game-timelines/${gameId}`)
}

/**
 * GetLolMatchHistoryV1GamesByGameId
 * @url GET /lol-match-history/v1/games/{gameId}
 * @param params - 路径参数: { gameId }
 */
export function getLolMatchHistoryV1GamesByGameId(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return get(`/lol-match-history/v1/games/${gameId}`)
}

/**
 * GetLolMatchHistoryV1ProductsLolCurrentSummonerMatches
 * @url GET /lol-match-history/v1/products/lol/current-summoner/matches
 * @param query - 查询参数: { begIndex, endIndex }
 */
export function getLolMatchHistoryV1ProductsLolCurrentSummonerMatches(query: { begIndex?: number; endIndex?: number }): Promise<unknown> {
  return get('/lol-match-history/v1/products/lol/current-summoner/matches', query)
}

/**
 * GetLolMatchHistoryV1ProductsLolByPuuidMatches
 * @url GET /lol-match-history/v1/products/lol/{puuid}/matches
 * @param params - 路径参数: { puuid }
 * @param query - 查询参数: { begIndex, endIndex }
 */
export function getLolMatchHistoryV1ProductsLolByPuuidMatches(params: { puuid: string | number }, query: { begIndex?: number; endIndex?: number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-match-history/v1/products/lol/${puuid}/matches`, query)
}

/**
 * GetLolMatchHistoryV1ProductsTftByPuuidMatches
 * @url GET /lol-match-history/v1/products/tft/{puuid}/matches
 * @param params - 路径参数: { puuid }
 * @param query - 查询参数: { begin, count, tag }
 */
export function getLolMatchHistoryV1ProductsTftByPuuidMatches(params: { puuid: string | number }, query: { begin?: number; count?: number; tag?: string }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-match-history/v1/products/tft/${puuid}/matches`, query)
}

/**
 * GetLolMatchHistoryV1RecentlyPlayedSummoners
 * @url GET /lol-match-history/v1/recently-played-summoners
 */
export function getLolMatchHistoryV1RecentlyPlayedSummoners(): Promise<unknown> {
  return get('/lol-match-history/v1/recently-played-summoners')
}

/**
 * GetLolMatchHistoryV1WebUrl
 * @url GET /lol-match-history/v1/web-url
 */
export function getLolMatchHistoryV1WebUrl(): Promise<unknown> {
  return get('/lol-match-history/v1/web-url')
}

/**
 * GetLolMatchHistoryV3MatchlistAccountByAccountId
 * @url GET /lol-match-history/v3/matchlist/account/{accountId}
 * @param params - 路径参数: { accountId }
 * @param query - 查询参数: { begIndex, endIndex }
 */
export function getLolMatchHistoryV3MatchlistAccountByAccountId(params: { accountId: string | number }, query: { begIndex?: number; endIndex?: number }): Promise<unknown> {
  const { accountId } = params

  return get(`/lol-match-history/v3/matchlist/account/${accountId}`, query)
}

/**
 * GetLolMatchmakingV1ReadyCheck
 * @url GET /lol-matchmaking/v1/ready-check
 */
export function getLolMatchmakingV1ReadyCheck(): Promise<unknown> {
  return get('/lol-matchmaking/v1/ready-check')
}

/**
 * PostLolMatchmakingV1ReadyCheckAccept
 * @url POST /lol-matchmaking/v1/ready-check/accept
 */
export function postLolMatchmakingV1ReadyCheckAccept(): Promise<unknown> {
  return post('/lol-matchmaking/v1/ready-check/accept')
}

/**
 * PostLolMatchmakingV1ReadyCheckDecline
 * @url POST /lol-matchmaking/v1/ready-check/decline
 */
export function postLolMatchmakingV1ReadyCheckDecline(): Promise<unknown> {
  return post('/lol-matchmaking/v1/ready-check/decline')
}

/**
 * DeleteLolMatchmakingV1Search
 * @url DELETE /lol-matchmaking/v1/search
 */
export function deleteLolMatchmakingV1Search(): Promise<unknown> {
  return del('/lol-matchmaking/v1/search')
}

/**
 * GetLolMatchmakingV1Search
 * @url GET /lol-matchmaking/v1/search
 */
export function getLolMatchmakingV1Search(): Promise<unknown> {
  return get('/lol-matchmaking/v1/search')
}

/**
 * PostLolMatchmakingV1Search
 * @url POST /lol-matchmaking/v1/search
 */
export function postLolMatchmakingV1Search(): Promise<unknown> {
  return post('/lol-matchmaking/v1/search')
}

/**
 * PutLolMatchmakingV1Search
 * @url PUT /lol-matchmaking/v1/search
 */
export function putLolMatchmakingV1Search(): Promise<unknown> {
  return put('/lol-matchmaking/v1/search')
}

/**
 * GetLolMatchmakingV1SearchErrors
 * @url GET /lol-matchmaking/v1/search/errors
 */
export function getLolMatchmakingV1SearchErrors(): Promise<unknown> {
  return get('/lol-matchmaking/v1/search/errors')
}

/**
 * GetLolMatchmakingV1SearchErrorsById
 * @url GET /lol-matchmaking/v1/search/errors/{id}
 * @param params - 路径参数: { id }
 */
export function getLolMatchmakingV1SearchErrorsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-matchmaking/v1/search/errors/${id}`)
}

/**
 * GetLolMissionsV1Data
 * @url GET /lol-missions/v1/data
 */
export function getLolMissionsV1Data(): Promise<unknown> {
  return get('/lol-missions/v1/data')
}

/**
 * PostLolMissionsV1Force
 * @url POST /lol-missions/v1/force
 */
export function postLolMissionsV1Force(): Promise<unknown> {
  return post('/lol-missions/v1/force')
}

/**
 * GetLolMissionsV1Missions
 * @url GET /lol-missions/v1/missions
 */
export function getLolMissionsV1Missions(): Promise<unknown> {
  return get('/lol-missions/v1/missions')
}

/**
 * PutLolMissionsV1Player
 * @url PUT /lol-missions/v1/player
 */
export function putLolMissionsV1Player(): Promise<unknown> {
  return put('/lol-missions/v1/player')
}

/**
 * PutLolMissionsV1PlayerByMissionId
 * @url PUT /lol-missions/v1/player/{missionId}
 * @param params - 路径参数: { missionId }
 */
export function putLolMissionsV1PlayerByMissionId(params: { missionId: string | number }): Promise<unknown> {
  const { missionId } = params

  return put(`/lol-missions/v1/player/${missionId}`)
}

/**
 * GetLolMissionsV1Series
 * @url GET /lol-missions/v1/series
 */
export function getLolMissionsV1Series(): Promise<unknown> {
  return get('/lol-missions/v1/series')
}

/**
 * PutLolMissionsV2PlayerOpt
 * @url PUT /lol-missions/v2/player/opt
 */
export function putLolMissionsV2PlayerOpt(): Promise<unknown> {
  return put('/lol-missions/v2/player/opt')
}

/**
 * PostLolNpeRewardsV1ChallengesOpt
 * @url POST /lol-npe-rewards/v1/challenges/opt
 */
export function postLolNpeRewardsV1ChallengesOpt(): Promise<unknown> {
  return post('/lol-npe-rewards/v1/challenges/opt')
}

/**
 * GetLolNpeRewardsV1ChallengesProgress
 * @url GET /lol-npe-rewards/v1/challenges/progress
 */
export function getLolNpeRewardsV1ChallengesProgress(): Promise<unknown> {
  return get('/lol-npe-rewards/v1/challenges/progress')
}

/**
 * GetLolNpeRewardsV1LevelRewards
 * @url GET /lol-npe-rewards/v1/level-rewards
 */
export function getLolNpeRewardsV1LevelRewards(): Promise<unknown> {
  return get('/lol-npe-rewards/v1/level-rewards')
}

/**
 * GetLolNpeRewardsV1LevelRewardsState
 * @url GET /lol-npe-rewards/v1/level-rewards/state
 */
export function getLolNpeRewardsV1LevelRewardsState(): Promise<unknown> {
  return get('/lol-npe-rewards/v1/level-rewards/state')
}

/**
 * GetLolNpeRewardsV1LoginRewards
 * @url GET /lol-npe-rewards/v1/login-rewards
 */
export function getLolNpeRewardsV1LoginRewards(): Promise<unknown> {
  return get('/lol-npe-rewards/v1/login-rewards')
}

/**
 * GetLolNpeRewardsV1LoginRewardsState
 * @url GET /lol-npe-rewards/v1/login-rewards/state
 */
export function getLolNpeRewardsV1LoginRewardsState(): Promise<unknown> {
  return get('/lol-npe-rewards/v1/login-rewards/state')
}

/**
 * GetLolNpeTutorialPathV1RewardsChamp
 * @url GET /lol-npe-tutorial-path/v1/rewards/champ
 */
export function getLolNpeTutorialPathV1RewardsChamp(): Promise<unknown> {
  return get('/lol-npe-tutorial-path/v1/rewards/champ')
}

/**
 * GetLolNpeTutorialPathV1Settings
 * @url GET /lol-npe-tutorial-path/v1/settings
 */
export function getLolNpeTutorialPathV1Settings(): Promise<unknown> {
  return get('/lol-npe-tutorial-path/v1/settings')
}

/**
 * PutLolNpeTutorialPathV1Settings
 * @url PUT /lol-npe-tutorial-path/v1/settings
 */
export function putLolNpeTutorialPathV1Settings(): Promise<unknown> {
  return put('/lol-npe-tutorial-path/v1/settings')
}

/**
 * GetLolNpeTutorialPathV1Tutorials
 * @url GET /lol-npe-tutorial-path/v1/tutorials
 */
export function getLolNpeTutorialPathV1Tutorials(): Promise<unknown> {
  return get('/lol-npe-tutorial-path/v1/tutorials')
}

/**
 * PatchLolNpeTutorialPathV1TutorialsInit
 * @url PATCH /lol-npe-tutorial-path/v1/tutorials/init
 */
export function patchLolNpeTutorialPathV1TutorialsInit(): Promise<unknown> {
  return patch('/lol-npe-tutorial-path/v1/tutorials/init')
}

/**
 * PutLolNpeTutorialPathV1TutorialsByTutorialIdView
 * @url PUT /lol-npe-tutorial-path/v1/tutorials/{tutorialId}/view
 * @param params - 路径参数: { tutorialId }
 */
export function putLolNpeTutorialPathV1TutorialsByTutorialIdView(params: { tutorialId: string | number }): Promise<unknown> {
  const { tutorialId } = params

  return put(`/lol-npe-tutorial-path/v1/tutorials/${tutorialId}/view`)
}

/**
 * GetLolPatchV1CheckingEnabled
 * @url GET /lol-patch/v1/checking-enabled
 */
export function getLolPatchV1CheckingEnabled(): Promise<unknown> {
  return get('/lol-patch/v1/checking-enabled')
}

/**
 * GetLolPatchV1Environment
 * @url GET /lol-patch/v1/environment
 */
export function getLolPatchV1Environment(): Promise<unknown> {
  return get('/lol-patch/v1/environment')
}

/**
 * PutLolPatchV1GamePatchUrl
 * @url PUT /lol-patch/v1/game-patch-url
 * @param query - 查询参数: { url }
 */
export function putLolPatchV1GamePatchUrl(query: { url: string }): Promise<unknown> {
  return put('/lol-patch/v1/game-patch-url', query)
}

/**
 * GetLolPatchV1GameVersion
 * @url GET /lol-patch/v1/game-version
 */
export function getLolPatchV1GameVersion(): Promise<unknown> {
  return get('/lol-patch/v1/game-version')
}

/**
 * GetLolPatchV1Notifications
 * @url GET /lol-patch/v1/notifications
 */
export function getLolPatchV1Notifications(): Promise<unknown> {
  return get('/lol-patch/v1/notifications')
}

/**
 * DeleteLolPatchV1NotificationsById
 * @url DELETE /lol-patch/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolPatchV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-patch/v1/notifications/${id}`)
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsDetectCorruptionRequest
 * @url POST /lol-patch/v1/products/league_of_legends/detect-corruption-request
 */
export function postLolPatchV1ProductsLeagueOfLegendsDetectCorruptionRequest(): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/detect-corruption-request')
}

/**
 * GetLolPatchV1ProductsLeagueOfLegendsInstallLocation
 * @url GET /lol-patch/v1/products/league_of_legends/install-location
 */
export function getLolPatchV1ProductsLeagueOfLegendsInstallLocation(): Promise<unknown> {
  return get('/lol-patch/v1/products/league_of_legends/install-location')
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsPartialRepairRequest
 * @url POST /lol-patch/v1/products/league_of_legends/partial-repair-request
 */
export function postLolPatchV1ProductsLeagueOfLegendsPartialRepairRequest(): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/partial-repair-request')
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsStartCheckingRequest
 * @url POST /lol-patch/v1/products/league_of_legends/start-checking-request
 */
export function postLolPatchV1ProductsLeagueOfLegendsStartCheckingRequest(): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/start-checking-request')
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsStartPatchingRequest
 * @url POST /lol-patch/v1/products/league_of_legends/start-patching-request
 */
export function postLolPatchV1ProductsLeagueOfLegendsStartPatchingRequest(): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/start-patching-request')
}

/**
 * GetLolPatchV1ProductsLeagueOfLegendsState
 * @url GET /lol-patch/v1/products/league_of_legends/state
 */
export function getLolPatchV1ProductsLeagueOfLegendsState(): Promise<unknown> {
  return get('/lol-patch/v1/products/league_of_legends/state')
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsStopCheckingRequest
 * @url POST /lol-patch/v1/products/league_of_legends/stop-checking-request
 */
export function postLolPatchV1ProductsLeagueOfLegendsStopCheckingRequest(): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/stop-checking-request')
}

/**
 * PostLolPatchV1ProductsLeagueOfLegendsStopPatchingRequest
 * @url POST /lol-patch/v1/products/league_of_legends/stop-patching-request
 * @param query - 查询参数: { restart }
 */
export function postLolPatchV1ProductsLeagueOfLegendsStopPatchingRequest(query: { restart: boolean }): Promise<unknown> {
  return post('/lol-patch/v1/products/league_of_legends/stop-patching-request', query)
}

/**
 * GetLolPatchV1ProductsLeagueOfLegendsSupportedGameReleases
 * @url GET /lol-patch/v1/products/league_of_legends/supported-game-releases
 */
export function getLolPatchV1ProductsLeagueOfLegendsSupportedGameReleases(): Promise<unknown> {
  return get('/lol-patch/v1/products/league_of_legends/supported-game-releases')
}

/**
 * PutLolPatchV1SelfUpdateRestart
 * @url PUT /lol-patch/v1/self-update-restart
 * @param query - 查询参数: { forceRestartOnSelfUpdate }
 */
export function putLolPatchV1SelfUpdateRestart(query: { forceRestartOnSelfUpdate: boolean }): Promise<unknown> {
  return put('/lol-patch/v1/self-update-restart', query)
}

/**
 * GetLolPatchV1Status
 * @url GET /lol-patch/v1/status
 */
export function getLolPatchV1Status(): Promise<unknown> {
  return get('/lol-patch/v1/status')
}

/**
 * PutLolPatchV1Ux
 * @url PUT /lol-patch/v1/ux
 */
export function putLolPatchV1Ux(): Promise<unknown> {
  return put('/lol-patch/v1/ux')
}

/**
 * GetLolPerksV1Currentpage
 * @url GET /lol-perks/v1/currentpage
 */
export function getLolPerksV1Currentpage(): Promise<unknown> {
  return get('/lol-perks/v1/currentpage')
}

/**
 * PutLolPerksV1Currentpage
 * @url PUT /lol-perks/v1/currentpage
 */
export function putLolPerksV1Currentpage(): Promise<unknown> {
  return put('/lol-perks/v1/currentpage')
}

/**
 * GetLolPerksV1Customizationlimits
 * @url GET /lol-perks/v1/customizationlimits
 */
export function getLolPerksV1Customizationlimits(): Promise<unknown> {
  return get('/lol-perks/v1/customizationlimits')
}

/**
 * GetLolPerksV1Inventory
 * @url GET /lol-perks/v1/inventory
 */
export function getLolPerksV1Inventory(): Promise<unknown> {
  return get('/lol-perks/v1/inventory')
}

/**
 * DeleteLolPerksV1Pages
 * @url DELETE /lol-perks/v1/pages
 */
export function deleteLolPerksV1Pages(): Promise<unknown> {
  return del('/lol-perks/v1/pages')
}

/**
 * GetLolPerksV1Pages
 * @url GET /lol-perks/v1/pages
 */
export function getLolPerksV1Pages(): Promise<unknown> {
  return get('/lol-perks/v1/pages')
}

/**
 * PostLolPerksV1Pages
 * @url POST /lol-perks/v1/pages
 */
export function postLolPerksV1Pages(): Promise<unknown> {
  return post('/lol-perks/v1/pages')
}

/**
 * PutLolPerksV1PagesValidate
 * @url PUT /lol-perks/v1/pages/validate
 */
export function putLolPerksV1PagesValidate(): Promise<unknown> {
  return put('/lol-perks/v1/pages/validate')
}

/**
 * DeleteLolPerksV1PagesById
 * @url DELETE /lol-perks/v1/pages/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolPerksV1PagesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-perks/v1/pages/${id}`)
}

/**
 * GetLolPerksV1PagesById
 * @url GET /lol-perks/v1/pages/{id}
 * @param params - 路径参数: { id }
 */
export function getLolPerksV1PagesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-perks/v1/pages/${id}`)
}

/**
 * PutLolPerksV1PagesById
 * @url PUT /lol-perks/v1/pages/{id}
 * @param params - 路径参数: { id }
 */
export function putLolPerksV1PagesById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/lol-perks/v1/pages/${id}`)
}

/**
 * DeleteLolPerksV1PagesByIdAutoModifiedSelections
 * @url DELETE /lol-perks/v1/pages/{id}/auto-modified-selections
 * @param params - 路径参数: { id }
 */
export function deleteLolPerksV1PagesByIdAutoModifiedSelections(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-perks/v1/pages/${id}/auto-modified-selections`)
}

/**
 * GetLolPerksV1Perks
 * @url GET /lol-perks/v1/perks
 */
export function getLolPerksV1Perks(): Promise<unknown> {
  return get('/lol-perks/v1/perks')
}

/**
 * PutLolPerksV1PerksAckGameplayUpdated
 * @url PUT /lol-perks/v1/perks/ack-gameplay-updated
 */
export function putLolPerksV1PerksAckGameplayUpdated(): Promise<unknown> {
  return put('/lol-perks/v1/perks/ack-gameplay-updated')
}

/**
 * GetLolPerksV1PerksDisabled
 * @url GET /lol-perks/v1/perks/disabled
 */
export function getLolPerksV1PerksDisabled(): Promise<unknown> {
  return get('/lol-perks/v1/perks/disabled')
}

/**
 * GetLolPerksV1PerksGameplayUpdated
 * @url GET /lol-perks/v1/perks/gameplay-updated
 */
export function getLolPerksV1PerksGameplayUpdated(): Promise<unknown> {
  return get('/lol-perks/v1/perks/gameplay-updated')
}

/**
 * GetLolPerksV1SchemaVersion
 * @url GET /lol-perks/v1/schema-version
 */
export function getLolPerksV1SchemaVersion(): Promise<unknown> {
  return get('/lol-perks/v1/schema-version')
}

/**
 * GetLolPerksV1Servicesettings
 * @url GET /lol-perks/v1/servicesettings
 */
export function getLolPerksV1Servicesettings(): Promise<unknown> {
  return get('/lol-perks/v1/servicesettings')
}

/**
 * GetLolPerksV1Settings
 * @url GET /lol-perks/v1/settings
 */
export function getLolPerksV1Settings(): Promise<unknown> {
  return get('/lol-perks/v1/settings')
}

/**
 * PutLolPerksV1Settings
 * @url PUT /lol-perks/v1/settings
 */
export function putLolPerksV1Settings(): Promise<unknown> {
  return put('/lol-perks/v1/settings')
}

/**
 * GetLolPerksV1ShowAutoModifiedPagesNotification
 * @url GET /lol-perks/v1/show-auto-modified-pages-notification
 */
export function getLolPerksV1ShowAutoModifiedPagesNotification(): Promise<unknown> {
  return get('/lol-perks/v1/show-auto-modified-pages-notification')
}

/**
 * PostLolPerksV1ShowAutoModifiedPagesNotification
 * @url POST /lol-perks/v1/show-auto-modified-pages-notification
 */
export function postLolPerksV1ShowAutoModifiedPagesNotification(): Promise<unknown> {
  return post('/lol-perks/v1/show-auto-modified-pages-notification')
}

/**
 * GetLolPerksV1Styles
 * @url GET /lol-perks/v1/styles
 */
export function getLolPerksV1Styles(): Promise<unknown> {
  return get('/lol-perks/v1/styles')
}

/**
 * PostLolPerksV1UpdatePageOrder
 * @url POST /lol-perks/v1/update-page-order
 */
export function postLolPerksV1UpdatePageOrder(): Promise<unknown> {
  return post('/lol-perks/v1/update-page-order')
}

/**
 * GetLolPersonalizedOffersV1Offers
 * @url GET /lol-personalized-offers/v1/offers
 */
export function getLolPersonalizedOffersV1Offers(): Promise<unknown> {
  return get('/lol-personalized-offers/v1/offers')
}

/**
 * PostLolPersonalizedOffersV1OffersByIdPurchase
 * @url POST /lol-personalized-offers/v1/offers/{id}/purchase
 * @param params - 路径参数: { id }
 */
export function postLolPersonalizedOffersV1OffersByIdPurchase(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-personalized-offers/v1/offers/${id}/purchase`)
}

/**
 * PostLolPersonalizedOffersV1OffersByIdReveal
 * @url POST /lol-personalized-offers/v1/offers/{id}/reveal
 * @param params - 路径参数: { id }
 */
export function postLolPersonalizedOffersV1OffersByIdReveal(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-personalized-offers/v1/offers/${id}/reveal`)
}

/**
 * GetLolPersonalizedOffersV1Ready
 * @url GET /lol-personalized-offers/v1/ready
 */
export function getLolPersonalizedOffersV1Ready(): Promise<unknown> {
  return get('/lol-personalized-offers/v1/ready')
}

/**
 * GetLolPersonalizedOffersV1Status
 * @url GET /lol-personalized-offers/v1/status
 */
export function getLolPersonalizedOffersV1Status(): Promise<unknown> {
  return get('/lol-personalized-offers/v1/status')
}

/**
 * GetLolPersonalizedOffersV1Themed
 * @url GET /lol-personalized-offers/v1/themed
 */
export function getLolPersonalizedOffersV1Themed(): Promise<unknown> {
  return get('/lol-personalized-offers/v1/themed')
}

/**
 * PostLolPftV2Events
 * @url POST /lol-pft/v2/events
 */
export function postLolPftV2Events(): Promise<unknown> {
  return post('/lol-pft/v2/events')
}

/**
 * GetLolPftV2Survey
 * @url GET /lol-pft/v2/survey
 */
export function getLolPftV2Survey(): Promise<unknown> {
  return get('/lol-pft/v2/survey')
}

/**
 * PostLolPftV2Survey
 * @url POST /lol-pft/v2/survey
 */
export function postLolPftV2Survey(): Promise<unknown> {
  return post('/lol-pft/v2/survey')
}

/**
 * GetLolPlatformConfigV1InitialConfigurationComplete
 * @url GET /lol-platform-config/v1/initial-configuration-complete
 */
export function getLolPlatformConfigV1InitialConfigurationComplete(): Promise<unknown> {
  return get('/lol-platform-config/v1/initial-configuration-complete')
}

/**
 * GetLolPlatformConfigV1Namespaces
 * @url GET /lol-platform-config/v1/namespaces
 */
export function getLolPlatformConfigV1Namespaces(): Promise<unknown> {
  return get('/lol-platform-config/v1/namespaces')
}

/**
 * GetLolPlatformConfigV1NamespacesByNs
 * @url GET /lol-platform-config/v1/namespaces/{ns}
 * @param params - 路径参数: { ns }
 */
export function getLolPlatformConfigV1NamespacesByNs(params: { ns: string | number }): Promise<unknown> {
  const { ns } = params

  return get(`/lol-platform-config/v1/namespaces/${ns}`)
}

/**
 * GetLolPlatformConfigV1NamespacesByNsByKey
 * @url GET /lol-platform-config/v1/namespaces/{ns}/{key}
 * @param params - 路径参数: { ns, key }
 */
export function getLolPlatformConfigV1NamespacesByNsByKey(params: { ns: string | number, key: string | number }): Promise<unknown> {
  const { ns, key } = params

  return get(`/lol-platform-config/v1/namespaces/${ns}/${key}`)
}

/**
 * GetLolPlayerBehaviorV1Ban
 * @url GET /lol-player-behavior/v1/ban
 */
export function getLolPlayerBehaviorV1Ban(): Promise<unknown> {
  return get('/lol-player-behavior/v1/ban')
}

/**
 * GetLolPlayerBehaviorV1ChatRestriction
 * @url GET /lol-player-behavior/v1/chat-restriction
 */
export function getLolPlayerBehaviorV1ChatRestriction(): Promise<unknown> {
  return get('/lol-player-behavior/v1/chat-restriction')
}

/**
 * DeleteLolPlayerBehaviorV1CodeOfConductNotification
 * @url DELETE /lol-player-behavior/v1/code-of-conduct-notification
 */
export function deleteLolPlayerBehaviorV1CodeOfConductNotification(): Promise<unknown> {
  return del('/lol-player-behavior/v1/code-of-conduct-notification')
}

/**
 * GetLolPlayerBehaviorV1CodeOfConductNotification
 * @url GET /lol-player-behavior/v1/code-of-conduct-notification
 */
export function getLolPlayerBehaviorV1CodeOfConductNotification(): Promise<unknown> {
  return get('/lol-player-behavior/v1/code-of-conduct-notification')
}

/**
 * GetLolPlayerBehaviorV1Config
 * @url GET /lol-player-behavior/v1/config
 */
export function getLolPlayerBehaviorV1Config(): Promise<unknown> {
  return get('/lol-player-behavior/v1/config')
}

/**
 * GetLolPlayerBehaviorV1RankedRestriction
 * @url GET /lol-player-behavior/v1/ranked-restriction
 */
export function getLolPlayerBehaviorV1RankedRestriction(): Promise<unknown> {
  return get('/lol-player-behavior/v1/ranked-restriction')
}

/**
 * GetLolPlayerBehaviorV1ReformCard
 * @url GET /lol-player-behavior/v1/reform-card
 */
export function getLolPlayerBehaviorV1ReformCard(): Promise<unknown> {
  return get('/lol-player-behavior/v1/reform-card')
}

/**
 * GetLolPlayerBehaviorV1ReporterFeedback
 * @url GET /lol-player-behavior/v1/reporter-feedback
 */
export function getLolPlayerBehaviorV1ReporterFeedback(): Promise<unknown> {
  return get('/lol-player-behavior/v1/reporter-feedback')
}

/**
 * DeleteLolPlayerBehaviorV1ReporterFeedbackById
 * @url DELETE /lol-player-behavior/v1/reporter-feedback/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolPlayerBehaviorV1ReporterFeedbackById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-player-behavior/v1/reporter-feedback/${id}`)
}

/**
 * GetLolPlayerBehaviorV1ReporterFeedbackById
 * @url GET /lol-player-behavior/v1/reporter-feedback/{id}
 * @param params - 路径参数: { id }
 */
export function getLolPlayerBehaviorV1ReporterFeedbackById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-player-behavior/v1/reporter-feedback/${id}`)
}

/**
 * GetLolPlayerBehaviorV2ReformCard
 * @url GET /lol-player-behavior/v2/reform-card
 */
export function getLolPlayerBehaviorV2ReformCard(): Promise<unknown> {
  return get('/lol-player-behavior/v2/reform-card')
}

/**
 * GetLolPlayerLevelUpV1LevelUp
 * @url GET /lol-player-level-up/v1/level-up
 */
export function getLolPlayerLevelUpV1LevelUp(): Promise<unknown> {
  return get('/lol-player-level-up/v1/level-up')
}

/**
 * GetLolPlayerLevelUpV1LevelUpNotificationsByPluginName
 * @url GET /lol-player-level-up/v1/level-up-notifications/{pluginName}
 * @param params - 路径参数: { pluginName }
 */
export function getLolPlayerLevelUpV1LevelUpNotificationsByPluginName(params: { pluginName: string | number }): Promise<unknown> {
  const { pluginName } = params

  return get(`/lol-player-level-up/v1/level-up-notifications/${pluginName}`)
}

/**
 * PostLolPlayerLevelUpV1LevelUpNotificationsByPluginName
 * @url POST /lol-player-level-up/v1/level-up-notifications/{pluginName}
 * @param params - 路径参数: { pluginName }
 */
export function postLolPlayerLevelUpV1LevelUpNotificationsByPluginName(params: { pluginName: string | number }): Promise<unknown> {
  const { pluginName } = params

  return post(`/lol-player-level-up/v1/level-up-notifications/${pluginName}`)
}

/**
 * GetLolPlayerMessagingV1CelebrationNotification
 * @url GET /lol-player-messaging/v1/celebration/notification
 */
export function getLolPlayerMessagingV1CelebrationNotification(): Promise<unknown> {
  return get('/lol-player-messaging/v1/celebration/notification')
}

/**
 * DeleteLolPlayerMessagingV1CelebrationNotificationByIdAcknowledge
 * @url DELETE /lol-player-messaging/v1/celebration/notification/{id}/acknowledge
 * @param params - 路径参数: { id }
 */
export function deleteLolPlayerMessagingV1CelebrationNotificationByIdAcknowledge(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-player-messaging/v1/celebration/notification/${id}/acknowledge`)
}

/**
 * GetLolPlayerMessagingV1Notification
 * @url GET /lol-player-messaging/v1/notification
 */
export function getLolPlayerMessagingV1Notification(): Promise<unknown> {
  return get('/lol-player-messaging/v1/notification')
}

/**
 * DeleteLolPlayerMessagingV1NotificationByIdAcknowledge
 * @url DELETE /lol-player-messaging/v1/notification/{id}/acknowledge
 * @param params - 路径参数: { id }
 */
export function deleteLolPlayerMessagingV1NotificationByIdAcknowledge(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-player-messaging/v1/notification/${id}/acknowledge`)
}

/**
 * PostLolPlayerPreferencesV1Hash
 * @url POST /lol-player-preferences/v1/hash
 */
export function postLolPlayerPreferencesV1Hash(): Promise<unknown> {
  return post('/lol-player-preferences/v1/hash')
}

/**
 * PostLolPlayerPreferencesV1PlayerPreferencesEndpointOverride
 * @url POST /lol-player-preferences/v1/player-preferences-endpoint-override
 */
export function postLolPlayerPreferencesV1PlayerPreferencesEndpointOverride(): Promise<unknown> {
  return post('/lol-player-preferences/v1/player-preferences-endpoint-override')
}

/**
 * GetLolPlayerPreferencesV1PlayerPreferencesReady
 * @url GET /lol-player-preferences/v1/player-preferences-ready
 */
export function getLolPlayerPreferencesV1PlayerPreferencesReady(): Promise<unknown> {
  return get('/lol-player-preferences/v1/player-preferences-ready')
}

/**
 * PutLolPlayerPreferencesV1Preference
 * @url PUT /lol-player-preferences/v1/preference
 */
export function putLolPlayerPreferencesV1Preference(): Promise<unknown> {
  return put('/lol-player-preferences/v1/preference')
}

/**
 * GetLolPlayerPreferencesV1PreferenceByType
 * @url GET /lol-player-preferences/v1/preference/{type}
 * @param params - 路径参数: { type }
 * @param query - 查询参数: { hash }
 */
export function getLolPlayerPreferencesV1PreferenceByType(params: { type: string | number }, query: { hash?: string }): Promise<unknown> {
  const { type } = params

  return get(`/lol-player-preferences/v1/preference/${type}`, query)
}

/**
 * PostLolPlayerReportSenderV1ChampSelectReportsPuuidByPuuidCategoryByCategory
 * @url POST /lol-player-report-sender/v1/champ-select-reports/puuid/{puuid}/category/{category}
 * @param params - 路径参数: { puuid, category }
 */
export function postLolPlayerReportSenderV1ChampSelectReportsPuuidByPuuidCategoryByCategory(params: { puuid: string | number, category: string | number }): Promise<unknown> {
  const { puuid, category } = params

  return post(`/lol-player-report-sender/v1/champ-select-reports/puuid/${puuid}/category/${category}`)
}

/**
 * PostLolPlayerReportSenderV1EndOfGameReports
 * @url POST /lol-player-report-sender/v1/end-of-game-reports
 */
export function postLolPlayerReportSenderV1EndOfGameReports(): Promise<unknown> {
  return post('/lol-player-report-sender/v1/end-of-game-reports')
}

/**
 * PostLolPreEndOfGameV1CompleteBySequenceEventName
 * @url POST /lol-pre-end-of-game/v1/complete/{sequenceEventName}
 * @param params - 路径参数: { sequenceEventName }
 */
export function postLolPreEndOfGameV1CompleteBySequenceEventName(params: { sequenceEventName: string | number }): Promise<unknown> {
  const { sequenceEventName } = params

  return post(`/lol-pre-end-of-game/v1/complete/${sequenceEventName}`)
}

/**
 * GetLolPreEndOfGameV1CurrentSequenceEvent
 * @url GET /lol-pre-end-of-game/v1/currentSequenceEvent
 */
export function getLolPreEndOfGameV1CurrentSequenceEvent(): Promise<unknown> {
  return get('/lol-pre-end-of-game/v1/currentSequenceEvent')
}

/**
 * DeleteLolPreEndOfGameV1RegistrationBySequenceEventName
 * @url DELETE /lol-pre-end-of-game/v1/registration/{sequenceEventName}
 * @param params - 路径参数: { sequenceEventName }
 */
export function deleteLolPreEndOfGameV1RegistrationBySequenceEventName(params: { sequenceEventName: string | number }): Promise<unknown> {
  const { sequenceEventName } = params

  return del(`/lol-pre-end-of-game/v1/registration/${sequenceEventName}`)
}

/**
 * PostLolPreEndOfGameV1RegistrationBySequenceEventNameByPriority
 * @url POST /lol-pre-end-of-game/v1/registration/{sequenceEventName}/{priority}
 * @param params - 路径参数: { sequenceEventName, priority }
 */
export function postLolPreEndOfGameV1RegistrationBySequenceEventNameByPriority(params: { sequenceEventName: string | number, priority: string | number }): Promise<unknown> {
  const { sequenceEventName, priority } = params

  return post(`/lol-pre-end-of-game/v1/registration/${sequenceEventName}/${priority}`)
}

/**
 * GetLolPremadeVoiceV1Availability
 * @url GET /lol-premade-voice/v1/availability
 */
export function getLolPremadeVoiceV1Availability(): Promise<unknown> {
  return get('/lol-premade-voice/v1/availability')
}

/**
 * GetLolPremadeVoiceV1Capturedevices
 * @url GET /lol-premade-voice/v1/capturedevices
 */
export function getLolPremadeVoiceV1Capturedevices(): Promise<unknown> {
  return get('/lol-premade-voice/v1/capturedevices')
}

/**
 * PutLolPremadeVoiceV1Capturedevices
 * @url PUT /lol-premade-voice/v1/capturedevices
 */
export function putLolPremadeVoiceV1Capturedevices(): Promise<unknown> {
  return put('/lol-premade-voice/v1/capturedevices')
}

/**
 * GetLolPremadeVoiceV1FirstExperience
 * @url GET /lol-premade-voice/v1/first-experience
 */
export function getLolPremadeVoiceV1FirstExperience(): Promise<unknown> {
  return get('/lol-premade-voice/v1/first-experience')
}

/**
 * PostLolPremadeVoiceV1FirstExperienceGame
 * @url POST /lol-premade-voice/v1/first-experience/game
 */
export function postLolPremadeVoiceV1FirstExperienceGame(): Promise<unknown> {
  return post('/lol-premade-voice/v1/first-experience/game')
}

/**
 * PostLolPremadeVoiceV1FirstExperienceLcu
 * @url POST /lol-premade-voice/v1/first-experience/lcu
 */
export function postLolPremadeVoiceV1FirstExperienceLcu(): Promise<unknown> {
  return post('/lol-premade-voice/v1/first-experience/lcu')
}

/**
 * PostLolPremadeVoiceV1FirstExperienceReset
 * @url POST /lol-premade-voice/v1/first-experience/reset
 */
export function postLolPremadeVoiceV1FirstExperienceReset(): Promise<unknown> {
  return post('/lol-premade-voice/v1/first-experience/reset')
}

/**
 * PostLolPremadeVoiceV1GameClientUpdatedPTTKey
 * @url POST /lol-premade-voice/v1/gameClientUpdatedPTTKey
 */
export function postLolPremadeVoiceV1GameClientUpdatedPTTKey(): Promise<unknown> {
  return post('/lol-premade-voice/v1/gameClientUpdatedPTTKey')
}

/**
 * DeleteLolPremadeVoiceV1MicTest
 * @url DELETE /lol-premade-voice/v1/mic-test
 */
export function deleteLolPremadeVoiceV1MicTest(): Promise<unknown> {
  return del('/lol-premade-voice/v1/mic-test')
}

/**
 * GetLolPremadeVoiceV1MicTest
 * @url GET /lol-premade-voice/v1/mic-test
 */
export function getLolPremadeVoiceV1MicTest(): Promise<unknown> {
  return get('/lol-premade-voice/v1/mic-test')
}

/**
 * PostLolPremadeVoiceV1MicTest
 * @url POST /lol-premade-voice/v1/mic-test
 */
export function postLolPremadeVoiceV1MicTest(): Promise<unknown> {
  return post('/lol-premade-voice/v1/mic-test')
}

/**
 * GetLolPremadeVoiceV1ParticipantRecords
 * @url GET /lol-premade-voice/v1/participant-records
 */
export function getLolPremadeVoiceV1ParticipantRecords(): Promise<unknown> {
  return get('/lol-premade-voice/v1/participant-records')
}

/**
 * GetLolPremadeVoiceV1Participants
 * @url GET /lol-premade-voice/v1/participants
 */
export function getLolPremadeVoiceV1Participants(): Promise<unknown> {
  return get('/lol-premade-voice/v1/participants')
}

/**
 * PutLolPremadeVoiceV1ParticipantsByPuuidMute
 * @url PUT /lol-premade-voice/v1/participants/{puuid}/mute
 * @param params - 路径参数: { puuid }
 */
export function putLolPremadeVoiceV1ParticipantsByPuuidMute(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return put(`/lol-premade-voice/v1/participants/${puuid}/mute`)
}

/**
 * PutLolPremadeVoiceV1ParticipantsByPuuidVolume
 * @url PUT /lol-premade-voice/v1/participants/{puuid}/volume
 * @param params - 路径参数: { puuid }
 */
export function putLolPremadeVoiceV1ParticipantsByPuuidVolume(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return put(`/lol-premade-voice/v1/participants/${puuid}/volume`)
}

/**
 * PostLolPremadeVoiceV1PushToTalkCheckAvailable
 * @url POST /lol-premade-voice/v1/push-to-talk/check-available
 */
export function postLolPremadeVoiceV1PushToTalkCheckAvailable(): Promise<unknown> {
  return post('/lol-premade-voice/v1/push-to-talk/check-available')
}

/**
 * PutLolPremadeVoiceV1SelfActivationSensitivity
 * @url PUT /lol-premade-voice/v1/self/activationSensitivity
 */
export function putLolPremadeVoiceV1SelfActivationSensitivity(): Promise<unknown> {
  return put('/lol-premade-voice/v1/self/activationSensitivity')
}

/**
 * PutLolPremadeVoiceV1SelfInputMode
 * @url PUT /lol-premade-voice/v1/self/inputMode
 */
export function putLolPremadeVoiceV1SelfInputMode(): Promise<unknown> {
  return put('/lol-premade-voice/v1/self/inputMode')
}

/**
 * PutLolPremadeVoiceV1SelfMicLevel
 * @url PUT /lol-premade-voice/v1/self/micLevel
 */
export function putLolPremadeVoiceV1SelfMicLevel(): Promise<unknown> {
  return put('/lol-premade-voice/v1/self/micLevel')
}

/**
 * PutLolPremadeVoiceV1SelfMute
 * @url PUT /lol-premade-voice/v1/self/mute
 */
export function putLolPremadeVoiceV1SelfMute(): Promise<unknown> {
  return put('/lol-premade-voice/v1/self/mute')
}

/**
 * DeleteLolPremadeVoiceV1Session
 * @url DELETE /lol-premade-voice/v1/session
 */
export function deleteLolPremadeVoiceV1Session(): Promise<unknown> {
  return del('/lol-premade-voice/v1/session')
}

/**
 * PostLolPremadeVoiceV1Session
 * @url POST /lol-premade-voice/v1/session
 */
export function postLolPremadeVoiceV1Session(): Promise<unknown> {
  return post('/lol-premade-voice/v1/session')
}

/**
 * GetLolPremadeVoiceV1Settings
 * @url GET /lol-premade-voice/v1/settings
 */
export function getLolPremadeVoiceV1Settings(): Promise<unknown> {
  return get('/lol-premade-voice/v1/settings')
}

/**
 * PostLolPremadeVoiceV1SettingsReset
 * @url POST /lol-premade-voice/v1/settings/reset
 */
export function postLolPremadeVoiceV1SettingsReset(): Promise<unknown> {
  return post('/lol-premade-voice/v1/settings/reset')
}

/**
 * GetLolPublishingContentV1Ready
 * @url GET /lol-publishing-content/v1/ready
 */
export function getLolPublishingContentV1Ready(): Promise<unknown> {
  return get('/lol-publishing-content/v1/ready')
}

/**
 * GetLolPublishingContentV1TftHubCards
 * @url GET /lol-publishing-content/v1/tft-hub-cards
 */
export function getLolPublishingContentV1TftHubCards(): Promise<unknown> {
  return get('/lol-publishing-content/v1/tft-hub-cards')
}

/**
 * GetLolPurchaseWidgetV1Configuration
 * @url GET /lol-purchase-widget/v1/configuration
 */
export function getLolPurchaseWidgetV1Configuration(): Promise<unknown> {
  return get('/lol-purchase-widget/v1/configuration')
}

/**
 * GetLolPurchaseWidgetV1OrderNotifications
 * @url GET /lol-purchase-widget/v1/order-notifications
 */
export function getLolPurchaseWidgetV1OrderNotifications(): Promise<unknown> {
  return get('/lol-purchase-widget/v1/order-notifications')
}

/**
 * GetLolPurchaseWidgetV1PurchasableItem
 * @url GET /lol-purchase-widget/v1/purchasable-item
 * @param query - 查询参数: { inventoryType, itemId }
 */
export function getLolPurchaseWidgetV1PurchasableItem(query: { inventoryType: string; itemId: number }): Promise<unknown> {
  return get('/lol-purchase-widget/v1/purchasable-item', query)
}

/**
 * PostLolPurchaseWidgetV1PurchasableItemsByInventoryType
 * @url POST /lol-purchase-widget/v1/purchasable-items/{inventoryType}
 * @param params - 路径参数: { inventoryType }
 */
export function postLolPurchaseWidgetV1PurchasableItemsByInventoryType(params: { inventoryType: string | number }): Promise<unknown> {
  const { inventoryType } = params

  return post(`/lol-purchase-widget/v1/purchasable-items/${inventoryType}`)
}

/**
 * PostLolPurchaseWidgetV2PurchaseItems
 * @url POST /lol-purchase-widget/v2/purchaseItems
 */
export function postLolPurchaseWidgetV2PurchaseItems(): Promise<unknown> {
  return post('/lol-purchase-widget/v2/purchaseItems')
}

/**
 * GetLolPurchaseWidgetV3BaseSkinLineDataByOfferId
 * @url GET /lol-purchase-widget/v3/base-skin-line-data/{offerId}
 * @param params - 路径参数: { offerId }
 */
export function getLolPurchaseWidgetV3BaseSkinLineDataByOfferId(params: { offerId: string | number }): Promise<unknown> {
  const { offerId } = params

  return get(`/lol-purchase-widget/v3/base-skin-line-data/${offerId}`)
}

/**
 * GetLolPurchaseWidgetV3PurchaseOfferOrderStatuses
 * @url GET /lol-purchase-widget/v3/purchase-offer-order-statuses
 */
export function getLolPurchaseWidgetV3PurchaseOfferOrderStatuses(): Promise<unknown> {
  return get('/lol-purchase-widget/v3/purchase-offer-order-statuses')
}

/**
 * PostLolPurchaseWidgetV3PurchaseOffer
 * @url POST /lol-purchase-widget/v3/purchaseOffer
 */
export function postLolPurchaseWidgetV3PurchaseOffer(): Promise<unknown> {
  return post('/lol-purchase-widget/v3/purchaseOffer')
}

/**
 * PostLolPurchaseWidgetV3ValidateOffer
 * @url POST /lol-purchase-widget/v3/validateOffer
 */
export function postLolPurchaseWidgetV3ValidateOffer(): Promise<unknown> {
  return post('/lol-purchase-widget/v3/validateOffer')
}

/**
 * GetLolRankedV1ApexLeaguesByQueueTypeByTier
 * @url GET /lol-ranked/v1/apex-leagues/{queueType}/{tier}
 * @param params - 路径参数: { queueType, tier }
 */
export function getLolRankedV1ApexLeaguesByQueueTypeByTier(params: { queueType: string | number, tier: string | number }): Promise<unknown> {
  const { queueType, tier } = params

  return get(`/lol-ranked/v1/apex-leagues/${queueType}/${tier}`)
}

/**
 * GetLolRankedV1ChallengerLaddersEnabled
 * @url GET /lol-ranked/v1/challenger-ladders-enabled
 */
export function getLolRankedV1ChallengerLaddersEnabled(): Promise<unknown> {
  return get('/lol-ranked/v1/challenger-ladders-enabled')
}

/**
 * GetLolRankedV1CurrentLpChangeNotification
 * @url GET /lol-ranked/v1/current-lp-change-notification
 */
export function getLolRankedV1CurrentLpChangeNotification(): Promise<unknown> {
  return get('/lol-ranked/v1/current-lp-change-notification')
}

/**
 * GetLolRankedV1CurrentRankedStats
 * @url GET /lol-ranked/v1/current-ranked-stats
 */
export function getLolRankedV1CurrentRankedStats(): Promise<unknown> {
  return get('/lol-ranked/v1/current-ranked-stats')
}

/**
 * GetLolRankedV1EosNotifications
 * @url GET /lol-ranked/v1/eos-notifications
 */
export function getLolRankedV1EosNotifications(): Promise<unknown> {
  return get('/lol-ranked/v1/eos-notifications')
}

/**
 * PostLolRankedV1EosNotificationsByIdAcknowledge
 * @url POST /lol-ranked/v1/eos-notifications/{id}/acknowledge
 * @param params - 路径参数: { id }
 */
export function postLolRankedV1EosNotificationsByIdAcknowledge(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-ranked/v1/eos-notifications/${id}/acknowledge`)
}

/**
 * GetLolRankedV1EosRewards
 * @url GET /lol-ranked/v1/eos-rewards
 */
export function getLolRankedV1EosRewards(): Promise<unknown> {
  return get('/lol-ranked/v1/eos-rewards')
}

/**
 * GetLolRankedV1LeagueLaddersByPuuid
 * @url GET /lol-ranked/v1/league-ladders/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolRankedV1LeagueLaddersByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-ranked/v1/league-ladders/${puuid}`)
}

/**
 * GetLolRankedV1Notifications
 * @url GET /lol-ranked/v1/notifications
 */
export function getLolRankedV1Notifications(): Promise<unknown> {
  return get('/lol-ranked/v1/notifications')
}

/**
 * PostLolRankedV1NotificationsByIdAcknowledge
 * @url POST /lol-ranked/v1/notifications/{id}/acknowledge
 * @param params - 路径参数: { id }
 */
export function postLolRankedV1NotificationsByIdAcknowledge(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/lol-ranked/v1/notifications/${id}/acknowledge`)
}

/**
 * GetLolRankedV1RankedStats
 * @url GET /lol-ranked/v1/ranked-stats
 * @param query - 查询参数: { puuids }
 */
export function getLolRankedV1RankedStats(query: { puuids: string[] }): Promise<unknown> {
  return get('/lol-ranked/v1/ranked-stats', query)
}

/**
 * GetLolRankedV1RankedStatsByPuuid
 * @url GET /lol-ranked/v1/ranked-stats/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolRankedV1RankedStatsByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-ranked/v1/ranked-stats/${puuid}`)
}

/**
 * GetLolRankedV1RatedLadderByQueueType
 * @url GET /lol-ranked/v1/rated-ladder/{queueType}
 * @param params - 路径参数: { queueType }
 */
export function getLolRankedV1RatedLadderByQueueType(params: { queueType: string | number }): Promise<unknown> {
  const { queueType } = params

  return get(`/lol-ranked/v1/rated-ladder/${queueType}`)
}

/**
 * GetLolRankedV1SignedRankedStats
 * @url GET /lol-ranked/v1/signed-ranked-stats
 */
export function getLolRankedV1SignedRankedStats(): Promise<unknown> {
  return get('/lol-ranked/v1/signed-ranked-stats')
}

/**
 * GetLolRankedV1SocialLeaderboardRankedQueueStatsForPuuids
 * @url GET /lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids
 * @param query - 查询参数: { queueType, puuids }
 */
export function getLolRankedV1SocialLeaderboardRankedQueueStatsForPuuids(query: { queueType: 'NONE' | 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' | 'RANKED_TFT' | 'RANKED_TFT_TURBO' | 'RANKED_TFT_PAIRS'; puuids: string[] }): Promise<unknown> {
  return get('/lol-ranked/v1/social-leaderboard-ranked-queue-stats-for-puuids', query)
}

/**
 * GetLolRankedV1SplitsConfig
 * @url GET /lol-ranked/v1/splits-config
 */
export function getLolRankedV1SplitsConfig(): Promise<unknown> {
  return get('/lol-ranked/v1/splits-config')
}

/**
 * GetLolRankedV1TopRatedLaddersEnabled
 * @url GET /lol-ranked/v1/top-rated-ladders-enabled
 */
export function getLolRankedV1TopRatedLaddersEnabled(): Promise<unknown> {
  return get('/lol-ranked/v1/top-rated-ladders-enabled')
}

/**
 * GetLolRankedV2Tiers
 * @url GET /lol-ranked/v2/tiers
 * @param query - 查询参数: { summonerIds, queueTypes }
 */
export function getLolRankedV2Tiers(query: { summonerIds: number[]; queueTypes: LolRankedLeagueQueueType[] }): Promise<unknown> {
  return get('/lol-ranked/v2/tiers', query)
}

/**
 * GetLolRegaliaV2Config
 * @url GET /lol-regalia/v2/config
 */
export function getLolRegaliaV2Config(): Promise<unknown> {
  return get('/lol-regalia/v2/config')
}

/**
 * GetLolRegaliaV2CurrentSummonerRegalia
 * @url GET /lol-regalia/v2/current-summoner/regalia
 */
export function getLolRegaliaV2CurrentSummonerRegalia(): Promise<unknown> {
  return get('/lol-regalia/v2/current-summoner/regalia')
}

/**
 * PutLolRegaliaV2CurrentSummonerRegalia
 * @url PUT /lol-regalia/v2/current-summoner/regalia
 */
export function putLolRegaliaV2CurrentSummonerRegalia(): Promise<unknown> {
  return put('/lol-regalia/v2/current-summoner/regalia')
}

/**
 * GetLolRegaliaV2SummonersBySummonerIdQueuesByQueuePositionsByPositionRegalia
 * @url GET /lol-regalia/v2/summoners/{summonerId}/queues/{queue}/positions/{position}/regalia
 * @param params - 路径参数: { summonerId, queue, position }
 */
export function getLolRegaliaV2SummonersBySummonerIdQueuesByQueuePositionsByPositionRegalia(params: { summonerId: string | number, queue: string | number, position: string | number }): Promise<unknown> {
  const { summonerId, queue, position } = params

  return get(`/lol-regalia/v2/summoners/${summonerId}/queues/${queue}/positions/${position}/regalia`)
}

/**
 * GetLolRegaliaV2SummonersBySummonerIdQueuesByQueueRegalia
 * @url GET /lol-regalia/v2/summoners/{summonerId}/queues/{queue}/regalia
 * @param params - 路径参数: { summonerId, queue }
 */
export function getLolRegaliaV2SummonersBySummonerIdQueuesByQueueRegalia(params: { summonerId: string | number, queue: string | number }): Promise<unknown> {
  const { summonerId, queue } = params

  return get(`/lol-regalia/v2/summoners/${summonerId}/queues/${queue}/regalia`)
}

/**
 * GetLolRegaliaV2SummonersBySummonerIdRegalia
 * @url GET /lol-regalia/v2/summoners/{summonerId}/regalia
 * @param params - 路径参数: { summonerId }
 * @param query - 查询参数: { hovercard }
 */
export function getLolRegaliaV2SummonersBySummonerIdRegalia(params: { summonerId: string | number }, query: { hovercard: boolean }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-regalia/v2/summoners/${summonerId}/regalia`, query)
}

/**
 * GetLolRegaliaV2SummonersBySummonerIdRegaliaAsync
 * @url GET /lol-regalia/v2/summoners/{summonerId}/regalia/async
 * @param params - 路径参数: { summonerId }
 */
export function getLolRegaliaV2SummonersBySummonerIdRegaliaAsync(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return get(`/lol-regalia/v2/summoners/${summonerId}/regalia/async`)
}

/**
 * GetLolReplaysV1Configuration
 * @url GET /lol-replays/v1/configuration
 */
export function getLolReplaysV1Configuration(): Promise<unknown> {
  return get('/lol-replays/v1/configuration')
}

/**
 * GetLolReplaysV1MetadataByGameId
 * @url GET /lol-replays/v1/metadata/{gameId}
 * @param params - 路径参数: { gameId }
 */
export function getLolReplaysV1MetadataByGameId(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return get(`/lol-replays/v1/metadata/${gameId}`)
}

/**
 * PostLolReplaysV1MetadataByGameIdCreateGameVersionByGameVersionGameTypeByGameTypeQueueIdByQueueId
 * @url POST /lol-replays/v1/metadata/{gameId}/create/gameVersion/{gameVersion}/gameType/{gameType}/queueId/{queueId}
 * @param params - 路径参数: { gameId, gameVersion, gameType, queueId }
 */
export function postLolReplaysV1MetadataByGameIdCreateGameVersionByGameVersionGameTypeByGameTypeQueueIdByQueueId(params: { gameId: string | number, gameVersion: string | number, gameType: string | number, queueId: string | number }): Promise<unknown> {
  const { gameId, gameVersion, gameType, queueId } = params

  return post(`/lol-replays/v1/metadata/${gameId}/create/gameVersion/${gameVersion}/gameType/${gameType}/queueId/${queueId}`)
}

/**
 * GetLolReplaysV1RoflsPath
 * @url GET /lol-replays/v1/rofls/path
 */
export function getLolReplaysV1RoflsPath(): Promise<unknown> {
  return get('/lol-replays/v1/rofls/path')
}

/**
 * GetLolReplaysV1RoflsPathDefault
 * @url GET /lol-replays/v1/rofls/path/default
 */
export function getLolReplaysV1RoflsPathDefault(): Promise<unknown> {
  return get('/lol-replays/v1/rofls/path/default')
}

/**
 * PostLolReplaysV1RoflsScan
 * @url POST /lol-replays/v1/rofls/scan
 */
export function postLolReplaysV1RoflsScan(): Promise<unknown> {
  return post('/lol-replays/v1/rofls/scan')
}

/**
 * PostLolReplaysV1RoflsByGameIdDownload
 * @url POST /lol-replays/v1/rofls/{gameId}/download
 * @param params - 路径参数: { gameId }
 */
export function postLolReplaysV1RoflsByGameIdDownload(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return post(`/lol-replays/v1/rofls/${gameId}/download`)
}

/**
 * PostLolReplaysV1RoflsByGameIdDownloadGraceful
 * @url POST /lol-replays/v1/rofls/{gameId}/download/graceful
 * @param params - 路径参数: { gameId }
 */
export function postLolReplaysV1RoflsByGameIdDownloadGraceful(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return post(`/lol-replays/v1/rofls/${gameId}/download/graceful`)
}

/**
 * PostLolReplaysV1RoflsByGameIdWatch
 * @url POST /lol-replays/v1/rofls/{gameId}/watch
 * @param params - 路径参数: { gameId }
 */
export function postLolReplaysV1RoflsByGameIdWatch(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return post(`/lol-replays/v1/rofls/${gameId}/watch`)
}

/**
 * PostLolReplaysV2MetadataByGameIdCreate
 * @url POST /lol-replays/v2/metadata/{gameId}/create
 * @param params - 路径参数: { gameId }
 */
export function postLolReplaysV2MetadataByGameIdCreate(params: { gameId: string | number }): Promise<unknown> {
  const { gameId } = params

  return post(`/lol-replays/v2/metadata/${gameId}/create`)
}

/**
 * GetLolRewardsV1Grants
 * @url GET /lol-rewards/v1/grants
 * @param query - 查询参数: { status }
 */
export function getLolRewardsV1Grants(query: { status?: 'PENDING_FULFILLMENT' | 'PENDING_SELECTION' | 'FULFILLED' | 'FAILED' }): Promise<unknown> {
  return get('/lol-rewards/v1/grants', query)
}

/**
 * PostLolRewardsV1GrantsByGrantIdSelect
 * @url POST /lol-rewards/v1/grants/{grantId}/select
 * @param params - 路径参数: { grantId }
 */
export function postLolRewardsV1GrantsByGrantIdSelect(params: { grantId: string | number }): Promise<unknown> {
  const { grantId } = params

  return post(`/lol-rewards/v1/grants/${grantId}/select`)
}

/**
 * PatchLolRewardsV1GrantsByGrantIdView
 * @url PATCH /lol-rewards/v1/grants/{grantId}/view
 * @param params - 路径参数: { grantId }
 */
export function patchLolRewardsV1GrantsByGrantIdView(params: { grantId: string | number }): Promise<unknown> {
  const { grantId } = params

  return patch(`/lol-rewards/v1/grants/${grantId}/view`)
}

/**
 * GetLolRewardsV1Groups
 * @url GET /lol-rewards/v1/groups
 * @param query - 查询参数: { types }
 */
export function getLolRewardsV1Groups(query: { types?: string[] }): Promise<unknown> {
  return get('/lol-rewards/v1/groups', query)
}

/**
 * GetLolRmsV1ChampionMasteryLeaveupUpdate
 * @url GET /lol-rms/v1/champion-mastery-leaveup-update
 */
export function getLolRmsV1ChampionMasteryLeaveupUpdate(): Promise<unknown> {
  return get('/lol-rms/v1/champion-mastery-leaveup-update')
}

/**
 * DeleteLolRmsV1ChampionMasteryLeaveupUpdateById
 * @url DELETE /lol-rms/v1/champion-mastery-leaveup-update/{id}
 * @param params - 路径参数: { id }
 */
export function deleteLolRmsV1ChampionMasteryLeaveupUpdateById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/lol-rms/v1/champion-mastery-leaveup-update/${id}`)
}

/**
 * GetLolRsoAuthConfigurationV3ReadyState
 * @url GET /lol-rso-auth/configuration/v3/ready-state
 */
export function getLolRsoAuthConfigurationV3ReadyState(): Promise<unknown> {
  return get('/lol-rso-auth/configuration/v3/ready-state')
}

/**
 * DeleteLolRsoAuthV1AuthHintsHint
 * @url DELETE /lol-rso-auth/v1/auth-hints/hint
 */
export function deleteLolRsoAuthV1AuthHintsHint(): Promise<unknown> {
  return del('/lol-rso-auth/v1/auth-hints/hint')
}

/**
 * GetLolRsoAuthV1AuthHintsHint
 * @url GET /lol-rso-auth/v1/auth-hints/hint
 */
export function getLolRsoAuthV1AuthHintsHint(): Promise<unknown> {
  return get('/lol-rso-auth/v1/auth-hints/hint')
}

/**
 * DeleteLolRsoAuthV1Authorization
 * @url DELETE /lol-rso-auth/v1/authorization
 */
export function deleteLolRsoAuthV1Authorization(): Promise<unknown> {
  return del('/lol-rso-auth/v1/authorization')
}

/**
 * GetLolRsoAuthV1Authorization
 * @url GET /lol-rso-auth/v1/authorization
 */
export function getLolRsoAuthV1Authorization(): Promise<unknown> {
  return get('/lol-rso-auth/v1/authorization')
}

/**
 * GetLolRsoAuthV1AuthorizationAccessToken
 * @url GET /lol-rso-auth/v1/authorization/access-token
 */
export function getLolRsoAuthV1AuthorizationAccessToken(): Promise<unknown> {
  return get('/lol-rso-auth/v1/authorization/access-token')
}

/**
 * GetLolRsoAuthV1AuthorizationError
 * @url GET /lol-rso-auth/v1/authorization/error
 */
export function getLolRsoAuthV1AuthorizationError(): Promise<unknown> {
  return get('/lol-rso-auth/v1/authorization/error')
}

/**
 * PostLolRsoAuthV1AuthorizationGas
 * @url POST /lol-rso-auth/v1/authorization/gas
 */
export function postLolRsoAuthV1AuthorizationGas(): Promise<unknown> {
  return post('/lol-rso-auth/v1/authorization/gas')
}

/**
 * GetLolRsoAuthV1AuthorizationIdToken
 * @url GET /lol-rso-auth/v1/authorization/id-token
 */
export function getLolRsoAuthV1AuthorizationIdToken(): Promise<unknown> {
  return get('/lol-rso-auth/v1/authorization/id-token')
}

/**
 * PostLolRsoAuthV1AuthorizationRefresh
 * @url POST /lol-rso-auth/v1/authorization/refresh
 */
export function postLolRsoAuthV1AuthorizationRefresh(): Promise<unknown> {
  return post('/lol-rso-auth/v1/authorization/refresh')
}

/**
 * GetLolRsoAuthV1AuthorizationUserinfo
 * @url GET /lol-rso-auth/v1/authorization/userinfo
 */
export function getLolRsoAuthV1AuthorizationUserinfo(): Promise<unknown> {
  return get('/lol-rso-auth/v1/authorization/userinfo')
}

/**
 * PostLolRsoAuthV1AuthorizationUserinfo
 * @url POST /lol-rso-auth/v1/authorization/userinfo
 */
export function postLolRsoAuthV1AuthorizationUserinfo(): Promise<unknown> {
  return post('/lol-rso-auth/v1/authorization/userinfo')
}

/**
 * PostLolRsoAuthV1DeviceId
 * @url POST /lol-rso-auth/v1/device-id
 */
export function postLolRsoAuthV1DeviceId(): Promise<unknown> {
  return post('/lol-rso-auth/v1/device-id')
}

/**
 * DeleteLolRsoAuthV1Session
 * @url DELETE /lol-rso-auth/v1/session
 */
export function deleteLolRsoAuthV1Session(): Promise<unknown> {
  return del('/lol-rso-auth/v1/session')
}

/**
 * GetLolRsoAuthV1StatusByPlatformId
 * @url GET /lol-rso-auth/v1/status/{platformId}
 * @param params - 路径参数: { platformId }
 */
export function getLolRsoAuthV1StatusByPlatformId(params: { platformId: string | number }): Promise<unknown> {
  const { platformId } = params

  return get(`/lol-rso-auth/v1/status/${platformId}`)
}

/**
 * DeleteLolRsoAuthV2Config
 * @url DELETE /lol-rso-auth/v2/config
 */
export function deleteLolRsoAuthV2Config(): Promise<unknown> {
  return del('/lol-rso-auth/v2/config')
}

/**
 * PostLolRsoAuthV2Config
 * @url POST /lol-rso-auth/v2/config
 */
export function postLolRsoAuthV2Config(): Promise<unknown> {
  return post('/lol-rso-auth/v2/config')
}

/**
 * GetLolServiceStatusV1LcuStatus
 * @url GET /lol-service-status/v1/lcu-status
 */
export function getLolServiceStatusV1LcuStatus(): Promise<unknown> {
  return get('/lol-service-status/v1/lcu-status')
}

/**
 * GetLolServiceStatusV1TickerMessages
 * @url GET /lol-service-status/v1/ticker-messages
 */
export function getLolServiceStatusV1TickerMessages(): Promise<unknown> {
  return get('/lol-service-status/v1/ticker-messages')
}

/**
 * GetLolSettingsV1AccountDidreset
 * @url GET /lol-settings/v1/account/didreset
 */
export function getLolSettingsV1AccountDidreset(): Promise<unknown> {
  return get('/lol-settings/v1/account/didreset')
}

/**
 * PostLolSettingsV1AccountSave
 * @url POST /lol-settings/v1/account/save
 */
export function postLolSettingsV1AccountSave(): Promise<unknown> {
  return post('/lol-settings/v1/account/save')
}

/**
 * GetLolSettingsV1AccountByCategory
 * @url GET /lol-settings/v1/account/{category}
 * @param params - 路径参数: { category }
 */
export function getLolSettingsV1AccountByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return get(`/lol-settings/v1/account/${category}`)
}

/**
 * PatchLolSettingsV1AccountByCategory
 * @url PATCH /lol-settings/v1/account/{category}
 * @param params - 路径参数: { category }
 */
export function patchLolSettingsV1AccountByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return patch(`/lol-settings/v1/account/${category}`)
}

/**
 * PutLolSettingsV1AccountByCategory
 * @url PUT /lol-settings/v1/account/{category}
 * @param params - 路径参数: { category }
 */
export function putLolSettingsV1AccountByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return put(`/lol-settings/v1/account/${category}`)
}

/**
 * GetLolSettingsV1LocalByCategory
 * @url GET /lol-settings/v1/local/{category}
 * @param params - 路径参数: { category }
 */
export function getLolSettingsV1LocalByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return get(`/lol-settings/v1/local/${category}`)
}

/**
 * PatchLolSettingsV1LocalByCategory
 * @url PATCH /lol-settings/v1/local/{category}
 * @param params - 路径参数: { category }
 */
export function patchLolSettingsV1LocalByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return patch(`/lol-settings/v1/local/${category}`)
}

/**
 * GetLolSettingsV2AccountByPpTypeByCategory
 * @url GET /lol-settings/v2/account/{ppType}/{category}
 * @param params - 路径参数: { ppType, category }
 */
export function getLolSettingsV2AccountByPpTypeByCategory(params: { ppType: string | number, category: string | number }): Promise<unknown> {
  const { ppType, category } = params

  return get(`/lol-settings/v2/account/${ppType}/${category}`)
}

/**
 * PatchLolSettingsV2AccountByPpTypeByCategory
 * @url PATCH /lol-settings/v2/account/{ppType}/{category}
 * @param params - 路径参数: { ppType, category }
 */
export function patchLolSettingsV2AccountByPpTypeByCategory(params: { ppType: string | number, category: string | number }): Promise<unknown> {
  const { ppType, category } = params

  return patch(`/lol-settings/v2/account/${ppType}/${category}`)
}

/**
 * PutLolSettingsV2AccountByPpTypeByCategory
 * @url PUT /lol-settings/v2/account/{ppType}/{category}
 * @param params - 路径参数: { ppType, category }
 */
export function putLolSettingsV2AccountByPpTypeByCategory(params: { ppType: string | number, category: string | number }): Promise<unknown> {
  const { ppType, category } = params

  return put(`/lol-settings/v2/account/${ppType}/${category}`)
}

/**
 * GetLolSettingsV2DidresetByPpType
 * @url GET /lol-settings/v2/didreset/{ppType}
 * @param params - 路径参数: { ppType }
 */
export function getLolSettingsV2DidresetByPpType(params: { ppType: string | number }): Promise<unknown> {
  const { ppType } = params

  return get(`/lol-settings/v2/didreset/${ppType}`)
}

/**
 * GetLolSettingsV2LocalByCategory
 * @url GET /lol-settings/v2/local/{category}
 * @param params - 路径参数: { category }
 */
export function getLolSettingsV2LocalByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return get(`/lol-settings/v2/local/${category}`)
}

/**
 * PatchLolSettingsV2LocalByCategory
 * @url PATCH /lol-settings/v2/local/{category}
 * @param params - 路径参数: { category }
 */
export function patchLolSettingsV2LocalByCategory(params: { category: string | number }): Promise<unknown> {
  const { category } = params

  return patch(`/lol-settings/v2/local/${category}`)
}

/**
 * GetLolSettingsV2Ready
 * @url GET /lol-settings/v2/ready
 */
export function getLolSettingsV2Ready(): Promise<unknown> {
  return get('/lol-settings/v2/ready')
}

/**
 * GetLolShutdownV1Notification
 * @url GET /lol-shutdown/v1/notification
 */
export function getLolShutdownV1Notification(): Promise<unknown> {
  return get('/lol-shutdown/v1/notification')
}

/**
 * GetLolSimpleDialogMessagesV1Messages
 * @url GET /lol-simple-dialog-messages/v1/messages
 */
export function getLolSimpleDialogMessagesV1Messages(): Promise<unknown> {
  return get('/lol-simple-dialog-messages/v1/messages')
}

/**
 * PostLolSimpleDialogMessagesV1Messages
 * @url POST /lol-simple-dialog-messages/v1/messages
 */
export function postLolSimpleDialogMessagesV1Messages(): Promise<unknown> {
  return post('/lol-simple-dialog-messages/v1/messages')
}

/**
 * DeleteLolSimpleDialogMessagesV1MessagesByMessageId
 * @url DELETE /lol-simple-dialog-messages/v1/messages/{messageId}
 * @param params - 路径参数: { messageId }
 */
export function deleteLolSimpleDialogMessagesV1MessagesByMessageId(params: { messageId: string | number }): Promise<unknown> {
  const { messageId } = params

  return del(`/lol-simple-dialog-messages/v1/messages/${messageId}`)
}

/**
 * GetLolSocialLeaderboardV1LeaderboardNextUpdateTime
 * @url GET /lol-social-leaderboard/v1/leaderboard-next-update-time
 * @param query - 查询参数: { queueType }
 */
export function getLolSocialLeaderboardV1LeaderboardNextUpdateTime(query: { queueType: 'NONE' | 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' | 'RANKED_TFT' | 'RANKED_TFT_TURBO' | 'RANKED_TFT_PAIRS' }): Promise<unknown> {
  return get('/lol-social-leaderboard/v1/leaderboard-next-update-time', query)
}

/**
 * GetLolSocialLeaderboardV1SocialLeaderboardData
 * @url GET /lol-social-leaderboard/v1/social-leaderboard-data
 * @param query - 查询参数: { queueType }
 */
export function getLolSocialLeaderboardV1SocialLeaderboardData(query: { queueType: 'NONE' | 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' | 'RANKED_TFT' | 'RANKED_TFT_TURBO' | 'RANKED_TFT_PAIRS' }): Promise<unknown> {
  return get('/lol-social-leaderboard/v1/social-leaderboard-data', query)
}

/**
 * PostLolSpectatorV1BuddySpectate
 * @url POST /lol-spectator/v1/buddy/spectate
 */
export function postLolSpectatorV1BuddySpectate(): Promise<unknown> {
  return post('/lol-spectator/v1/buddy/spectate')
}

/**
 * GetLolSpectatorV1Spectate
 * @url GET /lol-spectator/v1/spectate
 */
export function getLolSpectatorV1Spectate(): Promise<unknown> {
  return get('/lol-spectator/v1/spectate')
}

/**
 * PostLolSpectatorV1SpectateLaunch
 * @url POST /lol-spectator/v1/spectate/launch
 */
export function postLolSpectatorV1SpectateLaunch(): Promise<unknown> {
  return post('/lol-spectator/v1/spectate/launch')
}

/**
 * DeleteLolStatstonesV1EogNotifications
 * @url DELETE /lol-statstones/v1/eog-notifications
 */
export function deleteLolStatstonesV1EogNotifications(): Promise<unknown> {
  return del('/lol-statstones/v1/eog-notifications')
}

/**
 * GetLolStatstonesV1EogNotifications
 * @url GET /lol-statstones/v1/eog-notifications
 */
export function getLolStatstonesV1EogNotifications(): Promise<unknown> {
  return get('/lol-statstones/v1/eog-notifications')
}

/**
 * DeleteLolStatstonesV1EogNotificationsByKey
 * @url DELETE /lol-statstones/v1/eog-notifications/{key}
 * @param params - 路径参数: { key }
 */
export function deleteLolStatstonesV1EogNotificationsByKey(params: { key: string | number }): Promise<unknown> {
  const { key } = params

  return del(`/lol-statstones/v1/eog-notifications/${key}`)
}

/**
 * GetLolStatstonesV1FeaturedChampionStatstonesByChampionItemId
 * @url GET /lol-statstones/v1/featured-champion-statstones/{championItemId}
 * @param params - 路径参数: { championItemId }
 */
export function getLolStatstonesV1FeaturedChampionStatstonesByChampionItemId(params: { championItemId: string | number }): Promise<unknown> {
  const { championItemId } = params

  return get(`/lol-statstones/v1/featured-champion-statstones/${championItemId}`)
}

/**
 * PostLolStatstonesV1FeaturedChampionStatstonesByChampionItemIdByStatstoneId
 * @url POST /lol-statstones/v1/featured-champion-statstones/{championItemId}/{statstoneId}
 * @param params - 路径参数: { championItemId, statstoneId }
 */
export function postLolStatstonesV1FeaturedChampionStatstonesByChampionItemIdByStatstoneId(params: { championItemId: string | number, statstoneId: string | number }): Promise<unknown> {
  const { championItemId, statstoneId } = params

  return post(`/lol-statstones/v1/featured-champion-statstones/${championItemId}/${statstoneId}`)
}

/**
 * GetLolStatstonesV1ProfileSummaryByPuuid
 * @url GET /lol-statstones/v1/profile-summary/{puuid}
 * @param params - 路径参数: { puuid }
 */
export function getLolStatstonesV1ProfileSummaryByPuuid(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-statstones/v1/profile-summary/${puuid}`)
}

/**
 * GetLolStatstonesV1StatstoneByContentIdOwned
 * @url GET /lol-statstones/v1/statstone/{contentId}/owned
 * @param params - 路径参数: { contentId }
 */
export function getLolStatstonesV1StatstoneByContentIdOwned(params: { contentId: string | number }): Promise<unknown> {
  const { contentId } = params

  return get(`/lol-statstones/v1/statstone/${contentId}/owned`)
}

/**
 * GetLolStatstonesV1StatstonesEnabledQueueIds
 * @url GET /lol-statstones/v1/statstones-enabled-queue-ids
 */
export function getLolStatstonesV1StatstonesEnabledQueueIds(): Promise<unknown> {
  return get('/lol-statstones/v1/statstones-enabled-queue-ids')
}

/**
 * DeleteLolStatstonesV1VignetteNotifications
 * @url DELETE /lol-statstones/v1/vignette-notifications
 */
export function deleteLolStatstonesV1VignetteNotifications(): Promise<unknown> {
  return del('/lol-statstones/v1/vignette-notifications')
}

/**
 * GetLolStatstonesV1VignetteNotifications
 * @url GET /lol-statstones/v1/vignette-notifications
 */
export function getLolStatstonesV1VignetteNotifications(): Promise<unknown> {
  return get('/lol-statstones/v1/vignette-notifications')
}

/**
 * DeleteLolStatstonesV1VignetteNotificationsByKey
 * @url DELETE /lol-statstones/v1/vignette-notifications/{key}
 * @param params - 路径参数: { key }
 */
export function deleteLolStatstonesV1VignetteNotificationsByKey(params: { key: string | number }): Promise<unknown> {
  const { key } = params

  return del(`/lol-statstones/v1/vignette-notifications/${key}`)
}

/**
 * GetLolStatstonesV2PlayerStatstonesSelfByChampionItemId
 * @url GET /lol-statstones/v2/player-statstones-self/{championItemId}
 * @param params - 路径参数: { championItemId }
 */
export function getLolStatstonesV2PlayerStatstonesSelfByChampionItemId(params: { championItemId: string | number }): Promise<unknown> {
  const { championItemId } = params

  return get(`/lol-statstones/v2/player-statstones-self/${championItemId}`)
}

/**
 * GetLolStatstonesV2PlayerSummarySelf
 * @url GET /lol-statstones/v2/player-summary-self
 */
export function getLolStatstonesV2PlayerSummarySelf(): Promise<unknown> {
  return get('/lol-statstones/v2/player-summary-self')
}

/**
 * GetLolStoreV1Catalog
 * @url GET /lol-store/v1/catalog
 * @param query - 查询参数: { inventoryType, itemId }
 */
export function getLolStoreV1Catalog(query: { inventoryType?: string[]; itemId?: number[] }): Promise<unknown> {
  return get('/lol-store/v1/catalog', query)
}

/**
 * GetLolStoreV1CatalogSales
 * @url GET /lol-store/v1/catalog/sales
 */
export function getLolStoreV1CatalogSales(): Promise<unknown> {
  return get('/lol-store/v1/catalog/sales')
}

/**
 * GetLolStoreV1CatalogByInventoryType
 * @url GET /lol-store/v1/catalog/{inventoryType}
 * @param params - 路径参数: { inventoryType }
 * @param query - 查询参数: { itemIds }
 */
export function getLolStoreV1CatalogByInventoryType(params: { inventoryType: string | number }, query: { itemIds: number[] }): Promise<unknown> {
  const { inventoryType } = params

  return get(`/lol-store/v1/catalog/${inventoryType}`, query)
}

/**
 * GetLolStoreV1CatalogByInstanceIds
 * @url GET /lol-store/v1/catalogByInstanceIds
 * @param query - 查询参数: { instanceIds }
 */
export function getLolStoreV1CatalogByInstanceIds(query: { instanceIds: string[] }): Promise<unknown> {
  return get('/lol-store/v1/catalogByInstanceIds', query)
}

/**
 * GetLolStoreV1GetStoreUrl
 * @url GET /lol-store/v1/getStoreUrl
 */
export function getLolStoreV1GetStoreUrl(): Promise<unknown> {
  return get('/lol-store/v1/getStoreUrl')
}

/**
 * GetLolStoreV1Giftablefriends
 * @url GET /lol-store/v1/giftablefriends
 */
export function getLolStoreV1Giftablefriends(): Promise<unknown> {
  return get('/lol-store/v1/giftablefriends')
}

/**
 * GetLolStoreV1ItemKeysFromInstanceIds
 * @url GET /lol-store/v1/itemKeysFromInstanceIds
 * @param query - 查询参数: { instanceIds }
 */
export function getLolStoreV1ItemKeysFromInstanceIds(query: { instanceIds: string[] }): Promise<unknown> {
  return get('/lol-store/v1/itemKeysFromInstanceIds', query)
}

/**
 * GetLolStoreV1ItemKeysFromOfferIds
 * @url GET /lol-store/v1/itemKeysFromOfferIds
 * @param query - 查询参数: { offerIds }
 */
export function getLolStoreV1ItemKeysFromOfferIds(query: { offerIds: string[] }): Promise<unknown> {
  return get('/lol-store/v1/itemKeysFromOfferIds', query)
}

/**
 * GetLolStoreV1LastPage
 * @url GET /lol-store/v1/lastPage
 */
export function getLolStoreV1LastPage(): Promise<unknown> {
  return get('/lol-store/v1/lastPage')
}

/**
 * PostLolStoreV1LastPage
 * @url POST /lol-store/v1/lastPage
 */
export function postLolStoreV1LastPage(): Promise<unknown> {
  return post('/lol-store/v1/lastPage')
}

/**
 * PostLolStoreV1NotificationsAcknowledge
 * @url POST /lol-store/v1/notifications/acknowledge
 */
export function postLolStoreV1NotificationsAcknowledge(): Promise<unknown> {
  return post('/lol-store/v1/notifications/acknowledge')
}

/**
 * GetLolStoreV1Offers
 * @url GET /lol-store/v1/offers
 * @param query - 查询参数: { inventoryTypeUUIDs }
 */
export function getLolStoreV1Offers(query: { inventoryTypeUUIDs?: string[] }): Promise<unknown> {
  return get('/lol-store/v1/offers', query)
}

/**
 * GetLolStoreV1OrderNotifications
 * @url GET /lol-store/v1/order-notifications
 */
export function getLolStoreV1OrderNotifications(): Promise<unknown> {
  return get('/lol-store/v1/order-notifications')
}

/**
 * GetLolStoreV1OrderNotificationsById
 * @url GET /lol-store/v1/order-notifications/{id}
 * @param params - 路径参数: { id }
 */
export function getLolStoreV1OrderNotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/lol-store/v1/order-notifications/${id}`)
}

/**
 * GetLolStoreV1PaymentDetails
 * @url GET /lol-store/v1/paymentDetails
 * @param query - 查询参数: { action, giftRecipientAccountId, giftMessage }
 */
export function getLolStoreV1PaymentDetails(query: { action: string; giftRecipientAccountId?: number; giftMessage?: string }): Promise<unknown> {
  return get('/lol-store/v1/paymentDetails', query)
}

/**
 * GetLolStoreV1SkinsBySkinId
 * @url GET /lol-store/v1/skins/{skinId}
 * @param params - 路径参数: { skinId }
 */
export function getLolStoreV1SkinsBySkinId(params: { skinId: string | number }): Promise<unknown> {
  const { skinId } = params

  return get(`/lol-store/v1/skins/${skinId}`)
}

/**
 * PostLolStoreV1SkinsBySkinIdPurchase
 * @url POST /lol-store/v1/skins/{skinId}/purchase
 * @param params - 路径参数: { skinId }
 */
export function postLolStoreV1SkinsBySkinIdPurchase(params: { skinId: string | number }): Promise<unknown> {
  const { skinId } = params

  return post(`/lol-store/v1/skins/${skinId}/purchase`)
}

/**
 * GetLolStoreV1Status
 * @url GET /lol-store/v1/status
 */
export function getLolStoreV1Status(): Promise<unknown> {
  return get('/lol-store/v1/status')
}

/**
 * GetLolStoreV1StoreReady
 * @url GET /lol-store/v1/store-ready
 */
export function getLolStoreV1StoreReady(): Promise<unknown> {
  return get('/lol-store/v1/store-ready')
}

/**
 * GetLolStoreV1Wallet
 * @url GET /lol-store/v1/wallet
 */
export function getLolStoreV1Wallet(): Promise<unknown> {
  return get('/lol-store/v1/wallet')
}

/**
 * GetLolStoreV1ByPageType
 * @url GET /lol-store/v1/{pageType}
 * @param params - 路径参数: { pageType }
 */
export function getLolStoreV1ByPageType(params: { pageType: string | number }): Promise<unknown> {
  const { pageType } = params

  return get(`/lol-store/v1/${pageType}`)
}

/**
 * PostLolSuggestedPlayersV1ReportedPlayer
 * @url POST /lol-suggested-players/v1/reported-player
 */
export function postLolSuggestedPlayersV1ReportedPlayer(): Promise<unknown> {
  return post('/lol-suggested-players/v1/reported-player')
}

/**
 * GetLolSuggestedPlayersV1SuggestedPlayers
 * @url GET /lol-suggested-players/v1/suggested-players
 */
export function getLolSuggestedPlayersV1SuggestedPlayers(): Promise<unknown> {
  return get('/lol-suggested-players/v1/suggested-players')
}

/**
 * DeleteLolSuggestedPlayersV1SuggestedPlayersBySummonerId
 * @url DELETE /lol-suggested-players/v1/suggested-players/{summonerId}
 * @param params - 路径参数: { summonerId }
 */
export function deleteLolSuggestedPlayersV1SuggestedPlayersBySummonerId(params: { summonerId: string | number }): Promise<unknown> {
  const { summonerId } = params

  return del(`/lol-suggested-players/v1/suggested-players/${summonerId}`)
}

/**
 * PostLolSuggestedPlayersV1VictoriousComrade
 * @url POST /lol-suggested-players/v1/victorious-comrade
 */
export function postLolSuggestedPlayersV1VictoriousComrade(): Promise<unknown> {
  return post('/lol-suggested-players/v1/victorious-comrade')
}

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

/**
 * GetLolTastesV1Ready
 * @url GET /lol-tastes/v1/ready
 */
export function getLolTastesV1Ready(): Promise<unknown> {
  return get('/lol-tastes/v1/ready')
}

/**
 * GetLolTastesV1SkinsModel
 * @url GET /lol-tastes/v1/skins-model
 */
export function getLolTastesV1SkinsModel(): Promise<unknown> {
  return get('/lol-tastes/v1/skins-model')
}

/**
 * GetLolTftV1TftHubFooterColors
 * @url GET /lol-tft/v1/tft/hubFooterColors
 */
export function getLolTftV1TftHubFooterColors(): Promise<unknown> {
  return get('/lol-tft/v1/tft/hubFooterColors')
}

/**
 * GetLolTftV1TftStorePromos
 * @url GET /lol-tft/v1/tft/storePromos
 */
export function getLolTftV1TftStorePromos(): Promise<unknown> {
  return get('/lol-tft/v1/tft/storePromos')
}

/**
 * GetLolTftV2TftBattlepass
 * @url GET /lol-tft/v2/tft/battlepass
 */
export function getLolTftV2TftBattlepass(): Promise<unknown> {
  return get('/lol-tft/v2/tft/battlepass')
}

/**
 * GetLolTokenUpsellV1All
 * @url GET /lol-token-upsell/v1/all
 */
export function getLolTokenUpsellV1All(): Promise<unknown> {
  return get('/lol-token-upsell/v1/all')
}

/**
 * GetLolTrophiesV1CurrentSummonerTrophiesProfile
 * @url GET /lol-trophies/v1/current-summoner/trophies/profile
 */
export function getLolTrophiesV1CurrentSummonerTrophiesProfile(): Promise<unknown> {
  return get('/lol-trophies/v1/current-summoner/trophies/profile')
}

/**
 * GetLolTrophiesV1PlayersByPuuidTrophiesProfile
 * @url GET /lol-trophies/v1/players/{puuid}/trophies/profile
 * @param params - 路径参数: { puuid }
 */
export function getLolTrophiesV1PlayersByPuuidTrophiesProfile(params: { puuid: string | number }): Promise<unknown> {
  const { puuid } = params

  return get(`/lol-trophies/v1/players/${puuid}/trophies/profile`)
}

/**
 * GetPatcherV1Notifications
 * @url GET /patcher/v1/notifications
 */
export function getPatcherV1Notifications(): Promise<unknown> {
  return get('/patcher/v1/notifications')
}

/**
 * PostPatcherV1Notifications
 * @url POST /patcher/v1/notifications
 * @param query - 查询参数: { notificationId }
 */
export function postPatcherV1Notifications(query: { notificationId: 'UnspecifiedError' | 'ConnectionError' | 'MissingFilesError' | 'FailedToWriteError' | 'WillRestoreClientBackupOnRestart' | 'DidRestoreClientBackup' | 'NotEnoughDiskSpace' | 'BrokenPermissions' }): Promise<unknown> {
  return post('/patcher/v1/notifications', query)
}

/**
 * DeletePatcherV1NotificationsById
 * @url DELETE /patcher/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function deletePatcherV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/patcher/v1/notifications/${id}`)
}

/**
 * GetPatcherV1P2pStatus
 * @url GET /patcher/v1/p2p/status
 */
export function getPatcherV1P2pStatus(): Promise<unknown> {
  return get('/patcher/v1/p2p/status')
}

/**
 * PatchPatcherV1P2pStatus
 * @url PATCH /patcher/v1/p2p/status
 */
export function patchPatcherV1P2pStatus(): Promise<unknown> {
  return patch('/patcher/v1/p2p/status')
}

/**
 * GetPatcherV1Products
 * @url GET /patcher/v1/products
 */
export function getPatcherV1Products(): Promise<unknown> {
  return get('/patcher/v1/products')
}

/**
 * PostPatcherV1ProductsLeagueOfLegendsFullRepairRequest
 * @url POST /patcher/v1/products/league_of_legends/full-repair-request
 */
export function postPatcherV1ProductsLeagueOfLegendsFullRepairRequest(): Promise<unknown> {
  return post('/patcher/v1/products/league_of_legends/full-repair-request')
}

/**
 * DeletePatcherV1ProductsByProductId
 * @url DELETE /patcher/v1/products/{product-id}
 */
export function deletePatcherV1ProductsByProductId(): Promise<unknown> {
  return del('/patcher/v1/products/{product-id}')
}

/**
 * PostPatcherV1ProductsByProductIdDetectCorruptionRequest
 * @url POST /patcher/v1/products/{product-id}/detect-corruption-request
 */
export function postPatcherV1ProductsByProductIdDetectCorruptionRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/detect-corruption-request')
}

/**
 * PostPatcherV1ProductsByProductIdPartialRepairRequest
 * @url POST /patcher/v1/products/{product-id}/partial-repair-request
 */
export function postPatcherV1ProductsByProductIdPartialRepairRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/partial-repair-request')
}

/**
 * GetPatcherV1ProductsByProductIdPaths
 * @url GET /patcher/v1/products/{product-id}/paths
 */
export function getPatcherV1ProductsByProductIdPaths(): Promise<unknown> {
  return get('/patcher/v1/products/{product-id}/paths')
}

/**
 * PostPatcherV1ProductsByProductIdSignalStartPatchingDelayed
 * @url POST /patcher/v1/products/{product-id}/signal-start-patching-delayed
 */
export function postPatcherV1ProductsByProductIdSignalStartPatchingDelayed(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/signal-start-patching-delayed')
}

/**
 * PostPatcherV1ProductsByProductIdStartCheckingRequest
 * @url POST /patcher/v1/products/{product-id}/start-checking-request
 */
export function postPatcherV1ProductsByProductIdStartCheckingRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/start-checking-request')
}

/**
 * PostPatcherV1ProductsByProductIdStartPatchingRequest
 * @url POST /patcher/v1/products/{product-id}/start-patching-request
 */
export function postPatcherV1ProductsByProductIdStartPatchingRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/start-patching-request')
}

/**
 * GetPatcherV1ProductsByProductIdState
 * @url GET /patcher/v1/products/{product-id}/state
 */
export function getPatcherV1ProductsByProductIdState(): Promise<unknown> {
  return get('/patcher/v1/products/{product-id}/state')
}

/**
 * PostPatcherV1ProductsByProductIdStopCheckingRequest
 * @url POST /patcher/v1/products/{product-id}/stop-checking-request
 */
export function postPatcherV1ProductsByProductIdStopCheckingRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/stop-checking-request')
}

/**
 * PostPatcherV1ProductsByProductIdStopPatchingRequest
 * @url POST /patcher/v1/products/{product-id}/stop-patching-request
 */
export function postPatcherV1ProductsByProductIdStopPatchingRequest(): Promise<unknown> {
  return post('/patcher/v1/products/{product-id}/stop-patching-request')
}

/**
 * GetPatcherV1ProductsByProductIdTags
 * @url GET /patcher/v1/products/{product-id}/tags
 */
export function getPatcherV1ProductsByProductIdTags(): Promise<unknown> {
  return get('/patcher/v1/products/{product-id}/tags')
}

/**
 * PutPatcherV1SelfUpdateRestart
 * @url PUT /patcher/v1/self-update-restart
 * @param query - 查询参数: { forceRestartOnSelfUpdate }
 */
export function putPatcherV1SelfUpdateRestart(query: { forceRestartOnSelfUpdate: boolean }): Promise<unknown> {
  return put('/patcher/v1/self-update-restart', query)
}

/**
 * GetPatcherV1Status
 * @url GET /patcher/v1/status
 */
export function getPatcherV1Status(): Promise<unknown> {
  return get('/patcher/v1/status')
}

/**
 * PutPatcherV1Ux
 * @url PUT /patcher/v1/ux
 */
export function putPatcherV1Ux(): Promise<unknown> {
  return put('/patcher/v1/ux')
}

/**
 * PostPaymentsV1PmcStartUrl
 * @url POST /payments/v1/pmc-start-url
 */
export function postPaymentsV1PmcStartUrl(): Promise<unknown> {
  return post('/payments/v1/pmc-start-url')
}

/**
 * GetPlayerNotificationsV1Config
 * @url GET /player-notifications/v1/config
 */
export function getPlayerNotificationsV1Config(): Promise<unknown> {
  return get('/player-notifications/v1/config')
}

/**
 * PutPlayerNotificationsV1Config
 * @url PUT /player-notifications/v1/config
 */
export function putPlayerNotificationsV1Config(): Promise<unknown> {
  return put('/player-notifications/v1/config')
}

/**
 * GetPlayerNotificationsV1Notifications
 * @url GET /player-notifications/v1/notifications
 */
export function getPlayerNotificationsV1Notifications(): Promise<unknown> {
  return get('/player-notifications/v1/notifications')
}

/**
 * PostPlayerNotificationsV1Notifications
 * @url POST /player-notifications/v1/notifications
 */
export function postPlayerNotificationsV1Notifications(): Promise<unknown> {
  return post('/player-notifications/v1/notifications')
}

/**
 * DeletePlayerNotificationsV1NotificationsById
 * @url DELETE /player-notifications/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function deletePlayerNotificationsV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/player-notifications/v1/notifications/${id}`)
}

/**
 * GetPlayerNotificationsV1NotificationsById
 * @url GET /player-notifications/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function getPlayerNotificationsV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/player-notifications/v1/notifications/${id}`)
}

/**
 * PutPlayerNotificationsV1NotificationsById
 * @url PUT /player-notifications/v1/notifications/{id}
 * @param params - 路径参数: { id }
 */
export function putPlayerNotificationsV1NotificationsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return put(`/player-notifications/v1/notifications/${id}`)
}

/**
 * Get the status of the external plugin connection.
 * @url GET /plugin-manager/v1/external-plugins/availability
 */
export function getPluginManagerV1ExternalPluginsAvailability(): Promise<unknown> {
  return get('/plugin-manager/v1/external-plugins/availability')
}

/**
 * Get the status of the plugin manager.
 * @url GET /plugin-manager/v1/status
 */
export function getPluginManagerV1Status(): Promise<unknown> {
  return get('/plugin-manager/v1/status')
}

/**
 * Get all plugin descriptions.
 * @url GET /plugin-manager/v2/descriptions
 */
export function getPluginManagerV2Descriptions(): Promise<unknown> {
  return get('/plugin-manager/v2/descriptions')
}

/**
 * Get a plugin description.
 * @url GET /plugin-manager/v2/descriptions/{plugin}
 * @param params - 路径参数: { plugin }
 */
export function getPluginManagerV2DescriptionsByPlugin(params: { plugin: string | number }): Promise<unknown> {
  const { plugin } = params

  return get(`/plugin-manager/v2/descriptions/${plugin}`)
}

/**
 * Get diagnostic information for all plugins.
 * @url GET /plugin-manager/v2/plugins
 */
export function getPluginManagerV2Plugins(): Promise<unknown> {
  return get('/plugin-manager/v2/plugins')
}

/**
 * Get diagnostic information for a single plugin.
 * @url GET /plugin-manager/v2/plugins/{plugin}
 * @param params - 路径参数: { plugin }
 */
export function getPluginManagerV2PluginsByPlugin(params: { plugin: string | number }): Promise<unknown> {
  const { plugin } = params

  return get(`/plugin-manager/v2/plugins/${plugin}`)
}

/**
 * Get the plugin manifest.
 * @url GET /plugin-manager/v3/plugins-manifest
 */
export function getPluginManagerV3PluginsManifest(): Promise<unknown> {
  return get('/plugin-manager/v3/plugins-manifest')
}

/**
 * DeleteRiotMessagingServiceV1Connect
 * @url DELETE /riot-messaging-service/v1/connect
 */
export function deleteRiotMessagingServiceV1Connect(): Promise<unknown> {
  return del('/riot-messaging-service/v1/connect')
}

/**
 * PostRiotMessagingServiceV1Connect
 * @url POST /riot-messaging-service/v1/connect
 */
export function postRiotMessagingServiceV1Connect(): Promise<unknown> {
  return post('/riot-messaging-service/v1/connect')
}

/**
 * DeleteRiotMessagingServiceV1Entitlements
 * @url DELETE /riot-messaging-service/v1/entitlements
 */
export function deleteRiotMessagingServiceV1Entitlements(): Promise<unknown> {
  return del('/riot-messaging-service/v1/entitlements')
}

/**
 * PostRiotMessagingServiceV1Entitlements
 * @url POST /riot-messaging-service/v1/entitlements
 */
export function postRiotMessagingServiceV1Entitlements(): Promise<unknown> {
  return post('/riot-messaging-service/v1/entitlements')
}

/**
 * GetRiotMessagingServiceV1MessageByA
 * @url GET /riot-messaging-service/v1/message/{a}
 * @param params - 路径参数: { a }
 */
export function getRiotMessagingServiceV1MessageByA(params: { a: string | number }): Promise<unknown> {
  const { a } = params

  return get(`/riot-messaging-service/v1/message/${a}`)
}

/**
 * GetRiotMessagingServiceV1MessageByAByB
 * @url GET /riot-messaging-service/v1/message/{a}/{b}
 * @param params - 路径参数: { a, b }
 */
export function getRiotMessagingServiceV1MessageByAByB(params: { a: string | number, b: string | number }): Promise<unknown> {
  const { a, b } = params

  return get(`/riot-messaging-service/v1/message/${a}/${b}`)
}

/**
 * GetRiotMessagingServiceV1MessageByAByBByC
 * @url GET /riot-messaging-service/v1/message/{a}/{b}/{c}
 * @param params - 路径参数: { a, b, c }
 */
export function getRiotMessagingServiceV1MessageByAByBByC(params: { a: string | number, b: string | number, c: string | number }): Promise<unknown> {
  const { a, b, c } = params

  return get(`/riot-messaging-service/v1/message/${a}/${b}/${c}`)
}

/**
 * GetRiotMessagingServiceV1MessageByAByBByCByD
 * @url GET /riot-messaging-service/v1/message/{a}/{b}/{c}/{d}
 * @param params - 路径参数: { a, b, c, d }
 */
export function getRiotMessagingServiceV1MessageByAByBByCByD(params: { a: string | number, b: string | number, c: string | number, d: string | number }): Promise<unknown> {
  const { a, b, c, d } = params

  return get(`/riot-messaging-service/v1/message/${a}/${b}/${c}/${d}`)
}

/**
 * GetRiotMessagingServiceV1MessageByAByBByCByDByE
 * @url GET /riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}
 * @param params - 路径参数: { a, b, c, d, e }
 */
export function getRiotMessagingServiceV1MessageByAByBByCByDByE(params: { a: string | number, b: string | number, c: string | number, d: string | number, e: string | number }): Promise<unknown> {
  const { a, b, c, d, e } = params

  return get(`/riot-messaging-service/v1/message/${a}/${b}/${c}/${d}/${e}`)
}

/**
 * GetRiotMessagingServiceV1MessageByAByBByCByDByEByF
 * @url GET /riot-messaging-service/v1/message/{a}/{b}/{c}/{d}/{e}/{f}
 * @param params - 路径参数: { a, b, c, d, e, f }
 */
export function getRiotMessagingServiceV1MessageByAByBByCByDByEByF(params: { a: string | number, b: string | number, c: string | number, d: string | number, e: string | number, f: string | number }): Promise<unknown> {
  const { a, b, c, d, e, f } = params

  return get(`/riot-messaging-service/v1/message/${a}/${b}/${c}/${d}/${e}/${f}`)
}

/**
 * DeleteRiotMessagingServiceV1Session
 * @url DELETE /riot-messaging-service/v1/session
 */
export function deleteRiotMessagingServiceV1Session(): Promise<unknown> {
  return del('/riot-messaging-service/v1/session')
}

/**
 * GetRiotMessagingServiceV1Session
 * @url GET /riot-messaging-service/v1/session
 */
export function getRiotMessagingServiceV1Session(): Promise<unknown> {
  return get('/riot-messaging-service/v1/session')
}

/**
 * GetRiotMessagingServiceV1State
 * @url GET /riot-messaging-service/v1/state
 */
export function getRiotMessagingServiceV1State(): Promise<unknown> {
  return get('/riot-messaging-service/v1/state')
}

/**
 * PostSanitizerV1ContainsSanitized
 * @url POST /sanitizer/v1/containsSanitized
 */
export function postSanitizerV1ContainsSanitized(): Promise<unknown> {
  return post('/sanitizer/v1/containsSanitized')
}

/**
 * PostSanitizerV1Sanitize
 * @url POST /sanitizer/v1/sanitize
 */
export function postSanitizerV1Sanitize(): Promise<unknown> {
  return post('/sanitizer/v1/sanitize')
}

/**
 * GetSanitizerV1Status
 * @url GET /sanitizer/v1/status
 */
export function getSanitizerV1Status(): Promise<unknown> {
  return get('/sanitizer/v1/status')
}

/**
 * GetVoiceChatV1AudioProperties
 * @url GET /voice-chat/v1/audio-properties
 */
export function getVoiceChatV1AudioProperties(): Promise<unknown> {
  return get('/voice-chat/v1/audio-properties')
}

/**
 * GetVoiceChatV1CallStatsAggregate
 * @url GET /voice-chat/v1/call-stats/aggregate
 */
export function getVoiceChatV1CallStatsAggregate(): Promise<unknown> {
  return get('/voice-chat/v1/call-stats/aggregate')
}

/**
 * GetVoiceChatV1CallStatsById
 * @url GET /voice-chat/v1/call-stats/{id}
 * @param params - 路径参数: { id }
 */
export function getVoiceChatV1CallStatsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/voice-chat/v1/call-stats/${id}`)
}

/**
 * GetVoiceChatV1CodecSettings
 * @url GET /voice-chat/v1/codec-settings
 */
export function getVoiceChatV1CodecSettings(): Promise<unknown> {
  return get('/voice-chat/v1/codec-settings')
}

/**
 * PutVoiceChatV1CodecSettings
 * @url PUT /voice-chat/v1/codec-settings
 */
export function putVoiceChatV1CodecSettings(): Promise<unknown> {
  return put('/voice-chat/v1/codec-settings')
}

/**
 * GetVoiceChatV1Config
 * @url GET /voice-chat/v1/config
 */
export function getVoiceChatV1Config(): Promise<unknown> {
  return get('/voice-chat/v1/config')
}

/**
 * GetVoiceChatV1Errors
 * @url GET /voice-chat/v1/errors
 */
export function getVoiceChatV1Errors(): Promise<unknown> {
  return get('/voice-chat/v1/errors')
}

/**
 * GetVoiceChatV1PushToTalk
 * @url GET /voice-chat/v1/push-to-talk
 */
export function getVoiceChatV1PushToTalk(): Promise<unknown> {
  return get('/voice-chat/v1/push-to-talk')
}

/**
 * PutVoiceChatV1PushToTalk
 * @url PUT /voice-chat/v1/push-to-talk
 */
export function putVoiceChatV1PushToTalk(): Promise<unknown> {
  return put('/voice-chat/v1/push-to-talk')
}

/**
 * PostVoiceChatV1PushToTalkCheckAvailable
 * @url POST /voice-chat/v1/push-to-talk/check-available
 */
export function postVoiceChatV1PushToTalkCheckAvailable(): Promise<unknown> {
  return post('/voice-chat/v1/push-to-talk/check-available')
}

/**
 * GetVoiceChatV2DevicesCapture
 * @url GET /voice-chat/v2/devices/capture
 */
export function getVoiceChatV2DevicesCapture(): Promise<unknown> {
  return get('/voice-chat/v2/devices/capture')
}

/**
 * GetVoiceChatV2DevicesCapturePermission
 * @url GET /voice-chat/v2/devices/capture/permission
 */
export function getVoiceChatV2DevicesCapturePermission(): Promise<unknown> {
  return get('/voice-chat/v2/devices/capture/permission')
}

/**
 * PutVoiceChatV2DevicesCapturePromptForPermission
 * @url PUT /voice-chat/v2/devices/capture/prompt-for-permission
 */
export function putVoiceChatV2DevicesCapturePromptForPermission(): Promise<unknown> {
  return put('/voice-chat/v2/devices/capture/prompt-for-permission')
}

/**
 * GetVoiceChatV2DevicesRender
 * @url GET /voice-chat/v2/devices/render
 */
export function getVoiceChatV2DevicesRender(): Promise<unknown> {
  return get('/voice-chat/v2/devices/render')
}

/**
 * DeleteVoiceChatV2Sessions
 * @url DELETE /voice-chat/v2/sessions
 */
export function deleteVoiceChatV2Sessions(): Promise<unknown> {
  return del('/voice-chat/v2/sessions')
}

/**
 * GetVoiceChatV2Sessions
 * @url GET /voice-chat/v2/sessions
 */
export function getVoiceChatV2Sessions(): Promise<unknown> {
  return get('/voice-chat/v2/sessions')
}

/**
 * PostVoiceChatV2Sessions
 * @url POST /voice-chat/v2/sessions
 */
export function postVoiceChatV2Sessions(): Promise<unknown> {
  return post('/voice-chat/v2/sessions')
}

/**
 * DeleteVoiceChatV2SessionsById
 * @url DELETE /voice-chat/v2/sessions/{id}
 * @param params - 路径参数: { id }
 */
export function deleteVoiceChatV2SessionsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return del(`/voice-chat/v2/sessions/${id}`)
}

/**
 * GetVoiceChatV2SessionsById
 * @url GET /voice-chat/v2/sessions/{id}
 * @param params - 路径参数: { id }
 */
export function getVoiceChatV2SessionsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return get(`/voice-chat/v2/sessions/${id}`)
}

/**
 * PostVoiceChatV2SessionsById
 * @url POST /voice-chat/v2/sessions/{id}
 * @param params - 路径参数: { id }
 */
export function postVoiceChatV2SessionsById(params: { id: string | number }): Promise<unknown> {
  const { id } = params

  return post(`/voice-chat/v2/sessions/${id}`)
}

/**
 * GetVoiceChatV2SessionsBySessionIdParticipantsByParticipantId
 * @url GET /voice-chat/v2/sessions/{sessionId}/participants/{participantId}
 * @param params - 路径参数: { sessionId, participantId }
 */
export function getVoiceChatV2SessionsBySessionIdParticipantsByParticipantId(params: { sessionId: string | number, participantId: string | number }): Promise<unknown> {
  const { sessionId, participantId } = params

  return get(`/voice-chat/v2/sessions/${sessionId}/participants/${participantId}`)
}

/**
 * PutVoiceChatV2SessionsBySessionIdParticipantsByParticipantId
 * @url PUT /voice-chat/v2/sessions/{sessionId}/participants/{participantId}
 * @param params - 路径参数: { sessionId, participantId }
 */
export function putVoiceChatV2SessionsBySessionIdParticipantsByParticipantId(params: { sessionId: string | number, participantId: string | number }): Promise<unknown> {
  const { sessionId, participantId } = params

  return put(`/voice-chat/v2/sessions/${sessionId}/participants/${participantId}`)
}

/**
 * GetVoiceChatV2Settings
 * @url GET /voice-chat/v2/settings
 */
export function getVoiceChatV2Settings(): Promise<unknown> {
  return get('/voice-chat/v2/settings')
}

/**
 * PutVoiceChatV2Settings
 * @url PUT /voice-chat/v2/settings
 */
export function putVoiceChatV2Settings(): Promise<unknown> {
  return put('/voice-chat/v2/settings')
}

/**
 * GetVoiceChatV2State
 * @url GET /voice-chat/v2/state
 */
export function getVoiceChatV2State(): Promise<unknown> {
  return get('/voice-chat/v2/state')
}

/**
 * Download a backend asset
 * @url GET /{plugin}/assets/{path}
 * @param params - 路径参数: { plugin, path }
 */
export function getByPluginAssetsByPath(params: { plugin: string | number, path: string | number }): Promise<unknown> {
  const { plugin, path } = params

  return get(`/${plugin}/assets/${path}`)
}

/**
 * Download the header for a backend asset
 * @url HEAD /{plugin}/assets/{path}
 * @param params - 路径参数: { plugin, path }
 */
export function headByPluginAssetsByPath(params: { plugin: string | number, path: string | number }): Promise<unknown> {
  const { plugin, path } = params

  return Promise.reject(new Error('Unsupported method: HEAD'))
}
