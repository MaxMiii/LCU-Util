/**
 * Endofgame API 模块 (自动生成)
 * 8 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

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
