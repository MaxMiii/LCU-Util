/**
 * Maps API 模块 (自动生成)
 * 6 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

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
