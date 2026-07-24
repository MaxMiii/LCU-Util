/**
 * Gameflow API 模块 (自动生成)
 * 45 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

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
