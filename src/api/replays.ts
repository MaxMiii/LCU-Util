/**
 * Replays API 模块 (自动生成)
 * 10 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

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
