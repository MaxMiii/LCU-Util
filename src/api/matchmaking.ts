/**
 * Matchmaking API 模块 (自动生成)
 * 9 个端点
 */

import { get, post, put, del, patch } from '@/utils/request'

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
