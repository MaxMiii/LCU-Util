/**
 * Missions API 模块 (自动生成)
 * 8 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

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
 * GetLolTftV2TftBattlepass
 * @url GET /lol-tft/v2/tft/battlepass
 */
export function getLolTftV2TftBattlepass(): Promise<unknown> {
  return get('/lol-tft/v2/tft/battlepass')
}
