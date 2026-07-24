/**
 * Other API 模块 (自动生成)
 * 98 个端点
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
 * GetLolAntiAddictionV1AntiAddictionToken
 * @url GET /lol-anti-addiction/v1/anti-addiction-token
 */
export function getLolAntiAddictionV1AntiAddictionToken(): Promise<unknown> {
  return get('/lol-anti-addiction/v1/anti-addiction-token')
}

/**
 * GetEntitlementsV1Token
 * @url GET /entitlements/v1/token
 */
export function getEntitlementsV1Token(): Promise<unknown> {
  return get('/entitlements/v1/token')
}

/**
 * GetLolActiveBoostsV1ActiveBoosts
 * @url GET /lol-active-boosts/v1/active-boosts
 */
export function getLolActiveBoostsV1ActiveBoosts(): Promise<unknown> {
  return get('/lol-active-boosts/v1/active-boosts')
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
 * PostPaymentsV1PmcStartUrl
 * @url POST /payments/v1/pmc-start-url
 */
export function postPaymentsV1PmcStartUrl(): Promise<unknown> {
  return post('/payments/v1/pmc-start-url')
}

/**
 * Registers the process and includes it with the performance information.
 * @url POST /performance/v1/process/{processId}
 * @param params - 路径参数: { processId }
 */
export function postPerformanceV1ProcessByProcessId(params: { processId: string | number }): Promise<unknown> {
  const { processId } = params

  return post(`/performance/v1/process/${processId}`)
}

/**
 * Returns the various performance information for the cef processes
 * @url GET /performance/v1/report
 */
export function getPerformanceV1Report(): Promise<unknown> {
  return get('/performance/v1/report')
}

/**
 * Restarts the CPU timing information and returns the results from PerfReportProcesses
 * @url POST /performance/v1/report/restart
 * @param query - 查询参数: { sampleLength, sampleCount }
 */
export function postPerformanceV1ReportRestart(query: { sampleLength?: number; sampleCount?: number }): Promise<unknown> {
  return post('/performance/v1/report/restart', query)
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
 * Get the plugin manifest.
 * @url GET /plugin-manager/v3/plugins-manifest
 */
export function getPluginManagerV3PluginsManifest(): Promise<unknown> {
  return get('/plugin-manager/v3/plugins-manifest')
}

/**
 * Adds or Updates a Metric
 * @url POST /riotclient/addorupdatemetric
 * @param query - 查询参数: { group, object, name, value }
 */
export function postRiotclientAddorupdatemetric(query: { group: string; object: string; name: string; value: number }): Promise<unknown> {
  return post('/riotclient/addorupdatemetric', query)
}

/**
 * Adds or Updates a Metric
 * @url POST /riotclient/addorupdatemetric
 * @param query - 查询参数: { group, object, name, value }
 */
export function postRiotclientAddorupdatemetric(query: { group: string; object: string; name: string; value: number }): Promise<unknown> {
  return post('/riotclient/addorupdatemetric', query)
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
