/**
 * Gamequeues API 模块 (自动生成)
 * 7 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

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
